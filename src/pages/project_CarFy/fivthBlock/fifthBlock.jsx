import React, {useState} from "react";
import "./fifthBlock.scss"
import {Images} from "./images/images";
import {useInView} from "react-intersection-observer";
import DubbleLetter from "../../../components/dubbleLetter/dubbleLetter";

function FifthBlock (){
  const {ref: myRef1, inView: visible1} = useInView();
  const {ref: myRef2, inView: visible2} = useInView();
  const {ref: myRef3, inView: visible3} = useInView();
  const [btn1, setBtn1] = useState(false)
  
  
  
  return(
     <div className="fifthBlock">
       
       <div ref={myRef1} className={`imgBlock ${visible1 ? "ActiveText" : ""}`} style={{backgroundImage: `url("${Images.img3}")`}}></div>
       
       <p ref={myRef2} className={`header ${visible2 ? "ActiveText" : ""}`}>Would like the same project?</p>
     
       <button ref={myRef3} onMouseOver={()=>setBtn1(true)} onMouseLeave={()=>setBtn1(false)} className={`contactUsBtn ${visible3 ? "ActiveText" : ""}`}>
        <DubbleLetter text={"Contact us"} trns={0.1} state={btn1}/>
         <img src={Images.arrowRight} className="arrowImg" alt=""/>
       </button>
       
     </div>
  )
}

export default FifthBlock