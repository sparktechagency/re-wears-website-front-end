"use client";

import { useGetSearchParams } from "@/helpers/getSearchParams";
import { ConfigProvider, Rate } from "antd";
import { Camera, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoLocationSharp, IoSendSharp } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { myFetch } from "@/helpers/myFetch";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import Image from "next/image";
import { IMAGE_URL } from "@/config/env-config";
import { formatDistanceToNow } from "date-fns";
import { revalidateTags } from "@/helpers/revalidateTags";
import toast from "react-hot-toast";
import { io } from "socket.io-client";
import ProductInfo from "./ProductInfo";
import FillButton from "@/components/shared/FillButton";
import OutlineButton from "@/components/shared/OutlineButton";

const Chat = ({ setIsChatVisible }: { setIsChatVisible: any }) => {
  const updateSearchParams = useUpdateSearchParams();
  const { recipient: partnerId, room } = useGetSearchParams();
  const [chatsData, setChatsData] = useState([]);
  const [partnerData, setPartnerData] = useState<any>(null);
  const [profileData, setProfileData] = useState<any>(null);
  const [lastseen, setLastseen] = useState("");
  const [refetch, setRefetch] = useState(false); // to trigger re-render
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  // Fetch partner data
  useEffect(() => {
    const fetchPartner = async () => {
      try {
        const response = await myFetch(`/users/${partnerId}`, {
          // fetch partner by partnerId
          cache: "no-store",
        });
        setPartnerData(response?.data);
        const profileRes = await myFetch(`/users/profile`, {
          tags: ["Profile"],
          cache: "no-store",
        });
        setProfileData(profileRes?.data);
      } catch (error) {
        console.error("Error fetching chat data:", error);
      }
    };
    fetchPartner();
  }, [partnerId]);

  // Fetch chat messages and room details
  useEffect(() => {
    const fetchChats = async () => {
      try {
        if (!room) {
          const res = await myFetch(`/room/${partnerId}`, {
            // fetch room by partnerId
            method: "POST",
            cache: "no-store",
          });
          updateSearchParams({ room: res?.data?._id });
        }
        const response = await myFetch(`/chat/${room}`, {
          // fetch messages by room
          cache: "no-store",
          tags: ["chats"],
        });
        setChatsData(response?.data);
      } catch (error) {
        console.error("Error fetching chat data:", error);
      }
    };
    fetchChats();
  }, [room, partnerId, refetch]);

  // handle live chatting
  const socket = useMemo(() => io(IMAGE_URL), []);
  // socket.on("connect", () => {
  //   console.log("Connected to socket");
  // });

  useEffect(() => {
    const handleGetMessage = () => {
      revalidateTags(["chats"]);
      setRefetch((prev) => !prev);
    };

    const eventName = `getMessages::${profileData?._id}`;

    socket.on(eventName, handleGetMessage);
    return () => {
      socket.off(eventName, handleGetMessage);
    };
  }, [socket, profileData?._id]);

  // Update last seen time every minute
  useEffect(() => {
    const updateTime = () => {
      if (partnerData?.user?.lastSeenAt) {
        setLastseen(
          formatDistanceToNow(new Date(partnerData?.user?.lastSeenAt), {
            addSuffix: true,
          })
        );
      } else {
        setLastseen("Unknown");
      }
    };
    updateTime(); // initial
    const interval = setInterval(updateTime, 60000); // every minute
    return () => clearInterval(interval);
  }, [partnerData?.user?.lastSeenAt]);

  // Add ref for chat messages container
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  // Function to scroll to bottom
  const scrollToBottom = () => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  };

  // Scroll to bottom when chatsData changes
  useEffect(() => {
    scrollToBottom();
  }, [chatsData]);

  // Handle sending a message and file
  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const message = formData.get("text") as string;

    // ignore if message is empty and no file is selected
    if (!message.trim() && !file) {
      return;
    }
    if (!message.trim()) formData.delete("text");

    // Handle file upload if a file is selected
    if (file) {
      formData.append("image", file);
    }
    formData.append("chatId", room);
    formData.append("receiver", partnerId);
    formData.append("type", "text");

    try {
      const response = await myFetch(`/chat`, {
        method: "POST",
        body: formData,
      });
      if (response?.success) {
        revalidateTags(["chats"]);
        setRefetch(!refetch); // Trigger re-render to fetch new messages
        // Clear the textarea after sending the message
        const textarea = document.getElementById(
          "text"
        ) as HTMLTextAreaElement | null;
        if (textarea) textarea.value = "";
        setFile(null); // Clear the selected file
      } else {
        toast.error(response?.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // handle update offer
  const handleUpdateOffer = async (offerId: string, status: string) => {
    try {
      const response = await myFetch(`/offer/${offerId}`, {
        method: "PATCH",
        body: { offerStatus: status },
      });
      if (response?.success) {
        toast.success("Offer updated successfully");
        revalidateTags(["chats"]);
        setRefetch(!refetch); // Trigger re-render to fetch new messages
      } else {
        toast.error(response?.message || "Failed to update offer");
      }
    } catch (error) {
      console.error("Error updating offer:", error);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleBackToList = () => {
    setIsChatVisible(false);
  };

  // show not found message if no rooms are available
  if (!room) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-100px)]">
        <p className="text-secondary text-[18px] font-bold">
          No messages found
        </p>
      </div>
    );
  }

  return (
    <section className="h-full relative">
      {/* header */}
      <div className="">
        <div className="flex items-center justify-between lg:gap-8 gap-0 lg:p-4  border-b border-[#DCDCDC] ">
          <div className=" lg:w-full flex flex-col lg:flex-row lg:items-center  justify-between ">
            <div className="flex items-center lg:justify-center gap-2">
              <button
                className="lg:hidden text-primary"
                onClick={handleBackToList}
              >
                <IoMdArrowRoundBack size={20} />
              </button>
              {partnerData?.user?.image && (
                <Image
                  src={
                    partnerData?.user?.image?.includes("http")
                      ? partnerData?.user?.image
                      : `${IMAGE_URL}${partnerData?.user?.image}`
                  }
                  alt="user"
                  width={100}
                  height={100}
                  className="rounded-full size-12 lg:size-14"
                />
              )}
              <div>
                <Link
                  href={`/profile?id=${partnerData?.user?._id}`}
                  className="lg:text-[20px] text-[14px] text-primary font-bold "
                >
                  {partnerData?.user?.firstName} {partnerData?.user?.lastName}
                </Link>
                <Link
                  href={`/profile?id=${partnerData?.user?._id}`}
                  className="w-full"
                >
                  <div className="flex items-center justify-center lg:gap-2 py-1">
                    <ConfigProvider
                      theme={{
                        components: {
                          Rate: {
                            starColor: "#E6A817",
                          },
                        },
                        token: {
                          marginXS: 5,
                        },
                      }}
                    >
                      <Rate
                        disabled
                        defaultValue={partnerData?.customerAvgRating || 0}
                        className="scale-[0.7] lg:scale-100 mx-0"
                      />
                    </ConfigProvider>
                    <p className=" lg:text-[14px] text-[10px] ">
                      {partnerData?.reviewCount} reviews
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className=" lg:w-full flex flex-col lg:flex-row items-start justify-between gap-2.5 mt-1.5">
            <div className="flex items-center lg:gap-2">
              <span className="scale-[0.7] lg:scale-100">
                <IoLocationSharp size={22} color="#9D977A" />
              </span>
              <span className=" lg:text-[14px] text-[10px]">
                {partnerData?.user?.location || "Unknown"}
              </span>
            </div>
            <div className="flex items-center lg:gap-2">
              <span className="scale-[0.7] lg:scale-100">
                <MdOutlineWatchLater size={22} color="#9D977A" />
              </span>
              <span className=" lg:text-[14px] text-[10px]">
                Last seen {lastseen || "Unknown"}
              </span>
            </div>
          </div>
        </div>

        {/* product info */}
        <ProductInfo />
      </div>

      <div className="bg-white w-full rounded-lg">
        {/* Chat messages */}

        <div
          ref={chatMessagesRef}
          className="py-6 lg:px-8 px-3 h-[calc(70vh)] overflow-y-scroll no-scrollbar pb-16"
        >
          {chatsData?.map((item: any, index) => (
            <div
              key={index}
              className={`flex mb-5 w-full ${
                item?.sender === partnerId
                  ? "items-end justify-start"
                  : "items-start justify-end"
              }`}
            >
              <div
                className={`lg:px-4 px-2 py-3 flex-col gap-4 ${
                  item?.sender === partnerId
                    ? "border border-[#dcdcdc] rounded-t-xl rounded-br-xl"
                    : "border bg-[#F8F8F8] rounded-t-xl rounded-bl-xl"
                }`}
              >
                {item?.image && (
                  <Image
                    src={`${IMAGE_URL}${item?.image}`}
                    alt="image"
                    width={220}
                    height={100}
                    className="rounded"
                  />
                )}
                {item?.type === "text" && item?.text && (
                  <p className="text-sm mt-2">{item?.text}</p>
                )}
                {/* offer for buyers */}
                {item?.type === "offer" && item?.sender !== partnerId && (
                  <div className="grid gap-2 min-w-56">
                    <p className="flex items-center gap-2">
                      <span className="font-bold">AED {item?.price}</span>
                      <span className="font-medium line-through text-[#797979]">
                        AED {item?.offer?.product?.price}
                      </span>
                    </p>
                    {item?.offer?.offerStatus === "pending" ? (
                      <p>Offer sent!</p>
                    ) : item?.offer?.offerStatus === "accepted" ? (
                      <div className="flex flex-col gap-2">
                        <p>Accepted</p>
                        <p>
                          All set! Sort out payment and pickup on your terms.
                        </p>
                      </div>
                    ) : (
                      <p>Declined</p>
                    )}
                  </div>
                )}
                {/* offer for sellers */}
                {item?.type === "offer" && item?.sender === partnerId && (
                  <div className="grid gap-2 min-w-56">
                    <p className="flex items-center gap-2">
                      <span className="font-bold">AED {item?.price}</span>
                      <span className="font-medium line-through text-[#797979]">
                        AED {item?.offer?.product?.price}
                      </span>
                    </p>
                    {item?.offer?.offerStatus === "pending" ? (
                      <>
                        <FillButton
                          onClick={() =>
                            handleUpdateOffer(item?.offer?._id, "accepted")
                          }
                        >
                          Accept
                        </FillButton>
                        <OutlineButton
                          onClick={() =>
                            handleUpdateOffer(item?.offer?._id, "declined")
                          }
                        >
                          Decline
                        </OutlineButton>
                      </>
                    ) : item?.offer?.offerStatus === "accepted" ? (
                      <p>Accepted</p>
                    ) : (
                      <p>Declined</p>
                    )}
                  </div>
                )}

                <p className="text-end text-xs text-[#b0adad] mt-2">
                  {new Date(item?.createdAt).toLocaleDateString([], {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                  {`, `}
                  {new Date(item?.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* input section */}
        <div className="absolute bottom-0 w-full py-1  bg-white border-t border-[#DCDCDC]">
          {/* show the image preview */}
          {file && (
            <div className="w-fit flex items-center gap-2 px-3 py-2 relative">
              <Image
                src={URL.createObjectURL(file)}
                alt="Selected"
                width={80}
                height={80}
                className="rounded-md object-cover"
              />
              <button
                type="button"
                className="absolute top-1 right-1 bg-white rounded-full p-1 shadow"
                onClick={() => setFile(null)}
                style={{ lineHeight: 0 }}
                aria-label="Remove image"
              >
                <X size={16} className="text-red-500" />
              </button>
            </div>
          )}
          <div className="flex items-center justify-center gap-3 w-full px-3 mt-3">
            {/* file input */}
            <div className="flex items-center gap-4">
              <Camera
                size={24}
                strokeWidth={1.75}
                className="text-[#9B9B9B] cursor-pointer"
                onClick={handleIconClick} // Set up the click handler
              />
              <input
                accept="image/*"
                onChange={(e) => {
                  const selectedFile = e.target.files?.[0];
                  if (selectedFile) {
                    setFile(selectedFile); // Set the selected file
                  }
                }}
                type="file"
                ref={fileInputRef} // Reference to the file input
                className="hidden" // Hide the default file input
              />
            </div>
            <form
              onSubmit={handleSendMessage}
              className="flex justify-between items-center gap-4 w-full relative"
            >
              <input
                name="text"
                id="text"
                className="w-full h-[48px] resize-none py-2 rounded-l-full px-4 rounded-r-full border bg-[#F8F8F8] border-[#DCDCDC] placeholder:text-[#797979]"
                placeholder="Write a message here"
              />
              <button
                type="submit"
                className="h-[40px] w-[40px] flex justify-center items-center absolute right-4"
              >
                <IoSendSharp size={28} className="text-primary" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
