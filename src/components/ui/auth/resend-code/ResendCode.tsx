"use client"
import TextInput from '@/components/shared/TextInput';
import { Form } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';
import { GoDotFill } from 'react-icons/go';

const ResendCode = () => { 
    const router = useRouter() 

    const onFinish = async() => {
        router.push(`/reset-password`);
    }
    return (
        <div className='w-[600px]'>
            <p className='text-secondary text-[25px] font-bold text-center pb-4'> I didn’t receive my email </p>

            <div className='flex flex-col gap-2 mb-7'>
                <p className='text-[#797979] text-[16px] flex items-center gap-2'> <span> <GoDotFill /> </span> <span>Check your spam folder to make sure our email didn’t end up there. </span> </p>


                <p className='text-[#797979] text-[16px] flex items-center gap-2'> <span> <GoDotFill /> </span> <span>If you still can’t see it anywhere, please use the resend button. </span> </p>

                <p className='text-[#797979] text-[16px] flex items-center gap-2'> <span> <GoDotFill /> </span> <span>Make sure you entered you email address correctly. </span> </p>

                <p className='text-[#797979] text-[16px] flex items-center gap-2'> <span> <GoDotFill /> </span> <span>If you’re still having problems, problems, please check our <span className=' font-bold underline underline-offset-2'>  Help Center  </span>  </span> </p>
            </div> 

            <Form layout="vertical"  onFinish={onFinish} >
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
                marginTop: 0
              }}
              className="flex items-center justify-center bg-primary rounded-lg"
            >
            Resend verification code
            </button>
          </Form.Item>
        </Form> 


        </div>
    );
};

export default ResendCode;