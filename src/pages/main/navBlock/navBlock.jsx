import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./navBlock.scss"
import {useCartContext} from "../../../CartContext";
import DubbleLetter from "../../../components/dubbleLetter/dubbleLetter";

function NavBlock (){
  const {loaded} = useCartContext()
  const [btn1, setBtn1] = useState(false)
  
  return(
     <div  className="NavBlock">
       
       <Link to="/" className="linkToHome no-select" >Fytechnology LTD</Link>
       
       <div className="buttonsBlock no-select">
        
         <button className="menuBtn">
           <div className="line"></div>
           <div className="line"></div>
         </button>
         
         
         <Link onMouseOver={()=>setBtn1(true)} onMouseLeave={()=>setBtn1(false)} to="/contact" className="contactBtn">
           <DubbleLetter text={"CONTACT"} state={btn1}/>
           <svg xmlns="http://www.w3.org/2000/svg" width="33" height="16" viewBox="0 0 33 16" fill="none">
             <path d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9H32V7H0V9Z" fill="#FF6329"/>
           </svg>
         </Link>
         
         
       </div>
       
     </div>
  )
}

export default NavBlock