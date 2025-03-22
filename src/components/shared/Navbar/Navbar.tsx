"use client";

import { useState } from "react";
import { Menu, Dropdown, MenuProps } from "antd";
import Link from "next/link";
import { FaTshirt } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import { GiConverseShoe, GiDoubleNecklace, GiLipstick } from "react-icons/gi";
import { SlHandbag } from "react-icons/sl";
import { Bell, Heart, Mail, Search, UserRound, XIcon } from "lucide-react";
import Notifications from "./Notifications";
import Image from "next/image";
import FillButton from "../FillButton";
import UserDropdown from "./UserDropdown";
import MenuVertical from "./NavmenuSmDevice/MenuVertical";
import { useAuthContext } from "@/contexts/AuthContext";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Notifications />,
  },
];

interface Category {
  icon: JSX.Element;
  items: string[];
}

interface Categories {
  [key: string]: Category;
}

const categories: Categories = {
  All: {
    icon: <TbGridDots color=" #9d977a" className="text-lg" />,
    items: [
      "Jeans",
      "Tops & T-Shirts",
      "Sweaters & Sweatshirts",
      "Shorts",
      "Sleepwear",
      "Skirts",
      "Suits & blazers",
      "Activewear",
      "Other men's clothing",
      "Jumpsuits & rompers",
    ],
  },
  Clothing: {
    icon: <FaTshirt color=" #9d977a" className="text-lg" />,
    items: ["Jackets", "Coats", "Parkas"],
  },
  Shoes: {
    icon: <GiConverseShoe color=" #9d977a" className="text-lg" />,
    items: ["Formal Suits", "Casual Blazers"],
  },
  Bags: {
    icon: <SlHandbag color=" #9d977a" className="text-lg" />,
    items: ["Chinos", "Dress Pants", "Joggers"],
  },
  Accessories: {
    icon: <GiDoubleNecklace color=" #9d977a" className="text-lg" />,
    items: ["Socks", "Boxers", "Briefs"],
  },
  Beauty: {
    icon: <GiLipstick color=" #9d977a" className="text-lg" />,
    items: ["Swim Shorts", "Swim Trunks"],
  },
};

const Navbar = () => {
  const [isSearchbarVisible, setSearchbarVisible] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedKey, setSelectedKey] = useState("women");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "All"
  );

  const { user } = useAuthContext();

  const menuItems = (
    <Menu style={{ width: "650px", padding: "25px" }}>
      <div className="grid grid-cols-6 gap-3">
        {/* Categories List */}
        <div className="col-span-2 border-e border-gray-300">
          {Object.entries(categories).map(([category, { icon }]) => (
            <div
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-2 cursor-pointer py-2 font-medium transition-all ${
                selectedCategory === category
                  ? " text-black font-bold"
                  : "text-primary"
              }`}
            >
              {icon}
              {category}
            </div>
          ))}
        </div>

        {/* Items List (Only visible if a category is selected) */}
        <div className="col-span-4 ps-2 pe-6">
          {selectedCategory &&
          categories[selectedCategory]?.items?.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-12 gap-y-3">
              {categories[selectedCategory].items.map((item: string) => (
                <div key={item} className="py-1">
                  <Link
                    href="/products"
                    className="text-[#797979] hover:text-primary "
                  >
                    {item}
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
      className="w-full flex items-center justify-center "
      style={{ borderBottom: "1px solid #f0f0f0" }}
    >
      <div
        style={{ margin: "0 auto", padding: "0 16px" }}
        className="container"
      >
        {/* top section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="py-6"
        >
          {/* Left section - Search */}
          <div
            className={`hidden lg:flex items-center gap-4 relative ${
              !user ? "min-w-[350px]" : "min-w-[280px] "
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
              className="p-8 py-3 text-sm placeholder:text-[#797979] focus:outline-none border-b border-black"
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
              <Image
                src={"/logo.svg"}
                alt="logo"
                width={213}
                height={26}
                className="w-40 lg:w-56"
              />
            </Link>
          </div>

          {/* Right section - User actions */}
          <div className="flex items-center gap-4">
            <p
              onClick={() => setSearchbarVisible(!isSearchbarVisible)}
              className="flex lg:hidden items-center gap-1 cursor-pointer"
            >
              <Search size={20} strokeWidth={1.5} />
            </p>

            {user && (
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

            {user && (
              <Link
                href={"/inbox"}
                className=" flex items-center gap-1 cursor-pointer"
              >
                {" "}
                <span>
                  <Mail size={20} strokeWidth={1.5} />{" "}
                </span>{" "}
              </Link>
            )}

            {!user && (
              <Link
                href={`/login`}
                className=" flex items-center gap-1 cursor-pointer"
              >
                {" "}
                <span>
                  <UserRound size={20} strokeWidth={1.5} />{" "}
                </span>{" "}
                <span className="hidden lg:block text-sm text-secondary">
                  Log In | Sign Up{" "}
                </span>
              </Link>
            )}

            <Link
              href={"/wishlist"}
              className=" flex items-center gap-1 cursor-pointer"
            >
              {" "}
              <span>
                <Heart size={20} strokeWidth={1.5} />{" "}
              </span>{" "}
              {!user && (
                <span className="hidden lg:block text-sm">Wishlist</span>
              )}
            </Link>

            {/* user avater */}
            {user && <UserDropdown />}

            <Link href={"/sell-now"} className="hidden lg:block">
              <FillButton className="px-6 text-sm">SELL NOW</FillButton>
            </Link>
          </div>
        </div>

        {/* menu bar for large screen - bottom section */}
        <div className="hidden lg:block">
          <Menu
            className="flex items-center justify-center gap-1 lg:gap-5"
            mode="horizontal"
            selectedKeys={[selectedKey]}
            style={{
              border: "none",
              background: "transparent",
            }}
            onSelect={({ key }) => setSelectedKey(key as string)}
          >
            <Menu.Item key="women">
              <Dropdown overlay={menuItems} placement="bottom">
                <span>WOMEN</span>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="men">
              <Dropdown overlay={menuItems} placement="bottom">
                <span>MEN</span>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="kids">
              <Dropdown overlay={menuItems} placement="bottom">
                <span>KIDS</span>
              </Dropdown>
            </Menu.Item>
            <Menu.Item key="beauty">
              <Dropdown overlay={menuItems} placement="bottom">
                <span>BEAUTY/GROOMING</span>
              </Dropdown>
            </Menu.Item>
          </Menu>
        </div>

        {/* menu for small screen */}
        <div className="lg:hidden">
          <MenuVertical />
        </div>

        {/* search field for small screen */}
        {isSearchbarVisible && (
          <div className="absolute left-0 z-50 w-full">
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
                className="w-full p-8 py-3 text-sm placeholder:text-[#797979] focus:outline-none border-b border-black"
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
