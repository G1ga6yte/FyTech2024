import React, {useEffect, useRef, useState} from "react";
import "./projectsBlock.scss"
import {useCartContext} from "../../CartContext";
import {Images} from "./images/images";
import {Videos} from "./videos/videos";
import {useInView} from "react-intersection-observer";


function ProjectsBlock (){
  const {loader} = useCartContext()
  const [showVideo1, setShowVideo1] = useState(true);
  const videoRef1 = useRef(null);
  const [showVideo2, setShowVideo2] = useState(true);
  const videoRef2 = useRef(null);
  
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
  const {ref: myRef11, inView: visible11} = useInView();
  const {ref: myRef12, inView: visible12} = useInView();
  
  
  useEffect(()=>{
    const video1 = videoRef1.current;
    if (video1) {
      if (video1.canPlayType && !video1.canPlayType("video/mp4")) {
        setShowVideo1(false);
      } else {
        video1.play();
      }
    }
  
    const video2 = videoRef2.current;
    if (video2) {
      if (video2.canPlayType && !video2.canPlayType("video/mp4")) {
        setShowVideo2(false);
      } else {
        video2.play();
      }
    }
  }, [])
 
  
  return(
     <div className="ProjectsBlock no-select">
  
       <div className="headerBlock">
         <div className={`underLinedText ${loader  ? "" : "underLinedTextAnim"}`}>
           <p>projects</p>
           <div className="line"></div>
         </div>
         <div className="flexGrow"></div>
       </div>
       
       
       <div className="sectionBlock">
         <div className="videoContC">
           <div ref={myRef1} className={`videoCont ${visible1 && !loader ? "activeVideoCont" : ""}`}>
             {showVideo1 ? (
                <video ref={videoRef1} className="video-player" loop muted>
                  <source src={Videos.video1} type="video/mp4"/>
                  ...
                </video>
             ) : (
                <img src={Images.img2} alt="Video Poster" className="video-poster"/>
             )}
           </div>
           <p ref={myRef3} className={`projectName ${visible3 ? "fromDownText" : ""}`}>Business Design Studio</p>
         </div>
         
         <p ref={myRef2} className={`videoPrg ${visible2 && !loader ? "fromRightText" : ""}`}>
           there should be a description of the project
         </p>
         
         
       </div>
       
       <div className="sectionBlock imgSection">
  
         <svg className={`bulletsSvg ${visible4 ? "activeSvg" : ""}`} xmlns="http://www.w3.org/2000/svg"  fill="none">
           <path d="M1042.24 272.747L1191.84 209.06L1267.14 272.747H1042.24Z" fill="#FF6C2C"/>
           <path d="M974.873 370.354L886.699 417.427L1018.46 479.729L974.873 370.354Z" fill="#FF6C2C"/>
           <path d="M447.808 531.648L611.277 500.497L559.759 555.185L447.808 531.648Z" fill="#FF6C2C"/>
           <path d="M886.699 76.1475L784.654 33.228L886.699 5.40293V76.1475Z" fill="#FF6C2C"/>
           <path d="M1405.84 458.27L1593.09 348.894L1548.5 436.81L1405.84 458.27Z" fill="#FF6C2C"/>
           <path d="M1470.24 111.452L1593.09 76.1475L1709 209.06L1470.24 111.452Z" fill="#FF6C2C"/>
           <path d="M886.699 714.402L1018.46 629.256L1042.24 714.402H886.699Z" fill="#FF6C2C"/>
           <path d="M0 541.34L36.6568 512.958L57.462 536.494L0 541.34Z" fill="#FF6C2C"/>
           <path d="M342.791 744.861L409.169 714.402L431.956 776.013L342.791 744.861Z" fill="#FF6C2C"/>
           <path d="M530.038 888.849L504.279 860.467L476.539 898.541L530.038 888.849Z" fill="#FF6C2C"/>
           <path d="M1122.49 929L1152.21 888.849L1202.74 929H1122.49Z" fill="#FF6C2C"/>
         </svg>
         
         <p ref={myRef4} className={`videoPrg textAlignLeft ${visible4 && !loader ? "fromRightText" : ""}`}>
           there should be a description of the project
         </p>
         
         <div className="imgCont">
           <div ref={myRef5} className={`imgBlock ${visible5 ? "activeVideoCont" : ""}`} style={{backgroundImage: `url("${Images.img1}")`}}></div>
           <p ref={myRef6} className={`projectName ${visible6 ? "fromDownText" : ""}`}>Business Design Studio</p>
         </div>
  
       </div>
  
       <div className="sectionBlock">
         <div className="videoContC">
           <div ref={myRef6} className={`videoCont ${visible6 ? "activeVideoCont" : ""}`}>
             {showVideo2 ? (
                <video ref={videoRef2} className="video-player" loop muted>
                  <source src={Videos.video1} type="video/mp4"/>
                  ...
                </video>
             ) : (
                <img src={Images.img2} alt="Video Poster" className="video-poster"/>
             )}
           </div>
           <p ref={myRef8} className={`projectName ${visible8 ? "fromDownText" : ""}`}>Business Design Studio</p>

         </div>
    
         <p ref={myRef7} className={`videoPrg ${visible7 ? "fromRightText" : ""}`}>
           there should be a description of the project
         </p>
    
  
       </div>
  
       <div className="sectionBlock imgSection">
         
         <p ref={myRef10} className={`videoPrg textAlignLeft ${visible10 && !loader ? "fromRightText" : ""}`}>
           there should be a description of the project
         </p>
    
         <div className="imgCont">
           <div ref={myRef11} className={`imgBlock ${visible11 ? "activeVideoCont" : ""}`} style={{backgroundImage: `url("${Images.img1}")`}}></div>
           <p ref={myRef12} className={`projectName ${visible12 ? "fromDownText" : ""}`}>Business Design Studio</p>
         </div>
  
  
  
       </div>
       
     </div>
  )
}

export default ProjectsBlock