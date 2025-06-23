"use client";

import FillButton from "@/components/shared/FillButton";
import Input from "@/components/shared/Input";
import OutlineButton from "@/components/shared/OutlineButton";
import Select from "@/components/shared/Select";
import { IMAGE_URL } from "@/config/env-config";
import { locations } from "@/constants/profile/locations";
import { months } from "@/constants/profile/months";
import { myFetch } from "@/helpers/myFetch";
import { revalidateTags } from "@/helpers/revalidateTags";
import { TUser } from "@/types/TUser";
import { ConfigProvider, Switch } from "antd";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const ProfileDetails = ({ profile }: { profile: TUser }) => {
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [vacationMode, setVacationMode] = useState<boolean>(
    profile?.isVacation
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
      setImagePreview(URL.createObjectURL(file)); // Generate preview URL
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const date = new Date(
      Number(formData.get("year")),
      Number(formData.get("month")),
      Number(formData.get("day"))
    ).toISOString();
    formData.set("dob", date);
    formData.set("isVacation", vacationMode.toString());
    if (file) {
      formData.set("image", file);
    }

    toast.loading("Updating profile...", { id: "update-profile" });
    try {
      const res = await myFetch("/users/update-profile", {
        method: "PATCH",
        body: formData,
      });
      console.log(res);
      if (res?.success) {
        toast.success("Profile updated successfully", { id: "update-profile" });
        revalidateTags(["profile"]);
      } else {
        toast.error(res?.message || "Something went wrong", {
          id: "update-profile",
        });
      }
    } catch (error) {
      console.error(error);
    }
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
              <Image
                src={
                  imagePreview ||
                  (profile?.image?.includes("http")
                    ? profile?.image
                    : `${IMAGE_URL}${profile?.image}`)
                }
                width={100}
                height={100}
                alt="profile"
                className="size-16 rounded-full object-cover border"
              />
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
        </section>

        <section className="card">
          <div className="grid-between items-center">
            <label className="font-bold py-2">First Name</label>
            <Input
              name="firstName"
              defaultValue={profile?.firstName}
              placeholder="Your first name"
            />
          </div>
          <hr className="my-4" />
          <div className="grid-between items-center">
            <label className="font-bold py-2">Last Name</label>
            <Input
              name="lastName"
              defaultValue={profile?.lastName}
              placeholder="Your last name"
            />
          </div>
          <hr className="my-4" />
          <div className="grid-between items-center">
            <label className="font-bold py-2">Gender</label>

            <Select
              name="gender"
              defaultValue={profile?.gender || ""}
              placeholder="Select gender"
              options={[
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
              ]}
            />
          </div>
          <hr className="my-4" />
          <div className="grid-between items-center">
            <label className="font-bold py-2">Birthday</label>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <Input
                name="day"
                defaultValue={
                  profile?.dob ? new Date(profile?.dob).getDate() : ""
                }
                placeholder="Day"
              />
              <Select
                name="month"
                defaultValue={
                  profile?.dob ? new Date(profile?.dob).getMonth() : ""
                }
                placeholder="Month"
                options={months.map((item, index) => ({
                  label: item,
                  value: index.toString(),
                }))}
              />
              <Input
                name="year"
                defaultValue={new Date(profile?.dob).getFullYear() || ""}
                placeholder="Year"
              />
            </div>
          </div>
        </section>

        {/* location selection */}
        <section className="bg-white p-8 rounded-xl shadow-smooth">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-between">
            <label className="font-bold py-2">My Location</label>
            <Select
              name="location"
              defaultValue={profile?.location || ""}
              placeholder="Choose a location"
              options={locations?.map((item) => ({
                label: item,
                value: item,
              }))}
            />
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
            <Switch
              defaultValue={vacationMode}
              onChange={(checked) => setVacationMode(checked)}
            />
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