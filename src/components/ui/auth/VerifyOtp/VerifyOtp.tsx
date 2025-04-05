"use client";
import { Button, Form } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";

const VerifyOtp = () => {
  const router = useRouter();
  const [otp, setOtp] = useState<string>("");
  const [email, setEmail] = useState<string | null>("");

  useEffect(() => {
    const emailFromQuery = new URLSearchParams(window.location.search).get(
      "email"
    );
    setEmail(emailFromQuery);
  }, []);

  const onFinish = async (values: { otp: string }) => {
    const userType = localStorage.getItem("userType");
    console.log(values);
    if (userType === "forget") {
      router.push(`/reset-password`);
    } else {
      router.push(`/complete-registration`);
    }
  };

  return (
    <section className="max-w-xl mx-auto px-4 my-16 lg:my-32">
      <div className=" mb-6 text-center">
        <h1 className="text-[25px] font-bold mb-3 text-secondary ">
          Verify your email
        </h1>
        <p className=" text-[#797979] text-[16px] ">
          Please enter the verification code we sent to this email address:
        </p>
        <p className="text-secondary text-[16px] font-bold">{email}</p>
      </div>

      <Form
        layout="vertical"
        onFinish={onFinish}
        style={{ fontFamily: "poppins" }}
      >
        <div className="flex flex-col items-center justify-center gap-1 mb-6">
          <p>Enter the verification code below:</p>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={5}
            inputStyle={{
              height: 60,
              width: 60,
              borderRadius: "8px",
              margin: "10px",
              fontSize: "20px",
              border: "1px solid #818181",
              color: "#2B2A2A",
              outline: "none",
              marginBottom: 10,
            }}
            renderInput={(props) => <input {...props} />}
          />
        </div>

        <Form.Item style={{ marginBottom: 0 }}>
          <Button
            htmlType="submit"
            style={{
              width: "100%",
              height: 55,
              border: "1px solid #d9d9d9",
              outline: "none",
              boxShadow: "none",
              background: "#9D977A",
              color: "white",
              borderRadius: "60px",
              fontFamily: "poppins", 
              fontSize: "16px",
            }}
            className="uppercase tracking-wider"
          >
            Verify
          </Button>
        </Form.Item>
      </Form>

      <div
        className="flex items-center justify-center pt-6 cursor-pointer "
        onClick={() => router.push(`/resend-code`)}
      >
        <p className="text-primary">Didn&apos;t receive our email?</p>
      </div>
    </section>
  );
};

export default VerifyOtp;
