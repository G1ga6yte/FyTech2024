import React, {createContext, useContext, useEffect, useState} from "react";
const CartContext = createContext();
export const CartProvider = ({children}) => {
 
  const [auth, setAuth] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  
  
  
  
  return (<CartContext.Provider value={{
    auth, setAuth, userInfo, setUserInfo
  }}>
    {children}
  </CartContext.Provider>);
};

export const useCartContext = () => {
  return useContext(CartContext);
};