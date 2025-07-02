import { myFetch } from "@/helpers/myFetch";
import Navbar from "./Navbar";

const NavbarWrapper = async () => {

  const categoriesRes = await myFetch("/nav/category", { cache: "no-store" });

  const res = await myFetch("/users/profile", {
    tags: ["Profile"],
    cache: "no-store",
  });

   const notificationRes = await myFetch("/notification/all", {
     tags: ["notifications"],
     cache: "no-store",
   });


  return (
    <>
      <Navbar profile={res?.data} categoriesData={categoriesRes?.data} notificationsData={notificationRes?.data} />
    </>
  );
};

export default NavbarWrapper;
