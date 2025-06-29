import { myFetch } from "@/helpers/myFetch";

const DeleteAccountPolicyPage = async () => {
  const res = await myFetch(`/cms/delete-account-policy`, {
    cache: "no-store",
  });
  const content = res?.data?.content;

  return (
    <div>
      <section className="flex items-center gap-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-center py-4">
          Delete Account Policy
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

export default DeleteAccountPolicyPage;
