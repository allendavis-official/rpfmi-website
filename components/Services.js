export default function Services({ settings }) {
  // Get services data from Sanity or use defaults
  const servicesData = settings?.services || {};

  // Default services in case nothing is supplied from Sanity
  const defaultServices = [
    {
      title: "Sunday Service",
      description: "Thanksgiving Service every Sunday",
      time: "10:30 AM - 1:30 PM",
      image: "/images/service-1.png",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Night Vigil",
      description: "All-night prayer and worship",
      time: "Last Friday 10:00 PM - 6:00 AM",
      image: "/images/service-2.png",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Online Prayer",
      description: "Daily morning prayer via Zoom",
      time: "Mon-Fri 6:00 AM",
      image: "/images/service-3.png",
      gradient: "from-teal-500 to-blue-500",
    },
    {
      title: "Bible Study",
      description: "Weekly Bible study sessions",
      time: "Wednesday 7:00 PM - 9:00 PM",
      image: "/images/service-4.png",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  // Use Sanity data if available, otherwise use defaults
  const sectionEnabled = servicesData.enabled !== false;
  const title = servicesData.title || "Our Services";
  const subtitle =
    servicesData.subtitle ||
    "Join us for powerful worship, prayer, and spiritual growth throughout the week";
  const services = servicesData.servicesList || defaultServices;

  // Don't render if section is disabled
  if (!sectionEnabled) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Service Card Component
function ServiceCard({ service }) {
  // Handle both Sanity image objects and direct URLs
  const imageUrl = service.image?.asset?.url || service.image;

  return (
    <div className="rounded-lg text-card-foreground shadow-sm group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 overflow-hidden">
      {/* Gradient Header */}
      <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>

      <div className="p-6 text-center">
        {/* Image Container */}
        <div className="relative h-16 w-16 mx-auto mb-4 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-xs">No Image</span>
            </div>
          )}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20`}
          ></div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-3">{service.description}</p>
        <div
          className={`text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
        >
          {service.time}
        </div>
      </div>
    </div>
  );
}
