import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const events = [
  {
    title: "Speaking Engagement – Maumee, OH",
    date: "August 17, 2025",
    place: "St. Paul's Lutheran Church",
    blurb: "Join me at 8:30 & 10:30 AM",
  },
];

export default function UpcomingEventsCarousel() {
  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Upcoming Events</h2>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation
        loop
        className="max-w-xl mx-auto"
      >
        {events.map((ev) => (
          <SwiperSlide key={ev.title}>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 rounded-2xl shadow-xl p-8 text-center">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {ev.title}
              </h3>
              <p className="text-gray-300 mb-1">📅 {ev.date}</p>
              <p className="text-gray-300 mb-3">📍 {ev.place}</p>
              <p className="text-gray-200 italic">{ev.blurb}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
