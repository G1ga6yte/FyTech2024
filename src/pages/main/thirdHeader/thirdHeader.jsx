import React, {useState} from "react";
import "./thirdHeader.scss"
import backgroundImg from "./overWhiteCover.png"
import {useInView} from "react-intersection-observer";
import LettersScrolling from "../../../components/lettersScrolling/lettersScrolling";

function ThirdHeader (){
  const { ref: myRef1, inView: visible1 } = useInView();
  const { ref: myRef2, inView: visible2 } = useInView();
  const { ref: myRef3, inView: visible3 } = useInView();
  const { ref: myRef4, inView: visible4 } = useInView();
  const [btn1, setBtn1] = useState(false)
  return(
     <div  className="ThirdHeader ">
       <img className="background" src={backgroundImg} alt=""/>
       <svg ref={myRef4} className={`${visible4 ? "":"activeSVG"}`} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1572 133" fill="none">
         <path  d="M51.5 45L0.5 4H51.5V45Z" fill="#101010"/>
         <path d="M142 21.5L162.5 57.5L177 39L142 21.5Z" fill="#101010"/>
         <path d="M227.5 82L92.5 66.5V93H142L170 132.5L227.5 82Z" fill="#101010"/>
         <path d="M443 45L341.5 27.5L338.5 31.5L369 82L443 45Z" fill="#101010"/>
         <path d="M241 16H227.5V27.5H241V16Z" fill="#101010"/>
         <path d="M570.5 27.5L511 31.5L577 4L608.5 16L570.5 27.5Z" fill="#101010"/>
         <path d="M633.5 31.5L591 57.5L608.5 75.5L655 66.5L633.5 31.5Z" fill="#101010"/>
         <path d="M479 66.5L518.5 57.5L530.5 75.5L511 82L479 66.5Z" fill="#101010"/>
         <path d="M843 57.5L828.5 27.5L865.5 45L843 57.5Z" fill="#101010"/>
         <path d="M969 11L976.017 14.6635L1032 4L1025.5 40.5L976.017 14.6635L969 16V11Z" fill="#101010"/>
         <path d="M1103.5 50.5L1095.5 16L1108 40.5L1147.5 50.5H1103.5Z" fill="#101010"/>
         <path d="M1235 50.5V27.5L1256.5 45L1235 50.5Z" fill="#101010"/>
         <path d="M1214.5 114L1309 62V57.5L1278 50.5L1191 75.5L1214.5 114Z" fill="#101010"/>
         <path d="M1017 66.5L921.5 57.5H916.5L969 82L1017 66.5Z" fill="#101010"/>
         <path d="M1419.5 0L1426 40.5L1453.5 57.5L1483.5 27.5L1419.5 0Z" fill="#101010"/>
         <path d="M1354 11L1317 22L1366.5 31L1354 11Z" fill="#101010"/>
         <path d="M1572 66.5L1522 11L1519.5 13L1522 114L1572 66.5Z" fill="#101010"/>
       </svg>
  
       <div className="headerBlock no-select">
         <p ref={myRef3} className={`prgBlock ${visible3 ? "comeFromRight3" : ""}`}>
           <LettersScrolling text={"creating a digital"} state={"X"} visible={visible3}/>
           <LettersScrolling text={"environment for"} state={"X"} visible={visible3}/>
           <LettersScrolling text={"the user"} state={"X"} visible={visible3}/>
         </p>
         
         <div className="flexGrowHere"></div>
         <div  className="header">
           
           <div ref={myRef1} className={`underLinedText ${visible1 ? "underLinedTextAnim" : ""}`}>
             <p>projects</p>
             <div className="line"></div>
           </div>
           
           <button onMouseLeave={()=>setBtn1(false)} onMouseOver={()=>setBtn1(true)} ref={myRef2} className={`seeMoreBtn ${visible2 ? "activeBtn" : ""}`}><LettersScrolling text={"see more"} state={"Y"} visible={btn1}/></button>
           
         </div>
         
         <div className="flexBlock"></div>
       </div>
       
     </div>
  )
}

export default ThirdHeader