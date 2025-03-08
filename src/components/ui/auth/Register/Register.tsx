"use client";

import TextInput from "@/components/shared/TextInput";
import { Checkbox, ConfigProvider, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface ValuesType {
  name: string;
  email: string;
  contact: string;
  password: string;
  confirm_password: string;
}

const Register: React.FC = () => {
  const router = useRouter();

  const onFinish = async (values: ValuesType) => {
    console.log(values);
    localStorage.setItem("userType", "register");
    router.push(`/verify-otp?email=${values.email}`);
  };

  return (
    <div className="w-2/3">
      <p className='text-lg font-normal text-center pb-4 '> or Register with your Email </p>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 0,
          },
          components: {
            Input: {  
              hoverBorderColor: "#d9d9d9",
            },
          },
        }}
      >
        <Form onFinish={onFinish} layout="vertical"> 
          <div className="grid grid-cols-2 gap-3"> 
          <TextInput name="name" label="Full Name" />
          <TextInput name="lastName" label="Last Name" />
          </div> 

          <div>
          <TextInput name="email" label="Email" />
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
            ]}
            className="mb-5"
          >
            <Input.Password
              placeholder="Enter password"
              className="border border-gray-300 h-[50px] bg-white rounded-full" 
              style={{ height: 50, border: "1px solid #d9d9d9", outline: "none", boxShadow: "none", backgroundColor: "white", borderRadius: "40px"}}
            />
          </Form.Item>
          </div>


          <Form.Item
            name="agree"
            valuePropName="checked"
            rules={[
              {
                validator(_, value) {
                  return value
                    ? Promise.resolve()
                    : Promise.reject(new Error("You must agree to continue!"));
                },
              },
            ]} 

            className="w-full"
          >
            <Checkbox className="text-[#000000] text-xs " >
            By clicking CREATE ACCOUNT, I hereby agree and consent to <Link href="/terms-and-conditions" className="text-[#000000] font-medium underline underline-offset-2">  re-wears Terms & Conditions </Link>; I confirm that I have read  re-wears <Link href="/terms-and-conditions" className="text-[#000000] font-medium underline underline-offset-2"> Privacy Policy </Link> ; and I certify that I am 18 years or older. 
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <button
              type="submit"
              className="w-full h-[55px] rounded-full text-white font-medium text-lg bg-primary  flex items-center justify-center mt-4"
            >
              Sign up
            </button>
          </Form.Item>
        </Form>
      </ConfigProvider>

      <div className="flex items-center justify-center gap-1 py-4 ">
        <p className="text-[#636363]">Have an account?</p>
        <Link href="/login" className="text-[#1854F9] font-semibold">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Register;
