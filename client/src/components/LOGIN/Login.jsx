import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await axios.post("http://localhost:5000/login", { email, password });
      console.log("login success");
      custom_alert();
      navigate("/");
    } catch (error) {
      console.log("terjadi error masbro ");
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
      title: "Sign In gagal",
      iconColor: "#b83d3d",
      // confirmButtonColor: "#c7a17a",
      showConfirmButton: false,
      timer: 2000,
    });
  }

  //   const checkLoggedIn = async () => {
  //     try {
  //       const response = await axios.get('/api/checkLoggedIn');
  //       console.log(response.data);
  //       // Lakukan tindakan berdasarkan status login pengguna
  //     } catch (error) {
  //       console.error('Terjadi kesalahan saat memeriksa login', error);
  //     }
  //   };

  return (
    <div className="page">
      <div className="cover">
        <h1>Login</h1>
        <div className="isi">
          <input
            type="text"
            placeholder=" Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/SignUp" className="Sig">
            Klik disini untuk SignUp
          </Link>
        </div>

        <button className="Login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
export default Login;
