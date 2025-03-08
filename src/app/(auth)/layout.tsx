import React from 'react'; 
import { Poppins } from 'next/font/google'; 
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar/Navbar';

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className=""> 
        <Navbar />
        <div  className={` ${poppins.className} min-h-[calc(100vh-140px)] flex items-center justify-center  `} >
           {children}
        </div> 
        <Footer />
    </div>
    );
};

export default layout;