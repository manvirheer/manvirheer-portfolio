// app/components/layout/main/header.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/app/context/theme-context';
import { motion } from 'framer-motion';
import { TIMING } from '@/app/config/motion';
import Navigation from './navigation';
import { fonts } from '@/app/config/fonts';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [platform, setPlatform] = useState('');
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [initialAnimationComplete, setInitialAnimationComplete] = useState(false);
  const initialTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Get window dimensions and platform on client side
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    const detectPlatform = () => {
      const userAgent = window.navigator.userAgent;
      if (userAgent.indexOf('Win') !== -1) return 'Windows';
      if (userAgent.indexOf('Mac') !== -1) return 'macOS';
      if (userAgent.indexOf('Linux') !== -1) return 'Linux';
      if (userAgent.indexOf('Android') !== -1) return 'Android';
      if (userAgent.indexOf('iPhone') !== -1 || userAgent.indexOf('iPad') !== -1) return 'iOS';
      return 'Unknown';
    };

    // Initialize
    updateDimensions();
    setPlatform(detectPlatform());

    // Add event listener
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Initial animation sequence
  useEffect(() => {
    // Set timeout to trigger initial animation
    initialTimeoutRef.current = setTimeout(() => {
      setInitialAnimationComplete(true);
    }, TIMING.LETTERS_HIDE_DELAY);

    return () => {
      if (initialTimeoutRef.current) {
        clearTimeout(initialTimeoutRef.current);
      }
    };
  }, []);

  // Toggle dark mode
  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Text style for consistent rendering
  const logoTextStyle = {
    display: 'flex', 
    fontFamily: 'var(--font-host)',
    fontWeight: 900,
    fontSize: 'clamp(40px, 12.20vw, 170px)',
    letterSpacing: '-0.03em',
    lineHeight: '0.9',
    color: 'currentColor'
  };

  // Container variants - we'll use this to stagger the children
  const containerVariants = {
    hidden: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: 1, // Same direction as appearing (left to right)
      }
    },
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0, // No delay needed
      }
    }
  };

  // Child variants for individual letters
  const letterVariants = {
    hidden: {
      opacity: 0,
      x: -10,
      transition: {
        duration: 0.3,
        ease: [0.34, 1.56, 0.64, 1]
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 1, 0.5, 1]
      }
    }
  };

  // Determine whether to show letters based on hover and initial animation state
  const manvirVariantState = (isLogoHovered || !initialAnimationComplete) ? "visible" : "hidden";
  const heerVariantState = (isLogoHovered || !initialAnimationComplete) ? "visible" : "hidden";

  return (
    <header className={`w-full py-2 px-2 ${fonts.host.variable}`}>
      <div className="w-full">
        {/* Logo container */}
        <div
          className="text-container w-full"
          style={{
            cursor: 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="5" fill="black"/></svg>\') 10 10, auto',
          }}
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
        >
          <div className="w-full">
            <div className="grid grid-cols-12">
              {/* MANVIR */}
              <div className="col-span-6 md:col-span-6">
                <div className="flex justify-start">
                  <div style={logoTextStyle}>
                    <motion.span
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      style={{ display: 'inline-block' }}
                    >
                      M
                    </motion.span>
                    <motion.div
                      variants={containerVariants}
                      initial="visible"
                      animate={manvirVariantState}
                      style={{ display: 'flex' }}
                    >
                      <motion.span variants={letterVariants} style={{ display: 'inline-block' }}>A</motion.span>
                      <motion.span variants={letterVariants} style={{ display: 'inline-block' }}>N</motion.span>
                      <motion.span variants={letterVariants} style={{ display: 'inline-block' }}>V</motion.span>
                      <motion.span variants={letterVariants} style={{ display: 'inline-block' }}>I</motion.span>
                      <motion.span variants={letterVariants} style={{ display: 'inline-block' }}>R</motion.span>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* HEER */}
              <div className="col-span-6 md:col-span-6">
                <div className="flex justify-start md:justify-start">
                  <div style={logoTextStyle}>
                    <motion.span
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      style={{ display: 'inline-block' }}
                    >
                      H
                    </motion.span>
                    <motion.div
                      variants={containerVariants}
                      initial="visible"
                      animate={heerVariantState}
                      style={{ display: 'flex' }}
                    >
                      <motion.span variants={letterVariants} style={{ display: 'inline-block' }}>E</motion.span>
                      <motion.span variants={letterVariants} style={{ display: 'inline-block' }}>E</motion.span>
                      <motion.span variants={letterVariants} style={{ display: 'inline-block' }}>R</motion.span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <Navigation
          dimensions={dimensions}
          platform={platform}
          theme={theme}
          onThemeToggle={handleThemeToggle}
        />
      </div>
    </header>
  );
};

export default Header;