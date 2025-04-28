import SidebarMenu from "@/components/ui/website/help-center/SidebarMenu";
import { Input } from "antd";
import { Metadata } from "next";
import { BsSearch } from "react-icons/bs";

export const metadata: Metadata = {
  title: "Help Center | Re-Wears",
};
const HelpCenterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#FDFDFD]">
      <div className="flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-20 container py-12 lg:py-16 lg:!pb-20">
        {/* left side menu bar */}
        <section className="hidden lg:block">
          <SidebarMenu />
        </section>

        {/* rifht side content body */}
        <section className="flex-1">
          <div className="hidden lg:grid gap-3" style={{ width: "100%" }}>
            <Input
              prefix={<BsSearch size={20} color="#797979" />}
              placeholder="Search by keyword"
              style={{
                border: "none",
                fontSize: "16px",
                borderBottom: "1px solid #797979",
                borderRadius: "0",
                height: "42px",
              }}
              className="placeholder:text-[#797979] placeholder:text-[16px] placeholder:font-semibold "
            />
          </div>
          <div className="py-6">{children}</div>
        </section>
      </div>
    </div>
  );
};

export default HelpCenterLayout;
