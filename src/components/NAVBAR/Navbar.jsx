import "./Navbar.css";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  // const navigate = useNavigate();
  return (
    <>
    <div class="justify-flex">
      <div class="logo ">
        <h1>Logo</h1>
      </div>
      <div class="navbar">
       <Link class="content" to="/">Home</Link>
       <Link class="content" to="/About">About</Link>
       <Link class="content" to="/Order" >Order</Link>
       <Link class="content" to="/Contact">Contact</Link>
       <Link class="content" to="/Insight">Insight</Link>
       <Link class="content" to="/Team">Yteam</Link>
      </div>
    </div>
    </>
  );
}
export default Navbar;
