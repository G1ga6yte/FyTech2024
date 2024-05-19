import React, {useEffect, useState} from "react";
import "./secondBlock.scss";
import HomeSpinnerSpline1 from "../../../models/homeSpinnerSpline1/homeSpinnerSpline1";
import HomeSpinnerSpline2 from "../../../models/homeSpinnerSpline2/homeSpinnerSpline2";
import {Images} from "./images/images";
import {useCartContext} from "../../../CartContext";

import backgroundImg from "../../../background.png"
function SecondBlock({step, ref, style}) {
  const data1 = [
    {
      name: "design and branding",
      items: [
         "Content strategy",
         "Brand identity",
         "Information architecture",
         "Brand and design system development",
         "Design technology consulting",
         "Accessibility consulting",
         "Dashboard design",
         "UI/UX"
      ]
    },
    {
      name: "software developing",
      items: [
        "Application development",
        "Web development",
        "Mobile app development",
        "DevOps and cloud migration",
        "VR/AR developing",
        "Custom software development",
        "Legacy system modernization"
      ]
    }
    
  ]
  
  const data2 = [
    {
      name: "IT Consulting & Strategy",
      items: [
        "Technology roadmap development",
        "Digital transformation consulting",
        "IT project management",
        "Blockchain Consultation"
      ]
    },
    {
      name: "Software Testing & Quality Assurance ",
      items: [
        "Application development",
        "Web development",
        "Mobile app development",
        "Custom software development",
        "Legacy system modernization",
        "DevOps and cloud migration",
        "VR/AR developing"
      ]
    }
  
  ]
  
  const data3 = [
    {
      name: "Big Data & Analytics",
      items: [
        "Big data processing and analysis",
        "Business analytics",
        "Data visualization"
      ]
    },
    {
      name: "New Technologies Integration",
      items: [
        "Development of solutions based on artificial intelligence and machine learning",
        "Development of IoT (Internet of Things) applications",
        "Implementation of blockchain technology"
      ]
    }
  
  ]
  
  const [changeableData, setChangeableData] = useState(data1)
  
  const {myRef2} = useCartContext()
  
  useEffect(()=>{
    if (step === 1){
      if (changeableData !== data1){
        setChangeableData(data1)
      } else {
        setChangeableData(data3)
      }
    } else if (step === 3) {
    
    }
  }, [step])
  
  return (
     <div  style={{backgroundImage: `url("${backgroundImg}")`, position: style ? "fixed" : "relative"}} ref={ref} id="secondBlock" className="SecondBlock">
       <HomeSpinnerSpline1/>
       <HomeSpinnerSpline2/>
       <div ref={myRef2}></div>
       
       <div className="mainBlock">
         
         <div className="headerBlock">
           <div className="flexGrow"></div>
           <div className="underLinedText no-select">
             <p>what we do</p>
             <div className="line"></div>
           </div>
         </div>
         
         <div className="circleCont">
           <img className="overImg" src={Images.overImg} alt=""/>
           
           
           <div className="circleBlock">
             
             <div className="countBlock">
               <span className={`count ${step === 1 && "activeSection"}`}>1</span>
               <span className={`count ${step === 2 && "activeSection"}`}>2</span>
               <span className={`count ${step === 3 && "activeSection"}`}>3</span>
               <span className={`count ${step === 4 && "activeSection"}`}>4</span>
             </div>
             <div className="line1"></div>
             <div className="line2"></div>

            

           </div>
           
         </div>
       
       
       </div>
     
     </div>
  );
}

export default SecondBlock;