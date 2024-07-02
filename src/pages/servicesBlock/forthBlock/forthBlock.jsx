import React from "react";
import {useInView} from "react-intersection-observer";
import "./forthBlock.scss"
import {Images} from "../secondBlock/images/images";
import DubbleLetter from "../../../components/dubbleLetter/dubbleLetter";
import bubbleImg from "./mujer-liquida_003_HD0048.png"

function ForthBlock (){
  const {ref: myRef1, inView: visible1} = useInView();
  const {ref: myRef2, inView: visible2} = useInView();
  const {ref: myRef3, inView: visible3} = useInView();
  
  
  return(
     <div className="ForthBlockS">
       <div ref={myRef1} style={{backgroundImage: `url("${Images.rectangle}")`}} className="headerBlock">
         <DubbleLetter text={"IT Consulting and Strategy"} trns={0.1} state={visible1}/>
       </div>
       
       <div className="textCont">
         <p ref={myRef2} className={`grayPrg text1 ${visible2 ? "ActiveBlock" : ""}`}>
           Our IT consulting services help you plan and execute your technology initiatives. We offer technology roadmap development, digital transformation consulting, IT project management, and startup business plan analysis to ensure your projects align with your business goals and succeed in the competitive market.
         </p>
  
         <div ref={myRef3} className="ul1 grayPrg">
           <p className={visible3 ? "ActiveBlock" : ""}>Technology roadmap development</p>
           <p className={visible3 ? "ActiveBlock" : ""}>Digital transformation consulting</p>
           <p className={visible3 ? "ActiveBlock" : ""}>IT project management</p>
           <p className={visible3 ? "ActiveBlock" : ""}>Startup business plan and analysis</p>
  
         </div>
       </div>
  
       <img src={bubbleImg} className="bubbleImg" alt=""/>
       
       
     </div>
  )
}

export default ForthBlock