"use client";

import Link from "next/link";
import { useState } from "react";

const UserDropdown = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section className="font-poppins relative">
      <div
        onClick={() => setIsVisible(!isVisible)}
        className="size-8 lg:size-12 flex justify-center items-center bg-[#465A63] text-white lg:text-lg font-semibold lg:font-bold rounded-full border cursor-pointer"
      >
        M
      </div>
      {isVisible && (
        <div className="absolute right-0 bg-white p-4 w-40 rounded-lg shadow-smooth">
          <ul className="">
            <li className="p-2 px-4 hover:bg-stone-50 rounded-lg cursor-pointer">
              <Link href={"/profile"}>Profile</Link>
            </li>
            <li className="p-2 px-4 hover:bg-stone-50 rounded-lg cursor-pointer">
              <Link href={"/settings/profile-details"}>Settings</Link>
            </li>
            <hr className="my-2" />
            <li className="text-red-500 p-2 px-4 hover:bg-stone-50 rounded-lg cursor-pointer">
              Log out
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default UserDropdown;
