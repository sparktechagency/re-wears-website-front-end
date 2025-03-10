"use client";

import { sidebarMenus } from "@/constants/settings/sidebarMenus";
import { Divider } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarMenu = () => {
  const pathnameSegments = usePathname().split("/").filter(Boolean);
  const pathname = pathnameSegments[pathnameSegments.length - 1];

  return (
    <>
      <h1 className="heading-1 !text-4xl !pt-2">Settings</h1>
      <ul>
        {sidebarMenus.map((item, idx) => (
          <li key={idx} className="h-auto">
            <Link href={`/settings/${item.path}`}>
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
