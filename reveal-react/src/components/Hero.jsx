import './Hero.css';
import { useState, useEffect } from 'react';
import img1 from '../assets/hero-carousel-1.jpg';
import img2 from '../assets/hero-carousel-2.jpg';
import img3 from '../assets/hero-carousel-3.jpg';

const images = [img1, img2, img3];

function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setActive((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setActive((prev) => (prev + 1) % images.length);

  return (
    <section id="hero" className="hero-section" style={{ backgroundImage: `url(${images[active]})` }}>
      <div className="hero-carousel-controls">
        <button className="carousel-arrow left" onClick={prevSlide} aria-label="Anterior">&#8249;</button>
        <button className="carousel-arrow right" onClick={nextSlide} aria-label="Siguiente">&#8250;</button>
      </div>
      <div className="hero-container">
        <h1>
          ¡ Haciendo realidad <br />
          <span className="highlight">tus ideas</span> !
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button>Empezar</button>
      </div>
    </section>
  );
}

export default Hero; 