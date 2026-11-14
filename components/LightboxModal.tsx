'use client'

import { useEffect } from 'react'

interface LightboxModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  title?: string
  onPrev?: () => void
  onNext?: () => void
}

export default function LightboxModal({
  isOpen,
  onClose,
  imageSrc,
  title,
  onPrev,
  onNext,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && onPrev) onPrev()
      if (e.key === 'ArrowRight' && onNext) onNext()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose, onPrev, onNext])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 select-none animate-fadeIn"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 text-white/80 hover:text-white p-2 text-3xl font-light z-50 focus:outline-none"
        aria-label="Close"
      >
        ×
      </button>

      {/* Prev Button */}
      {onPrev && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 z-50 focus:outline-none"
          aria-label="Previous image"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Next Button */}
      {onNext && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 z-50 focus:outline-none"
          aria-label="Next image"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Image Container */}
      <div
        className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt={title || 'Lightbox image'}
          className="max-w-full max-h-[80vh] object-contain rounded shadow-2xl"
        />
        {title && (
          <p className="text-white text-sm mt-3 tracking-wide text-center">
            {title}
          </p>
        )}
      </div>
    </div>
  )
}

