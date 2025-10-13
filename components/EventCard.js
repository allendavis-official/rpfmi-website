import Link from "next/link";
import { format } from "date-fns";
import { Clock, MapPin } from "lucide-react";

export default function EventCard({ event }) {
  const eventDate = new Date(event.date);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-700">
      <div className="flex items-start gap-4">
        <div className="bg-red-100 rounded-lg p-4 text-center min-w-20">
          <p className="text-3xl font-bold text-red-700">
            {format(eventDate, "d")}
          </p>
          <p className="text-sm text-red-600">
            {format(eventDate, "MMM").toUpperCase()}
          </p>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {event.title}
          </h3>
          {event.time && (
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Clock size={16} />
              <span>{event.time}</span>
            </div>
          )}
          {event.location && (
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <MapPin size={16} />
              <span>{event.location}</span>
            </div>
          )}
          {event.description && (
            <p className="text-gray-600 mb-4">{event.description}</p>
          )}
          {event.registrationLink && (
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-700 font-semibold hover:text-red-800"
            >
              Register Now →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
