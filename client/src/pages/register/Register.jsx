import React, { useContext, useRef, useState } from 'react'
import './register.scss'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../authContext/AuthContext'
import { loginSuccess } from '../../authContext/AuthActions'
export default function Register() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [username,setUsername]=useState("")

  const navigate=useNavigate()
  const { dispatch } = useContext(AuthContext)
  const handleStart=()=>{
    setEmail(emailRef.current.value);
  }
  const handleFinish=async (e)=>{
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try{
      const res=await axios.post("/auth/register",{email,username,password})
      console.log('Registration successful, navigating to login page');
      dispatch(loginSuccess(res.data));
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate('/');
    }catch(e){
      console.log(e);
    }
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate('/login');
  }
  const emailRef=useRef()
  const passwordRef=useRef()
  const usernameRef=useRef()
  return (
    <div className='register'>
        <div className="top">
          <div className="wrapper">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
            <button className='loginButton' onClick={handleSignIn}>Sign In</button>
          </div>
        </div>  
        <div className="container">
            <h1>Unlimited movies,TV shows, and more</h1>
            <h2>Watch anywhere. Cancel anytime. </h2>
            <p>Ready to watch? Enter your email to create or restart your membership</p>
            {
              !email ? (
                <div className="input">
                <input type="email" placeholder='email address' ref={emailRef}/>
                <button className="registerButton" onClick={()=>handleStart()}>Get Started</button>
            </div>
              ):(
                <form className="input">
                <input type="text" placeholder='username' ref={usernameRef}/> 
                <input type="password" placeholder='password' ref={passwordRef}/>
                <button className="registerButton" onClick={(e)=>handleFinish(e)}>Start</button>
            </form>
              )
            }
           
        </div>
    </div>
  )
}
