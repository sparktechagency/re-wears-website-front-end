import Footer from "@/components/shared/Footer";
import NavbarWrapper from "@/components/shared/Navbar/NavbarWrapper";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavbarWrapper />
      <div className=" bg-[#fdfdfd]">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
