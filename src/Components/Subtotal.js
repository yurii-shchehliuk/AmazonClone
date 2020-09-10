import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* COMPLETE LATER */}
              Subtotal (0 items): <strong>0</strong>
              {/* paste here value to display */}
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} // paste here value to display
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button >Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
