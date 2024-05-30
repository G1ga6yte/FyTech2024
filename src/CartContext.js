import React, {createContext, useContext, useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";
import {useLocation, useNavigate} from "react-router";
import {useHistory} from "react-router-dom"

const CartContext = createContext();
export const CartProvider = ({children}) => {
  const location = useLocation();
  const navigate = useNavigate()
  const [scrollPaused1, setScrollPaused1] = useState(false);
  const [step, setStep] = useState(1);
  
  const {ref: myRef1, inView: visible1} = useInView();
  const {ref: myRef2, inView: visible2} = useInView();
  const {ref: myRef3, inView: visible3} = useInView();
  
  
  useEffect(() => {
    console.log("hello !");
    if (visible1) {
      setScrollPaused1(true);
    }
  }, [visible1]);
  
  // useEffect(()=>{
  //   if (visible2){
  //     setScrollPaused1(false)
  //   }
  // }, [visible2])
  
  
  //////////////// loadingBlock
  const [loaded, setLoaded] = useState(false);
  
  
  ///////////////// nav
  const [activeMenu, setActiveMenu] = useState(false);
  const [menu2, setMenu2] = useState(false);
  
  
  ///////////////// robotView
  const {ref: myRefRobot, inView: visibleRobot} = useInView();
  const [robotAnim, setRobotAnim] = useState(false);
  const [forthBlock, setForthBlock] = useState(false);
  useEffect(() => {
    if (visibleRobot) {
      setTimeout(() => {
        setRobotAnim(true);
      }, 1000);
      setTimeout(() => {
        setForthBlock(true);
      }, 1000);
    }
  }, [visibleRobot]);
  
  
  ///////////// location change
  const [loader, setLoader] = useState(false)
  const [routeLoader, setRouteLoader] = useState(false);
  useEffect(() => {
    let timer;
    if (routeLoader) {
      timer = setTimeout(() => {
        setRouteLoader(false);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [routeLoader]);
  
  function RouteChange(link) {
    setRouteLoader(true)
    setTimeout(() => {
      navigate(link);
    }, 600);
  }
  
  
  return (<CartContext.Provider value={{
    scrollPaused1, setScrollPaused1, myRef1, visible1, myRef2, visible2, myRef3, visible3,
    loaded, setLoaded, step, setStep,
    activeMenu, setActiveMenu, menu2, setMenu2,
    robotAnim, myRefRobot, visibleRobot, setRobotAnim, forthBlock,
    routeLoader, setRouteLoader, RouteChange, loader, setLoader
  }}>
    {children}
  </CartContext.Provider>);
};

export const useCartContext = () => {
  return useContext(CartContext);
};