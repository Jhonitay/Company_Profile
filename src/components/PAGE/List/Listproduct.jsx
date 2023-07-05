import React from "react";
import "./Listproduct.css";

function Listproduct({ product, onRemove }) {
  const handleRemove = () => {
    onRemove(product);
  };

  return (
    <>
      <div className="list">
        <div className="icon">Gambar</div>
        <div className="nama-produk">{product.name}</div>
        <div className="jumlah">{product.quantity}</div>
        <div className="harga">{product.price}</div>
        <button className="hapus-button" onClick={handleRemove}>
          Hapus
        </button>
      </div>
    </>
  );
}

export default Listproduct;
