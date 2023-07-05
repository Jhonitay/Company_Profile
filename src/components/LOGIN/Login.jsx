import { Link } from 'react-router-dom';
import './login.css';



function Login(){
    return (
        <div className="page">
       <div className="cover">
        <h1>Login</h1>
        <div className="isi">
        <input type="text" placeholder=" Email" /> <br />
        <input type="password" placeholder="Password" />
        </div>
        <button className="Login-btn">Login</button>
       <div className='akun'>
       <p className="Text">Belum Punya Account?</p>
        <Link to="/SignUp">SignUp</Link>
        </div> 
        {/* <Link to="/SignUp" className="SignUp-btn">SignUp</Link> */}
    
       </div>
       </div>
    )
}
export default Login;
