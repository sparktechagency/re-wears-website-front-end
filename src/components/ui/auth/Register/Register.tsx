"use client";

import { myFetch } from "@/helpers/myFetch";
import { Checkbox, ConfigProvider, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

interface ValuesType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const router = useRouter();

  const onFinish = async (values: ValuesType) => {
    toast.loading("Loading...", { id: "sign-up" });
    try {
      const res = await myFetch("/users/create-user", {
        method: "POST",
        body: { ...values, role: "USER" },
      });
      if (res?.success) {
        toast.success("Account created successfully!", { id: "sign-up" });
        localStorage.setItem("userType", "complete-registration");
        router.push(`/verify-otp?email=${values.email}`);
      } else {
        toast.error(res?.message || "Something went wrong!", {
          id: "sign-up",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full">
      <p className="text-[14px] font-normal text-center pb-4 ">
        or Register with your Email
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
          <div className="grid grid-cols-2 gap-3 ">
            <Form.Item
              name="firstName"
              rules={[
                {
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
                  fontSize: "16px",
                  outline: "none",
                  boxShadow: "none",
                  backgroundColor: "white",
                  borderRadius: "40px",
                }}
              />
            </Form.Item>

            <Form.Item
              name="lastName"
              rules={[
                {
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
                  fontSize: "16px",
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
              rules={[
                {
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
                  fontSize: 16,
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
                  message: `Password is required !`,
                },
                {
                  pattern: /[A-Z]/,
                  message:
                    "Password must include at least one uppercase letter.",
                },
                {
                  pattern: /[a-z]/,
                  message:
                    "Password must include at least one lowercase letter.",
                },
                {
                  pattern: /\d/,
                  message: "Password must include at least one number.",
                },
                {
                  pattern: /[@$!%*?&]/,
                  message:
                    "Password must include at least one special character.",
                },
                {
                  pattern: /^.{8,}$/,
                  message: "Password must be at least 8 characters long.",
                },
              ]}
              className="mb-5"
            >
              <Input.Password
                placeholder="Enter your password"
                className="border border-gray-300 h-[50px] bg-white rounded-full"
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
          </div>

          <div className=" " style={{ marginTop: "20px" }}>
            <Form.Item
              name="agree"
              valuePropName="checked"
              rules={[
                {
                  validator(_, value) {
                    return value
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error("You must agree to continue!")
                        );
                  },
                },
              ]}
              className="w-full "
            >
              <Checkbox className="text-[#000000] text-[10px] ">
                By clicking CREATE ACCOUNT, I hereby agree and consent to
                re-wears
                <Link
                  href="/terms-and-conditions"
                  className="text-[#000000] font-medium underline underline-offset-2 mx-[3px]"
                >
                  Terms & Conditions;
                </Link>
                I confirm that I have read re-wears
                <Link
                  href="/terms-and-conditions"
                  className="text-[#000000] font-medium underline underline-offset-2 mx-[3px] "
                >
                  Privacy Policy;
                </Link>
                and I certify that I am 18 years or older.
              </Checkbox>
            </Form.Item>
          </div>

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
