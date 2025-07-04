"use client";
import { myFetch } from "@/helpers/myFetch";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const router = useRouter();
  const token = new URLSearchParams(window.location.search).get("token");

  const onFinish = async (values: {
    newPassword: string;
    confirmPassword: string;
  }) => {
    toast.loading("Processing...", { id: "reset-password" });
    try {
      const res = await myFetch("/auth/reset-password", {
        method: "POST",
        body: values,
        token: `${token}` as string,
      });
      if (res.success) {
        toast.success("Password reset successfully", { id: "reset-password" });
        router.push(`/confirm-change-password`);
      } else {
        toast.error(res.message || "Failed to reset password", {
          id: "reset-password",
        });
      }
    } catch (error) {
      console.error(error);
    }
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
              message: `Password is required !`,
            },
            {
              pattern: /[A-Z]/,
              message: "Password must include at least one uppercase letter.",
            },
            {
              pattern: /[a-z]/,
              message: "Password must include at least one lowercase letter.",
            },
            {
              pattern: /\d/,
              message: "Password must include at least one number.",
            },
            {
              pattern: /[@$!%*?&]/,
              message: "Password must include at least one special character.",
            },
            {
              pattern: /^.{8,}$/,
              message: "Password must be at least 8 characters long.",
            },
          ]}
          style={{ marginBottom: 0 }}
        >
          <Input.Password
            type="password"
            placeholder="Create a secure password (8+ characters, mix of letters, numbers & symbols)"
            style={{
              border: "1px solid #E0E4EC",
              fontSize: "16px",
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
              fontSize: "16px",
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
