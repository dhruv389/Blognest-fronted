import React from "react";

import "../index.css";
import { Link } from "react-router-dom";
import graph from "../Images/graph.png";
import sti from "../Images/ho2.png";
import st2 from "../Images/ho1.png";

import Typewriter from 'typewriter-effect';

import { Tilt } from "@jdion/tilt-react";


const Fronted = () => {
 
  

  return (
    <>
    

  
      <div className="home1">
      
        <div className="sidegraph">
        <div className="texttype"> <Typewriter
  options={{
    strings: ['Welcome To Blog-Nest👋', 'Founder Of BlogNest: Dhaval-Rathod'],
    autoStart: true,
    loop: true,
  }}

  
/></div>
 <div className="studyImage" ><img src= {sti} alt="" /></div>
         {/* <div className="studyImage"><img src= {sti} alt="" /></div>  */}
        </div>
      </div>
  <hr />
      <div className="home2">
         <div className="leftImage1"> <img src={st2} alt="" /></div>
         <div className="righttext" >
            <h1 >Lets see Your Imagination</h1>
                      

         </div>

      </div>

      
    </>
  );
};

export default Fronted;
