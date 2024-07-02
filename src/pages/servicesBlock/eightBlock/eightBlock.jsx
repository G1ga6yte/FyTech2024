import React from "react";
import "./eightBlock.scss"
import DubbleLetter from "../../../components/dubbleLetter/dubbleLetter";
import {useInView} from "react-intersection-observer";
import rectangle from "./Rectangle 140.svg"
import bubble from "./mujer-liquida_003_HD0048.png"


function EightBlock (){
  const {ref: myRef1, inView: visible1} = useInView();
  const {ref: myRef2, inView: visible2} = useInView();
  const {ref: myRef3, inView: visible3} = useInView();
  const {ref: myRef4, inView: visible4} = useInView();
  
  
  return(
     <div className="EightBlock">
       <div ref={myRef1} style={{backgroundImage: `url("${rectangle}")`}} className="headerBlock">
         <DubbleLetter text={"New Technologies Integration"} trns={0.1} state={visible1}/>
       </div>
       
       <p ref={myRef2} className={`grayPrg text1 ${visible2 ? "ActiveBlock" : ""}`}>
         We help you stay ahead with the latest technologies by developing solutions based on AI, machine learning, IoT, and blockchain. Our integration services ensure these technologies work seamlessly within your existing systems to drive innovation and efficiency.
       </p>
  
       <div ref={myRef3} className="ul1 grayPrg">
         <p className={visible3 ? "ActiveBlock" : ""}>Development of solutions based on artificial intelligence and machine learning</p>
         <p className={visible3 ? "ActiveBlock" : ""}>Development of IoT (Internet of Things) applications</p>
         <p className={visible3 ? "ActiveBlock" : ""}>Implementation of blockchain technology</p>
       </div>
  
       <img src={bubble} className="bubbleImg" alt=""/>
       
     </div>
  )
}

export default EightBlock