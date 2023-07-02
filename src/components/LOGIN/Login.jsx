import { Link } from 'react-router-dom';
import './Login.css';



const Login = () => {
    return (
        <div className='page'>
       <div className="cover">
        <h1>Login</h1>
        <div className='isi'>
        <input type="text" placeholder='Username / Email' /> <br />
        <input type="password" placeholder='Password' />
        </div>
        {/* <div className='button'> */}
        {/* <div className='Login-btn'>Login</div> */}
        <button className='Login-btn'>Login</button>
        <p className='Text'>Atau</p>
        {/* <div className='SignUp-btn'>SignUp</div> */}
        <Link to="/signup" className='SignUp-btn'>SignUp</Link>
    
       </div>
       </div>
    )
}
export default Login;
