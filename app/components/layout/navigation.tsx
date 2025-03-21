'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { linkHover, buttonHover, buttonTap } from '@/app/config/motion';

interface NavigationProps {
  dimensions: { width: number; height: number };
  platform: string;
  theme: string;
  onThemeToggle: () => void;
}

const Navigation = ({ dimensions, platform, theme, onThemeToggle }: NavigationProps) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <div className="border-t border-page-border py-2">
      {/* Mobile menu button - only visible on small screens */}
      <div className="md:hidden flex justify-end mb-2">
        <button 
          onClick={toggleMobileMenu}
          className="p-1 rounded border border-page-border"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      
      {/* Main navigation - hidden on small screens when menu is closed */}
      <div className={`grid grid-cols-12 ${mobileMenuOpen ? 'block' : 'hidden'} md:grid`}>
        {/* Left column - Independent Developer (3 cols) */}
        <div className="col-span-12 md:col-span-3 text-left mb-4 md:mb-0">
          <p>Independent</p>
          <p className="pt-1">Developer</p>
        </div>

        {/* Middle left column - Information links (3 cols) */}
        <div className="col-span-12 md:col-span-3 mb-4 md:mb-0">
          <div>
            <motion.p whileHover={linkHover}>
              <Link
                href="/"
                className={`hover:underline ${pathname === '/' ? 'font-medium' : ''}`}
              >
                Home
              </Link>
            </motion.p>
            <motion.p whileHover={linkHover} className="pt-1">
              <Link
                href="/projects"
                className={`hover:underline ${pathname === '/projects' ? 'font-medium' : ''}`}
              >
                Projects
              </Link>
            </motion.p>
            <motion.p whileHover={linkHover} className="pt-1">
              <Link
                href="/about"
                className={`hover:underline ${pathname === '/about' ? 'font-medium' : ''}`}
              >
                About
              </Link>
            </motion.p>
          </div>
        </div>

        {/* Middle right column - Settings (3 cols) */}
        <div className="col-span-12 md:col-span-3 mb-4 md:mb-0">
          <div className="settings-container">
            <div>
              {/* Dark mode toggle */}
              <div className="flex justify-between items-center pb-1">
                <span className="text-page-text-2">Dark mode</span>
                <motion.span
                  className="indicator cursor-pointer ml-4"
                  onClick={onThemeToggle}
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                >
                  ( {theme === 'dark' ? 'Y' : 'N'} )
                </motion.span>
              </div>
              
              {/* Text mode toggle */}
              <div className="flex justify-between items-center pb-1">
                <span className="text-page-text-2">Text mode</span>
                <motion.span
                  className="indicator cursor-pointer ml-4"
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                >
                  ( N )
                </motion.span>
              </div>
              
              {/* Monochrome toggle */}
              <div className="flex justify-between items-center pb-1">
                <span className="text-page-text-2">Monochrome</span>
                <motion.span
                  className="indicator cursor-pointer ml-4"
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                >
                  ( N )
                </motion.span>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - System information (3 cols) */}
        <div className="col-span-12 md:col-span-3 text-right">
          <p>
            {dimensions.width}x{dimensions.height}<br />
            {platform}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;