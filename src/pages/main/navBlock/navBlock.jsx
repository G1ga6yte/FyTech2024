import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./navBlock.scss";
import {useCartContext} from "../../../CartContext";
import DubbleLetter from "../../../components/dubbleLetter/dubbleLetter";
import LettersScrolling from "../../../components/lettersScrolling/lettersScrolling";
import {Images} from "./images/images";

function NavBlock() {
  const {loaded, activeMenu, setActiveMenu, menu2, setMenu2} = useCartContext();
  const [btn1, setBtn1] = useState(false);
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
          setActiveMenu(false);
          
          if (window.scrollY > 50) {
            setMenu2(true)
          } else {
            setMenu2(false)
          }
          
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
      
      const timeout = setTimeout(resetScrolling, 500);
      return () => clearTimeout(timeout);
    }, [scrolling]);
    
    
    return (
       <div className="content"></div>
    );
  }
  
  return (
     <div className="NavBlock">
       <ScrollDetection/>
       
       <Link to="/" className={`linkToHome no-select ${loaded ? "comeFromUp2" : ""}`}><DubbleLetter
          text={"Fytechnology LTD"} trns={0.08} state={loaded}/></Link>
       
       <div className="buttonsBlock no-select">
         
         <div className={`menuCont ${loaded ? "comeFromDown2" : ""} ${menu2 ? "menuBtnAway" : ""}`}>
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
               
               <div className="termsBlock">
                 <a onMouseOver={() => setLink6(true)} onMouseLeave={() => setLink6(false)} href="/" target="_blank"
                    className="termsLink"><DubbleLetter text={"privacy"} state={link6} trns={0.15}/></a>
                 <a onMouseOver={() => setLink7(true)} onMouseLeave={() => setLink7(false)} href="/" target="_blank"
                    className="termsLink"><DubbleLetter text={"fytechnology"} state={link7} trns={0.1}/></a>
                 <a onMouseOver={() => setLink8(true)} onMouseLeave={() => setLink8(false)} href="/" target="_blank"
                    className="termsLink"><DubbleLetter text={"careers"} state={link8} trns={0.15}/></a>
               
               </div>
             
             
             </div>
           
           
           </div>
         </div>
         
  
         <Link onMouseOver={() => setBtn1(true)} onMouseLeave={() => setBtn1(false)} to="/contact"
               className={`contactBtn ${loaded ? "comeFromRight2" : ""}`}>
           <DubbleLetter text={"CONTACT"} trns={0.1} state={btn1}/>
           <svg xmlns="http://www.w3.org/2000/svg" width="33" height="16" viewBox="0 0 33 16" fill="none">
             <path
                d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z"
                fill="#FF6329"/>
           </svg>
         </Link>
       
       
       </div>
     
     </div>
  );
}

export default NavBlock;