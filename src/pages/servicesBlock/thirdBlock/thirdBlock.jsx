import React from "react";
import {Images} from "./image/images.js";
import DubbleLetter from "../../../components/dubbleLetter/dubbleLetter";
import {useInView} from "react-intersection-observer";
import "./thirdBlock.scss"

function ThirdBlock (){
  const {ref: myRef1, inView: visible1} = useInView();
  const {ref: myRef2, inView: visible2} = useInView();
  const {ref: myRef3, inView: visible3} = useInView();
  const {ref: myRef4, inView: visible4} = useInView();
  const {ref: myRef5, inView: visible5} = useInView();
  
  
  
  return(
     <div className="ThirdBlockS">
       <div className="headerCont">
         <div ref={myRef1} style={{backgroundImage: `url("${Images.rectangle1}")`}} className="headerBlock">
           <DubbleLetter text={"Design and Branding"} trns={0.1} state={visible1}/>
         </div>
         
         <p ref={myRef2} className={`grayPrg text1 ${visible2 ? "ActiveBlock" : ""}`}>
           We help businesses build strong brand identities and create compelling digital experiences. Our services include content strategy, brand identity development, and information architecture. We develop cohesive brand and design systems and offer consulting on design technologies. Our UI/UX expertise spans native mobile apps, enterprise software, web design, wearables, interactive installations, and AR/VR. We also provide accessibility consulting and specialize in creating user-friendly dashboards.
         </p>
       </div>
       
       <div className="ulCont">
         
         <div ref={myRef3} className="ul1 grayPrg">
           <p className={visible3 ? "ActiveBlock" : ""}>UI/UX for enterprise software</p>
           <p className={visible3 ? "ActiveBlock" : ""}>UI/UX for web design</p>
           <p className={visible3 ? "ActiveBlock" : ""}>Accessibility consulting</p>
           <p className={visible3 ? "ActiveBlock" : ""}>UI/UX for interactive installations</p>
           <p className={visible3 ? "ActiveBlock" : ""}>UI/UX for wearables</p>
           <p className={visible3 ? "ActiveBlock" : ""}>Brand Identity</p>
           <p className={visible3 ? "ActiveBlock" : ""}>UI/UX for augmented reality (AR) and virtual reality (VR)</p>
           <p className={visible3 ? "ActiveBlock" : ""}>Dashboard design</p>
         </div>
  
         <div ref={myRef4} className="ul2 grayPrg">
           <p className={visible4 ? "ActiveBlock" : ""}>Content strategy</p>
           <p className={visible4 ? "ActiveBlock" : ""}>Brand identity</p>
           <p className={visible4 ? "ActiveBlock" : ""}>Brand and design system development</p>
           <p className={visible4 ? "ActiveBlock" : ""}>Information architecture</p>
           <p className={visible4 ? "ActiveBlock" : ""}>UI/UX for native mobile apps</p>
           <p className={visible4 ? "ActiveBlock" : ""}>Design technology consulting</p>
         </div>
         
       </div>
  
       <img ref={myRef5} src={Images.vector1} className={`vectorImg ${visible5 ? "ActiveBlock" : ""}`} alt=""/>
       
       
       
     </div>
  )
}

export default ThirdBlock