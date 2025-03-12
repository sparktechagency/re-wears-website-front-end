import FillButton from "@/components/shared/FillButton";
import Link from "next/link";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const ConfirmChangePassword = () => {
  return (
    <section className="w-full max-w-xl mx-auto px-4 py-32 grid gap-8">
      <h1 className=" text-secondary text-[25px] font-bold text-center">
        Change password
      </h1>

      <div className=" bg-[#F3E7D8] px-[83px] py-[32px] rounded-xl">
        <div className=" flex flex-col items-center gap-3">
          <p className="">
            {" "}
            <FiCheckCircle size={41} color="#9D977A" />{" "}
          </p>
          <p className=" text-[16px] font-normal text-primary text-center">
            {" "}
            Your password has been changed successfully{" "}
          </p>
        </div>
      </div>

      <Link href={"/login"}>
        <FillButton className="uppercase w-full mx-auto">
          Continue to log in
        </FillButton>
      </Link>
    </section>
  );
};

export default ConfirmChangePassword;
