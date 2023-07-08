// import { Route } from "react-router-dom";
import Login from "../components/LOGIN/Login";
import Navbar from "../components/NAVBAR/Navbar";
import Footer from "../components/FOOTER/Footer";
// import SignUp from "../components/SignUp/SignUp";
// import { Link, Route } from "react-router-dom";

function PageLogin() {
  return (
    <>
        <Navbar />
        <Login />
        <Footer />
    </>
  );
}
export default PageLogin;