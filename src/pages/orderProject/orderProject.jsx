import React, {useState} from "react";
import "./orderProject.scss";
import {useInView} from "react-intersection-observer";
import {useCartContext} from "../../CartContext";
import LettersScrolling from "../../components/lettersScrolling/lettersScrolling";
import DubbleLetter from "../../components/dubbleLetter/dubbleLetter";
import {Images} from "./images/images";

function OrderProject() {
  const {loader} = useCartContext();
  const services = ["PRODUCT DESIGN", "DESIGN", "DEVELOPMENT", "BRANDING", "OTHER", "CAMPAIGN", "WEBGL / VR",
                    "UX / UI / IA", "Analytics", "Advance Services", "IT Consulting", "Software Testing"];
  const budgetDate = ["UNDER $10K", "$10-30K", "$30-60K", "$30-60K", "$100K+"];
  const fyTechInfo = [
     "CSS DESIGN AWARDS 1",
     "CSS DESIGN AWARDS 2",
     "CSS DESIGN AWARDS 3",
     "CSS DESIGN AWARDS 4",
     "CSS DESIGN AWARDS 5",
     "CSS DESIGN AWARDS 6"
  ]
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
  
  
  /////////////////////////// All saved values //////////////////////
  const [activeServices, setActiveServices] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [briefText, setBriefText] = useState("");
  const [websiteUrl, setWebSiteUrl] = useState("");
  const [date, setDate] = useState("");
  const [budget, setBudget] = useState(budgetDate[0]);
  const [deadLine, setDeadLine] = useState("");
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [infoFyTech,setInfoFyTech] = useState("")
  
  ///////////////////////////////////////////////////////////////////
  
  
  function updateActiveServices(service) {
    if (activeServices.includes(service)) {
      const updatedServices = activeServices.filter(item => item !== service);
      setActiveServices(updatedServices);
    } else {
      const updatedServices = activeServices.concat(service);
      setActiveServices(updatedServices);
    }
  }
  
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(prevFiles => [...prevFiles, ...files]);
  };
  
  const removeFile = (fileName) => {
    setSelectedFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
  };
  
  const handleChangeDate = (event) => {
    let input = event.target.value;
    
    input = input.replace(/\D/g, "");
    
    if (input.length >= 2 && input[1] !== "/") {
      input = input.slice(0, 2) + "/" + input.slice(2);
    }
    if (input.length >= 5 && input[4] !== "/") {
      input = input.slice(0, 5) + "/" + input.slice(5);
    }
    
    input = input.slice(0, 10);
    
    setDate(input);
  };
  
  const handleKeyDown = (event) => {
    if (event.keyCode === 8) {
      const input = event.target.value;
      const formattedDate = input.slice(0, -1);
      setDate(formattedDate);
    }
  };
  
  
  const [rangeVal, setRangeVal] = useState(1);
  const [rangeMouseActive, setRangeMouseActive] = useState(false);
  const [transition, setTransition] = useState(false);
  const handleMouseUp = () => {
    setRangeMouseActive(false);
    setTransition(true);
    
    if (rangeVal === 1) {
      setBudget(budgetDate[0]);
    }
    if (rangeVal < 250) {
      if (250 - rangeVal > 125) {
        setRangeVal(1);
        setBudget(budgetDate[0]);
      } else {
        setRangeVal(250);
        setBudget(budgetDate[1]);
      }
    }
    if (rangeVal === 250) {
      setBudget(budgetDate[1]);
    }
    
    if (rangeVal > 250 && rangeVal < 500) {
      if (500 - rangeVal > 125) {
        setRangeVal(250);
        setBudget(budgetDate[1]);
      } else {
        setRangeVal(500);
        setBudget(budgetDate[2]);
      }
    }
    if (rangeVal === 500) {
      setBudget(budgetDate[2]);
    }
    
    if (rangeVal > 500 && rangeVal < 750) {
      if (750 - rangeVal > 125) {
        setRangeVal(500);
        setBudget(budgetDate[2]);
      } else {
        setRangeVal(750);
        setBudget(budgetDate[3]);
      }
    }
    if (rangeVal === 750) {
      setBudget(budgetDate[3]);
    }
    
    if (rangeVal > 750 && rangeVal < 1000) {
      if (1000 - rangeVal > 125) {
        setRangeVal(750);
        setBudget(budgetDate[3]);
      } else {
        setRangeVal(1000);
        setBudget(budgetDate[4]);
      }
    }
    if (rangeVal === 1000) {
      setBudget(budgetDate[4]);
    }
    
    
  };
  const handleMouseDown = () => {
    setTransition(false);
    setRangeMouseActive(true);
    
  };
  
  return (<div className="OrderProject no-select">
       <div className="headerBlock">
         <svg className={`${loader ? "" : "showedSvg"}`} viewBox="0 0 580 307" fill="none"
              xmlns="http://www.w3.org/2000/svg">
           <g opacity="0.5" clipPath="url(#clip0_68_1396)">
             <path
                d="M300.245 111.094L272.591 195.949H126.46L117.93 222.144L90.387 306.999H0L27.5436 222.144L36.0671 195.949L49.0578 156.091C57.8003 129.272 83.0089 111.094 111.468 111.094H300.245Z"
                fill="#A6A6A6"/>
             <path
                d="M575.794 0.0507812L505.286 216.924C487.833 270.606 437.389 307.001 380.438 307.001H120.234L147.778 222.146H365.381C393.851 222.146 419.071 203.951 427.802 177.121L485.4 0.0507812H575.794Z"
                fill="#A6A6A6"/>
             <path
                d="M455.671 0.0878906L428.018 84.9431L419.598 111.133L406.613 150.995C397.876 177.815 372.662 195.993 344.203 195.993H302.43L329.973 111.133L338.502 84.9431L366.046 0.0878906H455.671Z"
                fill="#A6A6A6"/>
             <path d="M336.326 0L308.673 84.8549H72.1484L85.1393 44.9976C93.882 18.1782 119.091 0 147.55 0H336.326Z"
                   fill="#A6A6A6"/>
           </g>
           <defs>
             <clipPath id="clip0_68_1396">
               <rect width="580" height="307" fill="white"/>
             </clipPath>
           </defs>
         </svg>
         
         <div className={`header ${loader ? "" : "showedHeader"}`}>
           <p className="headerPrg">Shall we discuss your project?</p>
           <div className="line"></div>
         </div>
       
       
       </div>
       
       <div className="orderBlock">
         
         <div className="servicesCont">
           
           <p ref={myRef1} className="sectionHeader"><DubbleLetter text={"WHAT SERVICES DO YOU NEED?"}
                                                                   state={loader ? false : visible1} trns={0.1}/></p>
           
           <div className="services">
             {services.map((el, index) => {
               return (<button
                     className={`serviceBtn ${activeServices.includes(el) ? "activeServiceBtn" : ""}`}
                     key={index}
                     onClick={() => updateActiveServices(el)}
                  ><LettersScrolling text={el} state={"X"} visible={activeServices.includes(el)}/></button>);
             })}
           </div>
         
         </div>
         
         <div className="briefCont">
           
           <div className="sectionHeaderBlock">
             <p ref={myRef2} className="sectionHeader"><DubbleLetter text={"What’s YOUR BRIEF?"}
                                                                     state={loader ? false : visible2} trns={0.1}/></p>
             
             <label htmlFor="fileInput" className="fileInput">
               <input id="fileInput" type="file" multiple onChange={handleFileChange}/>
               <img src={Images.uploadSvg} className="uploadImg" alt=""/>
               <span>*Send the brief to us as a file</span>
             </label>
             
             
             <div className="selectedFiles">
               {selectedFiles.map((el, index) => {
                 return (<div key={index} className="fileBlock">
                      {el.name}
                      <button onClick={() => removeFile(el.name)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 25" fill="none">
                          <path
                             d="M0.598836 22.9317C-0.00358719 21.5061 0.265807 19.7528 1.20054 19.0155L24.8954 0.325408C25.8302 -0.411896 27.0763 0.146031 27.6787 1.57157C28.2811 2.99711 28.0117 4.75045 27.077 5.48775L3.38211 24.1778C2.44738 24.9151 1.20126 24.3572 0.598836 22.9317Z"
                             fill="#1D1D1D"/>
                          <path
                             d="M27.4012 23.4284C28.0036 22.0029 27.7342 20.2496 26.7995 19.5122L3.10457 0.822155C2.16983 0.0848508 0.923713 0.642778 0.32129 2.06832C-0.281133 3.49386 -0.0117395 5.24719 0.922998 5.9845L24.6179 24.6746C25.5526 25.4119 26.7987 24.854 27.4012 23.4284Z"
                             fill="#1D1D1D"/>
                        </svg>
                      </button>
                    </div>);
               })}
             </div>
           
           </div>
           
           <textarea onChange={(e) => setBriefText(e.target.value)} value={briefText} className="briefTextArea"
                     placeholder="TEXT" name="brief" id="brief" cols="30" rows="10"></textarea>
         
         </div>
         
         <div className="infoCont">
           
           <div ref={myRef3} className="infoBlock">
             <p className="sectionHeader"><DubbleLetter text={"CURRENT"} state={loader ? false : visible3} trns={0.1}/>
             </p>
             <p className="sectionHeader"><DubbleLetter text={"WEBSITE URL?"} state={loader ? false : visible3}
                                                        trns={0.1}/></p>
             
             <input placeholder="WWW.EXAMPLE.COM" onChange={(e) => setWebSiteUrl(e.target.value)} value={websiteUrl}
                    type="text" className="infoInput"/>
           
           </div>
           
           
           <div ref={myRef4} className="infoBlock">
             <p className="sectionHeader"><DubbleLetter text={"WHEN WOULD YOU"} state={loader ? false : visible4}
                                                        trns={0.1}/></p>
             <p className="sectionHeader"><DubbleLetter text={"LIKE START?"} state={loader ? false : visible4}
                                                        trns={0.1}/></p>
             
             <input placeholder="DD / MM / YYYY" onKeyDown={handleKeyDown} onChange={handleChangeDate} value={date}
                    type="text" className="infoInput"/>
           
           </div>
         
         </div>
         
         <div className="budgetCont">
           <div ref={myRef5} className="budgetBlock">
             <div style={{
               transition: `${transition ? "0.8s ease-in-out" : "0s"}`, left: `${10 + (rangeVal * 0.08)}%`,
             }} className="background"></div>
             
             <p className="sectionHeader"><DubbleLetter text={"WHAT IS YOUR BUDGET?"} state={loader ? false : visible5}
                                                        trns={0.1}/></p>
             
             <div className="line">
               <div className="rangeBlock">
                 <label htmlFor="rangeInput">
                   <div style={{
                     transition: `${transition ? "0.5s ease-in-out" : "0s"}`, left: `${rangeVal / 10}%`,
                   }} className="rangeBall"><img src={Images.radioBall} alt=""/></div>
                 </label>
                 <input onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} id="rangeInput" type="range"
                        defaultValue={1} min={1} max={1000} onChange={(event) => setRangeVal(event.target.value)}
                        className="rangeInput"/>
               
               </div>
               <div className="rangeValues">
                 {budgetDate.map((el, index) => {
                   return (<button
                         key={index}
                      >
                        <span>{el}</span>
                      </button>);
                 })}
               </div>
             </div>
           
           </div>
         </div>
         
         <div className="deadLineCont">
           <p ref={myRef9} className="sectionHeader"><DubbleLetter text={"DO YOU HAVE A DEADLINE?"} state={loader ? false : visible9} trns={0.1}/></p>
           
           
           <div className="buttonsBlock">
             <button
                className={`deadLineBtn ${deadLine === "Yes" ? "activeBtn" : ""}`}
                onClick={() => setDeadLine("Yes")}
             >
               <LettersScrolling text={"Yes"} state={"X"} visible={deadLine === "Yes"}/>
             </button>
  
             <button
                className={`deadLineBtn ${deadLine === "NO, NO RUSH" ? "activeBtn" : ""}`}
                onClick={() => setDeadLine("NO, NO RUSH")}
             >
               <LettersScrolling text={"NO, NO RUSH"} state={"X"} visible={deadLine === "NO, NO RUSH"}/>
             </button>
  
             <button
                className={`deadLineBtn ${deadLine === "NO, BUT ASAP PLEASE" ? "activeBtn" : ""}`}
                onClick={() => setDeadLine("NO, BUT ASAP PLEASE")}
             >
               <LettersScrolling text={"NO, BUT ASAP PLEASE"} state={"X"} visible={deadLine === "NO, BUT ASAP PLEASE"}/>
             </button>
           </div>
         </div>
         
         <div className="endInfoCont">
           <div className="inputsBlock">
             <div className="firstInputBlock">
               <p ref={myRef7} className="sectionHeader"><DubbleLetter text={"What’s Your Name?"} state={loader ? false : visible7} trns={0.1}/></p>
  
               <input onChange={(e)=>setName(e.target.value)} type="text" className="textInput" placeholder="PIT MATTON"/>
             </div>
  
             <div>
               <p ref={myRef8} className="sectionHeader"><DubbleLetter text={"What’s Your Email?"} state={loader ? false : visible8} trns={0.1}/></p>
  
               <input onChange={(e)=>setEmail(e.target.value)} type="email" className="textInput" placeholder="Your@email.com"/>

             </div>
           </div>
           
           <div className="aboutUsBlock">
             <p ref={myRef10} className="sectionHeader"><DubbleLetter text={"WHERE DID YOU"} state={loader ? false : visible10} trns={0.1}/></p>
             <p className="sectionHeader"><DubbleLetter text={"HEAR ABOUT US?"} state={loader ? false : visible10} trns={0.1}/></p>

             <div className="buttonsBlock">
               
  
               {fyTechInfo.map((el, index)=>{
                 return(
                    <button key={index} onClick={()=>{
                      setInfoFyTech(el)
                    }} className={`aboutUsBtn ${infoFyTech === el ? "activeBtn" : ""}`}>
                      <LettersScrolling text={el} state={"X"} visible={infoFyTech === el}/>
                    </button>
                 )
               })}
             </div>
             
             
           </div>
         </div>
         
          <div className="buttonCont">
            <button className="submitBtn">SUBMIT</button>
          </div>
         
       </div>
     </div>);
}

export default OrderProject;