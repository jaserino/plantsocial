import { CartItemContainer, ItemDetails } from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imagePic, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imagePic} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
