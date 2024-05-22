import React from "react";
import "./afterRobotMain.scss"
import AfterRobotFirst from "./afterRobotFirst/afterRobotFirst";
import AfterRobotSecond from "./afterRobotSecond/afterRobotSecond";
import AfterRobotThird from "./afterRobotThird/afterRobotThird";

function AfterRobotMain (){
  
  
  
  return(
     <div className="AfterRobotMain">
  
       <AfterRobotFirst/>
       <AfterRobotSecond/>
       <AfterRobotThird/>
       
     </div>
  )
}

export default AfterRobotMain