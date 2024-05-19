import React, {useEffect, useRef, useState} from "react";
import "./thirdBlock.scss";
import {Images} from "./images/images";
import {useInView} from "react-intersection-observer";
import LettersScrolling from "../../../components/lettersScrolling/lettersScrolling";

function ThirdBlock() {
  const {ref: myRef1, inView: visible1} = useInView();
  
  const {ref: myRef2, inView: visible2} = useInView();
  const {ref: myRef3, inView: visible3} = useInView();
  const {ref: myRef4, inView: visible4} = useInView();
  const {ref: myRef5, inView: visible5} = useInView();
  
  const {ref: myRef6, inView: visible6} = useInView();
  const {ref: myRef7, inView: visible7} = useInView();
  const {ref: myRef8, inView: visible8} = useInView();
  const {ref: myRef9, inView: visible9} = useInView();
  
  const {ref: myRef10, inView: visible10} = useInView();
  const {ref: myRef11, inView: visible11} = useInView();
  const {ref: myRef12, inView: visible12} = useInView();
  
  const {ref: myRef13, inView: visible13} = useInView();
  const {ref: myRef14, inView: visible14} = useInView();
  const {ref: myRef15, inView: visible15} = useInView();
  const {ref: myRef16, inView: visible16} = useInView();
  
  
  const [showVideo1, setShowVideo1] = useState(true);
  const [showVideo2, setShowVideo2] = useState(true);
  const [showVideo3, setShowVideo3] = useState(true);
  
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  
  
  useEffect(() => {
    const video1 = videoRef1.current;
    if (video1) {
      if (video1.canPlayType && !video1.canPlayType("video/mp4")) {
        setShowVideo1(false);
      } else {
        video1.play();
      }
    }
    
    const video2 = videoRef2.current;
    if (video2) {
      if (video2.canPlayType && !video2.canPlayType("video/mp4")) {
        setShowVideo2(false);
      } else {
        video2.play();
      }
    }
    
    const video3 = videoRef3.current;
    if (video3) {
      if (video3.canPlayType && !video3.canPlayType("video/mp4")) {
        setShowVideo3(false);
      } else {
        video3.play();
      }
    }
  }, []);
  
  
  const [currentState, setCurrentState] = useState(1);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentState < 3) {
        setCurrentState(prev => prev + 1);
      } else {
        setCurrentState(1);
      }
    }, 3700);
    
    return () => clearInterval(intervalId);
  }, [currentState]);
  
  const [currentState2, setCurrentState2] = useState(1);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentState2 < 3) {
        setCurrentState2(prev => prev + 1);
      } else {
        setCurrentState2(1);
      }
    }, 3400);
    
    return () => clearInterval(intervalId);
  }, [currentState2]);
  
  const [currentState3, setCurrentState3] = useState(1);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentState3 < 2) {
        setCurrentState3(prev => prev + 1);
      } else {
        setCurrentState3(1);
      }
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, [currentState3]);
  
  const [currentState4, setCurrentState4] = useState(1);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentState4 < 3) {
        setCurrentState4(prev => prev + 1);
      } else {
        setCurrentState4(1);
      }
    }, 4000);
    
    return () => clearInterval(intervalId);
  }, [currentState4]);
  
  
  return (
     <div className="thirdBlock no-select">
       
       <div className="firstBlock">
         
         <div ref={myRef1} className={`videoC ${visible1 ? "comeFromLeft" : ""}`}>
           
           <div className={`videoCont ${currentState === 1 ? "activeContentAnim" : "passiveContentAnim"}`}>
             <div className="videoBlock">
               <img src={Images.project2Img1} alt=""/>
             </div>
             
             <div className={`underText`}>
               <p className="grayText">Business Design Studio</p>
               <p className="grayText">(1)</p>
             </div>
           
           </div>
           <div className={`videoCont ${currentState === 2 ? "activeContentAnim" : "passiveContentAnim2"}`}>
             <div className="videoBlock">
               {showVideo1 ? (
                  <video ref={videoRef1} className="video-player" loop muted>
                    <source src={Images.projectsVideo1} type="video/mp4"/>
                    ...
                  </video>
               ) : (
                  <img src={Images.videoOffImg} alt="Video Poster" className="video-poster"/>
               )}
             
             </div>
             
             <div className={`underText`}>
               <p className="grayText">Business Design Studio</p>
               <p className="grayText">(1)</p>
             </div>
           
           </div>
           <div className={`videoCont ${currentState === 3 ? "activeContentAnim2" : "passiveContentAnim3"}`}>
             <div className="videoBlock">
               {showVideo2 ? (
                  <video ref={videoRef2} className="video-player" loop muted>
                    <source src={Images.video3} type="video/mp4"/>
                    ...
                  </video>
               ) : (
                  <img src={Images.videoOffImg} alt="Video Poster" className="video-poster"/>
               )}
             
             </div>
             
             <div className={`underText`}>
               <p className="grayText">Business Design Studio</p>
               <p className="grayText">(1)</p>
             </div>
           
           </div>
         
         </div>
         
         <div className="sideTextC">
           
           <div className="shakeAnim">
             <p ref={myRef13} className={`highText ${currentState3 === 1 && "activeHighText"}`}><LettersScrolling
                text={"IT"} visible={currentState3 === 1 ? visible13 : false} state={"Y"}/></p>
           </div>
           
           <div className={`roller ${currentState3 === 2 && "activeRoller"}`}>
             <div className="shakeAnim">
               <div className="pill">
                 <div className="oval"></div>
               </div>
               <div className="pill">
                 <div className="oval"></div>
               </div>
               <div className="pill">
                 <div className="oval"></div>
               </div>
               <div className="pill">
                 <div className="oval"></div>
               </div>
               <div className="pill">
                 <div className="oval"></div>
               </div>
             </div>
           </div>
           
           
           <div className="firstTextBlock">
             <div className={`sideTextBlockC3 ${currentState4 === 3 && "activeTextBlock"}`}>
               <div ref={myRef10} className={`sideBlackTextBlock ${visible10 ? "comeFromRight" : ""}`}>
                 <span ref={myRef2}><LettersScrolling text={"TELL US"} visible={visible2} state={"X"}/></span>
                 <span ref={myRef3}><LettersScrolling text={"ABOUT YOUR PRODUCT,"} visible={visible3}
                                                      state={"X"}/></span>
                 <span ref={myRef4}><LettersScrolling text={"WE WILL STUDY IT AND"} visible={visible4}
                                                      state={"X"}/></span>
                 <span ref={myRef5}><LettersScrolling text={"CONTACT YOU!"} visible={visible5} state={"X"}/></span>
               </div>
             </div>
             
             <div
                className={`sideTextBlockC1 ${currentState4 === 1 && "activeTextBlock" || currentState4 === 2 && "activeTextBlock"}`}>
               <div ref={myRef10} className={`sideTextBlock ${visible10 ? "comeFromDown" : ""}`}>
                 <span ref={myRef2}><LettersScrolling text={"We achieve the results"} visible={visible2}
                                                      state={"X"}/></span>
                 <span ref={myRef3}><LettersScrolling text={"you need, regardless"} visible={visible3}
                                                      state={"X"}/></span>
                 <span ref={myRef4}><LettersScrolling text={"of the size of the"} visible={visible4}
                                                      state={"X"}/></span>
                 <span ref={myRef5}><LettersScrolling text={"business"} visible={visible5} state={"X"}/></span>
               </div>
             </div>
           </div>
           
           
           <div className="shakeAnim">
             <p ref={myRef14} className={`highText ${currentState3 === 1 && "activeHighText"}`}><LettersScrolling
                text={"CONSULTING"} visible={currentState3 === 1 ? visible13 : false} state={"Y"}/></p>
           </div>
         
         </div>
         
         
         <img className="backgroundImage1" src={Images.projectsImg1} alt=""/>
       
       </div>
       
       <div className="firstBlock">
         
         <div className="sideTextC">
           
           <div className="shakeAnim">
             <p ref={myRef15} className={`highText2 ${currentState3 === 1 && "activeHighText"}`}><LettersScrolling
                text={"WE"} visible={currentState3 === 1 ? visible15 : false} state={"Y"}/></p>
             <p ref={myRef16} className={`highText2 ${currentState3 === 1 && "activeHighText"}`}><LettersScrolling
                text={"WORK"} visible={currentState3 === 1 ? visible16 : false} state={"Y"}/></p>
           </div>
           
           
           <div
              className={`sideTextBlockC2 ${currentState4 === 1 && "activeTextBlock" || currentState4 === 2 && "activeTextBlock"}`}>
             <div ref={myRef11} className={`sideTextBlock  ${visible11 ? "comeFromRight" : ""}`}>
               <span ref={myRef6}><LettersScrolling text={"with different"} visible={visible6} state={"X"}/></span>
               <span ref={myRef7}><LettersScrolling text={"clients – from market"} visible={visible7}
                                                    state={"X"}/></span>
               <span ref={myRef8}><LettersScrolling text={"leaders to small"} visible={visible8} state={"X"}/></span>
               <span ref={myRef9}><LettersScrolling text={"companies"} visible={visible9} state={"X"}/></span>
             </div>
           </div>
         </div>
         
         
         <div ref={myRef12} className={`videoC ${myRef12 ? "comeFromDown" : ""}`}>
           <div className={`videoCont ${currentState2 === 3 ? "activeContentAnim" : "passiveContentAnim2"}`}>
             <div className="videoBlock">
               <img src={Images.project2Img2} alt=""/>
             
             </div>
             
             <div className={`underText`}>
               <p className="grayText">Business Design Studio</p>
               <p className="grayText">(1)</p>
             </div>
           
           </div>
           <div className={`videoCont ${currentState2 === 1 ? "activeContentAnim2" : "passiveContentAnim3"}`}>
             <div className="videoBlock">
               <img src={Images.projectImage1} alt=""/>
             
             </div>
             
             <div className={`underText`}>
               <p className="grayText">Business Design Studio</p>
               <p className="grayText">(1)</p>
             </div>
           
           </div>
           <div className={`videoCont ${currentState2 === 2 ? "activeContentAnim" : "passiveContentAnim"}`}>
             <div className="videoBlock">
               {showVideo3 ? (
                  <video ref={videoRef3} className="video-player" loop muted>
                    <source src={Images.video31} type="video/mp4"/>
                    ...
                  </video>
               ) : (
                  <img src={Images.videoOffImg} alt="Video Poster" className="video-poster"/>
               )}
             </div>
             
             <div className={`underText`}>
               <p className="grayText">Business Design Studio</p>
               <p className="grayText">(1)</p>
             </div>
           
           </div>
           
           <div className="slideTextBlock shakeAnim">
             <div className="grayLine">DIGITAL</div>
             <div className="grayLine">AGENCY</div>
             <div className="grayLine">MADE</div>
             <div className="orangeLine">EASY</div>

           </div>
         
         </div>
         
         <img className="backgroundImage2" src={Images.projectsImg2} alt=""/>
       
       
       </div>
     
     
     </div>
  );
}

export default ThirdBlock;