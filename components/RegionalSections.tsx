const regions = [
  {
    id: 1,
    name: 'Kuwait',
    flag: '🇰🇼',
    description: 'Our Kuwait office serves as the regional hub for the Middle East operations',
    address: 'Kuwait City, Kuwait',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80',
  },
  {
    id: 2,
    name: 'UAE',
    flag: '🇦🇪',
    description: 'Strategic presence in the UAE to serve our clients across the Emirates',
    address: 'Dubai, United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80',
  },
]

export default function RegionalSections() {
  return (
    <section id="regions" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary-dark">
          Our Regional Presence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {regions.map((region) => (
            <div
              key={region.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 bg-gray-200">
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 text-4xl">{region.flag}</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-secondary-dark">{region.name}</h3>
                <p className="text-gray-600 mb-4">{region.description}</p>
                <p className="text-primary-red font-semibold">{region.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

