import React from "react";
import './App.scss';
import Nav from "./pages/nav/nav";
import Footer from "./pages/footer/footer";
import {Routes, Route} from "react-router-dom";
import Main from "./pages/main/main";

function App() {
  
  
  return (
    <div className="App">
      
      <Nav/>
      
      <Routes>
        <Route exact={true} path="/" element={<Main/>}/>
        <Route path="/home" element={<Main/>}/>
      </Routes>
      
      <Footer/>
    
    </div>
  );
}

export default App;
