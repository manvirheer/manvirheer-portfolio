import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Challenge {
  title: string;
  description: string;
}

interface ChallengeCategoryProps {
  icon: ReactNode;
  title: string;
  description: string;
  challenges: Challenge[];
  className?: string;
}

const ChallengeCategory = ({
  icon,
  title,
  description,
  challenges,
  className = '',
}: ChallengeCategoryProps) => {
  // Animation variants
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] }
    }
  };

  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        transition: { duration: 0.3 }
      }}
      className={`bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8 ${className}`}
    >
      <div className="flex items-start space-x-5">
        <div className="h-14 w-14 bg-gray-50 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h4 className="font-playfair text-xl font-semibold text-gray-900 tracking-tight">{title}</h4>
          <p className="font-sans text-base text-gray-600 mt-2 leading-relaxed tracking-wide">
            {description}
          </p>
        </div>
      </div>
      
      <div className="mt-6 ml-0 md:ml-16">
        <h5 className="font-sans text-base font-medium text-gray-700 mb-4 tracking-wide">Example Challenges:</h5>
        <motion.ul 
          className="space-y-4"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {challenges.map((challenge, index) => (
            <motion.li key={index} className="flex items-start" variants={itemVariants}>
              <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <span className="font-sans text-base font-medium text-gray-800 tracking-wide">{challenge.title}</span>
                <p className="font-sans text-sm text-gray-600 mt-1 tracking-wide">{challenge.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default ChallengeCategory;