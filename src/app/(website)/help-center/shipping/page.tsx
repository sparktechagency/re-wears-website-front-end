import BackButton from "@/components/shared/BackButton";
import { myFetch } from "@/helpers/myFetch";

const ShippingPage = async () => {
  const res = await myFetch(`/cms/shipping`, {
    cache: "no-store",
  });
  const content = res?.data?.content;
  console.log(content);

  return (
    <div>
      <section className="flex items-center gap-6">
        <BackButton />
        <h1 className="text-2xl lg:text-3xl font-bold py-4">
          How shipping works
        </h1>
      </section>

      {/* content section */}
      <section
        dangerouslySetInnerHTML={{ __html: content }}
        className="prose lg:prose-lg"
      ></section>
    </div>
  );
};

export default ShippingPage;
