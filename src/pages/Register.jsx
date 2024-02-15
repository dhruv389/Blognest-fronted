import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import loginimage from "../Images/signup-image.jpg"

const Register = () => {

  const[userData,setUserData]=useState({
    name:"",
    email:"",
    password:"",
    password2:""
  })

  const [error,setError] = useState('');
  const navigate = useNavigate();

  const changeInputHandler=(e)=>{
    setUserData(prevState =>{
      // console.log(prevState)
      return {...prevState,[e.target.name]:e.target.value}
    })

  }
const registerUser =async (e)=>{
  
e.preventDefault();
setError('');
try{
const response= await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`,userData);
const newUser= await response.data;

if(!newUser){
  setError("coult register user.Please try again");
}
navigate('/login');
}
catch(err){
  console.error('Error registering user:', err.response.data.message);
 
setError(err.response.data.message);
}
}


  return (
  <section className="register">
  <div className='temp'>
  <div className="container">
      <h2 >Sign Up</h2>
      <form action="" className='form register_form' onSubmit={registerUser}>
     {  error && <p className="form_error-message">{error}</p>}
        <input type="text"  placeholder='Full Name' autocomplete="off"   name='name' value={userData.name} onChange={changeInputHandler}/>
        <input type="email"  placeholder='email' autocomplete="off" name='email' value={userData.email} onChange={changeInputHandler}/>
        <input type="password"  placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler}/>
        <input type="password"  placeholder='confirm Password' name='password2' value={userData.password2} onChange={changeInputHandler}/>
        <button type='submit' className="btn primary">Register</button>

      </form>
      <small>Already have an account <Link to="/login">Sign in </Link>  </small>
    </div>

    <div className='loginimage'>
<img src={loginimage} alt="" />
</div>
  </div>
   
  </section>
  )
}

export default Register