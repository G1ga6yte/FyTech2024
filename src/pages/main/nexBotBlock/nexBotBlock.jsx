import React, {useEffect} from "react";
import background from "./background.png"
import splineModel from "./nexbot_robot_character_concept_copy.spline"
import Spline from "@splinetool/react-spline";
import "./nexBotBlock.scss"
import {useInView} from "react-intersection-observer";
function NexBotBlock (){
  
  const { ref: myRef1, inView: visible1 } = useInView();
  
  useEffect(()=>{
    if(visible1){
      console.log(visible1);
    }
  }, [visible1])
  
  return(
     <div style={{backgroundImage: `url("${background}")`}} className={`nexBotBlock`}>
       <div>
         <Spline  scene={splineModel}/>
         <div ref={myRef1}></div>
       </div>
     </div>
  )
}

export default NexBotBlock