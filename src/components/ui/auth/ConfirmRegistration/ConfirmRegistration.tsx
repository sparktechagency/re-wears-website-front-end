"use client"

import FillButton from "@/components/shared/FillButton";
import { useSearchParams } from "next/navigation";


const ConfirmRegistration = () => { 
    const searchParams = useSearchParams(); 
    const userName = searchParams.get("userName");
    console.log(userName); 
    return (
        <div>
            <div className='container mx-auto max-w-[580px] lg:mt-[140px] mt-10 h-[calc(100vh-300px)]'>
            <div className="text-center mb-6">
                <h1 className="text-[22px] font-bold ">Welcome </h1>
                <h1 className="text-[22px] font-bold ">{userName} </h1>

            </div>
            <div className="text-center mb-5">
                <h1 className="text-[16px] font-bold ">You have created an account on re-wears, your go-to platform for selling and buying pre-owned pieces. </h1>
            </div>
            <div className="text-center mb-3">
                <h1 className="text-[16px] font-semiboldbold text-[#797979] ">Let&apos;s rewrite the fashion narrative together – because if you&apos;re not wearing it, someone else could. </h1>
            </div>

  <FillButton className="uppercase mt-6 w-full">Start selling now</FillButton>
        </div> 
        </div>
    );
};

export default ConfirmRegistration;