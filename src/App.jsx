import React, {Suspense, useEffect, useState} from "react";
import './App.scss';
import {Routes, Route} from "react-router-dom";
import Main from "./pages/main/main";
import Lenis from "@studio-freight/lenis";
import backgroundImage from "./background.png"
import loaderGIF from "./images/loadingVideo.gif"
import loaderImg from "./images/loadingImage.png"
import LoadingBlock from "./components/loadingBlock/loadingBlock";
import OrderProject from "./pages/orderProject/orderProject";
import RouteLoader from "./components/routeLoader/routeLoader";

function App() {
  const lenis = new Lenis({
    duration: 1,
    wheelMultiplier: 0.2,
    
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
      
      <RouteLoader/>
  
  
      <Routes>
        <Route exact={true} path="/" element={<Main/>}/>
        <Route path="/home" element={<Main/>}/>
        <Route path="/order" element={<OrderProject/>}/>
      </Routes>
      
      
      
      
    
    </div>
  );
}

export default App;
