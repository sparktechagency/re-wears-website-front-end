import Order from "@/components/ui/website/order/Order";
import { myFetch } from "@/helpers/myFetch";

const OrderPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const res = await myFetch(`/product/${id}`);

  return (
    <div>
      <Order product={res?.data?.result} />
    </div>
  );
};

export default OrderPage;
