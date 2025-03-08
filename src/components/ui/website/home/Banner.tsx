import CmnButton from "@/components/shared/CmnButton";

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
            <source src="https://media-hosting.imagekit.io//1b02544317ca4774/video%20home%20screen.mov?Expires=1836006202&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0BRmW4yviMiAoBQhXTo5g~M8vezvUdcU41NwPlzLS5F808luvXiI44731R3LG5yg6jQ6iY2WxOSsVhM7PQQVUMFn1cMsltt3uWKYIGzSmvvuOaQuBSGO8Fwei-g02wCmi6lcRNB-NxvB711BOt24VF-Ij9jQNAdet6yHpR5DOfSRLwH5J4vXPgbf-t52YV7~4AbQbPjmrnVXqTdLQoB5qWfEf1DuSRr-I2cYDsmH4xncPhGgr-UWnJIts-nL5MNn43BvBCXzirWDe2ThJJ4maQASYr6hutgNOfXlJHHAVN0NL9xtq33xOha07IgFyM6JQRZFdXeicbHHvPJNZb1RHw__" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        {/* Content Overlay */}
        <div className="absolute bottom-1/3 left-20 z-10 flex items-end justify-center   ">
           <div className="p-[35px]  h-[300px] bg-white rounded-xl border border-gray-200"> 
                <p className="text-[38px] font-bold text-[#000000] w-[328px]">Say goodbye to closet clutter</p> 
                <CmnButton className="px-10 py-5 lg:text-[16px] mt-3 tracking-wider">Sell Now</CmnButton> 
                <p className="text-[14px] font-semibold text-primary mt-3 underline underline-offset-2">Learn how it works</p>
           </div>
        </div>

     
    </div>
    );
};

export default Banner;