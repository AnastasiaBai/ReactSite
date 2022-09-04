import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import '../assets/layout.css';
import Footer from "./Footer";
 

function Layout({children}){
    return (
    <div className="Layout">
  <Nav />
     <Logo />
     {children}
     <Footer/>
    </div>
    );
    }
 export default Layout;