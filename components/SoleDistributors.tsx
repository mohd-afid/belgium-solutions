const distributors = [
  {
    id: 1,
    name: 'TechCorp Industries',
    logo: 'https://via.placeholder.com/200x100/FF3333/FFFFFF?text=TechCorp',
  },
  {
    id: 2,
    name: 'Global Oil Solutions',
    logo: 'https://via.placeholder.com/200x100/2C2C2C/FFFFFF?text=Global+Oil',
  },
  {
    id: 3,
    name: 'Industrial Dynamics',
    logo: 'https://via.placeholder.com/200x100/FF3333/FFFFFF?text=Industrial',
  },
  {
    id: 4,
    name: 'PetroLink Systems',
    logo: 'https://via.placeholder.com/200x100/2C2C2C/FFFFFF?text=PetroLink',
  },
  {
    id: 5,
    name: 'EnergyMax Solutions',
    logo: 'https://via.placeholder.com/200x100/FF3333/FFFFFF?text=EnergyMax',
  },
  {
    id: 6,
    name: 'Prime Industrial',
    logo: 'https://via.placeholder.com/200x100/2C2C2C/FFFFFF?text=Prime',
  },
]

export default function SoleDistributors() {
  return (
    <section id="distributors" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-secondary-dark">
          Sole Distributor
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We proudly represent these leading brands as their exclusive distributor
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {distributors.map((distributor) => (
            <div
              key={distributor.id}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow flex items-center justify-center h-32"
            >
              <img
                src={distributor.logo}
                alt={distributor.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

