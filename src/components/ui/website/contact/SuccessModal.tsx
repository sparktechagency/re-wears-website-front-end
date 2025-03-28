import FillButton from "@/components/shared/FillButton";
import { Modal } from "antd";
import { FiCheckCircle } from "react-icons/fi";

const SuccessModal = ({open , setOpen}:{open:boolean , setOpen:(open:boolean)=>void}) => {
    return (
        <Modal open={open} onCancel={() => setOpen(false)} width={470} footer={null} centered>

           <div className="">  
            <p className="text-center font-bold text-[22px] text-[#000000] mb-4 ">  Thanks for reaching out! </p>
            
             <div className="bg-[#f3e7d8]  flex flex-col items-center justify-center  pb-5 pt-3 rounded-xl"> 
                <p> <FiCheckCircle size={41} color="#9D977A" /> </p>
                <p className="text-[16px] font-normal px-12 pt-3 text-[#9D977A] text-center">We’ll get back to you within 48 hours.</p>
             </div> 

             <FillButton className="uppercase w-full mx-auto mt-4"> continue browsing </FillButton>
            </div> 
        </Modal>
    );
};

export default SuccessModal;