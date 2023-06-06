import { Fragment } from "react";
import "./Styles.css";
import ProductImages from "./ProductImages";
import ProductForm from "./ProductForm";

function ProductPage() {
  return (
    <Fragment>
      <ProductImages />
      <ProductForm />
    </Fragment>
  );
}

export default ProductPage;
