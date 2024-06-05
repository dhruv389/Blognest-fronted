import React from 'react'
import { Link } from 'react-router-dom'
import notfound from "../Images/error.png"

const ErrorPage = ({text}) => {
  return (
  <section className="error-page" style={{textAlign:"center"}}>
    <div className="center">
     <img src={notfound} style={{height:"13rem",width:"12rem",objectFit:"fill" , filter: "drop-shadow(5px 5px 5px #222)" }} alt="" />
    <h2>{text}</h2>
      <Link to="/" className='btn primary'>GO BACK HOME</Link>
      
      
    </div>
  </section>

  )
}

export default ErrorPage