
import './App.css';
// import Component1 from './Component1';
import Side from './layout/Side';
import Home from './layout/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import $ from "jquery";


function App() {

  return (
    <div className="App">
      <div id='wrap'>
        <BrowserRouter>
          <Side/>
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
