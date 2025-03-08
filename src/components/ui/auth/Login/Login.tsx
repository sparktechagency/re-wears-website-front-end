"use client"

import TextInput from "@/components/shared/TextInput";
import { Checkbox, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ForgetPassword from "../ForgetPassword/ForgetPassword";

const Login = () => {
  const router = useRouter()
const [open , setOpen] = useState(false)

  const onFinish = async (values: { email: string, password: string }) => {
    console.log(values);
    router.push("/")
  };

  return (
    <div className=" w-full " >
      <p className='text-lg font-normal text-center pb-4 '> or Log In with your Email </p>
      <Form
        onFinish={onFinish}
        layout="vertical"
      >

        <TextInput name={"email"} label={"Email"} />

        <Form.Item
          name="password"
          // label={<p>Password</p>} 
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password
            type="password"
            placeholder="Enter your password"
            style={{
              height: 50,
              border: "1px solid #d9d9d9",
              outline: "none",
              boxShadow: "none",
              borderRadius: "40px",
            }}
          />
        </Form.Item>

        <div className="flex items-center justify-between">
          <Form.Item style={{ marginBottom: 0 }} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <p
            className="login-form-forgot text-primary font-semibold cursor-pointer "
            onClick={() => setOpen(true)}
          >
            Forgot password
          </p>
        </div>

        <Form.Item style={{ marginBottom: 0 }}>
          <button
            type="submit"
            style={{
              width: '100%',
              height: 45,
              color: "white",
              fontWeight: "400px",
              fontSize: "18px",

              marginTop: 20
            }}
            className="flex items-center justify-center bg-primary rounded-full"
          >
            {/* {isLoading? < Spinner/> : "Sign in"} */} Sign in
          </button>
        </Form.Item>


      </Form>
      <ForgetPassword open={open} setOpen={setOpen} />
    </div>
  );
};

export default Login;