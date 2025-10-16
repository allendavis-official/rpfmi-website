import Link from "next/link";
import { urlFor } from "@/lib/sanity";

export default function Hero({ heroData }) {
  if (!heroData) return null;

  const { backgroundImage, title, subtitle, buttons, overlay } = heroData;

  // Get overlay styles
  const getOverlayStyle = () => {
    if (!overlay?.enabled) return {};

    const colorMap = {
      dark: "0, 0, 0",
      light: "255, 255, 255",
      red: "185, 28, 28",
      purple: "126, 34, 206",
    };

    const rgb = colorMap[overlay.color] || colorMap.dark;
    const opacity = (overlay.opacity || 60) / 100;

    return {
      backgroundColor: `rgba(${rgb}, ${opacity})`,
    };
  };

  // Get button styles
  const getButtonStyle = (style) => {
    const styles = {
      primary:
        "bg-yellow-500 text-gray-900 hover:bg-yellow-400 border-yellow-500",
      secondary: "bg-white text-gray-900 hover:bg-gray-100 border-white",
      accent: "bg-purple-600 text-white hover:bg-purple-700 border-purple-600",
    };
    return styles[style] || styles.primary;
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[800px] flex items-center justify-center pb-32">
      {/* Background Image or Gradient */}
      {backgroundImage ? (
        <div className="absolute inset-0 z-0">
          <img
            src={urlFor(backgroundImage).width(1920).height(1080).url()}
            alt={title || "Hero background"}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-red-900 via-red-700 to-red-900" />
      )}

      {/* Overlay */}
      {overlay?.enabled && (
        <div className="absolute inset-0 z-10" style={getOverlayStyle()} />
      )}

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Main Title */}
        {title && (
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            {title}
          </h1>
        )}

        {/* Subtitle */}
        {subtitle && (
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}

        {/* Buttons */}
        {buttons && buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.link || "#"}
                className={`
                  px-8 py-3 rounded-full text-lg font-semibold 
                  transition-all duration-300 transform hover:scale-105
                  border-2 shadow-lg
                  ${getButtonStyle(button.style)}
                `}
              >
                {button.text}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Optional: Scroll indicator */}
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-white opacity-75"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
