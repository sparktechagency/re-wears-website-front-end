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
  const { productStatus, orderStatus } = searchParams;

  const loggedInUser = (await myFetch("/users/profile"))?.data;

  const userId = searchParams?.id ? searchParams?.id : loggedInUser?._id;

  const userRes = await myFetch(`/users/${userId}`, {
    cache: "no-store",
    tags: ["Profile"],
  });

  const orderRes = await myFetch(
    `/user-product/my-orders?status=${orderStatus}`,
    {
      tags: ["Orders"],
      cache: "no-store",
    }
  );

  const productsRes = await myFetch(
    `/user-product/${userId}?status=${productStatus || "Active"}`,
    {
      tags: ["User-Products"],
      cache: "no-store",
    }
  );

  const reviewsRes = await myFetch(`/review/${userId}`, {
    tags: ["Reviews"],
    cache: "no-store",
  });

  const followRes = await myFetch(`/user/${userId}`, {
    tags: ["Follow"],
    cache: "no-store",
  });

  const isOwnProfile = userId === loggedInUser?._id;

  const items: TabsProps["items"] = [
    {
      key: "Closet",
      label: <p className="font-bold"> Closet </p>,
      children: (
        <Closet
          products={productsRes?.data}
          isMyProfile={userId === loggedInUser?._id}
        />
      ),
    },
    ...(isOwnProfile
      ? [
          {
            key: "Orders",
            label: <p className="font-bold">My Orders</p>,
            children: <MyOrders orders={orderRes} />,
          },
        ]
      : []),
    {
      key: "Reviews",
      label: <p className="font-bold">Reviews</p>,
      children: <Reviews reviewsData={reviewsRes?.data} />,
    },
  ];

  return (
    <div className="container my-12 grid gap-6">
      {/* profile header */}
      <section>
        <ProfileHeader
          user={userRes?.data}
          myId={loggedInUser?._id}
          followRes={followRes}
        />
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
            defaultActiveKey="Closet"
            items={items}
            style={{ fontSize: "18px" }}
          />
        </ConfigProvider>
      </section>
    </div>
  );
};

export default ProfilePage;
