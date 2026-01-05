// src/components/visual/HomeCarousel.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick.css";
import "slick-carousel/slick-theme.css";

interface HomeCarouselProps {
  images: string[];
  onButtonClick?: () => void; // Acción al hacer clic en el botón/flecha
}

export const HomeCarousel: React.FC<HomeCarouselProps> = ({ images, onButtonClick }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Ocultamos flechas de react-slick
  };

  return (
    <div className="relative w-full h-[calc(100vh-64px)] overflow-hidden">
      <Slider {...settings} className="h-full w-full">
        {images.map((imgUrl, index) => (
          <div key={index}>
            <div className="w-full h-[calc(100vh-64px)] bg-cover bg-center relative" style={{ backgroundImage: `url(${imgUrl})` }}>
              {/* Overlay semitransparente */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-white text-4xl font-bold mb-4">JJ Motors</h2>
                <p className="text-white text-lg mb-8">Siente la emoción de manejar una Honda</p>

                {/* Botón / flecha para descubrir */}
                <button onClick={onButtonClick} className="flex flex-col items-center text-white hover:text-gray-200 focus:outline-none">
                  {/* Flecha hacia abajo */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="mt-2">Descubre tu Honda</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
