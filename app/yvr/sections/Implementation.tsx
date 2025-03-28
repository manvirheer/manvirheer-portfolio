// app/components/yvr/sections/Implementation.tsx
import React from 'react';
import { BookOpenIcon, CodeBracketIcon, DevicePhoneMobileIcon, GlobeAltIcon, ServerIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import TimelineItem from '../ui/TimelineItem';

const Implementation = () => {
  return (
    <div className="space-y-10">
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 md:p-10">
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-5">Implementation Strategy</h2>
        <p className="font-sans text-lg text-gray-700 mb-8 leading-relaxed">
          The YVR Explorer Challenge follows a structured implementation methodology designed to minimize operational
          disruption while maximizing strategic impact. The approach aligns with YVR&apos;s project governance
          framework and emphasizes stakeholder engagement throughout the process.
        </p>

        <div className="bg-gray-50 rounded-lg border border-gray-200 p-8">
          <h3 className="font-playfair text-xl font-semibold mb-6">Strategic Implementation Phases</h3>

          <div className="space-y-8">
            <TimelineItem
              number={1}
              title="Stakeholder Alignment & Design"
              duration=""
              tasks={[
                { label: "Extensive consultation with terminal operations, retail partners, and sustainability teams" },
                { label: "Comprehensive user journey mapping aligned with passenger flow analysis" },
                { label: "Content strategy development with input from BC tourism and Indigenous partners" }
              ]}
              active={true}
            />

            <TimelineItem
              number={2}
              title="Enterprise Technology Implementation"
              duration=""
              tasks={[
                { label: "Web application creation utilizing enterprise-grade architecture (NextJS frontend, NestJS backend)" },
                { label: "PostgreSQL database implementation with advanced anonymization protocols" },
                { label: "QR code infrastructure development with redundancy and monitoring capabilities" }
              ]}
            />

            <TimelineItem
              number={3}
              title="Strategic Content Development"
              duration=""
              tasks={[
                { label: "Challenge development mapped to YVR's Net Zero 2030 and economic gateway priorities" },
                { label: "Multi-language content preparation (English, French, Mandarin, Japanese)" },
                { label: "Location optimization based on passenger flow analytics and terminal dwell points" }
              ]}
            />

            <TimelineItem
              number={4}
              title="Operational Integration"
              duration=""
              tasks={[
                { label: "Rigorous user acceptance testing with diverse passenger demographic groups" },
                { label: "Strategic QR code placement optimized for visibility and passenger flow management" },
                { label: "Comprehensive staff training program and phased implementation approach" }
              ]}
              isLast={true}
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 md:p-10">
        <h3 className="font-playfair text-xl md:text-2xl font-bold text-gray-900 mb-6">Technical Architecture</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 shadow-sm">
            <h4 className="font-playfair text-lg font-semibold text-gray-900 mb-4">Frontend Architecture</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-xs text-blue-700 mr-3 mt-0.5">
                  <CodeBracketIcon className="h-3.5 w-3.5" />
                </span>
                <div>
                  <span className="font-sans text-base font-medium text-gray-800 block mb-1">Next.js React Framework</span>
                  <p className="font-sans text-base text-gray-700 leading-relaxed">
                    Enterprise-grade architecture ensuring accessibility and performance across all devices with minimal load times
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-xs text-blue-700 mr-3 mt-0.5">
                  <GlobeAltIcon className="h-3.5 w-3.5" />
                </span>
                <div>
                  <span className="font-sans text-base font-medium text-gray-800 block mb-1">Multi-language Support</span>
                  <p className="font-sans text-base text-gray-700 leading-relaxed">
                    Comprehensive internationalization aligned with YVR&apos;s passenger demographics and diversity objectives
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-xs text-blue-700 mr-3 mt-0.5">
                  <DevicePhoneMobileIcon className="h-3.5 w-3.5" />
                </span>
                <div>
                  <span className="font-sans text-base font-medium text-gray-800 block mb-1">Zero-friction Access</span>
                  <p className="font-sans text-base text-gray-700 leading-relaxed">
                    Web-based solution eliminating adoption barriers with no download requirements and instant participation capability
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 shadow-sm">
            <h4 className="font-playfair text-lg font-semibold text-gray-900 mb-4">Backend Infrastructure</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-700 mr-3 mt-0.5">
                  <ServerIcon className="h-3.5 w-3.5" />
                </span>
                <div>
                  <span className="font-sans text-base font-medium text-gray-800 block mb-1">NestJS Backend</span>
                  <p className="font-sans text-base text-gray-700 leading-relaxed">
                    Scalable server architecture with enterprise-grade security and performance to handle concurrent terminal users
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-700 mr-3 mt-0.5">
                  <BookOpenIcon className="h-3.5 w-3.5" />
                </span>
                <div>
                  <span className="font-sans text-base font-medium text-gray-800 block mb-1">PostgreSQL Database</span>
                  <p className="font-sans text-base text-gray-700 leading-relaxed">
                    Robust data architecture supporting advanced analytics for operational insights with high-volume capacity
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-700 mr-3 mt-0.5">
                  <ShieldCheckIcon className="h-3.5 w-3.5" />
                </span>
                <div>
                  <span className="font-sans text-base font-medium text-gray-800 block mb-1">Data Privacy Compliance</span>
                  <p className="font-sans text-base text-gray-700 leading-relaxed">
                    PIPEDA-compliant with robust anonymization protocols aligning with YVR&apos;s Data Guardians policies and procedures
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Implementation;