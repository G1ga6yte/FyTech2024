import React, {useEffect, useRef, useState} from "react";
import "./main.scss";
import HeadBlock from "./headBlock/headBlock";
import NavBlock from "./navBlock/navBlock";
import SecondBlock from "./secondBlock/secondBlock";
import {useCartContext} from "../../CartContext";
import backgroundImg from "../../background.png";
import ThirdBlock from "./thirdBlock/thirdBlock";
import ThirdHeader from "./thirdHeader/thirdHeader";
import ThirdWhiteEnd from "./thirdWhiteEnd/thirdWhiteEnd";
import LoadingBlock from "../../components/loadingBlock/loadingBlock";

function Main() {
  const {scrollPaused1, setScrollPaused1, myRef1, visible2, visible3} = useCartContext();
  const [step, setStep] = useState(1);
  const secondBlockRef = useRef(null);
  const [headBlock, setHeadBlock] = useState(0)
  const [fixed, setFixed] = useState(false)
  
  useEffect(()=>{
    let headBlock = document.getElementById("headBlock")
    setHeadBlock(headBlock.offsetHeight)
  }, [])
  
  useEffect(()=>{
    setScrollPaused1(false)
    setStep(1)
    setFixed(false)
  }, [visible3])
  
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  
  
  
  function ScrollDetection() {
    const [scrolling, setScrolling] = useState(false);
    
    useEffect(() => {
      const handleScroll = (event) => {
        if (!scrolling) {
          const delta = event.deltaY;
          if (delta > 0) {
            setFixed(false)
  
            if (scrollPaused1) {
              if (step < 4) {
                setTimeout(()=>{
                  setStep(prev => prev + 1);
                  
                }, 500)
                
              } else {
              
              }
            }
            
            
          } else if (delta < 0) {
  
            if (scrollPaused1) {
              if (visible2){
  
                if (step > 2){
                  setTimeout(()=>{
                    setStep(prev => prev - 1);
                  }, 500)
                  setFixed(false)
  
                } else if (step === 2) {
                  setFixed(true)
  
                    setTimeout(()=>{
                      setStep(1)
                    }, 500)
                    setTimeout(()=>{
                      window.scrollTo(0, headBlock)
                    }, 500)
  
                  
                } else {
                  setFixed(false)
                }
              }
              
            }
            
          }
          setScrolling(true);
        }
      };
      
      window.addEventListener("wheel", handleScroll);
      
      return () => {
        window.removeEventListener("wheel", handleScroll);
      };
    }, [scrolling]);
    
    useEffect(() => {
      const resetScrolling = () => {
        setScrolling(false);
      };
      
      const timeout = setTimeout(resetScrolling, 1500);
      return () => clearTimeout(timeout);
    }, [scrolling]);
    
    
    
    return (
       <div className="content"></div>
    );
  }
  
  return (
     <div className="MainCont G-Container">
       <ScrollDetection/>
       
  
       {step === 1 &&
          <div id="headBlock" className="topCont">
            <NavBlock/>
            <HeadBlock/>
            <div></div>
          </div>
       }
  
       <div className="secondContent" style={{minHeight: `100vh`, backgroundImage: `url("${backgroundImg}")`}}>
         <SecondBlock style={fixed} ref={secondBlockRef} step={step}/>
  
       </div>
       <div ref={myRef1}></div>
  
  
       {step === 4 &&
          <div  className="thirdCont">
            <div style={{height: `200px`}}></div>
            <ThirdHeader/>
            <ThirdBlock/>
            <ThirdWhiteEnd/>
            
            
            
            <div style={{height: `200vh`}}></div>
          </div>
          
       }
       
     </div>
  );
}

export default Main;