import React from "react";
import "./secondBlock.scss"
import {useInView} from "react-intersection-observer";
import {useCartContext} from "../../../CartContext";
import {Images} from "./images/images";


function SecondBlock (){
  const {loader, loaded} = useCartContext()
  const {ref: myRef1, inView: visible1} = useInView();
  const {ref: myRef2, inView: visible2} = useInView();
  const {ref: myRef3, inView: visible3} = useInView();
  
  return(
     <div className="SecondBlockProject">
       <div className="textBlock">
         <p ref={myRef1} className={`miniHeader ${!loader && loaded ? visible1 ? "ActiveText" : "" : ""}`}>Customers' goal / challenge</p>
         <p ref={myRef2} className={`grayPrg32 ${!loader && loaded ? visible2 ? "ActiveText" : "" : ""}`}>The Customer is developing a complex product in the e-finance domain that allows users to keep all necessary banking functionality in one app. The Futuro Team had to redone and significantly improve the fundamental web part with the new functionality, develop a mobile application for prepaid card programs, and then integrate them together.</p>
       </div>
       
       <div ref={myRef3} className={`imgBlock ${!loader && loaded ? visible3 ? "ActiveText" : "" : ""}`} style={{backgroundImage: `url("${Images.img1}")`}}></div>
     </div>
  )
}

export default SecondBlock