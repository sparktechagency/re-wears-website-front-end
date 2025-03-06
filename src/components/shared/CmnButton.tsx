import React from 'react'; 
import { Poppins } from 'next/font/google'; 
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] }); 

interface IButtonProps {
  name?: React.ReactNode;
  children?: React.ReactNode;
  className: string;
}

const CmnButton: React.FC<IButtonProps> = ({ children, className }) => {
    return <button type="submit" className={`   bg-primary  text-white font-normal  lg:text-[14px] text-[12px] rounded-full ${poppins.className} ${className}`} >
    {children}
  </button>
};

export default CmnButton;