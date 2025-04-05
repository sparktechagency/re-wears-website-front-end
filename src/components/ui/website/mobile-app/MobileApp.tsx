import FillButton from "@/components/shared/FillButton";
import image from "@/assets/images/our-app.svg";
import Image from "next/image";

const MobileApp = () => {
  return (
    <div className=" container py-[25px] lg:py-32 "> 
              <h1 className="text-xl font-bold  block  lg:hidden text-center mb-6">
            re-wears, but easier. <br /> re-wears app
          </h1> 
      <section className="  flex  justify-between items-center lg:gap-16 gap-[35px]">
        <div className="grid justify-items-center gap-6">
          <h1 className="text-xl font-bold  hidden lg:block ">
            re-wears, but easier. re-wears app
          </h1>
          <p className="text-[#797979] text-center">
            Thanks for your patience as we craft an app just for you.
          </p>
          <div className="mt-6 lg:mt-10 hidden lg:block">
            <FillButton className="uppercase">Sell Now</FillButton>
          </div>
        </div>
        <figure className="lg:w-2/5">
          <Image src={image} alt="image" width={450} height={736} />
        </figure>
      </section> 

      <div className="mt-6 block lg:hidden">
            <FillButton className="uppercase w-full">Sell Now</FillButton>
          </div> 

    </div>
  );
};

export default MobileApp;
