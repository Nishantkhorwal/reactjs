
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode,setMode]= useState('light');
  const toggleMode = () =>{
    if(mode=== 'light'){
    setMode('dark');
    document.body.style.backgroundColor="#042743";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white"; 
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div class="container my-3">
    {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />}>
            
          </Route> */}
          {/* <Route exact path="/" element={< */}
            <TextForm heading="Enter Text"mode={mode}/>
            {/* // }> */}

           {/* </Route>
        // </Routes> */}
      </div>
      // {/* </Router> */}
</>
  );
}

export default App;
