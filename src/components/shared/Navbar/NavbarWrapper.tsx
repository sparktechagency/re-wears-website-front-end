import { myFetch } from "@/helpers/myFetch";
import Navbar from "./Navbar";

const NavbarWrapper = async () => {
  const res = await myFetch("/users/profile", { tags: ["profile"] });

  return (
    <>
      <Navbar profile={res?.data} />
    </>
  );
};

export default NavbarWrapper;
