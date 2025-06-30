"use client"
import FillButton from "@/components/shared/FillButton";
import Label from "@/components/shared/Label";
import TextArea from "@/components/shared/TextArea";
import { Checkbox } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DeleteAccount = () => { 
  const router = useRouter()
  return (
    <div className="grid gap-5">
      <h1 className="md:hidden text-xl font-bold">Delete Account</h1>
      <section className="card grid-between">
        <div>
          <p className="text-[#797979] text-sm">Delete my account</p>
          <Label>Help us improve</Label>
        </div>
        <TextArea placeholder="Tell us why you're closing your account" />
      </section>

      <section className="card flex justify-between items-center gap-4">
        <Label>I confirm that all my orders are completed</Label>
        <div className="flex lg:justify-end items-center">
          <Checkbox className="scale-150" />
        </div>
      </section>

      <section>
        <p className="text-sm text-[#797979]">
          If you delete your account, it will be deactivated immediately.
          Deactivated accounts are only visible to re-wears team before they are
          permanently deleted. The deletion takes place within the time frames
          indicated in re-wears&apos;s{" "}
          <Link href={`/privacy-policy`} className="link">
            Privacy Policy.
          </Link>
        </p>
      </section>

      <section
        className="flex justify-end"
        onClick={() => {
          router.push("/delete-confirm");
        }}
      >
        <FillButton className="!bg-[#D04555] !hover:bg-[#a32937] uppercase w-full md:w-auto">
          Delete account
        </FillButton>
      </section>
    </div>
  );
};

export default DeleteAccount;
