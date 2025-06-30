import { myFetch } from "@/helpers/myFetch";

const TermsAndConditionsPage = async () => {
  const res = await myFetch(`/cms/terms-conditions`, {
    cache: "no-store",
  });
  const content = res?.data?.content;

  return (
    <div className="container">
      <section className="py-4">
        <h1 className="text-2xl lg:text-3xl font-bold text-center py-4">
          Terms and Conditions
        </h1>
      </section>

      {/* content section */}
      <article
        dangerouslySetInnerHTML={{ __html: content }}
        className="prose lg:prose-lg"
      ></article>
    </div>
  );
};

export default TermsAndConditionsPage;
