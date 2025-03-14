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
        <div className="absolute right-0 bg-white p-4 w-40 rounded-lg shadow-smooth z-50">
          <ul className="">
            <Link href={"/settings/profile-details"}>
              <li className="p-2 px-4 hover:bg-stone-50 rounded-lg cursor-pointer">
                Profile
              </li>
            </Link>
            <Link href={"/settings/account-settings"}>
              <li className="p-2 px-4 hover:bg-stone-50 rounded-lg cursor-pointer">
                Settings
              </li>
            </Link>
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
