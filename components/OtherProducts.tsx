const otherProducts = [
  {
    id: 1,
    name: 'Steel Pipes',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&q=80',
  },
  {
    id: 2,
    name: 'Welding Equipment',
    category: 'Tools',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80',
  },
  {
    id: 3,
    name: 'Tank Systems',
    category: 'Storage',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&q=80',
  },
  {
    id: 4,
    name: 'Control Systems',
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1581091870598-e05e8bb84b09?w=400&q=80',
  },
  {
    id: 5,
    name: 'Heavy Machinery',
    category: 'Equipment',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&q=80',
  },
  {
    id: 6,
    name: 'Industrial Hoses',
    category: 'Components',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80',
  },
]

export default function OtherProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-secondary-dark">
          Other Products We Deal
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Comprehensive range of industrial products and solutions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-9 h-48 bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-primary-red text-sm font-semibold">{product.category}</span>
                <h3 className="text-xl font-semibold mt-2 text-secondary-dark">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

