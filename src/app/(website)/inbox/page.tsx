import Inbox from "@/components/ui/website/inbox/Inbox";
import { myFetch } from "@/helpers/myFetch";

const InboxPage = async () => {
  const roomRes = await myFetch("/room", {
    cache: "no-store",
  });

  return (
    <div>
      <Inbox rooms={roomRes?.data} />
    </div>
  );
};

export default InboxPage;
