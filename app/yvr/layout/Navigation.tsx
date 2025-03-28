// app/yvr/layout/Navigation.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: { id: string; label: string }[];
}

const Navigation = ({ activeTab, setActiveTab, tabs }: NavigationProps) => {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-10 py-4 md:py-5 shadow-sm">
      <div className="container mx-auto px-4 md:px-10">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center md:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-medium text-base transition-colors duration-300 relative whitespace-nowrap tracking-wide ${activeTab === tab.id
                  ? 'text-blue-900 font-semibold'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
              aria-current={activeTab === tab.id ? 'page' : undefined}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabDesktop"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="grid grid-cols-3 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-2 py-2 font-medium text-xs sm:text-sm transition-colors duration-300 relative text-center rounded-md ${activeTab === tab.id
                    ? 'text-white bg-blue-900'
                    : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
                  }`}
                aria-current={activeTab === tab.id ? 'page' : undefined}
              >
                <span className="truncate block">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;