import Link from "next/link";
import { client } from "@/lib/sanity";
import { sermonsQuery, eventsQuery, settingsQuery } from "@/lib/queries";
import SermonCard from "@/components/SermonCard";
import EventCard from "@/components/EventCard";
import Hero from "@/components/Hero";
import { Clock, ChevronRight } from "lucide-react";
import settings from "@/sanity/schemas/settings";

async function getHomeData() {
  try {
    const [sermons, events, settings] = await Promise.all([
      client.fetch(sermonsQuery),
      client.fetch(eventsQuery),
      client.fetch(settingsQuery),
    ]);

    return {
      sermons: sermons?.slice(0, 3) || [],
      events: events?.slice(0, 2) || [],
      settings: settings || null,
    };
  } catch (error) {
    console.error("Error fetching home data:", error);
    return {
      sermons: [],
      events: [],
      settings: null,
    };
  }
}

export default async function HomePage() {
  const { sermons, events, settings } = await getHomeData();

  // Default service times if not set in Sanity
  const serviceTimes = settings?.serviceTimes || [
    { service: "Sunday Service", day: "Sunday", time: "10:00 AM - 12:30 PM" },
    { service: "Bible Study", day: "Wednesday", time: "7:00 PM" },
    { service: "Prayer Meeting", day: "Friday", time: "6:00 PM" },
  ];

  // Default hero section if not set in Sanity
  const heroData = settings?.heroSection || {
    title: "Redemption Praise Fire Ministry",
    subtitle:
      "The House of Restoration - Join us as we experience God together",
    buttons: [
      { text: "Join the Movement", link: "/contact", style: "primary" },
      { text: "Donate Now", link: "/give", style: "secondary" },
      { text: "Watch Live", link: "#", style: "accent" },
    ],
    overlay: {
      enabled: true,
      color: "red",
      opacity: 70,
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Banner */}
      {settings?.announcementBanner?.enabled && (
        <div className="bg-red-700 text-white py-3 px-4 text-center">
          <p className="text-sm md:text-base">
            {settings.announcementBanner.message}
            {settings.announcementBanner.link && (
              <a
                href={settings.announcementBanner.link}
                className="ml-2 underline font-semibold hover:text-red-100"
              >
                Learn More →
              </a>
            )}
          </p>
        </div>
      )}

      {/* Dynamic Hero Section */}
      <Hero heroData={heroData} />

      {/* Service Times */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {serviceTimes.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
              >
                <Clock className="w-12 h-12 text-red-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.service}</h3>
                <p className="text-gray-600 font-medium">{service.day}</p>
                <p className="text-gray-600">{service.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to RPFMI
            </h2>
            <div className="w-24 h-1 bg-red-700 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The House of Restoration
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                At Redemption Praise Fire Ministry International, we are
                committed to restoring lives through the power of God's Word and
                the presence of the Holy Spirit. We believe in creating a
                welcoming environment where everyone can encounter God's love
                and experience true transformation.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our mission is to equip believers to live victoriously, serve
                passionately, and impact their communities with the gospel of
                Jesus Christ. We are a family united in faith, devoted to
                worship, and dedicated to making disciples.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition"
              >
                Learn More About Us
                <ChevronRight size={20} />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-red-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <span className="text-6xl mb-4 block">🔥</span>
                <p className="text-red-700 text-lg font-semibold">
                  Add Church Image in Sanity CMS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Sermons */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Sermons
            </h2>
            <div className="w-24 h-1 bg-red-700 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Listen to our latest messages and be encouraged in your faith
              journey
            </p>
          </div>

          {sermons.length > 0 ? (
            <>
              <div className="grid md:grid-cols-3 gap-8">
                {sermons.map((sermon) => (
                  <SermonCard key={sermon._id} sermon={sermon} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/sermons"
                  className="inline-block bg-red-700 text-white px-8 py-3 rounded-lg hover:bg-red-800 transition font-semibold"
                >
                  View All Sermons
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="bg-white rounded-lg shadow-md p-12 max-w-md mx-auto">
                <span className="text-6xl mb-4 block">🎙️</span>
                <p className="text-gray-600 mb-4">
                  No sermons have been added yet. Add your first sermon in the
                  Sanity CMS.
                </p>
                <a
                  href={`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.sanity.studio`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition"
                >
                  Go to CMS
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <div className="w-24 h-1 bg-red-700 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us for our upcoming events and special services
            </p>
          </div>

          {events.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 gap-8">
                {events.map((event) => (
                  <EventCard key={event._id} event={event} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/events"
                  className="inline-block bg-red-700 text-white px-8 py-3 rounded-lg hover:bg-red-800 transition font-semibold"
                >
                  View All Events
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="bg-white rounded-lg shadow-md p-12 max-w-md mx-auto">
                <span className="text-6xl mb-4 block">📅</span>
                <p className="text-gray-600">
                  No upcoming events at this time. Check back soon!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Ministries */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Ministries
            </h2>
            <div className="w-24 h-1 bg-red-700 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find your place to serve and grow in your faith
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Youth Ministry",
                icon: "👨‍👩‍👧‍👦",
                desc: "Building strong relationships and growing in faith together",
              },
              {
                name: "Women's Ministry",
                icon: "👩",
                desc: "Empowering women to live out their God-given purpose",
              },
              {
                name: "Men's Ministry",
                icon: "👨",
                desc: "Developing godly men who lead with integrity",
              },
              {
                name: "Children's Ministry",
                icon: "👶",
                desc: "Teaching children about God's love in fun ways",
              },
            ].map((ministry, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition cursor-pointer group"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition">
                  <span className="text-3xl">{ministry.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-700 transition">
                  {ministry.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{ministry.desc}</p>
                <Link
                  href="/ministries"
                  className="text-red-700 font-semibold hover:text-red-800 inline-flex items-center gap-1"
                >
                  Learn More
                  <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/ministries"
              className="inline-block bg-red-700 text-white px-8 py-3 rounded-lg hover:bg-red-800 transition font-semibold"
            >
              View All Ministries
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            We'd love to welcome you to our church family. Plan your first visit
            today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
            <Link
              href="/give"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-700 transition"
            >
              Give Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
