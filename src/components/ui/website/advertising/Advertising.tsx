import Image from "next/image";
import image from "@/assets/images/advertising.png";

const Advertising = () => {
  return (
    <div className="py-12 lg:py-20">
      <section className="container grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="grid gap-4 lg:gap-6">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
            Advertise with re-wears
          </h1>
          <p className="lg:text-lg">
            Want to work with us? Please contact us at{" "}
            <span className="text-primary underline font-bold">
              ads@re-wears.com
            </span>
          </p>
        </div>
        <figure>
          <Image
            src={image}
            alt="image"
            width={542}
            height={521}
            className="w-full"
          />
        </figure>
      </section>
    </div>
  );
};

export default Advertising;
