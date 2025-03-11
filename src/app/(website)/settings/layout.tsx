import SidebarMenu from "@/components/ui/website/settings/SidebarMenu";
import { Metadata } from "next";

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
          <div className="py-6">{children}</div>
        </section>
      </div>
    </div>
  );
};

export default HelpCenterLayout;
