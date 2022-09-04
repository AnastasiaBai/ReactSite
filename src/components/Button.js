import React from "react";
import '../assets/button.css';

export default function Button(props){

    return(
        <div className="button">
        <button 
        type={props.type}
        style = {{width:props.width}} 
        >{props.text}</button>
        </div>

    );
}