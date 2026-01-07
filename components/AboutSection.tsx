'use client'

import { useState } from 'react'

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | null>(null)

  const toggleTab = (tab: 'mission' | 'vision') => {
    setActiveTab(activeTab === tab ? null : tab)
  }

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary-dark">
          About Us
        </h2>
        
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            BOS has quickly established itself with a reputation as a complete Supply Chain Solution provider 
            integrating each separate link in the chain
          </p>
        </div>

        {/* Accordion Section */}
        <div className="max-w-3xl mx-auto">
          {/* Mission Accordion */}
          <div className="mb-4">
            <button
              onClick={() => toggleTab('mission')}
              className="w-full bg-secondary-dark text-white p-6 text-left font-semibold text-lg flex justify-between items-center hover:bg-opacity-90 transition"
            >
              <span>Our Mission</span>
              <span className={`transform transition-transform ${activeTab === 'mission' ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeTab === 'mission' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="bg-gray-50 p-6 border border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Our Mission is to successfully deliver the best value for our Customer by combining aggressive 
                  strategic marketing with high quality, cost effective products and service on time, every time.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Accordion */}
          <div>
            <button
              onClick={() => toggleTab('vision')}
              className="w-full bg-secondary-dark text-white p-6 text-left font-semibold text-lg flex justify-between items-center hover:bg-opacity-90 transition"
            >
              <span>Our Vision</span>
              <span className={`transform transition-transform ${activeTab === 'vision' ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeTab === 'vision' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="bg-gray-50 p-6 border border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  To become the leading supply chain solution provider in the region, recognized for our commitment 
                  to excellence, innovation, and customer satisfaction. We envision a future where every client 
                  achieves their operational goals through our comprehensive solutions and unwavering dedication.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80"
              alt="Industrial equipment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Industrial Excellence</h3>
            </div>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80"
              alt="Oil field operations"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">Oil & Gas Solutions</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

