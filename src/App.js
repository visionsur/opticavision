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
import Kayak from './lentesSol/kayak';
import Zero from './lentesSol/zero';
import Marco from './lentesAumento/marcos';
import Accesorios from './accesorios/accesorios';
import Legacy from './lentesSol/legacy'
import NotFound from './notFound/notFound';




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
        <Route path="/kayak" element={<Kayak />} />
        <Route path="/zero" element={<Zero />} />
        <Route path="/marco" element={<Marco />} />
        <Route path="/accesorios" element={<Accesorios/> } />
        <Route path="/graduacion" element={<Graduacion />} />
        <Route path="/legacy" element={<Legacy />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/" element={<Navigate to="/opticavision" />} />
        <Route component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default EnrutadorDeApp;