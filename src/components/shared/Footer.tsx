import Link from "next/link";
import React from "react";
import { FaTiktok } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { LiaFacebookF } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 px-6 md:px-16">
      <div className="container mx-auto flex flex-col lg:flex-row justify-items-center gap-12 lg:gap-20 pb-[30px] py-[40px]">
        {/* About Section */}
        <div className="max-w-md">
          <h3 className="text-xl font-bold text-[#F3E7D8]">About re-wears</h3>
          <p className="mt-2 text-sm font-normal text-[#F3E7D8] tracking-wide leading-6">
            re-wears, your go-to platform for selling and buying pre-owned
            pieces. We&apos;re all about clean, sustainable living. Bid farewell
            to closet clutter and say hello to conscious consumerism.
          </p>
          <div className="flex gap-3 mt-4">
            <Link
              href={""}
              className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full "
            >
              {/* Instagram Icon */}
              <FiInstagram
                size={22}
                className="text-[#F3E7D8] hover:text-white"
              />
            </Link>
            <Link
              href={""}
              className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full "
            >
              {/* Facebook Icon */}
              <LiaFacebookF
                size={22}
                className="text-[#F3E7D8] hover:text-white"
              />
            </Link>
            <Link
              href={""}
              className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full "
            >
              {/* Facebook Icon */}
              <FaTiktok size={22} className="text-[#F3E7D8] hover:text-white" />
            </Link>
          </div>
        </div>

        {/* Links Sections */}
        <section className="grid grid-cols-3 gap-8 justify-between w-full flex-1">
          <div>
            <h3 className="text-lg font-semibold">re-wears</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-200">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/advertising">Advertising</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Discover</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-200">
              <li>
                <Link href="/how-it-works">How it works</Link>
              </li>
              <li>
                <Link href="/sell-now">Selling</Link>
              </li>
              <li>
                <Link href="/products">Buying</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Help</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-200">
              <li>
                <Link href="/help-center/home">Help Center</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/30 mt-6 pt-6 text-center text-sm text-white flex justify-start container gap-16">
        <Link href="privacy-policy">Privacy Policy</Link>
        <Link href="terms-&-conditions">Terms & Conditions</Link>
      </div>
    </footer>
  );
};

export default Footer;
