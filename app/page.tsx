import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SoleDistributors from '@/components/SoleDistributors'
import OtherProducts from '@/components/OtherProducts'
import RegionalSections from '@/components/RegionalSections'
import AboutSection from '@/components/AboutSection'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SoleDistributors />
      <OtherProducts />
      <RegionalSections />
      <AboutSection />
      <CallToAction />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
