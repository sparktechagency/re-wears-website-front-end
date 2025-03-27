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
          src="https://media-hosting.imagekit.io//1b02544317ca4774/video%20home%20screen.mov?Expires=1836006202&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0BRmW4yviMiAoBQhXTo5g~M8vezvUdcU41NwPlzLS5F808luvXiI44731R3LG5yg6jQ6iY2WxOSsVhM7PQQVUMFn1cMsltt3uWKYIGzSmvvuOaQuBSGO8Fwei-g02wCmi6lcRNB-NxvB711BOt24VF-Ij9jQNAdet6yHpR5DOfSRLwH5J4vXPgbf-t52YV7~4AbQbPjmrnVXqTdLQoB5qWfEf1DuSRr-I2cYDsmH4xncPhGgr-UWnJIts-nL5MNn43BvBCXzirWDe2ThJJ4maQASYr6hutgNOfXlJHHAVN0NL9xtq33xOha07IgFyM6JQRZFdXeicbHHvPJNZb1RHw__"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="absolute bottom-6 lg:bottom-20 left-4 lg:left-20 z-10 flex items-end justify-center max-w-[90vw] lg:max-w-auto">
        <div className="grid gap-4 lg:gap-6 p-6 lg:p-9 bg-white rounded-xl border border-gray-200">
          <p className="text-3xl lg:text-[38px] font-bold text-[#000000] max-w-xs leading-tight">
            Say goodbye to closet clutter
          </p>
          <Link href={"/sell-now"}>
            <FillButton className="uppercase">Sell Now</FillButton>
          </Link>
          <Link href={`/how-it-works`} className="text-[14px] text-primary hover:underline">
          Ready to start? Here’s how.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
