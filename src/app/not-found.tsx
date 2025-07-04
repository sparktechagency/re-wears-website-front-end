/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex items-center justify-center ">
      <div className=" flex items-center justify-center flex-col lg:w-[600px] gap-4">
        <div>
          <img src="/not-found.svg" alt="" className=" w-[400px] h-[350px] " />
        </div>

        <p className=" text-secondary text-[26px] font-bold">
          {" "}
          Oops! Page Not Found
        </p>
        <p className=" text-[16px] text-[#797979] font-normal text-center tracking-wide ">
          The page you are looking for is not found or temporarily unavailable.
        </p>
        <Link href={"/"}>
          <button className=" text-primary text-[16px] font-medium underline underline-offset-2">
            Go Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
