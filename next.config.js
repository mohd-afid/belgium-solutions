/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.boskwt.com', 'boskwt.com', 'images.unsplash.com', 'via.placeholder.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '1750' }],
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '2659' }],
        destination: '/group-companies',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '2706' }],
        destination: '/sole-distributor',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '2662' }],
        destination: '/products',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '2710' }],
        destination: '/other-products',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '2473' }],
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '2102' }],
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/',
        has: [{ type: 'query', key: 'page_id', value: '1538' }],
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
