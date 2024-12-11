// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';

function App() {
  const [mode, setdarkmode] = useState('dark');//whether dark mode is wnable or not
   const toggleMode=()=>{
    if(mode==='light'){
      setdarkmode('dark');
      document.body.style.backgroundColor='black';
    }
    else{
      setdarkmode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
<Navbar title="TextUtlis" about="About us" mode={mode} toggleMode={toggleMode}/>
{/* <Navbar/> */}
<div className="container my-3">
<TextForm heading="Enter the text to analyze" mode={mode}/>
{/* <About/> */}
</div>
    </>
 
    
        
      
  );
}

export default App;