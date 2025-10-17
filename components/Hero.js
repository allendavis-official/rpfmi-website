import { client } from "@/lib/sanity";

// 🔹 SVG Icons Component
const FeatureIcons = {
  calendar: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-calendar h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-3 sm:mb-4 text-yellow-300"
    >
      <path d="M8 2v4"></path>
      <path d="M16 2v4"></path>
      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
      <path d="M3 10h18"></path>
    </svg>
  ),
  users: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
    </svg>
  ),
  globe: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
        clipRule="evenodd"
      />
    </svg>
  ),
  heart: (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clipRule="evenodd"
      />
    </svg>
  ),
  // Add more icons as needed
};

// 🔹 FeatureCard Component - MOVED BEFORE Hero component
function FeatureCard({
  icon,
  title,
  description,
  buttonText,
  buttonLink,
  isDonate = false,
}) {
  return (
    <div className="rounded-lg border shadow-sm bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
      <div className="p-4 sm:p-6 text-center">
        <div className="flex justify-center mb-3 text-yellow-300">
          {FeatureIcons[icon] || FeatureIcons.calendar}
        </div>
        <h3 className="text-base sm:text-lg font-semibold mb-2">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-200 mb-3 sm:mb-4">
          {description}
        </p>
        {isDonate ? (
          <a href={buttonLink || "/give"}>
            <button className="border h-9 rounded-md px-3 text-xs sm:text-sm bg-zinc-100 text-gray-700 hover:bg-white transition-all duration-300">
              {buttonText}
            </button>
          </a>
        ) : (
          <button className="border h-9 rounded-md px-3 text-xs sm:text-sm bg-zinc-100 text-gray-700 hover:bg-white transition-all duration-300">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

// 🔹 Main Hero Component
export default function Hero({ settings }) {
  const hero = settings?.heroSection || {};

  // ✅ Fallback defaults
  const mainTitle = hero.mainTitle || "";
  const highlightedTitle = hero.highlightedTitle || "Prayer, Praise & Power";
  const subtitle =
    hero.subtitle || "Join the Fire. Transform Nations. Experience God.";
  const buttons = hero.buttons || [
    { text: "Join the Movement", link: "/contact", style: "primary" },
    { text: "Donate Now", link: "/give", style: "secondary" },
    { text: "Register for Conference", link: "/events", style: "accent" },
  ];
  const featureCards = hero.featureCards || [
    {
      icon: "calendar",
      title: "Next Conference",
      description: "Join us for our upcoming global conference",
      buttonText: "Register Now",
    },
    {
      icon: "users",
      title: "Prayer Community",
      description: "Connect with believers worldwide",
      buttonText: "Join Prayer",
    },
    {
      icon: "globe",
      title: "Global Impact",
      description: "25+ countries, 10,000+ members served",
      buttonText: "Learn More",
    },
    {
      icon: "heart",
      title: "Hope Foundation",
      description: "Supporting homeless and families in need",
      buttonText: "Donate",
      isDonate: true,
    },
  ];

  const backgroundImage =
    hero.backgroundImage?.asset?.url || "/images/hero.png";

  const overlay =
    hero.overlay?.enabled !== false
      ? {
          color:
            hero.overlay?.color === "light"
              ? "rgba(255,255,255,"
              : hero.overlay?.color === "red"
                ? "rgba(239,68,68,"
                : hero.overlay?.color === "purple"
                  ? "rgba(147,51,234,"
                  : "rgba(0,0,0,",
          opacity: hero.overlay?.opacity ? hero.overlay.opacity / 100 : 0.6,
        }
      : null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      {/* Overlay */}
      {overlay && (
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: `${overlay.color}${overlay.opacity})`,
          }}
        ></div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-32 sm:pt-24 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          {mainTitle}
          <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent py-2 sm:py-4">
            {highlightedTitle}
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto px-2">
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-2">
          {buttons.map((btn, idx) => (
            <a key={idx} href={btn.link}>
              <button
                className={`inline-flex items-center justify-center gap-2 h-11 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  btn.style === "primary"
                    ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600"
                    : btn.style === "secondary"
                      ? "border-2 border-white bg-white hover:bg-white text-gray-900"
                      : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                }`}
              >
                {btn.text}
              </button>
            </a>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-2">
          {featureCards.map((card, i) => (
            <FeatureCard key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
