import "./Style.css";
import ProductImages from "./ProductImages";
import ProductForm from "./ProductForm";

function ProductPage() {
  return (
    <div className="product-container">
      <ProductImages />
      <ProductForm />
    </div>
  );
}

export default ProductPage;
