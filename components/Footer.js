import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer({ settings }) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">RPFMI</h3>
            <p className="text-gray-400 mb-4">
              {settings?.tagline || "The House of Restoration"}
            </p>
            <p className="text-gray-400">
              Transforming lives through the power of God&apos;s Word
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-red-500" />
                <span className="text-gray-400">
                  {settings?.contactInfo?.address || "Coon Rapids, Minnesota"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-red-500" />
                <span className="text-gray-400">
                  {settings?.contactInfo?.phone || "(000) 000-0000"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-red-500" />
                <span className="text-gray-400">
                  {settings?.contactInfo?.email || "info@rpfmi.com"}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {settings?.socialMedia?.facebook && (
                <a
                  href={settings.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-700 transition"
                >
                  <Facebook size={20} />
                </a>
              )}
              {settings?.socialMedia?.instagram && (
                <a
                  href={settings.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-700 transition"
                >
                  <Instagram size={20} />
                </a>
              )}
              {settings?.socialMedia?.youtube && (
                <a
                  href={settings.socialMedia.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-700 transition"
                >
                  <Youtube size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Redemption Praise Fire Ministry
            International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
