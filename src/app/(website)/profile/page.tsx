import Closet from "@/components/ui/website/profile/Closet";
import MyOrders from "@/components/ui/website/profile/MyOrders";
import ProfileHeader from "@/components/ui/website/profile/ProfileHeader";
import Reviews from "@/components/ui/website/profile/Reviews";
import { myFetch } from "@/helpers/myFetch";
import { ConfigProvider, Tabs, TabsProps } from "antd";

const ProfilePage = async ({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) => {
  const status = searchParams.status;

  const userId = (await myFetch("/users/profile"))?.data?._id;

  const profileId = searchParams.id ? searchParams.id : userId;

  const profileRes = await myFetch(`/users/${profileId}`, {
    cache: "no-store",
  });
  // console.log("Profile Response:", profileRes);
  // TODO: update this route for fetch orders data by rakib
  const orderRes = await myFetch(`/user-product/order?status=Reserved`, {
    tags: ["Orders"],
  });

  const productsRes = await myFetch(
    `/user-product/${profileId}?status=${status}`
  );

  const reviewsRes = await myFetch("/review");

  const isOwnProfile = userId === profileId;

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <p className="font-bold"> Closet </p>,
      children: <Closet products={productsRes} />,
    },
    ...(isOwnProfile
      ? [
          {
            key: "2",
            label: <p className="font-bold">My Orders</p>,
            children: <MyOrders orders={orderRes} />,
          },
        ]
      : []),
    {
      key: "3",
      label: <p className="font-bold">Reviews</p>,
      children: <Reviews reviews={reviewsRes} />,
    },
  ];

  return (
    <div className="container my-12 grid gap-6">
      {/* profile header */}
      <section>
        <ProfileHeader user={profileRes?.data} userId={userId} />
      </section>

      {/* profile content */}
      <section className="card font-poppins">
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
