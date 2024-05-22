import React, {useEffect, useState} from "react";
import "./buttonsBlock.scss"
import LettersScrolling from "../../../components/lettersScrolling/lettersScrolling";
import {useInView} from "react-intersection-observer";
import DubbleLetter from "../../../components/dubbleLetter/dubbleLetter";
import backgroundImage from "./backgroundImage.png"
import hashBackground from "./hashBackground.png"
import NexBotBlock from "../nexBotBlock/nexBotBlock";
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
  
  // useEffect(() => {
  //   if (visible8) {
  //     const timeoutId = setTimeout(() => {
  //       setChangeView(true);
  //     }, 2000);
  //
  //     return () => clearTimeout(timeoutId); // Очистить таймер при размонтировании компонента или при изменении state1
  //   }
  // }, [visible8]);
  
  
  // function ScrollDetection() {
  //   const [scrolling, setScrolling] = useState(false);
  //
  //   useEffect(() => {
  //     const handleScroll = (event) => {
  //       if (!scrolling) {
  //         const delta = event.deltaY;
  //
  //         if (delta > 0) {
  //           if (visible8){
  //             setTimeout(()=>{
  //               setChangeView(true)
  //             }, 500)
  //             setTimeout(()=>{
  //               setAvailableBack(true)
  //             }, 1000)
  //           }
  {/*        } else if (delta < 0) {*/}
  {/*          if(availableBack){*/}
  {/*           setTimeout(()=>{*/}
  {/*              setChangeView(false)*/}
  //            }, 500)
  //             setAvailableBack(false)
  //
  {/*            setTimeout(()=>{*/}
  //               window.scrollTo(0, 7000)
  {/*            }, 1000)*/}
  {/*          }*/}
  {/*        }*/}
  {/*      }*/}
  {/*    };*/}
  {/*    */}
  {/*    window.addEventListener("wheel", handleScroll);*/}
  {/*    */}
  {/*    return () => {*/}
  {/*      window.removeEventListener("wheel", handleScroll);*/}
  {/*    };*/}
  //   }, [scrolling]);
  //
  //   useEffect(() => {
  {/*    const resetScrolling = () => {*/}
  //       setScrolling(false);
  //     };
  //
  //     const timeout = setTimeout(resetScrolling, 1500);
  //     return () => clearTimeout(timeout);
  //   }, [scrolling]);
  //
  //   return (
  //      <div className="content"></div>
  //   );
  // }
  
  
  return(
     <div className="ButtonsBlock">
       {/*<ScrollDetection/>*/}
  
       
       
       <div  className={`buttonsContC no-select`}>
         <div >
           <div className="headerBlock">
             <span ref={myRef1} className={`headerLine ${visible1 ? "fromRight1" : ""}`} ><LettersScrolling text={"WITH EMOTION"} state={"X"} visible={currentState} /></span>
             <span ref={myRef2} className={`headerLine ${visible2 ? "fromRight1" : ""}`} ><LettersScrolling text={"Innovation, we push"} state={"Y"} visible={currentState} /></span>
             <span ref={myRef3} className={`headerLine ${visible3 ? "fromRight1" : ""}`} ><LettersScrolling text={"the boundaries of digital"} state={"X"} visible={currentState} /></span>
             <span ref={myRef4} className={`headerLine ${visible4 ? "fromRight1" : ""}`} ><LettersScrolling text={"creativity."} state={"Y"} visible={currentState} /></span>
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
               <div ref={myRef6} className={`prg1Block ${visible6 ? "fromLeftAnim" : ""}`} >
                 <div className="textLine"><DubbleLetter text={"every brand has a story, from, startups finding"} state={currentState} trns={0.05} /></div>
                 <div className="textLine"><DubbleLetter text={"there voice to titans refining their legacy. "} state={currentState} trns={0.1} /></div>
                 <div className="textLine"><DubbleLetter text={"we ensure that tale shines brilliantly. WITH A BLEND"} state={currentState} trns={0.05} /></div>
                 <div className="textLine"><DubbleLetter text={"OF RAPID ITERATION AND COLLABORATIVE SPIRIT, WE"} state={currentState} trns={0.05} /></div>
                 <div className="textLine"><DubbleLetter text={"EMPOWER YOU TO RESHAPE YOUR DIGITAL NARRATIVE."} state={currentState} trns={0.1} /></div>
               </div>
             </div>
           </div>
         </div>
       </div>
       
       <div ref={myRef8} ></div>
  
       <NexBotBlock />
       
     </div>
  )
}

export default ButtonsBlock