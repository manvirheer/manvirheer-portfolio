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

interface ToggleOptionProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Navigation = ({ dimensions, platform, theme, onThemeToggle }: NavigationProps) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [textMode, setTextMode] = useState(false);
  const [monochrome, setMonochrome] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Reusable toggle option component
  const ToggleOption = ({ label, isActive, onClick }: ToggleOptionProps) => (
    <div className="flex justify-between items-center pb-1">
      <span className="text-page-text-2">{label}</span>
      <motion.span
        className="indicator cursor-pointer ml-4"
        onClick={onClick}
        // @ts-ignore - Framer Motion hover animations work correctly
        whileHover={buttonHover}
        // @ts-ignore - Framer Motion tap animations work correctly
        whileTap={buttonTap}
      >
        ( {isActive ? 'Y' : 'N'} )
      </motion.span>
    </div>
  );

  // Reusable navigation link component
  const NavLink = ({ href, label }: { href: string; label: string }) => (
    // @ts-ignore - Framer Motion hover animations work correctly
    <motion.p whileHover={linkHover} className={href !== '/' ? 'pt-1' : ''}>
      <Link
        href={href}
        className={`hover:underline ${pathname === href ? 'font-medium' : ''}`}
      >
        {label}
      </Link>
    </motion.p>
  );
  
  return (
    <div className="border-t border-page-border py-2 border-gray-200">
      {/* Mobile menu button - only visible on small screens */}
      <div className="md:hidden flex justify-end mb-2">
        <button 
          onClick={toggleMobileMenu}
          className="p-1 rounded border border-page-border transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Toggle menu"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path 
              d="M3 12H21M3 6H21M3 18H21" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      
      {/* Main navigation - responsive display */}
      <div 
        className={`grid grid-cols-12 gap-y-6 ${mobileMenuOpen ? 'block' : 'hidden'} md:grid`}
      >
        {/* Left column - Independent Developer */}
        <div className="col-span-12 md:col-span-3 text-left md:mb-0">
          <p>Independent</p>
          <p className="pt-1">Developer</p>
        </div>

        {/* Middle left column - Navigation links */}
        <div className="col-span-12 md:col-span-3 mb-4 md:mb-0">
          <div>
            <NavLink href="/" label="Home" />
            <NavLink href="/yvr" label="YVR Explorer" />
            {/* <NavLink href="/about" label="About" /> */}
          </div>
        </div>

        {/* Middle right column - Settings */}
        <div className="col-span-12 md:col-span-3 mb-4 md:mb-0">
          <div className="settings-container">
            <div>
              <ToggleOption 
                label="Dark mode" 
                isActive={theme === 'dark'} 
                onClick={onThemeToggle} 
              />
              <ToggleOption 
                label="Text mode" 
                isActive={textMode} 
                onClick={() => setTextMode(!textMode)} 
              />
              <ToggleOption 
                label="Monochrome" 
                isActive={monochrome} 
                onClick={() => setMonochrome(!monochrome)} 
              />
            </div>
          </div>
        </div>

        {/* Right column - System information */}
        <div className="col-span-12 md:col-span-3 text-right">
          <p className="font-mono text-sm">
            {dimensions.width}×{dimensions.height}<br />
            {platform}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;