"use client"

import { myFetch } from "@/helpers/myFetch";
import { Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const CompleteRegistration = () => {
  const router = useRouter();

  const OnFinish = async (values: { username: string }) => {
    toast.loading("Completing registration...", {
      id: "complete-registration",
    });

    const formData = new FormData();
    formData.append("userName", values.username);

    try {
      const res = await myFetch(`/users/update-profile`, {
        method: "PATCH",
        body: formData,
      });
      console.log(res);
      if (res?.success) {
        toast.success("Registration completed successfully", {
          id: "complete-registration",
        });
        router.push(`/confirm-registration?userName=${values.username}`);
      } else {
        toast.error(res?.message || "Failed to complete registration", {
          id: "complete-registration",
        });
      }
    } catch (error) {
      console.error("Error completing registration:", error);
    }
  };

  return (
    <div className="container mx-auto max-w-[540px] lg:mt-[140px] mt-10 h-[calc(100vh-300px)]">
      <div className="text-center mb-6">
        <h1 className="text-[25px] font-bold ">Complete your registration</h1>
      </div>

      <Form onFinish={OnFinish}>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: `Please enter your username !`,
            },
          ]}
          className="input-bottom"
        >
          <Input
            placeholder={`Enter your username `}
            style={{
              height: 50,
              border: "1px solid #d9d9d9",
              fontSize: "16",
              outline: "none",
              boxShadow: "none",
              backgroundColor: "white",
              borderRadius: "40px",
            }}
          />
        </Form.Item>
        <p className=" text-[#797979] text-sm  ">
          Please use only letters and numbers. Pick something you like -
          usernames can’t be changed later.
        </p>

        <Form.Item>
          <button
            type="submit"
            style={{
              width: "100%",
              height: 55,
              color: "white",
              fontWeight: "400px",
              fontSize: "18px",
              borderRadius: 60,
              marginTop: 24,
            }}
            className="flex items-center justify-center bg-primary rounded-lg uppercase"
          >
            Continue
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CompleteRegistration;