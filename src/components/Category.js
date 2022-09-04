import React from "react";
import Image from "./Image";
import '../assets/category.css';

const firstItem = [ 'KS E22','KS ES1l','KS Air t15','KS F30','KS E45','KS MAX','KS MAX']
const secondItem = [ 'KS ES2','KS ES 3','EKS ZING E8','EKS ZING E10','EKS ZING E12','CATEGORY 1','АКСЕССУАРЫ']

const secondItemLength = secondItem.length;
export default function Category(){
    const listItem = firstItem.map((item,i)=> <li key={i}> <Image src={require('../assets/img/segway.png')} alt="" /> <br/> <span>{item}</span> </li>
    );
    const listItem2 = secondItem.map((item,i)=> 
        // console.log(i); 
        (secondItemLength === i+1) ? <li key={i}> <Image src={require('../assets/img/accsesories.png')} alt="" /> <br/> <span>{item}</span> </li> :  <li key={i}> <Image src={require('../assets/img/segway.png')} alt="" /> <br/> <span>{item}</span> </li>
);
    return(
      
<div className="container">
<ul className="first category" >
       {listItem} 
    </ul>
 <ul className="second category" >
       {listItem2}
    </ul>
</div>

);}