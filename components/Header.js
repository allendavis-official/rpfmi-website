"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="RPFMI Logo"
              width={50}
              height={50}
              className="mr-2"
            />
            <span className="text-2xl font-bold text-red-700">
              REDEMPTION PRAISE
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-red-700 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-red-700 font-medium"
            >
              About
            </Link>
            <Link
              href="/sermons"
              className="text-gray-700 hover:text-red-700 font-medium"
            >
              Sermons
            </Link>
            <Link
              href="/events"
              className="text-gray-700 hover:text-red-700 font-medium"
            >
              Events
            </Link>
            <Link
              href="/ministries"
              className="text-gray-700 hover:text-red-700 font-medium"
            >
              Ministries
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-red-700 font-medium"
            >
              Contact
            </Link>
          </nav>

          <Link
            href="/give"
            className="hidden md:block bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition"
          >
            Give
          </Link>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-gray-700 hover:text-red-700 font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-red-700 font-medium"
              >
                About
              </Link>
              <Link
                href="/sermons"
                className="text-gray-700 hover:text-red-700 font-medium"
              >
                Sermons
              </Link>
              <Link
                href="/events"
                className="text-gray-700 hover:text-red-700 font-medium"
              >
                Events
              </Link>
              <Link
                href="/ministries"
                className="text-gray-700 hover:text-red-700 font-medium"
              >
                Ministries
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-red-700 font-medium"
              >
                Contact
              </Link>
              <Link
                href="/give"
                className="bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition text-center"
              >
                Give
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
