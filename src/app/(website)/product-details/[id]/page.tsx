import ProductDetails from "@/components/ui/website/product-details/ProductDetails";
import { myFetch } from "@/helpers/myFetch";

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const res = await myFetch(`/product/${id}`, {
    tags: ["Product"],
  });

  return (
    <>
      <ProductDetails product={res.data} />
    </>
  );
};

export default ProductDetailsPage;
