"use client";
import { useState } from "react";
import { Calendar, Users, Globe } from "lucide-react";

export default function ConferenceRegistrationForm({ onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    church: "",
    position: "",
    attendanceType: "",
    accommodation: "",
    dietary: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);

    // Close after 2 seconds
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Registration Successful!
        </h3>
        <p className="text-gray-600">
          We'll send you a confirmation email shortly.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Info Cards */}
      <div className="bg-purple-50 rounded-xl p-4 mb-6">
        <p className="text-center text-gray-700 mb-4">
          Join believers from around the world for this powerful gathering
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <Calendar className="w-6 h-6 text-purple-600 mx-auto mb-1" />
            <p className="text-sm font-semibold text-gray-900">Date</p>
            <p className="text-xs text-gray-600">TBA</p>
          </div>
          <div className="text-center">
            <Users className="w-6 h-6 text-purple-600 mx-auto mb-1" />
            <p className="text-sm font-semibold text-gray-900">
              Expected Attendees
            </p>
            <p className="text-xs text-gray-600">500+ Delegates</p>
          </div>
          <div className="text-center">
            <Globe className="w-6 h-6 text-purple-600 mx-auto mb-1" />
            <p className="text-sm font-semibold text-gray-900">Global Reach</p>
            <p className="text-xs text-gray-600">25+ Countries</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
        </div>

        {/* Contact Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
        </div>

        {/* Church/Organization Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="church"
              placeholder="Church/Organization"
              value={formData.church}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="text"
              name="position"
              placeholder="Position/Title"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
        </div>

        {/* Attendance Type */}
        <div>
          <select
            name="attendanceType"
            value={formData.attendanceType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-700"
          >
            <option value="">Attendance Type *</option>
            <option value="in-person">In-Person</option>
            <option value="virtual">Virtual</option>
            <option value="both">Both</option>
          </select>
        </div>

        {/* Accommodation Needs */}
        <div>
          <select
            name="accommodation"
            value={formData.accommodation}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent text-gray-700"
          >
            <option value="">Accommodation Needs</option>
            <option value="hotel">Hotel Accommodation</option>
            <option value="homestay">Homestay</option>
            <option value="none">None Required</option>
          </select>
        </div>

        {/* Dietary Restrictions */}
        <div>
          <textarea
            name="dietary"
            placeholder="Dietary restrictions or special meal requirements"
            value={formData.dietary}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Complete Registration"}
        </button>
      </form>
    </div>
  );
}
