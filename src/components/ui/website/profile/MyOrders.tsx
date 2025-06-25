/* eslint-disable @next/next/no-img-element */
"use client";

import FillButton from "@/components/shared/FillButton";
import Label from "@/components/shared/Label";
import OutlineButton from "@/components/shared/OutlineButton";
import { IMAGE_URL } from "@/config/env-config";
import CountdownTimer from "@/utils/countDownTimer";
import { ConfigProvider, Rate, Segmented, Table, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdInfo } from "react-icons/md";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { myFetch } from "@/helpers/myFetch";
import { format } from "date-fns";
import { revalidateTags } from "@/helpers/revalidateTags";

interface Order {
  key: string;
  image: string;
  price: string;
  name: string;
  seller: any;
  reviews: string;
  initial: string;
  date: string;
  product: any;
  createdAt: any;
}

const MyOrders = ({ orders }: { orders: any }) => {
  const [query, setQuery] = useState("Reserved");

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("status", query);
    router.replace(`?${params.toString()}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleStatus = async (id: string) => {
    const res = await myFetch(`/order/${id}`, {
      method: "PATCH",
      body: { status: "Active" },
    });
    console.log(res?.success);
    if (res?.success) {
      revalidateTags(["Orders"]);
    }
  };

  const columns: ColumnsType<Order> = [
    {
      title: "Order",
      dataIndex: "order",
      key: "order",
      render: (_, record: Order) => {
        return (
          <div className="flex items-center gap-4 font-poppins">
            <figure className="w-20 h-24 rounded-lg border relative">
              {record?.product?.productImage?.[0] && (
                <Image
                  src={
                    record?.product?.productImage?.[0]?.includes("http")
                      ? record?.product?.productImage?.[0]
                      : `${IMAGE_URL}${record?.product?.productImage?.[0]}`
                  }
                  alt="img"
                  width={84}
                  height={84}
                  className="w-full h-full rounded-lg"
                />
              )}
              <div className="text-xs lg:text-[8px] px-2 bg-white text-primary rounded-b-lg absolute w-full bottom-0">
                {record?.product?.price}
              </div>
            </figure>
            <div>
              <p className="font-bold text-sm whitespace-nowrap">
                {record?.product?.name}
              </p>
            </div>
          </div>
        );
      },
    },
    {
      title: "Seller",
      dataIndex: "seller",
      key: "seller",
      render: (_, record) => {
        return (
          <div className="flex items-center gap-2 font-poppins">
            <div className="size-14 flex justify-center items-center bg-[#465A63] text-white text-xl font-bold rounded-full border">
              {record?.seller?.image ? (
                <Image
                  src={
                    record.seller.image.includes("http")
                      ? record.seller.image
                      : `${IMAGE_URL}${record.seller.image}`
                  }
                  alt="Seller image"
                  width={112}
                  height={112}
                  className="object-cover rounded-full"
                />
              ) : (
                <div className="lg:size-28 size-[69px] flex justify-center items-center bg-[#465A63] text-white text-3xl font-bold rounded-full border">
                  {record.seller.firstName.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <div className="grid gap-1">
              <h3 className="text-sm font-bold">{record?.seller?.userName}</h3>
              <Rate
                disabled
                defaultValue={record?.product?.reviewsRating}
                style={{ color: "#FDB11A" }}
              />
            </div>
          </div>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <div className="flex items-center gap-2 font-poppins">
            <Link href={`/inbox?recipient=${record?.seller?._id}`}>
              <FillButton className="text-sm px-4 h-8 !bg-[#D04555] !hover:bg-[#a32937] text-white whitespace-nowrap">
                Message seller
              </FillButton>
            </Link>
            {query === "Reserved" && (
              <div onClick={() => handleStatus(record?.product?._id)}>
                <OutlineButton className="text-sm px-4 h-8">
                  Release
                </OutlineButton>
              </div>
            )}
            <Link
              href={{
                pathname: "leave-review",
                query: { sellerId: record?.seller?._id },
              }}
            >
              <OutlineButton className="text-sm px-4 h-8">
                Review seller
              </OutlineButton>
            </Link>
          </div>
        );
      },
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (_, record) => {
        const createdAt = record?.createdAt;
        return (
          <div className="flex flex-col gap-6 justify-between h-full">
            <span className="text-sm text-[#797979] font-poppins whitespace-nowrap">
              {format(new Date(createdAt), "dd MMMM yyyy")}
            </span>
            <p className="flex items-center gap-1 text-xs text-[#797979] font-poppins">
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
                      Changed your mind? Hit “Release” button for someone else
                      to re-wear.
                    </p>
                  }
                  color="#FFFFFF"
                >
                  <MdInfo />
                </Tooltip>
              </ConfigProvider>{" "}
              time left <CountdownTimer backendTime={createdAt} />
            </p>
          </div>
        );
      },
    },
  ];

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
            value={query}
            onChange={(value) => {
              setQuery(value);
            }}
          />
        </ConfigProvider>
      </section>

      {/* orders table */}
      <div className="w-full max-w-[calc(82vw)] overflow-x-scroll no-scrollbar">
        {orders?.data?.length > 0 ? (
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
              dataSource={orders?.data}
              pagination={false}
              className="min-w-[600px]"
              scroll={{ x: "100%" }}
              style={{ fontFamily: "poppins" }}
            />
          </ConfigProvider>
        ) : (
          <section>
            <div className="grid justify-center gap-4 py-8 lg:py-16">
              <Image
                src="/order.png"
                alt="icon"
                width={90}
                height={90}
                className="mx-auto"
              />
              <Label className="text-xl lg:text-2xl text-center">
                Discover preloved gems
              </Label>
              <p className="text-[#797979] text-center text-sm lg:text-base">
                Shop pre-owned fashion. Embrace sustainable living.
              </p>
              <Link href={"/products"} className="flex justify-center">
                <FillButton className="uppercase">Browse</FillButton>
              </Link>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
