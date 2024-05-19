import React, {Suspense, useEffect, useState} from "react";
import './App.scss';
import Footer from "./pages/footer/footer";
import {Routes, Route} from "react-router-dom";
import Main from "./pages/main/main";
import Lenis from "@studio-freight/lenis";

import backgroundImage from "./background.png"
import loaderGIF from "./images/loadingVideo.gif"
import loaderImg from "./images/loadingImage.png"

function App() {
  const lenis = new Lenis({
    duration: 1.5,
    wheelMultiplier: 0.4
  })
  lenis.on('scroll', (e) => {})
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  
  
  const [showFullLoader, setShowFullLoader] = useState(false);
  const [loaderOpacity, setLoaderOpacity] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullLoader(true);
    }, 7500);
    
    return () => clearTimeout(timer);
  }, [7500]);
  
  useEffect(() => {
    const timer2 = setTimeout(() => {
      setLoaderOpacity(true);
    }, 6000);
    
    return () => clearTimeout(timer2);
  }, [6000]);
  
  return (
    <div style={{backgroundImage: `url("${backgroundImage}")`}} className="App">
      
  
      <div style={{
        display: `${showFullLoader ? "none" : "block"}`,
        opacity: `${loaderOpacity ? "0" : "1"}`
      }} className="loadingBlock">
        <Suspense  fallback={<img className="loadingImg" src={loaderImg} alt=""/>}>
          <img className="loadingSvg" src={loaderGIF} alt=""/>
        </Suspense>
      </div>
  
  
      <Routes>
        <Route exact={true} path="/" element={<Main/>}/>
        <Route path="/home" element={<Main/>}/>
      </Routes>
      
      
      
      
      {/*<Footer/>*/}
    
    </div>
  );
}

export default App;
