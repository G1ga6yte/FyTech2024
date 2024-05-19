import React, {useEffect, useRef, useState} from "react";
import "./main.scss";
import HeadBlock from "./headBlock/headBlock";
import NavBlock from "./navBlock/navBlock";
import SecondBlock from "./secondBlock/secondBlock";
import {useCartContext} from "../../CartContext";

function Main() {
  const {scrollPaused1, setScrollPaused1, myRef1, visible1, myRef2, visible2, visible3} = useCartContext();
  const [step, setStep] = useState(1);
  const [underContent1, setUnderContent1] = useState(false);
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
  
  
  
  function ScrollDetection() {
    const [scrolling, setScrolling] = useState(false);
    const [scrollToSecondBlock, setScrollToSecondBlock] = useState(false)
    
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
                  console.log(step);
                  if (step >= 3){
                    setUnderContent1(true);
                  }
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
                    console.log(step);
                    // if (step <= 2){
                    //   console.log(headBlock);
                    //   window.scrollTo(0, 945)
                    // }
      
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
            
            console.log("Scrolled up");
          }
          setScrolling(true);
        }
      };
      
      // Add scroll event listener when component mounts
      window.addEventListener("wheel", handleScroll);
      
      // Clean up event listener when component unmounts
      return () => {
        window.removeEventListener("wheel", handleScroll);
      };
    }, [scrolling]); // Re-run effect when scrolling state changes
    
    // Reset scrolling state after a short delay
    useEffect(() => {
      const resetScrolling = () => {
        setScrolling(false);
      };
      
      const timeout = setTimeout(resetScrolling, 1000); // Adjust timeout duration as needed
      return () => clearTimeout(timeout);
    }, [scrolling]);
    
    
    
    return (
       <div className="content">
         {/* Your content goes here */}
       </div>
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
       
          <div ></div>
       <div style={{minHeight: `100vh`}}>
         <SecondBlock style={fixed} ref={secondBlockRef} step={step}/>

       </div>
       <div ref={myRef1}></div>
       
       
       {step === 4 &&
          <div style={{height: `200vh`}} className="">
          
          </div>
       }
     </div>
  );
}

export default Main;