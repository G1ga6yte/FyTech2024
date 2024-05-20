import React from "react";
import "./thirdWhiteEnd.scss"
import endImg from "./endImage.png"
import {useInView} from "react-intersection-observer";
function ThirdWhiteEnd (){
  const { ref: myRef1, inView: visible1 } = useInView();
  
  return(
     <div className="thirdWhiteEnd">
       <img src={endImg} alt="" className="endImg"/>
       <svg ref={myRef1} className={`${visible1 ? "":"activeSVG"}`} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1559 111" fill="none">
         <path d="M87.5 92L0.5 23.5H69.5L87.5 92Z" fill="white"/>
         <path d="M202 48.5H177L166 76H202V48.5Z" fill="white"/>
         <path d="M323 92L270 58.5L363 76L323 92Z" fill="white"/>
         <path d="M474 70.5L456 37L536.5 63L474 70.5Z" fill="white"/>
         <path d="M486.5 0H421.5L418 3.5L474 16L486.5 0Z" fill="white"/>
         <path d="M682 9L644 48.5L658.5 70.5L727 37L682 9Z" fill="white"/>
         <path d="M600.5 104.5L577 63L626 92L600.5 104.5Z" fill="white"/>
         <path d="M863 37L777.5 23.5V30L883 111L863 37Z" fill="white"/>
         <path d="M1119.5 9L988.5 23.5V48.5H1111L1119.5 9Z" fill="white"/>
         <path d="M958.5 92L929 58.5H958.5V92Z" fill="white"/>
         <path d="M1318 37H1205L1193 63H1275L1318 37Z" fill="white"/>
         <path d="M1405.5 48.5H1377.5L1390.5 30L1405.5 48.5Z" fill="white"/>
         <path d="M1356 76H1411.5V63H1356V76Z" fill="white"/>
         <path d="M1507.5 23.5H1471.5L1495 63L1507.5 23.5Z" fill="white"/>
         <path d="M1532 30H1558.5L1552.5 15.5L1532 9V30Z" fill="white"/>
       </svg>
       
     </div>
  )
}

export default ThirdWhiteEnd