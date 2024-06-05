import React, { useEffect, useState ,useContext} from 'react'

import PostItem from "./PostItem"

import Fronted from "../pages/Fronted.jsx"
import "../index.css"
import Loader from './Loader.jsx'
import axios from "axios"






import {UserContext} from "../context/userContext"
// import { Link,useNavigate } from 'react-router-dom'

const Posts = () => {
  const[posts,setPosts]=useState([]);

const [isLoading,setIsLoading]= useState(false);


  const {currentUser} =useContext(UserContext);
  const token = currentUser?.token;

  useEffect(()=>{
    if(!token) console.log("token");
const fetchPosts = async ()=>{
  setIsLoading(true);
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`);
    
    setPosts(response?.data);
   
  } catch (error) {
    console.log(error)
  }
  setIsLoading(false);
}
fetchPosts();
  },[token])

  if(isLoading)  { return <Loader/>}

  return (
     <section className="posts">
     <Fronted/>

     
   
      {posts.length >0 ?   <div className="container posts_container">
        {
          posts.map(({ _id:id,thumbnill,category,title,description,creator,createdAt})=>
        <PostItem key={id} thumbnill={thumbnill} postID={id} category={category} title={title} description={description}  authorID={creator} createdAt={createdAt}/>  
        )
        }
        </div> : <div className='center'><h2>No posts found</h2></div>
        
      }
     

     </section>
  )
}

export default Posts