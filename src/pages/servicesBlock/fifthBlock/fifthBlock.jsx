import React from "react";
import {Images} from "../thirdBlock/image/images";
import DubbleLetter from "../../../components/dubbleLetter/dubbleLetter";
import {useInView} from "react-intersection-observer";
import "./fifthBlock.scss"
import bubbleImg from "./mujer-liquida_003_HD0048.png"


function FifthBlock (){
  const {ref: myRef1, inView: visible1} = useInView();
  const {ref: myRef2, inView: visible2} = useInView();
  const {ref: myRef3, inView: visible3} = useInView();
  
  
  
  return(
     <div className="FifthBlockS">
  
       <div className="headerCont">
         <div ref={myRef1} style={{backgroundImage: `url("${Images.rectangle1}")`}} className="headerBlock">
           <DubbleLetter text={"Big Data and Analytics"} trns={0.1} state={visible1}/>
         </div>
       </div>
       
  
       <div className="textCont">
         <p ref={myRef2} className={`grayPrg text1 ${visible2 ? "ActiveBlock" : ""}`}>
           We turn your data into valuable insights with our big data processing, business analytics, and data visualization services. Our expertise in handling large datasets ensures you can make informed decisions based on accurate data analysis.         </p>
    
         <div ref={myRef3} className="ul1 grayPrg">
           <p className={visible3 ? "ActiveBlock" : ""}>Big data processing and analysis</p>
           <p className={visible3 ? "ActiveBlock" : ""}>Business analytics</p>
           <p className={visible3 ? "ActiveBlock" : ""}>Data visualization</p>
    
         </div>
       </div>
  
       <img src={bubbleImg} className="bubbleImg" alt=""/>
     
     </div>
  )
}

export default FifthBlock