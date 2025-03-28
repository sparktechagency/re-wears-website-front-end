"use client";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const ChangePassword = () => {
  const router = useRouter();

  const onFinish = async (values: {
    newPassword: string;
    confirmPassword: string;
  }) => {
    console.log(values);
    router.push(`/confirm-change-password`);
  };

  return ( 
    <div className="container mx-auto mt-[50px]"> 
        <h1 className="text-secondary text-[25px] font-bold text-center mb-6">
          Change password
        </h1>

    <div className="w-full  mx-auto px-4  flex lg:flex-row flex-col gap-4 justify-center items-center card">
      {/* Left side instructions */}
      <div className="lg:w-1/2 w-full lg:pr-6 lg:pb-0 pb-5">
        <p className="text-[18px] text-[#000000] font-bold mb-4">
          When crafting a secure password:
        </p>
        <ul className="text-sm text-[#797979] list-disc pl-5  flex flex-col gap-y-4 text-[16px]">
          <li>Opt for a blend of numbers, special characters, uppercase and lowercase letters that aren’t easily guessed. Aim for a minimum length of 7 characters.</li>
          <li>Avoid incorporating personal information like your name or birth date.</li>
          <li>Commit your password to memory. Refrain from storing it anywhere or sharing it with others. Regularly update it.</li>
          <li>Ensure your password entry remains private and shielded from prying eyes.</li>
        </ul>
      </div>

      {/* Right side form */}
      <div className="lg:w-1/2 w-full lg:pl-6">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="currentPassword"
            style={{ marginBottom: "20px" }}
          >
            <Input.Password
              type="password"
              placeholder="Current password"
              style={{
                border: "1px solid #E0E4EC",
                height: "52px",
                background: "white",
                borderRadius: "60px",
                outline: "none",
              }}
              className=""
            />
          </Form.Item>

          <Form.Item
            name="newPassword"
            rules={[
              {
                required: true,
                message: "Please input your new Password!",
              },
              {
                pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "One of the password requirements wasn’t met. Please give it another go.",
              },
            ]}
            style={{ marginBottom: "20px" }}
          >
            <Input.Password
              type="password"
              placeholder="Create a new password (8+ characters, mix of letters, numbers & symbols)"
              style={{
                border: "1px solid #E0E4EC",
                height: "52px",
                background: "white",
                borderRadius: "60px",
                outline: "none",
              }}
              className=""
            />
          </Form.Item>

          <Form.Item
            style={{ marginBottom: "20px" }}
            name="confirmPassword"
            dependencies={["newPassword"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Re-enter your new password!",
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
              className=""
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Button
              htmlType="submit"
              style={{
                width: "100%",
                height: "55px",
                color: "white",
                fontWeight: "400",
                fontSize: "18px",
                background: "#9D977A",
                // marginTop: "20px",
                borderRadius: "60px", 
              }} 

              className=" uppercase"
            >
              Change Password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
    </div>
  );
};

export default ChangePassword;
