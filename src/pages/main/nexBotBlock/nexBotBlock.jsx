import React from "react";
import background from "./background.png"
import splineModel from "./nexbot_robot_character_concept_copy.spline"
import Spline from "@splinetool/react-spline";
import "./nexBotBlock.scss"
function NexBotBlock (){
  
  
  
  return(
     <div style={{backgroundImage: `url("${background}")`}} className={`nexBotBlock`}>
       <Spline  scene={splineModel}/>
     </div>
  )
}

export default NexBotBlock