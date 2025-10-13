import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import { format } from "date-fns";
import { ChevronRight } from "lucide-react";

export default function SermonCard({ sermon }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      {sermon.image && (
        <Link href={`/sermons/${sermon.slug.current}`}>
          <img
            src={urlFor(sermon.image).width(400).height(250).url()}
            alt={sermon.title}
            className="w-full h-48 object-cover"
          />
        </Link>
      )}
      <div className="p-6">
        <p className="text-sm text-red-700 font-semibold mb-2">
          {sermon.series || "SUNDAY SERVICE"}
        </p>
        <Link href={`/sermons/${sermon.slug.current}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-red-700">
            {sermon.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4">
          {sermon.pastor} • {format(new Date(sermon.date), "MMMM d, yyyy")}
        </p>
        {sermon.scripture && (
          <p className="text-sm text-gray-500 mb-4">{sermon.scripture}</p>
        )}
        <Link
          href={`/sermons/${sermon.slug.current}`}
          className="text-red-700 font-semibold hover:text-red-800 flex items-center gap-2"
        >
          Listen Now
          <ChevronRight size={18} />
        </Link>
      </div>
    </div>
  );
}
