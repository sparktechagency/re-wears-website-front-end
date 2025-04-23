"use client";
import Login from "@/components/ui/auth/Login/Login";
// import { ConfigProvider, Segmented } from 'antd';
import React, { useState } from "react";
import Register from "../Register/Register";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const MainLoginPage = () => {
  const [selectedTab, setSelectedTab] = useState("LOGIN");
  return (
    <div className="max-w-md mx-auto px-4 my-16 lg:my-10 ">
      {/* page title */}
      <div className=" flex flex-col items-center gap-1 mb-5">
        <p className=" text-[20px] font-bold text-[#000000] tracking-wide">
          {" "}
          Sell without fees.{" "}
        </p>
        <p className=" lg:text-[20px] text-[20px] font-bold text-[#000000] tracking-wide">
          {" "}
          Embrace sustainable fashion.{" "}
        </p>
      </div>

      <div className="items-center justify-center w-full">
        {/* tab buttons */}
        <div className="bg-white p-[8px] border border-[#ABABAB] rounded-full text-primary">
          <div className="w-full flex items-center justify-center rounded-full overflow-hidden">
            {["LOGIN", "REGISTER"].map((tab) => (
              <button
                key={tab}
                className={`py-[8px] text-lg font-medium transition-all duration-300 rounded-full  h-[44px] w-full ${
                  selectedTab === tab
                    ? "bg-[#9d977a] text-white"
                    : "bg-white text-primary"
                }`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* google and apple button section */}
        <div className="flex flex-col items-center justify-center gap-3 my-5 border-b border-[#ABABAB] pb-5 w-full ">
          <button className="flex items-center justify-center w-full border border-[#000000] rounded-full text-[#000000] gap-3  h-[50px]">
            <span>
              <FaApple size={26} />
            </span>
            <span> Continue with Apple </span>
          </button>

          <button className="flex items-center justify-center w-full border border-[#000000] rounded-full text-[#000000] gap-3  h-[50px]">
            <span>
              <FcGoogle size={24} />
            </span>
            <span> Continue with Google </span>
          </button>
        </div>

        {/* input fields section */}
        <div className="flex items-center justify-center">
          {selectedTab === "LOGIN" ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
};

export default MainLoginPage;
