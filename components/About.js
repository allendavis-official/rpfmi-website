export default function About({ settings }) {
  // Get about data from Sanity or use defaults
  const aboutData = settings?.about || {};

  // Default content in case nothing is supplied from Sanity
  const defaultContent = {
    title: "About RPFMI",
    paragraph1:
      "Redemption Praise Fire Ministry International is a Spirit-led ministry dedicated to winning souls, raising intercessors, and transforming lives through the power of prayer, praise, and prophetic activation.",
    paragraph2:
      "Founded with a heart for global impact, we serve communities from the USA to the world, bringing hope to the hopeless and demonstrating God's love through our actions.",
    primaryButton: {
      text: "Learn More About Us",
      link: "/about",
    },
    secondaryButton: {
      text: "Hope Foundation",
      link: "/hope-foundation",
    },
    image: "/images/about.png",
    imageAlt: "RPFMI Community",
    gradient: "from-purple-600 to-pink-600",
  };

  // Use Sanity data if available, otherwise use defaults
  const sectionEnabled = aboutData.enabled !== false;
  const title = aboutData.title || defaultContent.title;
  const paragraph1 = aboutData.paragraph1 || defaultContent.paragraph1;
  const paragraph2 = aboutData.paragraph2 || defaultContent.paragraph2;
  const primaryButton = aboutData.primaryButton || defaultContent.primaryButton;
  const secondaryButton =
    aboutData.secondaryButton || defaultContent.secondaryButton;
  const imageUrl = aboutData.image?.asset?.url || defaultContent.image;
  const imageAlt = aboutData.imageAlt || defaultContent.imageAlt;
  const gradient = aboutData.gradient || defaultContent.gradient;

  // Don't render if section is disabled
  if (!sectionEnabled) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              {title}
            </h2>
            <p className="text-lg text-gray-600 mb-4">{paragraph1}</p>
            <p className="text-lg text-gray-600 mb-6">{paragraph2}</p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={primaryButton.link}>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  {primaryButton.text}
                </button>
              </a>
              <a href={secondaryButton.link}>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background hover:text-accent-foreground h-10 px-4 py-2 border-purple-600 text-purple-600 hover:bg-purple-50">
                  {secondaryButton.text}
                </button>
              </a>
            </div>
          </div>

          {/* Image with Decorative Background */}
          <div className="relative">
            <div
              className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-lg transform rotate-3`}
            ></div>
            <img
              src={imageUrl}
              alt={imageAlt}
              className="relative z-10 w-full h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
