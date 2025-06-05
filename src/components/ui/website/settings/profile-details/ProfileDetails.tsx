"use client";

import FillButton from "@/components/shared/FillButton";
import Input from "@/components/shared/Input";
import OutlineButton from "@/components/shared/OutlineButton";
import Select from "@/components/shared/Select";
import { TUser } from "@/types/TUser";
import { ConfigProvider, Switch } from "antd";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
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

const ProfileDetails = ({ profile }: { profile: TUser }) => {
  console.log(profile);
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

        {/* photo */}
        <section className="bg-white p-8 rounded-xl shadow-smooth">
          {/* image input */}
          <div className="grid-between items-center">
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

          {/* about input */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-between">
            <label className="font-bold py-2">About you</label>
            <textarea
              rows={4}
              placeholder="Tell us more about yourself"
              className="bg-[#F5F5F5] border-2 border-[#DCDCDC] rounded-3xl p-4 w-full"
              style={{ resize: "none" }}
            />
          </div> */}
        </section>

        <section className="card">
          <div className="grid-between items-center">
            <label className="font-bold py-2">Full Name</label>
            <Input placeholder="Your name" />
          </div>
          <hr className="my-4" />
          <div className="grid-between items-center">
            <label className="font-bold py-2">Gender</label>
            <Select placeholder="Select gender" options={["Male", "Female"]} />
          </div>
          <hr className="my-4" />
          <div className="grid-between items-center">
            <label className="font-bold py-2">Birthday</label>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <Input placeholder="Day" />
              <Select
                placeholder="Month"
                options={[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ]}
              />
              <Input placeholder="Year" />
            </div>
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

        {/* Vacation mode */}
        <section className="card flex justify-between items-center gap-2">
          <label className="font-bold py-2">Vacation mode</label>
          <ConfigProvider
            theme={{
              token: {
                colorTextQuaternary: "#f3e7d8",
                colorText: "#f3e7d8",
                colorPrimary: "#f3e7d8",
                colorPrimaryHover: "#f3e7d8",
                colorTextTertiary: "#f3e7d8",
                colorTextLightSolid: "#9D977A",
              },
              components: {
                Switch: {
                  handleBg: "#9D977A",
                  trackPadding: 5,
                  trackHeight: 28,
                  trackMinWidth: 52,
                },
              },
            }}
          >
            <Switch />
          </ConfigProvider>
        </section>
        {/* Google */}
        {/* <section className="card flex justify-between items-center gap-2">
        <label className="font-bold py-2">Google</label>
        <OutlineButton>Linked</OutlineButton>
      </section> */}
        {/* Change password */}
        <section className="card flex justify-between items-center gap-2">
          <label className="font-bold py-2">Change password</label>
          <Link href={`/change-password`}>
            <OutlineButton>Change</OutlineButton>
          </Link>
        </section>
        {/* Delete my account */}
        <section className="card flex justify-between items-center gap-2">
          <label className="font-bold py-2">Delete my account</label>
          <Link href={`/settings/account-settings/delete-account`}>
            <button>
              <ChevronRight />
            </button>
          </Link>
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
