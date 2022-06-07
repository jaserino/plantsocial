import CategoryItem from "../category-item/category-item.component";

import { MenuContainer } from "./menu.styles.jsx";

const categories = [
  {
    id: 1,
    title: "Indoor",
    imageBack: "images/indoor.jpg",
    route: "shop/indoor",
  },
  {
    id: 2,
    title: "Outdoor",
    imageBack: "images/outdoor.jpg",
    route: "shop/outdoor",
  },
  {
    id: 3,
    title: "Water",
    imageBack: "images/water.jpg",
    route: "shop/water",
  },
  {
    id: 4,
    title: "Bamboo",
    imageBack: "images/bamboo.jpg",
    route: "shop/bamboo",
  },
  {
    id: 5,
    title: "Exotic",
    imageBack: "images/exotic.jpg",
    route: "shop/exotic",
  },
  {
    id: 6,
    title: "Flowering",
    imageBack: "images/flower.jpg",
    route: "shop/flowering",
  },
  {
    id: 7,
    title: "Succulents",
    imageBack: "images/Succ.jpg",
    route: "shop/succulents",
  },
];

const Menu = () => {
  return (
    <MenuContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </MenuContainer>
  );
};

export default Menu;
