"use client";

import { config, IMAGE_URL } from "@/config/env-config";
import { useAuthContext } from "@/contexts/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const UserDropdown = ({ profile }: { profile: any }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { logout } = useAuthContext();
  const router = useRouter();
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
      <Image
        src={
          profile?.image?.includes("http")
            ? profile?.image
            : `${IMAGE_URL}${profile?.image}`
        }
        alt="profile-img"
        width={60}
        height={60}
        className="rounded-full cursor-pointer"
        onClick={() => setIsVisible(!isVisible)}
      />

      {isVisible && (
        <div className="absolute right-0 bg-white p-4 w-40 rounded-lg shadow-smooth z-50">
          <ul>
            <Link href="/profile" onClick={handleItemClick}>
              <li className="p-2 px-4 hover:bg-stone-50 rounded-lg cursor-pointer">
                Profile
              </li>
            </Link>
            <Link href="/settings/profile-details" onClick={handleItemClick}>
              <li className="p-2 px-4 hover:bg-stone-50 rounded-lg cursor-pointer">
                Settings
              </li>
            </Link>
            <hr className="my-2" />
            <li
              onClick={() => {
                logout();
                handleItemClick(); // Close dropdown on logout
                router.push("/login");
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
