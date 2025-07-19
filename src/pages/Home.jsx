
import ImageCard from "../components/ImageCard";
import ImageContainer from "../components/ImageContainer";
import UpcomingEventsCarousel from "../components/UpcomingEventsCarousel";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto font-custom text-gray-800 ">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 rounded-xl">
        <img
          alt="Scenic beach background"
          src="/images/beach2.jpg"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center "
        />
        {/* Overlay */}

        {/* Hero Content */}
        <div className="relative z-10 py-32 px-6 sm:px-12 text-center text-white"></div>
      </div>

      {/* ImageCard Section */}
      <div className="px-6 py-12 sm:py-16">
        <ImageCard />
      </div>

      {/* ImageContainer Section */}
      <div className="px-6 pb-20">
        <ImageContainer />
      </div>
      

      <div className="px-6 pb-24">
        <UpcomingEventsCarousel />
      </div>
{/* Current Promotions Section */}
      <section className="bg-gradient-to-b from-blue-50 via-white to-blue-100 py-12 px-6 rounded-3xl shadow-inner max-w-6xl mx-auto my-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 font-custom">
            Current Promotions
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Don’t miss these limited-time offers!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Promotion 1 */}
          <div
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              FREE SHIPPING
            </h3>
            <p className="text-gray-600 mb-4">
              Purchase a book now through August 31, 2025 and receive free shipping!
            </p>
            <a
              href="/book"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition"
              data-aos="fade-up"
            >
              Claim Offer
            </a>
          </div>

          {/* Promotion 2 */}
          <div
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Free Chapter Preview
            </h3>
            <p className="text-gray-600 mb-4">
              Sign up for our newsletter and receive a free downloadable chapter
              of <span className="font-semibold">Imperfect Happiness</span>.
            </p>
            <a
              href="/newsletter"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition"
            >
              Subscribe Now
            </a>
          </div>

          {/* Promotion 3 */}
          <div
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Book Club Bundle
            </h3>
            <p className="text-gray-600 mb-4">
              Hosting a book club? Get bulk discounts and a free virtual Q&A
              session with the author.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition"
            >
              Inquire Now
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
    </section>
  );
}
