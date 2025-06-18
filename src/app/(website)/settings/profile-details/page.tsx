import ProfileDetails from "@/components/ui/website/settings/profile-details/ProfileDetails";
import { myFetch } from "@/helpers/myFetch";

const ProfileDetailsPage = async () => {
  const res = await myFetch("/users/profile", { tags: ["profile"] });

  return (
    <div>
      <ProfileDetails profile={res?.data} />
    </div>
  );
};

export default ProfileDetailsPage;
