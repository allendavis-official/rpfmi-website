import { client } from "@/lib/sanity";
import { sermonsQuery } from "@/lib/queries";
import SermonCard from "@/components/SermonCard";

async function getSermons() {
  const sermons = await client.fetch(sermonsQuery);
  return sermons;
}

export default async function SermonsPage() {
  const sermons = await getSermons();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sermons</h1>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Listen to our latest messages and be encouraged in your faith
            journey
          </p>
        </div>

        {sermons && sermons.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {sermons.map((sermon) => (
              <SermonCard key={sermon._id} sermon={sermon} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No sermons available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
