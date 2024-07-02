import React, {useEffect, useRef, useState} from "react";
import "./main.scss";
import HeadBlock from "./headBlock/headBlock";
import NavBlock from "./navBlock/navBlock";
import SecondBlock from "./secondBlock/secondBlock";
import {useCartContext} from "../../CartContext";
import backgroundImg from "../../background.png";
import ThirdBlock from "./thirdBlock/thirdBlock";
import ThirdHeader from "./thirdHeader/thirdHeader";
import ThirdWhiteEnd from "./thirdWhiteEnd/thirdWhiteEnd";
import LoadingBlock from "../../components/loadingBlock/loadingBlock";
import {Link} from "react-router-dom";
import LettersScrolling from "../../components/lettersScrolling/lettersScrolling";
import {Images} from "./navBlock/images/images";
import DubbleLetter from "../../components/dubbleLetter/dubbleLetter";
import ButtonsBlock from "./buttonsBlock/buttonsBlock";
import NexBotBlock from "./nexBotBlock/nexBotBlock";
import AfterRobotMain from "./afterRobotMain/afterRobotMain";

function Main() {
  const {scrollPaused1, setScrollPaused1, myRef1, visible2, visible3, step, setStep, activeMenu, setActiveMenu, menu2, setMenu2, robotAnim, myRefRobot, visibleRobot, RouteChange} = useCartContext();
  const secondBlockRef = useRef(null);
  const [headBlock, setHeadBlock] = useState(0)
  const [fixed, setFixed] = useState(false)
  useEffect(()=>{
    let headBlock = document.getElementById("headBlock")
    setHeadBlock(headBlock.offsetHeight)
  }, [])
  
  useEffect(()=>{
    setScrollPaused1(false)
    setStep(1)
    setFixed(false)
  }, [visible3])
  
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  
  const [link1, setLink1] = useState(false);
  const [link2, setLink2] = useState(false);
  const [link3, setLink3] = useState(false);
  const [link4, setLink4] = useState(false);
  const [link5, setLink5] = useState(false);
  
  const [link6, setLink6] = useState(false);
  const [link7, setLink7] = useState(false);
  const [link8, setLink8] = useState(false);
  
  
  function ScrollDetection() {
    const [scrolling, setScrolling] = useState(false);
    
    useEffect(() => {
      const handleScroll = (event) => {
        if (!scrolling) {
  
          const deltaY = event.deltaY || (event.touches ? (event.touches[0] ? event.touches[0].clientY - (event.touches[1] ? event.touches[1].clientY : 0) : 0) : 0);
  
  
          if (deltaY > 0) {
    
              if (scrollPaused1) {
                if (step < 4) {
                  setTimeout(() => {
                    setStep(prev => prev + 1);
                  }, 1000)
                }
              }
    
    
            } else if (deltaY < 0) {
    
              if (scrollPaused1) {
                if (visible2) {
        
        
                  if (step > 2) {
                    setTimeout(() => {
                      setStep(prev => prev - 1);
                    }, 1000)
                    // setFixed(false)
          
                  } else if (step === 2) {
                    setFixed(true)
          
                    setTimeout(() => {
                      setStep(1)
                    }, 1000)
                    setTimeout(() => {
                      window.scrollTo(0, headBlock)
                    }, 1000)
          
          
                  } else {
                    setFixed(false)
                  }
                }
      
              }
    
            }
          setScrolling(true);
        }
      }
      
      window.addEventListener("wheel", handleScroll);
      window.addEventListener("touchmove", handleScroll);
  
      return () => {
        window.removeEventListener("wheel", handleScroll);
        window.removeEventListener("touchmove", handleScroll);
  
      };
    }, [scrolling]);
    
    useEffect(() => {
      const resetScrolling = () => {
        setScrolling(false);
      };
      
      const timeout = setTimeout(resetScrolling, 1500);
      return () => clearTimeout(timeout);
    }, [scrolling]);
    
    
    
    return (
       <div className="content"></div>
    );
  }
  
  
  
  return (
     <div className="MainCont G-Container">
       
       <div className={`menuCont menuContBottom ${menu2 ? "showed" : ""}`}>
         <div className={`menuBlock ${activeMenu ? "activeMenuBlock" : ""}`}>
           <button onClick={() => {
             setActiveMenu(prev => !prev);
           }} className={`menuBtn `}>
             <div className="line"></div>
             <div className="line"></div>
           </button>
           
           <div onClick={()=>setActiveMenu(false)} className="menu">
  
             <button onMouseOver={() => setLink1(true)} onMouseLeave={() => setLink1(false)} onClick={()=>RouteChange("/")}
                   className="menuLink"><LettersScrolling text="home" visible={link1} state={"X"}/>
               <div className="arrowBlock">
                 <img src={Images.arrowImg} alt=""/>
                 <img src={Images.arrowImg} alt=""/>
               </div>
             </button>
             <button onMouseOver={() => setLink2(true)} onMouseLeave={() => setLink2(false)} onClick={()=>RouteChange("/aboutUs")}
                   className="menuLink"><LettersScrolling text={"about us"} visible={link2} state={"X"}/>
               <div className="arrowBlock">
                 <img src={Images.arrowImg} alt=""/>
                 <img src={Images.arrowImg} alt=""/>
               </div>
             </button>
             <button onMouseOver={() => setLink3(true)} onMouseLeave={() => setLink3(false)} onClick={()=>RouteChange("/work")}
                   className="menuLink"><LettersScrolling text={"work"} visible={link3} state={"X"}/>
               <div className="arrowBlock">
                 <img src={Images.arrowImg} alt=""/>
                 <img src={Images.arrowImg} alt=""/>
               </div>
             </button>
             <button onMouseOver={() => setLink4(true)} onMouseLeave={() => setLink4(false)} onClick={()=>RouteChange("/services")}
                   className="menuLink"><LettersScrolling text={"services"} visible={link4} state={"X"}/>
               <div className="arrowBlock">
                 <img src={Images.arrowImg} alt=""/>
                 <img src={Images.arrowImg} alt=""/>
               </div>
             </button>
             <button onMouseOver={() => setLink5(true)} onMouseLeave={() => setLink5(false)} onClick={()=>RouteChange("/contact")}
                   className="menuLink"><LettersScrolling text={"contact"} visible={link5} state={"X"}/>
               <div className="arrowBlock">
                 <img src={Images.arrowImg} alt=""/>
                 <img src={Images.arrowImg} alt=""/>
               </div>
             </button>
  
             <div className="termsCont">
               <a onMouseOver={()=>setLink6(true)} onMouseLeave={()=>setLink6(false)} href="/" target="_blank" className="termsLink">
                 <LettersScrolling text={"privacy"} visible={link6} state={"X"}/>
                 <div className="arrowBlock">
                   <img src={Images.grayArrow} alt=""/>
                   <img src={Images.grayArrow} alt=""/>
                 </div>
               </a>
               <a onMouseOver={()=>setLink7(true)} onMouseLeave={()=>setLink7(false)} href="/" target="_blank" className="termsLink">
                 <LettersScrolling text={"careers"} visible={link7} state={"X"}/>
                 <div className="arrowBlock">
                   <img src={Images.grayArrow} alt=""/>
                   <img src={Images.grayArrow} alt=""/>
                 </div>
               </a>
             </div>
             
             <div className="socialMenuLinks">
               <a href="/" target="_blank" className="socialMenuLink">
                 <img src={Images.social1Img} alt=""/>
               </a>
               <a href="/" target="_blank" className="socialMenuLink">
                 <img src={Images.social2Img} alt=""/>
               </a>
               <a href="/" target="_blank" className="socialMenuLink">
                 <img src={Images.social3Img} alt=""/>
               </a>
               <a href="/" target="_blank" className="socialMenuLink">
                 <img src={Images.social4Img} alt=""/>
               </a>
             </div>
             
             <div className="flexGrow"></div>
             
             
           
           
           </div>
         
         
         </div>
       </div>
       
       <ScrollDetection/>
       
       <LoadingBlock/>
       
       {step === 1 &&
          <div  id="headBlock" className="topCont">
            <NavBlock/>
            <HeadBlock/>
            <div></div>
          </div>
       }
       
       <div  className="secondContent" style={{ backgroundImage: `url("${backgroundImg}")`}}>
         <SecondBlock style={fixed} ref={secondBlockRef} step={step}/>

       </div>
       
       
       <div style={{
         height: step === 4 ? "max-content" : "0px"
       }} className="thirdCont">
         <div className="height" ></div>
         <ThirdHeader/>
         <ThirdBlock/>
         <ThirdWhiteEnd/>
         <ButtonsBlock/>
         <div className="forthCont">
           <NexBotBlock />
           <AfterRobotMain/>
         </div>
       </div>
     
     
     </div>
  );
}
// robotAnim, myRefRobot, visibleRobot
export default Main;