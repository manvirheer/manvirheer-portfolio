"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../layout/Navigation';
import Overview from './Overview';
import Challenges from './Challenges';
import Benefits from './Benefits';
import Implementation from './Implementation';
import Demo from './Demo';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

// Define animation variants for tab content
const tabContentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1]
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { 
      duration: 0.3,
      ease: [0.33, 1, 0.68, 1]
    }
  }
};

const YVRExplorerProposal = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'challenges', label: 'Challenges' },
    { id: 'implementation', label: 'Implementation' },
    { id: 'demo', label: 'Demo' }
  ];
  
  const handleNavigateToTab = (tabId: string) => {
    setActiveTab(tabId);
  };
  
  return (
    <div className="w-full min-h-screen relative">
      <div className="max-w-full relative z-10">
        <Header/>
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
        
        <main className="mx-auto px-2 md:px-4 lg:px-16 xl:px-24 py-10 md:py-12">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={tabContentVariants}
                className="max-w-7xl mx-auto"
              >
                <Overview onNavigateToTab={handleNavigateToTab} />
              </motion.div>
            )}
            
            {activeTab === 'challenges' && (
              <motion.div
                key="challenges"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={tabContentVariants}
                className="max-w-7xl mx-auto"
              >
                <Challenges />
              </motion.div>
            )}
            
            {activeTab === 'benefits' && (
              <motion.div
                key="benefits"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={tabContentVariants}
                className="max-w-7xl mx-auto"
              >
                <Benefits />
              </motion.div>
            )}
            
            {activeTab === 'implementation' && (
              <motion.div
                key="implementation"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={tabContentVariants}
                className="max-w-7xl mx-auto"
              >
                <Implementation />
              </motion.div>
            )}
            
            {activeTab === 'demo' && (
              <motion.div
                key="demo"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={tabContentVariants}
                className="max-w-7xl mx-auto"
              >
                <Demo />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default YVRExplorerProposal;