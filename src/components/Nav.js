import React from 'react';
import '../assets/nav.css';
import { Link, NavLink } from "react-router-dom"; 

const NAV_LINK = [
    // {name:"ГЛАВНАЯ", to:"/"},
    {name: "ОТЗЫВЫ", to: "/reviews"},
    {name:"ДОСТАВКА И ОПЛАТА", to:"/deliveryandpay"},
    {name:"ОПТ", to:"/wholesale" },
    {name:"СТАТЬИ", to:"/article" },
    {name:"КОНТАКТЫ", to:"/contacts" }
]

function Nav(){
    return(
<div className="container" style={{ backgroundColor: '#323941'}} >
<nav className="nav">
  <ul className="nav_list">
{NAV_LINK.map((link) => (
        <li key={link.name}>
            <NavLink to={link.to}>
           {link.name}
            </NavLink>
        </li>  
    )
)}
</ul>
  <p>+7 (495) 777-77-77</p>
 </nav>

</div>

    );
}
export default Nav;
