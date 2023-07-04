import './SignUP.css';

const SignUP = () => {
    return (
        <div className='page'>
       <div className="cover1">
        <h1>Sign Up</h1>
        <div className='Sign'>
            <input type="text" placeholder='Username' /><br />
            <input type="text" placeholder='Email' /><br />
            <input type="password" placeholder='Password' />
        </div>

        <button className='Sign-up'>
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

    )
}
export default SignUP;
