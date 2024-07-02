import React from "react";
import "./headBlock.scss"
import {useCartContext} from "../../../CartContext";
import {useInView} from "react-intersection-observer";
import HomeSpinnerSpline1 from "../../../models/homeSpinnerSpline1/homeSpinnerSpline1";

function HeadBlock (){
  const {loader, loaded} = useCartContext()
  const {ref: myRef1, inView: visible1} = useInView();
  const {ref: myRef2, inView: visible2} = useInView();
  
  
  return(
     <div className="HeadBlockProject">
        <div className="textBlock">
          <p ref={myRef1} className={`header ${!loader && loaded ? visible1 ? "ActiveText" : "" : ""}`}>We're making auto repair  transparent for drivers</p>
          <p ref={myRef2} className={`grayPrg32 ${!loader && loaded ? visible2 ? "ActiveText" : "" : ""}`}>For several years we’ve been helping Punto Pago explore new digital marketing niches. During this time they have worked their way from being a utility bills payment service to launching a superapp as well as a whole Punto Pago ecosystem with bank cards, loans, payments and a marketplace.</p>
        </div>
       
       <div className="splineBlock">
         {/*<HomeSpinnerSpline1/>*/}
       </div>
     </div>
  )
}

export default HeadBlock