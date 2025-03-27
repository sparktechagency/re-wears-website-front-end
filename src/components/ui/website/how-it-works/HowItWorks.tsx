import Image from "next/image";
import image1 from "@/assets/images/how-it-works-1.svg";
import image2 from "@/assets/images/how-it-works-2.svg";
import FillButton from "@/components/shared/FillButton";

const HowItWorks = () => {
  return (
    <div>
      <section className="container">
        <div className="bg-primary text-white p-12 py-16 rounded-lg my-12 grid gap-6">
          <h1 className="text-2xl lg:text-3xl font-semibold">
            re-wears, your go-to platform for selling and <br /> buying
            pre-owned pieces
          </h1>
          <p className="lg:text-lg">
            We&apos;re all about clean, sustainable living. Bid farewell to
            closet clutter and <br /> say hello to conscious consumerism.{" "}
          </p>
        </div>
      </section>

      {/* sell section */}
      <section className="container pb-14 lg:pb-20">
        <h1 className="heading-1 text-center">SELL</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <figure className="w-full">
            <Image
              src={image1}
              alt="shirt-image"
              width={558}
              height={368}
              className="w-full"
            />
          </figure>
          <div className="flex-1 grid gap-4">
            <div className="p-6 py-8 shadow-smooth rounded-xl flex items-center gap-4">
              <span className="text-4xl text-primary font-bold">01</span>
              <p className="text-[16px]">
                Create an account and give your preloved clothes a new life.
              </p>
            </div>
            <div className="p-6 py-8 shadow-smooth rounded-xl flex items-center gap-4">
              <span className="text-4xl text-primary font-bold">02</span>
              <p className="text-[16px]">
                List your item, snap photos, describe it, and set your price -
                breathe new creativity into your wardrobe.
              </p>
            </div>
            <div className="p-6 py-8 shadow-smooth rounded-xl flex items-center gap-4">
              <span className="text-4xl text-primary font-bold">03</span>
              <p className="text-[16px]">
                Communicate with buyers, agree on shipping or pickup, and
                receive payments directly. It&apos;s your platform to sell, with
                every dirham staying in your pocket.
              </p>
            </div>
          </div>
        </div>
        <div className="py-4 text-center">
          <FillButton className="uppercase">Start Earning</FillButton>
        </div>
      </section>

      {/* buy section */}
      <section className="py-14 lg:py-20 bg-[#F5F5F5]">
        <div className="container">
          <h1 className="heading-1 text-center">BUY</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="flex-1 grid gap-4">
              <div className="p-6 py-8 shadow-smooth rounded-xl flex items-center gap-4">
                <span className="text-4xl text-primary font-bold">01</span>
                <p className="text-[16px]">
                Create an account and join our community dedicated to sustainable living.
                </p>
              </div>
              <div className="p-6 py-8 shadow-smooth rounded-xl flex items-center gap-4">
                <span className="text-4xl text-primary font-bold">02</span>
                <p className="text-[16px]">
                Explore our catalog and find preloved gems waiting for a second chance.
                </p>
              </div>
              <div className="p-6 py-8 shadow-smooth rounded-xl flex items-center gap-4">
                <span className="text-4xl text-primary font-bold">03</span>
                <p className="text-[16px]">
                Communicate with sellers, agree on shipping or pickup, and make direct payments. It&apos;s a platform where buyers and sellers connect for a sustainable fashion revolution.
                </p>
              </div>
            </div>
            <figure className="w-full">
              <Image
                src={image2}
                alt="shirt-image"
                width={558}
                height={368}
                className="w-full"
              />
            </figure>
          </div>
          <div className="py-4 text-center">
            <FillButton className="uppercase">Start browsing</FillButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
