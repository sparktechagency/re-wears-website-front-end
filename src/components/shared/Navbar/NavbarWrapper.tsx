import { myFetch } from "@/helpers/myFetch";
import Navbar from "./Navbar";

const NavbarWrapper = async () => {
  const res = await myFetch("/users/profile");
  const categoriesRes = await myFetch("/category", { cache: "no-store" });

  return (
    <>
      <Navbar profile={res?.data} categoriesData={categoriesRes?.data} />
    </>
  );
};

export default NavbarWrapper;
