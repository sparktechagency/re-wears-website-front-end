"use client";

import {  Form, Input } from "antd";
import React from "react";

const TextInput: React.FC<{ name: string; label: string }> = ({ name, label }) => {
  return (
    <Form.Item
      name={name}
      rules={[
        {
          required: true,
          message: `This field is required`,
        },
      ]}
    > 

      <Input
        placeholder={`Enter your ${label.toLowerCase()}`}
        style={{
            height: 50,
            border: "1px solid #d9d9d9",
            outline: "none",
            boxShadow: "none",
            backgroundColor: "white",
            borderRadius: "40px",
          }}
      />

    </Form.Item>
  );
};

export default TextInput;
