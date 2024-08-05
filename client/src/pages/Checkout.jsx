import React, { useEffect, useState } from 'react'
import { Palmpay } from '../assets/Images';
import { useAppContext } from '../Context/ContextProvider';

const Checkout = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const { state, dispatch } = useAppContext();

  const handleCheckboxChange = (event) => {
    setIsAccepted(event.target.checked);
  };
  const calculateSubtotal = () => {
    return state.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  
  
  return (
    <div style={{ color: "black", marginTop: "100px", height: "" }}>
      <h1 className="headings">Checkout</h1>

      <form className="checkout-grid container">
        <section className="checkout-left">
          <div className="checkout-left-top">
            <h3 style={{ marginBottom: "1rem" }}>Shipping Address</h3>

            <div className="ship" style={{ width: "100%", display: "flex" }}>
              <input type="text" placeholder="First Name" id="firstname" />
              <input type="text" placeholder="Last Name" id="lastname" />
            </div>
            <div className="ship">
              <input type="text" placeholder="Email Address" />
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="ship">
              {/* <select name="City" id="">
                <option value="Abuja"></option>
                <option value="Abuja"></option>
              </select> */}
              <input type="text" placeholder="City" />
              <input type="text" placeholder="Address" />
            </div>

            {/* <button>Place order</button> */}
          </div>

          <div className="checkout-left-bottom">
            <h3>Payment Method</h3>
            <div className="pay-method">
              <summary>
                <input type="radio" name="payment" id="card" />
                <label htmlFor="card"> Card</label>
                <br />
                <input
                  type="text"
                  placeholder="Card Number"
                  className="input-full"
                />
                <input
                  type="text"
                  placeholder="Name on Card"
                  className="input-full"
                />
                <div className="ship">
                  <input type="text" placeholder="Expiry Date" />
                  <input type="text" placeholder="CVV" />
                </div>
              </summary>
              {/* ======================================= */}
              <summary>
                <input type="radio" name="payment" id="transfer" />
                <label htmlFor="transfer"> Transfer</label>
                <div
                  className="bank"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img src={Palmpay} alt="palmpay" width={70} />
                  <div
                    className="bank-details"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <span>Blueberry Technologies Limited</span>
                    <span>35378393839937</span>
                  </div>
                </div>
              </summary>
            </div>
          </div>
        </section>
        <section className="checkout-right">
          <div className="checkout-right-top">
            <h3 style={{ marginBottom: "1rem" }}>Order Summary</h3>
            <summary className="order-summary">
              <div>
                <p>Subtotal</p>
                <p>{calculateSubtotal()}</p>
              </div>
              <div>
                <p>Shipping</p>
                <p>1000</p>
              </div>
              <div>
                <p>Total</p>
                <p>{calculateSubtotal() + 1000}</p>
              </div>
            </summary>
          </div>
          <div className="checkout-right-bottom">
            <input type="checkbox" id="terms-and-conditions" checked={isAccepted} onChange={handleCheckboxChange} />
            <label htmlFor="terms-and-conditions"> I accept ur terms and conditions</label>
            <br />
            <button type="submit" disabled={!isAccepted}>Place order</button>
          </div>
        </section>
      </form>
    </div>
  );
}

export default Checkout