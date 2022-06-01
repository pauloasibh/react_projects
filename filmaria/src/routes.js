import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Filme from './pages/Filme';
import Erro from './pages/Erro';

const Rota = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/filme/:id' element={<Filme />} />
        <Route path='*' element={<Erro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rota;