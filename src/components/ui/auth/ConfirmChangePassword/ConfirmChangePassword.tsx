import { Button } from 'antd';
import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const ConfirmChangePassword = () => {
    return (
        <div className="flex items-center justify-center lg:w-[600px] w-full">

            <div>
                <h1 className=" text-secondary text-[25px] font-bold   text-center pb-6">Change password</h1>

                <div className=' bg-[#F3E7D8] px-[83px] py-[32px] rounded-xl'>

                    <div className=' flex flex-col items-center gap-3'>
                        <p className=''> <FiCheckCircle size={41}  color='#9D977A'/>  </p>
                        <p className=' text-[16px] font-normal text-primary'> Your password has been changed successfully </p>
                    </div>

                </div> 

                <Button
              htmlType="submit"
              style={{
                width: '100%',
                height: 55,
                color: "white",
                fontWeight: "400px",
                fontSize: "18px",
                background: "#9D977A",
                marginTop: 40 , 
                borderRadius: "60px",
              }} 
              className='uppercase mt-5'
            >
            Continue to log in
            </Button> 
            </div>

        </div>
    );
};

export default ConfirmChangePassword;