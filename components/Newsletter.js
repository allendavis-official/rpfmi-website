"use client";

export default function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Newsletter form submitted");
    // You can add your form submission logic here
    // For example: send to an API, email service, etc.
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Stay Connected with RPFMI
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Join thousands worldwide receiving updates about conferences, prayer
            calls, and powerful testimonies
          </p>
        </div>

        {/* Newsletter Form */}
        <div className="max-w-md mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg border-0 animate-fade-in">
            {/* Form Header */}
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail h-6 w-6 text-purple-600 mr-2"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <h3 className="text-xl font-bold text-gray-800">
                Stay Connected
              </h3>
            </div>

            <p className="text-gray-600 text-center mb-4">
              Join thousands worldwide receiving updates about conferences,
              prayer calls, and testimonies!
            </p>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="email"
                className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full"
                placeholder="Enter your email address"
                required
              />
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 hover:scale-105"
                type="submit"
              >
                Join the Movement
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
