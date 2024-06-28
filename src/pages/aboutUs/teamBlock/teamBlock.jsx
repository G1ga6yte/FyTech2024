import React, {useRef, useState} from "react";
import {useInView} from "react-intersection-observer";
import "./teamBlock.scss";
import {Images} from "./images/images";

function TeamBlock() {
  const {ref: myRef1, inView: visible1} = useInView();
  const {ref: myRef2, inView: visible2} = useInView();
  const {ref: myRef3, inView: visible3} = useInView();
  const {ref: myRef4, inView: visible4} = useInView();
  
  const PersonalData = [
    {
      id        : 1,
      name      : "Tina",
      profession: "Developer",
      info      : "information about the company employee information about the company employee information about the company employee",
      img       : Images.personImg1,
    },
    {
      id        : 2,
      name      : "Tom",
      profession: "Developer",
      info      : "information about the company employee information about the company employee information about the company employee",
      img       : Images.personImg2,
    },
    {
      id        : 3,
      name      : "Inna",
      profession: "Designer",
      info      : "information about the company employee information about the company employee information about the company employee",
      img       : Images.personImg3,
    },
    {
      id        : 4,
      name      : "Tina",
      profession: "Developer",
      info      : "information about the company employee information about the company employee information about the company employee",
      img       : Images.personImg1,
    },
    {
      id        : 5,
      name      : "Tom",
      profession: "Developer",
      info      : "information about the company employee information about the company employee information about the company employee",
      img       : Images.personImg2,
    },
    {
      id        : 6,
      name      : "Inna",
      profession: "Designer",
      info      : "information about the company employee information about the company employee information about the company employee",
      img       : Images.personImg3,
    },
    {
      id        : 7,
      name      : "Tina",
      profession: "Developer",
      info      : "information about the company employee information about the company employee information about the company employee",
      img       : Images.personImg1,
    },
    {
      id        : 8,
      name      : "Tom",
      profession: "Developer",
      info      : "information about the company employee information about the company employee information about the company employee",
      img       : Images.personImg2,
    },
    {
      id        : 9,
      name      : "Inna",
      profession: "Designer",
      info      : "information about the company employee information about the company employee information about the company employee",
      img       : Images.personImg3,
    },
    {
      id        : 10,
      name      : "Tina",
      profession: "Developer",
      info      : "information about the company employee information about the company employee information about the company employee",
      img       : Images.personImg1,
    },
    {
      id        : 11,
      name      : "Tom",
      profession: "Developer",
      info      : "information about the company employee information about the company employee information about the company employee",
      img       : Images.personImg2,
    },
  ];
  
  const [activePerson, setActivePerson] = useState(PersonalData[0]);
  
  const divRef = useRef(null);
  const divRef2 = useRef(null);
  
  const [firstBtn, setFirstBtn] = useState(false)
  const [secondBtn, setSecondBtn] = useState(true)
  
  const handleScroll = () => {
    if (divRef.current) {
      const scrollPositionX = divRef.current.scrollLeft;
      const scrollPositionWidth = divRef.current.clientWidth
      const innerWidth = divRef2.current.scrollWidth
      console.log(scrollPositionX);
      console.log(innerWidth-scrollPositionWidth);
      if (scrollPositionX === 0){
        setFirstBtn(false)
      } else {
        if (!firstBtn){
          setFirstBtn(true)
        }
      }
      
      if (scrollPositionX === innerWidth-scrollPositionWidth){
        setSecondBtn(false)
      } else {
        if (!secondBtn) {
          setSecondBtn(true)
        }
      }
      
      
      
      
    }
  };
  
  const scrollLeftSmoothly = () => {
    if (divRef.current) {
      const start = divRef.current.scrollLeft;
      const target = start + 600;
      const distance = target - start;
      const duration = 600; // milliseconds
      
      let startTime = null;
      
      const animation = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        divRef.current.scrollLeft = start + distance * progress;
        
        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };
      
      requestAnimationFrame(animation);
    }
  };
  
  const scrollRightSmoothly = () => {
    if (divRef.current) {
      const start = divRef.current.scrollLeft;
      const target = start - 600;
      const distance = target - start;
      const duration = 600; // milliseconds
      
      let startTime = null;
      
      const animation = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        divRef.current.scrollLeft = start + distance * progress;
        
        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };
      
      requestAnimationFrame(animation);
    }
  };
  
  return (
     <div className="TemBlock">
       
       <div ref={myRef1} className="headerBlock">
         <div className="flexGrow"></div>
         <div className={`underLinedText no-select ${visible1 ? "underLinedTextAnim" : ""}`}>
           <p>team</p>
           <div className="line"></div>
         </div>
       </div>
       
       
       <div className="mainBlock">
         <div className="personImgBlock">
           <div style={{backgroundImage: `url("${activePerson.img}")`}} className="personImg"></div>
           <div className="shadow"></div>
         </div>
         
         <div className="infoBlock">
           <p ref={myRef2} className={`Gname ${visible2 ? "activeText" : ""}`}>{activePerson.name}</p>
           <p ref={myRef3} className={`Gprofession ${visible3 ? "activeText" : ""}`}>{activePerson.profession}</p>
           <p ref={myRef4} className={`Ginfo ${visible4 ? "activeText" : ""}`}>{activePerson.info}</p>
           
           <p className="count">{activePerson.id < 10 ? `0${activePerson.id}` : `${activePerson.id}`}/{PersonalData.length}</p>
           <div className="sectionsBlock">
             {PersonalData.map((el, index)=>{
               return(
                  <div className={`line ${activePerson.id === el.id ? "activeLine" : ""}`} key={index}></div>
               )
             })}
           </div>
           
           <div ref={divRef} className="personsCardCont" onScroll={handleScroll}>
             <div ref={divRef2} className="personsCardBlock">
               {PersonalData.map((el, index)=>{
                 return(
                    <div onMouseOver={()=>{
                      setActivePerson(el)
                    }} key={index} className={`PersonCard ${activePerson.id === el.id ? "activeCard" : ""}`}>
                      <div style={{backgroundImage: `url("${el.img}")`}} className="imgBlock">
                        <div className="shadow"></div>
                        <div className="personInfoBlock">
                          <p className="name">{el.name}</p>
                          <p className="profession">{el.profession}</p>
                        </div>
                      </div>
                    </div>
                 )
               })}
             </div>
           </div>
           <div className="buttonsCont">
             <button onClick={scrollRightSmoothly} style={{transform: `translateX(${firstBtn ? "0" : "-50px"})`, opacity: `${firstBtn ? "1" : "0"}`}} className="leftBtn slideBtn"><img src={Images.arrowSvg} alt=""/></button>
  
             <button onClick={scrollLeftSmoothly} style={{transform: `translateX(${secondBtn ? "0" : "50px"})`, opacity: `${secondBtn ? "1" : "0"}`}} className="rightBtn slideBtn"><img src={Images.arrowSvg} alt=""/></button>
           </div>
           
         </div>
       </div>
     
     </div>
  );
}

export default TeamBlock;