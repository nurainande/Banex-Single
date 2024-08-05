import React, { useState } from 'react';
import { useAppContext } from '../Context/ContextProvider';
import { useNavigate } from 'react-router-dom';

// const cart = 0
const Cartside = ({setShowCart}) => {
  const navigate = useNavigate()
  const { state, dispatch,user } = useAppContext();

  

const removeFromCart = (id) => {
  dispatch({
    type: "REMOVE_FROM_CART",
    payload: { id },
  });
};

const updateQuantity = (id, quantity) => {
  if (quantity < 1) return; // Prevent quantity from being less than 1
  dispatch({
    type: "UPDATE_CART_QUANTITY",
    payload: { id, quantity },
  });
};

const calculateSubtotal = () => {
  return state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

console.log(user)

  
  return (
    <div
      style={{
        width: "400px",
        height: "100vh",
        background: "white",
        position: "fixed",
        top: "0",
        right: "0",
        padding: "2rem",
        overflowY: "scroll",
      }}
    >
      <div
        className="cart-top"
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid black",
          paddingBottom: "1rem",
        }}
      >
        <p>Shopping Cart</p>
        <div className="cart-close" onClick={() => setShowCart(false)}>
          <i className="fas fa-times"></i>
        </div>
      </div>
      <div className="cart-body" style={{ marginTop: "1rem", height: "80vh" }}>
        {state.cart.length === 0 ? (
          <p style={{ textAlign: "center", padding: "4rem" }}>Cart is Empty</p>
        ) : (
          <article
            className="cart-container"
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <ul className="cart-items">
              {state.cart.map((cartItem, index) => (
                <li key={cartItem.id} className="cart-item">
                  <h3>{cartItem.name}</h3>
                  <p className="price">₦{cartItem.price}</p>
                  <div
                    className="action-buttons"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>
                      <i className="fas fa-chevron-left" onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}></i>
                      <span>{cartItem.quantity}*</span>
                      <i className="fas fa-chevron-right" onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}></i>
                    </span>
                    <span>
                      <i
                        className="fas fa-trash-alt"
                        onClick={() => removeFromCart(cartItem.id)}
                      ></i>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div
              className="subtotal"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p>Subtotal</p>
              <p>₦{calculateSubtotal()}</p>
            </div>
          </article>
        )}
        {state.cart.length > 0 && (
          <button
            style={{ width: "100%" }}
            onClick={() => {
              navigate("checkout");
              setShowCart(false);
            }}
          >
            Checkout
          </button>
        )}
      </div>
    </div>
  );
}

export default Cartside