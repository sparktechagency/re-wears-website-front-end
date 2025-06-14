import { myFetch } from "@/helpers/myFetch";
import Navbar from "./Navbar";

const NavbarWrapper = async () => {
  const res = await myFetch("/users/profile");
  const categoriesRes = await myFetch("/category", { cache: "no-store" });
  console.log(categoriesRes);

  return (
    <>
      <Navbar profile={res?.data} categoriesRes={categoriesRes?.data} />
    </>
  );
};

export default NavbarWrapper;
