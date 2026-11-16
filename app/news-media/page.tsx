import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const newsItems = [
  {
    id: 1,
    title: 'BOS Expands Operations and Regional Logistics Reach Across GCC',
    date: 'June 2018',
    category: 'Corporate Update',
    summary: 'Belgium Oil Solutions continues to bolster supply chain resilience and procurement liaisons across Kuwait, Saudi Arabia, UAE, and Bahrain to support onshore and offshore energy operations.',
  },
  {
    id: 2,
    title: 'Certified DNV 2.7-1 / EN 12079 Offshore Modules Production Milestone',
    date: 'April 2018',
    category: 'Fabrication',
    summary: 'Our fabrication facilities have successfully delivered customized batch mixer units, tool baskets, and skid-mounted pump modules meeting global offshore transport safety standards.',
  },
  {
    id: 3,
    title: 'Strategic Partnerships with Global Oilfield Tool Manufacturers',
    date: 'January 2018',
    category: 'Distribution',
    summary: 'Expanding our sole distributor portfolio with leading international manufacturers to provide premier engineering goods, valves, gauges, and safety equipment throughout the Middle East.',
  },
]

export default function NewsMediaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PageHero title="NEWS / MEDIA" breadcrumb="Home / News / Media" />

      <section className="py-20 lg:py-24 bg-white">
        <div className="be-wrap">
          <div className="max-w-4xl mx-auto space-y-10">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="bg-white border border-gray-100 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 text-xs uppercase font-bold tracking-wider text-[#888] mb-3">
                  <span className="text-[#ed1c24]">{item.category}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>

                <h3 className="text-xl font-bold text-[#222222] mb-3 hover:text-[#ed1c24] transition-colors cursor-pointer">
                  {item.title}
                </h3>

                <p className="text-sm text-[#555555] leading-relaxed">
                  {item.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}

