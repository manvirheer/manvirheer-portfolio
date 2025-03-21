// app/components/layout/Header.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/app/context/theme-context';
import { motion, useAnimation } from 'framer-motion';
import { header_characters } from '@/app/config/content';
import { headerLetterVariants, TIMING } from '@/app/config/motion';
import Navigation from './navigation';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [platform, setPlatform] = useState('');
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [sWidth, setSWidth] = useState(0.95);
  const letterControls = useAnimation();
  const logoTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const initialLoadDone = useRef(false);

  // Get window dimensions and platform on client side
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setDimensions({
        width,
        height
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

    // Set stroke width based on the width of the screen 
    const updateStrokeWidth = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setSWidth(0.95);
      } else if (width >= 1024) {
        setSWidth(0.85);
      } else if (width >= 768) {
        setSWidth(0.75);
      } else {
        setSWidth(0.55);
      }
    }

    updateStrokeWidth();


    updateDimensions();
    setPlatform(detectPlatform());

    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Animation sequence for logo letters
  useEffect(() => {
    // Immediately show all letters on initial load
    letterControls.start('initial').then(() => {
      initialLoadDone.current = true;
    });

    // After delay, hide all letters except M and H
    logoTimeoutRef.current = setTimeout(() => {
      if (!isLogoHovered) {
        letterControls.start('hidden');
      }
    }, TIMING.LETTERS_HIDE_DELAY);

    return () => {
      if (logoTimeoutRef.current) {
        clearTimeout(logoTimeoutRef.current);
        logoTimeoutRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on mount

  // Handle hover state changes
  useEffect(() => {
    // Don't react to hover state changes until after initial load is done
    if (initialLoadDone.current) {
      if (isLogoHovered) {
        letterControls.start('hover');

        // Clear any existing timeout to prevent hiding during hover
        if (logoTimeoutRef.current) {
          clearTimeout(logoTimeoutRef.current);
          logoTimeoutRef.current = null;
        }
      } else {
        // When no longer hovering, hide the letters again
        letterControls.start('hidden');
      }
    }
  }, [isLogoHovered, letterControls]);

  // Hover effect for logo
  const handleLogoHover = () => {
    setIsLogoHovered(true);
  };

  const handleLogoLeave = () => {
    setIsLogoHovered(false);
  };

  // Toggle dark mode
  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="w-full py-8 px-4 mt-2">
      {/* Main content container */}
      <div className="w-full">
        {/* SVG with Framer Motion animations */}
        <div
          className="svg-container mb-2 w-full"
          style={{
            cursor: 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="5" fill="black"/></svg>\') 10 10, auto',
          }}
          onMouseEnter={handleLogoHover}
          onMouseLeave={handleLogoLeave}
        >
          {/* Simple, static SVG approach using CSS to ensure full visibility */}
          <div className="w-full   pb-2">
            {/* Create a div with 12 cols structure and then inner div with two 6 and 6,       */}
            {/* so that the logo can be centered. */}
            <div className="grid grid-cols-12">
              <div className="col-span-6">
                <div className="">
                  <svg
                    width="100%"
                    viewBox="0 0 1450 225"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="svgGroup" strokeLinecap="round" fillRule="nonzero" fontSize="9pt" stroke="currentColor" strokeWidth={sWidth + "mm"} fill="currentColor" style={{ stroke: 'currentColor', strokeWidth: sWidth + "mm", fill: 'currentColor' }}>

                      {/* M - Always visible */}
                      <motion.path
                        d={header_characters.M}
                        id="0"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        vectorEffect="non-scaling-stroke"
                      />

                      {/* A - Animate */}
                      <motion.path
                        d={header_characters.A}
                        id="1"
                        variants={headerLetterVariants}
                        animate={letterControls}
                        custom={1}
                        vectorEffect="non-scaling-stroke"
                      />

                      {/* N - Animate */}
                      <motion.path
                        d={header_characters.N}
                        id="2"
                        variants={headerLetterVariants}
                        animate={letterControls}
                        custom={2}
                        vectorEffect="non-scaling-stroke"
                      />

                      {/* V - Animate */}
                      <motion.path
                        d={header_characters.V}
                        id="3"
                        variants={headerLetterVariants}
                        animate={letterControls}
                        custom={3}
                        vectorEffect="non-scaling-stroke"
                      />

                      {/* I - Animate */}
                      <motion.path
                        d={header_characters.I}
                        id="4"
                        variants={headerLetterVariants}
                        animate={letterControls}
                        custom={4}
                        vectorEffect="non-scaling-stroke"
                      />

                      {/* R - Animate */}
                      <motion.path
                        d={header_characters.R}
                        id="5"
                        variants={headerLetterVariants}
                        animate={letterControls}
                        custom={5}
                        vectorEffect="non-scaling-stroke"
                      />

                    </g>
                  </svg>
                </div>
              </div>
              <div className="col-span-6">
                <div>
                  <svg
                    width="100%"
                    height="auto"
                    viewBox="0 0 1450 225"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ aspectRatio: 'width / height' }}
                  >
                    <g id="svgGroup" strokeLinecap="round" fillRule="nonzero" fontSize="9pt" stroke="currentColor" strokeWidth={sWidth + "mm"} fill="currentColor" style={{ stroke: 'currentColor', strokeWidth: sWidth + "mm", fill: 'currentColor' }}>

                      {/* H - Always visible */}
                      <motion.path
                        d={header_characters.H}
                        id="1"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        vectorEffect="non-scaling-stroke"
                      />

                      {/* E - Animate (first E) */}
                      <motion.path
                        d={header_characters.E}
                        id="2"
                        variants={headerLetterVariants}
                        animate={letterControls}
                        custom={7}
                        vectorEffect="non-scaling-stroke"
                      />

                      {/* E - Animate (second E) */}
                      <motion.path
                        d={header_characters.E2}
                        id="3"
                        variants={headerLetterVariants}
                        animate={letterControls}
                        custom={8}
                        vectorEffect="non-scaling-stroke"
                      />

                      {/* R - Animate (second R) */}
                      <motion.path
                        d={header_characters.R2}
                        id="4"
                        variants={headerLetterVariants}
                        animate={letterControls}
                        custom={9}
                        vectorEffect="non-scaling-stroke"
                      />

                    </g>
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Use the Navigation component */}
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