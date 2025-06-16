import SellNow from "@/components/ui/website/sell-now/SellNow";
import { myFetch } from "@/helpers/myFetch";

const SellNowPage = async () => {
  const categoryRes = await myFetch("/category", {
    tags: ["categories"],
    cache: "no-store",
  });

  const brandRes = await myFetch("/type/list/brand", {
    tags: ["brands"],
    cache: "no-store",
  });

  const sizeRes = await myFetch("/type/list/size", {
    tags: ["sizes"],
    cache: "no-store",
  });

  const colorsRes = await myFetch("/color", {
    tags: ["colors"],
    cache: "no-store",
  });

  const materialRes = await myFetch("/type/list/material", {
    tags: ["materials"],
    cache: "no-store",
  });

  return (
    <div>
      <SellNow
        categories={categoryRes?.data}
        brands={brandRes?.data}
        sizes={sizeRes?.data}
        colors={colorsRes?.data}
        materials={materialRes?.data}
      />
    </div>
  );
};

export default SellNowPage;
