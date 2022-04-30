import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

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

      {cartItems.map((cartItem) => {
        const { imagePic, id, name, quantity } = cartItem;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <span>{quantity}</span>
            <br />
            <span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
            <br />
            <span onClick={() => addItemToCart(cartItem)}>increment</span>
          </div>
        );
      })}
      <span className="Total">Total: 0</span>
    </div>
  );
};

export default Checkout;
