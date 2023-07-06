import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';




function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      console.log(response.data);
    } catch (error) {
        console.log('ini error');
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Terjadi kesalahan saat melakukan login');
      }
    }
  };
  navigate('/');
//   const checkLoggedIn = async () => {
//     try {
//       const response = await axios.get('/api/checkLoggedIn');
//       console.log(response.data);
//       // Lakukan tindakan berdasarkan status login pengguna
//     } catch (error) {
//       console.error('Terjadi kesalahan saat memeriksa login', error);
//     }
//   };
  useEffect(() => {
    handleLogin();

  }, []);


    return (
        <div className="page">
       <div className="cover">
        <h1>Login</h1>
        <div className="isi">
        <input type="text" placeholder="Username / Email" value={email} onChange={(e) => setEmail(e.target.value)}/> <br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button className="Login-btn" nClick={handleLogin}>Login</button>
        <p className="Text">Atau</p>
        <Link to="/SignUp" className="SignUp-btn">SignUp</Link>
        {errorMessage && <p>{errorMessage}</p>}
    
       </div>
       </div>
    )
}
export default Login;
