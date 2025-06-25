import React from "react";
import { Poppins } from "next/font/google";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { myFetch } from "@/helpers/myFetch";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const layout = async ({ children }: { children: React.ReactNode }) => {
  const categoriesRes = await myFetch("/nav/category", { cache: "no-store" });

  return (
    <>
      <Navbar categoriesData={categoriesRes?.data} />
      <div className={` ${poppins.className} min-h-[calc(100vh-140px)]`}>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default layout;
