import React from "react";
import DubbleLetter from "../../../components/dubbleLetter/dubbleLetter";
import {useInView} from "react-intersection-observer";
import rectangle from "./Rectangle 140.svg"
import "./ninthBlock.scss"

function NinthBlock (){
  const {ref: myRef1, inView: visible1} = useInView();
  const {ref: myRef2, inView: visible2} = useInView();
  const {ref: myRef3, inView: visible3} = useInView();
  const {ref: myRef4, inView: visible4} = useInView();
  
  
  
  return(
     <div className="NinthBlock">
       <div className="headerCont">
         <div ref={myRef1} style={{backgroundImage: `url("${rectangle}")`}} className="headerBlock">
           <DubbleLetter text={"3D and Motion Design"} trns={0.1} state={visible1}/>
         </div>
       </div>
       
       <p ref={myRef2} className={`grayPrg text1 ${visible2 ? "ActiveBlock" : ""}`}>
         In addition to traditional design services, we offer expertise in 3D visualization and motion design. Our team uses industry-leading software such as:
       </p>
       
       <ul ref={myRef3} className={`grayPrg text2 ${visible3 ? "ActiveBlock" : ""}`}>
         <li>•	3D Visualization: Unity, Blender, Autodesk Maya</li>
         <li>Motion Design: Adobe After Effects, Cinema 4D, Houdini</li>
       </ul>
       
       <p ref={myRef4} className={`grayPrg text3 ${visible4 ? "ActiveBlock" : ""}`}>
         We create captivating animations and interactive experiences to enhance your digital presence and engage your audience in innovative ways.
       </p>
       
       
     </div>
  )
}

export default NinthBlock