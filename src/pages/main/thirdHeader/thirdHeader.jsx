import React from "react";
import "./thirdHeader.scss"

import backgroundImg from "./overWhiteCover.png"
function ThirdHeader (){
  
  return(
     <div  className="ThirdHeader ">
       <img className="background" src={backgroundImg} alt=""/>
       
       <div className="headerBlock no-select">
         <p className="prgBlock">creating a digital environment for the user</p>
         
         <div className="flexGrowHere"></div>
         <div className="header">
           
           <div className="underLinedText">
             <p>projects</p>
             <div className="line"></div>
           </div>
           
           <button className="seeMoreBtn">see more</button>
           
         </div>
         
         <div className="flexBlock"></div>
       </div>
       
     </div>
  )
}

export default ThirdHeader