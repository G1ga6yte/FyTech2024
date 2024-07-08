import React, {useState} from "react";
import {Images} from "./images/images";
import "./footerBlock.scss"
import {useInView} from "react-intersection-observer";
import DubbleLetter from "../../../components/dubbleLetter/dubbleLetter";
import {useCartContext} from "../../../CartContext";

function FooterBlock (){
  const {RouteChange} = useCartContext()
  const {ref: myRef1, inView: visible1} = useInView();
  const {ref: myRef2, inView: visible2} = useInView();
  const {ref: myRef3, inView: visible3} = useInView();
  
  const [btn1, setBtn1] = useState(false)
  
  return(
     <div className="FooterBlockS">
       <img ref={myRef1} src={Images.vector} className={`vectorImg ${visible1 ? "ActiveBlock" : ""}`} alt=""/>
       
       <button ref={myRef3} onClick={()=>RouteChange("/order")} onMouseOver={()=>setBtn1(true)} onMouseLeave={()=>setBtn1(false)} className={`contactBtn ${visible3 ? "ActiveBlock" : ""}`}>
         <svg xmlns="http://www.w3.org/2000/svg" width="456" height="100" viewBox="0 0 456 100" fill="none">
           <path d="M0 0L396.648 20.6667L456 100L49.9429 94.6667L0 0Z" fill="#FF6C2C"/>
         </svg>
         <span><DubbleLetter text={"Contact Us"} trns={0.1} state={btn1}/></span>
       </button>
       
       <p ref={myRef2} className={`grayPrg text1 ${visible2 ? "ActiveBlock" : ""}`}>
         To learn more about how our services can benefit your business, get in touch with us today. Our team of experts is ready to help you achieve your technology and design goals.
       </p>
       
     </div>
  )
}

export default FooterBlock