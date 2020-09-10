import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          className="checkout__ad"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your shopping Cart</h2>
        {/* BasketItem */}
        </div>
      </div>
      <div className="checkout__right">
        <h2>Subtotal here</h2>
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
