import React, {useState} from "react";
import HeadSpline from "../../../models/homeHeadSpline/headSpline";
import "./headBlock.scss";
import {useCartContext} from "../../../CartContext";
import {useInView} from "react-intersection-observer";
import DubbleLetter from "../../../components/dubbleLetter/dubbleLetter";

function HeadBlock() {
  const {loaded} = useCartContext()
  const {myRef3, visible3} = useCartContext()
  
  const { ref: myRef1, inView: visible1 } = useInView();
  const { ref: myRef2, inView: visible2 } = useInView();
  
  const [link1, setLink1] = useState(false)
  const [link2, setLink2] = useState(false)
  const [link3, setLink3] = useState(false)
  const [link4, setLink4] = useState(false)
  
  
  
  return (
     <div  className="HeadBlock">
       <HeadSpline/>
       
       <div className={`centerTextBlock no-select ${loaded ? visible1 ? "activeContentBlock" : "" : ""}`}>
         <div className={`upBlockText ${loaded ? visible1 ? "activeUpBlockText" : "" : ""}`}>
           <p className="text">We are</p>
           <p className="text">We are</p>
           <p className="text">We are</p>
         </div>
  
         <p ref={myRef1} className={`header ${loaded ? visible1 ? "headerLettersAnim" : "" : ""}`}>
           <span>d</span>
           <span>i</span>
           <span>g</span>
           <span>i</span>
           <span>t</span>
           <span>a</span>
           <span>l</span>
         </p>
  
         <div className={`downBlockText ${loaded ? visible1 ? "activeDownBlockText" : "" : ""}`}>
           <p className="text">Agency</p>
           <p className="text">Agency</p>
           <p className="text">Agency</p>
         </div>
       </div>
       
       
       <div className="bottomBlock">
        
        <div ref={myRef3} className="bottomHeader no-select">
          <div className="textBlock">
            <span className={`${loaded ? visible3 ? "comeFromRight3" : "" : ""}`}>Made</span>
            <span className={`${loaded ? visible3 ? "comeFromLeft3" : "" : ""}`}>easy </span>
          </div>
          <svg className={`${loaded ? visible3 ? "fromDownLeft" : "" : ""}`} xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
            <path d="M4 85L84 5M84 0V70.1765M84 5H14.8738" stroke="#FF6C2C" strokeWidth="10"/>
          </svg>
        </div>
  
         <div ref={myRef2} className="socialLinksBlock">
           <a onMouseOver={()=>setLink1(true)} onMouseLeave={()=>setLink1(false)} href="/" target="_blank" className={`socialLink ${visible2 ? loaded ? "linkInViewAnim" : "" : ""}`}><DubbleLetter text={"Instagram"} trns={0.1} state={link1}/></a>
           <a onMouseOver={()=>setLink2(true)} onMouseLeave={()=>setLink2(false)} href="/" target="_blank" className={`socialLink ${visible2 ? loaded ? "linkInViewAnim" : "" : ""}`}><DubbleLetter text={"Facebook"} trns={0.1} state={link2}/></a>
           <a onMouseOver={()=>setLink3(true)} onMouseLeave={()=>setLink3(false)} href="/" target="_blank" className={`socialLink ${visible2 ? loaded ? "linkInViewAnim" : "" : ""}`}><DubbleLetter text={"Linkedin"} trns={0.1} state={link3}/></a>
           <a onMouseOver={()=>setLink4(true)} onMouseLeave={()=>setLink4(false)} href="/" target="_blank" className={`socialLink ${visible2 ? loaded ? "linkInViewAnim" : "" : ""}`}><DubbleLetter text={"Twitter"} trns={0.1} state={link4}/></a>

         </div>
         
         <div className="flexGrow3"></div>

       </div>
     
     
     </div>
  );
}

export default HeadBlock;