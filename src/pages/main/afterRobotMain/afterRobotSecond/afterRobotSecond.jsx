import React from "react";
import "./afterRobotSecond.scss";
import {useInView} from "react-intersection-observer";
import {Images} from "./images/images";
import cardSvg from "./card.svg"

function AfterRobotSecond() {
  const {ref: myRef1, inView: visible1} = useInView();
  const {ref: myRef2, inView: visible2} = useInView();
  const {ref: myRef3, inView: visible3} = useInView();
  const {ref: myRef4, inView: visible4} = useInView();
  
  
  
  return (
     <div className="AfterRobotSecond no-select">
       
       <div ref={myRef1} className="headerBlock">
         <div className="flexGrow"></div>
         <div className={`underLinedText no-select ${visible1 ? "underLinedTextAnim" : ""}`}>
           <p>our values</p>
           <div className="line"></div>
         </div>
       </div>
       
       <img src={Images.backgroundImage} alt="" className="backgroundImage"/>
       <img src={Images.bubble4} className="bubbleImage4" alt=""/>
       <img src={Images.bubble5} className="bubbleImage5" alt=""/>
       <img src={Images.glassImg} className="glassImage" alt=""/>
       
       <div className="cardsCont">
         <div ref={myRef2} className={`cardBlock ${visible2 ? "activeCardBlock" : ""}`}>
           <img src={cardSvg} className="stand" alt=""/>
           
           <p className="underText">
             <span>We strive to create products of</span>
             <span>the highest quality</span>
             <span>that meet the needs</span>
             <span>of our clients</span>
           </p>
           
         </div>
  
         <div ref={myRef3} className={`cardBlock ${visible3 ? "activeCardBlock" : ""}`}>
           <img src={cardSvg} className="stand" alt=""/>
    
           <p className="underText">
             <span>We are always looking for new</span>
             <span> ways to improve our </span>
             <span>products and services</span>
           </p>
  
         </div>
  
         <div ref={myRef4} className={`cardBlock ${visible4 ? "activeCardBlock" : ""}`}>
           <img src={cardSvg} className="stand" alt=""/>
    
           <p className="underText">
             <span>We work closely with our clients</span>
             <span>to understand their needs</span>
             <span>and create products that </span>
             <span>meet their goals</span>
           </p>
  
         </div>
       </div>
     
     
     </div>
  );
}

export default AfterRobotSecond;