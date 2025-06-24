"use client";

import Label from "@/components/shared/Label";
import OutlineButton from "@/components/shared/OutlineButton";
import { Rate } from "antd";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";

const Reviews = ({ reviews }: { reviews: any }) => {
  const [value, setValue] = useState(3);
  console.log(reviews);

  return (
    <div className="grid gap-6 font-poppins">
      <section className="flex gap-6 items-center text-base lg:py-4">
        <h1 className="text-7xl font-medium text-black">4.0</h1>
        <div className="">
          <Rate disabled defaultValue={value} style={{ color: "#FDB11A" }} />
          <p className="text-[#797979] font-medium">20 reviews</p>
        </div>
      </section>

      <section>
        <ul className="grid gap-4">
          {reviews?.data?.map((reviewContent: any) => (
            <li
              key={reviewContent?._id}
              className="flex flex-col lg:flex-row justify-between gap-4 bg-[#F5F5F5] p-5 rounded-xl"
            >
              <div className="flex flex-col lg:flex-row gap-4">
                <span>
                  <FaCircleUser size={40} className="text-[#797979]" />
                </span>
                <div>
                  <Label className="text-lg !py-0">
                    {reviewContent?.customer?.firstName}{" "}
                    {reviewContent?.customer?.lastName}
                  </Label>
                  <p>{reviewContent?.message}</p>
                </div>
              </div>

              <p className="text-[#797979] font-medium">
                {formatDistanceToNow(new Date(reviewContent?.createdAt), {
                  addSuffix: true,
                })}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {reviews?.data?.length >= 10 && (
        <section className="flex justify-center">
          <OutlineButton className="uppercase w-full lg:w-auto">
            Load More
          </OutlineButton>
        </section>
      )}
    </div>
  );
};

export default Reviews;
