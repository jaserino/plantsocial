import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-title">
          <span>Product</span>
        </div>
        <div className="header-title">
          <span>Description</span>
        </div>
        <div className="header-title">
          <span>Quantity</span>
        </div>
        <div className="header-title">
          <span>Price</span>
        </div>
        <div className="header-title">
          <span>Remove</span>
        </div>
      </div>
      <h1>I am the Checkout page</h1>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${cartTotal} 0</span>
    </div>
  );
};

export default Checkout;
