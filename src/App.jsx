import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home.jsx';
import About from '../src/pages/About.jsx';
import Services from '../src/pages/Services.jsx';
import './App.css';
import Navbar from './components/Navbar.jsx';

const App = () => {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
