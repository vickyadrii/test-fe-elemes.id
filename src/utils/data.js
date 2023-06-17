// Category Icons
import category1 from "../../public/icons/category1.svg";
import category2 from "../../public/icons/category2.svg";
import category3 from "../../public/icons/category3.svg";
import category4 from "../../public/icons/category4.svg";
import category5 from "../../public/icons/category5.svg";

// Trending Images
import trending1 from "../../public/images/trending1.png";
import trending2 from "../../public/images/trending2.png";
import trending3 from "../../public/images/trending3.png";
import trending4 from "../../public/images/trending4.png";
import trending5 from "../../public/images/trending5.png";
import trending6 from "../../public/images/trending6.png";
import trending7 from "../../public/images/trending7.png";
import trending8 from "../../public/images/trending8.png";

export const MenuList = [
  {
    text: "Home",
    navigate: "/",
    isHot: false,
  },
  {
    text: "About",
    navigate: "/",
    isHot: false,
  },
  {
    text: "Promotions",
    navigate: "/",
    isHot: true,
  },
  {
    text: "Blogs",
    navigate: "/",
    isHot: false,
  },
  {
    text: "Contact Us",
    navigate: "/",
    isHot: false,
  },
];

export const category = [
  {
    id: 1,
    icon_url: category1,
    name: "Cupcake",
    desc: "22 items",
    color: "#F0FEEB",
  },
  {
    id: 2,
    icon_url: category2,
    name: "Pizza",
    desc: "25 items",
    color: "#E4F2F4",
  },
  {
    id: 3,
    icon_url: category3,
    name: "Kebab",
    desc: "12 items",
    color: "#EAEEFA",
  },
  {
    id: 4,
    icon_url: category4,
    name: "Salmon",
    desc: "22 items",
    color: "#F9EEF3",
  },
  {
    id: 5,
    icon_url: category5,
    name: "Doughnut",
    desc: "11 items",
    color: "#F3F7D9",
  },
];

export const trending = [
  {
    id: 1,
    icon_url: trending1,
    name: "Pizza Paperoni",
    category: "Pizza",
    color: "#E6F3F5",
  },
  {
    id: 2,
    icon_url: trending2,
    name: "Pizza Meat",
    category: "Pizza",
    color: "#E6F3F5",
  },
  {
    id: 3,
    icon_url: trending3,
    name: "Doner Kebab",
    category: "Kebab",
    color: "#EAEEFA",
  },
  {
    id: 4,
    icon_url: trending4,
    name: "Salmon Roll",
    category: "salmon",
    color: "#F9EEF3",
  },
  {
    id: 5,
    icon_url: trending5,
    name: "Cupcake Choco",
    category: "Cupcake",
    color: "#F0FEEB",
  },
  {
    id: 6,
    icon_url: trending6,
    name: "Doughnut Milk",
    category: "Doughnut",
    color: "#F3F7D9",
  },
  {
    id: 7,
    icon_url: trending7,
    name: "Doughnut Unicorn",
    category: "Doughnut",
    color: "#F3F7D9",
  },
  {
    id: 8,
    icon_url: trending8,
    name: "Kathi Kebab",
    category: "Kebab",
    color: "#EAEEFA",
  },
];
