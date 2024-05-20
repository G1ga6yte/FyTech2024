import React from "react";
import "./dubbleLetter.scss"
import {useCartContext} from "../../CartContext";

function DubbleLetter ({text, state, trns}){
  const arr = text.split('')
  
  const {loaded} = useCartContext()
  
  return(
     <div className={`word2 ${state ? loaded ? "activeWord2" : "" : ""}`}>
        <div className="wordLine2">
          {arr.map((el, index)=>{
            let tr = trns*(index+1)
            if (el === " "){
              return <span style={{transition: `${tr}s ease-in-out`}} className="space2" key={index}></span>
            } else {
              return <span style={{transition: `${tr}s ease-in-out`}} className="letter2 letter22" key={index}>{el}</span>
            }
          })}
        </div>
       <div className="wordLine2">
         {arr.map((el, index)=>{
           let tr = trns*(index+1)
           if (el === " "){
             return <span style={{transition: `${tr}s ease-in-out`}} className="space2" key={index}></span>
           } else {
             return <span style={{transition: `${tr}s ease-in-out`}} className="letter2" key={index}>{el}</span>
           }
         })}
       </div>
     </div>
  )
}

export default DubbleLetter