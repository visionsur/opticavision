import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import lentes1 from '../imagenes/CARRUSEL/LENTES1.jpg';
import lentes2 from '../imagenes/CARRUSEL/LENTES2.jpg';
import lentes3 from '../imagenes/CARRUSEL/LENTES3.jpg';
import lentes1cel from '../imagenes/CARRUSEL/LENTES1_CEL.jpg';
import lentes2cel from '../imagenes/CARRUSEL/LENTES2_CEL.jpg';
import lentes3cel from '../imagenes/CARRUSEL/LENTES3_CEL.jpg';
import icono from '../imagenes/CARRUSEL/iconodireccion.png'
import { Link } from 'react-router-dom';

const Inicio = () => {
  const carouselImages = [
    { id: 1, desktopImage: lentes1, mobileImage: lentes1cel, link: null },
    { id: 2, desktopImage: lentes2, mobileImage: lentes2cel, link: 'https://goo.gl/maps/qiSVFbcZARytbSsQ8' },
    { id: 3, desktopImage: lentes3, mobileImage: lentes3cel, link: null },
  ];
  const handleClick = (link) => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <Carousel>
      {carouselImages.map((image) => (
        <Carousel.Item key={image.id}>
          <picture>
            <source media="(max-width: 768px)" srcSet={image.mobileImage} style={{ maxWidth: '100%' }} />
            <source media="(min-width: 769px)" srcSet={image.desktopImage} />
              <img
                className="d-block w-100"
                src={image.desktopImage}
                alt="Descripción de la imagen"
              />
              {image.id === 2 && (
                  <Carousel.Caption>
                    <a>
                      
                        <Link to='https://goo.gl/maps/qiSVFbcZARytbSsQ8' >
                        <img src={icono}></img>
                        </Link>
                      
                    </a>
                    
                  </Carousel.Caption>
                )}
          </picture>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Inicio;
