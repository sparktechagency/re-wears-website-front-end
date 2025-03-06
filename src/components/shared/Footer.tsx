import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { LiaFacebookF } from 'react-icons/lia';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-10 px-6 md:px-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 justify-items-center gap-8 pb-[30px] py-[40px]">
          {/* About Section */}
          <div className='md:col-span-2'>
            <h3 className="text-xl font-bold text-[#F3E7D8]">About re-wears</h3>
            <p className="mt-2 text-sm font-normal text-[#F3E7D8] tracking-wide w-[80%] leading-6">
              re-wears, your go-to platform for selling and buying pre-owned pieces. We&apos;re all about clean,
              sustainable living. Bid farewell to closet clutter and say hello to conscious consumerism.
            </p>
            <div className="flex gap-3 mt-4">
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full ">
                {/* Instagram Icon */}
            <FiInstagram size={22} color='#ffffff' />
              </div>
              <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full ">
                {/* Facebook Icon */}
                <p><LiaFacebookF size={22}  color='#ffffff'   /></p>
              </div>
            </div>
          </div>
  
          {/* Links Sections */}
          <div>
            <h3 className="text-lg font-semibold">re-wears</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-200">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Advertising</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold">Discover</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-200">
              <li><a href="#">How it works</a></li>
              <li><a href="#">Selling</a></li>
              <li><a href="#">Buying</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold">Help</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-200">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="border-t border-white/30 mt-6 pt-6 text-center text-sm text-white flex justify-start container gap-16">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </footer>
  
    );
};

export default Footer;