"use client";
import { Cascader, ConfigProvider, Form, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import OutlineButton from "@/components/shared/OutlineButton";
import FillButton from "@/components/shared/FillButton";
import { useState } from "react";
const { TextArea } = Input;

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: "Men",
    label: "Men",
    children: [
      {
        value: "All",
        label: "All",
        children: [
          {
            value: "Jeans",
            label: "Jeans",
          },
          {
            value: "Tops & T-Shirts",
            label: "Tops & T-Shirts",
          },
          {
            value: "Sweaters & Sweatshirts",
            label: "Sweaters & Sweatshirts",
          },
          {
            value: "Shorts",
            label: "Shorts",
          },
          {
            value: "Sleepwear",
            label: "Sleepwear",
          },
          {
            value: "Skirts",
            label: "Skirts",
          },
          {
            value: "Suits & blazers",
            label: "Suits & blazers",
          },
        ],
      },
      {
        value: "Clothing",
        label: "Clothing",
        children: [
          {
            value: "Jackets",
            label: "Jackets",
          },
          {
            value: "Coats",
            label: "Coats",
          },
          {
            value: "Parkas",
            label: "Parkas",
          },
        ],
      },
      {
        value: "Shoes",
        label: "Shoes",
        children: [
          {
            value: "Sneaker",
            label: "Sneaker",
          },
          {
            value: "Slipper",
            label: "Slipper",
          },
        ],
      },
    ],
  },
  {
    value: "Women",
    label: "Women",
    children: [
      {
        value: "All",
        label: "All",
        children: [
          {
            value: "Jeans",
            label: "Jeans",
          },
          {
            value: "Tops & T-Shirts",
            label: "Tops & T-Shirts",
          },
          {
            value: "Sweaters & Sweatshirts",
            label: "Sweaters & Sweatshirts",
          },
          {
            value: "Shorts",
            label: "Shorts",
          },
          {
            value: "Sleepwear",
            label: "Sleepwear",
          },
        ],
      },
      {
        value: "Clothing",
        label: "Clothing",
        children: [
          {
            value: "Skirts",
            label: "Skirts",
          },
          {
            value: "Coats",
            label: "Coats",
          },
          {
            value: "Parkas",
            label: "Parkas",
          },
        ],
      },
      {
        value: "Shoes",
        label: "Shoes",
        children: [
          {
            value: "Sneaker",
            label: "Sneaker",
          },
          {
            value: "Slipper",
            label: "Slipper",
          },
        ],
      },
    ],
  },
  {
    value: "Kids",
    label: "Kids",
    children: [
      {
        value: "All",
        label: "All",
        children: [
          {
            value: "Jeans",
            label: "Jeans",
          },
          {
            value: "Tops & T-Shirts",
            label: "Tops & T-Shirts",
          },
          {
            value: "Sweaters & Sweatshirts",
            label: "Sweaters & Sweatshirts",
          },
          {
            value: "Shorts",
            label: "Shorts",
          },
          {
            value: "Sleepwear",
            label: "Sleepwear",
          },
        ],
      },
      {
        value: "Clothing",
        label: "Clothing",
        children: [
          {
            value: "Skirts",
            label: "Skirts",
          },
          {
            value: "Coats",
            label: "Coats",
          },
          {
            value: "Parkas",
            label: "Parkas",
          },
        ],
      },
      {
        value: "Shoes",
        label: "Shoes",
        children: [
          {
            value: "Sneaker",
            label: "Sneaker",
          },
          {
            value: "Slipper",
            label: "Slipper",
          },
        ],
      },
    ],
  },
  {
    value: "Beauty/Grooming",
    label: "Beauty/Grooming",
    children: [
      {
        value: "All",
        label: "All",
        children: [
          {
            value: "Jeans",
            label: "Jeans",
          },
          {
            value: "Tops & T-Shirts",
            label: "Tops & T-Shirts",
          },
          {
            value: "Sweaters & Sweatshirts",
            label: "Sweaters & Sweatshirts",
          },
          {
            value: "Shorts",
            label: "Shorts",
          },
          {
            value: "Sleepwear",
            label: "Sleepwear",
          },
        ],
      },
      {
        value: "Clothing",
        label: "Clothing",
        children: [
          {
            value: "Skirts",
            label: "Skirts",
          },
          {
            value: "Coats",
            label: "Coats",
          },
          {
            value: "Parkas",
            label: "Parkas",
          },
        ],
      },
      {
        value: "Shoes",
        label: "Shoes",
        children: [
          {
            value: "Sneaker",
            label: "Sneaker",
          },
          {
            value: "Slipper",
            label: "Slipper",
          },
        ],
      },
    ],
  },
];

const SellNow = () => {
  const [category, setCategory] = useState(false);

  // const options = Object.entries(categories).map(([category, { items }]) => ({
  //   value: category,
  //   label: category,
  //   children: items.map((item) => ({
  //     value: item,
  //     label: item,
  //   })),
  // }));

  const handleChange = (values: string[]) => {
    if (values) {
      setCategory(true);
    }
  };

  return (
    <div className="container pt-[50px] pb-[100px]">
      <p className=" text-[25px] text-secondary  text-center font-bold pb-6  ">
        {" "}
        Sell an item{" "}
      </p>

      <div className="  rounded-lg">
        <Form layout="vertical">
          {/* Image Upload */}

          <div className="card ">
            <p className="text-[16px] font-normal text-secondary pb-2">
              {" "}
              Add up to 5 photos.{" "}
            </p>
            <div
              className="p-3 border border-[#DCDCDC] rounded-md bg-[#f5f5f5] flex flex-col items-center justify-center"
              style={{ height: "150px" }}
            >
              <Upload className="text-center">
                <div className="flex flex-col items-center text-primary">
                  <UploadOutlined
                    className="text-4xl mb-2"
                    style={{ color: "#9d977a" }}
                  />
                  <p className="font-bold text-[14px]">
                    Select your photo to upload
                  </p>
                  <p className="text-[12px] font-normal ">
                    or drag and drop them here
                  </p>
                </div>
              </Upload>
            </div>
          </div>

          <div className=" card mt-5">
            <div className="grid-between gap-4 border-b border-[#DCDCDC]">
              <div className=" text-[16px] font-bold  text-secondary">
                {" "}
                Title{" "}
              </div>
              <Form.Item name="title" className="">
                <Input
                  placeholder="e.g. Black Zara jeans"
                  className="rounded-full "
                  style={{
                    width: "100%",
                    height: "55px",
                    borderRadius: "60px",
                    backgroundColor: "#f5f5f5",
                  }}
                />
              </Form.Item>
            </div>

            <div className="grid-between gap-4 pt-5 ">
              <div className=" text-[16px] font-bold  text-secondary">
                {" "}
                Describe your item{" "}
              </div>
              <Form.Item name="description" className="">
                <TextArea
                  placeholder="e.g. still with tags, true to size"
                  rows={4}
                  className="rounded-full "
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    resize: "none",
                    padding: "10px",
                    backgroundColor: "#f5f5f5",
                  }}
                />
              </Form.Item>
            </div>
          </div>

          {/* Category Dropdown */}

          <div className="card mt-5">
            <div className="grid-between ">
              <div className=" text-[16px] font-bold  text-secondary">
                {" "}
                Category{" "}
              </div>
              <Form.Item name="category" className="">
                <ConfigProvider
                  theme={{
                    token: {
                      borderRadius: 60,
                      colorBgBase: "#f5f5f5",
                    },
                  }}
                >
                  <Cascader
                    options={options}
                    placeholder="Choose a category"
                    className="rounded-md"
                    style={{
                      height: "55px",
                      backgroundColor: "#f5f5f5",
                      borderRadius: "60px",
                      width: "100%",
                    }}
                    onChange={handleChange}
                  />
                </ConfigProvider>
              </Form.Item>
            </div>

            {category && (
              <div>
                <div className="grid-between  pt-4  border-y border-[#DCDCDC]">
                  <div className=" text-[16px] font-bold  text-secondary">
                    {" "}
                    Brand{" "}
                  </div>
                  <Form.Item name="brand" className="">
                    <ConfigProvider
                      theme={{
                        token: {
                          borderRadius: 60,
                          colorBgBase: "#f5f5f5",
                        },
                      }}
                    >
                      <Select
                        placeholder="Pick a brand"
                        style={{
                          width: "100%",
                          height: "55px",
                          borderRadius: "60px",
                          backgroundColor: "#f5f5f5",
                        }}
                        options={[
                          { value: "brand1", label: "Brand 1" },
                          { value: "brand2", label: "Brand 2" },
                          { value: "brand3", label: "Brand 3" },
                          { value: "brand4", label: "Brand 4" },
                        ]}
                      />
                    </ConfigProvider>
                  </Form.Item>
                </div>

                <div className="grid-between  pt-4  border-b border-[#DCDCDC]">
                  <div className=" text-[16px] font-bold  text-secondary">
                    {" "}
                    Size{" "}
                  </div>
                  <Form.Item name="size" className="">
                    <ConfigProvider
                      theme={{
                        token: {
                          borderRadius: 60,
                          colorBgBase: "#f5f5f5",
                        },
                      }}
                    >
                      <Select
                        placeholder="Select a size"
                        style={{
                          width: "100%",
                          height: "55px",
                          borderRadius: "60px",
                          backgroundColor: "#f5f5f5",
                        }}
                        options={[
                          { value: "Size1", label: "Size 1" },
                          { value: "Size2", label: "Size 2" },
                          { value: "Size3", label: "Size 3" },
                          { value: "Size4", label: "Size 4" },
                        ]}
                      />
                    </ConfigProvider>
                  </Form.Item>
                </div>

                <div className="grid-between  pt-4  border-b border-[#DCDCDC]">
                  <div className=" text-[16px] font-bold  text-secondary">
                    {" "}
                    Condition{" "}
                  </div>
                  <Form.Item name="Condition" className="">
                    <ConfigProvider
                      theme={{
                        token: {
                          borderRadius: 60,
                          colorBgBase: "#f5f5f5",
                        },
                      }}
                    >
                      <Select
                        placeholder="Define the condition"
                        style={{
                          width: "100%",
                          height: "55px",
                          borderRadius: "60px",
                          backgroundColor: "#f5f5f5",
                        }}
                        options={[
                          { value: "Condition1", label: "Condition 1" },
                          { value: "Condition2", label: "Condition 2" },
                          { value: "Condition3", label: "Condition 3" },
                          { value: "Condition4", label: "Condition 4" },
                        ]}
                      />
                    </ConfigProvider>
                  </Form.Item>
                </div>

                <div className="grid-between  pt-4  border-b border-[#DCDCDC]">
                  <div className=" text-[16px] font-bold  text-secondary">
                    {" "}
                    Colors{" "}
                  </div>
                  <Form.Item name="Colors" className="">
                    <ConfigProvider
                      theme={{
                        token: {
                          borderRadius: 60,
                          colorBgBase: "#f5f5f5",
                        },
                      }}
                    >
                      <Select
                        mode="multiple"
                        placeholder="Select colors"
                        style={{
                          width: "100%",
                          height: "55px",
                          borderRadius: "60px",
                          backgroundColor: "#f5f5f5",
                        }}
                        options={[
                          { value: "red", label: "Red" },
                          { value: "yellow", label: "Yellow" },
                          { value: "Pink", label: "Pink" },
                          { value: "Purple", label: "Purple" },
                        ]}
                      />
                    </ConfigProvider>
                  </Form.Item>
                </div>

                <div className="grid-between  pt-4  ">
                  <div className=" text-[16px] font-bold  text-secondary">
                    Material (recommended)
                  </div>
                  <Form.Item name="Material (recommended)" className="">
                    <ConfigProvider
                      theme={{
                        token: {
                          borderRadius: 60,
                          colorBgBase: "#f5f5f5",
                        },
                      }}
                    >
                      <Select
                        placeholder="Choose material"
                        style={{
                          width: "100%",
                          height: "55px",
                          borderRadius: "60px",
                          backgroundColor: "#f5f5f5",
                        }}
                        options={[
                          { value: "Material 1", label: "Material  1" },
                          { value: "Material 2", label: "Material  2" },
                          { value: "Material 3", label: "Material  3" },
                          { value: "Material 4", label: "Material  4" },
                        ]}
                      />
                    </ConfigProvider>
                  </Form.Item>
                </div>
              </div>
            )}
          </div>

          {/* Price Field */}
          <div className="card mt-5">
            <div className="grid-between ">
              <div className=" text-[16px] font-bold  text-secondary">
                Price
              </div>
              <Form.Item name="price" className="">
                <Input
                  placeholder="0.00"
                  className="rounded-full text-end"
                  style={{
                    width: "100%",
                    height: "55px",
                    borderRadius: "60px",
                    backgroundColor: "#f5f5f5",
                    textAlign: "right",
                    padding: "0 24px",
                    fontSize: "16px",
                  }}
                />
                <span className="absolute left-6 top-4 font-medium">AED</span>
              </Form.Item>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col lg:flex-row justify-end gap-4 mt-8">
            <OutlineButton className="w-full md:w-auto">
              SAVE DRAFT
            </OutlineButton>
            <FillButton className="w-full md:w-auto"> UPLOAD </FillButton>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SellNow;
