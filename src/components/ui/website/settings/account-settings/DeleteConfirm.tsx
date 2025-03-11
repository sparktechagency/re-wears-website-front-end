import React from 'react';

const DeleteConfirm = () => {
    return (
        <div className=' flex items-center justify-center'> 

            <div className=' flex flex-col items-center gap-3'> 
            <p className='text-secondary text-[22px] font-bold'>Account Deleted</p>  
            <p className=' w-[600px] text-[16px] text-[#797979] font-normal text-center '> While we&apos;re sorry to see you leave, remember that you&apos;re welcome back anytime! </p>

            </div>
        </div>
    );
};

export default DeleteConfirm;