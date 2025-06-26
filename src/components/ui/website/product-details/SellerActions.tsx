"use client";

import OutlineButton from "@/components/shared/OutlineButton";
import { myFetch } from "@/helpers/myFetch";
import { revalidateTags } from "@/helpers/revalidateTags";
import { useState } from "react";
import toast from "react-hot-toast";
import ProductDeleteModal from "./DeleteModal";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SellerActions = ({ productData }: { productData: any }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const router = useRouter();

  // handle update product status
  const handleUpdateStatus = async (status: string) => {
    toast.loading("Loading...", { id: "update-product" });
    const payload = {
      status: status,
    };

    try {
      const res = await myFetch(`/product/update-status/${productData?._id}`, {
        method: "PATCH",
        body: payload,
      });
      if (res?.success) {
        toast.success("Updated successfully", { id: "update-product" });
        revalidateTags(["Product", "products"]);
      } else {
        toast.error(res?.message || "Something went wrong", {
          id: "update-product",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // handle delete
  const handleDelete = async () => {
    toast.loading("Loading...", { id: "delete-product" });

    try {
      const res = await myFetch(`/product/${productData?._id}`, {
        method: "DELETE",
      });
      if (res?.success) {
        toast.success("Deleted successfully", { id: "delete-product" });
        revalidateTags(["Product", "products"]);
        location.href = "/products";
        router.refresh();
      } else {
        toast.error(res?.message || "Something went wrong", {
          id: "delete-product",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid gap-2 px-6">
      {/* mark as sold */}
      {productData?.status === "Active" && (
        <OutlineButton
          onClick={() => {
            handleUpdateStatus("Sold");
          }}
          className={`uppercase w-full`}
        >
          Mark as sold
        </OutlineButton>
      )}

      {/* product status */}
      <OutlineButton
        className={`uppercase w-full cursor-default ${
          (productData?.status === "Reserved" ||
            productData?.status === "Sold") &&
          "bg-[#D04555] hover:bg-[#c64251] border-[#D04555] text-white"
        }`}
      >
        {productData?.status === "Active" ? "Available" : productData?.status}
      </OutlineButton>

      {/* make available product */}
      {productData?.status === "Draft" && (
        <OutlineButton
          onClick={() => handleUpdateStatus("Active")}
          className="uppercase w-full"
        >
          Make Available
        </OutlineButton>
      )}

      {/* hide product */}
      {productData?.status !== "Hidden" && (
        <OutlineButton
          onClick={() => handleUpdateStatus("Hidden")}
          className="uppercase w-full"
        >
          Hide
        </OutlineButton>
      )}

      {/* unhide product */}
      {productData?.status === "Hidden" && (
        <OutlineButton
          onClick={() => handleUpdateStatus("Active")}
          className="uppercase w-full"
        >
          Unhide
        </OutlineButton>
      )}

      {/* edit product */}
      <Link href={`/products/edit/${productData?._id}`}>
        <OutlineButton className="uppercase w-full">Edit listing</OutlineButton>
      </Link>

      {/* delete product */}
      <OutlineButton
        onClick={() => setDeleteModal(true)}
        className="uppercase w-full border-[#D04555] text-[#D04555] hover:bg-[#ce4555]"
      >
        Delete
      </OutlineButton>

      <ProductDeleteModal
        open={deleteModal}
        setOpen={setDeleteModal}
        action={handleDelete}
      />
    </div>
  );
};

export default SellerActions;
