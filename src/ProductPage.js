import { Fragment } from "react";
import "./Style.css";
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
