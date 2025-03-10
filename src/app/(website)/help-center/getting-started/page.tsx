import Link from "next/link";
import { ChevronRight } from "lucide-react";
import BackButton from "@/components/shared/BackButton";

const GettingStartedPage = () => {
  return (
    <div>
      <section className="flex items-center gap-6">
        <BackButton className="lg:hidden" />
        <h1 className="text-2xl lg:text-3xl font-bold py-4">Getting Started</h1>
      </section>
      <p className="text-[#797979]">Pick a topic</p>

      {/* topics card container */}
      <section className="grid gap-3 py-8">
        <Link href={`/help-center/selling`}>
          <div className="flex justify-between items-center gap-4 p-6 bg-white shadow-smooth rounded-xl">
            <h3 className="text-xl font-bold">Selling made easy</h3>
            <ChevronRight />
          </div>
        </Link>
        <Link href={`/help-center/shipping`}>
          <div className="flex justify-between items-center gap-4 p-6 bg-white shadow-smooth rounded-xl">
            <h3 className="text-xl font-bold">How shipping works</h3>
            <ChevronRight />
          </div>
        </Link>
        <Link href={`/help-center/payments`}>
          <div className="flex justify-between items-center gap-4 p-6 bg-white shadow-smooth rounded-xl">
            <h3 className="text-xl font-bold">How to handle payments</h3>
            <ChevronRight />
          </div>
        </Link>
        <Link href={`/help-center/buying`}>
          <div className="flex justify-between items-center gap-4 p-6 bg-white shadow-smooth rounded-xl">
            <h3 className="text-xl font-bold">Buying step by step</h3>
            <ChevronRight />
          </div>
        </Link>
        <Link href={`/help-center/safety-&-reporting`}>
          <div className="flex justify-between items-center gap-4 p-6 bg-white shadow-smooth rounded-xl">
            <h3 className="text-xl font-bold">Safety & Reporting</h3>
            <ChevronRight />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default GettingStartedPage;
