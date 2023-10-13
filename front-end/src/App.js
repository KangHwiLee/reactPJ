
import './App.css';
// import Component1 from './Component1';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Info from './pages/Info';
import State from './pages/State';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/info' element={<Info/>} />
            <Route path='/state' element={<State/>} />
          </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
