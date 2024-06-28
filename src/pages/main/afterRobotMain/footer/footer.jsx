import React, {useState}  from "react";
import "./footer.scss"
import DubbleLetter from "../../../../components/dubbleLetter/dubbleLetter";
import {useInView} from "react-intersection-observer";
import {Link} from "react-router-dom";
import {useCartContext} from "../../../../CartContext";

function Footer (){
  const { ref: myRef1, inView: visible1 } = useInView();
  const { ref: myRef2, inView: visible2 } = useInView();
  const { ref: myRef3, inView: visible3 } = useInView();
  const { ref: myRef4, inView: visible4 } = useInView();
  const { ref: myRef5, inView: visible5 } = useInView();
  const { ref: myRef6, inView: visible6 } = useInView();
  const { ref: myRef7, inView: visible7 } = useInView();
  const { ref: myRef8, inView: visible8 } = useInView();
  const { ref: myRef9, inView: visible9 } = useInView();
  const { ref: myRef10, inView: visible10 } = useInView();
  
  
  
  
  const [btn1, setBtn1] = useState(false)
  
  const [btn2, setBtn2] = useState(false)
  const [btn3, setBtn3] = useState(false)
  const [btn4, setBtn4] = useState(false)
  const [btn5, setBtn5] = useState(false)
  const [btn6, setBtn6] = useState(false)
  const [btn7, setBtn7] = useState(false)
  const [btn8, setBtn8] = useState(false)
  const [btn10, setBtn10] = useState(false)
  
  const {RouteChange} = useCartContext()
  
  
  return(
     <div className="Footer no-select">
       <svg className="headSVG" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1600 154" fill="none">
         <path d="M36.8357 73.238L-42 54.1762V0H1649V54.1762H1527.84V138.45C1514.43 143.633 1484.45 154 1471.75 154C1459.05 154 1446 143.633 1441.06 138.45V94.8081L1366.99 54.1762H1300.85L1285.51 87.7853L1261.7 54.1762L1225.19 87.7853L1109.85 47.1531L1080.75 94.8081L1013.02 54.1762L919.902 82.769L786.04 54.1762L780.22 82.769L747.416 94.8081L735.246 65.7136C723.253 61.5334 698.527 53.3736 695.564 54.1762C692.601 54.9788 694.329 67.2185 695.564 73.238L644.77 94.8081L640.538 60.6973L588.157 54.1762L568.051 78.756L532.601 54.1762L518.316 87.7853L474.93 78.756L483.395 54.1762L398.739 82.769L337.364 54.1762L332.602 87.7853L228.899 82.769L212.497 54.1762H190.274L195.036 87.7853L157.999 54.1762L140.01 82.769L88.1583 65.7136L36.8357 73.238Z" fill="#FF6C2C"/>
       </svg>
  
       <svg ref={myRef9} className={`bulletsSVG ${visible9 ? "":"activeSVG"}`} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1600 141" fill="none">
         <path d="M11.3842 43L0 26.5L41.9146 43H11.3842Z" fill="#FF6C2C"/>
         <path d="M98.3182 60L90.0388 32.5L179.56 60H98.3182Z" fill="#FF6C2C"/>
         <path d="M65.2005 60L61.5783 43H74.5149L81.7594 60H65.2005Z" fill="#FF6C2C"/>
         <path d="M189.392 38.5L179.56 23.5L208.021 32.5L189.392 38.5Z" fill="#FF6C2C"/>
         <path d="M145.925 19.5L127.814 14.5L151.1 32.5L145.925 19.5Z" fill="#FF6C2C"/>
         <path d="M275.809 32.5H238.551V35.5V46.5H265.977L275.809 32.5Z" fill="#FF6C2C"/>
         <path d="M344.114 43L317.206 23.5V38.5L344.114 43Z" fill="#FF6C2C"/>
         <path d="M344.114 23.5L328.072 14.5L337.387 9.5L357.05 19.5L344.114 23.5Z" fill="#FF6C2C"/>
         <path d="M380.336 54.5L376.714 35.5L380.336 38.5L412.419 32.5L409.314 51.5L380.336 54.5Z" fill="#FF6C2C"/>
         <path d="M432.083 19.5H412.419L443.467 3L432.083 19.5Z" fill="#FF6C2C"/>
         <path d="M487.969 38.5L450.711 43V38.5L481.759 32.5L487.969 38.5Z" fill="#FF6C2C"/>
         <path d="M528.331 23.5L510.22 19.5V35.5L520.569 32.5L528.331 23.5Z" fill="#FF6C2C"/>
         <path d="M523.674 9.5H510.22V0L523.674 9.5Z" fill="#FF6C2C"/>
         <path d="M570.246 46.5L546.442 38.5L570.246 23.5L585.77 26.5L570.246 46.5Z" fill="#FF6C2C"/>
         <path d="M601.294 14.5L573.351 6L578.008 0H607.503L601.294 14.5Z" fill="#FF6C2C"/>
         <path d="M667.012 23.5L638.034 46.5L675.809 35.5L667.012 23.5Z" fill="#FF6C2C"/>
         <path d="M689.78 26.5L685.123 9.5L694.437 3L709.961 23.5L689.78 26.5Z" fill="#FF6C2C"/>
         <path d="M822.251 78.5L784.476 35.5L881.759 51.5L822.251 78.5Z" fill="#FF6C2C"/>
         <path d="M964.036 51.5L954.204 26.5L1001.81 19.5L1040.1 60L964.036 51.5Z" fill="#FF6C2C"/>
         <path d="M1225.87 78.5H1094.44L1129.11 35.5L1225.87 78.5Z" fill="#FF6C2C"/>
         <path d="M1295.21 78.5L1258.99 46.5L1344.89 19.5L1332.99 60L1295.21 78.5Z" fill="#FF6C2C"/>
         <path d="M1417.33 141L1374.39 93L1385.77 78.5L1458.21 125L1417.33 141Z" fill="#FF6C2C"/>
         <path d="M1583.44 60L1559.12 102.5L1546.46 54.5L1583.44 60Z" fill="#FF6C2C"/>
         <path d="M1600 14.5H1545.67V23.5L1600 43V14.5Z" fill="#FF6C2C"/>
       </svg>
       
       
        <div className="FooterBlock">
          
          <div className="flex">
            
            <div ref={myRef1} className={`mainText ${visible1 ? "mainTextActive" : ""}`}>
              <span>how about we do think</span>  or two
              <button onMouseLeave={()=>setBtn1(false)} onMouseOver={()=>setBtn1(true)} className="getInTouchBtn">
                <DubbleLetter text={"get in touch"} state={btn1} trns={0.1}/>
              </button>
              <span>together</span>
            </div>
  
            <button onMouseLeave={()=>setBtn1(false)} onMouseOver={()=>setBtn1(true)} className="getInTouchBtn tabletBtn">
              <DubbleLetter text={"get in touch"} state={btn1} trns={0.1}/>
            </button>
            
            <div className="LinksCont">
              <div className="linksBlock">
                <a ref={myRef10} onMouseOver={()=>setBtn10(true)} onMouseLeave={()=>setBtn10(false)} href="" target="_blank" className={`link link1 ${visible10 ? "activeLink" : ""}`}><DubbleLetter text={"Mantis"} trns={0.1} state={btn10}/></a>
              </div>
              
              <div className="linksBlock">
                <a ref={myRef2} onMouseOver={()=>setBtn2(true)} onMouseLeave={()=>setBtn2(false)} href="" target="_blank" className={`link link1 ${visible2 ? "activeLink" : ""}`}><DubbleLetter text={"Instagram"} trns={0.1} state={btn2}/></a>
                <a ref={myRef3} onMouseOver={()=>setBtn3(true)} onMouseLeave={()=>setBtn3(false)} href="" target="_blank" className={`link link1 ${visible3 ? "activeLink" : ""}`}><DubbleLetter text={"Twitter/X"} trns={0.1} state={btn3}/></a>
                <a ref={myRef4} onMouseOver={()=>setBtn4(true)} onMouseLeave={()=>setBtn4(false)} href="" target="_blank" className={`link link1 ${visible4 ? "activeLink" : ""}`}><DubbleLetter text={"Behance"} trns={0.1} state={btn4}/></a>
                <a ref={myRef5} onMouseOver={()=>setBtn5(true)} onMouseLeave={()=>setBtn5(false)} href="" target="_blank" className={`link link1 ${visible5 ? "activeLink" : ""}`}><DubbleLetter text={"LinkedIn"} trns={0.1} state={btn5}/></a>
              </div>
              
              <div className="linksBlock">
                <button ref={myRef6} onMouseOver={()=>setBtn6(true)} onMouseLeave={()=>setBtn6(false)} onClick={()=>RouteChange("/aboutUs")} className={`link link2 ${visible6 ? "activeLink" : ""}`}><DubbleLetter text={"About us"} trns={0.1} state={btn6}/></button>
                <button ref={myRef7} onMouseOver={()=>setBtn7(true)} onMouseLeave={()=>setBtn7(false)} onClick={()=>RouteChange("/services")} className={`link link2 ${visible7 ? "activeLink" : ""}`}><DubbleLetter text={"Services"} trns={0.1} state={btn7}/></button>
                <button ref={myRef8} onMouseOver={()=>setBtn8(true)} onMouseLeave={()=>setBtn8(false)} onClick={()=>RouteChange("/projects")} className={`link link2 ${visible8 ? "activeLink" : ""}`}><DubbleLetter text={"Projects"} trns={0.1} state={btn8}/></button>
              </div>
              
            </div>
            
          </div>
          
          <div className="termsCont">
            <a href="/" target="_blank" className="termsText linkDesktop">mantis studio</a>
  
            <div className="flexGrow"></div>
  
            <span className="termsText">Copyright © 2021 Fytechnology LTD . All Rights Reserved.</span>
  
            <a href="/" target="_blank" className="termsText linkTablet">mantis studio</a>
            <span className="termsText">career</span>
  
            <a href="/" target="_blank" className="termsText">Terms of Use</a>
            <a href="/" target="_blank" className="termsText">Privacy Policy</a>


          </div>
          
        </div>
     </div>
  )
}

export default Footer