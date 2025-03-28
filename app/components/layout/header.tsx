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
  const letterControls = useAnimation();
  const logoTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const initialLoadDone = useRef(false);

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
      }
    };
  }, []); // Run only once on mount

  // Handle hover state changes
  useEffect(() => {
    // Don't react to hover state changes until after initial load is done
    if (!initialLoadDone.current) return;
    
    if (isLogoHovered) {
      letterControls.start('hover');
      
      // Clear any existing timeout
      if (logoTimeoutRef.current) {
        clearTimeout(logoTimeoutRef.current);
        logoTimeoutRef.current = null;
      }
    } else {
      // When no longer hovering, hide the letters again
      letterControls.start('hidden');
    }
  }, [isLogoHovered, letterControls]);

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

  // Create letter components to avoid repetition
  const Letter = ({ 
    letter, 
    animate = true, 
    customDelay = 0 
  }: { 
    letter: string; 
    animate?: boolean; 
    customDelay?: number;
  }) => {
    return animate ? (
      <motion.span
        variants={headerLetterVariants}
        animate={letterControls}
        custom={customDelay}
        style={{ display: 'inline-block' }}
      >
        {letter}
      </motion.span>
    ) : (
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        style={{ display: 'inline-block' }}
      >
        {letter}
      </motion.span>
    );
  };

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
                    <Letter letter="M" animate={false} />
                    <Letter letter="A" customDelay={1} />
                    <Letter letter="N" customDelay={2} />
                    <Letter letter="V" customDelay={3} />
                    <Letter letter="I" customDelay={4} />
                    <Letter letter="R" customDelay={5} />
                  </div>
                </div>
              </div>
              
              {/* HEER */}
              <div className="col-span-6 md:col-span-6">
                <div className="flex justify-start md:justify-start">
                  <div style={logoTextStyle}>
                    <Letter letter="H" animate={false} />
                    <Letter letter="E" customDelay={7} />
                    <Letter letter="E" customDelay={8} />
                    <Letter letter="R" customDelay={9} />
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