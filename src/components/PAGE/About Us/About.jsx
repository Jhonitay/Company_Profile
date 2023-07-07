import "./About.css";
import "./About";
import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur scroll ke bagian atas halaman saat komponen dimuat ulang
  }, []);
  return (
    <>
      <div>
        <section>
          <div class="foto">
            <img src="images/About.jpg" alt="" class="foto-about" />
            <h2 className="button_contact">About US</h2>
          </div>
          <div class="about-text">
            <h2>About Coffe Indonesia</h2>
            <p>
              Selamat datang di Coffee Market Online Store, destinasi terbaikmu untuk menjelajahi dunia kopi berkualitas tinggi secara online. Kami adalah toko kopi daring yang didedikasikan untuk memberikan pengalaman belanja yang
              memuaskan kepada pecinta kopi di seluruh dunia.
            </p>
            <p>
              Di Coffee Market, kami memahami betapa pentingnya kualitas kopi dalam menciptakan secangkir yang memukau. Oleh karena itu, kami dengan hati-hati memilih biji kopi terbaik dari berbagai belahan dunia yang menghasilkan rasa yang
              kaya, aroma yang memikat, dan keseimbangan yang sempurna. Kami menawarkan beragam varietas kopi, mulai dari single origin hingga campuran unik, yang akan memenuhi keinginan dan preferensi penikmat kopi paling cerdas
            </p>
            <p>
              Kami juga menawarkan fleksibilitas dalam memenuhi kebutuhan pelanggan kami. Dari biji kopi utuh hingga kopi bubuk siap seduh, kami menyediakan pilihan yang dapat disesuaikan dengan metode penyeduhan favoritmu. Kami bahkan
              menawarkan kopi dalam bentuk kapsul untuk penggemar kopi dengan kesibukan yang tinggi. Kenyamananmu adalah prioritas kami. Melalui platform toko daring kami yang intuitif, kamu dapat menjelajahi berbagai produk kopi dengan
              mudah, membandingkan pilihan, membaca deskripsi rasa yang rinci, dan membaca ulasan dari pelanggan lainnya. Setelah memilih kopi yang diinginkan, proses pembelian yang aman dan efisien akan memastikan kopi berkualitasmu tiba
              dengan tepat waktu di pintu rumahmu.
            </p>
            <p>
              Tak hanya menyediakan kopi terbaik, Coffee Market juga menyediakan aksesori kopi berkualitas tinggi. Dari mesin espresso canggih hingga alat penyeduhan manual yang elegan, kami memiliki segala yang kamu butuhkan untuk
              merasakan pengalaman menyeduh kopi yang sempurna di rumahmu sendiri.
            </p>
          </div>
          <div className="video-container">
            <h2>OUR Video</h2>
            <video src="video/vidio.mp4" className="video" controls></video>
          </div>
          <div class="tes">
            <h2 class="moni">Testemoni</h2>
            <div class="Komen">
              <div class="grid">
                <h2>Yogi</h2>

                <p class="dari">Kepala Suku dari Sugeng Rawuh</p>
                <p>"Kedai kopi ini adalnu yang mereka tawarkan. Stafnya juga ramah dan penuh perhatian. Saya pasti akan kembali lagi!"</p>
              </div>
              <div className="grid">
                <h2>Yogi</h2>
                <p class="dari">Kepala Suku dari Sugeng Rawuh</p>
                <p>
                  "Kedai kopi ini adalah tempat yang luar biasa! Kopinya berkualitas tinggi dan rasanya luar biasa. Saya benar-benar terkesan dengan variasi menu yang mereka tawarkan. Stafnya juga ramah dan penuh perhatian. Saya pasti akan
                  kembali lagi!"
                </p>
              </div>
              <div className="grid">
                <h2>Yogi</h2>
                <p class="dari">Kepala Suku dari Sugeng Rawuh</p>
                <p>
                  "Kedai kopi ini adalah tempat yang luar biasa! Kopinya berkualitas tinggi dan rasanya luar biasa. Saya benar-benar terkesan dengan variasi menu yang mereka tawarkan. Stafnya juga ramah dan penuh perhatian. Saya pasti akan
                  kembali lagi!"
                </p>
              </div>
              <div className="grid">
                <h2>Yogi</h2>
                <p class="dari">Kepala Suku dari Sugeng Rawuh</p>
                <p>
                  "Kedai kopi ini adalah tempat yang luar biasa! Kopinya berkualitas tinggi dan rasanya luar biasa. Saya benar-benar terkesan dengan variasi menu yang mereka tawarkan. Stafnya juga ramah dan penuh perhatian. Saya pasti akan
                  kembali lagi!"
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default About;
