import React from "react";
import hashBackground from "../../main/buttonsBlock/hashBackground.png";
import {useInView} from "react-intersection-observer";
import "./headBlock.scss"
import LettersScrolling from "../../../components/lettersScrolling/lettersScrolling";
import {useCartContext} from "../../../CartContext";

function HeadBlock (){
  const {loader} = useCartContext();
  
  return(
     <div className="headBlock no-select G-Container">
  
         <div className="headerBlock">
           <div className={`underLinedText no-select ${loader  ? "underLinedTextAnim" : ""}`}>
             <p>about us</p>
             <div className="line"></div>
           </div>
           <div className="flexGrow"></div>
         </div>
  
       <div className="buttonsTextCont">
         <div className="buttonsBlock">
    
           <div className="flex center">
             <div style={{backgroundImage: `url("${hashBackground}")`}} className={`block1 ${ !loader ? "block1Fall" : ""}`}>strategy</div>
             <div style={{backgroundImage: `url("${hashBackground}")`}} className={`block1 BlackText ${!loader ? "block2Fall" : ""}`}>Software development</div>
           </div>
    
           <div className="flex end">
             <div style={{backgroundImage: `url("${hashBackground}")`}} className={`block1 block2 BlackText ${ !loader ? "block3Fall" : ""}`}>web 3.0</div>
             <div  className={`block3 ${!loader ? "block4Fall" : ""}`}>Software development</div>
           </div>
    
           <div className="flex start">
             <div  className={`block3 block4 ${!loader ? "block5Fall" : ""}`}>Design</div>
             <div style={{backgroundImage: `url("${hashBackground}")`}} className={`block1 ${!loader ? "block6Fall" : ""}`}> Branding</div>
           </div>
    
           <div className="flex center">
             <div  className={`block3 block5 ${!loader ? "block7Fall" : ""}`}>analytics</div>
             <div style={{backgroundImage: `url("${hashBackground}")`}} className={`block1 block6 ${!loader ? "block8Fall" : ""}`}>advance services</div>
           </div>
    
           <div className="flex center">
             <div  className={`block3 block7 ${!loader ? "block9Fall" : ""}`}>big data</div>
             <div style={{backgroundImage: `url("${hashBackground}")`}} className={`block1 block8 ${ !loader ? "block10Fall" : ""}`}>it consulting</div>
           </div>
  
         </div>

         <div  className="TextBlock">
           <p className="miniHeader"><LettersScrolling text={"The Fytechnology LTD team"} state={"X"} visible={loader}/></p>
           
           <div className={`text ${!loader ? "activeText" : ""}`}>
             <span>specializes in the</span>
             <span>development</span>
             <span>of mobile and web</span>
             <span>applications.</span>
           </div>
  
           <div className={`text ${!loader ? "activeText" : ""}`}>
             <span>We offer a full range of</span>
             <span>services for creating web</span>
             <span>services and mobile</span>
             <span>applications - from logic and</span>
             <span>design to programming.</span>
           </div>
           
         </div>
       </div>
       
     </div>
  )
}

export default HeadBlock