import React, {createContext, useContext, useState, useEffect} from "react";
import {useInView} from "react-intersection-observer";
const CartContext = createContext();
export const CartProvider = ({children}) => {
  
  const [scrollPaused1, setScrollPaused1] = useState(false)
  const [step, setStep] = useState(1);
  
  const { ref: myRef1, inView: visible1 } = useInView();
  const { ref: myRef2, inView: visible2 } = useInView();
  const { ref: myRef3, inView: visible3 } = useInView();
  
  
  useEffect(()=>{
    if (visible1){
      setScrollPaused1(true)
    }
  }, [visible1])
  
  // useEffect(()=>{
  //   if (visible2){
  //     setScrollPaused1(false)
  //   }
  // }, [visible2])
  
  
  
  
  //////////////// loadingBlock
  const [loaded, setLoaded] = useState(false)
  
  
  
  
  ///////////////// nav
  const [activeMenu, setActiveMenu] = useState(false);
  const [menu2, setMenu2] = useState(false)
  
 
  
  
  return (<CartContext.Provider value={{
    scrollPaused1, setScrollPaused1, myRef1, visible1, myRef2, visible2, myRef3, visible3,
    loaded, setLoaded, step, setStep,
    activeMenu, setActiveMenu, menu2, setMenu2
  }}>
    {children}
  </CartContext.Provider>);
};

export const useCartContext = () => {
  return useContext(CartContext);
};