import React, { useState } from "react";

import variant1 from "./assets/images/variants/stripe-variant.png";
import variant2 from "./assets/images/variants/wine-variant.png";
import variant3 from "./assets/images/variants/green-variant.png";

function ProductForm() {
  const [variant, setVariant] = useState("variant-1");

  return (
    <div className="product-form">
      <h3>Stripe Amo Trousers - Ivory & Black Stripe</h3>
      <p>$1024.00</p>
      <hr />
      <p>
        <strong>Color: </strong>
        <span className="selected-color">Ivory & Black Stripe</span>
      </p>
      <div className="variant-swatches">
        <div
          className={`variant-swatch-container ${
            variant === "variant-1" ? "selected" : ""
          }`}
          onClick={() => setVariant("variant-1")}
        >
          <img
            src={variant1}
            alt="Swatch of black and white stripe fabric"
            className="variant-img"
          />
        </div>
        <div
          className={`variant-swatch-container ${
            variant === "variant-2" ? "selected" : ""
          }`}
          onClick={() => setVariant("variant-2")}
        >
          <img
            src={variant2}
            alt="Swatch of solid red wine colored fabric"
            className="variant-img"
          />
        </div>
        <div
          className={`variant-swatch-container ${
            variant === "variant-3" ? "selected" : ""
          }`}
          onClick={() => setVariant("variant-3")}
        >
          <img
            src={variant3}
            alt="Swatch of army green colored fabric"
            className="variant-img"
          />
        </div>
      </div>
      <button>ADD TO CART</button>
    </div>
  );
}

export default ProductForm;
