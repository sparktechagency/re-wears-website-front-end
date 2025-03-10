"use client";

import { sidebarMenus } from "@/constants/help-center/sidebarMenu";
import { Divider } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarMenu = () => {
  const pathname = usePathname().split("/").filter(Boolean)[length + 1];
  console.log(pathname);

  return (
    <>
      <h1 className="heading-1 !pt-2">Help Center</h1>
      <ul>
        {sidebarMenus.map((item, idx) => (
          <li key={idx} className="h-auto">
            <Link href={`/help-center/${item.path}`}>
              <button
                className={`text-[#797979] py-3 w-full text-start hover:text-black ${
                  pathname === item.path && "font-bold text-black"
                }`}
              >
                {item.title}
              </button>
            </Link>
            <Divider style={{ margin: "0" }} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SidebarMenu;
