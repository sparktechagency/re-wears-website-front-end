const MyAccountAndSettingPage = () => {
  return (
    <div>
      <h1 className="text-2xl lg:text-3xl font-bold py-4">
        My account & Settings
      </h1>

      {/* content section */}
      <section className="grid gap-4 py-4">
        <div className="flex gap-2">
          <span className="font-bold">1.</span>
          <p>
            <span className="font-bold">Profile Management: </span>
            Easily update your email, manage profile details, and change your
            password by accessing Account Settings within your profile.
          </p>
        </div>
        <div className="flex gap-2">
          <span className="font-bold">2.</span>
          <p>
            <span className="font-bold">Username Changes: </span>
            We permit username changes only in specific cases, such as
            displaying personal information or under special circumstances. Each
            request is reviewed individually to prevent members from losing
            contact with each other or losing track of orders due to username
            changes.
          </p>
        </div>
        <div className="flex gap-2">
          <span className="font-bold">3.</span>
          <p>
            <span className="font-bold">Need Help Logging In? </span>
            If you&apos;re experiencing login issues or any other unlisted
            problem, reach out to us at{" "}
            <span className="text-primary font-bold">
              support@re-wears.com{" "}
            </span>{" "}
            for assistance. We&apos;re here to help!
          </p>
        </div>
      </section>
    </div>
  );
};

export default MyAccountAndSettingPage;
