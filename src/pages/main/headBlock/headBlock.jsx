import React from "react";
import HeadSpline from "../../../models/homeHeadSpline/headSpline";
import "./headBlock.scss";

function HeadBlock() {
  return (
     <div className="HeadBlock">
       <HeadSpline/>
       
       <div className="centerTextBlock no-select">
         <div className="upBlockText">
           <p className="text">We are</p>
           <p className="text">We are</p>
           <p className="text">We are</p>
         </div>
  
         <p className="header">Digital</p>
  
         <div className="downBlockText">
           <p className="text">Agency</p>
           <p className="text">Agency</p>
           <p className="text">Agency</p>
         </div>
       </div>
       
       
       <div className="bottomBlock">
        
        <div className="bottomHeader no-select">
          <div className="textBlock">
            <span>Made</span>
            <span>easy </span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
            <path d="M4 85L84 5M84 0V70.1765M84 5H14.8738" stroke="#FF6C2C" strokeWidth="10"/>
          </svg>
        </div>
  
         <div className="socialLinksBlock">
           <a href="/" target="_blank" className="socialLink">Instagram</a>
           <a href="/" target="_blank" className="socialLink">Facebook</a>
           <a href="/" target="_blank" className="socialLink">Linkedin</a>
           <a href="/" target="_blank" className="socialLink">Twitter</a>

         </div>
         
         <div className="flexGrow3"></div>

       </div>
     
     
     </div>
  );
}

export default HeadBlock;