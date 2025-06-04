"use client";
import { myFetch } from "@/helpers/myFetch";
import { Form, Input } from "antd";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { GoDotFill } from "react-icons/go";

const ResendCode = () => {
  const router = useRouter();

  const onFinish = async (values: any) => {
    toast.loading("Sending...", { id: "resend-code" });
    try {
      const res = await myFetch("/auth/resend-otp", {
        method: "POST",
        body: values,
      });
      if (res?.success) {
        toast.success("Code sent successfully", { id: "resend-code" });
        router.push(`/verify-otp?email=${values?.email}`);
      } else {
        toast.error(res?.message || "Failed to send code", {
          id: "resend-code",
        });
      }
    } catch (error) {
      console.error(error);
    }
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
            {"  "}
            <Link href={"/help-center/home"} className="link">
              Help Center
            </Link>
          </span>
        </p>
      </div>

      <Form
        layout="vertical"
        onFinish={onFinish}
        style={{ fontFamily: "poppins" }}
      >
        <Form.Item name="email" rules={[{ required: true }, { type: "email" }]}>
          <Input
            placeholder={`Enter email`}
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
