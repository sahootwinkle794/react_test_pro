import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLowClick = ()=>{
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText)
  }


  const handleOnChange = (event)=>{
    console.log("On chnage");
    setText(event.target.value)
  }

  const [text,setText] =useState('Enter text here');
  
  return (
    <>
    
    <div className="container">
        <div>
        <h3>{props.heading}</h3>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
        </div>
        <button type="button" className="btn btn-primary my-4" onClick={handleUpClick}>Convert To Uppercase</button>
        <button type="button" className="btn btn-primary mx-4 my-4" onClick={handleLowClick}>Convert To Lowercase</button>
    </div>

    <div className="container">
       
    </div>
    </>
    
  )
}
