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

function Main() {
  const {scrollPaused1, setScrollPaused1, myRef1, visible2, visible3, step, setStep, activeMenu, setActiveMenu, menu2, setMenu2} = useCartContext();
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
          const delta = event.deltaY;
          if (delta > 0) {
            console.log(delta);
            setFixed(false)
  
            if (scrollPaused1) {
              if (step < 4) {
                setTimeout(()=>{
                  setStep(prev => prev + 1);
                  
                }, 800)
                
              } else {
              
              }
            }
            
            
          } else if (delta < 0) {
  
            if (scrollPaused1) {
              if (visible2){
  
                if (step > 2){
                  setTimeout(()=>{
                    setStep(prev => prev - 1);
                  }, 800)
                  setFixed(false)
  
                } else if (step === 2) {
                  setFixed(true)
  
                    setTimeout(()=>{
                      setStep(1)
                    }, 800)
                    setTimeout(()=>{
                      window.scrollTo(0, headBlock)
                    }, 800)
  
                  
                } else {
                  setFixed(false)
                }
              }
              
            }
            
          }
          setScrolling(true);
        }
      };
      
      window.addEventListener("wheel", handleScroll);
      
      return () => {
        window.removeEventListener("wheel", handleScroll);
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
        
             <div className="menu">
               <svg xmlns="http://www.w3.org/2000/svg" width="86" height="93" viewBox="0 0 86 93" fill="none">
                 <path d="M12 82H4L5.5 75.5L12 82Z" fill="#FF662A"/>
                 <path d="M5.5 72H2L0.5 68.5H4L5.5 72Z" fill="#FF662A"/>
                 <path d="M38 68.5L45 79.5L57.5 72L38 68.5Z" fill="#FF662A"/>
                 <path d="M38.5 86L22.5 85.5V86L19.5 90.5L28.5 92.5L36 90.5L38.5 86Z" fill="#FF662A"/>
                 <path d="M69.5 66.5L57.5 60.5H74L69.5 66.5Z" fill="#FF662A"/>
                 <path d="M85.5 39.5L81 42.5L74 41L78.5 37L85.5 39.5Z" fill="#FF662A"/>
                 <path d="M68 34L61 38.5L69.5 42.5L68 34Z" fill="#FF662A"/>
                 <path d="M75.5 32.5V25L85.5 34L75.5 32.5Z" fill="#FF662A"/>
                 <path d="M68 18.5L69.5 11.5L75.5 13V18.5H68Z" fill="#FF662A"/>
                 <path d="M74 5L62.5 4L66.5 0L74 5Z" fill="#FF662A"/>
                 <path d="M66 12.5L61 11.5V9H66V12.5Z" fill="#FF662A"/>
               </svg>
          
               <svg xmlns="http://www.w3.org/2000/svg" width="83" height="83" viewBox="0 0 83 83" fill="none">
                 <path
                    d="M13.5 81L0 56V0H48.5L61.5 9.5L51.5 16.5L66 19V30L57 31.5L58.5 38.5L40 36.5L82.5 56L47 60L28.5 58L33.5 83L13.5 81Z"
                    fill="#FF662A"/>
               </svg>
          
               <Link onMouseOver={() => setLink1(true)} onMouseLeave={() => setLink1(false)} to="/home"
                     className="menuLink"><LettersScrolling text="home" visible={link1} state={"X"}/></Link>
               <Link onMouseOver={() => setLink2(true)} onMouseLeave={() => setLink2(false)} to="/aboutUs"
                     className="menuLink"><LettersScrolling text={"about us"} visible={link2} state={"X"}/></Link>
               <Link onMouseOver={() => setLink3(true)} onMouseLeave={() => setLink3(false)} to="/work"
                     className="menuLink"><LettersScrolling text={"work"} visible={link3} state={"X"}/></Link>
               <Link onMouseOver={() => setLink4(true)} onMouseLeave={() => setLink4(false)} to="/services"
                     className="menuLink"><LettersScrolling text={"services"} visible={link4} state={"X"}/></Link>
               <Link onMouseOver={() => setLink5(true)} onMouseLeave={() => setLink5(false)} to="/contact"
                     className="menuLink"><LettersScrolling text={"contact"} visible={link5} state={"X"}/></Link>
          
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
          
               <div className="termsBlock">
                 <a onMouseOver={() => setLink6(true)} onMouseLeave={() => setLink6(false)} href="/" target="_blank"
                    className="termsLink"><DubbleLetter text={"privacy"} state={link6} trns={0.15}/></a>
                 <a onMouseOver={() => setLink7(true)} onMouseLeave={() => setLink7(false)} href="/" target="_blank"
                    className="termsLink"><DubbleLetter text={"fytechnology"} state={link7} trns={0.1}/></a>
                 <div></div>
          
               </div>
        
        
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
  
       <div  className="secondContent" style={{minHeight: `100vh`, backgroundImage: `url("${backgroundImg}")`}}>
         <SecondBlock style={fixed} ref={secondBlockRef} step={step}/>
  
       </div>
       <div ref={myRef1}></div>
  
  
          <div style={{
            height: step === 4 ? "max-content" : "0px"
          }} className="thirdCont">
            <div style={{height: `200px`}}></div>
            <ThirdHeader/>
            <ThirdBlock/>
            <ThirdWhiteEnd/>
            
            
            
            <div style={{height: `200vh`}}></div>
          </div>
          
       
     </div>
  );
}

export default Main;