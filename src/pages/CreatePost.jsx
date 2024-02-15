import { Description } from '@material-ui/icons';
import React, { useContext, useEffect, useState } from 'react'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import {UserContext} from "../context/userContext"
import {useNavigate} from "react-router-dom"
import axios from "axios";

const CreatePost = () => {

  const[title,setTitle] =useState("");
  const[category,setCategory] =useState("Uncategorized");
  const[description,setDescription]=useState("");
  const[thumbnill,setThumbnill]=useState("");
  const [error,setError] = useState('');
const navigate = useNavigate();


  const {currentUser} =useContext(UserContext);
  const token = currentUser?.token;

  // redirect to login page for any user who is not logged in

  useEffect(()=>{
    if(!token ){
      navigate("/login");
    }
  },[])

const modules ={
  toolbar:[
    [{'header':[1,2,3,4,5,false]}],
    ["bold","italic","underline","strike","blackquote"],
    [{"list":"ordered"},{"list":"bullet"},{"indent":'-1'},{"indent":'+1'}],
    ["link","image"],
    ["clean"],

  
  ],
}

const formates =[
  'header',
  "bold","italic","underline","strike","blackquote",
  "list","bullet","indent",
  "link","image"
]

const POST_CATEGORIES =["Agriculture","Business","Entertainment","Art","Investment","Uncategorized","Weather"]


const createPost = async (e)=>{
  e.preventDefault();

  const postData = new FormData();
  postData.set('title',title);
  postData.set('category',category);
  postData.set('description',description);
  postData.set('thumbnill',thumbnill);


  try {
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/posts`,postData,{withCredentials:true, headers :{Authorization:` Bearer ${token}`}})

  if(response.status == 200) {
  return navigate('/');
  }
} catch (err) {
  setError(err.response.data.message);
}

}






  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
        {error &&  <p className="form_error-message">
          {error}
        </p> }
       
         <form action="" className="form create-post_form" onSubmit={createPost}>
          <input type="text" placeholder='Title' value={title}  onChange={e=>setTitle(e.target.value)} autofocus/>
          <select name="category"  value={category} onChange={e=>setCategory(e.target.value)}   id="">
            {
              POST_CATEGORIES.map(cat =><option key={cat}>{cat}</option> )
            }
          </select>
            <ReactQuill modules={modules} formats={formates} value={description} onChange={setDescription}/>
            <input type="file" onChange={e=>setThumbnill(e.target.files[0])} accept='png,jpg,jeg' />
            <button type="submit" className='btn primary'>Create</button>
         </form>
      </div>
    </section>
  )
}

export default CreatePost