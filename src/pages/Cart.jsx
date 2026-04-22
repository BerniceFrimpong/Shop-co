import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Cart.css";
import { casualProducts } from "../data";

const cartItems = casualProducts.slice(0, 3).map((item) => ({
  ...item,
  size: "Large",
  color: "White",
  qty: 1,
}));

const Cart = () => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const discount = subtotal * 0.2;
  const delivery = 15;
  const total = subtotal - discount + delivery;

  return (
    <div className="cart-page">
      {/* BREADCRUMB */}
      <div className="cart-breadcrumb">
        <Link to="/">Home</Link> <span>&gt;</span> Cart
      </div>

      <h1 className="cart-title">YOUR CART</h1>

      <div className="cart-layout">
        {/* LEFT */}
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="cart-info">
                <h3>{item.title}</h3>
                <p>Size: {item.size}</p>
                <p>Color: {item.color}</p>
                <h2>${item.price}</h2>
              </div>

              <div className="cart-actions">
                <FiTrash2 className="delete-icon" />

                <div className="qty">
                  <FiMinus />
                  <span>{item.qty}</span>
                  <FiPlus />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>

          <div className="summary-row discount">
            <span>Discount (-20%)</span>
            <span>-${discount.toFixed(0)}</span>
          </div>

          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>${delivery}</span>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <span>${total.toFixed(0)}</span>
          </div>

          <div className="promo">
            <input placeholder="Add promo code" />
            <button>Apply</button>
          </div>

          <button className="checkout-btn">Go to Checkout →</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
