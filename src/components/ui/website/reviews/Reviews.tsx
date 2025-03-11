"use client";

import Label from "@/components/shared/Label";
import { Rate } from "antd";
import { useState } from "react";

const Reviews = () => {
  const [value, setValue] = useState(3);

  return (
    <div className="my-8">
      <section className="container card flex gap-6">
        <div className="size-28 flex justify-center items-center bg-[#465A63] text-white text-3xl font-bold rounded-full border">
          M
        </div>

        <div>
          <Label className="text-xl">@mykola888</Label>
          <div className="flex items-center gap-4">
            <Rate
              onChange={setValue}
              value={value}
              style={{ color: "#FDB11A" }}
            />
            <span className="text-[#797979]">20 reviews</span>
          </div>
          <div className="flex gap-4 mt-4">
            <div>
              <Label className="text-3xl text-primary">20</Label>
              <p className="text-[#797979]">Followers</p>
            </div>
            <div>
              <Label className="text-3xl text-primary">23</Label>
              <p className="text-[#797979]">Following</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
