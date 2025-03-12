/* eslint-disable @typescript-eslint/no-explicit-any */
import { Breadcrumb, Cascader, ConfigProvider, Pagination, Select } from 'antd';
import React from 'react'; 
import productsData from "@/data/products.json";
import ProductCard from "@/components/shared/ProductCard";

const categories = {
    All: [
        "Jeans", "Tops & T-Shirts", "Sweaters & Sweatshirts", "Shorts", "Sleepwear", "Skirts",
        "Suits & blazers", "Activewear", "Other men's clothing", "Jumpsuits & rompers"
    ],
    Clothing: ["Jackets", "Coats", "Parkas"],
    Shoes: ["Formal Suits", "Casual Blazers"],
    Bags: ["Chinos", "Dress Pants", "Joggers"],
    Accessories: ["Socks", "Boxers", "Briefs"],
    Beauty: ["Swim Shorts", "Swim Trunks"]
};

const selectOptions = {
    Size: ["Size 1", "Size 2", "Size 3", "Size 4"],
    Brand: ["Brand 1", "Brand 2", "Brand 3", "Brand 4"],
    Condition: ["Condition 1", "Condition 2", "Condition 3", "Condition 4"],
    Colors: ["Red", "Yellow", "Pink", "Purple"],
    Material: ["Material 1", "Material 2", "Material 3", "Material 4"],
    SortBy: ["low price", "high price"]
};

const options = Object.entries(categories).map(([category, items]) => ({
    value: category,
    label: category,
    children: items.map(item => ({ value: item, label: item }))
}));

const Products = () => {
    const renderSelect = (placeholder: keyof typeof selectOptions, mode?: "multiple") => (
        <ConfigProvider theme={{ token: { borderRadius: 10 } }}>
            <Select
                placeholder={placeholder}
                mode={mode}
                style={{ width: "100%", height: "35px" }}
                options={selectOptions[placeholder].map(value => ({ value, label: value }))}
            />
        </ConfigProvider>
    );

    return (
        <div className='container pt-[30px] pb-[100px]'>
            <Breadcrumb
                items={[
                    { title: <a href="/home" className='text-primary text-[14px] font-normal'>Home</a> },
                    { title: <p className='text-secondary text-[14px] font-normal'>Women</p> }
                ]}
            />
            <div className='py-7'>
                <p className='text-secondary text-[25px] font-bold pb-3'>Women</p>
                <div className='card flex items-center gap-4'>
                    <ConfigProvider theme={{ token: { borderRadius: 10 } }}>
                        <Cascader options={options} placeholder="Category" className="rounded-md" style={{ height: "35px", width: "100%" }} />
                    </ConfigProvider>
                    {Object.keys(selectOptions).map((key:any) => renderSelect(key, key === "Colors" ? "multiple" : undefined))}
                </div>
            </div> 

            <div> 
                      {/* display added items */}
      <section className="">
        <h1 className="text-[14px] font-normal text-start">500+ results.</h1>
        <div className="  my-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {productsData.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div> 

        <ConfigProvider
                        theme={{
                            components: {
                                Pagination: {
                                    itemActiveBg: "#9d977a"
                                },
                            },
                            token: {
                                colorPrimary: "#ffffff",
                                colorBorder: "#9d977a",


                            },
                        }}
                    >

                        <Pagination align="center" defaultCurrent={1} total={50} />
                    </ConfigProvider> 
      </section> 
            </div>
        </div>
    );
};

export default Products;