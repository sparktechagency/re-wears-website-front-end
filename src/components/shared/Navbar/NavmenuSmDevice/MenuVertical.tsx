"use client";

import { useState, useEffect } from "react";
import { Collapse } from "antd";
import navData from "./MenuData"; // Importing dynamic nav data
import Link from "next/link";

const { Panel } = Collapse;

export default function Navbar() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activePanel, setActivePanel] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".menu-item")) {
        setActiveCategory(null);
        setActivePanel(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="">
      <div className="flex justify-center items-center gap-2 p-4 py-2 text-sm font-medium relative">
        {navData.map((navItem) => (
          <div key={navItem.name} className="menu-item">
            {/* Category Button */}
            <button
              onClick={() =>
                setActiveCategory(
                  activeCategory === navItem.name ? null : navItem.name
                )
              }
              className="relative cursor-pointer flex items-center px-3 pb-2 transition-all"
            >
              {navItem.name}
              {/* Custom Bottom Border */}
              <span
                className={`absolute bottom-0 left-0 right-0 h-[4px] bg-[#B0A67D] transition-all ${
                  activeCategory === navItem.name
                    ? "scale-x-100 rounded-t-lg"
                    : "scale-x-0"
                }`}
              ></span>
            </button>

            {/* Dropdown Menu */}
            {activeCategory === navItem.name && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[80vw] bg-gray-50 rounded-lg p-4 z-40">
                <Collapse
                  accordion // Ensure only one panel is open at a time
                  activeKey={activePanel || undefined} // Track active panel
                  onChange={(key) => setActivePanel(key as unknown as string)}
                  ghost
                >
                  {navItem.categories.map((category, index) => (
                    <Panel
                      header={
                        <div className="flex items-center gap-2">
                          <span className="text-primary">{category.icon}</span>{" "}
                          {/* Dynamic Icon */}
                          <span className={`font-medium text-[#797979]`}>
                            {category.title}
                          </span>
                        </div>
                      }
                      key={String(index)}
                      style={{ fontFamily: "poppins" }}
                    >
                      {category.subcategories.length > 0 ? (
                        <ul className="space-y-4 pl-4 text-[13px] text-[#797979]">
                          {category.subcategories.map((sub, subIndex) => (
                            <li
                              key={subIndex}
                              className="cursor-pointer hover:text-primary focus:text-primary active:text-primary focus-visible:text-primary"
                            >
                              <Link
                                href={"/product-details"}
                                className="text-[#797979] hover:text-primary focus:text-primary focus-visible:text-primary active:text-primary visited:text-[#797979] focus:outline-none"
                              >
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-500 pl-4">No items available</p>
                      )}
                    </Panel>
                  ))}
                </Collapse>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
