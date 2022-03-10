import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to Uppercase", "Sucess");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to Lowercse", "Sucess");
  };
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared", "Sucess")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'dark' ? 'white' : 'black'}}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1 " onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1 " onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1 " onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}} >
        <h2>Your Text Summary📚!</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!== 0}).length} words and {text.length} characters</p>
       <h3>
         Avarage time to read your content⏰!
       </h3>
       <p>{0.008* text.split(" ").filter((element)=>{return element.length!== 0}).length} Minutes</p>
       <h3>
         Preview✌️!
       </h3>
       <p>{text.length>0 ? text:"Enter something to preview"}</p>
      </div>
    </>
  );
}
