import React from "react";
import "./product.css";

function Product({ title, description, price, onAddToSpecification, image }) {
  return (
    <div className="product-box">
      {image && (
        <div className="product-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="product-title">{title}</div>
      <div className="product-description">{description}</div>
      <div className="product-price">{price}</div>
      {/* <button className="addcart" onClick={onAddToSpecification}>
        Add to Cart
      </button> */}
    </div>
  );
}

export default Product;
