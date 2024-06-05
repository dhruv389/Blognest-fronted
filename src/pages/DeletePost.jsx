import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/userContext';
import { Link, useNavigate ,useLocation} from 'react-router-dom';
import axios from "axios"
import Loader from '../components/Loader';

const DeletePost = ({postId: id}) => {

  const navigate = useNavigate();
  const {currentUser} =useContext(UserContext);
  const token = currentUser?.token;
  const location = useLocation();
  const [isLoading,setIsLoading]= useState(false);
  // redirect to login page for any user who is not logged in

  useEffect(()=>{
    if(!token ){
      navigate("/login");
    }
  },[navigate,token])


  const removePost= async (id)=>{
 
    try {
    
      const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/posts/${id}`,{withCredentials : true, headers:{Authorization : `Bearer ${token}`}})
      console.log(response.status);
      if(response.status === 200) {
       if(location.pathname === `/myposts/${currentUser.id}`){
        navigate(0);

       }
       else {
        window.alert("Post Deleted SucessFully😊");
        navigate('/');
       }
      
      }
    } catch (error) {
      console.log(error)
    }
  }

  if(isLoading) return <Loader/>
  return (
   <Link className='btn sm danger' onClick={()=>removePost(id)}> Delete</Link>
  )
}

export default DeletePost


