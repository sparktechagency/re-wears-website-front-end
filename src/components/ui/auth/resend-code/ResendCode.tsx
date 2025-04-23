"use client";
import TextInput from "@/components/shared/TextInput";
import { Form } from "antd";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { GoDotFill } from "react-icons/go";

const ResendCode = () => {
  const router = useRouter();

  const onFinish = async () => {
    router.push(`/verify-otp`);
  };

  return (
    <section className="max-w-2xl mx-auto px-4 my-16 lg:my-32">
      <p className="text-secondary text-[25px] font-bold text-center pb-4">
        I didn&apos;t receive my email
      </p>

      <div className="flex flex-col gap-2 mb-7">
        <p className="text-[#797979] text-[16px] flex items-start gap-2">
          <span className="mt-1.5 text-primary">
            <GoDotFill />
          </span>
          <span>Make sure you entered you email address correctly. </span>
        </p>

        <p className="text-[#797979] text-[16px] flex items-start gap-2">
          <span className="mt-1.5 text-primary">
            <GoDotFill />
          </span>
          <span>
            Check your spam folder to make sure our email didn&apos;t end up
            there.
          </span>
        </p>

        <p className="text-[#797979] text-[16px] flex items-start gap-2">
          <span className="mt-1.5 text-primary">
            <GoDotFill />
          </span>
          <span>
            If you still can&apos;t see it anywhere, please use the resend
            button.
          </span>
        </p>

        <p className="text-[#797979] text-[16px] flex items-start gap-2">
          <span className="mt-1.5 text-primary">
            <GoDotFill />
          </span>
          <span>
            If you&apos;re still having problems, problems, please check our
            <span className="link"> Help Center</span>
          </span>
        </p>
      </div>

      <Form
        layout="vertical"
        onFinish={onFinish}
        style={{ fontFamily: "poppins" }}
      >
        <TextInput name={"email"} label="" />
        <Form.Item>
          <button
            type="submit"
            style={{
              width: "100%",
              height: 55,
              color: "white",
              fontWeight: "400px",
              fontSize: "16px",
              borderRadius: 60,
              marginTop: 0,
              fontFamily: "poppins",
            }}
            className="flex items-center justify-center bg-primary rounded-lg"
          >
            Resend verification code
          </button>
        </Form.Item>
      </Form>
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 mx-auto text-primary font-semibold"
      >
        <ArrowLeft /> Back
      </button>
    </section>
  );
};

export default ResendCode;
