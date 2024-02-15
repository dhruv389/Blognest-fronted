import React, { useEffect, useState } from 'react'
import PostItem from "./PostItem"

import Fronted from "../pages/Fronted.jsx"
import "../index.css"
import Loader from './Loader.jsx'
import axios from "axios"
import space1 from "../Images/space1.png"
import space2 from "../Images/space2.png"

const Posts = () => {
  const[posts,setPosts]=useState([]);

const [isLoading,setIsLoading]= useState(false);


  useEffect(()=>{
const fetchPosts = async ()=>{
  setIsLoading(true);
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`)
    setPosts(response?.data);
   
  } catch (error) {
    console.log(error)
  }
  setIsLoading(false);
}
fetchPosts();
  },[])

  if(isLoading)  { return <Loader/>}

  return (
     <section className="posts">
     <Fronted/>
     <div style={{display:"flex",justifyContent:"center"}}>
     <div className='Li'>
     <div className='space2'><img src={space2} alt="" /></div>
     <h1>All Blogs </h1></div>
     <hr style={{color:"black"}}/>
     </div>
     
    
      {posts.length >0 ?   <div className="container posts_container">
        {
          posts.map(({ _id:id,thumbnill,category,title,description,creator,createdAt})=>
        <PostItem key={id} thumbnill={thumbnill} postID={id} category={category} title={title} description={description}  authorID={creator} createdAt={createdAt}/>  
        )
        }
        </div> : <h2 className='center'>No posts found</h2>
      }
     
   <div className="footer_up">
   <img src={space1}   className="space1" alt="" />
   </div>

     
     </section>
  )
}

export default Posts