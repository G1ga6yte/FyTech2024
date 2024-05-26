import React, {useState}  from "react";
import "./footer.scss"
import DubbleLetter from "../../../../components/dubbleLetter/dubbleLetter";
import {useInView} from "react-intersection-observer";
import {Link} from "react-router-dom";

function Footer (){
  const { ref: myRef1, inView: visible1 } = useInView();
  const { ref: myRef2, inView: visible2 } = useInView();
  const { ref: myRef3, inView: visible3 } = useInView();
  const { ref: myRef4, inView: visible4 } = useInView();
  const { ref: myRef5, inView: visible5 } = useInView();
  const { ref: myRef6, inView: visible6 } = useInView();
  const { ref: myRef7, inView: visible7 } = useInView();
  const { ref: myRef8, inView: visible8 } = useInView();
  
  
  const [btn1, setBtn1] = useState(false)
  
  const [btn2, setBtn2] = useState(false)
  const [btn3, setBtn3] = useState(false)
  const [btn4, setBtn4] = useState(false)
  const [btn5, setBtn5] = useState(false)
  const [btn6, setBtn6] = useState(false)
  const [btn7, setBtn7] = useState(false)
  const [btn8, setBtn8] = useState(false)
  
  
  
  return(
     <div className="Footer no-select">
        <div className="FooterBlock">
          
          <div className="flex">
            
            <div ref={myRef1} className={`mainText ${visible1 ? "mainTextActive" : ""}`}>
              TELL US ABOUT YOUR PRODUCT,
              <button onMouseLeave={()=>setBtn1(false)} onMouseOver={()=>setBtn1(true)} className="getInTouchBtn">
                <DubbleLetter text={"get in touch"} state={btn1} trns={0.1}/>
              </button>
              WE WILL STUDY IT AND CONTACT YOU!
            </div>
  
            <button onMouseLeave={()=>setBtn1(false)} onMouseOver={()=>setBtn1(true)} className="getInTouchBtn tabletBtn">
              <DubbleLetter text={"get in touch"} state={btn1} trns={0.1}/>
            </button>
            
            <div className="LinksCont">
              
              <div className="linksBlock">
                <a ref={myRef2} onMouseOver={()=>setBtn2(true)} onMouseLeave={()=>setBtn2(false)} href="" target="_blank" className={`link link1 ${visible2 ? "activeLink" : ""}`}><DubbleLetter text={"Instagram"} trns={0.1} state={btn2}/></a>
                <a ref={myRef3} onMouseOver={()=>setBtn3(true)} onMouseLeave={()=>setBtn3(false)} href="" target="_blank" className={`link link1 ${visible3 ? "activeLink" : ""}`}><DubbleLetter text={"Twitter/X"} trns={0.1} state={btn3}/></a>
                <a ref={myRef4} onMouseOver={()=>setBtn4(true)} onMouseLeave={()=>setBtn4(false)} href="" target="_blank" className={`link link1 ${visible4 ? "activeLink" : ""}`}><DubbleLetter text={"Behance"} trns={0.1} state={btn4}/></a>
                <a ref={myRef5} onMouseOver={()=>setBtn5(true)} onMouseLeave={()=>setBtn5(false)} href="" target="_blank" className={`link link1 ${visible5 ? "activeLink" : ""}`}><DubbleLetter text={"LinkedIn"} trns={0.1} state={btn5}/></a>
              </div>
              
              <div className="linksBlock">
                <Link ref={myRef6} onMouseOver={()=>setBtn6(true)} onMouseLeave={()=>setBtn6(false)} to="/aboutUs" className={`link link2 ${visible6 ? "activeLink" : ""}`}><DubbleLetter text={"About us"} trns={0.1} state={btn6}/></Link>
                <Link ref={myRef7} onMouseOver={()=>setBtn7(true)} onMouseLeave={()=>setBtn7(false)} to="/services" className={`link link2 ${visible7 ? "activeLink" : ""}`}><DubbleLetter text={"Services"} trns={0.1} state={btn7}/></Link>
                <Link ref={myRef8} onMouseOver={()=>setBtn8(true)} onMouseLeave={()=>setBtn8(false)} to="/projects" className={`link link2 ${visible8 ? "activeLink" : ""}`}><DubbleLetter text={"Projects"} trns={0.1} state={btn8}/></Link>
              </div>
              
            </div>
            
          </div>
          
          <div className="termsCont">
            
            <span className="termsText">Copyright © 2021 Fytechnology LTD . All Rights Reserved.</span>
            <span className="termsText">career</span>
  
            <a href="/" target="_blank" className="termsText">Terms of Use</a>
            <a href="/" target="_blank" className="termsText">Privacy Policy</a>


          </div>
          
        </div>
     </div>
  )
}

export default Footer