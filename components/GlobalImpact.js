"use client";

import { useEffect, useRef, useState } from "react";

export default function GlobalImpact({ settings }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Get global impact data from Sanity or use defaults
  const globalImpact = settings?.globalImpact || {};

  // Default content in case nothing is supplied from Sanity
  const defaultStats = [
    {
      icon: "users",
      number: 10000,
      label: "Active Members",
      suffix: "+",
    },
    {
      icon: "globe",
      number: 25,
      label: "Countries Reached",
      suffix: "+",
    },
    {
      icon: "calendar",
      number: 156,
      label: "Weekly Services",
      suffix: "",
    },
    {
      icon: "heart",
      number: 5000,
      label: "Lives Transformed",
      suffix: "+",
    },
  ];

  // Use Sanity data if available, otherwise use defaults
  const sectionEnabled = globalImpact.enabled !== false;
  const title = globalImpact.title || "Global Impact Through Faith";
  const subtitle =
    globalImpact.subtitle ||
    "Witnessing God's power transform lives across nations";
  const footerText =
    globalImpact.footerText ||
    "Be part of this global movement of faith, prayer, and transformation";
  const stats = globalImpact.stats || defaultStats;

  // Background gradient colors with safe defaults
  const fromColor = globalImpact.backgroundGradient?.fromColor || "purple";
  const toColor = globalImpact.backgroundGradient?.toColor || "pink";

  // Animation settings
  const animationDuration = globalImpact.animationSettings?.duration || 2000;
  const staggerDelay = globalImpact.animationSettings?.staggerDelay || 200;

  // Fixed gradient classes - use inline styles instead of dynamic Tailwind classes
  const gradientStyles = {
    purple: { from: "from-purple-600", to: "to-pink-600" },
    blue: { from: "from-blue-600", to: "to-purple-600" },
    red: { from: "from-red-600", to: "to-orange-600" },
    green: { from: "from-green-600", to: "to-teal-600" },
    indigo: { from: "from-indigo-600", to: "to-purple-600" },
    pink: { from: "from-pink-600", to: "to-red-600" },
    orange: { from: "from-orange-600", to: "to-red-600" },
    teal: { from: "from-teal-600", to: "to-blue-600" },
  };

  // Use inline styles for gradient to avoid dynamic class issues
  const getGradientClass = () => {
    const gradient = gradientStyles[fromColor] || gradientStyles.purple;
    return `bg-gradient-to-r ${gradient.from} ${gradient.to}`;
  };

  // SVG Icons mapping
  const iconComponents = {
    users: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-users h-8 w-8 sm:h-12 sm:w-12 mx-auto text-yellow-300"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    globe: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-globe h-8 w-8 sm:h-12 sm:w-12 mx-auto text-yellow-300"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
        <path d="M2 12h20"></path>
      </svg>
    ),
    calendar: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-calendar h-8 w-8 sm:h-12 sm:w-12 mx-auto text-yellow-300"
      >
        <path d="M8 2v4"></path>
        <path d="M16 2v4"></path>
        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
        <path d="M3 10h18"></path>
      </svg>
    ),
    heart: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-heart h-8 w-8 sm:h-12 sm:w-12 mx-auto text-yellow-300"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    ),
    church: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-church h-8 w-8 sm:h-12 sm:w-12 mx-auto text-yellow-300"
      >
        <path d="M18 7a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v15h8v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h8V7a1 1 0 0 0-1-1Z"></path>
        <line x1="12" y1="7" x2="12" y2="4"></line>
        <line x1="15" y1="4" x2="9" y2="4"></line>
      </svg>
    ),
    prayer: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-pray h-8 w-8 sm:h-12 sm:w-12 mx-auto text-yellow-300"
      >
        <path d="M12 5a3 3 0 1 0-3 3"></path>
        <path d="m15 16-2.5 5L10 16l-2.93 1.41A1 1 0 0 1 5 16.62V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v11.62a1 1 0 0 1-2.07.79L15 16Z"></path>
      </svg>
    ),
    bible: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-book-open h-8 w-8 sm:h-12 sm:w-12 mx-auto text-yellow-300"
      >
        <path d="M12 7v14"></path>
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3H3Z"></path>
      </svg>
    ),
    hands: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-hand-heart h-8 w-8 sm:h-12 sm:w-12 mx-auto text-yellow-300"
      >
        <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"></path>
        <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path>
        <path d="m2 15 6 6"></path>
        <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"></path>
      </svg>
    ),
  };

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Don't render if section is disabled
  if (!sectionEnabled) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className={`py-16 ${getGradientClass()} text-white relative overflow-hidden`}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group transition-all duration-700 opacity-100 transform translate-y-0"
            >
              {/* Icon Container */}
              <div className="bg-white/20 backdrop-blur-md rounded-full p-6 w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {iconComponents[stat.icon] || iconComponents.users}
              </div>

              {/* Animated Number */}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-yellow-300">
                <Counter
                  end={stat.number}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                  duration={animationDuration}
                  delay={index * staggerDelay}
                />
              </div>

              {/* Label */}
              <div className="text-sm sm:text-base lg:text-lg text-purple-100 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center mt-16">
          <p className="text-lg sm:text-xl text-purple-100 mb-6">
            {footerText}
          </p>
        </div>
      </div>
    </section>
  );
}

// Counter Component
function Counter({ end, suffix = "", isVisible, duration = 2000, delay = 0 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true);

        let startTime = null;
        const animateCount = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);

          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentCount = Math.floor(easeOutQuart * end);

          setCount(currentCount);

          if (progress < 1) {
            requestAnimationFrame(animateCount);
          }
        };

        requestAnimationFrame(animateCount);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, hasAnimated, end, duration, delay]);

  // Format number with commas
  const formattedCount = count.toLocaleString();

  return (
    <span>
      {formattedCount}
      {suffix}
    </span>
  );
}
