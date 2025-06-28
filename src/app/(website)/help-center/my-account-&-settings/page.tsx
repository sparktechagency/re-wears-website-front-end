import BackButton from "@/components/shared/BackButton";
import { myFetch } from "@/helpers/myFetch";

const MyAccountAndSettingPage = async () => {
  const res = await myFetch(`/cms/my-account-settings`, {
    cache: "no-store",
  });
  const content = res?.data?.content;

  return (
    <div>
      <section className="flex items-center gap-6">
        <BackButton />
        <h1 className="text-2xl lg:text-3xl font-bold py-4">
          My account & Settings
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

export default MyAccountAndSettingPage;
