import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => setText(text.toUpperCase());
  const handleLoClick = () => setText(text.toLowerCase());
  const handleClearClick = () => setText('');
  const handleInverseClick = () => setText(text.split('').reverse().join(''));
  const handleOnChange = (event) => setText(event.target.value);

  const wordCount = text.split(/\s+/).filter((word) => word.length > 0).length;

  return (
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h1>{props.heading}</h1>
      <textarea
        className="form-control"
        value={text}
        onChange={handleOnChange}
        style={{
          backgroundColor: props.mode === 'dark' ? '#333' : '#fff',
          color: props.mode === 'dark' ? 'white' : 'black',
        }}
        rows="8"
      ></textarea>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleInverseClick}>Invert Text</button>

      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{0.008 * wordCount} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
      </div>
    </div>
  );
}
