type TUser = {
  name: string;
  username: string;
  image: string;
};

export type TProduct = {
  id: number;
  title: string;
  images: string[];
  size: string;
  price: number;
  vat: number;
  user: TUser;
};
