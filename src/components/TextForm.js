import React ,{useState}from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase(); 
        setText(newText);
    }
    const handleloClick = ()=>{
      console.log("Lowercase was clicked"+ text);
  let newText = text.toLowerCase(); 
      setText(newText);
  }
  const handleClearClick = ()=>{
    console.log("Uppercase was clicked"+ text);
let newText = ''; 
    setText(newText);
}
const handleinverseclick = () => {
  console.log("inverse click is triggered");
  let newtext = "";
  for (let i = text.length - 1; i >= 0; i--) {
    newtext += text[i];
  }
  setText(newtext);
}
    const handleOnChange = (event)=>{
        console.log("OnCahnage" );
        setText(event.target.value);
    }
    
    const [text, setText] = useState('');
    // setText("new text");
  return (
<div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <label for="myBox"/>
     <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear the text</button>
<button className="btn btn-primary mx-2" onClick={handleinverseclick}>invert</button>




<div className="container my-3 ">
  <h1>Your Text summary</h1>
  <p>{text.split(" ").length} words and  {text.length} character</p>
  <p>{0.008 * text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</div>


  )
}