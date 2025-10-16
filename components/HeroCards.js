"use client";
import { useState } from "react";
import { Calendar, Users, Globe, Heart } from "lucide-react";
import Modal from "./Modal";
import ConferenceRegistrationForm from "./ConferenceRegistrationForm";

export default function HeroCards() {
  const [activeModal, setActiveModal] = useState(null);

  const cards = [
    {
      id: "conference",
      icon: Calendar,
      title: "Next Conference",
      description: "Join us for our upcoming global conference",
      buttonText: "Register Now",
      modalTitle: "Global Conference Registration",
    },
    {
      id: "prayer",
      icon: Users,
      title: "Prayer Community",
      description: "Connect with believers worldwide",
      buttonText: "Join Prayer",
      modalTitle: "Join Prayer Community",
    },
    {
      id: "impact",
      icon: Globe,
      title: "Global Impact",
      description: "25+ countries, 10,000+ members served",
      buttonText: "Learn More",
      modalTitle: "Global Impact Initiative",
    },
    {
      id: "foundation",
      icon: Heart,
      title: "Hope Foundation",
      description: "Supporting homeless and families in need",
      buttonText: "Donate",
      modalTitle: "Hope Foundation Donation",
    },
  ];

  const openModal = (cardId) => {
    setActiveModal(cardId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const renderModalContent = (cardId) => {
    switch (cardId) {
      case "conference":
        return <ConferenceRegistrationForm onClose={closeModal} />;

      case "prayer":
        return (
          <div className="space-y-4">
            <p className="text-gray-600 mb-4">
              Join our global prayer community and connect with believers from
              around the world.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email Address *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <textarea
                placeholder="Prayer Requests (optional)"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Join Community
              </button>
            </form>
          </div>
        );

      case "impact":
        return (
          <div className="space-y-6">
            <p className="text-gray-600">
              Our ministry has reached over 25 countries with the gospel,
              impacting more than 10,000 lives through various programs and
              initiatives.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-purple-600">25+</p>
                <p className="text-sm text-gray-600">Countries Reached</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-purple-600">10,000+</p>
                <p className="text-sm text-gray-600">Lives Impacted</p>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email Address *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-700">
                <option value="">I want to learn more about...</option>
                <option value="missions">Mission Trips</option>
                <option value="volunteer">Volunteering</option>
                <option value="partner">Partnering with Us</option>
                <option value="general">General Information</option>
              </select>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Get More Information
              </button>
            </form>
          </div>
        );

      case "foundation":
        return (
          <div className="space-y-4">
            <p className="text-gray-600 mb-4">
              Your donation helps provide food, shelter, and support to homeless
              individuals and families in need.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-4">
              <button className="border-2 border-purple-600 text-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
                $25
              </button>
              <button className="border-2 border-purple-600 text-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
                $50
              </button>
              <button className="border-2 border-purple-600 text-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
                $100
              </button>
            </div>
            <form className="space-y-4">
              <input
                type="number"
                placeholder="Custom Amount"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Full Name *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email Address *"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Make Donation
              </button>
            </form>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="relative -mt-32 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-purple-600" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {card.description}
                  </p>

                  <button
                    onClick={() => openModal(card.id)}
                    className="w-full bg-white border-2 border-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition-all duration-300"
                  >
                    {card.buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modals */}
      {cards.map((card) => (
        <Modal
          key={card.id}
          isOpen={activeModal === card.id}
          onClose={closeModal}
          title={card.modalTitle}
        >
          {renderModalContent(card.id)}
        </Modal>
      ))}
    </>
  );
}
