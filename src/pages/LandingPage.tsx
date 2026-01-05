import React from "react";
import { useNavigate } from "react-router-dom";
import XImage from "../assets/logo-nav.png";

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const carouselHeight = "h-[calc(100vh-120px)]";

  // Configuración del slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Ocultamos flechas
  };

  // Imágenes para el carrusel
  // const carouselImages = [hondaBike, hondaBike1, hondaBike2];

  return (
    <div className="relative  flex flex-col">
      <div className={`relative w-full ${carouselHeight} overflow-hidden`}>
        <h1 className="flex items-center justify-center mt-10">Bienvenidos a la web de Xona 2.0!</h1>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <img src={XImage} alt="Xona Logo" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
