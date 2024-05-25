import React from "react";
import "./afterRobotMain.scss"
import AfterRobotFirst from "./afterRobotFirst/afterRobotFirst";
import AfterRobotSecond from "./afterRobotSecond/afterRobotSecond";
import AfterRobotThird from "./afterRobotThird/afterRobotThird";
import AfterRobotForth from "./afterRobotForth/afterRobotForth";
import AfterRobotFive from "./afterRobotFive/afterRobotFive";
import Footer from "./footer/footer";
import {useCartContext} from "../../../CartContext";

function AfterRobotMain (){
  const {forthBlock} = useCartContext()
  
  
  return(
     <div style={{position: forthBlock ? "relative" : "absolute"}} className={`AfterRobotMain ${forthBlock ? "activeRobotMain" : ""}`}>
  
       <AfterRobotFirst/>
       <AfterRobotSecond/>
       <AfterRobotThird/>
       {/*<AfterRobotForth/>*/}
       <AfterRobotFive/>
       <Footer/>
       
     </div>
  )
}

export default AfterRobotMain