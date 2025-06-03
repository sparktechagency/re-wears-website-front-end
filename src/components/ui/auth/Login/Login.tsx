"use client";

import { Checkbox, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import toast from "react-hot-toast";
import { myFetch } from "@/helpers/myFetch";
import Cookies from "js-cookie";

const Login = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // submit handler
  const onFinish = async (values: { email: string; password: string }) => {
    toast.loading("Pending...", { id: "login" });
    try {
      const res = await myFetch("/auth/login", {
        method: "POST",
        body: values,
      });
      if (res.success) {
        toast.success("Login successful", { id: "login" });
        Cookies.set("accessToken", res?.data?.accessToken);
        Cookies.set("refreshToken", res?.data?.refreshToken);
        router.push("/");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error?.data?.message || "Failed to login", { id: "login" });
    }
  };

  return (
    <div className="w-full">
      <p className="text-[14px] font-normal text-center pb-3 ">
        {" "}
        or Log In with your Email{" "}
      </p>
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: `Please enter your email !`,
            },
          ]}
        >
          <Input
            className="text-base"
            placeholder={`Enter email `}
            style={{
              height: 50,
              fontSize: 16,
              border: "1px solid #d9d9d9",
              outline: "none",
              boxShadow: "none",
              backgroundColor: "white",
              borderRadius: "40px",
            }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password !",
            },
          ]}
          style={{ width: "100%" }}
        >
          <Input.Password
            type="password"
            placeholder="Enter password"
            style={{
              height: 50,
              fontSize: 16,
              width: "100%",
              border: "1px solid #d9d9d9",
              outline: "none",
              boxShadow: "none",
              borderRadius: "40px",
            }}
          />
        </Form.Item>

        <div className="flex items-center justify-between">
          <Form.Item
            style={{ marginBottom: 0 }}
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <p
            className="login-form-forgot cursor-pointer underline"
            onClick={() => setOpen(true)}
          >
            Forgot password?
          </p>
        </div>

        <Form.Item style={{ marginBottom: 0 }}>
          <button
            type="submit"
            style={{
              width: "100%",
              height: 45,
              color: "white",
              fontWeight: "400px",
              fontSize: "16px",

              marginTop: 10,
            }}
            className="flex items-center justify-center bg-primary rounded-full uppercase font-poppins"
          >
            {/* {isLoading? < Spinner/> : "Sign in"} */} Log In
          </button>
        </Form.Item>
      </Form>
      <ForgetPassword open={open} setOpen={setOpen} />
    </div>
  );
};

export default Login;
