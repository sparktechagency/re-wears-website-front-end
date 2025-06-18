import FillButton from "@/components/shared/FillButton";
import OutlineButton from "@/components/shared/OutlineButton";
import { Modal } from "antd";

const ProductDeleteModal = ({
  open,
  setOpen,
  action,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  action?: () => any;
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
        <h1 className="text-center text-[25px] font-bold pb-4">Delete Item</h1>
        <p className="text-center px-4 lg:px-0">
          <strong>Remember:</strong> if you sold this item on re-wears, click
          <strong>“mark as sold”</strong> instead of deleting it!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-6">
          <OutlineButton onClick={() => setOpen(false)} className="uppercase">
            Cancel
          </OutlineButton>
          <FillButton
            onClick={action}
            className="uppercase !bg-danger !hover:bg-danger-dark !px-6"
          >
            Confirm and delete
          </FillButton>
        </div>
      </section>
    </Modal>
  );
};

export default ProductDeleteModal;
