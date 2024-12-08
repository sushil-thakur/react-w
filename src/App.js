// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  return (
    <>
<Navbar title="TextUtlis" about="About us"/>
{/* <Navbar/> */}
<div className="container my-3">
<TextForm heading="Enter the text to analyze"/>
{/* <About/> */}
</div>
    </>
 
    
        
      
  );
}

export default App;