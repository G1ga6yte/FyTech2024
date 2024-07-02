import React from "react";
import "./seventhBlock.scss"
import DubbleLetter from "../../../components/dubbleLetter/dubbleLetter";
import rectangle from "./Rectangle 140.svg"
import {useInView} from "react-intersection-observer";
import bubbleImg from "./mujer-liquida_003_HD0048.png"


function SeventhBlock (){
  const {ref: myRef1, inView: visible1} = useInView();
  const {ref: myRef2, inView: visible2} = useInView();
  const {ref: myRef3, inView: visible3} = useInView();
  const {ref: myRef4, inView: visible4} = useInView();
  
  
  
  return(
     <div className="SeventhBlock">
       <div className="headerCont">
         <div ref={myRef1} style={{backgroundImage: `url("${rectangle}")`}} className="headerBlock">
           <DubbleLetter text={"Software Testing and Quality Assurance"} trns={0.1} state={visible1}/>
         </div>
       </div>
       
       <p ref={myRef2} className={`grayPrg text1 ${visible2 ? "ActiveBlock" : ""}`}>
         Ensuring the reliability and performance of your software is our priority. We offer manual and automated testing, performance testing, acceptance testing, payment method testing, website and app QA testing, user experience testing, and localization testing. Our comprehensive QA services guarantee that your software meets the highest standards of quality.
       </p>
       
       <div className="ulCont">
         <div ref={myRef3} className="ul1 grayPrg">
           <p className={visible3 ? "ActiveBlock" : ""}>Manual and automated testing</p>
           <p className={visible3 ? "ActiveBlock" : ""}>Acceptance testing</p>
           <p className={visible3 ? "ActiveBlock" : ""}>Website & App QA Testing</p>
           </div>
  
         <div ref={myRef4} className="ul1 fromRight grayPrg">
           <p className={visible4 ? "ActiveBlock" : ""}>Performance testing</p>
           <p className={visible4 ? "ActiveBlock" : ""}>Payment Method Testing</p>
           <p className={visible4 ? "ActiveBlock" : ""}>User Experience Testing</p>
         </div>
       </div>
       
       <div className="grayPrg lastChild">
         <p className={` ${visible4 ? "ActiveBlock" : ""}`}>Performance testing</p>
       </div>
  
       <img src={bubbleImg} className="bubbleImg" alt=""/>
       
       
     </div>
  )
}

export default SeventhBlock