import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Private1 from "./Vulit";
import Private2 from "./vulit2";
import ChangePass from "./ChangePass"
import ChangePass2 from "./ChangePass2"

ReactDOM.render(
  <BrowserRouter>
  
  <Routes>


  <Route path='/react-calculator' element={<App/>}/>
  <Route path='/private1' element={<Private1/>}/>
  <Route path='/private2' element={<Private2/>}/>
  <Route path='/changePass' element={<ChangePass/>}/>
  <Route path='/changePass2' element={<ChangePass2/>}/>





</Routes>
  
  
  
  </BrowserRouter>
 , document.getElementById("root")
);
