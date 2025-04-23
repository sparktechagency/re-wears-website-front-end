"use client"
import { Form, Input } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';

const CompleteRegistration = () => {  
    const router  = useRouter()
    const OnFinish = async (values:{username:string}) => { 
        console.log(values) 
        router.push(`/confirm-registration?userName=${values?.username}`);
    } 

    return (
        <div className='container mx-auto max-w-[540px] lg:mt-[140px] mt-10 h-[calc(100vh-300px)]'>
            <div className="text-center mb-6">
                <h1 className="text-[25px] font-bold ">Complete your registration</h1>

            </div>

            <Form  onFinish={OnFinish} >
                <Form.Item
                    name="username"
                    rules={[{
                        required: true,
                        message: `Please enter your username !`,
                    },
                    ]} 
                      className='input-bottom'
                >
                    <Input
                        placeholder={`Enter your username `}
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
                <p className=' text-[#797979] text-[12px]  '> Please use only letters and numbers. Pick something you like - usernames can’t be changed later. </p>

                <Form.Item>
                    <button

                        type="submit"
                        style={{
                            width: '100%',
                            height: 55,
                            color: "white",
                            fontWeight: "400px",
                            fontSize: "18px",
                            borderRadius: 60,
                            marginTop: 24
                        }}
                        className="flex items-center justify-center bg-primary rounded-lg uppercase"
                    >
                        Continue
                    </button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CompleteRegistration;