// app/yvr/ui/IconBox.tsx
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface IconBoxProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: 'default' | 'feature' | 'stat';
  className?: string;
  children?: React.ReactNode;
}

const IconBox = ({
  icon,
  title,
  description,
  variant = 'default',
  className = '',
  children,
}: IconBoxProps) => {
  // Different styling based on variants
  const variantStyles = {
    default: 'p-6 bg-white rounded-xl border border-gray-100 shadow-sm',
    feature: 'p-6 md:p-8 bg-gray-50 rounded-xl border border-gray-100 shadow-sm',
    stat: 'p-5 bg-white rounded-lg border border-gray-100 shadow-sm',
  };

  return (
    <motion.div 
    className={`${variantStyles[variant]} ${className} overflow-hidden`}
    whileHover={{ 
      y: -5,
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      transition: { duration: 0.3 }
    }}
  >
    <div className="flex items-start space-x-5">
      <div className="flex-shrink-0 h-12 w-12 bg-gray-50 rounded-xl flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1 overflow-hidden">
        <h4 className="font-playfair font-semibold text-xl text-gray-900 tracking-tight break-words">{title}</h4>
        <p className="font-sans text-base text-gray-600 mt-2 leading-relaxed tracking-wide break-words">{description}</p>
        {children && (
          <div className="mt-4">
            {children}
          </div>
        )}
      </div>
    </div>
  </motion.div>
  );
};

export default IconBox;