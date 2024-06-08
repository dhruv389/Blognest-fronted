import React, { useState,useContext} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import loginimage from "../Images/signin-image.jpg"

import {UserContext} from "../context/userContext"
const Login = () => {

  const[userData,setUserData]=useState({
   
   email:"",
    password:"",
   
  })
const [error,setError] = useState("");
const navigate =useNavigate();

const {setCurrentUser} =useContext(UserContext);
// const {currentUser} =useContext(UserContext);
//   const token = currentUser?.token;


  const changeInputHandler=(e)=>{
    setUserData(prevState =>{

      return {...prevState,[e.target.name]:e.target.value}
    })

  }

const loginUser = async (e)=>{
  e.preventDefault();
  setError("");
  try {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`,userData)
    
    const user=await response?.data;
    setCurrentUser(user);
    navigate('/');
  } catch (error) {
    setError(error.response.data.message);
  }

}

  return (
  <section className="login">


<div className='temp'>
    <div className="container">
    <div className="righttext">
    <h1>Sign In</h1>
    </div>
     

  



  <form action="" className='form login_form' onSubmit={loginUser}>
        {error && <p className="form_error-message"> {error}</p>}
      
        <input type="email"  placeholder='email' name='email' autoComplete='off' value={userData.email} onChange={changeInputHandler} autoFocus/>
        <input type="password"  placeholder='Password' name='password' autoComplete='off' value={userData.password} onChange={changeInputHandler}/>
      
        <button type='submit' className="btn primary">Login</button>
        <small>Don't have an account <Link to="/register">Register</Link>  </small>
      </form>




  </div>


<div className='loginimage'>
<img src={loginimage} alt="" />
</div>
    
    </div>
  </section>
  )
}

export default Login