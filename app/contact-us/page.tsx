'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PageHero title="CONTACT US" breadcrumb="Home / Contact Us" />

      <section className="py-20 lg:py-24 bg-white">
        <div className="be-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 8 columns: Form */}
            <div className="lg:col-span-8">
              <h5 className="text-xl font-bold text-[#222222] mb-3 uppercase tracking-wide">
                Contact Us
              </h5>
              <p className="text-sm md:text-[14px] text-[#555555] leading-relaxed mb-8">
                We love to listen and we are eagerly waiting to talk to you regarding your project. Get in touch with us if you have any queries and we will get back to you as soon as possible.
              </p>

              {submitted ? (
                <div className="p-6 bg-green-50 border border-green-200 text-green-800 rounded-sm">
                  <h6 className="font-bold text-base mb-1">Thank you for your message!</h6>
                  <p className="text-sm">We have received your inquiry and will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-[#555555] uppercase tracking-wider mb-2">
                      Your Name <span className="text-[#ed1c24]">(required)</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#fbfbfb] border border-[#e0e0e0] focus:border-[#ed1c24] focus:bg-white text-sm text-[#333] transition-colors focus:outline-none rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#555555] uppercase tracking-wider mb-2">
                      Your Email <span className="text-[#ed1c24]">(required)</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#fbfbfb] border border-[#e0e0e0] focus:border-[#ed1c24] focus:bg-white text-sm text-[#333] transition-colors focus:outline-none rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#555555] uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-[#fbfbfb] border border-[#e0e0e0] focus:border-[#ed1c24] focus:bg-white text-sm text-[#333] transition-colors focus:outline-none rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#555555] uppercase tracking-wider mb-2">
                      Your Message
                    </label>
                    <textarea
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#fbfbfb] border border-[#e0e0e0] focus:border-[#ed1c24] focus:bg-white text-sm text-[#333] transition-colors focus:outline-none rounded-none resize-y"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-[#ed1c24] hover:bg-[#c4131a] text-white font-bold text-[13px] uppercase tracking-widest transition-colors duration-200 shadow-md"
                  >
                    Send
                  </button>
                </form>
              )}
            </div>

            {/* Right 4 columns: Contact Info */}
            <div className="lg:col-span-4 bg-gray-50/70 p-8 border border-gray-100 rounded-sm space-y-6">
              <div>
                <h5 className="text-base font-bold text-[#222222] mb-3 uppercase tracking-wide">
                  Get in Touch
                </h5>
                <div className="text-sm text-[#555555] leading-relaxed space-y-1">
                  <p className="font-semibold text-[#222]">Faizal Center Building</p>
                  <p>Abraq Khaitan, Street 70</p>
                  <p>Kuwait</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-[#555555]">
                  <strong className="text-[#222]">Muneer Thaha :</strong> Mobile 0065 6090 6007
                </p>
                <p className="text-sm text-[#555555] mt-1">
                  <strong className="text-[#222]">Email:</strong>{' '}
                  <a href="mailto:sales@nosksa.com" className="text-[#ed1c24] hover:underline">
                    sales@nosksa.com
                  </a>
                </p>
              </div>

              {/* Social Icons */}
              <div className="pt-4 border-t border-gray-200">
                <h6 className="text-xs font-bold text-[#222] uppercase tracking-wider mb-3">
                  Connect With Us
                </h6>
                <div className="flex items-center space-x-3">
                  <a
                    href="http://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-[#555] hover:bg-[#ed1c24] hover:text-white hover:border-[#ed1c24] transition-all"
                    aria-label="Facebook"
                  >
                    <span className="font-bold text-sm">f</span>
                  </a>
                  <a
                    href="http://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-[#555] hover:bg-[#ed1c24] hover:text-white hover:border-[#ed1c24] transition-all"
                    aria-label="Twitter"
                  >
                    <span className="font-bold text-sm">t</span>
                  </a>
                  <a
                    href="http://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-[#555] hover:bg-[#ed1c24] hover:text-white hover:border-[#ed1c24] transition-all"
                    aria-label="LinkedIn"
                  >
                    <span className="font-bold text-sm">in</span>
                  </a>
                  <a
                    href="http://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-[#555] hover:bg-[#ed1c24] hover:text-white hover:border-[#ed1c24] transition-all"
                    aria-label="YouTube"
                  >
                    <span className="font-bold text-sm">yt</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="w-full h-80 bg-gray-200 border-t border-b border-gray-300 relative">
        <iframe
          title="Kuwait Office Location"
          src="https://maps.google.com/maps?q=Abraq%20Khaitan,%20Kuwait&t=&z=14&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0 filter grayscale contrast-125"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}

