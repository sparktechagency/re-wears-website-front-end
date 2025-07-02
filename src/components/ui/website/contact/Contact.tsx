"use client";
import FillButton from "@/components/shared/FillButton";
import Input from "@/components/shared/Input";
import Label from "@/components/shared/Label";
import TextArea from "@/components/shared/TextArea";
import SuccessModal from "./SuccessModal";
import { useState } from "react";
import { myFetch } from "@/helpers/myFetch";

const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());
    const paylaod = { ...values, subject: "", priority: "LOW" };

    try {
      const res = await myFetch("/supports/create", {
        method: "POST",
        body: paylaod,
      });
      if (res?.success) {
        setOpen(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="container grid gap-14 my-20">
        <h1 className="text-2xl font-bold text-center">Contact Us</h1>
        <section className="card grid gap-4">
          <div className="grid-between">
            <Label>Full name</Label>
            <Input name="name" required />
          </div>
          <hr />
          <div className="grid-between">
            <Label>Email</Label>
            <Input name="email" required />
          </div>
          <hr />
          <div className="grid-between">
            <Label>Phone number</Label>
            <Input name="phone" required />
          </div>
        </section>
        <section className="grid gap-8">
          <div className="card">
            <div className="grid-between">
              <Label>Message</Label>
              <TextArea name="message" placeholder="" rows={8} />
            </div>
          </div>
          <div className="flex justify-end">
            <FillButton className="uppercase">Send</FillButton>
          </div>
        </section>
      </form>
      <SuccessModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Contact;
