import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import LentesSol from './lentesSol/variedad';
import Matt from './lentesSol/matt.js';
import NavBar from './navbar/navbar.js';
import Graduacion from './lentesAumento/graduacion';
import Inicio from './inicio/inicio'
import Nosotros from './nosotros/nosotros';
import Mohs from './lentesSol/mohs'
import Ruta66 from './lentesSol/ruta66'
import Ozono from './lentesSol/ozono'




const EnrutadorDeApp = () => {
 

  return (
    <BrowserRouter basename='/opticavision'>
        <NavBar />
        <Routes>
        <Route path="/opticavision" element={<Inicio />} exact={true} />
        <Route path="/mohs" element={<Mohs />} />
        <Route path="/ruta66" element={<Ruta66 />} />
        <Route path="/ozono" element={<Ozono />} />
        <Route path="/lentesSol" element={<LentesSol />} />
        <Route path="/matt" element={<Matt />} />
        <Route path="/graduacion" element={<Graduacion />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/*" element={<Navigate to="/opticavision" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default EnrutadorDeApp;