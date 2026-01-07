'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-12 h-12 bg-primary-red flex items-center justify-center text-white font-bold text-xl">
                B
              </div>
              <div className="w-12 h-12 bg-secondary-dark flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
            </div>
            <span className="text-xl font-bold text-secondary-dark ml-2">Belgium Solutions</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-secondary-dark hover:text-primary-red transition">Home</a>
            <a href="#products" className="text-secondary-dark hover:text-primary-red transition">Products</a>
            <a href="#distributors" className="text-secondary-dark hover:text-primary-red transition">Distributors</a>
            <a href="#about" className="text-secondary-dark hover:text-primary-red transition">About</a>
            <a href="#regions" className="text-secondary-dark hover:text-primary-red transition">Regions</a>
            <a href="#contact" className="text-secondary-dark hover:text-primary-red transition">Contact</a>
          </nav>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col space-y-1.5"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-secondary-dark transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-secondary-dark transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-secondary-dark transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-secondary-dark hover:text-primary-red transition" onClick={toggleMenu}>Home</a>
              <a href="#products" className="text-secondary-dark hover:text-primary-red transition" onClick={toggleMenu}>Products</a>
              <a href="#distributors" className="text-secondary-dark hover:text-primary-red transition" onClick={toggleMenu}>Distributors</a>
              <a href="#about" className="text-secondary-dark hover:text-primary-red transition" onClick={toggleMenu}>About</a>
              <a href="#regions" className="text-secondary-dark hover:text-primary-red transition" onClick={toggleMenu}>Regions</a>
              <a href="#contact" className="text-secondary-dark hover:text-primary-red transition" onClick={toggleMenu}>Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

