"use client";

import { useState } from "react";
import { Input, Menu, Dropdown, MenuProps } from "antd";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import { FaTshirt } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import { GiConverseShoe, GiDoubleNecklace, GiLipstick } from "react-icons/gi";
import { SlHandbag } from "react-icons/sl";
import { useRouter } from "next/navigation";
import { Bell, Heart, Mail, Search, UserRound, XIcon } from "lucide-react";
import Notifications from "./Notifications";
import Image from "next/image";
import FillButton from "../FillButton";
import UserDropdown from "./UserDropdown";
import MenuVertical from "./NavmenuSmDevice/MenuVertical";

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
  const router = useRouter();

  const menuItems = (
    <Menu style={{ width: "100%", padding: "25px" }}>
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
                  <Link href="#" className="text-[#797979] hover:text-primary ">
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
        className="container "
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
          <div className="hidden lg:block" style={{ width: "250px" }}>
            <Input
              prefix={<BsSearch size={18} color="#797979" />}
              placeholder="Search for items"
              style={{
                border: "none",
                borderBottom: "1px solid #000000",
                borderRadius: "0",
                height: "42px",
              }}
              className="placeholder:text-[#797979] placeholder:text-[14px] placeholder:font-semibold"
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
          <div className="flex items-center gap-4 lg:gap-5">
            <p
              onClick={() => setSearchbarVisible(!isSearchbarVisible)}
              className="flex lg:hidden items-center gap-1 cursor-pointer"
            >
              <Search size={20} />
            </p>
            <p className=" flex items-center gap-1 cursor-pointer">
              <Dropdown
                menu={{ items }}
                placement="bottomCenter"
                arrow={{ pointAtCenter: true }}
              >
                <Bell size={20} />
              </Dropdown>
            </p>
            <p className=" flex items-center gap-1 cursor-pointer">
              {" "}
              <span>
                <Mail size={20} />{" "}
              </span>{" "}
            </p>

            <p className=" flex items-center gap-1 cursor-pointer">
              {" "}
              <span>
                <Heart size={20} />{" "}
              </span>{" "}
              <span className="hidden lg:block text-sm">Wishlist (0)</span>
            </p>

            <p
              className=" flex items-center gap-1 cursor-pointer"
              onClick={() => router.push("/login")}
            >
              {" "}
              <span>
                <UserRound size={20} />{" "}
              </span>{" "}
              <span className="hidden lg:block text-sm">Log In</span>
            </p>

            {/* user avater */}
            <UserDropdown />

            <Link href={"/sell-now"} className="hidden lg:block">
              <FillButton>SELL NOW</FillButton>
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
            <div className="relative">
              <Input
                type="search"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                prefix={<BsSearch size={18} color="#797979" />}
                placeholder="Search for items"
                style={{
                  border: "none",
                  borderBottom: "1px solid #000000",
                  borderRadius: "0",
                  height: "42px",
                }}
                className="placeholder:text-[#797979] placeholder:text-[14px] placeholder:font-semibold"
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
