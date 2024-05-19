import React from 'react';
import Spline from '@splinetool/react-spline';
import scene from "./tick_tock_interactive_landing_copy.spline"
import "./headSpline.scss"


 function HeadSpline(){
  
  return(
     <div  className="scene">
       <Spline  scene={scene}/>
     </div>
  )
}

export default HeadSpline