import React from "react";

import variant1 from "./assets/images/variants/stripe-variant.png";
import variant2 from "./assets/images/variants/wine-variant.png";
import variant3 from "./assets/images/variants/green-variant.png";

function ProductForm() {
  return (
    <div className="product-form">
      <h3>Stripe Amo Trousers - Ivory & Black Stripe</h3>
      <p>$1024.00</p>
      <hr />
      <p>Color: Ivory & Black Stripe</p>
      <div className="variant-swatches">
        <img
          src={variant1}
          alt="Swatch of black and white stripe fabric"
          className="variant-img"
        />
        <img
          src={variant2}
          alt="Swatch of solid red wine colored fabric"
          className="variant-img"
        />
        <img
          src={variant3}
          alt="Swatch of army green colored fabric"
          className="variant-img"
        />
      </div>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductForm;
