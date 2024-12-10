// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  const [darkmode, setdarkmode] = useState(false);//whether dark mode is wnable or not
  return (
    <>
<Navbar title="TextUtlis" about="About us" mode={darkmode}/>
{/* <Navbar/> */}
<div className="container my-3">
<TextForm heading="Enter the text to analyze"/>
{/* <About/> */}
</div>
    </>
 
    
        
      
  );
}

export default App;