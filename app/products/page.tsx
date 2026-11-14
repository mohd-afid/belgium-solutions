'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import LightboxModal from '@/components/LightboxModal'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const products = [
  { id: 1, image: '/images/d4.jpg', name: 'Kemper' },
  { id: 2, image: '/images/p4.jpg', name: 'Demco' },
  { id: 3, image: '/images/d20.jpg', name: 'Grainger' },
  { id: 4, image: '/images/d23.jpg', name: 'Lufkin' },
  { id: 5, image: '/images/d8.jpg', name: 'Kong' },
  { id: 6, image: '/images/d51.jpg', name: 'Product Brand 51' },
  { id: 7, image: '/images/d35.jpg', name: 'Product Brand 35' },
  { id: 8, image: '/images/d34.jpg', name: 'Product Brand 34' },
  { id: 9, image: '/images/d33.jpg', name: 'Product Brand 33' },
  { id: 10, image: '/images/d32.jpg', name: 'Product Brand 32' },
  { id: 11, image: '/images/d311.jpg', name: 'Product Brand 31' },
  { id: 12, image: '/images/d30.jpg', name: 'Product Brand 30' },
  { id: 13, image: '/images/d29.jpg', name: 'Product Brand 29' },
  { id: 14, image: '/images/d28.jpg', name: 'Product Brand 28' },
  { id: 15, image: '/images/d27.jpg', name: 'Product Brand 27' },
  { id: 16, image: '/images/d26.jpg', name: 'Product Brand 26' },
  { id: 17, image: '/images/d25.jpg', name: 'Product Brand 25' },
  { id: 18, image: '/images/d24.jpg', name: 'Product Brand 24' },
  { id: 19, image: '/images/d22.jpg', name: 'Product Brand 22' },
  { id: 20, image: '/images/d211.jpg', name: 'Product Brand 21' },
  { id: 21, image: '/images/d19.jpg', name: 'Product Brand 19' },
  { id: 22, image: '/images/d18.jpg', name: 'Product Brand 18' },
  { id: 23, image: '/images/d17.jpg', name: 'Product Brand 17' },
  { id: 24, image: '/images/d16.jpg', name: 'Product Brand 16' },
  { id: 25, image: '/images/d15.jpg', name: 'Product Brand 15' },
  { id: 26, image: '/images/d14.jpg', name: 'Product Brand 14' },
  { id: 27, image: '/images/d13.jpg', name: 'Product Brand 13' },
  { id: 28, image: '/images/d12.jpg', name: 'Product Brand 12' },
  { id: 29, image: '/images/d111.jpg', name: 'Product Brand 11-1' },
  { id: 30, image: '/images/d10.jpg', name: 'Product Brand 10' },
  { id: 31, image: '/images/d6.jpg', name: 'Product Brand 6' },
  { id: 32, image: '/images/d31.jpg', name: 'Product Brand 3' },
  { id: 33, image: '/images/d21.jpg', name: 'Product Brand 2' },
  { id: 34, image: '/images/d11.jpg', name: 'Product Brand 1' },
]

export default function ProductsPage() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const handlePrev = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + products.length) % products.length)
    }
  }

  const handleNext = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % products.length)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PageHero title="OTHER PRODUCTS WE DEAL" breadcrumb="Home / Products / Products We Deal" />

      <section className="py-20 lg:py-24 bg-white">
        <div className="be-wrap">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setActiveImageIndex(index)}
                className="bg-white border border-gray-100 rounded-sm p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center h-48 group cursor-pointer relative overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#ed1c24] text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-md">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
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
          imageSrc={products[activeImageIndex].image}
          title={products[activeImageIndex].name}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      <Footer />
      <ScrollToTop />
    </main>
  )
}

