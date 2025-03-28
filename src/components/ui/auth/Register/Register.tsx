"use client";

import { Checkbox, ConfigProvider, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface ValuesType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const router = useRouter();

  const onFinish = async (values: ValuesType) => {
    console.log(values);
    localStorage.setItem("userType", "register");
    router.push(`/verify-otp?email=${values.email}`);
  };

  return (
    <div className="w-full">
      <p className="text-[14px] font-normal text-center pb-4 ">
        {" "}
        or Register with your Email{" "}
      </p>
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

            <Form.Item
              name="firstName"
              rules={[{
                required: true,
                message: `Please enter your first name !`,
              },
              ]}
            >
              <Input
                placeholder={`Enter your first name `}
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


            <Form.Item
              name="lastName"
              rules={[{
                required: true,
                message: `Please enter your last name !`,
              },
              ]}
            >
              <Input
                placeholder={`Enter your last name `}
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

          </div>

          <div>
            <Form.Item
              name="email"
              rules={[{
                required: true,
                message: `Please enter your email !`,
              },
              ]}
            >
              <Input
                placeholder={`Enter your email `}
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
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your password!",
                },
                {
                  pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "One of the password requirements wasn’t met. Please give it another go.",
                },
              ]} 
              className="mb-5"
            >
              <Input.Password
                placeholder="Create a secure password (8+ characters, mix of letters, numbers & symbols)"
                className="border border-gray-300 h-[50px] bg-white rounded-full"
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
            <Checkbox className="text-[#000000] text-[10px] ">
              By clicking CREATE ACCOUNT, I hereby agree and consent to   re-wears  
              <Link
                href="/terms-and-conditions"
                className="text-[#000000] font-medium underline underline-offset-2 mx-[2px]"
              >
                  Terms & Conditions
              </Link>
              ; I confirm that I have read re-wears
              <Link
                href="/terms-and-conditions"
                className="text-[#000000] font-medium underline underline-offset-2 mx-[2px]"
              >
                  Privacy Policy
              </Link>
              ; and I certify that I am 18 years or older.
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <button
              type="submit"
              className="w-full h-[55px] rounded-full text-white text-base bg-primary  flex items-center justify-center mt-4 font-poppins uppercase"
            >
              Create account
            </button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  );
};

export default Register;
