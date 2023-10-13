
import './App.css';
// import Component1 from './Component1';
import Header from './layout/Header';
import Home from './layout/Home';
import Footer from './layout/Footer';
import Project from './pages/Project';
import Param1 from './pages/Param1';
import Content from './pages/Content';
import ContentDetail from './pages/ContentDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Param2 from './pages/Param2';
import { useEffect, useState } from 'react';
import $ from "jquery";


function App() {
  const [message, setMessage] = useState("")
  useEffect(()=>{
    fetch("/test")
      .then(res => res.text())
      .then(m=>setMessage(m))
      .then(console.log({message}))
  })

  return (
    <div className="App">
      <div id='wrap'>
        <BrowserRouter>
          <Header/>
            <div className='container'>
            <Home/>
            </div>
        </BrowserRouter>
        {/* <Footer/> */}
        </div>
    </div>
  );
}

export default App;
