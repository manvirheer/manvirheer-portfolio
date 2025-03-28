
import React from 'react';
import { MapIcon, AcademicCapIcon, LightBulbIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline';
import ChallengeCategory from '../ui/ChallengeCategory';

const Challenges = () => {
  // Challenge data with improved descriptions
  const physicalChallenges = [
    {
      title: "Terminal Trotter",
      description: "Optimize passenger flow by incentivizing exploration of less-congested terminal areas"
    },
    {
      title: "Stairway Star",
      description: "Reduce energy consumption by encouraging stair usage over escalators and elevators"
    },
    {
      title: "Art Explorer",
      description: "Increase awareness of YVR's Indigenous art program and cultural significance"
    }
  ];

  const knowledgeChallenges = [
    {
      title: "BC Economic Showcase",
      description: "Educate visitors about British Columbia&apos;s key industries and economic strengths"
    },
    {
      title: "Indigenous Cultural Heritage",
      description: "Promote understanding of local First Nations history, art, and contemporary presence"
    },
    {
      title: "Regional Sustainability Initiatives",
      description: "Highlight BC's leadership in environmental stewardship and sustainable development"
    }
  ];

  const observationChallenges = [
    {
      title: "Safety Orientation",
      description: "Enhance passenger awareness of emergency procedures and safety facilities"
    },
    {
      title: "Service Discovery",
      description: "Improve utilization of airport amenities and passenger support services"
    },
    {
      title: "Waste Reduction Champion",
      description: "Support YVR's waste diversion goals through education on proper sorting practices"
    }
  ];

  const sustainabilityChallenges = [
    {
      title: "Carbon Impact Education",
      description: "Communicate the carbon footprint of various transportation options and alternatives"
    },
    {
      title: "Sustainable Aviation",
      description: "Showcase YVR's initiatives in sustainable aviation fuel and operational efficiencies"
    },
    {
      title: "Public Transit Advocate",
      description: "Promote transit usage to/from YVR aligned with Net Zero 2030 objectives"
    }
  ];

  return (
    <div className="space-y-10">
      <div>
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-5">Strategic Challenge Categories</h2>
        <p className="font-sans text-lg text-gray-700 mb-8 leading-relaxed">
          The YVR Explorer Challenge features strategically designed challenge categories that simultaneously engage passengers and advance key organizational priorities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <ChallengeCategory
            icon={<MapIcon className="h-7 w-7 text-blue-600" />}
            title="Physical & Activity-Based"
            description="Physical & Activity-Based Challenges encourage terminal exploration while optimizing passenger flow and reducing congestion at high-traffic areas. By incentivizing stair usage and exploration of less-utilized areas, these challenges contribute to operational efficiency and support YVR&apos;s sustainability goals through reduced elevator and escalator usage."
            challenges={physicalChallenges}
          />

          <ChallengeCategory
            icon={<AcademicCapIcon className="h-7 w-7 text-indigo-600" />}
            title="Knowledge-Based Challenges"
            description="Knowledge-Based Challenges serve as educational touchpoints for YVR&apos;s sustainability initiatives, British Columbia&apos;s economic advantages, and Indigenous cultural heritage. These challenges directly support YVR&apos;s role as a gateway to British Columbia&apos;s economy while promoting deeper understanding of local culture and environmental practices."
            challenges={knowledgeChallenges}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ChallengeCategory
            icon={<LightBulbIcon className="h-7 w-7 text-amber-600" />}
            title="Activity & Observation-Based"
            description="Activity & Observation-Based Challenges enhance passenger awareness of safety features, information resources, and proper waste sorting practices, contributing to operational excellence and supporting sustainability goals through improved recycling rates."
            challenges={observationChallenges}
          />

          <ChallengeCategory
            icon={<GlobeAmericasIcon className="h-7 w-7 text-green-600" />}
            title="Carbon Footprint & Sustainability"
            description="Carbon Footprint & Sustainability Challenges directly align with YVR&apos;s &apos;Climate: Net Zero by 2030&apos; strategic priority by educating passengers on sustainable transportation options and environmentally responsible choices."
            challenges={sustainabilityChallenges}
          />
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg border border-gray-200 p-8">
        <h3 className="font-playfair text-xl md:text-2xl font-bold text-gray-900 mb-5">Engagement Mechanics & Analytics Platform</h3>
        <p className="font-sans text-lg text-gray-700 mb-8 leading-relaxed">
          The challenge system incorporates sophisticated engagement mechanics designed to drive participation while generating valuable operational insights for terminal optimization.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="font-playfair text-lg font-semibold text-gray-900 mb-3">Individual Rankings</h4>
            <p className="font-sans text-base text-gray-700 leading-relaxed">
              Real-time individual leaderboards showcase daily &quot;YVR Explorers,&quot; with the highest performers receiving recognition on terminal digital displays and potential premium access benefits.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="font-playfair text-lg font-semibold text-gray-900 mb-3">Country Leaderboards</h4>
            <p className="font-sans text-base text-gray-700 leading-relaxed">
              Aggregated country leaderboards create friendly international competition while providing insights into passenger demographics and engagement patterns by nationality.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="font-playfair text-lg font-semibold text-gray-900 mb-3">Achievement Analytics</h4>
            <p className="font-sans text-base text-gray-700 leading-relaxed">
              A comprehensive analytics dashboard provides terminal operations with anonymized passenger flow data, high-engagement locations, and challenge completion patterns for operational optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;