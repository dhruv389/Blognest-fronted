import React,{useContext,useEffect,useState} from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link, useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import  DeletePost from "./DeletePost"
import { UserContext } from '../context/userContext'
import axios from "axios";

import TextToSpeech from './TextToSpeech'


const PostDetail = () => {
    const [text,setText]=useState("");
  const {id}= useParams();
  const [post,setPost]= useState(null);
  const[post_title,setPost_title]= useState("")
  const [error,setError]= useState(null);
  const [isLoading,setIsLoading]= useState(false);

const {currentUser} = useContext(UserContext);


useEffect(()=>{
  const getPost = async()=>{
    setIsLoading(true);
    try {
      const response=  await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`)
setPost(response.data);
setPost_title(response.data.title);

setText(response.data.description);


    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  }
  getPost();
},[])

if(isLoading) {
  return <Loader/>
}



// const handleOnCLick = async()=>{
// speak({text:text})
// }

  return (
    <section className="post-detail">
  
    {error && <p className='error'>{error}</p>}
  { post &&   <div className="container post-detail_container">
        <div className="post-detail_header">
          <PostAuthor authorID={post.creator} createdAt={post.createdAt}/>
         {
          currentUser?.id === post?.creator &&  <div className="post-detail_buttons">
            <Link to={`/posts/${post?._id}/edit`} className='btn sm primary'>Edit</Link>
         <DeletePost postId={id}/>
          </div>
         }
        </div>
        <h1>{[post.title]}</h1>
        <div className="post-detail_thumbnil" >
          <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnill}`} alt="" />
        </div>
       <p dangerouslySetInnerHTML={ {__html: post.description}}></p>
       

      </div> 
      
      }
     
   <TextToSpeech text={`Hello readers, Our topic for today revolves around ${post_title}, and now, let's delve into the main context.${text}`}  className="textvoice" /> 
    
  
     
      
     


        
    </section>
  )
}

export default PostDetail