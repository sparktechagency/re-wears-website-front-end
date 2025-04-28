"use client"
import {  Form, Input, Modal } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const ForgetPassword = ({open , setOpen}:{open:boolean , setOpen:(open:boolean)=>void}) => { 
    const router  = useRouter()

    const onFinish = async(values:{email:string}) => { 
        localStorage.setItem("userType","forget")
  
          router.push(`/verify-otp?email=${values?.email}`);
  
    };
  
    return (
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={580}
        centered
      >
        <div className="text-center mb-4">
          <h1 className="text-[25px] font-bold ">Forgot your password?</h1>
          <p className="text-[14px] font-normal lg:px-12 px-4 pt-3 text-[#797979]">
            If this email address is associated with re-wears, then we have sent
            your password reset instructions to that email.
          </p>
        </div>

        <Form layout="vertical" onFinish={onFinish}>
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
                fontSize: "16px",
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
                fontSize: "18px",
                borderRadius: 60,
                marginTop: 10,
              }}
              className="flex items-center justify-center bg-primary rounded-lg uppercase"
            >
              Continue
            </button>
          </Form.Item>
        </Form>
      </Modal>
    );
};

export default ForgetPassword;