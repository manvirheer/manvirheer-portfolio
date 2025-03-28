// app/yvr/sections/Overview.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline';
import StatCard from '../ui/StatCard';
import OverlaySpline from '../components/SplineBackground';

interface OverviewProps {
  onNavigateToTab: (tab: string) => void;
}

const Overview = ({ onNavigateToTab }: OverviewProps) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  return (
    <motion.div
    className="space-y-12 relative" 
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    style={{ minHeight: '700px' }} // Ensure minimum height for the Spline content
  >
    {/* Single Spline animation centered behind both sections */}
    <div className="absolute inset-0 -z-10 h-full w-full">
      <OverlaySpline 
        scene="https://prod.spline.design/Aw2NktCwwRcPD77s/scene.splinecode"
        />
      </div>

      {/* Main overview section */}
      <motion.div
        className="relative bg-white/10 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-gray-100"
        variants={itemVariants}
      >
        <div className="md:flex relative z-10">
          <div className="md:w-4/5 p-8 md:p-10">
            {/* Existing content */}
            <div className="inline-block px-3 py-1.5 bg-blue-100 rounded-full text-sm font-medium text-blue-800 mb-6">
              Strategic Passenger Engagement Initiative
            </div>
            <h1 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Transform Airport Dwell Time Into Valuable Engagement
            </h1>
            <div className="space-y-4 mb-8">
              <p className="font-sans text-lg text-gray-700 leading-relaxed">
                The YVR Explorer Challenge introduces an innovative passenger engagement platform designed to transform airport dwell time into valuable interactions that support Vancouver International Airport&apos;s key strategic initiatives.
              </p>
              <p className="font-sans text-lg text-gray-700 leading-relaxed">
                This initiative directly supports YVR&apos;s 2022-2024 Strategic Plan, with particular emphasis on &quot;Climate: Net Zero by 2030&quot; and &quot;Gateway to the New Economy&quot; priorities.
              </p>
              <p className="font-sans text-lg text-gray-700 leading-relaxed">
                With 26.4 million annual passengers spending an average of 2.5 hours in the terminal, the YVR Explorer Challenge represents a significant opportunity to transform passive waiting time into meaningful engagement that delivers measurable value across multiple stakeholder groups.
              </p>
            </div>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-8">
              <StatCard
                label="Annual Passengers"
                value="26.4M"
                icon={<UserGroupIcon className="h-6 w-6 text-blue-600" />}
                className="flex-1"
              />
              <StatCard
                label="Avg. Dwell Time"
                value="2.5"
                suffix="hrs"
                icon={<ClockIcon className="h-6 w-6 text-blue-600" />}
                className="flex-1"
              />
            </div>

            <button
              onClick={() => onNavigateToTab('benefits')}
              className="px-8 py-4 bg-blue-800 text-white font-sans font-medium rounded-lg hover:bg-blue-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ring-blue-500 focus:ring-opacity-50 text-base"
            >
              Explore Strategic Benefits
            </button>
          </div>
          <div className="hidden md:block md:w-2/5 bg-white/10 backdrop-blur-sm border-l border-gray-300">
            <div className="h-full p-10 flex items-center justify-center">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 max-w-xs w-full">
                <h3 className="font-playfair text-xl font-semibold mb-6 text-center tracking-tight">How It Works</h3>
                <ol className="space-y-5">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-medium mr-4 mt-0.5">1</div>
                    <p className="font-sans text-base text-gray-700 pt-1">Passengers scan QR codes throughout the terminal</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-medium mr-4 mt-0.5">2</div>
                    <p className="font-sans text-base text-gray-700 pt-1">Complete challenges aligned with YVR&apos;s strategic initiatives</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-medium mr-4 mt-0.5">3</div>
                    <p className="font-sans text-base text-gray-700 pt-1">Earn points and compete on global leaderboards</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-medium mr-4 mt-0.5">4</div>
                    <p className="font-sans text-base text-gray-700 pt-1">Receive recognition and enhanced airport experience</p>
                  </li>
                </ol>
                <div className="font-sans text-center text-sm text-gray-600 mt-6">
                  No downloads required — web-based platform
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile-only how it works section */}
      <motion.div
        className="md:hidden bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100"
        variants={itemVariants}
      >
        <h3 className="font-playfair text-xl font-semibold mb-6 text-center tracking-tight">How It Works</h3>
        <ol className="space-y-5">
          <li className="flex items-start">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-medium mr-4 mt-0.5">1</div>
            <p className="font-sans text-base text-gray-700 pt-1">Passengers scan QR codes throughout the terminal</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-medium mr-4 mt-0.5">2</div>
            <p className="font-sans text-base text-gray-700 pt-1">Complete challenges aligned with YVR&apos;s strategic initiatives</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-medium mr-4 mt-0.5">3</div>
            <p className="font-sans text-base text-gray-700 pt-1">Earn points and compete on global leaderboards</p>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-900 text-white flex items-center justify-center text-sm font-medium mr-4 mt-0.5">4</div>
            <p className="font-sans text-base text-gray-700 pt-1">Receive recognition and enhanced airport experience</p>
          </li>
        </ol>
        <div className="font-sans text-center text-sm text-gray-600 mt-6">
          No downloads required — web-based platform
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Overview;