import BackButton from "@/components/shared/BackButton";

const SaferyAndReportingPage = () => {
  return (
    <div>
      <section className="flex items-center gap-6">
        <BackButton />
        <h1 className="text-2xl lg:text-3xl font-bold py-4">
          Safety & reporting
        </h1>
      </section>

      {/* content section */}
      <section className="grid gap-6 py-4">
        <div className="grid gap-4">
          <p>
            If you notice unfamiliar activities in your re-wears account, it may
            have been compromised. Signs of a compromised account include:
          </p>
          <ul className="list-disc list-inside marker:text-primary marker:text-xl grid gap-2 ml-6 text-sm">
            <li>Unexplained alterations to your personal information.</li>
            <li>
              Difficulty accessing your account (e.g., username, email, or
              password no longer valid).
            </li>
            <li>
              Receiving unsolicited password reset emails or phone verification
              messages.
            </li>
            <li>Unanticipated modifications to your listed items.</li>
            <li>
              Conversations with members you don&apos;t recall interacting with.
            </li>
          </ul>
        </div>
        <p>
          Regardless of the issue, swift action to safeguard your account and
          personal details is essential. Please reach out to us immediately at{" "}
          <span className="text-primary font-bold"> support@re-wears.com </span>
          for assistance.
        </p>
      </section>
    </div>
  );
};

export default SaferyAndReportingPage;
