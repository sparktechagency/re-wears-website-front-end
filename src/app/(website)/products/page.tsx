// "use client"
import Products from "@/components/ui/website/products/Products";
import { myFetch } from "@/helpers/myFetch";
// import { useSearchParams } from "next/navigation";

const ProductsPage = async ({ searchParams }: { searchParams: any }) => {

  const {
    searchTerm,
    page,
    category,
    subCategory,
    childSubCategory,
    size,
    brand,
    condition,
    colors,
    material,
    sortBy,
  } = await searchParams;
  // Build query parameters for the backend request
  const queryParams = new URLSearchParams({
    ...(searchTerm && { searchTerm }),
    ...(page && { page }),
    ...(category && { "category.category": category }),
    ...(subCategory && { "category.subCategory": subCategory }),
    ...(childSubCategory && { "category.childSubCategory": childSubCategory }),
    ...(size && { size }),
    ...(brand && { brand }),
    ...(colors && { colors }),
    ...(condition && { condition }),
    ...(material && { material }),
    ...(sortBy && { sortBy }),
  });  
  console.log(queryParams.toString());
  const res = await myFetch(`/product?${queryParams.toString()}`, {
    tags: ["products"],
    cache: "no-store",
  });
  const products = res?.data;

  // fetch filtering data
  const categoryData = await myFetch("/category", {
    tags: ["categories"],
  });
  const sizesData = await myFetch("/type/list/size", {
    tags: ["sizes"],
  });
  const brandsData = await myFetch("/type/list/brand", {
    tags: ["brands"],
  });
  const materialsData = await myFetch("/type/list/material", {
    tags: ["materials"],
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
        subCategory,
        childSubCategory,
        size,
        brand,
        condition,
        colors,
        material,
        sortBy,
      }}
      categories={categoryData?.data}
      sizes={sizesData?.data}
      brands={brandsData?.data}
      colors={colorsData?.data}
      materials={materialsData?.data}
    />
  );
};

export default ProductsPage;
