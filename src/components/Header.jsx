import React, { useState,useContext } from 'react'
import {Link} from "react-router-dom"
import  Logo from '../Images/web-logo3.PNG'
import { FaBarsStaggered } from "react-icons/fa6";
import {AiOutlineClose} from "react-icons/ai"
import aos from "aos"
import { UserContext } from '../context/userContext';

const Header = () => {
  const [isNavshowing,setIsNavshowing]=useState(false);
  const {currentUser} = useContext(UserContext);
 
  const closeNavHandler = ()=>{
    if(window.inner<800){
      setIsNavshowing(false);
    }
    else   setIsNavshowing(true);
  }
  return (
    <nav>
      <div className="container nav_container">
      <div className='nav_logo'>
      <Link to='/' className="stic">
          <img src={Logo} alt="" />
        </Link>
        <h3>BlogNest</h3>
      </div>
       

  {/* ==================================in Mobile Mode======================================================= */}
        { currentUser?.id && isNavshowing && <ul className='nav_up'>
       <li ><Link to="/" onClick={()=>setIsNavshowing(!isNavshowing)}>Home</Link></li>
        <li><Link to={`/profile/${currentUser?.id}`} onClick={()=>setIsNavshowing(!isNavshowing)}><b>{currentUser?.name}</b></Link></li> 
        <li><Link to="/create" onClick={()=>setIsNavshowing(!isNavshowing)}>Create Post</Link></li> 
        <li><Link to="/authors" onClick={()=>setIsNavshowing(!isNavshowing)}>Authors</Link></li> 
        <li><Link to="/logout" onClick={()=>setIsNavshowing(!isNavshowing)}>Logout</Link></li> 
        
        </ul>}
        { !currentUser?.id && isNavshowing &&<ul className='nav_up'>
       <li ><Link to="/" onClick={()=>setIsNavshowing(!isNavshowing)}>Home</Link></li>
         
        <li><Link to="/authors" onClick={()=>setIsNavshowing(!isNavshowing)}>Authors</Link></li> 
        <li><Link to="/login" onClick={()=>setIsNavshowing(!isNavshowing)}>Login</Link></li> 
        
        </ul>}

 {/* ==================================in laptopmode======================================================= */}

        {currentUser?.id && <ul className='nav_menu'>
         <li><Link to={`/profile/${currentUser?.id}`}><b>{currentUser?.name}</b></Link></li>
         <li><Link to="/create">Create Post</Link></li>
         <li><Link to="/authors">Authors</Link></li>
         <li><Link to="/logout">Logout</Link></li>
        
        </ul>}

        {!currentUser?.id && <ul className='nav_menu'>  
         <li><Link to="/authors">Authors</Link></li>
         <li><Link to="/login">Login</Link></li>      
        </ul>}
 
  {/* ==================================CLose ======================================================= */}
        <button className="nav_toggle-btn" onClick={()=>setIsNavshowing(!isNavshowing)}>
        {isNavshowing ?  <AiOutlineClose color='white'/> : <FaBarsStaggered/> }
      
        </button>
      </div>
    </nav>
  )
}

export default Header