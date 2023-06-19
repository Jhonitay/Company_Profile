import "./Order.css";
import Product from "../Product Box/product";
import Listproduct from "../List/Listproduct";

function Order() {
  return (
    <>
      <body>
        <div className="segment1 flex align-center justify-center ">
          <img alt="img" />
        </div>
        <div className="segment2">
          <div id="search-form">
            <input
              type="text"
              id="search-input"
              placeholder="Enter your search term"
            />
            <button type="button" id="search-button"></button>
          </div>
        </div>
        <div className="segment3 flex">
          <div class="side-product">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <div className="side-right box-keterangan">
            <div className="spesifikasi">
              <h3>spesification</h3>
              <div className="flex spek">
                <p className="judul">nama :</p>
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
            </div>
            <div class="gambar-product">
              <div>
                <img src="" alt="img" />
              </div>
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
            <Listproduct />
            <Listproduct />
            <Listproduct />
            <Listproduct />
          </div>
        </div>
      </body>
    </>
  );
}
export default Order;
