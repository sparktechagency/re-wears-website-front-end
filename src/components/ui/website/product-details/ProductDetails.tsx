import Link from "next/link";

const ProductDetails = () => {
  return (
    <div className="container">
      {/* category breadcumb */}
      <section>
        <p>
          <Link href={"/"}>Home</Link>
          <Link href={""}>Women</Link> Clothing Dresses Little pink dresses
          Forever 21 Little pink dresses
        </p>
      </section>
    </div>
  );
};

export default ProductDetails;
