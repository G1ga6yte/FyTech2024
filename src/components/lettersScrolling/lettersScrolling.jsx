import React, {useEffect, useState} from "react";
import "./lettersScrolling.scss"

function LettersScrolling ({text, state, visible}){
  const arr = text.split('')
  const [visibility, setVisibility] = useState(false)
  
 
  
  return(
     <span className={`word ${visible ? "rollAnim" : ""}`}>
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
}

export default LettersScrolling