import React from "react";
import "./lettersScrolling.scss"

function LettersScrolling ({text, state, visible}){
 if (state === "X"){
   const arr = text.split('')
  
   return(
      <span className={`word ${visible ? "rollXAnim" : ""}`}>
       {arr.map((el, index)=>{
         let tr = 0.15*(index+1)
         if ( el !== " " ){
           return(<span key={index} className="letter" style={{transition: `${tr}s ease-in-out`}}>{el}</span>)
         }else {
           return(<span key={index} className="space" style={{transition: `${tr}s ease-in-out`}}>{el}</span>)
         }
       })}
     </span>
   )
 } else if (state === "Y"){
   const arr = text.split('')
  
   return(
      <span className={`word ${visible ? "rollYAnim" : ""}`}>
       {arr.map((el, index)=>{
         let tr = 0.25*(index+1)
         if ( el !== " " ){
           return(<span key={index} className="letter" style={{transition: `${tr}s ease-in-out`}}>{el}</span>)
         }else {
           return(<span key={index} className="space" style={{transition: `${tr}s ease-in-out`}}>{el}</span>)
         }
       })}
     </span>
   )
 }
}

export default LettersScrolling