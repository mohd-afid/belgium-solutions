'use client'

import Link from 'next/link'

const regions = [
  {
    id: 'kuwait',
    name: 'KUWAIT',
    image: '/images/kuwait_logo.png',
    width: 217,
    height: 100,
  },
  {
    id: 'ksa',
    name: 'NATIONAL OIL SOLUTIONS KSA',
    image: '/images/pic3.jpg',
    width: 250,
    height: 108,
  },
  {
    id: 'usa',
    name: 'NATIONAL OILFIELD SOLUTIONS, LLC USA',
    image: '/images/pic1.jpg',
    width: 250,
    height: 108,
  },
  {
    id: 'bahrain',
    name: 'SPE BAHRAIN',
    image: '/images/spe_logo.png',
    width: 201,
    height: 101,
  },
  {
    id: 'uae',
    name: 'NATIONAL OILFIELD SOLUTIONS FZE U.A.E',
    image: '/images/pic4.jpg',
    width: 250,
    height: 108,
  },
]

export default function RegionalSections() {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="be-wrap">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
          {regions.map((region) => (
            <Link
              key={region.id}
              href="/group-companies"
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="h-28 w-full flex items-center justify-center p-2 mb-3">
                <img
                  src={region.image}
                  alt={region.name}
                  className="max-h-20 max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h6 className="text-[13px] font-bold text-[#3a3a3a] uppercase tracking-wide group-hover:text-[#ed1c24] transition-colors duration-200 leading-snug">
                {region.name}
              </h6>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
