import React from "react";
import {Images} from "./images/images";
import LettersScrolling from "../../../components/lettersScrolling/lettersScrolling";
import {useInView} from "react-intersection-observer";
import "./secondBlock.scss";

function SecondBlock() {
  const {ref: myRef1, inView: visible1} = useInView();
  const {ref: myRef2, inView: visible2} = useInView();
  const {ref: myRef3, inView: visible3} = useInView();
  const {ref: myRef4, inView: visible4} = useInView();
  const {ref: myRef5, inView: visible5} = useInView();
  const {ref: myRef6, inView: visible6} = useInView();
  const {ref: myRef7, inView: visible7} = useInView();
  const {ref: myRef8, inView: visible8} = useInView();
  
  
  
  
  return (
     <div className="secondBlock">
       
       <img src={Images.vector} className="vectorImg" alt=""/>
       
       <div className="mainBlock">
         <div className="textBlock">
           
           <p ref={myRef1} className="miniHeader"><LettersScrolling text={"We have great expertise"} state={"X"}
                                                                    visible={visible1}/></p>
           
           <div ref={myRef2} className={`verticalTextLines ${visible2 ? "activeTextBlock" : ""}`}>
             <p className="text leftLine">
               in retail,
             </p>
             
             <div className="text">
               <span>but</span>
               <span>we</span>
               <span>are ready</span>
               <span>to work with</span>
               <span>projects in other</span>
               <span>industries,</span>
             </div>
           
           </div>
           
           <p ref={myRef3} className={`text underPrg ${visible3 ? "activeUnderPrg" : ""}`}>deeply understanding the
             needs and goals of your project.</p>
         
         </div>
         
         <div ref={myRef4} className={`statisticBlock ${visible4 ? "activeStatBlock" : ""}`}>
           <p ref={myRef5} className={`count ${visible5 ? "activeCount" : ""}`}>20+</p>
           <p ref={myRef6} className={`miniHeader ${visible6 ? "activeMiniHeader" :""}`}>satisfied clients</p>
           <p ref={myRef7} className={`count ${visible7 ? "activeCount" : ""}`}>40+</p>
           <p ref={myRef8} className={`miniHeader ${visible8 ? "activeMiniHeader" :""}`}>completed projects</p>
           <button className="nextBtn"><img src={Images.arrowRight} alt=""/></button>
         </div>
       
       
       </div>
     
     </div>
  );
}

export default SecondBlock;