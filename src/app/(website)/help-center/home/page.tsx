// import icon1 from "@/assets/icons/help-center/getting-started.svg";
import icon2 from "@/assets/icons/help-center/selling.svg";
import icon3 from "@/assets/icons/help-center/buying.svg";
import icon4 from "@/assets/icons/help-center/shipping.svg";
import icon5 from "@/assets/icons/help-center/payments.svg";
import icon6 from "@/assets/icons/help-center/safty & reporting.svg";
import icon7 from "@/assets/icons/help-center/account & setting.svg";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1 className="hidden lg:block text-2xl lg:text-3xl font-bold py-4"></h1>

      {/* topics card container */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="grid justify-center text-center gap-4 p-10 shadow-smooth rounded-xl">
          <figure className="flex justify-center">
            <Image src={icon2} alt="icon" width={63} height={63} className="" />
          </figure>
          <Link href={`/help-center/selling`} className="underline">
            Selling
          </Link>
        </div>

        <div className="grid justify-center text-center gap-4 p-10 shadow-smooth rounded-xl">
          <figure className="flex justify-center">
            <Image src={icon3} alt="icon" width={70} height={70} className="" />
          </figure>
          <Link href={`/help-center/buying`} className="underline">
            Buying
          </Link>
        </div>

        <div className="grid justify-center text-center gap-4 p-10 shadow-smooth rounded-xl">
          <figure className="flex justify-center">
            <Image
              src={icon4}
              alt="icon"
              width={100}
              height={63}
              className=""
            />
          </figure>
          <Link href={`/help-center/shipping`} className="underline">
            Shipping
          </Link>
        </div>

        <div className="grid justify-center text-center gap-4 p-10 shadow-smooth rounded-xl">
          <figure className="flex justify-center">
            <Image src={icon5} alt="icon" width={63} height={63} className="" />
          </figure>
          <Link href={`/help-center/payments`} className="underline">
            Payments
          </Link>
        </div>

        <div className="grid justify-center text-center gap-4 p-10 shadow-smooth rounded-xl">
          <figure className="flex justify-center">
            <Image src={icon6} alt="icon" width={63} height={63} className="" />
          </figure>
          <Link href={`/help-center/safety-&-reporting`} className="underline">
            Safety & Reporting
          </Link>
        </div>

        <div className="grid justify-center text-center gap-4 p-10 shadow-smooth rounded-xl">
          <figure className="flex justify-center">
            <Image src={icon7} alt="icon" width={63} height={63} className="" />
          </figure>
          <Link
            href={`/help-center/my-account-&-settings`}
            className="underline"
          >
            My account & Settings
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
