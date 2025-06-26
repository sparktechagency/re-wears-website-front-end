/* eslint-disable @next/next/no-img-element */
"use client";
import { IMAGE_URL } from "@/config/env-config";
import { myFetch } from "@/helpers/myFetch";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }: { product: any }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(
    product?.wishlist?.length || 0
  );
  console.log("IsFavorite", isFavorite);

  useEffect(() => {
    setIsFavorite(
      product?.wishlist?.some((item: any) => item.user === product?.user?._id)
    );
  }, [product?.wishlist, product?.user?._id]);

  const toggleFavorite = async () => {
    try {
      const res = await myFetch(`/wishlist`, {
        method: "POST",
        body: {
          product: product._id,
        },
      });
      if (res.success) {
        toast.success("Product added to wishlist");
        setIsFavorite(res.data.wishlistCount);
        setWishlistCount(res.data.wishlistCount);
        console.log("isFavorite", isFavorite);
      } else {
        toast.error("Something went wrong");
      }
    } catch (err) {
      console.error("Wishlist toggle failed", err);
    }
  };

  return (
    <div className="rounded-xl border">
      <figure className="relative">
        {/* favourite button */}
        <button
          className={`flex items-center gap-2 p-2 bg-[#9D977A] bg-opacity-60 text-white rounded-lg absolute top-3 left-3`}
          onClick={toggleFavorite}
        >
          {isFavorite ? (
            <FaHeart size={20} color="#ffffff" />
          ) : (
            <Heart size={20} color="#ffffff" />
          )}
          <span> {product.wishlistCount}</span>
        </button>
        <Link href={`/product-details/${product?._id}`}>
          {product?.productImage?.length > 0 && (
            <Image
              src={
                product?.productImage?.[0]?.startsWith("http")
                  ? product?.productImage?.[0]
                  : `${IMAGE_URL}${product?.productImage?.[0]}`
              }
              alt="img"
              width={250}
              height={300}
              className="rounded-t-xl w-full object-cover"
              style={{ aspectRatio: "12/14" }}
            />
          )}
        </Link>
      </figure>
      <Link href={`/product-details/${product?._id}`}>
        <div className="grid gap-1 p-4 ">
          <h3 className="font-bold">${product?.price}</h3>
          <p className="text-sm">{product?.size?.name}</p>
          <h4 className="font-bold">{product?.name}</h4>
        </div>
        <div className="flex items-center gap-3 bg-[#F5F5F5] p-2 px-4 rounded-b-xl">
          {product?.user?.image && (
            <Image
              src={
                product?.user?.image?.startsWith("http")
                  ? product?.user?.image
                  : `${IMAGE_URL}${product?.user?.image}`
              }
              alt="image"
              width={30}
              height={30}
              className="rounded-full size-8"
            />
          )}

          <h5>
            {product.user.firstName} {product.user.lastName}
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
