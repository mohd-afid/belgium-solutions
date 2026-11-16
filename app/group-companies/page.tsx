import Header from '@/components/Header'
import PageHero from '@/components/PageHero'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const companies = [
  {
    id: 'kuwait',
    name: 'Belgium Oil Solutions (Kuwait)',
    image: '/images/kuwait_logo.png',
    address: 'Shuwaikh Industrial Area 3 road, Behind Canada Dry street, Tara Center - Block A, Bldg - 93 - Office - 08, Kuwait',
    tel: '+965 67722844',
    contactPerson: 'Contact: Raheem',
    email: 'info@boskw.com',
    website: 'www.boskwt.com',
    webUrl: 'https://www.boskwt.com',
  },
  {
    id: 'ksa',
    name: 'National Oil Solutions',
    image: '/images/pic3.jpg',
    address: 'P.O.Box : 3977, Dammam -31491, Kingdom of Saudi Arabia',
    tel: '+ 9663 8321929',
    fax: '+9663 83214118',
    email: 'sales@nosksa.com',
    website: 'www.nosksa.com',
    webUrl: 'http://www.nosksa.com',
  },
  {
    id: 'usa',
    name: 'National Oilfield Solutions',
    image: '/images/pic1.jpg',
    address: '18700 Trails End Road – The Woodland, Texas 77385, United State of America',
    tel: '+ (713) 992-7023',
    fax: '+(281) 520-4321',
    email: 'sales@nos-usa.com',
    website: 'www.nos-usa.com',
    webUrl: 'http://www.nos-usa.com',
  },
  {
    id: 'uae',
    name: 'National Oilfield Solutions FZE',
    image: '/images/pic4.jpg',
    address: 'P.O.Box: 42168, Hamriyah Free Zone, Sharjah, U.A.E',
    tel: '+ 971 43594045',
    email: 'info@nosuae.com',
    website: 'www.nosuae.com',
    webUrl: 'http://www.nosuae.com',
  },
  {
    id: 'bahrain',
    name: 'Suppliers for Petroleum Equipment',
    image: '/images/spe.jpg',
    address: 'Office number 4 . 4th Floor, Ola Tower- Sanabiz, Manama – Kingdom of Bahrain',
    contactPerson: 'Contact Hisham Hassan: +973 3344 6458',
    email: 'hisham.hassan@nosksa.com',
  },
]

export default function GroupCompaniesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PageHero title="GROUP OF COMPANIES" breadcrumb="Home / About Us / Group Companies" />

      <section className="py-20 lg:py-24 bg-white">
        <div className="be-wrap">
          <div className="space-y-16 max-w-4xl mx-auto">
            {companies.map((comp, idx) => (
              <div
                key={comp.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-gray-100 pb-12 last:border-b-0"
              >
                {/* Logo */}
                <div className="flex justify-center md:justify-end">
                  <div className="p-4 border border-gray-100 shadow-sm rounded-sm bg-white hover:shadow-md transition-shadow">
                    <img
                      src={comp.image}
                      alt={comp.name}
                      className="max-h-24 w-auto object-contain"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="text-left text-[#555555] text-sm md:text-[14px] leading-relaxed space-y-1.5 pl-0 md:pl-4">
                  <h4 className="text-base md:text-lg font-bold text-[#222222] mb-2">
                    {comp.name}
                  </h4>
                  <p>{comp.address}</p>
                  {comp.tel && (
                    <p>
                      <span className="font-semibold text-[#333]">Tel:</span> {comp.tel}
                      {comp.fax && <>, <span className="font-semibold text-[#333]">Fax:</span> {comp.fax}</>}
                    </p>
                  )}
                  {comp.contactPerson && (
                    <p className="font-medium text-[#333]">{comp.contactPerson}</p>
                  )}
                  {comp.email && (
                    <p>
                      <span className="font-semibold text-[#333]">Email:</span>{' '}
                      <a href={`mailto:${comp.email}`} className="text-[#ed1c24] hover:underline">
                        {comp.email}
                      </a>
                    </p>
                  )}
                  {comp.website && (
                    <p>
                      <span className="font-semibold text-[#333]">Website:</span>{' '}
                      <a
                        href={comp.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#ed1c24] hover:underline"
                      >
                        {comp.website}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}

