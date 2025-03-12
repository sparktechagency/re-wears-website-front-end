import icon from "@/assets/icons/wishlist.svg";
import FillButton from "@/components/shared/FillButton";
import Label from "@/components/shared/Label";
import Image from "next/image";
import productsData from "@/data/products.json";
import ProductCard from "@/components/shared/ProductCard";

const WishList = () => {
  return (
    <div className="bg-[#FDFDFD]">
      {/* show empty message when no items added */}
      {productsData.length < 1 && (
        <section className="card container !py-16 lg:!py-32 my-16 grid justify-center gap-2">
          <Image
            src={icon}
            alt="wishlist icon"
            width={150}
            height={150}
            className="mx-auto"
          />
          <Label className="text-center text-xl">Your wishlist</Label>
          <p className="text-[#797979]">
            All your favorites will be saved here.
          </p>
          <div className="flex justify-center mt-4">
            <FillButton className="uppercase">Add to wishlist</FillButton>
          </div>
        </section>
      )}

      {/* display added items */}
      <section className="my-16">
        <h1 className="text-2xl font-bold text-center">Your wishlist</h1>
        <div className="container card my-10 grid grid-cols-2 lg:grid-cols-6 gap-4">
          {productsData.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default WishList;
