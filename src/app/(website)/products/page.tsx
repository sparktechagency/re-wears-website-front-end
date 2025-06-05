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
  });
  const products = res?.data;

  return (
    <div>
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
      />
    </div>
  );
};

export default ProductsPage;
