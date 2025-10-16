"use client";
import { useEffect, useRef, useState } from "react";
import { Users, Globe, Calendar, Heart } from "lucide-react";

export default function ImpactStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    members: 0,
    countries: 0,
    services: 0,
    lives: 0,
  });
  const sectionRef = useRef(null);

  const stats = [
    {
      id: "members",
      icon: Users,
      target: 10000,
      suffix: "+",
      label: "Active Members",
      duration: 2000,
    },
    {
      id: "countries",
      icon: Globe,
      target: 25,
      suffix: "+",
      label: "Countries Reached",
      duration: 1500,
    },
    {
      id: "services",
      icon: Calendar,
      target: 156,
      suffix: "",
      label: "Weekly Services",
      duration: 1800,
    },
    {
      id: "lives",
      icon: Heart,
      target: 5000,
      suffix: "+",
      label: "Lives Transformed",
      duration: 2000,
    },
  ];

  // Intersection Observer to trigger animation when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // Animate counting when visible
  useEffect(() => {
    if (!isVisible) return;

    stats.forEach((stat) => {
      const duration = stat.duration;
      const steps = 60;
      const increment = stat.target / steps;
      const stepDuration = duration / steps;
      let currentCount = 0;

      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.target) {
          currentCount = stat.target;
          clearInterval(timer);
        }
        setCounts((prev) => ({
          ...prev,
          [stat.id]: Math.floor(currentCount),
        }));
      }, stepDuration);

      return () => clearInterval(timer);
    });
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 overflow-hidden"
    >
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        {/* Main Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Global Impact Through Faith
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white text-opacity-90 mb-16 max-w-3xl mx-auto">
          Witnessing God&apos;s power transform lives across nations
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="transform transition-all duration-500 hover:scale-105"
                style={{
                  animation: isVisible
                    ? `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                    : "none",
                }}
              >
                {/* Icon Circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Icon
                      className="w-12 h-12 text-yellow-300"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>

                {/* Number */}
                <div className="text-5xl md:text-6xl font-bold text-yellow-300 mb-3">
                  {counts[stat.id].toLocaleString()}
                  {stat.suffix}
                </div>

                {/* Label */}
                <p className="text-xl text-white font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <p className="text-xl md:text-2xl text-white font-medium mb-8">
            Be part of this global movement of faith, prayer, and transformation
          </p>
          <button className="bg-white text-purple-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 hover:text-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Join the Movement
          </button>
        </div>
      </div>

      {/* CSS for fade in animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
