import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, imagePic, price, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imagePic} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
