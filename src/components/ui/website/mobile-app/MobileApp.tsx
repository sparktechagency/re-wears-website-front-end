import FillButton from "@/components/shared/FillButton";
import image from "@/assets/images/our-app.svg";
import Image from "next/image";

const MobileApp = () => {
  return (
    <div>
      <section className="container py-16 lg:py-32 flex flex-col lg:flex-row justify-between items-center gap-16">
        <div className="grid justify-items-center gap-6">
          <h1 className="text-xl font-bold">
            re-wears, but easier. re-wears app
          </h1>
          <p className="text-[#797979] text-center">
            Thanks for your patience as we craft an app just for you.
          </p>
          <div className="mt-6 lg:mt-10">
            <FillButton className="uppercase">Sell Now</FillButton>
          </div>
        </div>
        <figure className="lg:w-2/5">
          <Image src={image} alt="image" width={450} height={736} />
        </figure>
      </section>
    </div>
  );
};

export default MobileApp;
