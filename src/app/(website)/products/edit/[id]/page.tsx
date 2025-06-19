import EditProduct from "@/components/ui/website/products/edit/EditProduct";
import { myFetch } from "@/helpers/myFetch";

const SellNowPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const productRes = await myFetch(`/product/${id}`, {
    tags: ["Product"],
    cache: "no-store",
  });

  const categoryRes = await myFetch("/category", {
    tags: ["categories"],
    cache: "no-store",
  });

  const brandRes = await myFetch("/type/list/brand", {
    tags: ["brands"],
    cache: "no-store",
  });

  const sizeRes = await myFetch("/type/list/size", {
    tags: ["sizes"],
    cache: "no-store",
  });

  const colorsRes = await myFetch("/color", {
    tags: ["colors"],
    cache: "no-store",
  });

  const materialRes = await myFetch("/type/list/material", {
    tags: ["materials"],
    cache: "no-store",
  });

  return (
    <div>
      <EditProduct
        product={productRes?.data?.result}
        categories={categoryRes?.data}
        brands={brandRes?.data}
        sizes={sizeRes?.data}
        colors={colorsRes?.data}
        materials={materialRes?.data}
      />
    </div>
  );
};

export default SellNowPage;
