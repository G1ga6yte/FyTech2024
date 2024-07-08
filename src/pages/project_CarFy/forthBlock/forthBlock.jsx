import React from "react";
import {useInView} from "react-intersection-observer";
import "./forthBlock.scss"
import {Images} from "./images/images";

function ForthBlock () {
  const {ref: myRef1, inView: visible1} = useInView();
  const {ref: myRef2, inView: visible2} = useInView();
  const {ref: myRef3, inView: visible3} = useInView();
  const {ref: myRef4, inView: visible4} = useInView();
  const {ref: myRef5, inView: visible5} = useInView();
  const {ref: myRef6, inView: visible6} = useInView();
  
  
  
  return(
     <div className="ForthBlockProject">
      
       <div className="lineBlock">
         <div className="textBlock">
           <p ref={myRef1} className={`miniHeader ${visible1 ? "ActiveText" : ""}`}>Product develop and Objectives</p>
           <p ref={myRef2} className={`grayPrg32 ${visible2 ? "ActiveText" : ""}`}>Our initial task was a full rebranding and creating a mobile app with an average load of 500k users per day. Punto Pago required a new strategy as they were moving towards being a multifunctional app. Users needed to be able to check their account status and make a payment at any time. The mobile app made it possible identifying the existing clients as well as attracting new ones.</p>
           <div className="lineBlock">
             <div className="point"></div>
             <div className="circle"></div>
             <div className="point"></div>
             <div className="circle"></div>
             <div className="point"></div>
           </div>
         </div>
         <div ref={myRef3} className={`imgBlock ${visible3 ? "ActiveText" : ""}`} style={{backgroundImage: `url("${Images.img1}")`}}></div>
       </div>
       
       <div className="middleLine">
         <div className="point"></div>
         <div className="circle"></div>
         <div className="point"></div>
         <div className="circle"></div>
         <div className="point"></div>
         <div className="circle"></div>
         <div className="point"></div>
       </div>
  
       <div className="lineBlock">
         <div ref={myRef4} className={`imgBlock ${visible4 ? "ActiveText" : ""}`} style={{backgroundImage: `url("${Images.img2}")`}}></div>
         <div className="textBlock">
           <p ref={myRef5} className={`miniHeader ${visible5 ? "ActiveText" : ""}`}>Multi-service platform and fintech app</p>
           <p ref={myRef6} className={`grayPrg32 ${visible6 ? "ActiveText" : ""}`}>Punto Pago provides multiple services, including payments, spendings control and fast delivery marketplace. We have explored the best scaling options considering growth and focused on not just consumer numbers, but transaction numbers.</p>
           <div className="lineBlock">
             <div className="point"></div>
             <div className="circle"></div>
             <div className="point"></div>
             <div className="circle"></div>
             <div className="point"></div>
           </div>
         </div>
       </div>
       
     </div>
  )
}

export default ForthBlock