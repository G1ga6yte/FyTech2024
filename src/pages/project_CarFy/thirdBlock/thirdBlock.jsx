import React from "react";
import {Images} from "./images/images";
import "./thirdBlock.scss"
import {useInView} from "react-intersection-observer";
import HomeSpinnerSpline1 from "../../../models/homeSpinnerSpline1/homeSpinnerSpline1";

function ThirdBlock (){
  const {ref: myRef1, inView: visible1} = useInView();
  const {ref: myRef2, inView: visible2} = useInView();
  const {ref: myRef3, inView: visible3} = useInView();
  const {ref: myRef4, inView: visible4} = useInView();
  const {ref: myRef5, inView: visible5} = useInView();
  
  
  
  
  return(
     <div className="ThirdBlockProject">
       <img ref={myRef1} src={Images.dottedLine} className={`dottedLine ${visible1 ? "activeLine" : ""}`} alt=""/>
     
       <div className="mainProject">
         
         <div className="imagesCont">
            <div ref={myRef4} className="imgBlock">
              <img src={Images.mobileImg1} className={`img ${visible4 ? "activeImg" : ""}`} alt=""/>
              <img src={Images.mobileImg2} className={`img ${visible4 ? "activeImg" : ""}`} alt=""/>
              <img src={Images.mobileImg3} className={`img ${visible4 ? "activeImg" : ""}`} alt=""/>
              <img src={Images.mobileImg4} className={`img ${visible4 ? "activeImg" : ""}`} alt=""/>
              <img src={Images.mobileImg5} className={`img ${visible4 ? "activeImg" : ""}`} alt=""/>
            </div>
           <div ref={myRef5} className="imgBlock">
             <img src={Images.mobileImg6} className={`img ${visible5 ? "activeImg" : ""}`} alt=""/>
             <img src={Images.mobileImg7} className={`img ${visible5 ? "activeImg" : ""}`} alt=""/>
             <img src={Images.mobileImg8} className={`img ${visible5 ? "activeImg" : ""}`} alt=""/>
             <img src={Images.mobileImg9} className={`img ${visible5 ? "activeImg" : ""}`} alt=""/>
             <img src={Images.mobileImg10} className={`img ${visible5 ? "activeImg" : ""}`} alt=""/>
           </div>
         </div>
         
         <div className="textBlock">
           <p ref={myRef2} className={`miniHeader ${visible2 ? "ActiveText" : ""}`}>Tech stack</p>
           
           <p ref={myRef3} className={`grayPrg32 ${visible3 ? "ActiveText" : ""}`}>
             <span>Node.js</span>
             <span>React.js</span>
             <span>AWS</span>
             <span>React Native</span>
             <span>Twillio</span>
             <span>ASP .NET</span>
           </p>
         </div>
         
       </div>
       
       <div className="SplineCont">
        <HomeSpinnerSpline1/>
       </div>
       
     </div>
  )
}

export default ThirdBlock