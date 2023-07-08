import { Link } from 'react-router-dom';
import './login.css';



function Login(){
    return (
        <div className="page">
       <div className="cover">
        <h1>Login</h1>
        <div className="isi">
        <input type="text" placeholder="Username / Email" /> <br />
        <input type="password" placeholder="Password" />
        </div>
        <button className="Login-btn">Login</button>
        <p className="Text">Atau</p>
        <Link to="/SignUp" className="SignUp-btn">SignUp</Link>
    
       </div>
       </div>
    )
}
export default Login;
