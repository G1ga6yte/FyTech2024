import React from "react";
import {useInView} from "react-intersection-observer";
import "./afterRobotFirst.scss"
import {Images} from "./images/images";
import LettersScrolling from "../../../../components/lettersScrolling/lettersScrolling";

function AfterRobotFirst (){
  const { ref: myRef1, inView: visible1 } = useInView();
  const { ref: myRef2, inView: visible2 } = useInView();
  const { ref: myRef3, inView: visible3 } = useInView();
  
  const { ref: myRef4, inView: visible4 } = useInView();
  const { ref: myRef5, inView: visible5 } = useInView();
  const { ref: myRef6, inView: visible6 } = useInView();
  const { ref: myRef7, inView: visible7 } = useInView();
  const { ref: myRef8, inView: visible8 } = useInView();
  const { ref: myRef9, inView: visible9 } = useInView();
  
  const { ref: myRef10, inView: visible10 } = useInView();
  const { ref: myRef11, inView: visible11 } = useInView();
  const { ref: myRef12, inView: visible12 } = useInView();
  const { ref: myRef13, inView: visible13 } = useInView();
  
  
  
  
  
  return(
     <div className="AfterRobotFirst no-select">
  
       <img src={Images.backgroundImage} className="backgroundImage" alt=""/>
  
  
       <div ref={myRef1} className="headerBlock">
         <div className="flexGrow"></div>
         <div className={`underLinedText no-select ${visible1 ? "underLinedTextAnim" :""}`}>
           <p>EFFECTIVITY IN NUMBERS</p>
           <div className="line"></div>
           
           
           <div ref={myRef2} className={`underHeader ${visible2 ? "fromLeft" : ""}`}>We are proud of our work that has helped our clients succeed.</div>
         </div>
       </div>
       
       <div className="contactCont">
         <div className="contactBlock">
           
           <div ref={myRef3} className={`contactText ${visible3 ? "inViewBlock" : ""}`}>
             <div className="textBlock">
               <p className="textPrg">
                 <span>C</span>
                 <span>O</span>
                 <span>N</span>
                 <span>T</span>
                 <span>A</span>
                 <span>C</span>
                 <span>T</span>
               </p>
               <p className="textPrg">
                 <span>C</span>
                 <span>O</span>
                 <span>N</span>
                 <span>T</span>
                 <span>A</span>
                 <span>C</span>
                 <span>T</span>
               </p>
             </div>
             <div className="arrowBlock">
               <svg className="arrowSvg" xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
                 <path d="M4 85L84 5M84 5V66.1765M90 5H14.8738" stroke="white" strokeWidth="10"/>
               </svg>
               <svg className="arrowSvg" xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
                 <path d="M4 85L84 5M84 5V66.1765M90 5H14.8738" stroke="white" strokeWidth="10"/>
               </svg>
             </div>
           </div>
           
           
           <svg className="mainSvg" xmlns="http://www.w3.org/2000/svg" width="494" height="142" viewBox="0 0 494 142" fill="none">
             <path d="M73 116.5L87.5 0H494V116.5H450.5L445.5 131.5H398.5L375.5 141.5L334 116.5L303.5 139L278 116.5L230.5 121L164.5 125L139.5 96L73 116.5Z" fill="#FF6C2C"/>
             <path d="M51.5 116.5L67.5 0H0V116.5L12 104L26 116.5L34 109.5L51.5 116.5Z" fill="#FF6C2C"/>
           </svg>
  
           <svg className="partsSvg" xmlns="http://www.w3.org/2000/svg" width="1249" height="629" viewBox="0 0 1249 629" fill="none">
             <path d="M613 287.5L584.5 255.5L577 226.5L631 255.5L613 287.5Z" fill="#FF6C2C"/>
             <path d="M1107 157.5L1076.5 135.5L1115.5 126L1107 157.5Z" fill="#FF6C2C"/>
             <path d="M854.5 76.5L823 101.5V119.5L892.5 112.5L854.5 76.5Z" fill="#FF6C2C"/>
             <path d="M742 90L731 101.5L759.5 126L775.5 101.5L769 90L751.5 101.5L742 90Z" fill="#FF6C2C"/>
             <path d="M213 629L162.5 577.5H238L213 629Z" fill="#FF6C2C"/>
             <path d="M403.5 330L377 295L412.5 304L403.5 330Z" fill="#FF6C2C"/>
             <path d="M44 57.5L0 9L44 0L79.5 28L44 57.5Z" fill="#FF6C2C"/>
             <path d="M1005.5 135.5L989.5 126L981 119.5L1027 126L1005.5 135.5Z" fill="#FF6C2C"/>
             <path d="M1248.5 144H1216L1202.5 119.5L1248.5 144Z" fill="#FF6C2C"/>
           </svg>
         </div>
         
         
         
         
       </div>
       
       <div className="statisticCont">
        <div ref={myRef4} className={`staticBlock ${visible4 ? "inViewBlock" : ""}`}>
          <p className="countText"><LettersScrolling text={"700+"} state={"X"} visible={visible4}/></p>
          <div className="prgBlock">
            <p className="prg"><LettersScrolling text={"For all the time we"} state={"X"} visible={visible4}/></p>
            <p className="prg"><LettersScrolling text={"make more then"} state={"X"} visible={visible4}/></p>
            <p className="prg"><LettersScrolling text={"700 projects"} state={"X"} visible={visible4}/></p>
          </div>
        </div>
  
         <div ref={myRef5} className={`staticBlock ${visible5 ? "inViewBlock" : ""}`}>
           <p className="countText"><LettersScrolling text={"126%"} state={"X"} visible={visible5}/></p>
           <div className="prgBlock">
             <p className="prg"><LettersScrolling text={"average increase in traffic"} state={"X"} visible={visible5}/></p>
             <p className="prg"><LettersScrolling text={"for our clients"} state={"X"} visible={visible5}/></p>
           </div>
         </div>
  
         <div ref={myRef6} className={`staticBlock ${visible6 ? "inViewBlock" : ""}`}>
           <p className="countText"><LettersScrolling text={"1.1m$+"} state={"X"} visible={visible6}/></p>
           <div className="prgBlock">
             <p className="prg"><LettersScrolling text={"For the last 1 years we saved over"} state={"X"} visible={visible6}/></p>
             <p className="prg"><LettersScrolling text={"$1.000.000 for our enterprise "} state={"X"} visible={visible6}/></p>
             <p className="prg"><LettersScrolling text={"customers."} state={"X"} visible={visible6}/></p>
           </div>
         </div>
  
         <div ref={myRef7} className={`staticBlock ${visible7 ? "inViewBlock" : ""}`}>
           <p className="countText"><LettersScrolling text={"2m$+"} state={"X"} visible={visible7}/></p>
           <div className="prgBlock">
             <p className="prg"><LettersScrolling text={"Last 1 years over"} state={"X"} visible={visible7}/></p>
             <p className="prg"><LettersScrolling text={"$2.000.000 clients’"} state={"X"} visible={visible7}/></p>
             <p className="prg"><LettersScrolling text={"investment."} state={"X"} visible={visible7}/></p>
           </div>
         </div>
  
         <div ref={myRef8} className={`staticBlock ${visible8 ? "inViewBlock" : ""}`}>
           <p className="countText"><LettersScrolling text={"93%"} state={"X"} visible={visible8}/></p>
           <div className="prgBlock">
             <p className="prg"><LettersScrolling text={"For the last 1 year"} state={"X"} visible={visible8}/></p>
             <p className="prg"><LettersScrolling text={"over 93% of project "} state={"X"} visible={visible8}/></p>
             <p className="prg"><LettersScrolling text={"was made before deadline"} state={"X"} visible={visible8}/></p>
           </div>
         </div>
  
         <div ref={myRef9} className={`staticBlock ${visible9 ? "inViewBlock" : ""}`}>
           <p className="countText"><LettersScrolling text={"40+"} state={"X"} visible={visible9}/></p>
           <div className="prgBlock">
             <p className="prg"><LettersScrolling text={"for the last 1 year"} state={"X"} visible={visible9}/></p>
             <p className="prg"><LettersScrolling text={"we finish more then 40 project"} state={"X"} visible={visible9}/></p>
           </div>
         </div>
        
        
       </div>
       
       <div className="paragraphsCont">
         <div ref={myRef10} className={`paragraph ${visible10 ? "activeParagraph" : ""}`}>
           <LettersScrolling text={"Our team operates in more than 10 countries"} state={"X"} visible={visible10}/>
           <LettersScrolling text={"In 8 time zone"} state={"X"} visible={visible10}/>
           <span>Our team operates in more than 10 countries. In 8 time zone</span>
         </div>
  
         <div ref={myRef11} className={`paragraph ${visible11 ? "activeParagraph" : ""}`}>
           <LettersScrolling text={"We make money"} state={"X"} visible={visible11}/>
           <LettersScrolling text={"for startups."} state={"X"} visible={visible11}/>
           <LettersScrolling text={"Series A to Series B"} state={"X"} visible={visible11}/>

         </div>
  
         <div ref={myRef12} className={`paragraph ${visible12 ? "activeParagraph" : ""}`}>
           <LettersScrolling text={"we are boost for"} state={"X"} visible={visible12}/>
           <LettersScrolling text={"every project"} state={"X"} visible={visible12}/>
         </div>
         
         <div ref={myRef13} className={`fytechBlock ${visible13 ? "activeFyTech" : ""}`}>
          <p>Fytechnology LTD</p>
         </div>
         
         
       </div>
       
  
       <img src={Images.bubble1} className="bubbleImage1" alt=""/>
       <img src={Images.bubble2} className="bubbleImage2" alt=""/>
       <img src={Images.bubble3} className="bubbleImage3" alt=""/>

     </div>
  )
}

export default AfterRobotFirst