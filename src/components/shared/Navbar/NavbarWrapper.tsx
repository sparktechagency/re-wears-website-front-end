import { myFetch } from "@/helpers/myFetch";
import Navbar from "./Navbar";

const NavbarWrapper = async () => {

  const categoriesRes = await myFetch("/nav/category", { cache: "no-store" });

  const res = await myFetch("/users/profile", { tags: ["profile"] });


  return (
    <>
      <Navbar profile={res?.data} categoriesData={categoriesRes?.data} />
    </>
  );
};

export default NavbarWrapper;
