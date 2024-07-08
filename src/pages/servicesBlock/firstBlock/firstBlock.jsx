import React from "react";
import {useCartContext} from "../../../CartContext";
import "./firstBlock.scss"
import {useInView} from "react-intersection-observer";
import {Images} from "./images/images";

function FirstBlock (){
  const {loader} = useCartContext()
  const {ref: myRef1, inView: visible1} = useInView();
  const {ref: myRef2, inView: visible2} = useInView();
  const {ref: myRef3, inView: visible3} = useInView();
  const {ref: myRef4, inView: visible4} = useInView();
  const {ref: myRef5, inView: visible5} = useInView();
  
  
  const ServicesDate = [
    {
      id: 1,
      service: "Software development"
    },
    {
      id: 2,
      service: "Design and Branding"
    },
    {
      id: 3,
      service: "IT Consulting and Strategy"
    },
    {
      id: 4,
      service: "Big Data and Analytics"
    },
    {
      id: 5,
      service: "web 3.0"
    },
    {
      id: 6,
      service: "Software Testing and Quality Assurance"
    },
    {
      id: 7,
      service: "New Technologies Integration"
    },
    {
      id: 8,
      service: "3D and Motion Design"
    },
    {
      id: 9,
      service: "Advance Services"
    }
  ]
  
  
  return(
     <div className="FirstBlockS">
  
       <div ref={myRef1} className="headerBlock">
         <div className={`underLinedText ${!loader && visible1 ?  "underLinedTextAnim" : ""}`}>
           <p>services</p>
           <div className="line"></div>
         </div>
         <div className="flexGrow"></div>
       </div>
       
       
       <div className="mainCont">
         
         <div className="textBlock">
           <p ref={myRef2} className={`grayPrg ${!loader && visible2 ? "ActiveBlock" : ""}`}>At our company, we offer a comprehensive suite of services designed to meet all your technology and design needs. Here’s an overview of what we provide</p>
           <img className="img" src={Images.img1} alt=""/>
         </div>
         
         <div  className={`servicesCont`}>
           
           <div ref={myRef3} style={{marginBottom: `75px`}} className="servicesLineS">
             {ServicesDate.map((el, index)=>{
               if (index < 3){
                 return(
                    <div key={index} className={`serviceBlock ${!loader && visible3 ? "ActiveBlock" : ""}`}>
                      <p className="count"><span>0</span>{el.id}</p>
                      <p className="servicePrg">{el.service}</p>
                    </div>
                 )
               }
             })}
           </div>
  
           <div style={{marginBottom: `50px`, marginRight: `60px`}} ref={myRef4} className={`servicesLineS`}>
             {ServicesDate.map((el, index)=>{
               if (index > 2 && index <6){
                 return(
                    <div key={index} className={`serviceBlock ${!loader && visible4 ? "ActiveBlock" : ""}`}>
                      <p className="count"><span>0</span>{el.id}</p>
                      <p className="servicePrg">{el.service}</p>
                    </div>
                 )
               }
             })}
           </div>
  
           <div style={{ marginRight: `-40px`}} ref={myRef5} className={`servicesLineS`}>
             {ServicesDate.map((el, index)=>{
               if (index > 5 && index <10){
                 return(
                    <div key={index} className={`serviceBlock ${!loader && visible5 ? "ActiveBlock" : ""}`}>
                      <p className="count"><span>0</span>{el.id}</p>
                      <p className="servicePrg">{el.service}</p>
                    </div>
                 )
               }
             })}
           </div>
         
         
         </div>
         
       </div>
       
       
     </div>
  )
}

export default FirstBlock