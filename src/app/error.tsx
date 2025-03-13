/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center ">
      <div className=" flex items-center justify-center flex-col lg:w-[600px] gap-4">
        <div>
          <img src="/error.svg" alt="" className=" w-[400px] h-[350px] " />
        </div>

        <p className=" text-secondary text-[26px] font-bold"> Oh no... </p>
        <p className=" text-[16px] text-[#797979] font-normal text-center tracking-wide ">
          We encountered a small system error. Please try again shortly. Our
          team is on it!
        </p>
        <Link href={"/"}>
          <button className=" text-primary text-[16px] font-medium underline underline-offset-2  ">
            Go Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
