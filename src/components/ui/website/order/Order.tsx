/* eslint-disable @next/next/no-img-element */

import FillButton from "@/components/shared/FillButton";
import CountdownTimer from "@/utils/countDownTimer";
import Link from "next/link";

const Order = () => {
  return (
    <div className="container pt-[50px] pb-[100px] min-h-[calc(100vh-140px)]">
      <div className=" flex items-center justify-center ">
        <div className="w-full  grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Order Details */}
          <div className="lg:col-span-2 bg-white card">
            <p className="text-[14px] font-normal text-[#797979] p-1 pb-3">
              {" "}
              Order
            </p>
            <div className="flex items-center gap-4 mb-4 border border-[#DCDCDC] bg-[#f8f8f8] rounded-lg p-4">
              <Link href={`/product-details`}>
                <img
                  src="/user1.png"
                  alt="Dress"
                  className="w-[70px] h-[70px] object-cover rounded-md"
                />
              </Link>
              <Link href={`/product-details`}>
                <h2 className="text-[16px] font-bold text-secondary">
                  Lorem Ipsum
                </h2>
                <p className="text-secondary text-[14px] font-normal">
                  M / 10 - Good
                </p>
              </Link>
              <div className="ml-auto">
                <p className="text-[16px] font-semibold">AED 45.00</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              This item will be reserved for you for{" "}
              <CountdownTimer
                hours={24}
                minutes={0}
                seconds={0}
                className="font-bold"
              />{" "}
              hours.
            </p>
          </div>

          {/* Order Summary */}
          <div
            title="Order summary"
            className="lg:col-span-1 card grid gap-6 justify-items-stretch"
          >
            <div>
              <p className="text-[14px] font-normal text-[#797979]  pb-3">
                {" "}
                Order summary
              </p>
              <div className="flex justify-between items-center mb-6">
                <span className="text-secondary text-[16px]">Order</span>
                <span className="font-bold text-secondary text-[16px]">
                  AED 45.00
                </span>
              </div>
            </div>
            <Link href={"/inbox"}>
              <FillButton className="w-full">MESSAGE SELLER</FillButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;