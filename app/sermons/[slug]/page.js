import { client, urlFor } from "@/lib/sanity";
import { sermonQuery } from "@/lib/queries";
import { format } from "date-fns";
import { Calendar, User, BookOpen } from "lucide-react";

async function getSermon(slug) {
  const sermon = await client.fetch(sermonQuery, { slug });
  return sermon;
}

export default async function SermonDetailPage({ params }) {
  const sermon = await getSermon(params.slug);

  if (!sermon) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Sermon not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {sermon.image && (
          <img
            src={urlFor(sermon.image).width(1200).height(600).url()}
            alt={sermon.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
        )}

        <div className="bg-white rounded-lg shadow-md p-8">
          {sermon.series && (
            <p className="text-sm text-red-700 font-semibold mb-2">
              {sermon.series}
            </p>
          )}

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {sermon.title}
          </h1>

          <div className="flex flex-wrap gap-6 mb-8 text-gray-600">
            <div className="flex items-center gap-2">
              <User size={20} className="text-red-700" />
              <span>{sermon.pastor}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={20} className="text-red-700" />
              <span>{format(new Date(sermon.date), "MMMM d, yyyy")}</span>
            </div>
            {sermon.scripture && (
              <div className="flex items-center gap-2">
                <BookOpen size={20} className="text-red-700" />
                <span>{sermon.scripture}</span>
              </div>
            )}
          </div>

          {sermon.description && (
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                {sermon.description}
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {sermon.audioUrl && (
              <a
                href={sermon.audioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition text-center font-semibold"
              >
                Listen to Audio
              </a>
            )}
            {sermon.videoUrl && (
              <a
                href={sermon.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition text-center font-semibold"
              >
                Watch Video
              </a>
            )}
          </div>

          {sermon.videoUrl && sermon.videoUrl.includes("youtube") && (
            <div className="aspect-video mb-8">
              <iframe
                className="w-full h-full rounded-lg"
                src={sermon.videoUrl.replace("watch?v=", "embed/")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
