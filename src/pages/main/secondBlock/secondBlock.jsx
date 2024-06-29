import React, {useEffect, useState} from "react";
import "./secondBlock.scss";
import {Images} from "./images/images";
import {useCartContext} from "../../../CartContext";
import backgroundImg from "../../../background.png";
import {useInView} from "react-intersection-observer";
import HomeSpinnerSpline1 from "../../../models/homeSpinnerSpline1/homeSpinnerSpline1";
import HomeSpinnerSpline2 from "../../../models/homeSpinnerSpline2/homeSpinnerSpline2";


function SecondBlock({step, ref, style}) {
  const data1 = [
    {
      name : "design and branding",
      items: [
        "Content strategy",
        "Brand identity",
        "Information architecture",
        "Brand and design system development",
        "Design technology consulting",
        "Accessibility consulting",
        "Dashboard design",
        "UI/UX",
      ],
    },
    {
      name : "software developing",
      items: [
        "Application development",
        "Web development",
        "Mobile app development",
        "DevOps and cloud migration",
        "VR/AR developing",
        "Custom software development",
        "Legacy system modernization",
      ],
    },
  
  ];
  const data2 = [
    {
      name : "IT Consulting & Strategy",
      items: [
        "Technology roadmap development",
        "Digital transformation consulting",
        "IT project management",
        "Blockchain Consultation",
      ],
    },
    {
      name : "Software Testing & Quality Assurance ",
      items: [
        "Payment Method Testing",
        "Website & App QA Testing",
        "User Experience Testing ",
        "Localization Testing",
      ],
    },
  
  ];
  const data3 = [
    {
      name : "Big Data & Analytics",
      items: [
        "Big data processing and analysis",
        "Business analytics",
        "Data visualization",
      ],
    },
    {
      name : "New Technologies Integration",
      items: [
        "Development of solutions based on artificial intelligence and machine learning",
        "Development of IoT (Internet of Things) applications",
        "Implementation of blockchain technology",
      ],
    },
  
  ];
  const data4 = [
    {
      name : "Advance Services",
      items: [
        "Artificial intelligence and machine learning*",
        "Internet of Things (IoT) - Cloud computing*",
        "DevOps - Agile development*",
        "Customer experience (CX) management*",
      ],
    },
    {
      name : "Web 3.0",
      items: [
        "Smart Contract Development",
        "Decentralized Application (DApp) Development",
        "Blockchain Data Management and Analytics",
        "Blockchain Consultation",
        "Smart Contract Security Development and Audit",
        "Integration with Distributed Ledger Technology (DLT)",
        "Cryptocurrency Wallet Development and Maintenance",
        "Testing and Quality Assurance",
        "Technical Support and Maintenance",
      ],
    },
  
  ];
  const data5 = [
    {
      name   : "Big Data & Analytics",
      content: [
        "Big data processing and analysis",
        "Business analytics",
        "Data visualization",
      ],
    },
    {
      name   : "New Technologies Integration",
      content: [
        "Development of solutions based on artificial intelligence and machine learning",
        "Development of IoT (Internet of Things) applications",
        "Implementation of blockchain technology",
      ],
    },
    {
      name   : "IT Consulting & Strategy",
      content: [
        "Technology roadmap development",
        "Digital transformation consulting",
        "IT project management",
        "Blockchain Consultation",
      ],
    },
    {
      name   : "Software Testing & Quality Assurance ",
      content: [
        "Application development",
        "Web development",
        "Mobile app development",
        "Custom software development",
        "Legacy system modernization",
        "DevOps and cloud migration",
        "VR/AR developing",
      ],
    },
  ];
  
  const {ref: myRef11, inView: visible11} = useInView();
  const {ref: myRef3, inView: visible3} = useInView();
  const {ref: myRef4, inView: visible4} = useInView();
  const {ref: myRef5, inView: visible5} = useInView();
  const {ref: myRef6, inView: visible6} = useInView();
  
  const [circleWidth, setCircleWidth] = useState(0);
  
  const [changeableData, setChangeableData] = useState(data1);
  useEffect(() => {
    setChangeableData(data1);
  }, []);
  
  const {myRef2, myRef1} = useCartContext();
  
  useEffect(() => {
    if (step === 1) {
      if (changeableData !== data1) {
        setChangeableData(data1);
      } else {
      }
    } else if (step === 3) {
      if (changeableData !== data3) {
        setChangeableData(data3);
      } else {
      }
    }
  }, [step]);
  
  useEffect(() => {
    let x = window.innerHeight * 0.8;
    setCircleWidth(x);
  }, []);
  
  return (
     <div style={{backgroundImage: `url("${backgroundImg}")`, position: style ? "fixed" : "relative"}} ref={ref}
          id="secondBlock" className="SecondBlock no-select">
       <HomeSpinnerSpline1/>
       <HomeSpinnerSpline2/>
       <div ref={myRef2}></div>
       
       <div className="mainBlock">
         
         <div ref={myRef11} className="headerBlock">
           <div className="flexGrow"></div>
           <div className={`underLinedText no-select ${visible11 ? "underLinedTextAnim" : ""}`}>
             <p>what we do</p>
             <div className="line"></div>
           </div>
         </div>
         
         <div className="circleCont">
           <img className="overImg" src={Images.overImg} alt=""/>
           
           
           <div id="circleCont" style={{
             width   : `${circleWidth}px`,
             maxWidth: `${circleWidth}px`,
             height: `${circleWidth}px`,
             maxHeight: `${circleWidth}px`
             
           }} className="circleBlock">
             
             <div className="countBlock">
               <span className={`count ${step === 1 && "activeSection"}`}>1</span>
               <span className={`count ${step === 2 && "activeSection"}`}>2</span>
               <span className={`count ${step === 3 && "activeSection"}`}>3</span>
               <span className={`count ${step === 4 && "activeSection"}`}>4</span>
             </div>
             <div className="line1"></div>
             <div style={{opacity: step === 4 ? 0 : 1}} className="line2"></div>
             
             <div className={`contentCont ${step === 4 && "noVisible"}`}>
               <div className={`contentBlock ${step === 2 && "activeContent"}`}>
                 <div className="insideBlock">
                   <p className="contentHeader">{data2[0].name}</p>
                   {data2[0].items.map((el, index) => {
                     return (<p key={index} className="contentPrg">{el}</p>);
                   })}
                 </div>
               </div>
               <div className={`contentBlock ${step === 1 ? "activeContent" : step === 3 ? "activeContent" : ""}`}>
                 <div className="insideBlock">
                   <p className="contentHeader">{changeableData[0].name}</p>
                   {changeableData[0].items.map((el, index) => {
                     return (<p key={index} className="contentPrg">{el}</p>);
                   })}
                 </div>
               </div>
               <div className={`contentBlock ${step === 1 ? "activeContent" : step === 3 ? "activeContent" : ""}`}>
                 <div className="insideBlock"
                      style={{maxWidth: step !== 1 ? "75%" : "100%"}}
                 >
                   <p className="contentHeader">{changeableData[1].name}</p>
                   {changeableData[1].items.map((el, index) => {
                     return (<p key={index} className="contentPrg">{el}</p>);
                   })}
                 </div>
               </div>
               <div className={`contentBlock ${step === 2 && "activeContent"}`}>
                 <div className="insideBlock">
                   <p className="contentHeader">{data2[1].name}</p>
                   {data2[1].items.map((el, index) => {
                     return (<p key={index} className="contentPrg">{el}</p>);
                   })}
                 </div>
               </div>
             
             
             </div>
             
             <div className={`contentCont contentCont2 ${step !== 4 && "noVisible"}`}>
               <div className={`contentBlock ${step === 4 && "activeContent"}`}>
                 <div className="insideBlock">
                   <p className="contentHeader">{data4[0].name}</p>
                   {data4[0].items.map((el, index) => {
                     return (<p key={index} className="contentPrg">{el}</p>);
                   })}
                 </div>
               </div>
               
               
               <div className={`contentBlock ${step === 4 && "activeContent"}`}>
                 <div className="insideBlock">
                   <p className="contentHeader">{data4[1].name}</p>
                   {data4[1].items.map((el, index) => {
                     return (<p key={index} className="contentPrg">{el}</p>);
                   })}
                 </div>
               </div>
             
             
             </div>
           
           
           </div>
         
         </div>
         
         <div className="infoBlockTablet">
  
           <img src={Images.overImg} className="overImg" alt=""/>
           {data5.map((el, index) => {
             let ref = index === 0 ? myRef3 :
                index === 1 ? myRef4 :
                   index === 2 ? myRef5 :
                      index === 3 ? myRef6 : myRef1
             return (
                <div ref={ref} key={index} className={`infoBlock ${
                   index === 0 ? visible3 ? "activeInfoBlock" : "" :
                      index === 1 ? visible4 ? "activeInfoBlock" : "" :
                         index === 2 ? visible5 ? "activeInfoBlock" : "" :
                            index === 3 ? visible6 ? "activeInfoBlock" : "" : ""
                }`}>
                  <p className="infoHeader">{el.name}</p>
                  {el.content.map((ell, index) => {
                    return (
                       <p key={index} className="contentItem">{ell}</p>
                    );
                  })}
                </div>
             );
           })}
         </div>
         <div className="secondRef" ref={myRef1}></div>

       </div>
  



     </div>
  );
}

export default SecondBlock;