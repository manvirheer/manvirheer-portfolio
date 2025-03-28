// app/components/yvr/sections/Benefits.tsx
import React from 'react';
import { SparklesIcon, MapIcon, ChartBarIcon, GlobeAltIcon, GlobeAmericasIcon, GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline';
import IconBox from '../ui/IconBox';

const Benefits = () => {
  return (
    <div className="space-y-10">
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 sm:p-6 md:p-8 lg:p-10">
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-5">Strategic Benefits for YVR</h2>
        <p className="font-sans text-lg text-gray-700 mb-8 leading-relaxed">
          The YVR Explorer Challenge delivers quantifiable strategic benefits across multiple priority areas identified in YVR&apos;s 2022-2024 Strategic Plan:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <IconBox
            icon={<SparklesIcon className="h-7 w-7 text-blue-600" />}
            title="Enhanced Passenger Experience"
            description="Transforms waiting time into engaging activities that demonstrably reduce perceived waiting time and stress. Implementation of similar gamification initiatives at international airports has resulted in passenger satisfaction increases of up to 35% during peak travel periods."
            variant="feature"
          >
            <div className="mt-5 bg-white rounded-md border border-gray-200 p-4 flex justify-between items-center">
              <span className="font-sans text-base text-gray-600">Passenger satisfaction increase</span>
              <span className="font-playfair text-xl font-bold text-blue-900">+35%</span>
            </div>
          </IconBox>

          <IconBox
            icon={<MapIcon className="h-7 w-7 text-green-600" />}
            title="Promotion of British Columbia"
            description="Serves as an educational platform highlighting the province&apos;s economic strengths, cultural heritage, and sustainable initiatives. With potential to reach over 6 million international visitors annually, the initiative functions as a cost-effective promotional channel for regional tourism and commerce."
            variant="feature"
          >
            <div className="mt-5 bg-white rounded-md border border-gray-200 p-4 flex justify-between items-center">
              <span className="font-sans text-base text-gray-600">Annual international reach</span>
              <span className="font-playfair text-xl font-bold text-blue-900">6M+</span>
            </div>
          </IconBox>

          <IconBox
            icon={<ChartBarIcon className="h-7 w-7 text-purple-600" />}
            title="Data-Driven Operational Insights"
            description="Collects anonymized movement and engagement data that provides actionable intelligence for terminal optimization, retail placement, and service improvements. This supports YVR&apos;s &apos;Strengthening the Core&apos; priority through evidence-based operational enhancements."
            variant="feature"
          >
            <div className="mt-5 bg-white rounded-md border border-gray-200 p-4 flex justify-between items-center">
              <span className="font-sans text-base text-gray-600">Anonymized data points</span>
              <span className="font-playfair text-xl font-bold text-blue-900">Millions</span>
            </div>
          </IconBox>

          <IconBox
            icon={<GlobeAltIcon className="h-7 w-7 text-amber-600" />}
            title="Innovation Leadership"
            description="Positions YVR at the forefront of passenger experience innovation, enhancing the airport's reputation as a progressive global transportation hub. This directly supports YVR's strategic goal of remaining competitive as a premier international gateway."
            variant="feature"
          >
            <div className="mt-5 bg-white rounded-md border border-gray-200 p-4 flex justify-between items-center">
              <span className="font-sans text-base text-gray-600">Industry differentiation</span>
              <span className="font-playfair text-xl font-bold text-blue-900">Significant</span>
            </div>
          </IconBox>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 md:p-10">
        <h3 className="font-playfair text-xl md:text-2xl font-bold text-gray-900 mb-6">Alignment with YVR Strategic Plan</h3>

        <div className="space-y-6"><div className="flex items-start p-6 bg-gray-50 border border-gray-200 rounded-lg">
          <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-5">
            <GlobeAmericasIcon className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h4 className="font-playfair text-lg font-medium text-gray-900 mb-2">Climate: Net Zero by 2030</h4>
            <p className="font-sans text-base text-gray-700 leading-relaxed">
              Educates passengers on sustainable transportation options and encourages environmentally conscious behaviors through incentivized challenges. The platform serves as a communication channel for YVR&apos;s ambitious carbon reduction initiatives.
            </p>
          </div>
        </div>

          <div className="flex items-start p-6 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-5">
              <GlobeAsiaAustraliaIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-playfair text-lg font-medium text-gray-900 mb-2">Gateway to the New Economy</h4>
              <p className="font-sans text-base text-gray-700 leading-relaxed">
                Creates potential for revenue enhancement through increased retail engagement and partnership opportunities with terminal vendors, supporting YVR&apos;s financial sustainability objectives without significant capital investment.
              </p>
            </div>
          </div>

          <div className="flex items-start p-6 bg-blue-50 border border-blue-100 rounded-lg">
            <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-5">
              <SparklesIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-playfair text-lg font-medium text-gray-900 mb-2">Financial Sustainability</h4>
              <p className="font-sans text-base text-gray-700 leading-relaxed">
                The initiative creates opportunities for incremental revenue generation through strategic partnerships with terminal vendors and enhanced retail engagement, complementing YVR&apos;s financial sustainability objectives with minimal implementation costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;