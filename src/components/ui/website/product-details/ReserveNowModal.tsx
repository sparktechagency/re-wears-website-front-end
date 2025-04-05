import FillButton from "@/components/shared/FillButton";
import OutlineButton from "@/components/shared/OutlineButton";
import { Modal } from "antd";

const ReserveNowModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      centered
      width={500}
      footer={false}
      style={{ fontFamily: "poppins" }}
    >
      <section>
        <h1 className="text-center text-[25px] font-bold pb-4">
          {" "}
          Reserve now{" "}
        </h1>
        <p className=" lg:text-start text-center px-4 lg:px-0">
          <strong>Remember:</strong> Reserving an item gives you{" "}
          <strong>24 hours</strong> to arrange payment and pickup. If plans
          change you can cancel anytime!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-6">
          <OutlineButton className="uppercase">Reserve now</OutlineButton>
          <FillButton className="uppercase !bg-danger !hover:bg-danger-dark">
            Cancel
          </FillButton>
        </div>
      </section>
    </Modal>
  );
};

export default ReserveNowModal;
