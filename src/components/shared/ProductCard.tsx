import { TProduct } from "@/types/TProduct";
import { Heart, ShieldCheck } from "lucide-react";
import Image from "next/image";

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="rounded-xl border">
      <figure className="relative">
        <button className="flex items-center gap-2 p-2 bg-[#9D977A] bg-opacity-60 text-white rounded-lg absolute top-3 left-3">
          <Heart size={20} />
          <span>8</span>
        </button>
        <Image
          src={product?.images[0]}
          alt="img"
          width={210}
          height={220}
          className="rounded-t-xl w-full"
        />
      </figure>
      <div className="grid gap-1 p-4">
        <h3 className="font-bold">${product.price}</h3>
        <p className="flex items-center gap-1 text-primary text-sm">
          ${product.price + product.vat} incl. <ShieldCheck size={20} />
        </p>
        <p className="text-sm">{product.size}</p>
        <h4 className="font-bold">{product.title}</h4>
      </div>
      <div className="flex items-center gap-3 bg-[#F5F5F5] p-2 px-4 rounded-b-xl">
        <Image
          src={product.user.image}
          alt="image"
          width={30}
          height={30}
          className="rounded-full size-8"
        />
        <h5>{product.user.username}</h5>
      </div>
    </div>
  );
};

export default ProductCard;
