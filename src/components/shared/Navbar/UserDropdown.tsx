"use client";

import { useAuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const UserDropdown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { logout } = useAuthContext();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown when clicking a link
  const handleItemClick = () => setIsVisible(false);

  return (
    <section className="font-poppins relative" ref={dropdownRef}>
      <div
        onClick={() => setIsVisible(!isVisible)}
        className="size-8 lg:size-12 flex justify-center items-center bg-[#465A63] text-white lg:text-lg font-semibold lg:font-bold rounded-full border cursor-pointer"
      >
        M
      </div>
      {isVisible && (
        <div className="absolute right-0 bg-white p-4 w-40 rounded-lg shadow-smooth z-50">
          <ul>
            <Link href="/profile" onClick={handleItemClick}>
              <li className="p-2 px-4 hover:bg-stone-50 rounded-lg cursor-pointer">
                Profile
              </li>
            </Link>
            <Link href="/settings/account-settings" onClick={handleItemClick}>
              <li className="p-2 px-4 hover:bg-stone-50 rounded-lg cursor-pointer">
                Settings
              </li>
            </Link>
            <hr className="my-2" />
            <li
              onClick={() => {
                logout();
                handleItemClick(); // Close dropdown on logout
              }}
              className="text-red-500 p-2 px-4 hover:bg-stone-50 rounded-lg cursor-pointer"
            >
              Log out
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default UserDropdown;
