/* eslint-disable @next/next/no-img-element */
"use client"
import { config } from "@/config/env-config";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }: { product: any }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="rounded-xl border">
      <figure className="relative">
        {/* favourite button */}
        <button
          className={`flex items-center gap-2 p-2 bg-[#9D977A] bg-opacity-60 text-white rounded-lg absolute top-3 left-3`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? (
            <FaHeart size={20} color="#ffffff" />
          ) : (
            <Heart size={20} />
          )}

          <span> {isFavorite ? 8 + 1 : 8}</span>
        </button>
        <Link href={"/product-details"}>
          <Image
            src={`${config.IMAGE_URL}${product?.productImage[0]}`}
            alt="img"
            width={250}
            height={300}
            className="rounded-t-xl w-full object-cover"
            style={{ aspectRatio: "12/14" }}
          />
        </Link>
      </figure>
      <Link href={"/product-details"}>
        <div className="grid gap-1 p-4 ">
          <h3 className="font-bold">${product?.price}</h3>
          <p className="text-sm">{product?.size?.name}</p>
          <h4 className="font-bold">{product?.name}</h4>
        </div>
        <div className="flex items-center gap-3 bg-[#F5F5F5] p-2 px-4 rounded-b-xl">
          <Image
            src={product.user.image}
            alt="image"
            width={30}
            height={30}
            className="rounded-full size-8"
          />
          <h5>
            {product.user.firstName} {product.user.lastName}
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
