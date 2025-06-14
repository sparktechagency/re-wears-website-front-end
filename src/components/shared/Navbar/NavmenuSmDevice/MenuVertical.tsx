"use client";
import { config } from "@/config/env-config";
import { useState, useEffect } from "react";
import { Collapse } from "antd";
import Link from "next/link";
import Image from "next/image";

const { Panel } = Collapse;

export default function Navbar({
  categoriesRes,
}: {
  categoriesRes: Array<{
    _id: string;
    name: string;
    subCategories: Array<{
      _id: string;
      name: string;
      icon: string;
      childSubCategories: Array<{
        _id: string;
        name: string;
      }>;
    }>;
  }>;
}) {
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
    <nav>
      <div className="flex justify-center items-center gap-2 p-4 py-2 text-sm font-medium relative">
        {categoriesRes.map((category) => (
          <div key={category._id} className="menu-item">
            {/* Main Category Button */}
            <button
              onClick={() =>
                setActiveCategory(
                  activeCategory === category.name ? null : category.name
                )
              }
              className="relative cursor-pointer flex items-center px-3 pb-2 transition-all"
            >
              {category.name}
              <span
                className={`absolute bottom-0 left-0 right-0 h-[4px] bg-[#B0A67D] transition-all ${
                  activeCategory === category.name
                    ? "scale-x-100 rounded-t-lg"
                    : "scale-x-0"
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {activeCategory === category.name && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[80vw] bg-gray-50 rounded-lg p-4 z-40 shadow-md">
                <Collapse
                  accordion
                  activeKey={activePanel || undefined}
                  onChange={(key) => setActivePanel(key as any)}
                  ghost
                >
                  {category.subCategories.map((subCategory) => (
                    <Panel
                      header={
                        <div className="flex items-center gap-2">
                          <Image
                            width={16}
                            height={16}
                            src={
                              subCategory?.icon
                                ? subCategory.icon.includes("http")
                                  ? subCategory.icon
                                  : `${config?.IMAGE_URL}${subCategory.icon}`
                                : "/placeholder.svg"
                            }
                            alt={subCategory.name || "subcategory"}
                            className="w-4 h-4 object-contain"
                            unoptimized
                          />
                          <span className="font-medium text-[#797979]">
                            {subCategory.name}
                          </span>
                        </div>
                      }
                      key={subCategory._id}
                      style={{ fontFamily: "poppins" }}
                    >
                      {subCategory.childSubCategories.length > 0 ? (
                        <ul className="space-y-4 pl-4 text-[13px] !text-[#797979] sub-category">
                          {subCategory.childSubCategories.map((child) => (
                            <li key={child._id}>
                              <Link
                                href={`/products?category=${category._id}&sub=${subCategory._id}&child=${child._id}`}
                                className="hover:text-primary !text-[#797979]"
                              >
                                {child.name}
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
