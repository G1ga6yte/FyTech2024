import React, {Suspense, useEffect, useState} from "react";
import loaderImg from "../../images/loadingImage.png";
import loaderGIF from "../../images/loadingVideo.gif";
import {useCartContext} from "../../CartContext";
import "./loadingBlock.scss";

function LoadingBlock() {
  const {setLoaded, setStep} = useCartContext();
  const [showFullLoader, setShowFullLoader] = useState(false);
  const [loaderOpacity, setLoaderOpacity] = useState(false);
  const [textTransform, setTextTransform] = useState(false)
  const [textSlide, setTextSlide] = useState(false)
  const [loaderOpacity2, setLoaderOpacity2] = useState(false);
  
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullLoader(true);
      setLoaded(true)
    }, 7500);
    
    return () => clearTimeout(timer);
  }, [7500]);
  
  useEffect(() => {
    const timer2 = setTimeout(() => {
      setLoaderOpacity(true);
      setStep(1)
    }, 4000);
    
    return () => clearTimeout(timer2);
  }, [4000]);
  
  useEffect(() => {
    const timer3 = setTimeout(() => {
      setTextTransform(true);
    }, 5500);
    
    return () => clearTimeout(timer3);
  }, [5000]);
  
  useEffect(() => {
    const timer4 = setTimeout(() => {
      setTextSlide(true);
      setLoaderOpacity2(true);
      window.scrollTo(-100, 0)
    }, 6500);
    
    return () => clearTimeout(timer4);
  }, [6500]);
  
  
  
  return (
     <div style={{
       display: `${showFullLoader ? "none" : "block"}`,
     }} className="loadingCont">
       
       <div style={{
         opacity: `${loaderOpacity2 ? "0" : "1"}`,
       }} className="headerBlock">
         
         <div className={`text1Block ${textSlide ? "textGoUp" : ""}`}>
           <p className={`text1 ${textTransform ? "TextTransform" : ""}`}>fytechnology</p>
           <p className={`text1 ${textTransform ? "TextTransform" : ""}`}>fytechnology</p>
         </div>
         
         <div className="flex">
           <div className={`text2Block ${textSlide ? "textGoRight" : ""}`}>
             <p className={`text1 ${textTransform ? "TextTransform" : ""}`}>Digital</p>
             <p className={`text1 ${textTransform ? "TextTransform" : ""}`}>Digital</p>
           </div>
         </div>
         
         <div className="flex">
           <div className={`text3Block ${textSlide ? "textGoLeft" : ""}`}>
             <p className={`text1 ${textTransform ? "TextTransform" : ""}`}>Agency</p>
             <p className={`text1 ${textTransform ? "TextTransform" : ""}`}>Agency</p>
           </div>
           <div className={`text4Block ${textSlide ? "textGoDown" : ""}`}>
             <p className={`text1 ${textTransform ? "TextTransform" : ""}`}>LTD</p>
             <p className={`text1 ${textTransform ? "TextTransform" : ""}`}>LTD</p>
           </div>
         </div>
       
       </div>
       
       <div style={{
         opacity: `${loaderOpacity ? "0" : "1"}`,
       }} className="loadingBlock">
         <Suspense fallback={<img className="loadingImg" src={loaderImg} alt=""/>}>
           <img className="loadingSvg" src={loaderGIF} alt=""/>
         </Suspense>
       </div>
     </div>
  );
}

export default LoadingBlock;