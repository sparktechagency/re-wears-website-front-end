import ProductDetails from "@/components/ui/website/product-details/ProductDetails";
import { myFetch } from "@/helpers/myFetch";

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const res = await myFetch(`/product/${id}`, {
    tags: ["Product"],
  });

  const userId = res?.data?.result?.user?._id;
  const userRes = await myFetch(`/users/${userId}`);

  return (
    <>
      <ProductDetails product={res.data} user={userRes?.data} />
    </>
  );
};

export default ProductDetailsPage;
