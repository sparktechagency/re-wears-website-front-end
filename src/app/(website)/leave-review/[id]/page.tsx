import LeaveReview from "@/components/ui/website/leave-review/LeaveReview";
import { myFetch } from "@/helpers/myFetch";

const LeaveReviewPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const userRes = await myFetch(`/users/${id}`, { cache: "no-store" });

  return (
    <div>
      <LeaveReview userData={userRes?.data} />
    </div>
  );
};

export default LeaveReviewPage;
