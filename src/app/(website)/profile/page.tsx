import Closet from "@/components/ui/website/profile/Closet";
import ProfileHeader from "@/components/ui/website/profile/ProfileHeader";
import Reviews from "@/components/ui/website/profile/Reviews";
import { ConfigProvider, Tabs, TabsProps } from "antd";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: <p className="font-bold"> Closet </p>,
    children: <Closet />,
  },
  {
    key: "2",
    label: <p className="font-bold">Reviews</p>,
    children: <Reviews />,
  },
];

const ProfilePage = () => {
  return (
    <div className="container my-12 grid gap-6">
      {/* profile header */}
      <section>
        <ProfileHeader />
      </section>

      {/* profile content */}
      <section className="card">
        <ConfigProvider
          theme={{
            components: {
              Tabs: {
                // titleFontSize: 18,
              },
            },
          }}
        >
          <Tabs
            defaultActiveKey="1"
            items={items}
            style={{ fontSize: "18px" }}
          />
        </ConfigProvider>
      </section>
    </div>
  );
};

export default ProfilePage;
