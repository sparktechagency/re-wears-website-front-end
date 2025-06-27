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
    sort,
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
    ...(sort && { sort }),
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
    cache: "no-store",
  });
  const sizesData = await myFetch("/type/list/size", {
    tags: ["sizes"],
    cache: "no-store",
  });
  const brandsData = await myFetch("/type/list/brand", {
    tags: ["brands"],
    cache: "no-store",
  });
  const materialsData = await myFetch("/type/list/material", {
    tags: ["materials"],
    cache: "no-store",
  });
  const colorsData = await myFetch("/color", {
    tags: ["colors"],
    cache: "no-store",
  });

  // fetch my wishlist data
  const wishlistRes = await myFetch("/wishlist", {
    tags: ["wishlist"],
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
        sort,
      }}
      categories={categoryData?.data}
      sizes={sizesData?.data}
      brands={brandsData?.data}
      colors={colorsData?.data}
      materials={materialsData?.data}
      wishlist={wishlistRes?.data}
    />
  );
};

export default ProductsPage;
