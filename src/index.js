import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./source/font/font.scss"
import "./source/styles/Global.scss"
import "./source/styles/var.scss"
import "./source/styles/mixin.scss"
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {CartProvider} from "./CartContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
     <CartProvider>
       <App/>
     </CartProvider>
   </BrowserRouter>,
);


