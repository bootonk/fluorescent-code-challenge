import React from "react";

import img1 from "./assets/images/lifestyle/product-image-1.png";
import img2 from "./assets/images/lifestyle/product-image-2.png";
import img3 from "./assets/images/lifestyle/product-image-3.png";
import img4 from "./assets/images/lifestyle/product-image-4.png";
import img5 from "./assets/images/lifestyle/product-image-5.png";
import img6 from "./assets/images/lifestyle/product-image-6.png";

function ProductImages() {
  return (
    <div className="product-images">
      <div className="thumbnail-images">
        <img
          src={img1}
          alt="Woman facing backwards in Stripe Amo Trousers"
          className="thumbnail-img"
        />
        <img
          src={img2}
          alt="Woman facing forwards and leaing the left in Stripe Amo Trousers"
          className="thumbnail-img"
        />
        <img
          src={img3}
          alt="Woman looking forward with crossed arms wearing Stripe Amo Trousers"
          className="thumbnail-img"
        />
        <img
          src={img4}
          alt="The back view of the Stripe Amo Trousers"
          className="thumbnail-img"
        />
        <img
          src={img5}
          alt="Woman standing with one foot forward wearing Stripe Amo Trousers"
          className="thumbnail-img"
        />
        <img
          src={img6}
          alt="The front view of the Stripe Amo Trousers"
          className="thumbnail-img"
        />
      </div>
      <div className="main-image">
        <img
          src={img1}
          alt="Large image of woman facing backwards in Stripe Amo Trousers"
          className="thumbnail-img"
        />
      </div>
    </div>
  );
}

export default ProductImages;
