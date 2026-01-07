import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import SoleDistributors from '@/components/SoleDistributors'
import OtherProducts from '@/components/OtherProducts'
import AboutSection from '@/components/AboutSection'
import RegionalSections from '@/components/RegionalSections'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProducts />
      <SoleDistributors />
      <OtherProducts />
      <AboutSection />
      <RegionalSections />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

