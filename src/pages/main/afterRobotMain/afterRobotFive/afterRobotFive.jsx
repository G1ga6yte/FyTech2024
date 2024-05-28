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
       <img  src={headBackground} className="headBackground" alt=""/>
  
       <svg ref={myRef9} className={`bulletsSVG ${visible9 ? "":"activeSVG"}`} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1546 141" fill="none">
         <path d="M11 43L0 26.5L40.5 43H11Z" fill="#121212"/>
         <path d="M95 60L87 32.5L173.5 60H95Z" fill="#121212"/>
         <path d="M63 60L59.5 43H72L79 60H63Z" fill="#121212"/>
         <path d="M183 38.5L173.5 23.5L201 32.5L183 38.5Z" fill="#121212"/>
         <path d="M141 19.5L123.5 14.5L146 32.5L141 19.5Z" fill="#121212"/>
         <path d="M266.5 32.5H230.5V35.5V46.5H257L266.5 32.5Z" fill="#121212"/>
         <path d="M332.5 43L306.5 23.5V38.5L332.5 43Z" fill="#121212"/>
         <path d="M332.5 23.5L317 14.5L326 9.5L345 19.5L332.5 23.5Z" fill="#121212"/>
         <path d="M367.5 54.5L364 35.5L367.5 38.5L398.5 32.5L395.5 51.5L367.5 54.5Z" fill="#121212"/>
         <path d="M417.5 19.5H398.5L428.5 3L417.5 19.5Z" fill="#121212"/>
         <path d="M471.5 38.5L435.5 43V38.5L465.5 32.5L471.5 38.5Z" fill="#121212"/>
         <path d="M510.5 23.5L493 19.5V35.5L503 32.5L510.5 23.5Z" fill="#121212"/>
         <path d="M506 9.5H493V0L506 9.5Z" fill="#121212"/>
         <path d="M551 46.5L528 38.5L551 23.5L566 26.5L551 46.5Z" fill="#121212"/>
         <path d="M581 14.5L554 6L558.5 0H587L581 14.5Z" fill="#121212"/>
         <path d="M644.5 23.5L616.5 46.5L653 35.5L644.5 23.5Z" fill="#121212"/>
         <path d="M666.5 26.5L662 9.5L671 3L686 23.5L666.5 26.5Z" fill="#121212"/>
         <path d="M794.5 78.5L758 35.5L852 51.5L794.5 78.5Z" fill="#121212"/>
         <path d="M931.5 51.5L922 26.5L968 19.5L1005 60L931.5 51.5Z" fill="#121212"/>
         <path d="M1184.5 78.5H1057.5L1091 35.5L1184.5 78.5Z" fill="#121212"/>
         <path d="M1251.5 78.5L1216.5 46.5L1299.5 19.5L1288 60L1251.5 78.5Z" fill="#121212"/>
         <path d="M1369.5 141L1328 93L1339 78.5L1409 125L1369.5 141Z" fill="#121212"/>
         <path d="M1530 60L1506.5 102.5L1494.26 54.5L1530 60Z" fill="#121212"/>
         <path d="M1546 14.5H1493.5V23.5L1546 43V14.5Z" fill="#121212"/>
       </svg>
       
     
         <div className="textCont2">
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
         </div>
  
       <button onMouseLeave={()=>setBtn1(false)} onMouseOver={()=>setBtn1(true)} className="getInTouchBtn tabletBtn">
         <DubbleLetter text={"get in touch"} state={btn1} trns={0.1}/>
       </button>
  
       <div className="splineBlock">
         {/*<Spline scene={splineModel}/>*/}
       </div>
       
     </div>
  )
}

export default AfterRobotFive