import "./product-card.styles.scss";

import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imagePic } = product;
  return (
    <div className="product-card-container">
      <img src={imagePic} alt={`${name}`} />
      <div className="footer">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <Button buttonClasses={"inverted"}>Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
