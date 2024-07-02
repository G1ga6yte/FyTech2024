import React from "react";
import "./secondBlock.scss"
import {Images} from "./images/images";
import DubbleLetter from "../../../components/dubbleLetter/dubbleLetter";
import {useInView} from "react-intersection-observer";

function SecondBlock (){
  const {ref: myRef1, inView: visible1} = useInView();
  const {ref: myRef2, inView: visible2} = useInView();
  const {ref: myRef3, inView: visible3} = useInView();
  const {ref: myRef4, inView: visible4} = useInView();
  const {ref: myRef5, inView: visible5} = useInView();
  const {ref: myRef6, inView: visible6} = useInView();
  const {ref: myRef7, inView: visible7} = useInView();
  
  
  
  return(
     <div className="SecondBlockS">
       
       <div ref={myRef1} style={{backgroundImage: `url("${Images.rectangle}")`}} className="headerBlock">
         <DubbleLetter text={"Software development"} trns={0.1} state={visible1}/>
       </div>
       
       <div className="textBlock1">
         <p ref={myRef2} className={`grayPrg text1 ${visible2 ? "ActiveBlock" : ""}`}>
           Our software development services cover everything from application and web development to mobile app creation and custom software solutions. We excel in both front-end and back-end development, using languages and frameworks such as:
         </p>
         
         <div className="text2">
           <ul ref={myRef3} className={`grayPrg ul ${visible3 ? "ActiveBlock" : ""}`}>
             <li>Front-end: HTML, CSS, JavaScript, React.js, AngularJS, Vue.js</li>
             <li>Back-end: Python, Node.js, Ruby on Rails, Django, Flask</li>
           </ul>
           
           <p ref={myRef4} className={`grayPrg text3 ${visible4 ? "ActiveBlock" : ""}`}>Additionally, we specialize in modernizing legacy systems, implementing DevOps practices using tools like Docker and Kubernetes, and migrating applications to the cloud using platforms such as AWS, Azure, and Google Cloud Platform.</p>
         </div>
         
       </div>
       
       <div className="textBlock2">
         <div ref={myRef5} className="text5 grayPrg">
           <p className={visible5 ? "ActiveBlock" : ""}>Application development</p>
           <p className={visible5 ? "ActiveBlock" : ""}>Mobile app development</p>
           <p className={visible5 ? "ActiveBlock" : ""}>DevOps and cloud migration</p>
         </div>
  
         <div ref={myRef6} className="text6 grayPrg">
           <p className={visible6 ? "ActiveBlock" : ""}>Web development</p>
           <p className={visible6 ? "ActiveBlock" : ""}>Custom software development</p>
           <p className={visible6 ? "ActiveBlock" : ""}>Legacy system modernization</p>
           <p className={visible6 ? "ActiveBlock" : ""}>VR/AR developing</p>
         </div>
       </div>
  
       <img src={Images.img1} className="bubbleImg" alt=""/>
       
     </div>
  )
}

export default SecondBlock