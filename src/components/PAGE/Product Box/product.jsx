import "./product.css";

function Product({ title, description, price, onAddToSpecification }) {
  return (
    <>
      <div className="product-box">
        <div className="product-title">{title}</div>
        <div className="product-description">{description}</div>
        <div className="product-price">{price}</div>
        <button className="addcart" onClick={onAddToSpecification}>
          Add to Cart
        </button>
      </div>
    </>
  );
}
export default Product;
