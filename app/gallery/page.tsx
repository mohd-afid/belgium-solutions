'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import LightboxModal from '@/components/LightboxModal'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const galleryItems = [
  { id: 1, image: '/images/DummyImage21.gif', title: 'Industrial Module 1' },
  { id: 2, image: '/images/DummyImage2.gif', title: 'Industrial Module 2' },
  { id: 3, image: '/images/DummyImage1.gif', title: 'Industrial Module 3' },
  { id: 4, image: '/images/11.jpg', title: 'Offshore Container 1' },
  { id: 5, image: '/images/12.jpg', title: 'Offshore Container 2' },
  { id: 6, image: '/images/13.jpg', title: 'Offshore Container 3' },
  { id: 7, image: '/images/14.jpg', title: 'Offshore Container 4' },
  { id: 8, image: '/images/1.jpg', title: 'Fabricated Skid 1' },
  { id: 9, image: '/images/2.jpg', title: 'Fabricated Skid 2' },
  { id: 10, image: '/images/3.jpg', title: 'Fabricated Skid 3' },
  { id: 11, image: '/images/4.jpg', title: 'Fabricated Skid 4' },
  { id: 12, image: '/images/5.jpg', title: 'Fabricated Skid 5' },
]

export default function GalleryPage() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const handlePrev = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + galleryItems.length) % galleryItems.length)
    }
  }

  const handleNext = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % galleryItems.length)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PageHero title="GALLERY" breadcrumb="Home / Gallery" />

      <section className="py-20 lg:py-24 bg-white">
        <div className="be-wrap">
          <div className="text-center mb-12">
            <h6 className="text-base font-bold text-[#222222] uppercase tracking-wider mb-3">
              Classic Gallery With Grid Spacing
            </h6>
            <div className="w-16 h-0.5 bg-[#707070] mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveImageIndex(index)}
                className="group relative bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-52 cursor-pointer flex items-center justify-center p-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-[#ed1c24] text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-md">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <LightboxModal
          isOpen={activeImageIndex !== null}
          onClose={() => setActiveImageIndex(null)}
          imageSrc={galleryItems[activeImageIndex].image}
          title={galleryItems[activeImageIndex].title}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      <Footer />
      <ScrollToTop />
    </main>
  )
}

