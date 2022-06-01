import { Fragment } from "react";
import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <Fragment>
      <h2 className="shop-title">
        <Link to={title}>{title.toUpperCase()}</Link>
      </h2>
      <div className="category-preview-container">
        <div className="preview">
          {products
            .filter((_, idx) => idx < 3)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default CategoryPreview;
