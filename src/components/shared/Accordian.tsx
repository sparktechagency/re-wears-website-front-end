"use client";
import React from "react";

import type { CSSProperties } from "react";
import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";
import { Plus } from "lucide-react";

const Accordian = ({ title, text }: { title: string; text: string }) => {
  const { token } = theme.useToken();

  const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
    panelStyle
  ) => [
    {
      key: "1",
      label: (
        <p className="font-sans text-[16px] " style={{ color: "#4E4E4E" }}>
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
        <Plus
          size={22}
          style={{
            transform: `rotate(${isActive ? 0 : 270}deg)`,
            transition: "transform 0.3s ease",
            color: "#FFAB3E",
          }}
        />
      )}
      expandIconPosition="end"
      style={{ background: "#ffffff", color: "#222222" }}
      items={getItems(panelStyle)}
    />
  );
};

export default Accordian;
