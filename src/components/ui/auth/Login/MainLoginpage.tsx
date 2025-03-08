"use client"
import Login from '@/components/ui/auth/Login/Login';
import { ConfigProvider, Segmented } from 'antd';
import React, { useState } from 'react';
import Register from '../Register/Register';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

const MainLoginPage = () => {
    const [selectedTab, setSelectedTab] = useState("LOG IN");
    return (
        <div className=' container mx-auto flex items-center justify-center py-[60px]'>
            <div className=' '>
                <div className=' flex flex-col items-center gap-1 mb-5'>
                    <p className=' text-[22px] font-bold text-[#000000] tracking-wide'> Sell without fees.  </p>
                    <p className=' text-[22px] font-bold text-[#000000] tracking-wide'> Embrace sustainable fashion.  </p>
                </div>

                <div className=' flex items-center justify-center w-full'>

                    <div>

                        <div className=' flex items-center justify-center w-full'>
                            <div className=' border border-[#ABABAB] rounded-full text-primary w-[480px] flex items-center justify-center'>
                                <ConfigProvider
                                    theme={{
                                        components: {
                                            Segmented: {
                                                trackPadding: "8px 7px",
                                                itemSelectedBg: "#9d977a",
                                                itemSelectedColor: "#fff",
                                                trackBg: "#fff",

                                            },
                                        },
                                        token: {
                                            controlHeight: 44,
                                            controlPaddingHorizontal: 80,

                                        },
                                    }}
                                >

                                    <Segmented
                                        options={["LOG IN", "REGISTER"]}
                                        className=" flex items-center justify-center  segmented-gap"
                                        style={{
                                            height: '60px',

                                        }}
                                        value={selectedTab}
                                        onChange={(value) => setSelectedTab(value)}
                                    />

                                </ConfigProvider>

                            </div>
                        </div>

                        <div className=' flex items-center justify-center'>
                        <div className='  flex flex-col items-center justify-center gap-3 my-5 lg:w-[480px] border-b border-[#ABABAB] pb-5'>

                            <p className='text-lg font-normal text-center '> Log in to continue </p>

                            <button className=' flex items-center justify-center w-full border border-[#000000] rounded-full text-[#000000] gap-3  h-[50px]'> <span> <FaApple size={26} /> </span> <span> Continue with Apple </span> </button>

                            <button className=' flex items-center justify-center w-full border border-[#000000] rounded-full text-[#000000] gap-3  h-[50px]'> <span> <FcGoogle size={24} /> </span> <span> Continue with Google </span> </button>

                        </div>
                        </div>
                        
                        <div className='flex items-center justify-center'> 
                        {selectedTab === "LOG IN" ? <Login /> : <Register />}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainLoginPage;