"use client"
import { Cascader, ConfigProvider, Form, Input, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import OutlineButton from '@/components/shared/OutlineButton';
import FillButton from '@/components/shared/FillButton';
import { useState } from 'react';
const { TextArea } = Input;


const categories = {
    All: {
        items: [
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
    },
    Clothing: {
        items: ["Jackets", "Coats", "Parkas"],
    },
    Shoes: {
        items: ["Formal Suits", "Casual Blazers"],
    },
    Bags: {
        items: ["Chinos", "Dress Pants", "Joggers"],
    },
    Accessories: {
        items: ["Socks", "Boxers", "Briefs"],
    },
    Beauty: {
        items: ["Swim Shorts", "Swim Trunks"],
    },
};

const SellNow = () => {
    const [category, setCategory] = useState(false)

    const options = Object.entries(categories).map(([category, { items }]) => ({
        value: category,
        label: category,
        children: items.map((item) => ({
            value: item,
            label: item,
        })),
    }));

    const handleChange = (values: string[]) => {

        if (values) {
            setCategory(true)
        }
    }

    return (
        <div className="container pt-[50px] pb-[100px]">
            <p className=" text-[25px] text-secondary  text-center font-bold pb-6  ">  Sell an item </p>

            <div className="  rounded-lg">
                <Form layout="vertical">
                    {/* Image Upload */}

                    <div className='card '>
                        <p className='text-[16px] font-normal text-secondary pb-2'> Add up to 5 photos. </p>
                        <div className="p-3 border border-[#DCDCDC] rounded-md bg-[#f5f5f5] flex flex-col items-center justify-center" style={{ height: "150px" }}>
                            <Upload className="text-center">
                                <div className="flex flex-col items-center text-primary">
                                    <UploadOutlined className="text-4xl mb-2" style={{ color: "#9d977a" }} />
                                    <p className='font-bold text-[14px]'>Select your photo to upload</p>
                                    <p className="text-[12px] font-normal ">or drag and drop them here</p>
                                </div>
                            </Upload>
                        </div>

                    </div>

                    <div className=' card mt-5'>
                        <div className='flex items-center justify-between gap-4 border-b border-[#DCDCDC]'>
                            <div className=' text-[16px] font-bold  text-secondary'> Title  </div>
                            <Form.Item name="title" className="w-1/2">
                                <Input placeholder="e.g. Black Zara jeans" className="rounded-full " style={{ width: "100%", height: "55px", borderRadius: "60px", backgroundColor: "#f5f5f5" }} />
                            </Form.Item>
                        </div>

                        <div className='flex items-center justify-between gap-4 pt-5 '>
                            <div className=' text-[16px] font-bold  text-secondary'> Describe your item  </div>
                            <Form.Item name="title" className="w-1/2">
                                <TextArea placeholder="e.g. still with tags, true to size" rows={4} className="rounded-full " style={{ width: "100%", borderRadius: "20px", resize: "none", padding: "10px", backgroundColor: "#f5f5f5" }} />
                            </Form.Item>
                        </div>
                    </div>

                    {/* Category Dropdown */}

                    <div className='card mt-5'>
                        <div className='flex items-center justify-between '>
                            <div className=' text-[16px] font-bold  text-secondary'> Category </div>
                            <Form.Item name="category" className="w-1/2">
                                <ConfigProvider
                                    theme={{
                                        token: {
                                            borderRadius: 60,
                                            colorBgBase: "#f5f5f5"
                                        },
                                    }}
                                >
                                    <Cascader
                                        options={options}
                                        placeholder="Select a category"
                                        className="rounded-md"
                                        style={{
                                            height: "55px",
                                            backgroundColor: "#f5f5f5",
                                            borderRadius: "60px",
                                            width: "100%"
                                        }}
                                        onChange={handleChange}
                                    />
                                </ConfigProvider>

                            </Form.Item>
                        </div>

                        {
                            category && ( 
                                <div> 

                                <div className='flex items-center justify-between  pt-4  border-y border-[#DCDCDC]'>
                                    <div className=' text-[16px] font-bold  text-secondary'> Brand  </div>
                                    <Form.Item name="brand" className="w-1/2">
                                        <ConfigProvider
                                            theme={{
                                                token: {
                                                    borderRadius: 60,
                                                    colorBgBase: "#f5f5f5"
                                                },
                                            }}
                                        >
                                            <Select
                                                placeholder="Please select a brand"
                                                style={{ width: "100%", height: "55px", borderRadius: "60px", backgroundColor: "#f5f5f5" }}
                                                options={[
                                                    { value: 'brand1', label: 'Brand 1' },
                                                    { value: 'brand2', label: 'Brand 2' },
                                                    { value: 'brand3', label: 'Brand 3' },
                                                    { value: 'brand4', label: 'Brand 4' },
                                                ]}
                                            />
                                        </ConfigProvider>
                                    </Form.Item>
                                </div> 

                                
                                <div className='flex items-center justify-between  pt-4  border-b border-[#DCDCDC]'>
                                    <div className=' text-[16px] font-bold  text-secondary'> Size  </div>
                                    <Form.Item name="size" className="w-1/2">
                                        <ConfigProvider
                                            theme={{
                                                token: {
                                                    borderRadius: 60,
                                                    colorBgBase: "#f5f5f5"
                                                },
                                            }}
                                        >
                                            <Select
                                                placeholder="Please select a Size"
                                                style={{ width: "100%", height: "55px", borderRadius: "60px", backgroundColor: "#f5f5f5" }}
                                                options={[
                                                    { value: 'Size1', label: 'Size 1' },
                                                    { value: 'Size2', label: 'Size 2' },
                                                    { value: 'Size3', label: 'Size 3' },
                                                    { value: 'Size4', label: 'Size 4' },
                                                ]}
                                            />
                                        </ConfigProvider>
                                    </Form.Item>
                                </div>  

                                
                                <div className='flex items-center justify-between  pt-4  border-b border-[#DCDCDC]'>
                                    <div className=' text-[16px] font-bold  text-secondary'> Condition  </div>
                                    <Form.Item name="Condition" className="w-1/2">
                                        <ConfigProvider
                                            theme={{
                                                token: {
                                                    borderRadius: 60,
                                                    colorBgBase: "#f5f5f5"
                                                },
                                            }}
                                        >
                                            <Select
                                                placeholder="Please select a condition"
                                                style={{ width: "100%", height: "55px", borderRadius: "60px", backgroundColor: "#f5f5f5" }}
                                                options={[
                                                    { value: 'Condition1', label: 'Condition 1' },
                                                    { value: 'Condition2', label: 'Condition 2' },
                                                    { value: 'Condition3', label: 'Condition 3' },
                                                    { value: 'Condition4', label: 'Condition 4' },
                                                ]}
                                            />
                                        </ConfigProvider>
                                    </Form.Item>
                                </div>  

                                
                                <div className='flex items-center justify-between  pt-4  border-b border-[#DCDCDC]'>
                                    <div className=' text-[16px] font-bold  text-secondary'> Colors  </div>
                                    <Form.Item name="Colors" className="w-1/2">
                                        <ConfigProvider
                                            theme={{
                                                token: {
                                                    borderRadius: 60,
                                                    colorBgBase: "#f5f5f5"
                                                },
                                            }}
                                        >
                                            <Select 
                                             mode="multiple"
                                                placeholder="Please select a Colors"
                                                style={{ width: "100%", height: "55px", borderRadius: "60px", backgroundColor: "#f5f5f5" }}
                                                options={[
                                                    { value: 'red', label: 'Red' },
                                                    { value: 'yellow', label: 'Yellow' },
                                                    { value: 'Pink', label: 'Pink' },
                                                    { value: 'Purple', label: 'Purple' },
                                                ]}
                                            />
                                        </ConfigProvider>
                                    </Form.Item>
                                </div>   

                                <div className='flex items-center justify-between  pt-4  '>
                                    <div className=' text-[16px] font-bold  text-secondary'> Material (recommended)  </div>
                                    <Form.Item name="Material (recommended)" className="w-1/2">
                                        <ConfigProvider
                                            theme={{
                                                token: {
                                                    borderRadius: 60,
                                                    colorBgBase: "#f5f5f5"
                                                },
                                            }}
                                        >
                                            <Select 
                                             mode="multiple"
                                                placeholder="Please select a Material"
                                                style={{ width: "100%", height: "55px", borderRadius: "60px", backgroundColor: "#f5f5f5" }}
                                                options={[
                                                    { value: 'Material 1', label: 'Material  1' },
                                                    { value: 'Material 2', label: 'Material  2' },
                                                    { value: 'Material 3', label: 'Material  3' },
                                                    { value: 'Material 4', label: 'Material  4' },
                                                ]}
                                            />
                                        </ConfigProvider>
                                    </Form.Item>
                                </div>                   

                                </div>


                            )
                        }
                    </div>




                    {/* Price Field */}
                    <div className='card mt-5'>
                        <div className='flex items-center justify-between '>
                            <div className=' text-[16px] font-bold  text-secondary'> Price (AED)  </div>
                            <Form.Item name="price" className="w-1/2">
                                <Input placeholder="0.00" className="rounded-full " style={{ width: "100%", height: "55px", borderRadius: "60px", backgroundColor: "#f5f5f5" }} />
                            </Form.Item>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-4 mt-8">
                        <OutlineButton> SAVE DRAFT </OutlineButton>
                        <FillButton> UPLOAD </FillButton>
                    </div>
                </Form>
            </div>

        </div>
    );
};

export default SellNow;