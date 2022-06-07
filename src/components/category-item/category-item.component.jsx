import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  CategoryItemContainer,
} from "./category-item.styles.jsx";

const CategoryItem = ({ category }) => {
  const { imageBack, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <CategoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageBack={imageBack} />
      <Body>
        <h2>{title}</h2>
        <p>shop here</p>
      </Body>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
