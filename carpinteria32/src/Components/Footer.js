import React from "react";

export default function Footer(){
    
    const FootStyle = { 
        background: "#343a40",
        clear: "both",
        color: "white",
        textalign: "center",
        padding: "5px 0",
        margintop: "20px"}
    return(
        <div style={FootStyle} >
        <p  >Diseñado por Juan Ruiz - &copy;2022</p>
        </div>
    )
}