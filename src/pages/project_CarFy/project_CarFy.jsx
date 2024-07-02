import React from "react";
import {useCartContext} from "../../CartContext";
import "./project_CarFy.scss"
import HeadBlock from "./headBlock/headBlock";
import {useInView} from "react-intersection-observer";
import SecondBlock from "./secondBlock/secondBlock";
import ThirdBlock from "./thirdBlock/thirdBlock";
import ForthBlock from "./forthBlock/forthBlock";
import FifthBlock from "./fivthBlock/fifthBlock";

function Project_CarFy (){
  const {ref: myRef1, inView: visible1} = useInView();
  
  return(
     <div className="ProjectBlock">
     
       <HeadBlock/>
       <SecondBlock/>
       <ThirdBlock/>
       <ForthBlock/>
       <FifthBlock/>
      
     
     </div>
  )
}

export default Project_CarFy