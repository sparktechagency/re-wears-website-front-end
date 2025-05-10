import BackButton from "@/components/shared/BackButton";

const ShippingPage = () => {
  return (
    <div>
      <section className="flex items-center gap-6">
        <BackButton />
        <h1 className="text-2xl lg:text-3xl font-bold py-4">
          How shipping works
        </h1>
      </section>

      {/* content section */}
      <section className="grid gap-6 py-4">
        <p>
          Shipping arrangements are made at the discretion and agreement between
          the buyer and seller. Once you&apos;ve completed your sale, please
          communicate with the buyer to discuss shipping options.{" "}
        </p>
        <p>
          Currently, re-wears does not provide delivery services. However, we
          are actively working on implementing this feature in the near future.
          Please bear with us as we strive to enhance your experience on our
          platform.
        </p>
      </section>
    </div>
  );
};

export default ShippingPage;
