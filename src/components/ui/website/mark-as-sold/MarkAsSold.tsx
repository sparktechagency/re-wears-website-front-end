/* eslint-disable @next/next/no-img-element */
"use client";
import FillButton from "@/components/shared/FillButton";
import { ConfigProvider, Form, Input, Select } from "antd";

const MarkAsSold = () => {
  return (
    <div className="max-w-xl mx-auto px-4 my-16 lg:my-32">
      <p className=" text-[25px] font-bold text-center text-secondary mb-6  ">
        {" "}
        Mark as sold{" "}
      </p>
      <Form>
        <div className="card bg-[#f5f5f5] mb-8">
          <div className="flex items-center justify-between  ">
            <div className=" text-[16px] font-bold  text-secondary">
              {" "}
              Item sold to{" "}
            </div>
            <Form.Item name="sold" className="w-1/2">
              <ConfigProvider
                theme={{
                  token: {
                    borderRadius: 60,
                    colorBgBase: "#ffffff",
                  },
                }}
              >
                <Select
                  defaultValue={"Member"}
                  style={{
                    width: "100%",
                    height: "55px",
                    borderRadius: "60px",
                    backgroundColor: "#f5f5f5",
                  }}
                  options={[
                    { value: "Member", label: "Member" },
                    { value: "User", label: "User" },
                  ]}
                />
              </ConfigProvider>
            </Form.Item>
          </div>

          <div className="flex items-center justify-between  ">
            <div className=" text-[16px] font-bold  text-secondary"> Item </div>
            <div className="flex items-center gap-2 w-1/2 ">
              <img
                src="/user1.png"
                alt=""
                className=" w-[70px] h-[76px] rounded-lg "
              />

              <div className="flex flex-col  items-start gap-2">
                <p className="text-[16px] text-secondary font-bold ">
                  Lorem Ipsum{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between  mt-7">
            <div className=" text-[16px] font-bold  text-secondary">
              {" "}
              Price (AED){" "}
            </div>
            <Form.Item name="price" className="w-1/2">
              <Input
                placeholder="0.00"
                className="rounded-full "
                style={{
                  width: "100%",
                  height: "55px",
                  borderRadius: "60px",
                }}
              />
            </Form.Item>
          </div>
        </div>

        <Form.Item className=" flex items-center justify-center">
          <FillButton> SUBMIT </FillButton>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MarkAsSold;
