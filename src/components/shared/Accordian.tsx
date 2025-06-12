"use client";
import React from "react";

import type { CSSProperties } from "react";
import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";
import { ChevronDown, } from "lucide-react";

const Accordian = ({ title, text }: { title: string; text: string }) => {
  const { token } = theme.useToken();

  const getItems: (_: CSSProperties) => CollapseProps["items"] = (
    panelStyle
  ) => [
    {
      key: "1",
      label: (
        <p className="font-sans text-[16px] " style={{ color: "#000000" }}>
          {title}
        </p>
      ),
      children: <p style={{ color: "#757575", fontSize: "16px" }}>{text}</p>,
      style: panelStyle,
    },
  ];

  const panelStyle: React.CSSProperties = {
    borderRadius: token.borderRadiusLG,
  };
  return (
    <Collapse
      bordered={false}
      expandIcon={({ isActive }) => (
        <ChevronDown
          size={22}
          style={{
            transform: `rotate(${isActive ? 180 : 0}deg)`,
            transition: "transform 0.3s ease",
            color: "#9D977A",
          }}
          className="lg:mr-16"
        />
      )}
      // expandIcon={() => (
      //   <span
      //     style={{ fontSize: "16px", fontWeight: "500", color: "#9D977A" }}
      //     className="hidden lg:mr-16"
      //   >
      //     See more
      //   </span>
      // )}
      expandIconPosition="end"
      style={{ background: "#ffffff", color: "#222222" }}
      items={getItems(panelStyle)}
    />
  );
};

export default Accordian;
