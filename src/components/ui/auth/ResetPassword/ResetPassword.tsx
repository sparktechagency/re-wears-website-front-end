"use client";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const ResetPassword = () => {
  const router = useRouter();

  const onFinish = async (values: {
    newPassword: string;
    confirmPassword: string;
  }) => {
    console.log(values);
    router.push(`/login`);
  };

  return (
    <div className="max-w-xl mx-auto px-4 my-16 lg:my-32">
      <div className=" mb-8">
        <h1 className=" text-secondary text-[25px] font-bold  pb-2 text-center ">
          Reset Password
        </h1>
        <p className=" text-[#797979] text-[16px] text-center">
          Create a new password. Ensure it differs from previous ones for
          security
        </p>
      </div>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="newPassword"
          rules={[
            {
              required: true,
              message: "Please enter your new password!",
            },
            {
              pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "One of the password requirements wasn’t met. Please give it another go.",
            },
          ]} 
          style={{ marginBottom: 0 }}
        >
          <Input.Password
            type="password"
            placeholder="Create a secure password (8+ characters, mix of letters, numbers & symbols)"
            style={{
              border: "1px solid #E0E4EC",
              height: "52px",
              background: "white",
              borderRadius: "60px",
              outline: "none",
            }}
            className="mb-2"
          />
        </Form.Item>

        <Form.Item
          style={{ marginBottom: 0 }}
          name="confirmPassword"
          dependencies={["newPassword"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            type="password"
            placeholder="Re-enter your new password"
            style={{
              border: "1px solid #E0E4EC",
              height: "52px",
              background: "white",
              borderRadius: "60px",
              outline: "none",
            }}
            className="my-2"
          />
        </Form.Item>

        <Form.Item style={{ marginBottom: 0 }}>
          <Button
            htmlType="submit"
            style={{
              width: "100%",
              height: 55,
              color: "white",
              fontWeight: "400px",
              fontSize: "18px",
              background: "#9D977A",
              marginTop: 10,
              borderRadius: "60px",
            }} 
            className="uppercase"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ResetPassword;
