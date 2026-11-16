'use client'

import { useState } from 'react'

export default function AboutSection() {
  const [openTab, setOpenTab] = useState<'mission' | 'vision' | null>('mission')

  const toggleTab = (tab: 'mission' | 'vision') => {
    setOpenTab(openTab === tab ? null : tab)
  }

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="be-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Intro & Accordion */}
          <div>
            <h5 className="text-base md:text-lg font-bold text-[#222222] tracking-wider uppercase mb-5">
              INTRODUCTION
            </h5>

            <p className="text-sm md:text-[14px] text-[#555555] leading-relaxed mb-8 text-justify">
              BOS has quickly established itself with a reputation as a complete Supply Chain Solution provider integrating each separate link in the chain – Sourcing of quality products, Procurement, Logistics, Inventory and Production liaisons with reputed Manufacturers, Distributors and Suppliers around the globe..
            </p>

            {/* Accordion */}
            <div className="space-y-3">
              {/* Mission */}
              <div className="border border-[#dedede] rounded-none overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleTab('mission')}
                  className="w-full flex justify-between items-center px-5 py-3.5 bg-[#efefef] hover:bg-[#e4e4e4] transition-colors text-left focus:outline-none"
                >
                  <span className="text-[13px] font-bold text-[#555555] tracking-wide uppercase">
                    OUR MISSION
                  </span>
                  <span className="text-sm font-bold text-[#555555]">
                    {openTab === 'mission' ? '−' : '+'}
                  </span>
                </button>

                {openTab === 'mission' && (
                  <div className="p-5 bg-white text-sm text-[#555555] leading-relaxed border-t border-[#dedede] animate-fadeIn">
                    Our Mission is to successfully deliver the best value for our Customer by combining aggressive strategic marketing with high quality, cost effective products and service on time, every time.
                  </div>
                )}
              </div>

              {/* Vision */}
              <div className="border border-[#dedede] rounded-none overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleTab('vision')}
                  className="w-full flex justify-between items-center px-5 py-3.5 bg-[#efefef] hover:bg-[#e4e4e4] transition-colors text-left focus:outline-none"
                >
                  <span className="text-[13px] font-bold text-[#555555] tracking-wide uppercase">
                    OUR VISION
                  </span>
                  <span className="text-sm font-bold text-[#555555]">
                    {openTab === 'vision' ? '−' : '+'}
                  </span>
                </button>

                {openTab === 'vision' && (
                  <div className="p-5 bg-white text-sm text-[#555555] leading-relaxed border-t border-[#dedede] space-y-3 animate-fadeIn">
                    <p>
                      Our Vision is to provide excellence in managing the complexities of our customer’s supply chain requirements.
                    </p>
                    <p>
                      Our vision is supported by two fundamental principles that provide the foundation for all of our activities: Organization Excellence and Core Values.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: VM Image */}
          <div className="flex justify-center items-center">
            <div className="relative overflow-hidden shadow-sm border border-gray-200">
              <img
                src="/images/VM.jpg"
                alt="Belgium Oil Solutions - Vision and Mission"
                className="w-full h-auto object-cover max-w-[650px] hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
