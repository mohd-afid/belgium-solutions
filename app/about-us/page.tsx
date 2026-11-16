'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function AboutUsPage() {
  const [openTab, setOpenTab] = useState<'mission' | 'vision' | null>('mission')

  const toggleTab = (tab: 'mission' | 'vision') => {
    setOpenTab(openTab === tab ? null : tab)
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PageHero title="ABOUT US" breadcrumb="Home / About Us / Company Profile" />

      {/* Main Profile Text */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="be-wrap">
          <div className="max-w-4xl mx-auto space-y-6 text-[#555555] text-[14px] md:text-[15px] leading-relaxed text-justify">
            <p>
              Belgium Oil Solutions (BOS) was founded in 2010 for the supply of Engineering goods throughout Gulf region and since we provide specialized services, equipment &amp; spares to Oil, Gas, Power, Marine, Defense and Industrial projects all over GCC and North Africa.{' '}
              <strong className="text-[#222222]">Directors of NOS are well experienced professionals with leading edge expertise in Energy and associate sectors.</strong>
            </p>
            <p>
              BOS has quickly established itself with a reputation as a complete Supply Chain Solution provider integrating each separate link in the chain – Sourcing of quality products, Procurement, Logistics, Inventory and Production liaisons with reputed Manufacturers, Distributors and Suppliers around the globe.
            </p>
            <p>
              As a part of our expansion we have established offices in Sharjah, Bahrain and Houston TX to support our continued growth and sourcing requirement. Other than our aforementioned offices, we have formed strategic business partnership with established supply houses in Libya, Qatar, Egypt and Iraq to broaden our geographical reach.
            </p>
            <p>
              We strive to forge lasting relationships with our customers based on consistent performance. This we achieve by assuring utmost attention with best services, quality products, competitive pricing and prompt delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-[#f5f5f5] border-t border-b border-[#e5e5e5]">
        <div className="be-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Accordion */}
            <div className="space-y-4">
              <div className="border border-[#dedede] bg-white rounded-none overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleTab('mission')}
                  className="w-full flex justify-between items-center px-6 py-4 bg-[#efefef] hover:bg-[#e6e6e6] transition-colors text-left focus:outline-none"
                >
                  <span className="text-[14px] font-bold text-[#555555] tracking-wide uppercase">
                    OUR MISSION
                  </span>
                  <span className="text-base font-bold text-[#555555]">
                    {openTab === 'mission' ? '−' : '+'}
                  </span>
                </button>

                {openTab === 'mission' && (
                  <div className="p-6 bg-white text-sm text-[#555555] leading-relaxed border-t border-[#dedede] animate-fadeIn">
                    Our Mission is to successfully deliver the best value for our Customer by combining aggressive strategic marketing with high quality, cost effective products and service on time, every time.
                  </div>
                )}
              </div>

              <div className="border border-[#dedede] bg-white rounded-none overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleTab('vision')}
                  className="w-full flex justify-between items-center px-6 py-4 bg-[#efefef] hover:bg-[#e6e6e6] transition-colors text-left focus:outline-none"
                >
                  <span className="text-[14px] font-bold text-[#555555] tracking-wide uppercase">
                    OUR VISION
                  </span>
                  <span className="text-base font-bold text-[#555555]">
                    {openTab === 'vision' ? '−' : '+'}
                  </span>
                </button>

                {openTab === 'vision' && (
                  <div className="p-6 bg-white text-sm text-[#555555] leading-relaxed border-t border-[#dedede] space-y-3 animate-fadeIn">
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

            {/* VM Image */}
            <div className="flex justify-center">
              <img
                src="/images/VM.jpg"
                alt="Vision and Mission"
                className="w-full max-w-[600px] h-auto object-contain rounded-none shadow-sm border border-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}

