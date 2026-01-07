export default function Footer() {
  return (
    <footer id="contact">
      {/* Red Banner Section */}
      <div className="bg-primary-red text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Belgium Solutions</h3>
            <p className="text-lg leading-relaxed">
              A complete Supply Chain Solution provider integrating each separate link in the chain. 
              We deliver excellence through high-quality products, strategic marketing, and 
              cost-effective services that exceed customer expectations.
            </p>
          </div>
        </div>
      </div>

      {/* Dark Gray Footer */}
      <div className="bg-secondary-gray text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Belgium Solutions. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition text-sm">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

