/* eslint-disable @next/next/no-img-element */
"use client"
import { TProduct } from "@/types/TProduct";
import { Heart, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }: { product: TProduct }) => {
  const [isFavorite, setIsFavorite] = useState(false) 
  const router = useRouter()
  return (
    <div className="rounded-xl border cursor-pointer " onClick={() => router.push(`/product-details`)}>
      <figure className="relative">
        <button className={`flex items-center gap-2 p-2 bg-[#9D977A] bg-opacity-60 text-white rounded-lg absolute top-3 left-3`} onClick={() => setIsFavorite(!isFavorite)}>
          {
            isFavorite ? <FaHeart size={20} color="#ffffff" /> : <Heart size={20} />
          }

          <span> {
            isFavorite  ? (8+1) : 8
          }</span>
        </button>
        <img
          src={product?.images[0]}
          alt="img"

          className="rounded-t-xl w-full h-[292px] object-fill"
        />
      </figure>
      <div className="grid gap-1 p-4 ">
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
