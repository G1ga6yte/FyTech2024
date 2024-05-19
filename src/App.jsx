import React from "react";
import './App.scss';
import Footer from "./pages/footer/footer";
import {Routes, Route} from "react-router-dom";
import Main from "./pages/main/main";
import Lenis from "@studio-freight/lenis";

import backgroundImage from "./background.png"


function App() {
  const lenis = new Lenis()
  lenis.on('scroll', (e) => {})
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  
  return (
    <div style={{backgroundImage: `url("${backgroundImage}")`}} className="App">
      
  
  
  
      <Routes>
        <Route exact={true} path="/" element={<Main/>}/>
        <Route path="/home" element={<Main/>}/>
      </Routes>
      
      
      
      {/*<Footer/>*/}
    
    </div>
  );
}

export default App;
