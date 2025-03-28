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

  const handleLoad = () => {
    setIsLoaded(true);
  };

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