import React from 'react';
import Spline from '@splinetool/react-spline';

interface SplineBackgroundProps {
  scene: string;
  className?: string;
}

const SplineBackground: React.FC<SplineBackgroundProps> = ({ 
  scene,
  className = ''
}) => {

  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}>
      {/* Remove all opacity settings from here and handle them in the parent component */}
      <Spline 
        scene={scene} 
      />
    </div>
  );
};

export default SplineBackground;