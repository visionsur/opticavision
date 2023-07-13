import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="https://visionsur.github.io/opticavision/">Volver a la página principal</Link>
    </div>
  );
};

export default NotFound;