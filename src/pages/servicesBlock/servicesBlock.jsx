import React from "react";
import "./servicesBlock.scss"
import FirstBlock from "./firstBlock/firstBlock";
import SecondBlock from "./secondBlock/secondBlock";
import ThirdBlock from "./thirdBlock/thirdBlock";
import ForthBlock from "./forthBlock/forthBlock";
import FifthBlock from "./fifthBlock/fifthBlock";
import SixthBlock from "./sixthBlock/sixthBlock";
import SeventhBlock from "./seventhBlock/seventhBlock";
import EightBlock from "./eightBlock/eightBlock";
import NinthBlock from "./ninthBlock/ninthBlock";
import TenthBlock from "./tenthBlock/tenthBlock";
import FooterBlock from "./footerBlock/footerBlock";

function ServicesBlock (){
  
  
  
  
  return(
     <div className="ServicesBlock">
       
       <FirstBlock/>
       <SecondBlock/>
       <ThirdBlock/>
       <ForthBlock/>
       <FifthBlock/>
       <SixthBlock/>
       <SeventhBlock/>
       <EightBlock/>
       <NinthBlock/>
       <TenthBlock/>
       <FooterBlock/>
     
     </div>
  )
}

export default ServicesBlock