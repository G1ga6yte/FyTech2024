import React from "react";
import {useInView} from "react-intersection-observer";
import DubbleLetter from "../../../components/dubbleLetter/dubbleLetter";
import "./sixthBlock.scss"
import rectangle from "./Rectangle 140.svg"



function SixthBlock (){
  const {ref: myRef1, inView: visible1} = useInView();
  const {ref: myRef2, inView: visible2} = useInView();
  const {ref: myRef3, inView: visible3} = useInView();
  const {ref: myRef4, inView: visible4} = useInView();
  
  
  return(
     <div className="SixthBlock">
       <div ref={myRef1} style={{backgroundImage: `url("${rectangle}")`}} className="headerBlock">
         <DubbleLetter text={"WEB 3.0"} trns={0.1} state={visible1}/>
       </div>
       
       <p ref={myRef2} className={`grayPrg text1 ${visible2 ? "ActiveBlock" : ""}`}>
         We are at the forefront of Web 3.0, offering smart contract development, decentralized application (DApp) development, and blockchain data management and analytics. Our blockchain consultation services ensure you leverage this technology effectively. We also provide smart contract security audits, integration with distributed ledger technology (DLT), cryptocurrency wallet development, and comprehensive testing and quality assurance.
       </p>
       
       <div className="ulCont">
         <div ref={myRef3} className="ul1 grayPrg">
           <p className={visible3 ? "ActiveBlock" : ""}>Smart Contract Development</p>
           <p className={visible3 ? "ActiveBlock" : ""}>Blockchain Data Management and Analytics</p>
           <p className={visible3 ? "ActiveBlock" : ""}>Smart Contract Security Development and Audit</p>
           <p className={visible3 ? "ActiveBlock" : ""}>Technical Support and Maintenance</p>
           <p className={visible3 ? "ActiveBlock" : ""}>Integration with Distributed Ledger Technology (DLT)</p>
         </div>
  
         <div ref={myRef4} className="ul1 fromRight grayPrg">
           <p className={visible4 ? "ActiveBlock" : ""}>Decentralized Application (DApp) Development</p>
           <p className={visible4 ? "ActiveBlock" : ""}>Blockchain Consultation</p>
           <p className={visible4 ? "ActiveBlock" : ""}>Testing and Quality Assurance</p>
           <p className={visible4 ? "ActiveBlock" : ""}>Cryptocurrency Wallet Development and Maintenance</p>
         </div>
       </div>
     </div>
  )
}

export default SixthBlock