import { Fragment } from "react";
import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewContainer,
  Preview,
  ShopTitle,
} from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
  return (
    <Fragment>
      <ShopTitle>
        <Link to={title}>{title.toUpperCase()}</Link>
      </ShopTitle>
      <CategoryPreviewContainer>
        <Preview>
          {products
            .filter((_, idx) => idx < 3)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Preview>
      </CategoryPreviewContainer>
    </Fragment>
  );
};

export default CategoryPreview;
