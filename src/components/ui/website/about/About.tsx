import image1 from "@/assets/images/about-1.svg";
import image2 from "@/assets/images/about-2.svg";
import image3 from "@/assets/images/about-3.svg";
import Image from "next/image";
import icon1 from "@/assets/icons/about-icon-1.svg";
import icon2 from "@/assets/icons/about-icon-2.svg";
import icon3 from "@/assets/icons/about-icon-3.svg";
import FillButton from "@/components/shared/FillButton";

const About = () => {
  return (
    <div className="grid gap-14 lg:gap-20 bg-[#F5F5F5] py-12 lg:py-20">
      {/* image gallery */}
      <section className="grid gap-8">
        <h1 className="heading-1 text-center px-4">
          If you&apos;re not wearing it, someone else could be
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <Image
            src={image1}
            alt="image"
            width={518}
            height={359}
            className="w-full"
          />
          <Image
            src={image2}
            alt="image"
            width={518}
            height={359}
            className="w-full"
          />
          <Image
            src={image3}
            alt="image"
            width={518}
            height={359}
            className="w-full"
          />
        </div>
      </section>

      {/* card section */}
      <section className="container grid gap-8">
        <h1 className="heading-1 text-center md:text-3xl max-w-screen-sm mx-auto">
          Welcome to re-wears, the ultimate destination for clean, sustainable
          living
        </h1>
        {/* card container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="flex flex-col gap-6 p-8 rounded-xl shadow-smooth">
            <Image src={icon1} alt="icon" width={56} height={60} />
            <h1 className="text-xl lg:text-2xl font-bold">
              Sell Easily, Earn More: re-wears UAE
            </h1>
            <p className="lg:text-lg text-[#797979]">
              Say farewell to closet clutter and embrace conscious consumerism
              with our platform. Selling your preloved clothes is a breeze,
              allowing you to earn cash without worrying about hidden fees. At
              re-wears, we proudly serve the entire UAE, offering you the
              freedom to sell on your own terms. You determine the price, the
              timing, and the conditions.
            </p>
          </div>
          <div className="flex flex-col gap-6 p-8 rounded-xl shadow-smooth">
            <Image src={icon2} alt="icon" width={56} height={60} />
            <h1 className="text-xl lg:text-2xl font-bold">
              Rewrite Fashion: Wear It Forward
            </h1>
            <p className="lg:text-lg text-[#797979]">
              Let&apos;s rewrite the fashion narrative together - because if you&apos;re
              not wearing it, someone else could. Join us in creating a more
              sustainable future, one wardrobe at a time.
            </p>
          </div>
          <div className="flex flex-col gap-6 p-8 rounded-xl shadow-smooth">
            <Image src={icon3} alt="icon" width={56} height={60} />
            <h1 className="text-xl lg:text-2xl font-bold">
              Share Your Thoughts: Help Us Improve at re-wears
            </h1>
            <p className="lg:text-lg text-[#797979]">
              We value your feedback. If you have any suggestions, comments, or
              experiences to share about our website, please feel free to reach
              out to us at{" "}
              <span className="text-primary font-bold">
                support@re-wears.com.
              </span>{" "}
              Your input helps us improve and better serve you. Thank you for
              being a part of the re-wears community.
            </p>
          </div>
        </div>
        <div className="grid justify-center py-6">
          <FillButton className="uppercase md:px-20">Sell Now</FillButton>
        </div>
      </section>
    </div>
  );
};

export default About;
