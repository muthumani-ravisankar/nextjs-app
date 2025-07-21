export default function Products() {
    const motors = [
        { name: 'Apex Veloname X', type: 'Sports Car', image: 'https://wallpaperaccess.com/full/13572209.jpg' },
        { name: 'Apex Terra R', type: 'SUV', image: 'https://wallpaperaccess.com/full/2503563.jpg' },
        { name: 'Apex Electra E', type: 'Electric Sedan', image: 'https://rxmechanic.com/wp-content/uploads/2022/10/Lucid-Air-Touring.jpg' },
        { name: 'Apex Phantom G', type: 'Luxury Coupe', image: 'https://cdn.luxatic.com/wp-content/uploads/2022/02/How-to-Find-The-Best-Luxury-Coupe-1536x1025.jpg' },
        { name: 'Apex Nova Z', type: 'Hybrid Crossover', image: 'https://img.freepik.com/premium-photo/urban-evolution-futuristic-hybrid-crossover-car-navigating-cityscape-with-precision_38013-6400.jpg' },
    ];
  
    return (
      <section className="py-16 bg-gray-700" id="motors">
        <div className="container mx-auto px-4">
          <p className="uppercase pt-10 text-center text-gray-800 dark:text-black font-black text-3xl">our products</p>
          <h2 className="text-center text-xl font-bold mb-12">Explore More  .</h2>
  
          <ul className="flex flex-wrap gap-6 justify-center">
            {motors.map((dest, index) => (
              <li
                key={index}
                className={`${
                  index < 2 ? 'w-full md:w-[48%]' : 'w-full md:w-[31%]'
                }`}
              >
                <a href="#" className="relative overflow-hidden rounded-lg group block">
                  <img
                    src={dest.image}
                    alt={`${dest.name}, ${dest.type}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 text-white z-10">
                    <p className="text-yellow-400 text-lg font-cursive">{dest.name}</p>
                    <h3 className="text-2xl font-bold">{dest.type}</h3>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  