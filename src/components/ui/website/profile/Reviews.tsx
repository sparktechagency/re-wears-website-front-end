"use client";

import Label from "@/components/shared/Label";
import OutlineButton from "@/components/shared/OutlineButton";
import { Rate } from "antd";
import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";

const Reviews = ({ reviewsData }: { reviewsData: any }) => {
  const [show, setShow] = useState(false);
  const [reviewData, setReviewData] = useState([]);

  console.log(reviewsData?.averageRating);

  const handleLoadMore = () => {
    setReviewData(reviewsData?.result);
    setShow(true);
  };

  useEffect(() => {
    if (reviewsData?.result?.length > 5) {
      const data = reviewsData?.result?.data?.slice(0, 5);
      setReviewData(data);
    }
  }, [reviewsData]);

  return (
    <div className="grid gap-6 font-poppins">
      <section className="flex gap-6 items-center text-base lg:py-4">
        <h1 className="text-7xl font-medium text-black">
          {reviewsData?.averageRating?.toFixed(1)}
        </h1>
        <div className="">
          <Rate
            disabled
            defaultValue={reviewsData?.averageRating || 0}
            style={{ color: "#FDB11A" }}
          />
          <p className="text-[#797979] font-medium">
            {reviewsData?.result?.length || 0} reviews
          </p>
        </div>
      </section>

      <section>
        <ul className="grid gap-4">
          {reviewData?.map((item: any) => (
            <li
              key={item?._id}
              className="flex flex-col lg:flex-row justify-between gap-4 bg-[#F5F5F5] p-5 rounded-xl"
            >
              <div className="flex flex-col lg:flex-row gap-4">
                <span>
                  <FaCircleUser size={40} className="text-[#797979]" />
                </span>
                <div>
                  <Label className="text-lg !py-0">
                    {item?.customer?.firstName} {item?.customer?.lastName}
                  </Label>
                  <p>{item?.message}</p>
                </div>
              </div>

              <p className="text-[#797979] font-medium">
                {formatDistanceToNow(new Date(item?.createdAt), {
                  addSuffix: true,
                })}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {reviewsData?.result?.length > 5 && !show && (
        <div onClick={handleLoadMore} className="flex justify-center">
          <OutlineButton className="uppercase w-full lg:w-auto">
            Load More
          </OutlineButton>
        </div>
      )}
    </div>
  );
};

export default Reviews;
