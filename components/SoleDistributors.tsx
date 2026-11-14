'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'

const distributors = [
  {
    id: 'hdp',
    title: 'hdp',
    image: '/images/heavy_duty_pipe_clamps1.jpg',
    link: '/sole-distributor',
  },
  {
    id: 'wilden',
    title: 'wilden',
    image: '/images/wilden.jpg',
    link: '/sole-distributor',
  },
  {
    id: 'leader-coating',
    title: 'leader coating',
    image: '/images/p8.jpg',
    link: '/sole-distributor',
  },
  {
    id: 'cle',
    title: 'cle',
    image: '/images/climax_logo.jpg',
    link: '/sole-distributor',
  },
  {
    id: 'amc',
    title: 'amc',
    image: '/images/amc_logo.jpg',
    link: '/sole-distributor',
  },
  {
    id: 'fischemicalsaberdeen',
    title: 'FISCHEMICALSABERDEEN',
    image: '/images/d7.jpg',
    link: '/sole-distributor',
  },
  {
    id: 'ciglow',
    title: 'CIGLOW',
    image: '/images/p7.jpg',
    link: '/sole-distributor',
  },
]

export default function SoleDistributors() {
  const [startIndex, setStartIndex] = useState(0)
  const itemsPerPage = 4 // visible on desktop

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : distributors.length - itemsPerPage))
  }

  const handleNext = () => {
    setStartIndex((prev) => (prev < distributors.length - itemsPerPage ? prev + 1 : 0))
  }

  return (
    <section className="bg-white pt-10 pb-4">
      <div className="be-wrap">
        {/* Section Heading */}
        <div className="mb-6 animate-flipInX">
          <h3 className="text-xl md:text-2xl font-bold text-[#222222]">
            Sole Distributor:
          </h3>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Scrollable Row */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-5"
              style={{
                transform: `translateX(-${startIndex * (100 / itemsPerPage + 1.25)}%)`,
              }}
            >
              {distributors.map((item) => (
                <div
                  key={item.id}
                  className="w-full sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)] flex-shrink-0"
                >
                  <Link
                    href={item.link}
                    className="block relative bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow group/item h-[190px]"
                  >
                    {/* Brand Image */}
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-full max-w-full object-contain filter group-hover/item:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <span className="text-white text-sm font-bold uppercase tracking-wider text-center transform translate-y-2 group-hover/item:translate-y-0 transition-transform duration-300">
                        {item.title}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#f0f0f0] hover:bg-[#ed1c24] hover:text-white text-[#555] flex items-center justify-center shadow-md transition-colors duration-200 z-10 focus:outline-none"
            aria-label="Previous"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#f0f0f0] hover:bg-[#ed1c24] hover:text-white text-[#555] flex items-center justify-center shadow-md transition-colors duration-200 z-10 focus:outline-none"
            aria-label="Next"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Separator Line */}
        <hr className="border-t border-[#dedede] mt-10 mb-4" />
      </div>
    </section>
  )
}
