import FillButton from "@/components/shared/FillButton";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative w-full h-[calc(100vh-135px)] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dkbcx9amc/video/upload/v1751023781/video_home_screen_hy5dhi.mov"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="absolute bottom-6 lg:bottom-20 left-4 lg:left-20 z-10 flex items-end justify-center max-w-[90vw] lg:max-w-auto">
        <div className="grid gap-4 lg:gap-6 p-6 lg:p-9 bg-white rounded-xl border border-gray-200">
          <p className="text-[20px] lg:text-[38px] font-bold text-[#000000] max-w-xs leading-tight">
            Say goodbye to closet clutter
          </p>
          <Link href={"/sell-now"}>
            <FillButton className="uppercase w-full px-0">Sell Now</FillButton>
          </Link>
          <Link
            href={`/how-it-works`}
            className="text-[14px] text-primary hover:underline lg:text-start text-center"
          >
            Ready to start? Here’s how.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
