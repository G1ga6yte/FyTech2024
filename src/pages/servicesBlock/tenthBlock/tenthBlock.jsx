import React from "react";
import {useInView} from "react-intersection-observer";
import "./tenthBlock.scss"
import DubbleLetter from "../../../components/dubbleLetter/dubbleLetter";
import {Images} from "./images/images";



function TenthBlock (){
  const {ref: myRef1, inView: visible1} = useInView();
  const {ref: myRef2, inView: visible2} = useInView();
  const {ref: myRef3, inView: visible3} = useInView();
  
  
  return(
     <div className="TenthBlock">
  
       <div ref={myRef1} style={{backgroundImage: `url("${Images.rectangle}")`}} className="headerBlock">
         <DubbleLetter text={"Advanced Services"} trns={0.1} state={visible1}/>
       </div>
       
       <p ref={myRef2} className={`grayPrg text1 ${visible2 ? "ActiveBlock" : ""}`}>
         Our advanced services include developing AI and machine learning solutions, creating IoT applications, and implementing cloud computing strategies. We enhance your development processes with DevOps and Agile methodologies and optimize customer experience (CX) management to boost satisfaction and loyalty.
       </p>
  
       <div ref={myRef3} className="ul1 grayPrg">
         <p className={visible3 ? "ActiveBlock" : ""}>- **Artificial intelligence and machine learning**</p>
         <p className={visible3 ? "ActiveBlock" : ""}>- **Internet of Things (IoT)** - **Cloud computing**</p>
         <p className={visible3 ? "ActiveBlock" : ""}>- **DevOps** - **Agile development**</p>
         <p className={visible3 ? "ActiveBlock" : ""}>**Customer experience (CX) management**</p>
       </div>
       
     </div>
  )
}

export default TenthBlock