/* eslint-disable @next/next/no-img-element */
"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const NotFoundPage = () => { 
    const router = useRouter()
    return (
        <div className='h-screen flex items-center justify-center '> 

        <div className=' flex items-center justify-center flex-col lg:w-[600px] gap-4'> 
            
            <div> 
 <img src="/notfound.svg" alt="" className=' w-[400px] h-[350px] ' />
            </div> 

            <p className=' text-secondary text-[26px] font-bold'> Oh no...  </p> 
            <p className=' text-[16px] text-[#797979] font-normal text-center tracking-wide '> 
            We encountered a small system error. Please try again shortly. Our team is on it! 
            </p>
            <button
              className=' text-primary text-[16px] font-medium underline underline-offset-2  ' 
              onClick={() => router.push("/")}
            >
            Go Back to Home
            </button> 
        </div>
        </div>
    );
};

export default NotFoundPage;