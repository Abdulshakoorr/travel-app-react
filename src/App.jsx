import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import About from "./pages/about/About.jsx";
import Home from './pages/home/Home.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App