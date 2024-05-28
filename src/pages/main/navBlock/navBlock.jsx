import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./navBlock.scss";
import {useCartContext} from "../../../CartContext";
import DubbleLetter from "../../../components/dubbleLetter/dubbleLetter";
import LettersScrolling from "../../../components/lettersScrolling/lettersScrolling";
import {Images} from "./images/images";

function NavBlock() {
  const {loaded, activeMenu, setActiveMenu, menu2, setMenu2, RouteChange} = useCartContext();
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
       
       <div></div>
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
               
               <Link onMouseOver={() => setLink1(true)} onMouseLeave={() => setLink1(false)} to="/home"
                     className="menuLink"><LettersScrolling text="home" visible={link1} state={"X"}/>
                 <div className="arrowBlock">
                   <img src={Images.arrowImg} alt=""/>
                   <img src={Images.arrowImg} alt=""/>
                 </div>
               </Link>
               <Link onMouseOver={() => setLink2(true)} onMouseLeave={() => setLink2(false)} to="/aboutUs"
                     className="menuLink"><LettersScrolling text={"about us"} visible={link2} state={"X"}/>
                 <div className="arrowBlock">
                   <img src={Images.arrowImg} alt=""/>
                   <img src={Images.arrowImg} alt=""/>
                 </div>
               </Link>
               <Link onMouseOver={() => setLink3(true)} onMouseLeave={() => setLink3(false)} to="/work"
                     className="menuLink"><LettersScrolling text={"work"} visible={link3} state={"X"}/>
                 <div className="arrowBlock">
                   <img src={Images.arrowImg} alt=""/>
                   <img src={Images.arrowImg} alt=""/>
                 </div>
               </Link>
               <Link onMouseOver={() => setLink4(true)} onMouseLeave={() => setLink4(false)} to="/services"
                     className="menuLink"><LettersScrolling text={"services"} visible={link4} state={"X"}/>
                 <div className="arrowBlock">
                   <img src={Images.arrowImg} alt=""/>
                   <img src={Images.arrowImg} alt=""/>
                 </div>
               </Link>
               <Link onMouseOver={() => setLink5(true)} onMouseLeave={() => setLink5(false)} to="/contact"
                     className="menuLink"><LettersScrolling text={"contact"} visible={link5} state={"X"}/>
                 <div className="arrowBlock">
                   <img src={Images.arrowImg} alt=""/>
                   <img src={Images.arrowImg} alt=""/>
                 </div>
               </Link>
               
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
               
             </div>
           
           
           </div>
         </div>
         
  
         <button onClick={()=>RouteChange("/order")} onMouseOver={() => setBtn1(true)} onMouseLeave={() => setBtn1(false)}
               className={`contactBtn ${loaded ? "comeFromRight2" : ""}`}>
           <DubbleLetter text={"CONTACT"} trns={0.1} state={btn1}/>
           <svg xmlns="http://www.w3.org/2000/svg" width="33" height="16" viewBox="0 0 33 16" fill="none">
             <path
                d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z"
                fill="#FF6329"/>
           </svg>
         </button>
       
         
       
       </div>
     
     </div>
  );
}

export default NavBlock;