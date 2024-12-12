import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que esta línea esté presente


function MainCarousel() {
  return (
    <Carousel 
    interval={3000} 
    pause="hover" 
    fade>
      <Carousel.Item>
        <img
        className="d-block w-100 image-carousel" 
        src="https://res.cloudinary.com/djoumjsq8/image/upload/v1733351770/Indio_xyor9b.png"></img> 
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
      className="d-block w-100 image-carousel"
      src="https://res.cloudinary.com/djoumjsq8/image/upload/v1733351770/IMPERIALSTOUT_aixz3a.png"></img>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
      className="d-block w-100 image-carousel"
      src="https://res.cloudinary.com/djoumjsq8/image/upload/v1733351770/IMPERIALSTOUT_aixz3a.png"></img>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;