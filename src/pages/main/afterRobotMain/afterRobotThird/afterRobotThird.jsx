import React, {useEffect, useState}  from "react";
import {useInView} from "react-intersection-observer";
import "./afterRobotThird.scss"
import {Images} from "./images/images";
import LettersScrolling from "../../../../components/lettersScrolling/lettersScrolling";
import Spline from "@splinetool/react-spline";
function AfterRobotThird (){
  const { ref: myRef1, inView: visible1 } = useInView();
  const { ref: myRef2, inView: visible2 } = useInView();
  const { ref: myRef3, inView: visible3 } = useInView();
  const { ref: myRef4, inView: visible4 } = useInView();
  const { ref: myRef5, inView: visible5 } = useInView();
  const { ref: myRef6, inView: visible6 } = useInView();
  const { ref: myRef7, inView: visible7 } = useInView();
  const { ref: myRef8, inView: visible8 } = useInView();
  
  
  
  
  const [currentState, setCurrentState] = useState(1);
  
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentState < 4) {
        setCurrentState(prev => prev + 1);
      } else {
        setCurrentState(1);
      }
    }, 3000);
    
    return () => clearInterval(intervalId);
  }, [currentState]);
  
  return(
     <div className="AfterRobotThird">
  
       
       <div ref={myRef1} className="headerBlock">
         <div className="flexGrow"></div>
         <div className={`underLinedText no-select ${visible1 ? "underLinedTextAnim" :""}`}>
           <p>WE ARE AGENCY</p>
           <div className="line"></div>
         </div>
         <div className="strokeText">Awarded</div>
       </div>
       <img src={Images.mone1} className="mone1" alt=""/>
       <img src={Images.mone2} className="mone2" alt=""/>
  
  
       <div className="mainBlock">
         
         <div className="skillsBlock">
           <p ref={myRef2} className="skillPrg"><LettersScrolling text={"(4) awwward"} state={"X"} visible={visible2}/></p>
           <p ref={myRef3} className="skillPrg"><LettersScrolling text={"(2) site of the day "} state={"X"} visible={visible3}/></p>
           <p ref={myRef4} className="skillPrg"><LettersScrolling text={"(5) site of the month"} state={"X"} visible={visible4}/></p>
           <p ref={myRef5} className="skillPrg"><LettersScrolling text={"(45) nomination "} state={"X"} visible={visible5}/></p>
           <p ref={myRef6} className="skillPrg"><LettersScrolling text={"(12) honor"} state={"X"} visible={visible6}/></p>
           <p ref={myRef7} className="skillPrg"><LettersScrolling text={"(3) developer award"} state={"X"} visible={visible7}/></p>

         </div>
         
         <div className="circleBlock">
           
           
           
           <div style={{backgroundImage: `url("${currentState === 2 ? Images.circleLight : Images.circle}")`}} className="circleImg"></div>
           <div style={{backgroundImage: `url("${currentState === 1 ? Images.circleLight : Images.circle}")`}} className="circleImg"></div>
           <div style={{backgroundImage: `url("${currentState === 3 ? Images.circleLight : Images.circle}")`}} className="circleImg"></div>
           <div style={{backgroundImage: `url("${currentState === 4 ? Images.circleLight : Images.circle}")`}} className="circleImg"></div>
  
           
  
           <svg className="circleSVG" width="676" height="676" viewBox="0 0 676 676" fill="none" xmlns="http://www.w3.org/2000/svg">
             <circle cx="338" cy="338" r="337.5" stroke="url(#paint0_linear_80_2206)"/>
             <defs>
               <linearGradient id="paint0_linear_80_2206" x1="119.5" y1="94.5" x2="262" y2="231" gradientUnits="userSpaceOnUse">
                 <stop stopColor="#FF6C2C"/>
                 <stop offset="1" stopColor="#4F4F4F"/>
               </linearGradient>
             </defs>
           </svg>
           
           <div className="insideCircle">
             <div className="spline">
               <Spline scene={"https://prod.spline.design/MENtgbdXHq0BhsKS/scene.splinecode"}/>
             </div>
           </div>
           
         </div>
         
         <div ref={myRef8} className="prgBlock">
           <LettersScrolling text={"where different is standard"} state={"X"} visible={visible8}/>
           <LettersScrolling text={"chose fytechnology"} state={"X"} visible={visible8}/>
         </div>
         
       </div>
       
       
       <div className="lenta">
       
       </div>
     </div>
  )
}

export default AfterRobotThird