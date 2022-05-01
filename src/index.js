import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import WarkaIndex from './pages/WarkaIndex';
import BadRequest from './pages/BadRequest';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/WarkaIndex' element={<WarkaIndex />} />
      <Route path='*' element={<BadRequest />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
