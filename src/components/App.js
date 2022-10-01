import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const[tPara,setTPara]=useState("")
  const txt='Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy'
  const onClickHandler=()=>{
    setTPara(txt)
  }
  return (
    <div id="main">

    <button id="click" onClick={onClickHandler} >clickme</button>
    <p id="para">{tPara}</p>
    
    </div>
  );
}

export default App;
