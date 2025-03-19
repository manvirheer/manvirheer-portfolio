'use client';
// app/components/layout/Header.tsx
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/app/context/theme-context';

const Header = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [platform, setPlatform] = useState('');
  const [lettersVisible, setLettersVisible] = useState(false);
  
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
    
    updateDimensions();
    setPlatform(detectPlatform());
    
    window.addEventListener('resize', updateDimensions);
    
    // Trigger letters animation after a short delay
    const timer = setTimeout(() => {
      setLettersVisible(true);
    }, 300);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
      clearTimeout(timer);
    };
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="w-full py-8 px-4 mt-2">
      {/* Main content container */}
      <div className="w-full">
        {/* Exact SVG from the provided file - with animations */}
        <div className="svg-container mb-4" style={{ cursor: 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="5" fill="black"/></svg>\') 10 10, auto' }}>
          <svg width="100%" height="auto" viewBox="0 0 1324.4 140.001" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMid">
            <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="currentColor" strokeWidth="2.7mm" fill="currentColor" style={{ stroke: 'currentColor', strokeWidth: '2.7mm', fill: 'currentColor' }}>
              {/* M - Always visible */}
              <path d="M 10.4 140.001 L 0 140.001 L 0 0.001 L 9.6 0.001 L 65.8 90.001 L 61.8 89.801 L 118 0.001 L 127.2 0.001 L 127.2 140.001 L 116.6 140.001 L 116.6 49.601 Q 116.6 38.401 117 28.701 Q 117.4 19.001 118.4 9.601 L 121.4 13.001 L 66.8 99.401 L 60.2 99.401 L 6.6 14.201 L 8.6 9.601 Q 9.8 18.601 10.1 28.101 Q 10.4 37.601 10.4 49.201 L 10.4 140.001 Z" id="0"/>
              {/* A - Animate in */}
              <path className={`animate-letter ${lettersVisible ? 'visible' : 'hidden'}`} style={{ animationDelay: '0.1s', opacity: lettersVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }} d="M 164 140.001 L 152.8 140.001 L 206.6 0.001 L 218.8 0.001 L 272.6 140.001 L 261 140.001 L 224.8 45.001 A 21.749 21.749 0 0 1 224.494 44.24 Q 224.018 42.997 223.219 40.645 A 293.041 293.041 0 0 1 222.7 39.101 A 242.803 242.803 0 0 0 221.477 35.529 Q 220.926 33.959 220.307 32.252 A 422.402 422.402 0 0 0 219 28.701 L 214.6 16.901 Q 213.088 12.845 211.859 9.592 A 1088.563 1088.563 0 0 0 210.8 6.801 L 213.8 7.001 A 364.87 364.87 0 0 1 213.156 8.914 Q 212.125 11.951 210.7 16.001 A 478.404 478.404 0 0 1 207.681 24.326 A 539.157 539.157 0 0 1 206.6 27.201 Q 204.4 33.001 202.6 37.901 Q 201.222 41.653 200.313 44.056 A 262.699 262.699 0 0 1 199.8 45.401 L 164 140.001 Z M 251 98.001 L 174.2 98.001 L 178 87.601 L 246.6 87.601 L 251 98.001 Z" id="1"/>
              {/* N - Animate in */}
              <path className={`animate-letter ${lettersVisible ? 'visible' : 'hidden'}`} style={{ animationDelay: '0.2s', opacity: lettersVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }} d="M 308.6 140.001 L 298.2 140.001 L 298.2 0.001 L 307.8 0.001 L 399.2 127.001 L 397.6 127.801 Q 397 122.801 396.6 116.401 A 194.489 194.489 0 0 1 396.419 112.989 Q 396.191 107.912 396.111 101.169 A 559.342 559.342 0 0 1 396.1 100.201 Q 396.005 90.889 396 77.063 A 4271.957 4271.957 0 0 1 396 75.601 L 396 0.001 L 406.4 0.001 L 406.4 140.001 L 396.8 140.001 L 304.2 12.201 L 307 11.201 Q 307.6 18.201 307.8 24.901 Q 308 31.601 308.3 37.601 A 243.439 243.439 0 0 1 308.558 44.828 A 201.534 201.534 0 0 1 308.6 48.901 L 308.6 58.601 L 308.6 140.001 Z" id="2"/>
              {/* V - Animate in */}
              <path className={`animate-letter ${lettersVisible ? 'visible' : 'hidden'}`} style={{ animationDelay: '0.3s', opacity: lettersVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }} d="M 497.2 140.001 L 486.2 140.001 L 431.8 0.001 L 443.8 0.001 L 486.4 110.801 A 190.02 190.02 0 0 1 487.79 114.375 Q 488.516 116.301 489.1 118.001 Q 490.2 121.201 491.2 123.801 A 204.204 204.204 0 0 1 492.018 125.961 Q 492.384 126.947 492.697 127.827 A 112.847 112.847 0 0 1 492.9 128.401 A 51.101 51.101 0 0 1 493.455 130.074 Q 493.775 131.101 494 132.001 L 490.6 132.001 Q 491.17 130.101 492.101 127.297 A 308.814 308.814 0 0 1 492.2 127.001 A 152.94 152.94 0 0 1 493.02 124.61 Q 493.391 123.556 493.811 122.403 A 275.225 275.225 0 0 1 494.7 120.001 A 618.584 618.584 0 0 0 496.249 115.821 Q 497.086 113.54 498 111.001 L 539.6 0.001 L 552 0.001 L 497.2 140.001 Z" id="3"/>
              {/* I - Animate in */}
              <path className={`animate-letter ${lettersVisible ? 'visible' : 'hidden'}`} style={{ animationDelay: '0.4s', opacity: lettersVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }} d="M 628.4 140.001 L 568 140.001 L 568 130.201 L 592.8 130.201 L 592.8 9.801 L 568 9.801 L 568 0.001 L 628.4 0.001 L 628.4 9.801 L 603.4 9.801 L 603.4 130.201 L 628.4 130.201 L 628.4 140.001 Z" id="4"/>
              {/* R - Animate in */}
              <path className={`animate-letter ${lettersVisible ? 'visible' : 'hidden'}`} style={{ animationDelay: '0.5s', opacity: lettersVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }} d="M 671.4 140.001 L 661 140.001 L 661 0.001 L 714.4 0.001 Q 726 0.001 734.9 5.201 Q 743.8 10.401 748.9 19.601 A 40.574 40.574 0 0 1 753.597 34.272 A 51.426 51.426 0 0 1 754 40.801 A 50.216 50.216 0 0 1 752.202 54.442 A 43.617 43.617 0 0 1 748.9 62.801 Q 743.8 72.601 734.9 78.201 A 36.586 36.586 0 0 1 718.308 83.636 A 45.369 45.369 0 0 1 714.4 83.801 L 671.4 83.801 L 671.4 140.001 Z M 671.4 10.201 L 671.4 73.601 L 716 73.601 A 27.004 27.004 0 0 0 723.898 72.484 A 23.056 23.056 0 0 0 730.3 69.401 A 26.716 26.716 0 0 0 738.307 60.612 A 33.194 33.194 0 0 0 739.8 57.701 A 37.781 37.781 0 0 0 742.78 47.091 A 48.538 48.538 0 0 0 743.2 40.601 Q 743.2 31.601 739.5 24.701 Q 735.8 17.801 729.2 14.001 A 28.273 28.273 0 0 0 719.085 10.572 A 36.47 36.47 0 0 0 713.8 10.201 L 671.4 10.201 Z M 759 140.001 L 746.4 140.001 L 711 79.201 L 722 76.401 L 759 140.001 Z" id="5"/>
              {/* H - Always visible */}
              <path d="M 855.2 140.001 L 844.8 140.001 L 844.8 0.001 L 855.2 0.001 L 855.2 140.001 Z M 950.8 140.001 L 940.4 140.001 L 940.4 0.001 L 950.8 0.001 L 950.8 140.001 Z M 945.2 75.401 L 849.6 75.401 L 849.6 65.001 L 945.2 65.001 L 945.2 75.401 Z" id="7"/>
              {/* E - Animate in */}
              <path className={`animate-letter ${lettersVisible ? 'visible' : 'hidden'}`} style={{ animationDelay: '0.7s', opacity: lettersVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }} d="M 1074 140.001 L 993.2 140.001 L 993.2 0.001 L 1075 0.001 L 1075 10.201 L 1003.6 10.201 L 1003.6 129.801 L 1074 129.801 L 1074 140.001 Z M 1063.6 72.801 L 998.4 72.801 L 998.4 62.601 L 1063.6 62.601 L 1063.6 72.801 Z" id="8"/>
              {/* E - Animate in */}
              <path className={`animate-letter ${lettersVisible ? 'visible' : 'hidden'}`} style={{ animationDelay: '0.8s', opacity: lettersVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }} d="M 1190.6 140.001 L 1109.8 140.001 L 1109.8 0.001 L 1191.6 0.001 L 1191.6 10.201 L 1120.2 10.201 L 1120.2 129.801 L 1190.6 129.801 L 1190.6 140.001 Z M 1180.2 72.801 L 1115 72.801 L 1115 62.601 L 1180.2 62.601 L 1180.2 72.801 Z" id="9"/>
              {/* R - Animate in */}
              <path className={`animate-letter ${lettersVisible ? 'visible' : 'hidden'}`} style={{ animationDelay: '0.9s', opacity: lettersVisible ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }} d="M 1236.8 140.001 L 1226.4 140.001 L 1226.4 0.001 L 1279.8 0.001 Q 1291.4 0.001 1300.3 5.201 Q 1309.2 10.401 1314.3 19.601 A 40.574 40.574 0 0 1 1318.997 34.272 A 51.426 51.426 0 0 1 1319.4 40.801 A 50.216 50.216 0 0 1 1317.602 54.442 A 43.617 43.617 0 0 1 1314.3 62.801 Q 1309.2 72.601 1300.3 78.201 A 36.586 36.586 0 0 1 1283.708 83.636 A 45.369 45.369 0 0 1 1279.8 83.801 L 1236.8 83.801 L 1236.8 140.001 Z M 1236.8 10.201 L 1236.8 73.601 L 1281.4 73.601 A 27.004 27.004 0 0 0 1289.298 72.484 A 23.056 23.056 0 0 0 1295.7 69.401 A 26.716 26.716 0 0 0 1303.707 60.612 A 33.194 33.194 0 0 0 1305.2 57.701 A 37.781 37.781 0 0 0 1308.18 47.091 A 48.538 48.538 0 0 0 1308.6 40.601 Q 1308.6 31.601 1304.9 24.701 Q 1301.2 17.801 1294.6 14.001 A 28.273 28.273 0 0 0 1284.485 10.572 A 36.47 36.47 0 0 0 1279.2 10.201 L 1236.8 10.201 Z M 1324.4 140.001 L 1311.8 140.001 L 1276.4 79.201 L 1287.4 76.401 L 1324.4 140.001 Z" id="10"/>
            </g>
          </svg>
        </div>
        
        {/* Bottom information section with border */}
        <div className="border-t border-page-border mt-2 pt-2">
          <div className="flex">
            {/* Left column */}
            <div className="w-1/4">
              <p>Independent<br />Developer</p>
            </div>
            
            {/* Middle left column */}
            <div className="w-1/4">
              <p>Information</p>
              <p>
                <Link 
                  href="/projects" 
                  className={`hover:underline ${pathname === '/projects' ? 'font-medium' : ''}`}
                >
                  Projects
                </Link>
              </p>
            </div>
            
            {/* Middle right column - Functional dark mode toggle */}
            <div className="w-1/4">
              <div className="site-config">
                {/* Dark mode toggle - functional */}
                <div className="flex justify-between">
                  <span>Dark mode</span>
                  <span 
                    className="indicator cursor-pointer hover:opacity-70"
                    onClick={toggleDarkMode}
                  >
                    ( {theme === 'dark' ? 'Y' : 'N'} )
                  </span>
                </div>
                {/* Text mode toggle - commented out */}
                {/*
                <div className="flex justify-between">
                  <span>Text mode</span>
                  <span className="indicator">( N )</span>
                </div>
                */}
                {/* Monochrome toggle - commented out */}
                {/*
                <div className="flex justify-between">
                  <span>Monochrome</span>
                  <span className="indicator">( {theme === 'mono' ? 'Y' : 'N'} )</span>
                </div>
                */}
              </div>
            </div>
            
            {/* Right column */}
            <div className="w-1/4">
              <div className="text-right">
                <p>
                  {dimensions.width}x{dimensions.height}<br />
                  {platform}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;