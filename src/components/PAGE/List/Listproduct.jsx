import React from "react";
import "./Listproduct.css";

function Listproduct({ product, onRemove, cartProducts, setCartProducts }) {
  const handleRemove = () => {
    onRemove(product);
  };

  const totalHarga = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <>
      <div className="list1">
        <div className="icon">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="nama-produk">{product.name}</div>
        <div className="jumlah">{product.quantity}</div>
        <div className="harga">{product.price}</div>
        <div className="totalHarga">{totalHarga}</div>
        <button className="hapus-button" onClick={handleRemove}>
          Hapus
        </button>
      </div>
    </>
  );
}

export default Listproduct;
