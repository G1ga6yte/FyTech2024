import React, {useEffect, useState} from "react";
import "./buttonsBlock.scss"
import LettersScrolling from "../../../components/lettersScrolling/lettersScrolling";
import {useInView} from "react-intersection-observer";
import DubbleLetter from "../../../components/dubbleLetter/dubbleLetter";
import backgroundImage from "./backgroundImage.png"
import hashBackground from "./hashBackground.png"
import NexBotBlock from "../nexBotBlock/nexBotBlock";
import {Images} from "../afterRobotMain/afterRobotFirst/images/images";
function ButtonsBlock (){
  const [currentState, setCurrentState] = useState(false);
  const [currentState2, setCurrentState2] = useState(false);
  const { ref: myRef1, inView: visible1 } = useInView();
  const { ref: myRef2, inView: visible2 } = useInView();
  const { ref: myRef3, inView: visible3 } = useInView();
  const { ref: myRef4, inView: visible4 } = useInView();
  const { ref: myRef5, inView: visible5 } = useInView();
  const { ref: myRef6, inView: visible6 } = useInView();
  const { ref: myRef7, inView: visible7 } = useInView();
  const { ref: myRef8, inView: visible8 } = useInView();
  const { ref: myRef9, inView: visible9 } = useInView();
  
  const [changeView, setChangeView] = useState(false)
  const [availableBack, setAvailableBack] = useState(false)
  
  
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentState === false) {
        setCurrentState(true);
      } else {
        setCurrentState(false);
      }
    }, 4000);
    
    return () => clearInterval(intervalId);
  }, [currentState]);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentState2 === false) {
        setCurrentState2(true);
      } else {
        setCurrentState2(false);
      }
    }, 6000);
    
    return () => clearInterval(intervalId);
  }, [currentState2]);
  
  
  
  return(
     <div className="ButtonsBlock">
       {/*<ScrollDetection/>*/}
       <img src={Images.backgroundImage} className="backgroundImage2" alt=""/>
       
       
       <div  className={`buttonsContC no-select`}>
         <div >
           <div className="headerBlock">
             <span ref={myRef1} className={`headerLine ${visible1 ? "fromRight1" : ""}`} ><LettersScrolling text={"WITH EMOTION"} state={"X"} visible={visible1} /></span>
             <span ref={myRef2} className={`headerLine ${visible2 ? "fromRight1" : ""}`} ><LettersScrolling text={"Innovation, we push"} state={"Y"} visible={visible1} /></span>
             <span ref={myRef3} className={`headerLine ${visible3 ? "fromRight1" : ""}`} ><LettersScrolling text={"the boundaries of digital"} state={"X"} visible={visible1} /></span>
             <span ref={myRef4} className={`headerLine ${visible4 ? "fromRight1" : ""}`} ><LettersScrolling text={"creativity."} state={"Y"} visible={visible1} /></span>
           </div>
         </div>
  
         <img src={backgroundImage} className="backgroundImage" alt=""/>
  
  
  
         <div className="buttonsCont">
           <div className="flexGrow"></div>
           <div ref={myRef7} className="buttonsBlock">
      
             <div className="flex center">
               <div style={{backgroundImage: `url("${hashBackground}")`}} className={`block1 ${visible7 ? "block1Fall" : ""}`}>strategy</div>
               <div style={{backgroundImage: `url("${hashBackground}")`}} className={`block1 BlackText ${visible7 ? "block2Fall" : ""}`}>Software development</div>
             </div>
      
             <div className="flex end">
               <div style={{backgroundImage: `url("${hashBackground}")`}} className={`block1 block2 BlackText ${visible7 ? "block3Fall" : ""}`}>web 3.0</div>
               <div  className={`block3 ${visible7 ? "block4Fall" : ""}`}>Software development</div>
             </div>
      
             <div className="flex start">
               <div  className={`block3 block4 ${visible7 ? "block5Fall" : ""}`}>Design</div>
               <div style={{backgroundImage: `url("${hashBackground}")`}} className={`block1 ${visible7 ? "block6Fall" : ""}`}> Branding</div>
             </div>
      
             <div className="flex center">
               <div  className={`block3 block5 ${visible7 ? "block7Fall" : ""}`}>analytics</div>
               <div style={{backgroundImage: `url("${hashBackground}")`}} className={`block1 block6 ${visible7 ? "block8Fall" : ""}`}>advance services</div>
             </div>
      
             <div className="flex center">
               <div  className={`block3 block7 ${visible7 ? "block9Fall" : ""}`}>big data</div>
               <div style={{backgroundImage: `url("${hashBackground}")`}} className={`block1 block8 ${visible7 ? "block10Fall" : ""}`}>it consulting</div>
             </div>
    
    
    
           </div>
           
           <div className="prgCont">
             <div className="prg1Cont">
        
               <div ref={myRef5} className={`prg1Block ${visible5 ? "textSlide2" : ""}`} >
                 <div className="textLine">We are  a Bulgarian born,</div>
                 <div className="textLine">global digital branding,</div>
                 <div className="textLine">developing & design</div>
                 <div className="textLine">agency</div>
               </div>
      
             </div>
      
             <div className="prg2Cont">
               <div ref={myRef9} className={`prg1Block ${visible9 ? "fromLeftAnim" : ""}`} >
                 <div className="textLine"><DubbleLetter text={"every brand has a story, from, startups finding"} state={visible9} trns={0.1} /></div>
                 <div className="textLine"><DubbleLetter text={"there voice to titans refining their legacy. "} state={visible9} trns={0.05} /></div>
                 <div className="textLine"><DubbleLetter text={"we ensure that tale shines brilliantly. WITH A BLEND"} state={visible9} trns={0.1} /></div>
                 <div className="textLine"><DubbleLetter text={"OF RAPID ITERATION AND COLLABORATIVE SPIRIT, WE"} state={visible9} trns={0.05} /></div>
                 <div className="textLine"><DubbleLetter text={"EMPOWER YOU TO RESHAPE YOUR DIGITAL NARRATIVE."} state={visible9} trns={0.1} /></div>
               </div>
               <p ref={myRef6} className={`prg1Block prg1BlockTablet ${visible6 ? "fromLeftAnim" : ""}`}>
                 <span className="textLine">every brand has a story, from, startups finding there voice to titans refining their legacy. we ensure that tale shines brilliantly. WITH A BLEND OF RAPID ITERATION AND COLLABORATIVE SPIRIT, WE EMPOWER YOU TO RESHAPE YOUR DIGITAL NARRATIVE.</span>
               </p>
             </div>
             
           </div>
         </div>
       </div>
       
       <div ref={myRef8} ></div>
  
       
     </div>
  )
}

export default ButtonsBlock