const services = [
  {
    title: 'Web Development',
    description: 'Custom websites built with the latest technologies to drive your online presence.',
    icon: '🌐', // You can replace this with an actual icon library (e.g., React Icons)
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive and visually stunning designs to enhance user experience.',
    icon: '🎨',
  },
  {
    title: 'Digital Marketing',
    description: 'Boost your brand with targeted strategies and analytics-driven campaigns.',
    icon: '📈',
  },
  {
    title: 'Consulting',
    description: 'Expert advice to help your business grow and thrive in the digital age.',
    icon: '🤝',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-[rgba(243,244,246,0.05)]">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-8">
          Our Services
        </h2>
        <p className="text-center text-gray-200 mb-12 max-w-2xl mx-auto">
          We offer a wide range of services to help you achieve your goals and grow your business online.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;