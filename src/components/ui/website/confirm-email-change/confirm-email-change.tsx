import FillButton from "@/components/shared/FillButton";
import Label from "@/components/shared/Label";

const ConfirmEmailChange = () => {
  return (
    <section className="my-48 grid justify-center">
      <div className="flex flex-col justify-center gap-5 text-center max-w-[500px]">
        <Label className="text-xl font-bold">Confirm change</Label>
        <p className="text-[#797979]">
          You need to confirm <span className="link">newname@gmai.com</span> is
          your email address before you can update it
        </p>
        <FillButton className="uppercase">Send confirmation email</FillButton>
        <p className="text-primary">I don&apos;t have access to this email</p>
      </div>
    </section>
  );
};

export default ConfirmEmailChange;
