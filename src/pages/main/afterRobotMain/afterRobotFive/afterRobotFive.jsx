import React, {useState} from "react";
import "./afterRobotFive.scss"
import headBackground from "./headBackground.png"
import DubbleLetter from "../../../../components/dubbleLetter/dubbleLetter";
import {useInView} from "react-intersection-observer";
import Spline from "@splinetool/react-spline";
import splineModel from "./nexbot_robot_character_concept_copy.spline"
function AfterRobotFive (){
  const { ref: myRef1, inView: visible1 } = useInView();
  const { ref: myRef2, inView: visible2 } = useInView();
  const { ref: myRef3, inView: visible3 } = useInView();
  const { ref: myRef4, inView: visible4 } = useInView();
  const { ref: myRef5, inView: visible5 } = useInView();
  const { ref: myRef6, inView: visible6 } = useInView();
  const { ref: myRef7, inView: visible7 } = useInView();
  const { ref: myRef8, inView: visible8 } = useInView();
  const { ref: myRef9, inView: visible9 } = useInView();
  
  const [btn1, setBtn1] = useState(false)
  
  
  return(
     <div className="AfterRobotFive no-select">
       <img src={headBackground} className="headBackground" alt=""/>
  
       
       
     
         <div ref={myRef1} className="textLine textStart">
           <p className="text"><DubbleLetter text={"thanks"} trns={0.3} state={visible1}/></p>
         </div>
         <div ref={myRef2} className="textLine textEnd">
           <p className="text"><DubbleLetter text={"for"} trns={0.3} state={visible2}/></p>
         </div>
  
         <div ref={myRef3} className="textLine textBetween">
           <p className="text"><DubbleLetter text={"attention"} trns={0.2} state={visible3}/></p>
    
           <button onMouseLeave={()=>setBtn1(false)} onMouseOver={()=>setBtn1(true)} className="getInTouchBtn">
             <DubbleLetter text={"get in touch"} state={btn1} trns={0.1}/>
           </button>
         </div>
         <div ref={myRef4} className="textLine textEnd">
           <p className="text"><DubbleLetter text={"but"} trns={0.3} state={visible4}/> </p>
         </div>
  
         <div ref={myRef5} className="textLine textStart">
           <p className="text"><DubbleLetter text={"how about"} trns={0.2} state={visible5}/></p>
         </div>
         <div ref={myRef6} className="textLine textEnd">
           <p className="text"><DubbleLetter text={"we do thinks"} trns={0.2} state={visible6}/></p>
         </div>
  
         <div ref={myRef7} className="textLine textStart">
           <p className="text"><DubbleLetter text={"or two"} trns={0.3} state={visible7}/></p>
         </div>
         <div ref={myRef8} className="textLine textEnd">
           <p className="text"><DubbleLetter text={"together"} trns={0.2} state={visible8}/></p>
         </div>
  
       <button onMouseLeave={()=>setBtn1(false)} onMouseOver={()=>setBtn1(true)} className="getInTouchBtn tabletBtn">
         <DubbleLetter text={"get in touch"} state={btn1} trns={0.1}/>
       </button>
  
       <div className="splineBlock">
         <Spline scene={splineModel}/>
       </div>
       
     </div>
  )
}

export default AfterRobotFive