// app/components/yvr/layout/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-roboto text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Vancouver International Airport
          </div>
          <div className="flex space-x-6">
            <span className="font-roboto text-sm text-gray-500">Strategic Gamification Initiative</span>
            <span className="font-roboto text-sm text-gray-500">Portfolio Project</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;