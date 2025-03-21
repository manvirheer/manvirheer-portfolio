// app/components/layout/Header.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/app/context/theme-context';
import { motion, useAnimation } from 'framer-motion';
import { TIMING } from '@/app/config/motion';
import Navigation from './navigation';
import { fonts } from '@/app/config/fonts';
import { headerLetterVariants } from '@/app/config/motion';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [platform, setPlatform] = useState('');
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  // Default fontSize now just a state variable that will be dynamically updated
  const [fontSize, setFontSize] = useState('160px');
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

    // Improved font size calculation based on viewport width
    const updateFontSize = () => {
      const width = window.innerWidth;
      
      // More granular breakpoints for smoother scaling
      if (width >= 1440) {
        setFontSize('210px'); // Largest size for wide screens
      } else if (width >= 1280) {
        setFontSize('180px'); // Slightly smaller for standard desktop
      } else if (width >= 1024) {
        setFontSize('160px'); // Medium large for smaller desktops
      } else if (width >= 768) {
        setFontSize('140px');  // Medium size for tablets
      } else if (width >= 640) {
        setFontSize('110px');  // Medium-small for large phones
      } else if (width >= 480) {
        setFontSize('60px');  // Small for medium phones
      } else {
        setFontSize('40px');  // Extra small for small phones
      }
    };

    // Initialize
    updateFontSize();
    updateDimensions();
    setPlatform(detectPlatform());

    // Add event listeners
    window.addEventListener('resize', updateDimensions);
    window.addEventListener('resize', updateFontSize);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('resize', updateFontSize);
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
    <header className={`w-full py-2 px-4  ${fonts.host.variable}`}>
      {/* Main content container */}
      <div className="w-full">
        {/* Text with Framer Motion animations */}
        <div
          className="text-container w-full"
          style={{
            cursor: 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="5" fill="black"/></svg>\') 10 10, auto',
          }}
          onMouseEnter={handleLogoHover}
          onMouseLeave={handleLogoLeave}
        >
          <div className="w-full">
            <div className="grid grid-cols-12">
              <div className="col-span-6 md:col-span-6">
                <div className="flex justify-start">
                  {/* MANVIR text with individual letter animations */}
                  <div style={{ 
                    display: 'flex', 
                    fontFamily: 'var(--font-host)',
                    fontWeight: 900,
                    fontSize: fontSize, // Now using the dynamic fontSize state
                    letterSpacing: '-.005em',
                    lineHeight: '0.9',
                    color: 'currentColor'
                  }}>
                    {/* M - Always visible */}
                    <motion.span
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      style={{ display: 'inline-block' }}
                    >
                      M
                    </motion.span>
                    
                    {/* A - Animated */}
                    <motion.span
                      variants={headerLetterVariants}
                      animate={letterControls}
                      custom={1}
                      style={{ display: 'inline-block' }}
                    >
                      A
                    </motion.span>
                    
                    {/* N - Animated */}
                    <motion.span
                      variants={headerLetterVariants}
                      animate={letterControls}
                      custom={2}
                      style={{ display: 'inline-block' }}
                    >
                      N
                    </motion.span>
                    
                    {/* V - Animated */}
                    <motion.span
                      variants={headerLetterVariants}
                      animate={letterControls}
                      custom={3}
                      style={{ display: 'inline-block' }}
                    >
                      V
                    </motion.span>
                    
                    {/* I - Animated */}
                    <motion.span
                      variants={headerLetterVariants}
                      animate={letterControls}
                      custom={4}
                      style={{ display: 'inline-block' }}
                    >
                      I
                    </motion.span>
                    
                    {/* R - Animated */}
                    <motion.span
                      variants={headerLetterVariants}
                      animate={letterControls}
                      custom={5}
                      style={{ display: 'inline-block' }}
                    >
                      R
                    </motion.span>
                  </div>
                </div>
              </div>
              
              <div className="col-span-6 md:col-span-6">
                <div className="flex justify-start md:justify-start">
                  {/* HEER text with individual letter animations */}
                  <div style={{ 
                    display: 'flex', 
                    fontFamily: 'var(--font-host)',
                    fontWeight: 900,
                    fontSize: fontSize, // Now using the dynamic fontSize state
                    letterSpacing: '-0.03em',
                    lineHeight: '0.9',
                    color: 'currentColor'
                  }}>
                    {/* H - Always visible */}
                    <motion.span
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      style={{ display: 'inline-block' }}
                    >
                      H
                    </motion.span>
                    
                    {/* E - Animated (first E) */}
                    <motion.span
                      variants={headerLetterVariants}
                      animate={letterControls}
                      custom={7}
                      style={{ display: 'inline-block' }}
                    >
                      E
                    </motion.span>
                    
                    {/* E - Animated (second E) */}
                    <motion.span
                      variants={headerLetterVariants}
                      animate={letterControls}
                      custom={8}
                      style={{ display: 'inline-block' }}
                    >
                      E
                    </motion.span>
                    
                    {/* R - Animated */}
                    <motion.span
                      variants={headerLetterVariants}
                      animate={letterControls}
                      custom={9}
                      style={{ display: 'inline-block' }}
                    >
                      R
                    </motion.span>
                  </div>
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