import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutTitle,
  Total,
  CheckoutName,
} from "./checkout.styles.jsx";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutName>Plant Social</CheckoutName>
      <CheckoutHeader>
        <CheckoutTitle>
          <span>Product</span>
        </CheckoutTitle>
        <CheckoutTitle>
          <span>Description</span>
        </CheckoutTitle>
        <CheckoutTitle>
          <span>Quantity</span>
        </CheckoutTitle>
        <CheckoutTitle>
          <span>Price</span>
        </CheckoutTitle>
        <CheckoutTitle>
          <span>Remove</span>
        </CheckoutTitle>
      </CheckoutHeader>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}.00</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
