import React, { useState, useEffect, useRef } from 'react';
import { motion, type PanInfo } from 'framer-motion';
import { TournamentCard } from './TournamentCard';
import type { Tournament } from '../data/tournaments';
import '../App.css';

interface CarouselProps {
  tournaments: Tournament[];
  onSelect: (tournament: Tournament) => void;
  orientation?: 'horizontal' | 'vertical';
  showControls?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({ 
  tournaments, 
  onSelect, 
  orientation = 'horizontal',
  showControls = false,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [cellWidth, setCellWidth] = useState(210);
  const [radiusGap, setRadiusGap] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  
  const cellCount = tournaments.length;
  const cellHeight = cellWidth * 1.4;
  
  const isHorizontal = orientation === 'horizontal';
  const rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
  const cellSize = isHorizontal ? cellWidth : cellHeight;
  
  const theta = 360 / cellCount;
  const radius = Math.round(((cellSize + radiusGap) / 2) / Math.tan(Math.PI / cellCount));

  useEffect(() => {
    const handleResize = () => {
        const width = Math.min(window.innerWidth * 0.8, 300); 
        setCellWidth(width);
        // Add more space between cards (larger radius) on wider screens
        setRadiusGap(window.innerWidth > 768 ? 150 : 10);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotation logic
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setSelectedIndex(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const rotateCarousel = () => {
    const angle = theta * selectedIndex * -1;
    return `translateZ(${-radius}px) ${rotateFn}(${angle}deg)`;
  };

  const prev = () => {
    setSelectedIndex(prev => prev - 1);
  };

  const next = () => {
    setSelectedIndex(prev => prev + 1);
  };

  const handleCardClick = (tournament: Tournament) => {
    if (!isDragging.current) {
        onSelect(tournament);
    }
  };

  const onPanStart = () => {
    isDragging.current = true;
    setIsAutoPlaying(false);
  };

  const onPanEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      // Small timeout to prevent the click event from firing immediately after release if they were dragging
      setTimeout(() => {
        isDragging.current = false;
        setIsAutoPlaying(true);
      }, 50);

      const threshold = 50;
      if (isHorizontal) {
          if (info.offset.x < -threshold) next();
          else if (info.offset.x > threshold) prev();
      } else {
          // For vertical: dragging up (negative y) goes to next?
          // Visually dragging UP moves content UP, which acts like "scrolling down" or next item?
          // Let's stick to standard swipe direction logic
          if (info.offset.y < -threshold) next();
          else if (info.offset.y > threshold) prev();
      }
  };

  return (
    <div 
        className="scene" 
        ref={containerRef} 
        style={{ 
            width: cellWidth, 
            height: cellHeight,
            // Ensure touch actions don't scroll the page when swiping the carousel
            touchAction: 'none' 
        }}
    > 
      <motion.div
        className="carousel"
        initial={false}
        animate={{ transform: rotateCarousel() }}
        transition={{ type: "spring", stiffness: 50, damping: 20, mass: 1 }}
        onPanStart={onPanStart}
        onPanEnd={onPanEnd}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          transformStyle: 'preserve-3d',
        }}
      >
        {tournaments.map((tournament, index) => {
             const cellAngle = theta * index;
             return (
                <div
                    key={tournament.id}
                    className="carousel-cell"
                    style={{
                        position: 'absolute',
                        left: isHorizontal ? 10 : 0, 
                        top: isHorizontal ? 10 : 0,
                        width: isHorizontal ? cellWidth - 20 : cellWidth, 
                        height: isHorizontal ? cellHeight - 20 : cellHeight,
                        transform: `${rotateFn}(${cellAngle}deg) translateZ(${radius}px)`,
                    }}
                >
                    <TournamentCard 
                        tournament={tournament} 
                        onClick={handleCardClick} 
                    />
                </div>
             );
        })}
      </motion.div>

      
      {/* Optional: Navigation buttons if user wants them, or just rely on swipe */}
      {showControls && (
        <div style={{ position: 'absolute', bottom: '-60px', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '20px', zIndex: 100 }}>
            <button className="nav-btn" onClick={prev}>&lt;</button>
            <button className="nav-btn" onClick={next}>&gt;</button>
        </div>
      )}
    </div>
  );
};
