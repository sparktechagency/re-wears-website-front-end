"use client";

import FillButton from "@/components/shared/FillButton";
import Input from "@/components/shared/Input";
import Label from "@/components/shared/Label";
import { useAuthContext } from "@/contexts/AuthContext";
import { myFetch } from "@/helpers/myFetch";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const DeleteAccount = () => {
  const [visible, setVisible] = useState(false);
  const { logout } = useAuthContext();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    toast.loading("Deleting your account...", { id: "delete-account" });

    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());

    try {
      const res = await myFetch("/auth/public/delete-account", {
        method: "DELETE",
        body: values,
      });
      if (res?.success) {
        toast.success("Account deleted successfully", { id: "delete-account" });
        logout();
        window.location.href = "/";
      } else {
        toast.error(res?.message || "Failed to delete account", {
          id: "delete-account",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto grid gap-14 my-20"
      >
        <h1 className="text-2xl font-bold text-center">Delete Your Account</h1>
        <section className="card grid gap-6">
          <div className="">
            <Label>Email</Label>
            <Input name="email" type="email" required />
          </div>
          <div className="">
            <Label>Password</Label>
            <div className="flex items-center relative">
              <Input
                name="password"
                type={visible ? "text" : "password"}
                required
              />
              <span
                onClick={() => setVisible(!visible)}
                className="text-[#c8c8c8] absolute right-4 cursor-pointer"
              >
                {visible ? <EyeOff /> : <Eye />}
              </span>
            </div>
          </div>
          <FillButton className="uppercase h-14 bg-danger hover:bg-danger-dark">
            Confirm
          </FillButton>
        </section>
      </form>
    </div>
  );
};

export default DeleteAccount;
