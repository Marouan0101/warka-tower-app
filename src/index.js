import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Donate from './pages/Donate';
import Home from './pages/Home';
import WarkaIndexCalculator from './components/WarkaIndexCalculator';
import BadRequest from './pages/BadRequest';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/WarkaIndex' element={<WarkaIndexCalculator />} />
      <Route path='/Donate' element={<Donate />} />
      <Route path='*' element={<BadRequest />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
