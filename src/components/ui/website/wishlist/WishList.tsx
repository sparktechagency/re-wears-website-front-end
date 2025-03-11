import icon from "@/assets/icons/wishlist.svg";
import FillButton from "@/components/shared/FillButton";
import Label from "@/components/shared/Label";
import Image from "next/image";

const WishList = () => {
  return (
    <div className="bg-[#FDFDFD]">
      <section className="card !py-16 lg:!py-32 my-16 w-10/12 mx-auto grid justify-center gap-2">
        <Image
          src={icon}
          alt="wishlist icon"
          width={150}
          height={150}
          className="mx-auto"
        />
        <Label className="text-center text-xl">Your wishlist</Label>
        <p className="text-[#797979]">All your favorites will be saved here.</p>
        <div className="flex justify-center mt-4">
          <FillButton className="uppercase">Add to wishlist</FillButton>
        </div>
      </section>
    </div>
  );
};

export default WishList;
