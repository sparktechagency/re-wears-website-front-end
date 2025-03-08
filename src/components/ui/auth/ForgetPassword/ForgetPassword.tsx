"use client"
import TextInput from "@/components/shared/TextInput";
import {  Form, Modal } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const ForgetPassword = ({open , setOpen}:{open:boolean , setOpen:(open:boolean)=>void}) => { 
    const router  = useRouter()

    const onFinish = async(values:{email:string}) => { 
        localStorage.setItem("userType","forget")
  
          router.push(`/verify-otp?email=${values?.email}`);
  
    };
  
    return (
        <Modal open={open} onCancel={() => setOpen(false)} footer={null} width={580} centered>

        <div className="text-center mb-4">
          <h1 className="text-[25px] font-bold ">Forgot Password ?</h1>
        <p className="text-[14px] font-normal px-12 pt-3 text-[#797979]">If this email address is associated with re-wears, then we have sent your password reset instructions to that email.</p>
        </div>

        <Form layout="vertical" onFinish={onFinish}>
          <TextInput name={"email"} label={"Email"} />
            

          <Form.Item>
            <button
             
              type="submit"
              style={{
                width: '100%',
                height: 55,
                color: "white",
                fontWeight: "400px",
                fontSize: "18px",
                borderRadius:60 ,
                marginTop: 10
              }}
              className="flex items-center justify-center bg-primary rounded-lg"
            >
             Send OTP
            </button>
          </Form.Item>
        </Form>
    </Modal>
    );
};

export default ForgetPassword;