import Navbar from "../components/NAVBAR/Navbar";
// import Insight from "../components/PAGE/Isight/insight";
import Footer from "../components/FOOTER/Footer";
// import Carousel from "react-bootstrap/Carousel";
// import Log from './logo.svg';
import SSRProvider from "react-bootstrap/SSRProvider";
// import Home from "../components/PAGE/Home/Home";

function PageInsight() {
  return (
    <>
      <Navbar />
      
      <SSRProvider>
        {/* <Home/> */}
      </SSRProvider>
      
      {/* <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Log}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Log}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Log}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
      <Footer />
    </>
  );
}

export default PageInsight;
