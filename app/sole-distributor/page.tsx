import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const soleDistributors = [
  {
    id: 1,
    name: 'Safeguard Technology',
    image: '/images/p1-300x171.jpg',
    url: 'http://www.safeguard-technology.com/',
  },
  {
    id: 2,
    name: 'Pipe Float',
    image: '/images/p2-300x171.jpg',
    url: 'http://pipefloat.com/',
  },
  {
    id: 3,
    name: 'Ciglow',
    image: '/images/p7-300x171.jpg',
    url: 'http://www.ciglow.co.uk/',
  },
  {
    id: 4,
    name: 'HDI Gauges',
    image: '/images/p6-300x171.jpg',
    url: 'http://hdigauges.com/',
  },
  {
    id: 5,
    name: 'American Completion Tools',
    image: '/images/p3-300x171.jpg',
    url: 'http://americancompletiontools.com/',
  },
  {
    id: 6,
    name: 'Leader Coating',
    image: '/images/p8-300x171.jpg',
    url: '/images/p8.jpg',
  },
  {
    id: 7,
    name: 'AMC',
    image: '/images/amc_logo-300x171.jpg',
  },
  {
    id: 8,
    name: 'FIS Chemicals',
    image: '/images/d7.jpg',
    url: 'http://www.fischem.co.uk/',
  },
  {
    id: 9,
    name: 'Wilden',
    image: '/images/wilden-300x171.jpg',
    url: 'http://www.fischem.co.uk/',
  },
  {
    id: 10,
    name: 'Climax',
    image: '/images/climax_logo-300x171.jpg',
  },
  {
    id: 11,
    name: 'Specialized Industrial Tools',
    image: '/images/p9-300x171-300x171.jpg',
  },
  {
    id: 12,
    name: 'Heavy Duty Pipe Clamps',
    image: '/images/heavy_duty_pipe_clamps1-300x171.jpg',
  },
]

export default function SoleDistributorPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PageHero title="SOLE DISTRIBUTOR" breadcrumb="Home / Products / Sole Distributor" />

      <section className="py-20 lg:py-24 bg-white">
        <div className="be-wrap">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {soleDistributors.map((item) => {
              const Content = (
                <div className="bg-white border border-gray-100 rounded-sm p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center h-48 group">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )

              return item.url ? (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                >
                  {Content}
                </a>
              ) : (
                <div key={item.id}>{Content}</div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}

