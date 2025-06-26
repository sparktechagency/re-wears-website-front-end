"use client";

import { Breadcrumb, Cascader, ConfigProvider, Pagination, Select } from "antd";
import React from "react";
import ProductCard from "@/components/shared/ProductCard";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { conditions } from "@/constants/product/conditions";
import { capitalizeSentence } from "@/utils/capitalizeSentence";
import Link from "next/link";

const Products = ({
  data = [],
  meta,
  filters,
  categories = [],
  sizes = [],
  brands = [],
  colors = [],
  materials = [],
  wishlist = [],
}: {
  data: any;
  meta?: any;
  filters?: any;
  categories?: any;
  sizes?: any;
  brands?: any;
  colors?: any;
  materials?: any;
  wishlist?: any;
}) => {
  const updateSearchParams = useUpdateSearchParams();

  const options = categories
    ?.find((item: any) => item?.name === filters?.category)
    ?.subCategories?.map((subItem: any) => ({
      value: subItem?.name,
      label: subItem?.name,
      children: subItem?.childSubCategories?.map((childSubItem: any) => ({
        value: childSubItem?.name,
        label: childSubItem?.name,
      })),
    }));

  return (
    <div className="container pt-[30px] pb-[100px]">
      <Breadcrumb
        items={[
          {
            title: (
              <Link href="/" className="text-primary text-[14px] font-normal">
                Home
              </Link>
            ),
          },
          {
            title: (
              <p className="text-secondary text-[14px] font-normal">
                {capitalizeSentence(
                  filters?.category?.toLowerCase() || "Products"
                )}
              </p>
            ),
          },
        ]}
      />
      <div className="py-7">
        <p className="text-secondary text-[25px] font-bold pb-3">
          {capitalizeSentence(filters?.category?.toLowerCase() || "Products")}
        </p>

        {/* filter section */}
        <div className="card flex flex-wrap lg:flex-nowrap items-center gap-4">
          {/* category filter */}
          <ConfigProvider theme={{ token: { borderRadius: 10 } }}>
            <Cascader
              options={options}
              defaultValue={[filters?.subCategory, filters?.childSubCategory]}
              placeholder="Category"
              className="rounded-md"
              style={{ height: "35px", width: "100%" }}
              onChange={(subItem) =>
                updateSearchParams({
                  subCategory: subItem?.[0] as string,
                  childSubCategory: subItem?.[1] as string,
                })
              }
            />
          </ConfigProvider>

          {/* size filter */}
          <ConfigProvider theme={{ token: { borderRadius: 10 } }}>
            <Select
              defaultValue={filters?.size}
              onSelect={(value) => updateSearchParams({ size: value })}
              placeholder={"Size"}
              style={{ width: "100%", height: "35px" }}
              showSearch
              allowClear
              onClear={() => updateSearchParams({ size: null })}
            >
              {sizes?.map((item: any) => (
                <Select.Option key={item.name} value={item._id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </ConfigProvider>

          {/* brand filter */}
          <ConfigProvider theme={{ token: { borderRadius: 10 } }}>
            <Select
              defaultValue={filters?.brand}
              onSelect={(value) => updateSearchParams({ brand: value })}
              placeholder={"Brand"}
              style={{ width: "100%", height: "35px" }}
              showSearch
              allowClear
              onClear={() => updateSearchParams({ brand: null })}
            >
              {brands?.map((item: any) => (
                <Select.Option key={item.name} value={item._id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </ConfigProvider>

          {/* condition filter */}
          <ConfigProvider theme={{ token: { borderRadius: 10 } }}>
            <Select
              defaultValue={filters?.condition}
              onSelect={(value) => updateSearchParams({ condition: value })}
              placeholder={"Condition"}
              style={{ width: "100%", height: "35px" }}
              showSearch
              allowClear
              onClear={() => updateSearchParams({ condition: null })}
            >
              {conditions?.map((item: any) => (
                <Select.Option key={item} value={item}>
                  {item}
                </Select.Option>
              ))}
            </Select>
          </ConfigProvider>

          {/* color filter */}
          <ConfigProvider theme={{ token: { borderRadius: 10 } }}>
            <Select
              defaultValue={filters?.colors}
              onSelect={(value) => updateSearchParams({ colors: value })}
              placeholder={"Color"}
              style={{ width: "100%", height: "35px" }}
              showSearch
              allowClear
              onClear={() => updateSearchParams({ colors: null })}
            >
              {colors?.map((item: any) => (
                <Select.Option key={item?.name} value={item?._id}>
                  {item?.name}
                </Select.Option>
              ))}
            </Select>
          </ConfigProvider>

          {/* material filter */}
          <ConfigProvider theme={{ token: { borderRadius: 10 } }}>
            <Select
              defaultValue={filters?.material}
              onSelect={(value) => updateSearchParams({ material: value })}
              placeholder={"Material"}
              style={{ width: "100%", height: "35px" }}
              showSearch
              allowClear
              onClear={() => updateSearchParams({ material: null })}
            >
              {materials?.map((item: any) => (
                <Select.Option key={item?.name} value={item?._id}>
                  {item?.name}
                </Select.Option>
              ))}
            </Select>
          </ConfigProvider>

          {/* sorting */}
          <ConfigProvider theme={{ token: { borderRadius: 10 } }}>
            <Select
              defaultValue={filters?.sort}
              onSelect={(value) => updateSearchParams({ sort: value })}
              placeholder={"Sort by"}
              style={{ width: "100%", height: "35px" }}
              showSearch
              allowClear
              onClear={() => updateSearchParams({ sort: null })}
            >
              <Select.Option key={"High Price"} value={"-price"}>
                High Price
              </Select.Option>
              <Select.Option key={"Low Price"} value={"price"}>
                Low Price
              </Select.Option>
            </Select>
          </ConfigProvider>
        </div>
      </div>

      <div>
        {/* display added items */}
        <section className="">
          <h1 className="text-[14px] font-normal text-start">500+ results.</h1>
          <div className="  my-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {data?.map((item: any) => (
              <ProductCard
                key={item._id}
                product={item}
                isWishlist={wishlist?.some(
                  (wish: any) => wish?.product?._id === item?._id
                )}
              />
            ))}
          </div>

          <ConfigProvider
            theme={{
              components: {
                Pagination: {
                  itemActiveBg: "#9d977a",
                },
              },
              token: {
                colorPrimary: "#ffffff",
                colorBorder: "#9d977a",
              },
            }}
          >
            <Pagination
              align="center"
              pageSize={meta?.limit || 10}
              current={meta?.page || 1}
              total={meta?.total || 0}
            />
          </ConfigProvider>
        </section>
      </div>
    </div>
  );
};

export default Products;
