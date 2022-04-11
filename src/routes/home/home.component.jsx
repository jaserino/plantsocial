import Menu from "../../components/menu/menu.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Indoor",
      imageBack: "images/indoor.jpg",
    },
    {
      id: 2,
      title: "Outdoor",
      imageBack: "images/outdoor.jpg",
    },
    {
      id: 3,
      title: "Water",
      imageBack: "images/water.jpg",
    },
    {
      id: 4,
      title: "Bamboo",
      imageBack: "images/bamboo.jpg",
    },
    {
      id: 5,
      title: "Exotic",
      imageBack: "images/exotic.jpg",
    },
    {
      id: 6,
      title: "Flowering",
      imageBack: "images/flower.jpg",
    },
    {
      id: 7,
      title: "Succulents",
      imageBack: "images/Succ.jpg",
    },
  ];

  return <Menu categories={categories} />;
};

export default Home;
