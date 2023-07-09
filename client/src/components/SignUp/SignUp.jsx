import "./SignUP.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const SignUp = () => {
  const [email, getEmail] = useState("");
  const [password, getPassword] = useState("");
  const [username, getUsername] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await axios.post("http://localhost:5000/signup", {
        email,
        password,
        username,
      });
      console.log("login success");
      custom_alert();
      navigate("/");
    } catch (error) {
      console.log("terjadi error signup");
      if (error.response && error.response.data) {
      } else {
      }
      error_alert();
    }
  };

  function custom_alert(e) {
    Swal.fire({
      icon: "success",
      title: "Sign Up berhasil",
      iconColor: "#02cc0c",
      // confirmButtonColor: "#c7a17a",
      showConfirmButton: false,
      timer: 2000,
    });
  }
  function error_alert(e) {
    Swal.fire({
      icon: "error",
      title: "Sign Up gagal",
      iconColor: "#b83d3d",
      // confirmButtonColor: "#c7a17a",
      showConfirmButton: false,
      timer: 2000,
    });
  }


  return (
    <div className="page">
      <div className="cover1">
        <h1>Sign Up</h1>
        <div className="Sign">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => getUsername(e.target.value)}
          />
          
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => getEmail(e.target.value)}
          />
       
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => getPassword(e.target.value)}
          />
        </div>

        <button className="Sign-up" onClick={handleLogin}>
          Sign UP
        </button>
      </div>
    </div>

    //    <div className="cover">
    //    <h1>Login</h1>
    //    <div className='isi'>
    //    <input type="text" placeholder='Username / Email' /> <br />
    //    <input type="password" placeholder='Password' />
    //    </div>
    //    {/* <div className='button'> */}
    //    {/* <div className='Login-btn'>Login</div> */}
    //    <button className='Login-btn'>Login</button>
    //    <p className='Text'>Atau</p>
    //    {/* <div className='SignUp-btn'>SignUp</div> */}
    //    <Link to="/signup" className='SignUp-btn'>SignUp</Link>

    //   </div>
  );
};
export default SignUp;
