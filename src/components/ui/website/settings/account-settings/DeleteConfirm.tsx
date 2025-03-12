import React from "react";

const DeleteConfirm = () => {
  return (
    <div className="flex flex-col items-center gap-3 max-w-lg mx-auto px-4 my-16 lg:my-32">
      <p className="text-secondary text-[22px] font-bold">Account Deleted</p>
      <p className="text-[16px] text-[#797979] font-normal text-center ">
        {" "}
        While we&apos;re sorry to see you leave, remember that you&apos;re
        welcome back anytime!{" "}
      </p>
    </div>
  );
};

export default DeleteConfirm;
