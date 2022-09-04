import React from "react";
import Image from "./Image";
import '../assets/logo.css';
import Button from "./Button";
import { NavLink } from "react-router-dom"; 



export default function Logo(){
    return(
    <>
    <div className="logo__callback">
    <div className="logo">
     <NavLink to="/">
           <Image src={require('../assets/img/path2908.png')} alt="logo1" />
            </NavLink> 
     <ul>
    <li><Image src={require('../assets/img/path2922.png')} alt="logo2" /></li>
    <li><Image src={require('../assets/img/California.png')} alt="logo3" /></li>   
     </ul>
     </div>
     <div className="logo">
     <Image src={require('../assets/img/owner.png')} alt="owner" />
     <ul>
    <li>Константин   <br/>Константиновский</li>
    <li><a href="#">задать любой вопрос директору</a></li>   
     </ul>
     </div>
      <div className="bucket">
          <Image src={require('../assets/img/bucket.png')} alt=""/>
          <ul>
          <li><Image src={require('../assets/img/bucket1.png')} alt=""/></li>
         <li> <Image src={require('../assets/img/bucket1.png')} alt=""/></li>
          </ul>
      </div>
<Button type='submit' text='ЗАКАЗАТЬ ЗВОНОК' />
     </div>
     </>
    );
 }