"use client";

import FillButton from "@/components/shared/FillButton";
import OutlineButton from "@/components/shared/OutlineButton";
import { myFetch } from "@/helpers/myFetch";
import { revalidateTags } from "@/helpers/revalidateTags";
import { Heart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RxHeartFilled } from "react-icons/rx";
import ReserveNowModal from "./ReserveNowModal";
import MakeOfferModal from "../inbox/MakeOfferModal";

const BuyerActions = ({
  productData,
  profile,
  seller,
}: {
  productData: any;
  profile: any;
  seller: any;
}) => {
  const [reserveOpen, setReserveOpen] = useState(false);
  const [makeOfferModal, setMakeOfferModal] = useState(false);
  const [wishlist, setWishlist] = useState<any>({});
  const [triggerWishListData, setTriggerWishListData] = useState(false);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await myFetch(`/wishlist/${productData?._id}`, {
          tags: ["Wishlist"],
        });
        if (res?.success) {
          setWishlist(res?.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchWishlist();
  }, [productData?._id, triggerWishListData]);

  // handle reserving
  const handleReserveNow = async () => {
    toast.loading("Reserving...", { id: "reserve" });
    const payload = {
      seller: seller?.user?._id,
      buyer: profile?._id,
      product: productData?._id,
      status: "Reserved",
    };
    console.log(payload);

    try {
      const res = await myFetch(`/order/create`, {
        method: "POST",
        body: payload,
      });
      if (res?.success) {
        toast.success("Reserved successfully", { id: "reserve" });
        setReserveOpen(false);
        revalidateTags(["Product"]);
      } else {
        toast.error(res?.message || "Something went wrong", { id: "reserve" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // handle release
  const handleRelease = async () => {
    toast.loading("Loading...", { id: "release" });
    const payload = {
      product: productData?._id,
      status: "Released",
    };

    try {
      const res = await myFetch(`/order/update`, {
        method: "PATCH",
        body: payload,
      });
      if (res?.success) {
        toast.success("Released successfully", { id: "release" });
        revalidateTags(["Product"]);
      } else {
        toast.error(res?.message || "Something went wrong", { id: "release" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // handle wishlist
  const handleWishlist = async () => {
    toast.loading("Loading...", { id: "wishlist" });
    const payload = {
      product: productData?._id,
    };

    try {
      const res = await myFetch(`/wishlist`, {
        method: "POST",
        body: payload,
      });
      if (res?.success) {
        toast.success("Wishlist updated", { id: "wishlist" });
        revalidateTags(["Product", "Wishlist"]);
        setTriggerWishListData(!triggerWishListData);
      } else {
        toast.error(res?.message || "Failed to add wishlist", {
          id: "wishlist",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid gap-2 px-6">
      {productData?.status === "Active" && (
        <FillButton
          onClick={() => setReserveOpen(true)}
          className="uppercase w-full"
        >
          Reserve Now
        </FillButton>
      )}
      {productData?.status === "Reserved" && (
        <FillButton className="uppercase w-full bg-[#D04555] hover:bg-[#c64251] cursor-not-allowed">
          Reserved
        </FillButton>
      )}

      {productData?.status === "Reserved" && (
        <FillButton onClick={handleRelease} className="uppercase w-full">
          Changed your mind? Release
        </FillButton>
      )}

      <OutlineButton
        onClick={() => setMakeOfferModal(true)}
        className="uppercase w-full"
      >
        Make an offer
      </OutlineButton>
      <Link href={`/inbox?recipient=${productData?.user?._id}`}>
        <OutlineButton className="uppercase w-full">
          Message seller
        </OutlineButton>
      </Link>

      <div>
        <OutlineButton
          onClick={handleWishlist}
          className="uppercase w-full flex items-center justify-center gap-2"
        >
          {wishlist ? (
            <div className="flex items-center gap-1">
              <RxHeartFilled size={24} /> remove from wishlist
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <Heart /> add to wishlist
            </div>
          )}
        </OutlineButton>
      </div>

      <ReserveNowModal
        open={reserveOpen}
        setOpen={setReserveOpen}
        action={handleReserveNow}
      />
      <MakeOfferModal
        product={productData}
        open={makeOfferModal}
        setOpen={setMakeOfferModal}
      />
    </div>
  );
};

export default BuyerActions;
