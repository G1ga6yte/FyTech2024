import React, {Suspense, useEffect, useState} from "react";
import './App.scss';
import Footer from "./pages/footer/footer";
import {Routes, Route} from "react-router-dom";
import Main from "./pages/main/main";
import Lenis from "@studio-freight/lenis";

import backgroundImage from "./background.png"
import loaderGIF from "./images/loadingVideo.gif"
import loaderImg from "./images/loadingImage.png"
import LoadingBlock from "./components/loadingBlock/loadingBlock";

function App() {
  const lenis = new Lenis({
    duration: 1.5,
    wheelMultiplier: 0.4,
    
  })
  lenis.on('scroll', (e) => {})
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  
  
  
  return (
    <div style={{backgroundImage: `url("${backgroundImage}")`}} className="App">
  
      <LoadingBlock/>
  
  
      <Routes>
        <Route exact={true} path="/" element={<Main/>}/>
        <Route path="/home" element={<Main/>}/>
      </Routes>
      
      
      
      
      {/*<Footer/>*/}
    
    </div>
  );
}

export default App;
