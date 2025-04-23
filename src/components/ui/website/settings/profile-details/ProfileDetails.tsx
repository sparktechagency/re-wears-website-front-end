"use client";

import FillButton from "@/components/shared/FillButton";
import { useState } from "react";

const locations = [
  "Dubai, UAE",
  "Abu Dhabi, UAE",
  "Sharjah, UAE",
  "Ajman, UAE",
  "Umm Al-Quwain, UAE",
  "Ras Al Khaimah, UAE",
  "Fujairah, UAE",
];

const ProfileDetails = () => {
  const [image, setImage] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Generate preview URL
    }
  };

  const handleSubmit = () => {
    // action performs here
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="grid gap-6">
        <h1 className="md:hidden text-xl font-bold">Profile Details</h1>
        <section className="bg-white p-8 rounded-xl shadow-smooth">
          {/* image input */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-between">
            <label className="font-bold py-2">Your photo</label>
            <div className="flex justify-end items-center gap-4">
              {/* Image Preview */}
              {image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={image}
                  alt="Preview"
                  className="size-16 rounded-full object-cover border"
                />
              ) : (
                <div className="size-16 flex justify-center items-center bg-[#465A63] text-white text-3xl font-bold rounded-full border">
                  M
                </div>
              )}
              <label className="cursor-pointer px-4 py-2 text-primary border-2 border-primary rounded-full">
                Choose photo
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>
          <hr className="my-4" />

          {/* about input */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-between">
            <label className="font-bold py-2">About you</label>
            <textarea
              rows={4}
              placeholder="Tell us more about yourself"
              className="bg-[#F5F5F5] border-2 border-[#DCDCDC] rounded-3xl p-4 w-full"
              style={{ resize: "none" }}
            />
          </div>
        </section>

        {/* location selection */}
        <section className="bg-white p-8 rounded-xl shadow-smooth">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-between">
            <label className="font-bold py-2">My Location</label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="" disabled>
                Choose a location
              </option>
              {locations.map((location) => (
                <option
                  key={location}
                  value={location}
                  style={{
                    backgroundColor:
                      selectedLocation === location ? "#9D977A" : "white",
                    color: selectedLocation === location ? "white" : "black",
                  }}
                >
                  {location}
                </option>
              ))}
            </select>
          </div>
        </section>
        <section className="flex justify-end">
          <FillButton className="w-full md:w-auto uppercase">
            Update profile
          </FillButton>
        </section>
      </form>
    </div>
  );
};

export default ProfileDetails;
