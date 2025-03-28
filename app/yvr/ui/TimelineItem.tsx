// app/yvr/ui/TimelineItem.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface TimelineTask {
  label: string;
}

interface TimelineItemProps {
  number: number;
  title: string;
  duration: string;
  tasks: TimelineTask[];
  active?: boolean;
  isLast?: boolean;
  className?: string;
}

const TimelineItem = ({
  number,
  title,
  duration,
  tasks,
  active = false,
  isLast = false,
  className = '',
}: TimelineItemProps) => {
  return (
    <motion.div 
      className={`relative pl-12 ${!isLast ? 'before:content-[\'\'] before:absolute before:left-[18px] before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-200' : ''} ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        transition: { 
          duration: 0.5, 
          delay: number * 0.1,
          ease: [0.33, 1, 0.68, 1]
        }
      }}
    >
      <div 
        className={`absolute left-0 top-1 h-9 w-9 rounded-full flex items-center justify-center border-2 ${
          active 
            ? 'bg-blue-900 border-blue-900 text-white' 
            : 'bg-white border-gray-200 text-gray-500'
        }`}
      >
        <span className="font-sans text-sm font-medium">{number}</span>
      </div>
      <div>
        <h4 className="font-playfair font-semibold text-xl text-gray-900 tracking-tight">{title}</h4>
        <p className="font-sans text-base text-blue-700 font-medium mt-1 mb-4 tracking-wide">{duration}</p>
        <motion.div 
          className="bg-white rounded-lg border border-gray-100 shadow-sm p-5 text-base"
          whileHover={{ 
            y: -3,
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            transition: { duration: 0.2 }
          }}
        >
          <ul className="space-y-3">
            {tasks.map((task, index) => (
              <li key={index} className="flex items-center">
                <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                <span className="font-sans text-gray-700 tracking-wide leading-relaxed">{task.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;