'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on page change
  useEffect(() => {
    setMobileMenuOpen(false)
    setSearchOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  const isAboutActive = pathname === '/about-us' || pathname === '/group-companies'
  const isProductsActive = pathname === '/sole-distributor' || pathname === '/products' || pathname === '/other-products'

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 border-b border-gray-100 shadow-sm">
      <div className="be-wrap">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-[96px]' : 'h-[124px]'
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <img
                src="/images/header_logo.png"
                alt="Belgium Oil Solutions"
                className={`transition-all duration-300 w-auto object-contain ${
                  isScrolled ? 'max-h-[70px]' : 'max-h-[90px]'
                }`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {/* Home */}
            <Link
              href="/"
              className={`text-[13px] font-bold tracking-wide uppercase transition-colors duration-200 ${
                pathname === '/' ? 'text-[#ed1c24]' : 'text-[#222222] hover:text-[#ed1c24]'
              }`}
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className={`text-[13px] font-bold tracking-wide uppercase flex items-center gap-1 transition-colors duration-200 py-6 ${
                  isAboutActive ? 'text-[#ed1c24]' : 'text-[#222222] group-hover:text-[#ed1c24]'
                }`}
              >
                About Us
                <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`absolute top-full left-0 w-52 bg-white shadow-xl border border-gray-100 rounded-sm py-2 transition-all duration-200 transform z-50 ${
                  openDropdown === 'about'
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <Link
                  href="/about-us"
                  className={`block px-5 py-2.5 text-[13px] font-semibold transition-colors duration-150 ${
                    pathname === '/about-us'
                      ? 'bg-[#ed1c24] text-white'
                      : 'text-[#444444] hover:bg-[#ed1c24] hover:text-white'
                  }`}
                >
                  Company Profile
                </Link>
                <Link
                  href="/group-companies"
                  className={`block px-5 py-2.5 text-[13px] font-semibold transition-colors duration-150 ${
                    pathname === '/group-companies'
                      ? 'bg-[#ed1c24] text-white'
                      : 'text-[#444444] hover:bg-[#ed1c24] hover:text-white'
                  }`}
                >
                  Group Companies
                </Link>
              </div>
            </div>

            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenDropdown('products')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className={`text-[13px] font-bold tracking-wide uppercase flex items-center gap-1 transition-colors duration-200 py-6 ${
                  isProductsActive ? 'text-[#ed1c24]' : 'text-[#222222] group-hover:text-[#ed1c24]'
                }`}
              >
                Products
                <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`absolute top-full left-0 w-52 bg-white shadow-xl border border-gray-100 rounded-sm py-2 transition-all duration-200 transform z-50 ${
                  openDropdown === 'products'
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <Link
                  href="/sole-distributor"
                  className={`block px-5 py-2.5 text-[13px] font-semibold transition-colors duration-150 ${
                    pathname === '/sole-distributor'
                      ? 'bg-[#ed1c24] text-white'
                      : 'text-[#444444] hover:bg-[#ed1c24] hover:text-white'
                  }`}
                >
                  Sole Distributor
                </Link>
                <Link
                  href="/products"
                  className={`block px-5 py-2.5 text-[13px] font-semibold transition-colors duration-150 ${
                    pathname === '/products'
                      ? 'bg-[#ed1c24] text-white'
                      : 'text-[#444444] hover:bg-[#ed1c24] hover:text-white'
                  }`}
                >
                  Products We Deal
                </Link>
                <Link
                  href="/other-products"
                  className={`block px-5 py-2.5 text-[13px] font-semibold transition-colors duration-150 ${
                    pathname === '/other-products'
                      ? 'bg-[#ed1c24] text-white'
                      : 'text-[#444444] hover:bg-[#ed1c24] hover:text-white'
                  }`}
                >
                  We Fabricate
                </Link>
              </div>
            </div>

            {/* Gallery */}
            <Link
              href="/gallery"
              className={`text-[13px] font-bold tracking-wide uppercase transition-colors duration-200 ${
                pathname === '/gallery' ? 'text-[#ed1c24]' : 'text-[#222222] hover:text-[#ed1c24]'
              }`}
            >
              Gallery
            </Link>

            {/* News/Media */}
            <Link
              href="/news-media"
              className={`text-[13px] font-bold tracking-wide uppercase transition-colors duration-200 ${
                pathname === '/news-media' ? 'text-[#ed1c24]' : 'text-[#222222] hover:text-[#ed1c24]'
              }`}
            >
              News/Media
            </Link>

            {/* Contact Us */}
            <Link
              href="/contact-us"
              className={`text-[13px] font-bold tracking-wide uppercase transition-colors duration-200 ${
                pathname === '/contact-us' ? 'text-[#ed1c24]' : 'text-[#222222] hover:text-[#ed1c24]'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Controls: Search & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            {/* Search Trigger */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-[#222222] hover:text-[#ed1c24] transition-colors focus:outline-none"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Search Box Popup */}
              {searchOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-white p-3 shadow-2xl rounded border border-gray-100 z-50 animate-fadeIn">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      if (searchQuery.trim()) {
                        window.location.href = `/products?s=${encodeURIComponent(searchQuery)}`
                      }
                    }}
                    className="flex items-center border border-gray-300 rounded overflow-hidden focus-within:border-[#ed1c24]"
                  >
                    <input
                      type="text"
                      placeholder="Search ..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-3 py-2 text-sm text-[#333] focus:outline-none"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="bg-[#ed1c24] text-white px-3 py-2 hover:bg-[#c4131a] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#222222] hover:text-[#ed1c24] transition-colors focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[500px] py-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="be-wrap flex flex-col space-y-1">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-2 px-3 text-sm font-bold uppercase transition-colors ${
              pathname === '/' ? 'text-[#ed1c24] bg-red-50' : 'text-[#222] hover:text-[#ed1c24]'
            }`}
          >
            Home
          </Link>

          {/* About Us Mobile Submenu */}
          <div>
            <div
              onClick={() => setMobileSubmenu(mobileSubmenu === 'about' ? null : 'about')}
              className="flex justify-between items-center py-2 px-3 text-sm font-bold uppercase text-[#222] cursor-pointer hover:text-[#ed1c24]"
            >
              <span>About Us</span>
              <svg
                className={`w-4 h-4 transition-transform ${mobileSubmenu === 'about' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {mobileSubmenu === 'about' && (
              <div className="pl-6 bg-gray-50 py-1 space-y-1">
                <Link
                  href="/about-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-1.5 px-3 text-xs font-semibold ${
                    pathname === '/about-us' ? 'text-[#ed1c24]' : 'text-[#555] hover:text-[#ed1c24]'
                  }`}
                >
                  Company Profile
                </Link>
                <Link
                  href="/group-companies"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-1.5 px-3 text-xs font-semibold ${
                    pathname === '/group-companies' ? 'text-[#ed1c24]' : 'text-[#555] hover:text-[#ed1c24]'
                  }`}
                >
                  Group Companies
                </Link>
              </div>
            )}
          </div>

          {/* Products Mobile Submenu */}
          <div>
            <div
              onClick={() => setMobileSubmenu(mobileSubmenu === 'products' ? null : 'products')}
              className="flex justify-between items-center py-2 px-3 text-sm font-bold uppercase text-[#222] cursor-pointer hover:text-[#ed1c24]"
            >
              <span>Products</span>
              <svg
                className={`w-4 h-4 transition-transform ${mobileSubmenu === 'products' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {mobileSubmenu === 'products' && (
              <div className="pl-6 bg-gray-50 py-1 space-y-1">
                <Link
                  href="/sole-distributor"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-1.5 px-3 text-xs font-semibold ${
                    pathname === '/sole-distributor' ? 'text-[#ed1c24]' : 'text-[#555] hover:text-[#ed1c24]'
                  }`}
                >
                  Sole Distributor
                </Link>
                <Link
                  href="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-1.5 px-3 text-xs font-semibold ${
                    pathname === '/products' ? 'text-[#ed1c24]' : 'text-[#555] hover:text-[#ed1c24]'
                  }`}
                >
                  Products We Deal
                </Link>
                <Link
                  href="/other-products"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-1.5 px-3 text-xs font-semibold ${
                    pathname === '/other-products' ? 'text-[#ed1c24]' : 'text-[#555] hover:text-[#ed1c24]'
                  }`}
                >
                  We Fabricate
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-2 px-3 text-sm font-bold uppercase transition-colors ${
              pathname === '/gallery' ? 'text-[#ed1c24] bg-red-50' : 'text-[#222] hover:text-[#ed1c24]'
            }`}
          >
            Gallery
          </Link>

          <Link
            href="/news-media"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-2 px-3 text-sm font-bold uppercase transition-colors ${
              pathname === '/news-media' ? 'text-[#ed1c24] bg-red-50' : 'text-[#222] hover:text-[#ed1c24]'
            }`}
          >
            News/Media
          </Link>

          <Link
            href="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className={`py-2 px-3 text-sm font-bold uppercase transition-colors ${
              pathname === '/contact-us' ? 'text-[#ed1c24] bg-red-50' : 'text-[#222] hover:text-[#ed1c24]'
            }`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  )
}
