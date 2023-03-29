import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './Components/login/login';
import Home from './Components/home/Home';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App; 
