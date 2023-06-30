import React from 'react';
import { Route, BrowserRouter, Routes, Router } from 'react-router-dom';
import LentesSol from './lentesSol/variedad';
import Rayband from './lentesSol/rayband';
import NavBar from './navbar/navbar.js';
import Graduacion from './lentesAumento/graduacion';
import Inicio from './inicio/inicio'




const EnrutadorDeApp = () => {
  return (
    <BrowserRouter basename='/opticavision'>
        <NavBar />
        <Routes>
        <Route path="/opticavision" element={<Inicio />} exact={true} />
        <Route path="/lentesSol" element={<LentesSol />} />
        <Route path="/rayband" element={<Rayband />} />
        <Route path="/graduacion" element={<Graduacion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default EnrutadorDeApp;