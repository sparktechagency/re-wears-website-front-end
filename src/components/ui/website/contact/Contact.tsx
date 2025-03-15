import FillButton from "@/components/shared/FillButton";
import Input from "@/components/shared/Input";
import Label from "@/components/shared/Label";
import TextArea from "@/components/shared/TextArea";

const Contact = () => {
  return (
    <form className="container grid gap-14 my-20">
      <h1 className="text-2xl font-bold text-center">Contact Us</h1>
      <section className="card grid gap-4">
        <div className="grid-between">
          <Label>Full name</Label>
          <Input required />
        </div>
        <hr />
        <div className="grid-between">
          <Label>Email</Label>
          <Input required />
        </div>
        <hr />
        <div className="grid-between">
          <Label>Phone number</Label>
          <Input required />
        </div>
      </section>
      <section className="grid gap-8">
        <div className="card">
          <div className="grid-between">
            <Label>Message</Label>
            <TextArea placeholder="" rows={8} />
          </div>
        </div>
        <div className="flex justify-end">
          <FillButton className="uppercase">Send</FillButton>
        </div>
      </section>
    </form>
  );
};

export default Contact;
