"use client";

import FillButton from "@/components/shared/FillButton";
import OutlineButton from "@/components/shared/OutlineButton";
import CountdownTimer from "@/utils/countDownTimer";
import { ConfigProvider, Segmented, Table, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import Image from "next/image";
import Link from "next/link";
import { MdInfo } from "react-icons/md";

// Define the data structure
interface Order {
  key: string;
  image: string;
  price: string;
  name: string;
  seller: string;
  reviews: string;
  initial: string;
  date: string;
}

// Define table columns
const columns: ColumnsType<Order> = [
  {
    title: "Order",
    dataIndex: "order",
    key: "order",
    render: (_, record: Order) => (
      <div className="flex items-center gap-4 font-poppins">
        <figure className="w-20 h-24 rounded-lg border relative">
          <Image
            src={record.image}
            alt="img"
            width={84}
            height={84}
            className="w-full h-full rounded-lg"
          />
          <div className="text-xs lg:text-[8px] px-2 bg-white text-primary rounded-b-lg absolute w-full bottom-0">
            {record.price}
          </div>
        </figure>
        <div>
          <p className="font-bold text-sm whitespace-nowrap">{record.name}</p>
          <p className="flex items-center gap-1 text-xs text-[#797979]">
            <ConfigProvider
              theme={{
                token: {
                  colorTextLightSolid: "#000000",
                  borderRadius: 16,
                  paddingMD: 24,
                },
              }}
            >
              <Tooltip
                placement="bottomLeft"
                arrow={false}
                title={
                  <p className="text-black">
                    Changed your mind? Hit “Release” button for someone else to
                    re-wear.
                  </p>
                }
                color="#FFFFFF"
              >
                <MdInfo />
              </Tooltip>
            </ConfigProvider>{" "}
            time left <CountdownTimer hours={24} minutes={0} seconds={0} />
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Seller",
    dataIndex: "seller",
    key: "seller",
    render: (_, record) => (
      <div className="flex items-center gap-2 font-poppins">
        <div className="size-14 flex justify-center items-center bg-[#465A63] text-white text-xl font-bold rounded-full border">
          {record.initial}
        </div>
        <div className="grid gap-1">
          <h3 className="text-sm font-bold">{record.seller}</h3>
          <p className="text-xs text-[#797979]">{record.reviews}</p>
        </div>
      </div>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <div className="flex items-center gap-2 font-poppins">
        <FillButton className="text-sm px-4 h-8 !bg-[#D04555] !hover:bg-[#a32937] text-white whitespace-nowrap">
          Message seller
        </FillButton>
        <OutlineButton className="text-sm px-4 h-8">Release</OutlineButton>
        <Link href={"leave-review"}>
          <OutlineButton className="text-sm px-4 h-8">
            Review seller
          </OutlineButton>
        </Link>
      </div>
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (text: string) => (
      <span className="text-sm text-[#797979] font-poppins whitespace-nowrap">
        {text}
      </span>
    ),
  },
];

// Sample data
const data: Order[] = [
  {
    key: "1",
    image:
      "https://media-hosting.imagekit.io//1312446cfd0b4e77/dress-1.png?Expires=1836362388&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=SY2DBe8Gbzh2-1eKUrGKd9~fl2v-Wr04fTswOqEi7atU088Jz9XawD1xS1oNw0733XiA9P8ITwrlP40GWTDZeoqv8U8Txx8cptJvA85WjEynitzhcKrMJFv0KEOgi~~6WZUCGCIdqd3JnxdB34T3v~huDc~ENQxuuMG-xW33dBiLWjPiE0ckFidCBGgzOLhhZ6RvJRM~1duhZGFR9pH3QYf1iEYdgzDAyfloaSeLuWK1xGu6sBvJR-h19gD~Jw1G5~dpbxOtXsQZMhwEOD755DQ0Yv~MGqm-HHtpJdC1Gw7lDXkurBNTUoHbjYi-cGZ8G6MXW7OSKLvTBB5vlKsLOA__",
    price: "AED 30.00",
    name: "Long pink dress",
    seller: "@mykola888",
    reviews: "No reviews yet",
    initial: "M",
    date: "12 January 2025",
  },
];

const MyOrders = () => {
  return (
    <div className="font-poppins grid gap-4">
      {/* filter buttons */}
      <section className="flex justify-end">
        <ConfigProvider
          theme={{
            components: {
              Segmented: {
                itemSelectedBg: "#9D977A",
                itemSelectedColor: "white",
              },
            },
            token: {},
          }}
        >
          <Segmented<string>
            options={["Reserved", "Completed"]}
            onChange={(value) => {
              console.log(value); // string
            }}
          />
        </ConfigProvider>
      </section>

      {/* orders table */}
      <div className="w-full max-w-[calc(82vw)] overflow-x-scroll no-scrollbar">
        <ConfigProvider
          theme={{
            components: {
              Table: {
                headerBg: "#F5F5F5",
              },
            },
          }}
        >
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            className="min-w-[600px]"
            scroll={{ x: "100%" }}
            style={{ fontFamily: "poppins" }}
          />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default MyOrders;
