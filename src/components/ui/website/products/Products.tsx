"use client";

import { Breadcrumb, Cascader, ConfigProvider, Pagination, Select } from "antd";
import React from "react";
import ProductCard from "@/components/shared/ProductCard";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { conditions } from "@/constants/product/conditions";

const categories = {
  All: [
    "Jeans",
    "Tops & T-Shirts",
    "Sweaters & Sweatshirts",
    "Shorts",
    "Sleepwear",
    "Skirts",
    "Suits & blazers",
    "Activewear",
    "Other men's clothing",
    "Jumpsuits & rompers",
  ],
  Clothing: ["Jackets", "Coats", "Parkas"],
  Shoes: ["Formal Suits", "Casual Blazers"],
  Bags: ["Chinos", "Dress Pants", "Joggers"],
  Accessories: ["Socks", "Boxers", "Briefs"],
  Beauty: ["Swim Shorts", "Swim Trunks"],
};

const options = Object.entries(categories).map(([category, items]) => ({
  value: category,
  label: category,
  children: items.map((item) => ({ value: item, label: item })),
}));

const Products = ({
  data = [],
  meta,
  filters,
  sizes = [],
  brands = [],
  colors = [],
  metarials = [],
}: {
  data: any;
  meta?: any;
  filters?: any;
  sizes?: any;
  brands?: any;
  colors?: any;
  metarials?: any;
}) => {
  const updateSearchParams = useUpdateSearchParams();

  return (
    <div className="container pt-[30px] pb-[100px]">
      <Breadcrumb
        items={[
          {
            title: (
              <a href="/home" className="text-primary text-[14px] font-normal">
                Home
              </a>
            ),
          },
          {
            title: (
              <p className="text-secondary text-[14px] font-normal">Women</p>
            ),
          },
        ]}
      />
      <div className="py-7">
        <p className="text-secondary text-[25px] font-bold pb-3">Women</p>
        <div className="card flex flex-wrap lg:flex-nowrap items-center gap-4">
          <ConfigProvider theme={{ token: { borderRadius: 10 } }}>
            <Cascader
              options={options}
              placeholder="Category"
              className="rounded-md"
              style={{ height: "35px", width: "100%" }}
            />
          </ConfigProvider>

          <ConfigProvider theme={{ token: { borderRadius: 10 } }}>
            <Select
              onSelect={(value) => updateSearchParams({ size: value })}
              placeholder={"Size"}
              style={{ width: "100%", height: "35px" }}
              showSearch
            >
              {sizes?.map((item: any) => (
                <Select.Option key={item.name} value={item.name}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </ConfigProvider>
          <ConfigProvider theme={{ token: { borderRadius: 10 } }}>
            <Select
              onSelect={(value) => updateSearchParams({ brand: value })}
              placeholder={"Brand"}
              style={{ width: "100%", height: "35px" }}
              showSearch
            >
              {brands?.map((item: any) => (
                <Select.Option key={item.name} value={item.name}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </ConfigProvider>
          <ConfigProvider theme={{ token: { borderRadius: 10 } }}>
            <Select
              onSelect={(value) => updateSearchParams({ condition: value })}
              placeholder={"Condition"}
              style={{ width: "100%", height: "35px" }}
              showSearch
            >
              {conditions?.map((item: any) => (
                <Select.Option key={item} value={item}>
                  {item}
                </Select.Option>
              ))}
            </Select>
          </ConfigProvider>
          <ConfigProvider theme={{ token: { borderRadius: 10 } }}>
            <Select
              onSelect={(value) => updateSearchParams({ color: value })}
              placeholder={"Color"}
              style={{ width: "100%", height: "35px" }}
              showSearch
            >
              {colors?.map((item: any) => (
                <Select.Option key={item?.name} value={item?.name}>
                  {item?.name}
                </Select.Option>
              ))}
            </Select>
          </ConfigProvider>
          <ConfigProvider theme={{ token: { borderRadius: 10 } }}>
            <Select
              onSelect={(value) => updateSearchParams({ material: value })}
              placeholder={"Material"}
              style={{ width: "100%", height: "35px" }}
              showSearch
            >
              {metarials?.map((item: any) => (
                <Select.Option key={item?.name} value={item?.name}>
                  {item?.name}
                </Select.Option>
              ))}
            </Select>
          </ConfigProvider>
          <ConfigProvider theme={{ token: { borderRadius: 10 } }}>
            <Select
              onSelect={(value) => updateSearchParams({ sortBy: value })}
              placeholder={"Sort by"}
              style={{ width: "100%", height: "35px" }}
              showSearch
            >
              <Select.Option key={"High Price"} value={"High Price"}>
                High Price
              </Select.Option>
              <Select.Option key={"Low Price"} value={"Low Price"}>
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
              <ProductCard key={item.id} product={item} />
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
              pageSize={meta?.limit}
              current={meta?.page}
              total={meta?.total}
            />
          </ConfigProvider>
        </section>
      </div>
    </div>
  );
};

export default Products;
