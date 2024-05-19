import React, {useEffect, useRef, useState} from "react";
import "./thirdBlock.scss";
import {Images} from "./images/images";
import {useInView} from "react-intersection-observer";
import project2Img2 from "./images/projectsImg22.png";
import projectImage1 from "./images/projectsVideImg2.png";
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
          setCurrentState(1)
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
        setCurrentState2(1)
      }
    }, 3400);
    
    return () => clearInterval(intervalId);
  }, [currentState2]);
  
  
  
  
  
  
  return (
     <div  className="thirdBlock no-select">
       
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
           <div ref={myRef10} className={`sideTextBlock ${visible10 ? "comeFromDown" : ""}`}>
             <span ref={myRef2}><LettersScrolling text={"We achieve the results"} visible={visible2}/></span>
             <span ref={myRef3}><LettersScrolling text={"you need, regardless"} visible={visible3}/></span>
             <span ref={myRef4}><LettersScrolling text={"of the size of the"} visible={visible4}/></span>
             <span ref={myRef5}><LettersScrolling text={"business"} visible={visible5}/></span>
           </div>
         </div>
         
         
         
         <img className="backgroundImage1" src={Images.projectsImg1} alt=""/>
       
       </div>
       
       <div className="firstBlock">
         
         <div className="sideTextC">
           <div ref={myRef11}  className={`sideTextBlock ${visible11 ? "comeFromRight" : ""}`}>
             <span ref={myRef6}><LettersScrolling text={"with different"} visible={visible6}/></span>
             <span ref={myRef7}><LettersScrolling text={"clients – from market"} visible={visible7}/></span>
             <span ref={myRef8}><LettersScrolling text={"leaders to small"} visible={visible8}/></span>
             <span ref={myRef9}><LettersScrolling text={"companies"} visible={visible9}/></span>
  
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


         </div>
         
         <img className="backgroundImage2" src={Images.projectsImg2} alt=""/>
       
       
       </div>
     
     
     </div>
  );
}

export default ThirdBlock;