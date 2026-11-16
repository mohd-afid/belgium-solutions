'use client'

import { useState, useEffect, useRef } from 'react'

const slides = [
  {
    id: 1,
    image: '/images/1.jpg',
    hasCaptions: true,
  },
  {
    id: 2,
    image: '/images/s2.jpg',
  },
  {
    id: 3,
    image: '/images/s3.jpg',
  },
  {
    id: 4,
    image: '/images/s4.jpg',
  },
  {
    id: 5,
    image: '/images/s5.jpg',
  },
  {
    id: 6,
    image: '/images/s6.jpg',
  },
  {
    id: 7,
    image: '/images/s7.jpg',
  },
  {
    id: 8,
    image: '/images/s8.jpg',
  },
  {
    id: 9,
    image: '/images/s10_b.jpg',
  },
  {
    id: 10,
    image: '/images/s10_d.jpg',
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isPaused) return

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section
      id="home"
      className="relative w-full h-[500px] md:h-[650px] lg:h-[700px] mt-[124px] overflow-hidden bg-[#E9E9E9] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Slide 1 Caption Badges */}
          {slide.hasCaptions && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="be-wrap w-full flex flex-col items-center md:items-start lg:pl-[50%]">
                <div
                  className="bg-black/90 text-white font-extrabold uppercase px-5 py-2.5 text-2xl md:text-3xl lg:text-[40px] leading-tight mb-2 tracking-wide shadow-2xl animate-fadeIn"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  Complete supply
                </div>
                <div
                  className="bg-black/90 text-white font-extrabold uppercase px-5 py-2.5 text-2xl md:text-3xl lg:text-[40px] leading-tight tracking-wide shadow-2xl animate-fadeIn md:ml-10"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  chain solution
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Solo Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-[#ed1c24] text-white flex items-center justify-center transition-all duration-200 shadow-lg focus:outline-none"
        aria-label="Previous Slide"
      >
        <svg className="w-6 h-6 transform -translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-[#ed1c24] text-white flex items-center justify-center transition-all duration-200 shadow-lg focus:outline-none"
        aria-label="Next Slide"
      >
        <svg className="w-6 h-6 transform translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Bullet Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 focus:outline-none ${
              index === currentSlide
                ? 'bg-[#ed1c24] ring-2 ring-white scale-110'
                : 'bg-white/60 hover:bg-white'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
