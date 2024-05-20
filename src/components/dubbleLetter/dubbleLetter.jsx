import React from "react";
import "./dubbleLetter.scss"

function DubbleLetter ({text, state}){
  const arr = text.split('')
  
  return(
     <div className={`word ${state ? "activeWord" : ""}`}>
        <div className="wordLine">
          {arr.map((el, index)=>{
            let tr = 0.1*(index+1)
            return <span style={{transition: `${tr}s ease-in-out`}} className="letter" key={index}>{el}</span>
          })}
        </div>
       <div className="wordLine">
         {arr.map((el, index)=>{
           let tr = 0.1*(index+1)
           return <span style={{transition: `${tr}s ease-in-out`}} className="letter" key={index}>{el}</span>
         })}
       </div>
     </div>
  )
}

export default DubbleLetter