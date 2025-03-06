
const Banner = () => {
    return (
        <div className="relative w-full h-[calc(100vh-180px)] overflow-hidden">
        {/* Background Video */}
        <video 
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
        >
            <source src="https://media-hosting.imagekit.io//0ac241c717fc4f24/856213-hd_1920_1080_24fps.mp4?Expires=1831953825&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Xn9WTlwDunB~hZtjEkaRQCjAgx7uUV~2bS0Vni5ForrzGiG1TB70mOmObR~rf3SlHoG29cS6rSJvI7Oy1gDz2j01JqJxqi7c032oQxmz9kWWgEVL68dNgyipdug0G8cAp4PpSox5MF8JWqAIztbnuWHwxksQNgmeevxqwZGAk3s5XfMjxEHTfgV~RqYb~GQlZyaWIUdeWT3QHOZfFEziXrKYnGMYZMvXxJwkgURErwPzMr3zsuFbUwrTnzPSNMq09dUNhoKb5C2IEETGrTwdI3r5JKnvx2SJoCc--4jAeDTW3mP7AdnEKP7D2WjpUMNh8fH5oapZ7yKE54ERMe7znQ__" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full text-white">
            <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
        </div>

     
    </div>
    );
};

export default Banner;