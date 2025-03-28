// app/yvr/layout/Header.tsx
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1]  // easingOut equivalent
      }
    }
  };

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-white border-b border-gray-100 py-6 md:py-10 shadow-sm"
    >
      <div className="container mx-auto px-4 md:px-10">
        {/* Desktop header */}
        <div className="hidden md:flex md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <Image src="/yvr/yvr-logo.png" alt="YVR Logo" width={80} height={80} className="object-contain" />
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-blue-50 rounded-full text-sm font-medium text-blue-800 mb-2">
                Strategic Proposal
              </div>
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">
                YVR Explorer Challenge
              </h1>
              <p className="font-sans text-sm md:text-base text-gray-600 mt-2 tracking-wide">
                Transforming Passenger Experience Through Gamification
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
              <p className="font-sans text-base text-gray-700 font-medium">
                Vancouver International Airport
              </p>
            </div>
            <div className="mt-2 text-right">
              <p className="font-sans text-sm text-gray-600">
                Presented by <Link href="https://www.linkedin.com/in/manvirheer/" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-900 hover:underline">Manvir Heer</Link>
              </p>
              <p className="font-sans text-xs text-gray-500">
                Simon Fraser University
              </p>
            </div>
          </div>
        </div>
        
        {/* Mobile header - simplified and optimized for space */}
        <div className="flex md:hidden justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image src="/yvr/yvr-logo.png" alt="YVR Logo" width={50} height={50} className="object-contain" />
            </div>
            <div>
              <div className="inline-block px-2 py-0.5 bg-blue-50 rounded-full text-xs font-medium text-blue-800 mb-1">
                Proposal
              </div>
              <h1 className="font-playfair text-xl font-bold text-gray-900 tracking-wide">
                YVR Explorer Challenge
              </h1>
            </div>
          </div>
          <Link 
            href="https://www.linkedin.com/in/manvirheer/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-right"
          >
            <p className="font-sans text-sm font-medium text-blue-900">Manvir Heer</p>
            <p className="font-sans text-xs text-gray-500">SFU</p>
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;