"use client"
import { Button, Form } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react"
import OTPInput from "react-otp-input";

const VerifyOtp = () => { 
    const router = useRouter()
    const [otp, setOtp] = useState<string>("");
    const [email, setEmail] = useState<string | null>(null);

    useEffect(() => {
      const emailFromQuery = new URLSearchParams(window.location.search).get('email');
      setEmail(emailFromQuery);
    }, []); 

    console.log(email);
  
    const onFinish = async(values:{otp:string}) => {  
        const userType = localStorage.getItem("userType")
        console.log(values); 
        if(userType === "forget"){
            router.push(`/reset-password`);
        }else{
            router.push(`/login`);
        }
    };
  
    return (
        <div className=" lg:w-[600px] ">

        <div className=" mb-6 text-center">
          <h1 className="text-[25px] font-bold mb-3 text-secondary ">Verify your email</h1>
          <p className=" text-[#797979] text-[16px] ">Please enter the verification code we sent to this email address:</p> 
          <p className="text-secondary text-[16px] ">{email}</p>
        </div>


        <Form layout="vertical" onFinish={onFinish}>

          <div className="flex items-center justify-center mb-6">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={5}
              inputStyle={{
                height: 60,
                width: 60,
                borderRadius: "8px",
                margin: "16px",
                fontSize: "20px",
                border: "1px solid #818181",
                color: "#2B2A2A",
                outline: "none",
                marginBottom: 10
              }}
              renderInput={(props) => <input {...props} />}
            />

          </div>

     

          <Form.Item style={{marginBottom: 0}}>
            <Button
              htmlType="submit"
              style={{
                width: "100%",
                height: 55,
                border: "1px solid #d9d9d9",
                outline: "none",
                boxShadow: "none",
                background: "#9D977A",
                color: "white" , 
                borderRadius: "60px",
              }} 
              className="uppercase tracking-wider"
            >
            Verify
            </Button>
          </Form.Item>
        </Form> 

        <div className="flex items-center justify-center pt-6 cursor-pointer " onClick={() => router.push(`/resend-code`)}>
            <p  className="text-primary">Didn’t receive our email?</p>

          </div>
    </div>
    );
};

export default VerifyOtp;