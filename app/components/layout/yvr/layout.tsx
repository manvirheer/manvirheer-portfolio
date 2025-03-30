'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface YVRLayoutProps {
  children: React.ReactNode;
}

export default function YVRLayout({ children }: YVRLayoutProps) {
  return (
    <div className="w-full min-h-screen relative">
      <div className="max-w-full relative z-10">
        <Header />
        
        {/* Main content */}
        <main className="w-full">
          {children}
        </main>
        
        <Footer />
      </div>
    </div>
  );
}