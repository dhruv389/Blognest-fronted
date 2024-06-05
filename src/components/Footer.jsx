import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ConfettiExplosion from 'react-confetti-explosion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const [isExploding, setIsExploding] = useState(false);
  
  return (
    <footer>
     
      <ul className='footer_categories'>
        <li><Link to="posts/categories/Agriculture" onClick={()=> setIsExploding(true)}>Agriculture</Link></li>
        {isExploding && <ConfettiExplosion duration={"5000"} />}
        
        <li><Link to="posts/categories/Business">Business</Link></li>
        <li><Link to="posts/categories/Education">Education</Link></li>
        <li><Link to="posts/categories/Entertainment">Entertainment</Link></li>
        <li><Link to="posts/categories/Art">Art</Link></li>
        <li><Link to="posts/categories/Investment">Investment</Link></li>
        <li><Link to="posts/categories/Uncategorized">Uncategoried</Link></li>
        <li><Link to="posts/categories/Weather">Weather</Link></li>
      </ul>
      <div className="footer_media">
          <a href="https://github.com/dhruv389"><FaGithub height={"1.6rem"} width={"1.6rem"}/> </a>

            <a href="https://www.linkedin.com/in/rathod-dhaval-5b9212276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin/></a>

           <a href="https://twitter.com/Dhavalrathod389"> <FaXTwitter/></a> 

           <a href="https://www.instagram.com/dhavalrathod9/"><FaInstagram/></a> 
      </div>
      <div className="footer_copyright">
        <small>All Rights Reserved &copy; Copyright , DHAVAL RATHOD</small>
      </div>
      

    
    </footer>
  )
}

export default Footer