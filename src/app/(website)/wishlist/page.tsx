import WishList from "@/components/ui/website/wishlist/WishList";
import { myFetch } from "@/helpers/myFetch";

const WishlistPage = async () => {
  const res = await myFetch(`/wishlist`, {
    method: "GET",
    cache: "no-store",
  });

  return (
    <>
      <WishList wishlistData={res?.data} />
    </>
  );
};

export default WishlistPage;
