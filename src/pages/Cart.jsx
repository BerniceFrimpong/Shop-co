import { useState } from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Cart.css";
import { casualProducts } from "../data";

const Cart = () => {
  const [cartItems, setCartItems] = useState(
    casualProducts.slice(0, 3).map((item) => ({
      ...item,
      size: "Large",
      color: "White",
      qty: 1,
    }))
  );

  // INCREASE QTY
  const increaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // DECREASE QTY
  const decreaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // REMOVE ITEM
  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  // TOTALS
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const discount = subtotal * 0.2;
  const delivery = cartItems.length > 0 ? 15 : 0;
  const total = subtotal - discount + delivery;

  return (
    <div className="cart-page">
      {/* BREADCRUMB */}
      <div className="cart-breadcrumb">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          Home
        </Link>

        <span> {" > "} </span>

        <Link to="/casual" style={{ color: "inherit", textDecoration: "none" }}>
          Casual
        </Link>

        <span> {" > "} </span>

        {/* FIX: removed broken productdetail link to avoid blank page issue */}
        <span style={{ color: "inherit", textDecoration: "none" }}>
          Product Detail
        </span>

        <span> {" > "} </span>

        <span style={{ color: "inherit", textDecoration: "none" }}>
          Cart
        </span>
      </div>

      <h1 className="cart-title">YOUR CART</h1>

      <div className="cart-layout">
        {/* LEFT */}
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <h3>Your cart is empty</h3>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />

                <div className="cart-info">
                  <h3>{item.title}</h3>
                  <p>Size: {item.size}</p>
                  <p>Color: {item.color}</p>
                  <h2>${item.price}</h2>
                </div>

                <div className="cart-actions">
                  <FiTrash2
                    className="delete-icon"
                    onClick={() => removeItem(item.id)}
                    style={{ cursor: "pointer" }}
                  />

                  <div className="qty">
                    <FiMinus
                      onClick={() => decreaseQty(item.id)}
                      style={{ cursor: "pointer" }}
                    />
                    <span>{item.qty}</span>
                    <FiPlus
                      onClick={() => increaseQty(item.id)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* RIGHT */}
        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(0)}</span>
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