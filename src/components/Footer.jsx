import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ConfettiExplosion from 'react-confetti-explosion';


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
      <div className="footer_copyright">
        <small>All Rights Reserved &copy; Copyright , DHAVAL RATHOD</small>
      </div>

    
    </footer>
  )
}

export default Footer