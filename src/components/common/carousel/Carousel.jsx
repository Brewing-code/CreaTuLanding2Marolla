import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que esta línea esté presente


function MainCarousel() {
  return (
    <Carousel 
    interval={3000} 
    pause={false}
    fade>
      <Carousel.Item>
        <img
        className="d-block w-100 image-carousel" 
        src="https://res.cloudinary.com/djoumjsq8/image/upload/v1734035179/DiaD_kwobrp.jpg"></img> 
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
      className="d-block w-100 image-carousel"
      src="https://res.cloudinary.com/djoumjsq8/image/upload/v1734035177/Wadu_vvp070.jpg"></img>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
      className="d-block w-100 image-carousel"
      src="https://res.cloudinary.com/djoumjsq8/image/upload/v1734035176/Aniver3_bllxll.jpg"></img>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
      className="d-block w-100 image-carousel"
      src="https://res.cloudinary.com/djoumjsq8/image/upload/v1734035175/Aplanadora_uprl58.jpg"></img>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;