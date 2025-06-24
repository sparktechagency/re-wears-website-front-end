"use client";

import OutlineButton from "@/components/shared/OutlineButton";
import { useGetSearchParams } from "@/helpers/getSearchParams";
import { ConfigProvider, Popover, Rate } from "antd";
import { Camera } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoLocationSharp, IoSendSharp } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import MakeOfferModal from "./MakeOfferModal";
import { myFetch } from "@/helpers/myFetch";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import Image from "next/image";
import { config, IMAGE_URL } from "@/config/env-config";
import { formatDistanceToNow } from "date-fns";
import { revalidateTags } from "@/helpers/revalidateTags";
import toast from "react-hot-toast";
import { io } from "socket.io-client";

const Chat = ({ setIsChatVisible }: { setIsChatVisible: any }) => {
  const [open, setOpen] = useState(false);
  const updateSearchParams = useUpdateSearchParams();
  const { recipient: partnerId, room } = useGetSearchParams();
  const [chatsData, setChatsData] = useState([]);
  const [partnerData, setPartnerData] = useState<any>(null);
  const [lastseen, setLastseen] = useState("");
  const [trigger, setTrigger] = useState(false); // to trigger re-render
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  console.log(chatsData);

  // Fetch partner data
  useEffect(() => {
    const fetchPartner = async () => {
      try {
        const response = await myFetch(`/users/${partnerId}`, {
          cache: "no-store",
        });
        setPartnerData(response?.data);
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
            method: "POST",
            cache: "no-store",
          });
          updateSearchParams({ room: res?.data?._id });
        }
        const response = await myFetch(`/chat/${room}`, {
          cache: "no-store",
          tags: ["chats"],
        });
        setChatsData(response?.data);
      } catch (error) {
        console.error("Error fetching chat data:", error);
      }
    };
    fetchChats();
  }, [room, partnerId, trigger]);

  // handle live chatting
  const socket = useMemo(() => io(IMAGE_URL), []);
  socket.on("connect", () => {
    console.log("Connected to socket");
  });
  useEffect(() => {
    const eventName = `getMessages::${partnerId}`;
    if (!partnerId) return;

    const handleGetMessage = () => {
      console.log("New message received");
      revalidateTags(["chats"]);
      setTrigger((prev) => !prev);
    };

    socket.on(eventName, handleGetMessage);

    return () => {
      socket.off(eventName, handleGetMessage);
    };
  }, [socket, partnerId]);

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

  // Handle sending a message
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

    try {
      const response = await myFetch(`/chat`, {
        method: "POST",
        body: formData,
      });
      if (response?.success) {
        revalidateTags(["chats"]);
        setTrigger(!trigger); // Trigger re-render to fetch new messages
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

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleBackToList = () => {
    setIsChatVisible(false);
  };

  return (
    <section className="lg:h-[calc(60vh)] h-auto">
      {/* header */}
      <div className="h-auto">
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
                  width={40}
                  height={40}
                  className="rounded-full lg:h-[40px] h-[36px] lg:w-[40px] w-[36px]"
                />
              )}
              <Link
                href={`/profile?id=${partnerData?.user?._id}`}
                className="lg:text-[20px] text-[14px] text-primary font-bold "
              >
                {partnerData?.user?.firstName} {partnerData?.user?.lastName}
              </Link>
            </div>

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

        {/* offers */}
        <div className="flex flex-col md:flex-row justify-between gap-4 p-4 border border-[#DCDCDC] bg-[#f8f8f8] rounded-lg mt-4">
          <div className="flex items-center gap-4">
            <img
              src="/user1.png"
              alt=""
              className=" lg:w-[70px] w-[64px] lg:h-[76px] h-[70px] rounded-lg "
            />

            <div className="flex flex-col  items-start gap-2">
              <p className="text-[16px] text-secondary font-bold ">
                Lorem Ipsum
              </p>
              <p className="text-[14px] text-secondary font-normal ">
                AED 45.00
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between lg:justify-end gap-x-4">
            <div onClick={() => setOpen(true)}>
              <OutlineButton className="!px-4 lg:text-sm text-[12px] uppercase w-full">
                Make an offer
              </OutlineButton>
            </div>

            <Link href={"/order"}>
              <Popover content=" Changed your mind? Head to the item page to release it for someone else to re-wear.">
                <button className=" h-12  bg-primary text-white font-normal rounded-full  transition-all duration-300 hover:bg-[#D04555]  !px-4 lg:text-sm text-[12px] uppercase">
                  Reserve Now
                </button>
              </Popover>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white w-full rounded-lg relative">
        {/* Chat messages */}
        <div className="py-6 lg:px-8 px-3 lg:h-[calc(60vh)] h-[calc(55vh)] overflow-y-scroll no-scrollbar pb-16">
          {chatsData?.map(
            (item: any, index) =>
              item?.text && (
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
                      />
                    )}
                    <p className="text-sm">{item?.text}</p>
                    <p className="text-end text-xs text-[#918d8d]">
                      {new Date(item?.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
        {/* input section */}
        <div className="absolute bottom-0 w-full py-1  bg-white border-t border-[#DCDCDC]">
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
              <textarea
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

      {/* <MakeOfferModal open={open} setOpen={setOpen} /> */}
    </section>
  );
};

export default Chat;
