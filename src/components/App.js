import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const[tPara,setTPara]=useState(false)
  const txt="Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
  const onClickHandler=()=>{
    setTPara(true)
  }
  return (
    <div id="main">

    <button id="click" onClick={onClickHandler} >click</button>
     {tPara && (
        <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      )}
    
    </div>
  );
}

export default App;
