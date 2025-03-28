// app/yvr/ui/CalloutBox.tsx
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CalloutBoxProps {
  icon?: ReactNode;
  title: string;
  description: string;
  variant?: 'default' | 'highlight' | 'info';
  className?: string;
}

const CalloutBox = ({
  icon,
  title,
  description,
  variant = 'default',
  className = '',
}: CalloutBoxProps) => {
  // Different styling based on variants
  const variantStyles = {
    default: 'bg-white border border-gray-100',
    highlight: 'bg-gray-50 border border-gray-200',
    info: 'bg-blue-50 border border-blue-100',
  };

  return (
    <motion.div 
      className={`${variantStyles[variant]} rounded-xl p-6 ${className}`}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        transition: { duration: 0.3 }
      }}
    >
      <div className="flex items-center space-x-4">
        {icon ? (
          <div className="flex-shrink-0">{icon}</div>
        ) : (
          <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-gray-500 text-xl">+</span>
          </div>
        )}
        <div>
          <h5 className="font-playfair font-semibold text-lg text-gray-900 tracking-tight">{title}</h5>
          <p className="font-sans text-base text-gray-600 mt-2 leading-relaxed tracking-wide">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CalloutBox;