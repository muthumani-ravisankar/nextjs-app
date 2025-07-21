export default function FeaturesHighlights() {
    const features = [
      { title: 'Speed & Performance', icon: '🚗', description: 'Experience unmatched power and acceleration in every Apex Motors vehicle.' },
      { title: 'Eco-friendly Technology', icon: '🌱', description: 'Innovative hybrid and electric technologies designed for sustainability.' },
      { title: 'Luxury Interiors', icon: '🛋️', description: 'Premium materials, cutting-edge design, and unparalleled comfort.' },
      { title: 'Advanced Safety', icon: '🛡️', description: 'Equipped with the latest in autonomous safety features and driver assistance.' }
    ]
  
    return (
      <section className="py-16 bg-gray-500">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Apex Motors?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  