import FillButton from "@/components/shared/FillButton";
import Label from "@/components/shared/Label";
import Link from "next/link";

const ConfirmEmailChange = () => {
  return (
    <section className="px-4 my-48 grid justify-center">
      <div className="flex flex-col justify-center gap-5 text-center max-w-[500px]">
        <Label className="text-xl font-bold">Confirm change</Label>
        <p className="text-[#797979]">
          You need to confirm <span className="link">newname@gmail.com</span> is
          your email address before you can update it
        </p>
        <Link href={""}>
          <FillButton className="uppercase">Send confirmation email</FillButton>
        </Link>
        <Link href={""} className="text-primary">
          I don&apos;t have access to this email
        </Link>
      </div>
    </section>
  );
};

export default ConfirmEmailChange;
