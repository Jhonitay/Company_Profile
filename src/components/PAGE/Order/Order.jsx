import React, { useState } from "react";
import "./Order.css";
import Product from "../Product Box/product";
import Listproduct from "../List/Listproduct";

function Order() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedProductImages, setSelectedProductImages] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setSearchResults(productList);
    } else {
      const filteredProducts = productList.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
      setSearchResults(filteredProducts);
    }
  };

  const handleButtonClick = () => {
    handleSearch();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const selectProduct = (product, image) => {
    setSelectedProducts([product]);
    setSelectedProductImages([image]);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product]: 1,
    }));
  };

  const removeProduct = (product) => {
    const updatedProducts = selectedProducts.filter((p) => p !== product);
    const updatedQuantities = { ...quantities };
    delete updatedQuantities[product];
    setSelectedProducts(updatedProducts);
    setQuantities(updatedQuantities);
  };

  const increaseQuantity = (product) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product]: (prevQuantities[product] || 0) + 1,
    }));
  };

  const decreaseQuantity = (product) => {
    if (quantities[product] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [product]: prevQuantities[product] - 1,
      }));
    }
  };

  const productList = [
    { title: "Appia Life", description: "Description 1", price: 61000000, image: "." },
    { title: "Product 2", description: "Description 2", price: 10, image: "." },
    { title: "Product 3", description: "Description 3", price: 61000000, image: "https://example.com/image1.jpg" },
    { title: "Product 4", description: "Description 4", price: 61000000, image: "https://example.com/image1.jpg" },
    { title: "Product 5", description: "Description 5", price: 61000000, image: "https://example.com/image1.jpg" },
    { title: "Product 6", description: "Description 6", price: 61000000, image: "https://example.com/image1.jpg" },
    { title: "Product 7", description: "Description 7", price: 61000000, image: "https://example.com/image1.jpg" },
    { title: "Product 8", description: "Description 8", price: 61000000, image: "https://example.com/image1.jpg" },
    { title: "Product 9", description: "Description 9", price: 61000000, image: "https://example.com/image1.jpg" },
    { title: "Product 10", description: "Description 10", price: 61000000, image: "https://example.com/image1.jpg" },
    { title: "Product 11", description: "Description 11", price: 61000000, image: "https://example.com/image1.jpg" },
    { title: "Product 12", description: "Description 12", price: 61000000, image: "https://example.com/image1.jpg" },
    { title: "Product 13", description: "Description 13", price: 61000000, image: "https://example.com/image1.jpg" },
    { title: "Product 14", description: "Description 14", price: 61000000, image: "https://example.com/image1.jpg" },
    { title: "Product 15", description: "Description 15", price: 61000000, image: "https://example.com/image1.jpg" },
    { title: "Product 16", description: "Description 16", price: 61000000, image: "https://example.com/image1.jpg" },
    // Tambahkan produk lainnya di sini
  ];

  const moveToCart = () => {
    const cartProduct = selectedProducts.map((product) => {
      const selectedProduct = productList.find((p) => p.title === product);
      const price = selectedProduct ? selectedProduct.price : 0;
      return {
        name: product,
        price: price,
        quantity: quantities[product] || 1,
      };
    });

    setCartProducts((prevCartProducts) => [...prevCartProducts, ...cartProduct]);

    // Reset state selectedProducts dan quantities setelah dipindahkan ke keranjang
    setSelectedProducts([]);
    setQuantities({});
  };

  const [cartProducts, setCartProducts] = useState([]);

  const removeProductFromCart = (product) => {
    const updatedCartProducts = cartProducts.filter((p) => p !== product);
    setCartProducts(updatedCartProducts);
  };

  return (
    <>
      <body>
        <div className="segment1 flex align-center justify-center ">
          <img alt="img" />
        </div>
        <div className="segment2">
          <div id="search-form">
            <input type="text" id="search-input" placeholder="Enter your search term" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyPress={handleKeyPress} />
            <button type="button" id="search-button" onClick={handleButtonClick}>
              <img src="path_to_search_image" alt="Search" />
            </button>
          </div>
        </div>
        <div className="segment3 flex">
          <div className="side-product">
            {searchTerm === "" ? (
              productList.map((product, index) => (
                <Product key={index} title={product.title} description={product.description} price={`Rp${product.price}`} onAddToSpecification={() => selectProduct(product.title, product.image)} image={product.image} />
              ))
            ) : searchResults.length > 0 ? (
              searchResults.map((product, index) => (
                <Product key={index} title={product.title} description={product.description} price={`Rp${product.price}`} onAddToSpecification={() => selectProduct(product.title, product.image)} image={product.image} />
              ))
            ) : (
              <p>Tidak ditemukan produk</p>
            )}
          </div>
          <div className="side-right box-keterangan">
            <div className="spesifikasi">
              <h3>specification</h3>
              <div className="flex spek">
                <p className="judul">nama </p>
                <p>:</p>
                <p className="keterangan">keterangan</p>
              </div>
              <div className="flex spek">
                <p className="judul">dimensi </p>
                <p>:</p>
                <p className="keterangan">keterangan</p>
              </div>
              <div className="flex spek">
                <p className="judul">berat </p>
                <p>:</p>
                <p className="keterangan">keterangan</p>
              </div>
              <div className="flex spek">
                <p className="judul">stok </p>
                <p>:</p>
                <p className="keterangan">keterangan</p>
              </div>
              <div className="flex spek">
                <p className="judul">jenis </p>
                <p>:</p>
                <p className="keterangan">keterangan</p>
              </div>
              {selectedProducts.length > 0 && (
                <>
                  {selectedProducts.map((product, index) => {
                    const selectedProduct = productList.find((p) => p.title === product);
                    const price = selectedProduct ? selectedProduct.price : 0;
                    return (
                      <div key={index} className="fl spek">
                        <div>
                          <div className="product-info">
                            <p className="judul">Name</p>
                            <p>:</p>
                            <p className="keterangan">{product}</p>
                          </div>
                          <div className="product-info">
                            <p className="judul">Price</p>
                            <p>:</p>
                            <p className="keterangan">{(quantities[product] || 1) * price}</p>
                          </div>
                        </div>
                        <div>
                          <div className="button-group">
                            <button className="remove-button" onClick={() => removeProduct(product)}>
                              Remove
                            </button>
                            <button className="btn-quantity" onClick={() => decreaseQuantity(product)}>
                              -
                            </button>
                            <p className="quantity">{quantities[product] || 1}</p>
                            <button className="btn-quantity" onClick={() => increaseQuantity(product)}>
                              +
                            </button>
                            <button className="move-to-cart-button" onClick={moveToCart}>
                              Move to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
            <div className="gambar-product">
              {selectedProductImages.map((image, index) => (
                <div key={index}>
                  <img src={image} alt="Product" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="segment4">
          <div className="box">
            <div className="list">
              <div className="ikon">Gambar</div>
              <div className="namaProduk">Nama</div>
              <div className="jml">Jumlah</div>
              <div className="price">harga satuan</div>
            </div>
            {cartProducts.map((product, index) => (
              <Listproduct key={index} product={product} onRemove={removeProductFromCart} />
            ))}
          </div>
        </div>
      </body>
    </>
  );
}

export default Order;
