// app/yvr/ui/StatCard.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
  icon?: React.ReactNode;
  className?: string;
}

const StatCard = ({
  label,
  value,
  prefix = '',
  suffix = '',
  icon,
  className = '',
}: StatCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        transition: { duration: 0.3 }
      }}
      className={`bg-white p-3 sm:p-5 rounded-lg border border-gray-100 shadow-sm overflow-hidden ${className}`}
    >
      <div className="flex items-center mb-2 sm:mb-3">
        {icon && <div className="mr-2 sm:mr-3 bg-blue-50 p-1 sm:p-2 rounded-lg">{icon}</div>}
        <div className="text-sm sm:text-base font-sans text-gray-600 tracking-wide truncate">{label}</div>
      </div>
      <div className="flex items-end">
        {prefix && <span className="text-sm sm:text-base font-sans mr-1 text-gray-700">{prefix}</span>}
        <div className="text-2xl sm:text-3xl font-playfair font-bold text-gray-900 tracking-tight">{value}</div>
        {suffix && <span className="text-sm sm:text-base font-sans ml-1 text-gray-700 mb-1">{suffix}</span>}
      </div>
    </motion.div>
  );
};

export default StatCard;