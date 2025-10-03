import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const events = [
  {
    title: "Speaking Engagement – Maumee, OH",
    date: "August 17, 2025",
    place: "St. Paul's Lutheran Church",
    blurb: "10:30 AM",
    videos: [
      "https://res.cloudinary.com/dzofduj2h/video/upload/v1759444840/video1_fmo9kw.mp4",
      "https://res.cloudinary.com/dzofduj2h/video/upload/v1759444558/video2_o1apiw.mp4",
      "https://res.cloudinary.com/dzofduj2h/video/upload/v1759444835/video3_pjspum.mp4",
      "https://res.cloudinary.com/dzofduj2h/video/upload/v1759444269/video4_pvvfkg.mp4",
      "https://res.cloudinary.com/dzofduj2h/video/upload/v1759444236/video5_sir79n.mp4",
    ],
  },
];

export default function UpcomingEventsCarousel() {
  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Past & Upcoming Events
      </h2>

      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation
        loop
        className="max-w-6xl mx-auto"
      >
        {events.map((ev) => (
          <SwiperSlide key={ev.title}>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 rounded-2xl shadow-xl p-8 text-center max-w-6xl mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {ev.title}
              </h3>
              <p className="text-gray-300 mb-1">📅 {ev.date}</p>
              <p className="text-gray-300 mb-3">📍 {ev.place}</p>
              <p className="text-gray-200 italic">{ev.blurb}</p>

              {/* Local Videos */}
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                {ev.videos?.map((vid, i) => (
                  <video
                    key={i}
                    controls
                    className="w-full sm:w-80 md:w-96 h-48 md:h-56 rounded-xl border border-gray-500"
                  >
                    <source src={vid} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
