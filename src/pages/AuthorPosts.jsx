import React, { useEffect, useState } from 'react'
import axios from "axios"
import PostItem from '../components/PostItem';
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';

const AuthorPosts = () => {

  const[posts,setPosts]=useState([]);

const [isLoading,setIsLoading]= useState(false);
const {id}= useParams();

  useEffect(()=>{
const fetchPosts = async ()=>{
  setIsLoading(true);
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/users/${id}`)
    setPosts(response?.data);
    console.log(posts)
   
  } catch (error) {
    console.log(error)
  }
  setIsLoading(false);
}
fetchPosts();
  },[id])

  if(isLoading)   return <Loader/>

  return (

     <section className="posts">
         
   
      {posts.length >0 ?   <div className="container posts_container">
        {
          posts.map(({ _id:id,thumbnill,category,title,description,creator,createdAt})=>
        <PostItem key={id} thumbnill={thumbnill} postID={id} category={category} title={title} description={description}  authorID={creator} createdAt={createdAt}/>  
        )
        }
        </div> : <h2 className='center'>No posts found</h2>
      }
     
     </section>
  )
}

export default AuthorPosts
