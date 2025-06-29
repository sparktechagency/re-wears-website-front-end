import { myFetch } from "@/helpers/myFetch";
import { revalidateTags } from "@/helpers/revalidateTags";
import { Form, Input, Modal } from "antd";
import toast from "react-hot-toast";

const MakeOfferModal = ({
  open,
  setOpen,
  product,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  product: any;
}) => {
  const [form] = Form.useForm();

  // handle make offer
  const handleMakeOffer = async (values: any) => {
    toast.loading("Loading...", { id: "make-offer" });
    const payload = {
      product: product?._id,
      price: Number(values?.price),
    };

    try {
      const res = await myFetch(`/offer/send/${product?.user?._id}`, {
        method: "POST",
        body: payload,
      });
      if (res?.success) {
        toast.success("Offer created successfully", { id: "make-offer" });
        setOpen(false);
        revalidateTags(["Product"]);
      } else {
        toast.error(res?.message || "Something went wrong", {
          id: "make-offer",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      centered
      width={500}
      footer={false}
    >
      <p className="text-center text-[25px] font-bold pb-4"> Make an offer </p>

      <Form form={form} layout="vertical" onFinish={handleMakeOffer}>
        <Form.Item
          name="price"
          rules={[
            {
              required: true,
              message: `This field is required`,
            },
          ]}
          label={<p className="text-[14px] font-normal ">Offer your price </p>}
        >
          <Input
            type="number"
            placeholder={`0.00`}
            style={{
              height: 50,
              border: "1px solid #d9d9d9",
              fontSize: "16px",
              outline: "none",
              boxShadow: "none",
              backgroundColor: "white",
              borderRadius: "40px",
            }}
            prefix={
              <p className="text-[14px] font-normal text-gray-500 ">AED</p>
            }
          />
        </Form.Item>

        <Form.Item>
          <button
            type="submit"
            className="w-full h-[55px] rounded-full text-white font-normal text-[16px] bg-primary  flex items-center justify-center  uppercase"
          >
            Make an offer
          </button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default MakeOfferModal;
