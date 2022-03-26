import { FC } from "react";
import AppRoutes from "../../Routes";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../../component/nav-bar/Navbar";

import './App.css'

const APP:FC = ()=>{
  return (    
    
    <div className="App">      
      <BrowserRouter>      
      <NavBar />
      <AppRoutes />
      </BrowserRouter>     
    </div>
  )
}

export default APP;
