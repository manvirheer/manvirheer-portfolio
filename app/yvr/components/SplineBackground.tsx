import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineBackgroundProps {
  scene: string;
  className?: string;
}

const SplineBackground: React.FC<SplineBackgroundProps> = ({ 
  scene,
  className = ''
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check and update mobile status
    const checkMobileStatus = () => {
      // Typically, tablets and larger screens are considered non-mobile
      // You can adjust these breakpoints as needed
      setIsMobile(window.innerWidth < 768); // 768px is a common tablet breakpoint
    };

    // Check initial status
    checkMobileStatus();

    // Add event listener to handle window resizing
    window.addEventListener('resize', checkMobileStatus);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', checkMobileStatus);
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // If it's a mobile device, don't render Spline at all
  if (isMobile) {
    return null;
  }

  return (
    <div 
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden ${className}`}
      style={{ 
        backgroundColor: isLoaded ? 'transparent' : '#f0f0f0', // Fallback background
        transition: 'background-color 0.3s ease'
      }}
    >
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      >
        <Spline 
          scene={scene} 
          onLoad={handleLoad}
          style={{ 
            width: '100%', 
            height: '100%', 
            transform: 'scale(1.1)', // Slight zoom to cover potential edge issues
            transformOrigin: 'center'
          }}
        />
      </div>
    </div>
  );
};

export default SplineBackground;