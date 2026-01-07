const products = [
  {
    id: 1,
    name: 'Industrial Valves',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&q=80',
    description: 'High-quality industrial valves for various applications',
  },
  {
    id: 2,
    name: 'Pipe Fittings',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80',
    description: 'Durable pipe fittings for industrial use',
  },
  {
    id: 3,
    name: 'Pumps & Compressors',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&q=80',
    description: 'Reliable pumping and compression solutions',
  },
  {
    id: 4,
    name: 'Safety Equipment',
    image: 'https://images.unsplash.com/photo-1581091870598-e05e8bb84b09?w=400&q=80',
    description: 'Comprehensive safety equipment range',
  },
]

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary-dark">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9 h-48 bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-secondary-dark">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

