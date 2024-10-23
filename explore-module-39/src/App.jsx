import { useState } from "react";
import "./App.css";
import State from "./State";
import PlayerState from "./PlayerState";
import UsersEffect from "./UsersEffect";
import DataFetch from "./EffectComponent/DataFetch";
import Mockup from "./mockupComponent/Mockup";

function App() {
  // style
  const inputStyle = {
    padding: "10px",
    borderRadius: "15px",
  };
  //method
  const [text, setText] = useState("");
  const handleInputText = (event) => {
    // const inputValue = event.target.value;
    // console.log(inputValue);
    // setText(inputValue);
    setText(event.target.value);
  };
  const handleClick1 = () => {
    alert("button 1");
  };
  const handleClick2 = (text1, text2 = " maya") => {
    alert(text1 + text2);
  };
  return (
    <>
      <h3>React core concepts related</h3>
      <Mockup></Mockup>
      <DataFetch></DataFetch>
      <UsersEffect></UsersEffect>
      <PlayerState></PlayerState>
      <State></State>
      <div className="state-container">
        <button
          onClick={handleClick1}
          style={{ backgroundColor: "gray", color: "white", margin: "10px" }}
        >
          button 1
        </button>
        <button
          onClick={() => {
            handleClick2("Miss you");
          }}
          style={{ backgroundColor: "gray", color: "white", margin: "10px" }}
        >
          button 1
        </button>
      </div>
      <div className="state-container">
        <h3>use onChange event</h3>
        <input
          onChange={handleInputText}
          style={inputStyle}
          type="text"
          name=""
          id="text-input"
          placeholder="Use onChange event"
        />
        <p style={{ fontSize: "32px", fontWeight: "bold" }}>
          On change input text :{text}
        </p>
      </div>
    </>
  );
}

export default App;
