import React, { useState, useRef } from 'react';
import '../App.css';

const MAX_Visibility = 2;

interface CarouselProps {
  children: React.ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({ children }: CarouselProps) => {
  const [active, setActive] = useState(2);
  const [startX, setStartX] = useState(0);
  const isDragging = useRef(false);

  const count = React.Children.count(children);

  // Manejar el inicio del deslizamiento
  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  // Manejar el movimiento
  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = startX - clientX;

    // Si se desliza más de 50px, cambiamos de tarjeta
    if (Math.abs(diff) > 50) {
      if (diff > 0 && active < count - 1) {
        setActive(prev => prev + 1);
        isDragging.current = false; // Detener para que solo pase de una en una
      } else if (diff < 0 && active > 0) {
        setActive(prev => prev - 1);
        isDragging.current = false;
      }
    }
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  return (
    <>
      <div className="carousel-container" onMouseDown={handleStart} onMouseMove={handleMove} onMouseUp={handleEnd} onTouchStart={handleStart} onTouchMove={handleMove} onTouchEnd={handleEnd}>
        {React.Children.map(children, (child, index) => (
          <div className="card-container" style={{
            '--active': index === active ? 1 : 0,
            '--offset': (active - index) / 3,
            '--direction': Math.sign(active - index),
            '--abs-offset': Math.abs(active - index) / 3,
            'pointerEvents': active === index ? 'auto' : 'none',
            'opacity': Math.abs(active - index) >= MAX_Visibility ? "0" : "1",
            'display': Math.abs(active - index) > MAX_Visibility ? 'none' : 'block',
          } as React.CSSProperties}>
            {child}
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {React.Children.map(children, (_, index) => (
          <button
            key={index}
            className={`dot ${index === active ? 'active' : ''}`}
            onClick={() => setActive(index)}
            aria-label={`Ver torneo ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};