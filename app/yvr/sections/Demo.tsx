// app/components/yvr/sections/Demo.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { QrCodeIcon, TrophyIcon, MapPinIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Demo = () => {
  // State to track which image is currently enlarged
  const [enlargedImage, setEnlargedImage] = useState<number | null>(null);

  // Images data
  const images = [
    {
      id: 1,
      title: "QR Code Implementation",
      description: "Strategic placement at International Terminal supporting wayfinding and flow management",
      icon: <QrCodeIcon className="h-9 w-9 text-blue-700" />,
      iconBg: "bg-blue-100",
      heading: "Passenger Engagement",
      content: "QR codes strategically placed throughout the terminal initiate location-specific challenges, transforming passive waiting time into active engagement with YVR's sustainability initiatives.",
      imageSrc: "/yvr/demo-1.png"
    },
    {
      id: 2,
      title: "Educational Content Example",
      description: "Interactive module on YVR's sustainable aviation fuel initiatives",
      icon: <MapPinIcon className="h-9 w-9 text-green-700" />,
      iconBg: "bg-green-100",
      heading: "Strategic Communication",
      content: "Each challenge serves as a touchpoint for communicating YVR's Net Zero by 2030 commitment and showcasing British Columbia's economic strengths.",
      imageSrc: "/yvr/demo-2.png"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Anonymized passenger flow visualization supporting the \"Strengthening the Core\" strategic priority",
      icon: <TrophyIcon className="h-9 w-9 text-amber-700" />,
      iconBg: "bg-amber-100",
      heading: "Operational Insights",
      content: "Anonymous participation data provides valuable analytics supporting evidence-based decision making for terminal operations and retail optimization.",
      imageSrc: "/yvr/demo-3.jpeg"
    }
  ];

  return (
    <div className="space-y-10 relative">
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 md:p-10">
        <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-5">Interactive Demonstration</h2>
        <p className="font-sans text-lg text-gray-700 mb-8 leading-relaxed">
          The following demonstration illustrates how the YVR Explorer Challenge creates value across the passenger 
          journey and for multiple stakeholder groups while supporting YVR&apos;s strategic initiatives.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image) => (
            <div 
              key={image.id}
              className={`bg-gray-50 rounded-lg border border-gray-200 p-6 flex flex-col items-center ${enlargedImage !== null && enlargedImage !== image.id ? 'blur-sm' : ''} transition-all duration-300`}
            >
              <div className={`${image.iconBg} rounded-full p-4 mb-5`}>
                {image.icon}
              </div>
              <h3 className="font-playfair text-xl font-semibold text-center mb-3">{image.heading}</h3>
              <p className="font-sans text-base text-gray-700 text-center mb-5 leading-relaxed">
                {image.content}
              </p>
              <div className="mt-auto bg-white border border-gray-200 rounded-lg p-4 w-full shadow-sm">
                <div 
                  className="h-48 bg-gray-100 rounded flex items-center justify-center mb-3 cursor-pointer hover:opacity-90 transition-opacity relative overflow-hidden"
                  onClick={() => setEnlargedImage(image.id)}
                >
                  <Image 
                    src={image.imageSrc} 
                    alt={image.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="font-sans text-sm text-gray-600 text-center">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enlarged Image Overlay */}
      {enlargedImage !== null && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div className="relative bg-white max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl w-full m-4">
            <button 
              className="absolute top-4 right-4 bg-white/80 rounded-full p-2 hover:bg-white transition-colors z-10 shadow-md"
              onClick={() => setEnlargedImage(null)}
              aria-label="Close preview"
            >
              <XMarkIcon className="h-6 w-6 text-gray-800" />
            </button>
            
            <div className="p-4">
              <div className="h-[60vh] relative">
                <Image 
                  src={images.find(img => img.id === enlargedImage)?.imageSrc || ''} 
                  alt={images.find(img => img.id === enlargedImage)?.title || ''}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 border-t">
              <h3 className="font-playfair text-xl font-bold mb-2">
                {images.find(img => img.id === enlargedImage)?.title}
              </h3>
              <p className="font-sans text-gray-700 mb-4">
                {images.find(img => img.id === enlargedImage)?.description}
              </p>
              <button 
                className="w-full py-3 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
                onClick={() => setEnlargedImage(null)}
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Demo;