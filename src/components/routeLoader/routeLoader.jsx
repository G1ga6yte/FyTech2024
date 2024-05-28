import React, {Suspense, useEffect, useState} from "react";
import "./routeLoader.scss"
import loaderImg from "../../images/loadingImage.png";
import loaderGIF from "../../images/loadingVideo.gif";
import {useCartContext} from "../../CartContext";

function RouteLoader (){
  const {routeLoader, setRouteLoader, loader, setLoader} = useCartContext()
  
  useEffect(()=>{
    let timer
    if (routeLoader){
      setLoader(true)
      timer = setTimeout(()=>{
        setLoader(false)
      }, 3500)
    }
    return () => clearTimeout(timer)
  }, [routeLoader])
  
  useEffect(()=>{
    let timer
    if (routeLoader){
      timer = setTimeout(()=>{
        setRouteLoader(false)
      }, 4000)
    }
    return () => clearTimeout(timer)
  }, [routeLoader])
  
  return(
     <div style={{
       opacity: loader ? 1 : 0,
     }} className="RouteLoader">
         <Suspense fallback={<img className="loadingImg" src={loaderImg} alt=""/>}>
           <img className={`loadingSvg ${routeLoader ? "loadingSvgAnim" : ""}`} src={loaderGIF} alt=""/>
         </Suspense>
     </div>
  )
}

export default RouteLoader