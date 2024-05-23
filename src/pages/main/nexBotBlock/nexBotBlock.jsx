import React, {useEffect} from "react";
import background from "./background.png";
import splineModel from "./nexbot_robot_character_concept_copy_copy.spline";
import Spline from "@splinetool/react-spline";
import "./nexBotBlock.scss";
import {useInView} from "react-intersection-observer";
import {useCartContext} from "../../../CartContext";

function NexBotBlock() {
  const {robotAnim, myRefRobot, visibleRobot} = useCartContext();
  const {ref: myRef1, inView: visible1} = useInView();
  
  useEffect(() => {
    if (visible1) {
      console.log(visible1);
    }
  }, [visible1]);
  
  return (
     <div style={{backgroundImage: `url("${background}")`}} className={`nexBotBlock`}>
       <div className="Cont">
         {robotAnim &&
            <div style={{opacity: `${robotAnim ? "1" : "0"}`}} className="spline">
              <Spline scene={splineModel}/>
            </div>
         }
         <div ref={myRefRobot}></div>
       </div>
     </div>
  );
}

export default NexBotBlock;