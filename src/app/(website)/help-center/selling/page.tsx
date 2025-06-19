import BackButton from "@/components/shared/BackButton";

const SellingPage = async () => {
  return (
    <div>
      <section className="flex items-center gap-6">
        <BackButton />
        <h1 className="text-2xl lg:text-3xl font-bold py-4">
          Selling made easy
        </h1>
      </section>

      {/* content section */}
      <section className="grid gap-6 py-4">
        <h3 className="text-xl lg:text-2xl font-bold">
          For a safe and successful selling journey on re-wears, just follow
          these simple steps:
        </h3>
        <div className="grid gap-6">
          <div>
            <h4 className="text-lg font-bold">Establish Trust: </h4>
            <p>
              Complete your profile with a genuine profile picture, an
              introduction in the &quot;About You&quot; section, and specify
              your Emirate.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold">List Your Items: </h4>
            <p>
              Showcase your items with clear photos and detailed descriptions.
              Remember, listing is free, and adding more items can boost your
              sales.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold">Negotiate:</h4>
            <p>
              Use the &quot;Make an Offer&quot; button when a buyer contacts you
              to suggest a price adjustment for a single item.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold">
              Coordinate Payment and Delivery:{" "}
            </h4>
            <p>
              Please note that when a buyer selects &quot;Buy Now,&quot; your
              item will be reserved exclusively for them for 24 hours. This time
              allows the buyer to communicate with you to arrange payment and
              delivery. Once an agreement is reached, kindly mark the item as
              sold so it&apos;s removed from your catalog. Otherwise, after the
              time expires, it will become available for other buyers to
              purchase. Please remember that payment collection and shipping
              arrangements are decided upon through mutual agreement between the
              buyer and seller.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold">Delivery Time:</h4>
            <p>
              Pack your sold item with care and agree on the delivery method or
              pickup location with the buyer. Please bear with us as we work on
              providing delivery services to you soon.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold">Additional Information:</h4>
            <p>
              If you encounter any inappropriate behavior, harassment, or spam,
              please report it to us at{" "}
              <span className="font-semibold text-primary underline">
                support@re-wears.com
              </span>
              , and we&apos;ll take immediate action.
            </p>
          </div>
        </div>
      </section>
      <section className="grid gap-6 py-4">
        <h3 className="text-xl lg:text-2xl font-bold">
          What You Can Sell on re-wears
        </h3>
        <p className="text-lg">
          Here&apos;s a quick overview of what our Catalog Rules permit for
          sale:
        </p>
        <div className="grid gap-6">
          <div className="grid gap-4">
            <h4 className="text-lg font-bold">Allowed Categories:</h4>
            <ul className="list-disc list-inside marker:text-primary marker:text-xl grid gap-2 ml-6">
              <li>Clothing & Accessories</li>
              <li>Kids Clothing & Items</li>
              <li>Fragrance</li>
              <li>Haircare</li>
              <li>Makeup (non used)</li>
            </ul>
          </div>
          <div className="grid gap-4">
            <h4 className="text-lg font-bold">Prohibited Items:</h4>
            <p className="text-lg">
              If your item doesn&apos;t fall into one of our catalog categories,
              it may not be permitted on re-wears. Here&apos;s what you cannot
              sell:
            </p>
            <ul className="list-disc list-inside marker:text-primary marker:text-xl grid gap-2 ml-6">
              <li>
                Items that are unlawful, unethical, or fail to meet legal
                standards
              </li>
              <li>Potentially unsafe or unhygienic items</li>
              <li>
                Items that don&apos;t meet hygiene standards or pose health
                risks (e.g., used cosmetics, underwear bottoms, etc.)
              </li>
              <li>
                Sanitary products, including tampons, pads, and menstrual cups
              </li>
              <li>Detergents, cleaning chemicals, or similar products</li>
              <li>
                Prescription and non-prescription medicinal products, and any
                other health-related products
              </li>
              <li>Food, drinks, and other consumables</li>
              <li>Cosmetic items for animals</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="grid gap-6 py-4">
        <h3 className="text-xl lg:text-2xl font-bold">
          Spotted a member violating the rules?
        </h3>
        <p className="">
          You can report them at{" "}
          <span className="text-primary font-bold underline">
            support@re-wears.com
          </span>{" "}
          if they&apos;re selling prohibited items or their listings violate our
          regulations. Your report helps enhance others&apos; experiences on
          re-wears.
        </p>
      </section>
    </div>
  );
};

export default SellingPage;
