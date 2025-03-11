import FillButton from "@/components/shared/FillButton";
import Input from "@/components/shared/Input";
import OutlineButton from "@/components/shared/OutlineButton";
import Select from "@/components/shared/Select";
import { Switch } from "antd";
import { Check, ChevronRight } from "lucide-react";

const AccountSettings = () => {
  return (
    <div className="grid gap-5">
      <section className="bg-white p-8 rounded-xl shadow-smooth flex flex-wrap justify-between items-center gap-4">
        <div className="">
          <p className="font-bold">mykola@gmail.com</p>
          <span className="flex items-center gap-2 text-[#797979]">
            Verified <Check />
          </span>
        </div>
        <OutlineButton>Change</OutlineButton>
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
      {/* Vacation mode */}
      <section className="card flex flex-col lg:flex-row justify-between items-center gap-2">
        <label className="font-bold py-2">Vacation mode</label>
        <Switch />
      </section>
      {/* Google */}
      <section className="card flex flex-col lg:flex-row justify-between items-center gap-2">
        <label className="font-bold py-2">Google</label>
        <OutlineButton>Linked</OutlineButton>
      </section>
      {/* Change password */}
      <section className="card flex flex-col lg:flex-row justify-between items-center gap-2">
        <label className="font-bold py-2">Change password</label>
        <OutlineButton>Change</OutlineButton>
      </section>
      {/* Delete my account */}
      <section className="card flex flex-col lg:flex-row justify-between items-center gap-2">
        <label className="font-bold py-2">Delete my account</label>
        <button>
          <ChevronRight />
        </button>
      </section>
      {/* save button */}
      <section className="flex justify-end">
        <FillButton>Save</FillButton>
      </section>
    </div>
  );
};

export default AccountSettings;
