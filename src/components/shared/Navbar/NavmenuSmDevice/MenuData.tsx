import { Shirt, Watch, Leaf, Scissors, Brush, Grip } from "lucide-react"; // Importing icons
import { TbShoe } from "react-icons/tb";

const navData = [
  {
    name: "WOMEN",
    categories: [
      {
        title: "All",
        icon: <Grip size={18} />,
        subcategories: [
          "Jeans",
          "Tops & T-Shirts",
          "Sweaters & Sweatshirts",
          "Shorts",
          "Sleepwears",
          "Activewears",
          "Sneakers",
          "Boots",
          "Sandals",
          "Heels",
        ],
      },
      {
        title: "Clothing",
        icon: <Shirt size={18} />, // Shirt icon
        subcategories: [
          "Jeans",
          "Tops & T-Shirts",
          "Sweaters & Sweatshirts",
          "Shorts",
          "Sleepwears",
          "Activewears",
        ],
      },
      {
        title: "Shoes",
        icon: <TbShoe size={18} />,
        subcategories: ["Sneakers", "Boots", "Sandals", "Heels"],
      },
      {
        title: "Accessories",
        icon: <Watch size={18} />,
        subcategories: ["Handbags", "Jewelry", "Sunglasses", "Hats"],
      },
    ],
  },
  {
    name: "MEN",
    categories: [
      {
        title: "All",
        icon: <Grip size={18} />,
        subcategories: [
          "Jeans",
          "T-Shirts",
          "Hoodies",
          "Shorts",
          "Jackets",
          "Activewears",
          "Sneakers",
          "Boots",
          "Loafers",
          "Watches",
          "Wallets",
        ],
      },
      {
        title: "Clothing",
        icon: <Shirt size={18} />,
        subcategories: [
          "Jeans",
          "T-Shirts",
          "Hoodies",
          "Shorts",
          "Jackets",
          "Activewears",
        ],
      },
      {
        title: "Shoes",
        icon: <TbShoe size={18} />,
        subcategories: ["Sneakers", "Boots", "Loafers", "Slippers"],
      },
      {
        title: "Accessories",
        icon: <Watch size={18} />,
        subcategories: ["Watches", "Wallets", "Belts", "Sunglasses"],
      },
    ],
  },
  {
    name: "KIDS",
    categories: [
      {
        title: "All",
        icon: <Grip size={18} />,
        subcategories: [
          "Dresses",
          "Shirts",
          "Pants",
          "Sleepwear",
          "Sneakers",
          "Boots",
          "Sandals",
          "Stuffed Animals",
          "Board Games",
          "Outdoor Play",
        ],
      },
      {
        title: "Clothing",
        icon: <Shirt size={18} />,
        subcategories: ["Dresses", "Shirts", "Pants", "Sleepwear"],
      },
      {
        title: "Shoes",
        icon: <TbShoe size={18} />,
        subcategories: ["Sneakers", "Boots", "Sandals", "Slippers"],
      },
      {
        title: "Toys",
        icon: <Watch size={18} />,
        subcategories: [
          "Educational Toys",
          "Stuffed Animals",
          "Board Games",
          "Outdoor Play",
        ],
      },
    ],
  },
  {
    name: "BEAUTY/GROOMING",
    categories: [
      {
        title: "All",
        icon: <Grip size={18} />,
        subcategories: [
          "Moisturizers",
          "Cleansers",
          "Serums",
          "Sunscreen",
          "Conditioners",
          "Hair Oils",
          "Styling Products",
          "Lipstick",
          "Mascara",
          "Eyeshadow",
        ],
      },
      {
        title: "Skincare",
        icon: <Leaf size={18} />,
        subcategories: ["Moisturizers", "Cleansers", "Serums", "Sunscreen"],
      },
      {
        title: "Haircare",
        icon: <Scissors size={18} />,
        subcategories: [
          "Shampoos",
          "Conditioners",
          "Hair Oils",
          "Styling Products",
        ],
      },
      {
        title: "Makeup",
        icon: <Brush size={18} />,
        subcategories: ["Foundation", "Lipstick", "Mascara", "Eyeshadow"],
      },
    ],
  },
];

export default navData;
