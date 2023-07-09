import React, { useState, useEffect } from "react";
import "./Order.css";
import { Link } from "react-router-dom";
import Product from "../Product Box/product";
import Listproduct from "../List/Listproduct";

function Order() {
  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur scroll ke bagian atas halaman saat komponen dimuat ulang
  }, []);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 100); // Mengatur scroll ke bagian atas halaman saat komponen dimuat ulang
  }, [selectedProducts]);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setSearchResults(productList);
    } else {
      const filteredProducts = productList.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
      setSearchResults(filteredProducts);
    }
  };

  // const handleButtonClick = () => {
  //   handleSearch();
  // };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const selectProduct = (product) => {
    setSelectedProducts([product]);
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
    {
      title: "Espresso Portafilter",
      description: "Description 1 ",
      price: 61000000,
      image: "http://localhost:3000/images/peraskopi.png",
    },
    {
      title: "Ground coffee",
      description: "Description 2",
      price: 10,
      image: "http://localhost:3000/images/groundkopi.png",
    },
    {
      title: "Coffe bean latte",
      description: "Description 3",
      price: 61000000,
      image: "http://localhost:3000/images/bijikopi.png",
    },
    {
      title: "Coffe candy",
      description: "Description 4",
      price: 61000000,
      image: "http://localhost:3000/images/permenkopi.png",
    },
    {
      title: "Coffe machine",
      description: "Description 5",
      price: 61000000,
      image: "http://localhost:3000/images/mesinkopi.png",
    },
    {
      title: "Machine espresso",
      description: "Description 6",
      price: 61000000,
      image: "http://localhost:3000/images/mesinespreso.png",
    },
    {
      title: "Milk coffe beans ",
      description: "Description 7",
      price: 61000000,
      image: "http://localhost:3000/images/bijikopisusu.png",
    },
    {
      title: "Coffe drip kettle",
      description: "Description 8",
      price: 61000000,
      image: "http://localhost:3000/images/ceret.png",
    },
    {
      title: "Espresso Maker Pot",
      description: "Description 9",
      price: 61000000,
      image: "http://localhost:3000/images/ceretpremium.png",
    },
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
        image: selectedProduct ? selectedProduct.image : "",
      };
    });

    setCartProducts((prevCartProducts) => [...prevCartProducts, ...cartProduct]);

    // Reset state selectedProducts dan quantities setelah dipindahkan ke keranjang
    setSelectedProducts([]);
    setQuantities({});
  };

  const removeProductFromCart = (product) => {
    const updatedCartProducts = cartProducts.filter((p) => p !== product);
    setCartProducts(updatedCartProducts);
  };

  return (
    <>
      <body>
        <div className="bg_order">
          <a className="button_order" href=" ">
            All Products
          </a>
        </div>
        <div className="segment2">
          <div id="search-form">
            <input type="text" id="search-input" placeholder="Enter your search term" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyPress={handleKeyPress} />
          </div>
        </div>
        <div className="segment3 flex">
          <div className="side-product">
            {searchTerm === "" ? (
              productList.map((product, index) => (
                <div key={index} className="product" onClick={() => selectProduct(product.title)}>
                  <Product title={product.title} description={product.description} price={`Rp${product.price}`} image={product.image} />
                </div>
              ))
            ) : searchResults.length > 0 ? (
              searchResults.map((product, index) => (
                <div key={index} className="product" onClick={() => selectProduct(product.title)}>
                  <Product title={product.title} description={product.description} price={`Rp${product.price}`} image={product.image} />
                </div>
              ))
            ) : (
              <p>Tidak ditemukan produk</p>
            )}
          </div>

          <div className="side-right box-keterangan">
            <div className="spesifikasi">
              <h3 className="font600">Specification</h3>
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
              {selectedProducts.map((product, index) => (
                <div key={index}>
                  <img src={productList.find((p) => p.title === product)?.image} alt="Product" className="product-image" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="segment4">
          <div className="boxorder">
            <div className="list">
              <div className="ikonorder">Gambar</div>
              <div className="namaProduk">Nama</div>
              <div className="jml">Jumlah</div>
              <div className="price">Harga Satuan</div>
              <div className="totalorder">Total Harga</div>
              <div className="rmv"></div>
            </div>
            {cartProducts.map((product, index) => (
              <Listproduct key={index} product={product} onRemove={removeProductFromCart} cartProducts={cartProducts} setCartProducts={setCartProducts} />
            ))}
          </div>
        </div>
        <div className="checkout-button-container">
          <Link class="contentcheckout" to="/Payment">
            Checkout
          </Link>
        </div>
      </body>
    </>
  );
}

export default Order;
