import React from 'react';
import { Carousel } from 'react-bootstrap';
import lentes1 from '../imagenes/CARRUSEL/LENTES1.jpg'
import lentes2 from '../imagenes/CARRUSEL/LENTES2.jpg'
import lentes3 from '../imagenes/CARRUSEL/LENTES3.jpg'
import lentes1cel from '../imagenes/CARRUSEL/LENTES1_CEL.jpg'
import lentes2cel from '../imagenes/CARRUSEL/LENTES2_CEL.jpg'
import lentes3cel from '../imagenes/CARRUSEL/LENTES3_CEL.jpg'

const Inicio = () => {
 
  const carouselImages = [
    { id: 1, desktopImage: lentes1, mobileImage: lentes1cel },
    { id: 2, desktopImage: lentes2, mobileImage: lentes2cel },
    { id: 3, desktopImage: lentes3, mobileImage: lentes3cel },
  ];

  return (
    <Carousel>
      {carouselImages.map((image) => (
        <Carousel.Item key={image.id}>
          <picture>
            <source media="(max-width: 768px)" srcSet={image.mobileImage} />
            <source media="(min-width: 769px)" srcSet={image.desktopImage} />
            <img
              className="d-block w-100"
              src={image.desktopImage}
              alt="Descripción de la imagen"
            />
          </picture>
        </Carousel.Item>
        
      ))}
    </Carousel>
  );


}

export default Inicio;