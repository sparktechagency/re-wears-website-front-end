import { Divider } from "antd";
import Link from "next/link";

const SidebarMenu = () => {
  return (
    <>
      <h1 className="heading-1 !pt-2">Help Center</h1>
      <ul>
        <li className="h-auto">
          <Link href={`/help-center`}>
            <button className="text-[#797979] py-3 focus:font-bold w-full text-start">
              Home
            </button>
          </Link>
          <Divider style={{ margin: "0" }} />
        </li>
        <li className="h-auto">
          <Link href={`/help-center/getting-started`}>
            <button className="text-[#797979] py-3 focus:font-bold w-full text-start">
              Getting Started
            </button>
          </Link>
          <Divider style={{ margin: "0" }} />
        </li>
        <li className="h-auto">
          <Link href={`/help-center/selling`}>
            <button className="text-[#797979] py-3 focus:font-bold w-full text-start">
              Selling
            </button>
          </Link>
          <Divider style={{ margin: "0" }} />
        </li>
        <li className="h-auto">
          <Link href={`/help-center/buying`}>
            <button className="text-[#797979] py-3 focus:font-bold w-full text-start">
              Buying
            </button>
          </Link>
          <Divider style={{ margin: "0" }} />
        </li>
        <li className="h-auto">
          <Link href={`/help-center/shipping`}>
            <button className="text-[#797979] py-3 focus:font-bold w-full text-start">
              Shipping
            </button>
          </Link>
          <Divider style={{ margin: "0" }} />
        </li>
        <li className="h-auto">
          <Link href={`/help-center/payments`}>
            <button className="text-[#797979] py-3 focus:font-bold w-full text-start">
              Payments
            </button>
          </Link>
          <Divider style={{ margin: "0" }} />
        </li>
        <li className="h-auto">
          <Link href={`/help-center/safety-&-reporting`}>
            <button className="text-[#797979] py-3 focus:font-bold w-full text-start">
              Safety & Reporting
            </button>
          </Link>
          <Divider style={{ margin: "0" }} />
        </li>
        <li className="h-auto">
          <Link href={`/help-center/my-account-&-settings`}>
            <button className="text-[#797979] py-3 focus:font-bold w-full text-start">
              My account & Settings
            </button>
          </Link>
          <Divider style={{ margin: "0" }} />
        </li>
      </ul>
    </>
  );
};

export default SidebarMenu;
