import Posts from "../components/Posts"

import React ,{useContext,useEffect} from 'react'
import {UserContext} from "../context/userContext"
import { Link,useNavigate ,useParams} from 'react-router-dom'

const Home = () => {

//   const navigate =useNavigate();
//   const {currentUser} =useContext(UserContext);
//   const token = currentUser?.token;
  
// useEffect(()=>{
    
//     if(!token){
     
//       navigate("/login");
//       window.alert("You are already logged in😎")
//     }
//   },[])


  return (
   <Posts/>
  )
}

export default Home