import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="bg_button_contact">
        <a className="button_contact" href=" ">
          Contact Us
        </a>
      </div>
      <div className="container">
        <div className="wrapper">
          <div className="cards">
            <div className="item">
              <div className="icon_pesan">
                <img src="" alt="" />
              </div>
              <div className="text">
                <h3>CONTACT US</h3>
                <p>
                  web123@gmail.com
                  <br />
                  089542624923
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon_lokasi">
                <img src="" alt="" />
              </div>
              <div className="text">
                <h3>OUR LOCATION</h3>
                <p>
                  Candi Gebang Sleman
                  <br />
                  Yogyakarta
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon_jam">
                <img src="" alt="" />
              </div>
              <div className="text">
                <h3>OPENING HOURS</h3>
                <p>
                  Mon - Sat (9:00 - 6:00)
                  <br />
                  Sunday - Closed
                </p>
              </div>
            </div>
          </div>
          <form action="" className="grid-container">
            <input type="text" id="name" placeholder="Your Name :" className="name" />
            <input type="text" id="mail" placeholder="Your Mail :" className="mail" />
            <input type="text" id="phone" placeholder="Your Phone :" className="phone" />
            <textarea name="message" id="message" className="message" cols="30" rows="10" placeholder="Your Message :"></textarea>
          </form>
          <a href=" " className="send_button">
            SEND MESSAGE
          </a>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7906.563678675694!2d110.409046!3d-7.759905000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a599bd3bdc4ef%3A0x6f1714b0c4544586!2sUniversitas%20Amikom%20Yogyakarta!5e0!3m2!1sid!2sid!4v1687417777450!5m2!1sid!2sid" title="myframe" className="maps" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
