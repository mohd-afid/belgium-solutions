'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import LightboxModal from '@/components/LightboxModal'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const fabricationImages = [
  { id: 1, image: '/images/11.jpg', name: 'Offshore Container Unit 11' },
  { id: 2, image: '/images/12.jpg', name: 'Offshore Container Unit 12' },
  { id: 3, image: '/images/13.jpg', name: 'Offshore Container Unit 13' },
  { id: 4, image: '/images/14.jpg', name: 'Offshore Container Unit 14' },
  { id: 5, image: '/images/1.jpg', name: 'Fabricated Module 1' },
  { id: 6, image: '/images/2.jpg', name: 'Fabricated Module 2' },
  { id: 7, image: '/images/3.jpg', name: 'Fabricated Module 3' },
  { id: 8, image: '/images/4.jpg', name: 'Fabricated Module 4' },
  { id: 9, image: '/images/5.jpg', name: 'Fabricated Module 5' },
  { id: 10, image: '/images/6.jpg', name: 'Fabricated Module 6' },
  { id: 11, image: '/images/7.jpg', name: 'Fabricated Module 7' },
  { id: 12, image: '/images/8.jpg', name: 'Fabricated Module 8' },
  { id: 13, image: '/images/9.jpg', name: 'Fabricated Module 9' },
  { id: 14, image: '/images/10.jpg', name: 'Fabricated Module 10' },
]

const unitsProduced = [
  'H2S Units',
  'Cementis Units Batch Mixer',
  'Modular Workshops',
  'Tools Baskets',
  'Man Lifting Baskets',
  'Fuel & Utility Tanks',
  'Skid mounted Pump Units',
  'Cross Over & Subs',
  'Electrical Panel Board',
  'Accumulator Units (Koomey)',
  'Swivel',
  'Hook / Travelling Blocks',
  'Control Panels & High pressure Test Pumps',
  'Pneumatic & electric Winches',
  'Handling Tools',
  'Hose Assemblies',
  'Wire Rope Slings',
  'Engines',
]

export default function WeFabricatePage() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const handlePrev = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        (activeImageIndex - 1 + fabricationImages.length) % fabricationImages.length
      )
    }
  }

  const handleNext = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % fabricationImages.length)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PageHero title="WE FABRICATE" breadcrumb="Home / Products / We Fabricate" />

      <section className="py-20 lg:py-24 bg-white">
        <div className="be-wrap">
          {/* Intro Description */}
          <div className="max-w-4xl mx-auto mb-16 text-[#555555] text-sm md:text-[15px] leading-relaxed text-justify">
            <p>
              Belgium Oil Solutions Manufactures full and comprehensive range of certified modules for the onshore and offshore oilfield market. We provide tailored solutions for all applications and specifications depending upon our clients’ need. We build our modules to the highest specification to meet global standards, particularly for on-road and sea transport which includes DNV 2.7-1 / EN 12079 / DNV2.7-3 &amp; CSC. We aim to provide a complete service from start to finish, working with the client to provide a suitable solution.
            </p>
          </div>

          {/* 2 Columns: Gallery Grid & Units List */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Gallery: 8 of 12 columns */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {fabricationImages.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveImageIndex(idx)}
                    className="group relative bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-36 cursor-pointer flex items-center justify-center p-2"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full max-w-full object-cover rounded-sm group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-[#ed1c24] text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-md">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Units List: 4 of 12 columns */}
            <div className="lg:col-span-4 bg-gray-50/80 p-6 md:p-8 border border-gray-100 rounded-sm">
              <h4 className="text-base font-bold text-[#222222] mb-4 uppercase tracking-wide">
                The Units that we produce includes:
              </h4>

              <ul className="space-y-2 text-[14px] text-[#555555]">
                {unitsProduced.map((unit, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="text-[#ed1c24] font-bold text-base leading-tight">•</span>
                    <span>{unit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <LightboxModal
          isOpen={activeImageIndex !== null}
          onClose={() => setActiveImageIndex(null)}
          imageSrc={fabricationImages[activeImageIndex].image}
          title={fabricationImages[activeImageIndex].name}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      <Footer />
      <ScrollToTop />
    </main>
  )
}

