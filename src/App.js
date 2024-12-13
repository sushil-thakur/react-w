// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';


function App() {
  
  const [mode, setdarkmode] = useState('dark');//whether dark mode is wnable or not
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);}

   const toggleMode=()=>{
    if(mode==='light'){
      setdarkmode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtlis-Dark';
    }
    else{
      setdarkmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtlis-light';
    }
  }
  return (
    <>
<Navbar title="TextUtlis" about="About us" mode={mode} toggleMode={toggleMode}/>
{/* <Navbar/> */}
<Alert alert={alert}/>
<div className="container my-3">
<TextForm  showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
{/* <About/> */}
<colorPalette/>
</div>
    </>
 
    
        
      
  );
}

export default App;