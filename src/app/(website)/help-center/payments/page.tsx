import BackButton from "@/components/shared/BackButton";

const ShippingPage = () => {
  return (
    <div>
      <section className="flex items-center gap-6">
        <BackButton />
        <h1 className="text-2xl lg:text-3xl font-bold py-4">
          How to handle payments
        </h1>
      </section>

      {/* content section */}
      <section className="grid gap-6 py-4">
        <p>
          Payment collection is arranged at the discretion of the buyer and
          seller. Once your item is sold, please communicate with the buyer to
          discuss payment options. As the seller, it is your responsibility to
          arrange for payment collection according to your preferred method.
        </p>
        <p>
          Presently, re-wears function solely as a platform for listing and
          purchasing items, while the responsibility for payment collection lies
          with the seller. However, we are actively working on implementing this
          feature in the near future. Please bear with us as we strive to
          enhance your experience on our platform.
        </p>
      </section>
    </div>
  );
};

export default ShippingPage;
