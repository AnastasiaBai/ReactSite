import React from "react";
import Button from "./Button";
import Image from "./Image";
import '../assets/main.css';
 
export default function Main(){
    return(
  <div className="main">  
<div className="main_text">
  <p>Самокат<span>В наличии</span></p> 
  <h1>Ninebot<br/>Kickscooter <br/>MAX</h1>
</div>
  <div className="logo_distribution">
     <Image src={require('../assets/img/circle.png')}  alt="circle" width={30} height={30}/>
     <Image src={require('../assets/img/path2908.png')} alt="logo1"width={30} height={39}/>
   <p> Официальный </p>
   <p>дистребьютор</p>
</div>
<div className="garant">
<p>Расширенная гарантия</p> <a href="#">Узнать подробнее</a>
</div>
<div className="button__block">
<Button type={'button'} text={'1 год - 1000 ua'} />
<Button type={'button'} text={'2 года - 2000 ua'} />
<Button type={'button'} text={'3 года - 2000 ua'} />
</div>
<div className="protect">
  <p>34 800 ua</p>
  <p>31 800 ua</p>
  <Button type='submit' text='КУПИТЬ' />
  <Image src={require('../assets/img/protect.png')} alt="" width={247}
  height={140}/>
  <span>Защита в подарок</span>
</div>

<div className="main__pic">
  <Image src={require('../assets/img/main_segway.png')} alt="" width={702}
    height={709}/>
</div>
    </div>
    
);
}