"use client";

import { Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import toast from "react-hot-toast";
import { myFetch } from "@/helpers/myFetch";
import Cookies from "js-cookie";

const Login = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  // set auth data to form from localstorage if  exist
  React.useEffect(() => {
    const auth =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("auth") || "{}")
        : {};
    form.setFieldsValue(auth);
  }, [form]);

  // submit handler
  const onFinish = async (values: {
    email: string;
    password: string;
    remember: boolean;
  }) => {
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
        // save login data to local storage
        if (values.remember) {
          localStorage.setItem("auth", JSON.stringify(values));
        } else {
          localStorage.removeItem("auth");
        }
        // redirect to home page
        location.href = "/";
      } else {
        toast.error(res?.message || "Failed to login", { id: "login" });
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div className="w-full">
      <p className="text-[14px] font-normal text-center pb-3 ">
        {" "}
        or Log In with your Email{" "}
      </p>
      <Form onFinish={onFinish} form={form} layout="vertical">
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
