import { useContext, useState } from 'react'
import './login.scss'
import { Navigate, useNavigate } from 'react-router-dom';
import {login} from '../../authContext/apiCalls'
import { AuthContext } from '../../authContext/AuthContext';
import { loginSuccess } from '../../authContext/AuthActions';
export default function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const {dispatch}=useContext(AuthContext);
  const navigate=useNavigate();
  const handleLogin=async (e)=>{
    e.preventDefault();
    const res=await login({email,password},dispatch);
    console.log(res)
    navigate("/")
  }
  return (
    <div className='login'>
        <div className="top">
          <div className="wrapper">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
          </div>
        </div>
        <div className="container">
          <form action="">
            <h1>Sign In</h1>
            <input type="email" placeholder='email or phone number' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
            <button className="loginButton" onClick={handleLogin}>Login</button>
            <span>New to Netflix? <b onClick={()=>navigate("/register")}>Sign up now.</b></span>
            <small>
              This page is protected by google reCAPTCHA to ensure you are 
              not a bot <b>learn more</b> 
            </small>
          </form>
        </div>
    </div>
  )
}
