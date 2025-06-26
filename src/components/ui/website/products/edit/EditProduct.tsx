"use client";
import { Cascader, ConfigProvider, Form, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import OutlineButton from "@/components/shared/OutlineButton";
import FillButton from "@/components/shared/FillButton";
import { useEffect, useState } from "react";
import { conditions } from "@/constants/product/conditions";
import toast from "react-hot-toast";
import { myFetch } from "@/helpers/myFetch";
import { revalidateTags } from "@/helpers/revalidateTags";

const { TextArea } = Input;

const EditProduct = ({
  product,
  categories = [],
  brands = [],
  sizes = [],
  colors = [],
  materials = [],
}: {
  product: any;
  categories: any;
  brands: any;
  sizes: any;
  colors: any;
  materials: any;
}) => {
  const [fileList, setFileList] = useState<any[]>([]);
  const [productStatus, setProductStatus] = useState<string>("Active");
  const [form] = Form.useForm();

  // Set initial values for form fields
  useEffect(() => {
    if (product) {
      const parsedCategory =
        typeof product?.category === "string"
          ? JSON.parse(product?.category || "{}")
          : product?.category;

      form.setFieldsValue({
        name: product.name,
        description: product.description,
        category: [
          parsedCategory?.category?._id,
          parsedCategory?.subCategory?._id,
          parsedCategory?.childSubCategory?._id,
        ].filter(Boolean),
        brand: product.brand?._id,
        size: product.size?._id,
        condition: product.condition,
        colors: product.colors?.map((c: any) => c._id),
        material: product.material?._id,
        price: product.price,
      });

      // Set initial fileList for Upload component if product.images exists
      if (
        Array.isArray(product.productImage) &&
        product.productImage.length > 0
      ) {
        const initialFileList = product.productImage.map(
          (img: any, idx: number) => ({
            uid: img._id || `existing-${idx}`,
            name: img.name || `image-${idx + 1}.jpg`,
            status: "done",
            url: img.url || img, // support both {url: "..."} and string url
          })
        );
        setFileList(initialFileList);
      }
    }
  }, [product, form]);

  // format categories for Cascader
  const formatedCategories = categories?.map((category: any) => ({
    value: category?._id,
    label: category?.name,
    children: category?.subCategories?.map((subCategory: any) => ({
      value: subCategory?._id,
      label: subCategory?.name,
      children: subCategory?.childSubCategories?.map(
        (childSubCategory: any) => ({
          value: childSubCategory?._id,
          label: childSubCategory?.name,
        })
      ),
    })),
  }));

  // handle submit
  const handleSubmit = async (values: any) => {
    toast.loading("Uploading...", { id: "update-product" });
    const formData = new FormData();
    // append images
    if (fileList.length > 0)
      fileList?.forEach((file: any) => {
        if (file?.originFileObj)
          formData.append("productImage", file?.originFileObj);
        if (file?.url) formData.append("productImage", file?.url);
      });
    // append category
    if (values?.category) {
      formData.append(
        "category",
        JSON.stringify({
          category: values?.category[0],
          subCategory: values?.category[1],
          childSubCategory: values?.category[2],
        })
      );
    }
    // append other fields
    Object.entries(values).forEach(([key, value]) => {
      if (key !== "images" && key !== "category") {
        // Convert value to string for FormData
        formData.append(
          key,
          typeof value === "object" ? JSON.stringify(value) : String(value)
        );
      }
    });
    // append product status
    formData.append("status", productStatus);

    // send data to server
    try {
      const res = await myFetch(`/product/${product?._id}`, {
        method: "PATCH",
        body: formData,
      });
      if (res?.success) {
        toast.success("Product updated successfully", {
          id: "update-product",
        });
        revalidateTags(["products", "Product"]);
      } else {
        toast.error(res?.message || "Something went wrong", {
          id: "update-product",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 60,
          colorBgBase: "#f5f5f5",
          controlHeight: 55,
          controlPaddingHorizontal: 16,
        },
        components: {
          Select: {
            multipleItemHeightSM: 14,
          },
        },
      }}
    >
      <div className="container pt-[50px] pb-[100px]">
        <p className="text-[25px] text-secondary text-center font-bold pb-6">
          Edit your item
        </p>

        <div className="rounded-lg">
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <div className="card grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
              {/* Upload */}
              <div className="h-full flex flex-col">
                <p className="text-[16px] font-normal text-secondary pb-2">
                  Add up to 5 photos.
                </p>
                <div className="flex-1 p-3 border border-[#DCDCDC] rounded-md bg-[#f5f5f5] flex flex-col items-center justify-center">
                  <Form.Item name="images">
                    <Upload
                      accept=".png,.jpg,.jpeg,.webp"
                      maxCount={5}
                      multiple
                      className="text-center grid justify-center gap-4"
                      fileList={fileList}
                      onChange={(info) => setFileList(info?.fileList)}
                    >
                      {fileList?.length < 5 && (
                        <div className="flex flex-col justify-center items-center text-primary cursor-pointer">
                          <UploadOutlined
                            className="text-4xl mb-2"
                            style={{ color: "#9d977a" }}
                          />
                          <p className="font-bold text-[14px]">
                            Select your photo to upload
                          </p>
                          <p className="text-[12px] font-normal">
                            or drag and drop them here
                          </p>
                        </div>
                      )}
                    </Upload>
                  </Form.Item>
                </div>
              </div>

              {/* Title + Description */}
              <div className="mt-5">
                <div className="grid gap-4 border-b pb-2 border-[#DCDCDC]">
                  <div className="text-[16px] font-bold text-secondary">
                    Product name
                  </div>
                  <Form.Item name="name">
                    <Input
                      placeholder="e.g. Black Zara jeans"
                      className="rounded-full"
                    />
                  </Form.Item>
                </div>

                <div className="grid gap-4 pt-4 pb-2">
                  <div className="text-[16px] font-bold text-secondary">
                    Product description
                  </div>
                  <Form.Item name="description">
                    <TextArea
                      placeholder="e.g. still with tags, true to size"
                      rows={4}
                      style={{ resize: "none", borderRadius: "20px" }}
                    />
                  </Form.Item>
                </div>
              </div>
            </div>

            {/* Category */}
            <div className="card mt-5">
              <div className="grid-between items-center pb-2">
                <div className="text-[16px] font-bold text-secondary">
                  Select a category
                </div>
                <Form.Item name="category">
                  <Cascader
                    options={formatedCategories}
                    placeholder="Choose a category"
                    className="rounded-md w-full"
                    style={{ borderRadius: "60px" }}
                  />
                </Form.Item>
              </div>

              {/* Brand */}
              <div className="grid-between items-center pt-4 pb-2 border-y border-[#DCDCDC]">
                <div className="text-[16px] font-bold text-secondary">
                  Name a brand
                </div>
                <Form.Item
                  name="brand"
                  rules={[{ required: true, message: "Please select a brand" }]}
                >
                  <Select
                    placeholder="Pick a brand"
                    options={brands?.map((brand: any) => ({
                      value: brand?._id,
                      label: brand?.name,
                    }))}
                    showSearch
                    optionFilterProp="label"
                    allowClear
                  />
                </Form.Item>
              </div>

              {/* Size */}
              <div className="grid-between items-center pt-4 pb-2 border-b border-[#DCDCDC]">
                <div className="text-[16px] font-bold text-secondary">
                  Pick the size
                </div>
                <Form.Item name="size">
                  <Select
                    placeholder="Select a size"
                    options={sizes?.map((size: any) => ({
                      value: size?._id,
                      label: size?.name,
                    }))}
                    showSearch
                    allowClear
                  />
                </Form.Item>
              </div>

              {/* Condition */}
              <div className="grid-between items-center pt-4 pb-2 border-b border-[#DCDCDC]">
                <div className="text-[16px] font-bold text-secondary">
                  Identify the condition
                </div>
                <Form.Item name="condition">
                  <Select
                    placeholder="Define the condition"
                    options={conditions?.map((condition: any) => ({
                      value: condition,
                      label: condition,
                    }))}
                  />
                </Form.Item>
              </div>

              {/* Colors */}
              <div className="grid-between items-center pt-4 pb-2 border-b border-[#DCDCDC]">
                <div className="text-[16px] font-bold text-secondary">
                  Choose colors
                </div>
                <Form.Item name="colors">
                  <Select
                    mode="multiple"
                    placeholder="Select colors"
                    options={colors?.map((color: any) => ({
                      value: color?._id,
                      label: color?.name,
                    }))}
                  />
                </Form.Item>
              </div>

              {/* Material */}
              <div className="grid-between items-center pt-4">
                <div className="text-[16px] font-bold text-secondary">
                  Specify the material (recommended)
                </div>
                <Form.Item name="material">
                  <Select
                    placeholder="Choose material"
                    options={materials?.map((material: any) => ({
                      value: material?._id,
                      label: material?.name,
                    }))}
                    allowClear
                    showSearch
                  />
                </Form.Item>
              </div>
            </div>

            {/* Price */}
            <div className="card mt-5">
              <div className="grid-between items-center">
                <div className="text-[16px] font-bold text-secondary">
                  Set your price
                </div>
                <Form.Item name="price">
                  <Input
                    type="number"
                    placeholder="0.00"
                    className="rounded-full text-end customInput"
                    style={{
                      textAlign: "right",
                      padding: "0 24px",
                      fontSize: "16px",
                      height: "56px",
                    }}
                    prefix={<span className=" font-medium">AED</span>}
                  />
                </Form.Item>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row justify-end gap-4 mt-8">
              <OutlineButton
                onClick={() => setProductStatus("Draft")}
                className="w-full md:w-auto"
              >
                SAVE DRAFT
              </OutlineButton>
              <FillButton className="w-full md:w-auto">UPDATE</FillButton>
            </div>
          </Form>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default EditProduct;
