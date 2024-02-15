import React from 'react'
import { Link } from 'react-router-dom'
import notfound from "../Images/error.png"

const ErrorPage = () => {
  return (
  <section className="error-page">
    <div className="center">
    <img src={notfound} style={{height:"6rem",width:"6rem"}} alt="" />
    <h2>Page not Found</h2>
      <Link to="/" className='btn primary'>GO BACK HOME</Link>
      
      
    </div>
  </section>

  )
}

export default ErrorPage