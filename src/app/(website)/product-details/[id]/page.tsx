import ProductDetails from "@/components/ui/website/product-details/ProductDetails";
import { myFetch } from "@/helpers/myFetch";

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const res = await myFetch(`/product/${id}`, {
    tags: ["Product"],
    cache: "no-store",
  });

  const userId = res?.data?.result?.user?._id;
  const sellerRes = await myFetch(`/users/${userId}`);
  const profileRes = await myFetch(`/users/profile`);

  return (
    <>
      <ProductDetails
        product={res.data}
        seller={sellerRes?.data}
        profile={profileRes?.data}
      />
    </>
  );
};

export default ProductDetailsPage;
