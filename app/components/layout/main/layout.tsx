'use client';

import React from 'react';
import Header from './header';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="antialiased w-full min-h-screen flex flex-col px-4 overflow-x-hidden">
      {/* Main header - will align with grid lines */}
      <div className="w-full">
          <Header />
      </div>
      
      {/* Main content */}
      <main className="flex-1 flex flex-col w-full">
        <div className="w-full">
          {children}
        </div>
      </main>
      
      {/* Footer - will align with grid lines */}
      <footer className="border-t border-page-border border-gray-400 py-6">
        <div className="w-full text-sm text-center">
          <p>© {new Date().getFullYear()} Manvir Heer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}