import BackButton from "@/components/shared/BackButton";

const BuyingPage = () => {
  return (
    <div>
      <section className="flex items-center gap-6">
        <BackButton />
        <h1 className="text-2xl lg:text-3xl font-bold py-4">
          Buying made easy
        </h1>
      </section>

      {/* content section */}
      <section className="grid gap-4 py-4">
        <div className="flex gap-2">
          <span className="font-bold">1.</span>
          <p>
            <span className="font-bold">Explore Items of Interest: </span>
            Dive into our catalog to find the perfect item for you.
          </p>
        </div>
        <div className="flex gap-2">
          <span className="font-bold">2.</span>
          <p>
            <span className="font-bold">Connect with the Seller: </span>
            Use the &quot;Message Seller&quot; feature to clarify any inquiries
            about the item or &quot;Make an Offer&quot; to propose a new price.
            Please be aware that by selecting &quot;Buy Now,&quot; your item
            will be reserved for you for 24 hours. We encourage you to utilize
            this time to communicate with the seller to arrange for payment and
            delivery. Once this period elapses and the item is not marked as
            sold by the seller, it will become available for other buyers to
            purchase. Should have a change of heart about a purchase, you can
            easily &apos;Release&apos; an item within 24 hours, making it
            immediately available for other buyers.
          </p>
        </div>
        <div className="ml-4">
          <p>
            We strongly encourage to utilize our secure messaging system for all
            communications, avoiding moving conversations outside of re-wears.
            Check the seller&apos;s reviews to gauge the experiences of other
            members with their purchases.
          </p>
        </div>
        <div className="flex gap-2">
          <span className="font-bold">3.</span>
          <p>
            <span className="font-bold">Coordinate Payment and Delivery: </span>
            Payment collection and shipping arrangements are determined by
            mutual agreement between the buyer and seller. Please note,
            currently, re-wears serves as a platform for listing and purchasing
            items, with the responsibility for shipping and payment resting with
            the respective buyer and seller. However, we are actively developing
            features to facilitate these processes in the near future. We
            appreciate your patience as we work to enhance your re-wears
            experience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BuyingPage;
