import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import axios from "axios"
import Loader from '../components/Loader'
import blankprofile from "../Images/blank-profile1.jpg"

const Authors = () => {
  const [authors,setAuthors] = useState([]);

const [isloding,setIsLoading]=useState(false);

useEffect(()=>{

   const getAuthors = async ()=>{
    setIsLoading(true);
    try {
      const response= await axios.get(`${process.env.REACT_APP_BASE_URL}/users`)
      setAuthors(response.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
   }
   getAuthors();
},[])


if(isloding) return <Loader/>

  return (
   <section className="authors">
   { authors.length > 0 ? <div className="container authors_container">
  {
    authors.map(({_id:id,avatar,name,posts})=>{
      return <Link key={id} to={`/posts/users/${id}`} className='author'>

      
   <div className="author_avatar">
   {!avatar &&   <img
                src={blankprofile}
                alt=""
              /> }
            { avatar &&   <img
                src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${avatar}`}
                alt=""
              />}
    <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${avatar}`} alt="" />
   </div>
   <div className="authors_info">
    <h4>{name}</h4>
    <p>Total : {posts}</p>
   </div>
      </Link>
    })
  }
    </div> : <h2 className='center'>No users/authors found.</h2>
    }
   </section>
  )
}

export default Authors