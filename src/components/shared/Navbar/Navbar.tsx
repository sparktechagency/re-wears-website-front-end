/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, Dropdown, MenuProps } from "antd";
import Link from "next/link";
import Image from "next/image";
import { Bell, Heart, Mail, Search, UserRound, XIcon } from "lucide-react";
import Notifications from "./Notifications";
import FillButton from "../FillButton";
import UserDropdown from "./UserDropdown";
import MenuVertical from "./NavmenuSmDevice/MenuVertical";
import { config } from "@/config/env-config";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Notifications />,
  },
];

// interface SubCategory {
//   icon: JSX.Element;
//   items: string[];
// }

interface SubCategories {
  [key: string]: SubCategory;
}

type ChildSubCategory = {
  _id: string;
  name: string;
};

type SubCategory = {
  _id: string;
  name: string;
  icon: string;
  childSubCategories: ChildSubCategory[];
};

// type Category = {
//   _id: string;
//   name: string;
//   createdAt: string;
//   updatedAt: string;
//   subCategories: SubCategory[];
// };

// const subCategories: SubCategories = {
//   All: {
//     icon: <TbGridDots color=" #9d977a" className="text-lg" />,
//     items: [
//       "Jeans",
//       "Tops & T-Shirts",
//       "Sweaters & Sweatshirts",
//       "Shorts",
//       "Sleepwear",
//       "Skirts",
//       "Suits & blazers",
//       "Activewear",
//       "Other men's clothing",
//       "Jumpsuits & rompers",
//     ],
//   },
//   Clothing: {
//     icon: <FaTshirt color=" #9d977a" className="text-lg" />,
//     items: ["Jackets", "Coats", "Parkas"],
//   },
//   Shoes: {
//     icon: <GiConverseShoe color=" #9d977a" className="text-lg" />,
//     items: ["Formal Suits", "Casual Blazers"],
//   },
//   Bags: {
//     icon: <SlHandbag color=" #9d977a" className="text-lg" />,
//     items: ["Chinos", "Dress Pants", "Joggers"],
//   },
//   Accessories: {
//     icon: <GiDoubleNecklace color=" #9d977a" className="text-lg" />,
//     items: ["Socks", "Boxers", "Briefs"],
//   },
//   Beauty: {
//     icon: <GiLipstick color=" #9d977a" className="text-lg" />,
//     items: ["Swim Shorts", "Swim Trunks"],
//   },
// };

const Navbar = ({
  profile,
  categoriesRes,
}: {
  profile: any;
  categoriesRes: Array<{ name?: string; [key: string]: any }>;
}) => {
  const [isSearchbarVisible, setSearchbarVisible] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  // const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
  //   "All"
  // );
  const [selectedSubCategory, setSelectedSubCategory] =
    useState<SubCategory | null>(null);

  // Remove singleCategories state and useEffect, compute directly
  const singleCategories = categoriesRes?.filter(
    (item) => item?.name?.toLowerCase() === selectedCategory
  );
  // Close search bar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      setSelectedSubCategory(null);
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchbarVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = (
    <Menu style={{ width: "650px", padding: "25px" }}>
      <div className="grid grid-cols-6 gap-3">
        {/* Categories List */}
        <div className="col-span-2 border-e border-gray-300">
          {singleCategories?.[0]?.subCategories?.map((sub: SubCategory) => (
            <div
              key={sub._id}
              onClick={() => setSelectedSubCategory(sub)}
              className={`flex items-center gap-2 cursor-pointer py-2 font-medium transition-all ${
                selectedSubCategory?._id === sub?._id
                  ? "text-black font-bold"
                  : "text-primary"
              }`}
            >
              <Image
                width={16}
                height={16}
                src={
                  sub?.icon
                    ? sub.icon.includes("http")
                      ? sub.icon
                      : `${config?.IMAGE_URL}${sub.icon}`
                    : "/placeholder.svg"
                }
                alt={sub.name || "subcategory"}
                className="w-4 h-4 object-contain"
                unoptimized
              />
              {sub.name}
            </div>
          ))}
        </div>

        {/* Items List (Only visible if a category is selected) */}
        <div className="col-span-4 ps-2 pe-6">
          {selectedSubCategory &&
          (selectedSubCategory as any)?.childSubCategories?.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-12 gap-y-3">
              {selectedSubCategory?.childSubCategories?.map((item) => (
                <div key={item._id} className="py-1">
                  <Link
                    href="/products"
                    className="text-[#797979] hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-400">Select a category to view items</div>
          )}
        </div>
      </div>
    </Menu>
  );

  return (
    <div
      ref={searchRef}
      className="w-full flex items-center justify-center "
      style={{ borderBottom: "1px solid #f0f0f0" }}
    >
      <div style={{ margin: "0 auto", padding: "0 16px" }} className="w-full">
        {/* top section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="py-6 md:px-8"
        >
          {/* Left section - Search */}
          <div
            className={`hidden lg:flex items-center gap-4 relative ${
              !profile ? "min-w-[270px]" : "min-w-[280px] "
            }`}
          >
            <Search
              size={20}
              strokeWidth={1.5}
              color="#797979"
              className="absolute"
            />
            <input
              placeholder="Search for items"
              className="p-8 py-3 text-base placeholder:text-[#797979] focus:outline-none border-b border-black"
            />
          </div>

          {/* Center section - Logo and Navigation */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <Link
              href="/"
              style={{
                fontWeight: 950,
                textDecoration: "none",
              }}
              className="text-primary text-3xl lg:text-4xl font-extrabold"
            >
              <img
                src="/Logo.svg"
                alt="logo"
                width={213}
                height={26}
                className="w-40 lg:w-56 h-[26px] "
              />
            </Link>
          </div>

          {/* Right section - User actions */}
          <div className="flex items-center gap-3 md:gap-4">
            <p className="flex lg:hidden items-center gap-1 cursor-pointer">
              <Search
                size={20}
                strokeWidth={1.5}
                onClick={() => setSearchbarVisible(!isSearchbarVisible)}
              />
            </p>

            {profile && (
              <p className=" flex items-center gap-1 cursor-pointer">
                <Dropdown
                  menu={{ items }}
                  placement="bottomCenter"
                  arrow={{ pointAtCenter: true }}
                >
                  <Bell size={20} strokeWidth={1.5} />
                </Dropdown>
              </p>
            )}

            {profile && (
              <Link
                href={"/inbox"}
                className=" flex items-center gap-1 cursor-pointer"
              >
                <span>
                  <Mail size={20} strokeWidth={1.5} />
                </span>
              </Link>
            )}

            {!profile && (
              <Link
                href={`/login`}
                className=" flex items-center gap-1 cursor-pointer"
              >
                <span>
                  <UserRound size={20} strokeWidth={1.5} />
                </span>
                <span className="hidden lg:block text-sm text-secondary">
                  Log In | Sign Up
                </span>
              </Link>
            )}

            {profile && (
              // <span className="hidden lg:block text-sm">Wishlist</span>
              <Link
                href={"/wishlist"}
                className=" flex items-center gap-1 cursor-pointer"
              >
                <span>
                  <Heart size={20} strokeWidth={1.5} />
                </span>
              </Link>
            )}

            {/* user avater */}
            {profile && <UserDropdown profile={profile || null} />}

            <Link href={"/sell-now"} className="hidden lg:block">
              <FillButton className="px-6 text-sm">SELL NOW</FillButton>
            </Link>
          </div>
        </div>

        {/* menu bar for large screen - bottom section */}
        <div className="hidden lg:block">
          <Menu
            className="flex items-center justify-center space-x-2"
            mode="horizontal"
            selectedKeys={[selectedCategory]}
            style={{
              border: "none",
              background: "transparent",
            }}
            onSelect={({ key }) => setSelectedCategory(key as string)}
          >
            <Menu.Item key="women">
              <Dropdown
                trigger={["click"]}
                overlay={menuItems}
                placement="bottom"
              >
                <span>WOMEN</span>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="men">
              <Dropdown
                trigger={["click"]}
                overlay={menuItems}
                placement="bottom"
              >
                <span>MEN</span>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="kids">
              <Dropdown
                trigger={["click"]}
                overlay={menuItems}
                placement="bottom"
              >
                <span>KIDS</span>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="beauty">
              <Dropdown
                trigger={["click"]}
                overlay={menuItems}
                placement="bottom"
              >
                <span>BEAUTY/GROOMING</span>
              </Dropdown>
            </Menu.Item>
          </Menu>
        </div>

        {/* menu for small screen */}
        <div className="lg:hidden">
          <MenuVertical categoriesRes={categoriesRes as any} />
        </div>

        {/* search field for small screen */}
        {isSearchbarVisible && (
          <div ref={searchRef} className="absolute left-0 z-50 w-full">
            <div className="flex lg:hidden items-center gap-4 px-4 py-1 bg-white relative">
              <Search
                size={20}
                strokeWidth={1.5}
                color="#797979"
                className="absolute"
              />
              <input
                placeholder="Search for items"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full p-8 py-3 text-base safari-only:text-base placeholder:text-[#797979] focus:outline-none border-b rounded-none border-black"
              />
              {searchKeyword && (
                <XIcon
                  onClick={() => setSearchKeyword("")}
                  className="text-[#797979] absolute right-3 top-2 z-50"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
