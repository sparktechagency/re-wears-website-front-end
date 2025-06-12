import Products from "@/components/ui/website/products/Products";
import { myFetch } from "@/helpers/myFetch";

const ProductsPage = async ({ searchParams }: { searchParams: any }) => {
  const { searchTerm, page, category, size, brand, colors, metarial, sortBy } =
    await searchParams;
  // Build query parameters for the backend request
  const queryParams = new URLSearchParams({
    ...(searchTerm && { searchTerm }),
    ...(page && { page }),
    ...(category && { category }),
    ...(size && { size }),
    ...(brand && { brand }),
    ...(colors && { colors }),
    ...(metarial && { metarial }),
    ...(sortBy && { sortBy }),
  });

  const res = await myFetch(`/product?${queryParams.toString()}`, {
    tags: ["products"],
    cache: "no-store",
  });
  const products = res?.data;

  // fetch filtering data
  const sizesData = await myFetch("/type/list/size", {
    tags: ["sizes"],
  });
  const brandsData = await myFetch("/type/list/brand", {
    tags: ["brands"],
  });
  const materialsData = await myFetch("/type/list/material", {
    tags: ["colors"],
  });
  const colorsData = await myFetch("/color", {
    tags: ["colors"],
  });

  return (
    <Products
      data={products}
      meta={res?.pagination}
      filters={{
        searchTerm,
        category,
        size,
        brand,
        colors,
        metarial,
        sortBy,
      }}
      sizes={sizesData?.data}
      brands={brandsData?.data}
      colors={colorsData?.data}
      metarials={materialsData?.data}
    />
  );
};

export default ProductsPage;
