'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '@/app/context/theme-context';

const CoordinatedTapeReveal = () => {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  
  // Set client-side rendering flag
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Tape configurations with vw units for responsive sizing
  const tapes = [
    {
      id: 'tape1',
      angle: -8,
      top: '15vw',
      height: '10vw',
      maxHeight: '80px', // Cap the maximum height
      minHeight: '40px',  // Minimum height for small screens
      tearDirection: 'right'
    },
    {
      id: 'tape2',
      angle: 5,
      top: '32vw',
      height: '9vw',
      maxHeight: '75px',
      minHeight: '38px',
      tearDirection: 'left'
    },
    {
      id: 'tape3',
      angle: -10,
      top: '50vw',
      height: '11vw',
      maxHeight: '85px',
      minHeight: '45px',
      tearDirection: 'right'
    },
    {
      id: 'tape4',
      angle: 7,
      top: '68vw',
      height: '10vw',
      maxHeight: '80px',
      minHeight: '42px',
      tearDirection: 'left'
    }
  ];
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Common animation trigger point - all tapes tear at same scroll point
  const tearStartPoint = 0.25;
  const tearDuration = 0.15;
  
  // Calculate the segments for a single tape
  const renderTape = (tape) => {
    const { id, angle, top, height, maxHeight, minHeight, tearDirection } = tape;
    
    // Number of segments per tape - responsive to screen size
    const numSegments = 8; 
    const segments = [];
    
    // Calculate when this tape starts to tear
    // All tapes will tear at nearly the same time but with tiny staggered starts
    const tapeIndex = parseInt(id.replace('tape', ''));
    const tearStart = tearStartPoint + (tapeIndex * 0.02);
    const tearEnd = tearStart + tearDuration;
    
    // Create segments
    for (let i = 0; i < numSegments; i++) {
      // Direction-based offsets
      const isRightTear = tearDirection === 'right';
      const segmentPosition = isRightTear ? i : numSegments - i - 1;
      
      // Small staggered delay between segments (very small to make it look coordinated)
      const segmentDelay = (segmentPosition / numSegments) * 0.05;
      const segmentTearStart = tearStart + segmentDelay;
      const segmentTearEnd = segmentTearStart + 0.1;
      
      // Segment width based on screen percentage
      const segmentWidth = `${100 / numSegments}%`;
      const segmentLeft = `${(i / numSegments) * 100}%`;
      
      // Animation values
      const xMovement = isRightTear ? '120vw' : '-120vw';
      const yMovement = angle > 0 ? '10vh' : '-10vh';
      const rotateAmount = isRightTear ? '30deg' : '-30deg';
      
      // Animation transforms
      const xTransform = useTransform(
        scrollYProgress,
        [segmentTearStart, segmentTearEnd],
        ['0', xMovement]
      );
      
      const yTransform = useTransform(
        scrollYProgress,
        [segmentTearStart, segmentTearEnd],
        ['0', yMovement]
      );
      
      const rotateTransform = useTransform(
        scrollYProgress,
        [segmentTearStart, segmentTearEnd],
        ['0deg', rotateAmount]
      );
      
      const opacityTransform = useTransform(
        scrollYProgress,
        [segmentTearStart, segmentTearEnd, segmentTearEnd + 0.05],
        [1, 0.6, 0]
      );
      
      // Create segment with jagged edges for torn look
      segments.push(
        <motion.div
          key={`${id}-segment-${i}`}
          className="absolute"
          style={{
            left: segmentLeft,
            width: segmentWidth,
            height: '100%',
            backgroundImage: `url('/banner1.png')`,
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'auto 100%',
            x: xTransform,
            y: yTransform,
            rotate: rotateTransform,
            opacity: opacityTransform,
            transformOrigin: isRightTear ? 'left center' : 'right center',
            boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
            // Create jagged edge effect
            clipPath: i % 2 === 0 
              ? `polygon(0% 0%, 100% 0%, 100% ${90 + (Math.random() * 10)}%, 0% ${92 + (Math.random() * 8)}%)`
              : `polygon(0% 0%, 100% 0%, 100% ${92 + (Math.random() * 8)}%, 0% ${88 + (Math.random() * 12)}%)`
          }}
        />
      );
    }
    
    // Return the complete tape
    return (
      <div
        key={id}
        className="absolute left-0 right-0"
        style={{
          top,
          height,
          maxHeight,
          minHeight,
          transform: `rotate(${angle}deg)`,
          zIndex: 10 - tapeIndex
        }}
      >
        {segments}
      </div>
    );
  };
  
  // Create floating debris pieces for added effect
  const renderDebris = () => {
    if (!isClient) return null;
    
    const debris = [];
    const numPieces = 10;
    
    for (let i = 0; i < numPieces; i++) {
      // Random positioning and sizing
      const topPos = 10 + (Math.random() * 80);
      const leftPos = 10 + (Math.random() * 80);
      const width = 8 + (Math.random() * 12);
      const height = 4 + (Math.random() * 6);
      
      // Animation timing - all appear right after tear starts
      const appearPoint = tearStartPoint + 0.05 + (Math.random() * 0.1);
      const disappearPoint = appearPoint + 0.3 + (Math.random() * 0.2);
      
      // Animation values
      const xMove = -50 + (Math.random() * 100);
      const yMove = 50 + (Math.random() * 150);
      const rotate = -180 + (Math.random() * 360);
      
      debris.push(
        <motion.div
          key={`debris-${i}`}
          className="absolute"
          style={{
            top: `${topPos}%`,
            left: `${leftPos}%`,
            width: `${width}vw`,
            height: `${height}vw`,
            maxWidth: '120px',
            maxHeight: '60px',
            backgroundImage: `url('/banner1.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            opacity: useTransform(
              scrollYProgress,
              [appearPoint, appearPoint + 0.05, disappearPoint - 0.05, disappearPoint],
              [0, 1, 1, 0]
            ),
            x: useTransform(
              scrollYProgress,
              [appearPoint, disappearPoint],
              [0, `${xMove}vw`]
            ),
            y: useTransform(
              scrollYProgress,
              [appearPoint, disappearPoint],
              [0, `${yMove}vh`]
            ),
            rotate: useTransform(
              scrollYProgress,
              [appearPoint, disappearPoint],
              [0, `${rotate}deg`]
            ),
            zIndex: 15
          }}
        />
      );
    }
    
    return debris;
  };
  
  // Content reveal animation
  const contentOpacity = useTransform(
    scrollYProgress, 
    [tearStartPoint, tearStartPoint + 0.3], 
    [0, 1]
  );
  
  const contentScale = useTransform(
    scrollYProgress, 
    [tearStartPoint, tearStartPoint + 0.3], 
    [0.95, 1]
  );
  
  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden w-full"
      style={{ minHeight: '100vh' }}
    >
      {/* Background */}
      <div 
        className={`absolute inset-0 ${
          theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-50'
        }`}
      />
      
      {/* Tapes */}
      {isClient && tapes.map(tape => renderTape(tape))}
      
      {/* Floating debris */}
      {renderDebris()}
      
      {/* Content to be revealed */}
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center p-4"
        style={{
          opacity: contentOpacity,
          scale: contentScale
        }}
      >
        <div 
          className={`p-8 sm:p-10 rounded-xl text-center max-w-lg mx-auto ${
            theme === 'dark' ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-zinc-100'
          }`}
          style={{ 
            boxShadow: theme === 'dark' ? '0 0 40px rgba(0,0,0,0.2)' : '0 0 40px rgba(0,0,0,0.05)'
          }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Hello, I'm [Your Name]
          </h1>
          
          <p className="text-xl mb-8">
            Building thoughtful digital experiences 
            without the unnecessary complexity.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="px-6 py-3 bg-yellow-400 text-black font-medium rounded-lg 
                        transition-transform hover:scale-105"
            >
              View My Work
            </button>
            <button 
              className={`px-6 py-3 font-medium rounded-lg border transition-transform hover:scale-105
                        ${theme === 'dark' ? 'border-zinc-700 hover:border-zinc-600' : 'border-zinc-200'}`}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </motion.div>
      
      {/* Scroll instruction */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0])
        }}
      >
        <div className="flex flex-col items-center">
          <p className="text-sm opacity-70 mb-2">Scroll to reveal</p>
          <div className="w-6 h-10 border-2 rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-current"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CoordinatedTapeReveal;