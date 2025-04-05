/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useState } from "react";
//  import { FiSearch } from "react-icons/fi";
//  import { Input } from "antd";
import { IoLocationSharp, IoSendSharp } from "react-icons/io5";
import Image from "next/image";
import { IoMdArrowRoundBack } from "react-icons/io";
import OutlineButton from "@/components/shared/OutlineButton";
import MakeOfferModal from "./MakeOfferModal";
import Link from "next/link";
import { Camera } from "lucide-react";
import { ConfigProvider, Popover, Rate } from "antd";
import { MdOutlineWatchLater } from "react-icons/md";

type TMessageList = {
  id: number;
  name: string;
  address: string;
  time: string;
  text: string;
  image: string;
};

const messageList = [
  {
    id: 1,
    name: "Naziya Sultana",
    address: "New York, USA",
    time: "10:00 AM",
    text: "Hello , How are you ?",
    image: "/user1.png",
  },
  {
    id: 2,
    name: "Mithila",
    time: "10:00 AM",
    address: "New York, USA",
    text: "Hello , How are you ?",
    image: "/user2.png",
  },
  {
    id: 3,
    name: "Khushi Akter",
    time: "10:00 AM",
    address: "New York, USA",
    text: "Hello , How are you ?",
    image: "/user3.png",
  },
  {
    id: 4,
    name: "Naziya Sultana",
    time: "10:00 AM",
    address: "New York, USA",
    text: "Hello , How are you ?",
    image: "/user1.png",
  },
  {
    id: 5,
    name: "Naziya Sultana",
    time: "10:00 AM",
    address: "New York, USA",
    text: "Hello , How are you ?",
    image: "/user2.png",
  },
  {
    id: 6,
    name: "Naziya Sultana",
    time: "10:00 AM",
    address: "New York, USA",
    text: "Hello , How are you ?",
    image: "/user3.png",
  },
  {
    id: 7,
    name: "Naziya Sultana",
    time: "10:00 AM",
    address: "New York, USA",
    text: "Hello , How are you ?",
    image: "/user1.png",
  },
  {
    id: 8,
    name: "Naziya Sultana",
    time: "10:00 AM",
    address: "New York, USA",
    text: "Hello , How are you ?",
    image: "/user2.png",
  },
];

const messageContent = [
  {
    id: 1,
    message: "How can i help you?",
    date: "27 April 2024",
  },
  {
    id: 2,
    message: "what are the amenities?",
    date: "27 April 2024",
  },
  {
    id: 3,
    message: "there are so many amenities.",
    date: "27 April 2024",
  },
  {
    id: 4,
    message: "i want to book the room",
    date: "27 April 2024",
  },
  {
    id: 5,
    message: "sure.",
    date: "27 April 2024",
  },
  {
    id: 6,
    message: "how much for the room per week?",
    date: "27 April 2024",
  },
  {
    id: 7,
    message: "200$",
    date: "27 April 2024",
  },
  {
    id: 8,
    message: "How can i help you?",
    date: "27 April 2024",
  },
  {
    id: 9,
    message: "what are the amenities?",
    date: "27 April 2024",
  },
  {
    id: 10,
    message: "How can i help you?",
    date: "27 April 2024",
  },
  {
    id: 11,
    message: "what are the amenities?",
    date: "27 April 2024",
  },
];
const Inbox = () => {
  const [person, setPerson] = useState<TMessageList | null>({
    id: 1,
    name: "Naziya Sultana",
    address: "New York, USA",
    time: "10:00 AM",
    text: "Hello , How are you ?",
    image: "/user1.png",
  });
  const [personId, setpersonId] = useState<number | null>(1);
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleMessage = (value: TMessageList) => {
    setPerson(value);
    setpersonId(value?.id);
    setIsChatVisible(true);
  };

  const handleBackToList = () => {
    setIsChatVisible(false);
  };

  return (
    <div className=" py-[50px]  bg-[#FDFDFD]">
      <div className="container mt-4 ">
        <div className="grid grid-cols-12 gap-4">
          {/* Message List */}
          <div
            className={`lg:col-span-4 col-span-12 bg-white  rounded-xl px-2 py-4 ${isChatVisible ? "hidden lg:block" : ""
              }`}
            style={{
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.15)",
              zIndex: 10,
            }}
          >
            {/* search  */}
            <div
              className="mx-auto"
              style={{
                width: "100%",
                height: "40px",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            >
              {/* <Input
               placeholder="Search..."
               prefix={<FiSearch size={14} color="#868FA0" />}
               style={{
                 width: "100%",
                 height: "100%",
                 fontSize: "14px",
               }}
               size="middle"
             /> */}

              <p className="text-secondary text-[18px] font-bold px-4">
                {" "}
                Inbox{" "}
              </p>
            </div>

            <div className="flex flex-col gap-1 h-[calc(80vh)] overflow-y-scroll no-scrollbar">
              {messageList.map((value: TMessageList, index) => (
                <div key={index} onClick={() => handleMessage(value)}>
                  <div
                    className={`flex justify-between  px-4 py-3 rounded-lg mb-2 ${personId === value?.id ? "bg-[#ECECEC]" : "bg-[#F8F8F8]"
                      }`}
                  >
                    <div className="flex items-center gap-1">
                      <Image
                        src={value?.image}
                        alt=""
                        width={60}
                        height={60}
                        className="rounded-full h-[50px] w-[50px]"
                      />
                      <div className="flex-col gap-1">
                        <p className="text-[16px] text-secondary font-bold">
                          {value?.name}
                        </p>
                        <p className="text-[#6A6A6A] text-[14px]">
                          {value?.text}
                        </p>
                      </div>
                    </div>
                    <p className="text-[#6A6A6A] text-[15px]">{value?.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Section */}
          <div
            className={`lg:col-span-8 col-span-12 bg-white  rounded-xl p-2 ${isChatVisible ? "block" : "hidden lg:block"
              }`}
            style={{
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.15)",
              zIndex: 10,
            }}
          >
            <section>
              {/* header */}
              <div>
                <div className="flex items-center justify-between lg:gap-8 gap-0 lg:p-4  border-b border-[#DCDCDC] ">
                  <div className=" lg:w-full flex flex-col lg:flex-row lg:items-center  justify-between ">
                    <div className="flex items-center lg:justify-center gap-2">
                      <button
                        className="lg:hidden text-primary"
                        onClick={handleBackToList}
                      >
                        <IoMdArrowRoundBack size={20} />
                      </button>
                      <img src={person?.image} alt="" className="rounded-full lg:h-[40px] h-[36px] lg:w-[40px] w-[36px]" />
                      <Link
                        href={"/profile"}
                        className="lg:text-[20px] text-[14px] text-primary font-bold "
                      >
                        {person?.name}
                      </Link>
                    </div>

                    <div className="flex   items-center gap-1 ">
                      <ConfigProvider
                        theme={{
                          components: {
                            Rate: {
                              starColor: "#E6A817"
                            },
                          },
                        }}
                      >
                        <div className="scale-[0.7] lg:scale-100"> {/* 👈 scaling based on screen size */}
                          <Rate disabled defaultValue={4} />
                        </div>
                      </ConfigProvider>
                      <p className=" lg:text-[14px] text-[10px] ">20 reviews</p>   
                    </div>
                  </div>

                  <div className=" lg:w-full flex flex-col lg:flex-row items-center justify-between gap-2">

                    <div className="flex items-center lg:gap-2"> <span className="scale-[0.7] lg:scale-100"> <IoLocationSharp size={22} color="#9D977A" />  </span> <span className=" lg:text-[14px] text-[10px]" > Dubai, UAE  </span></div>
                    <div className="flex items-center lg:gap-2"> <span  className="scale-[0.7] lg:scale-100"> <MdOutlineWatchLater size={22} color="#9D977A" />  </span> <span className=" lg:text-[14px] text-[10px]" > Last seen 10 hours ago  </span></div>
                  </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between gap-4 p-4 border border-[#DCDCDC] bg-[#f8f8f8] rounded-lg mt-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="/user1.png"
                      alt=""
                      className=" lg:w-[70px] w-[64px] lg:h-[76px] h-[70px] rounded-lg "
                    />

                    <div className="flex flex-col  items-start gap-2">
                      <p className="text-[16px] text-secondary font-bold ">
                        Lorem Ipsum{" "}
                      </p>
                      <p className="text-[14px] text-secondary font-normal ">
                        {" "}
                        AED 45.00{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-x-4">
                    <div onClick={() => setOpen(true)}>
                      {" "}
                      <OutlineButton className="!px-6 lg:text-sm text-[12px] uppercase">
                        Make an offer
                      </OutlineButton>{" "}
                    </div>

                    <Link href={"/order"}>
                      {" "}
                      <Popover content=" Changed your mind? Head to the item page to release it for someone else to re-wear." >
                        <button className=" h-12  bg-primary text-white font-normal rounded-full  transition-all duration-300 hover:bg-[#D04555]  !px-6 lg:text-sm text-[12px] uppercase">
                          Reserve Now
                        </button>{" "}
                      </Popover>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white w-full rounded-lg relative">
                {/* Chat messages */}
                <div className="py-6 lg:px-8 px-3 h-[calc(70vh)] overflow-y-scroll no-scrollbar pb-16">
                  {messageContent.map((value, index) => (
                    <div
                      key={index}
                      className={`flex mb-5 w-full ${index % 2 === 0
                        ? "items-end justify-end"
                        : "items-start justify-start"
                        }`}
                    >
                      <div
                        className={`lg:w-3/5 w-2/3 lg:px-4 px-2 py-3 flex-col gap-4 ${index % 2 === 0
                          ? "border bg-[#F8F8F8] rounded-t-xl rounded-bl-xl"
                          : "border border-[#dcdcdc] rounded-t-xl rounded-br-xl"
                          }`}
                      >
                        <p>{value?.message}</p>
                        <p className="text-end text-[12px] text-[#918d8d]">
                          {value?.date}
                        </p>
                      </div>
                    </div>
                  ))}
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
                        type="file"
                        ref={fileInputRef} // Reference to the file input
                        className="hidden" // Hide the default file input
                      />
                    </div>
                    <div className="flex justify-between items-center gap-4 w-full relative">
                      <textarea
                        className="w-full h-[48px] resize-none py-2 rounded-l-full px-4 rounded-r-full border bg-[#F8F8F8] border-[#DCDCDC] placeholder:text-[#797979]"
                        placeholder="Write a message here"
                      />
                      <button className="h-[40px] w-[40px] flex justify-center items-center absolute right-4">
                        <IoSendSharp size={28} className="text-primary" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <MakeOfferModal open={open} setOpen={setOpen} />
    </div>
  );
};
export default Inbox;
