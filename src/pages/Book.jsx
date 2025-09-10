import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AboutTheBook() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => setIsExpanded(!isExpanded);
  const scrollRef = useRef(null);
  const [duration, setDuration] = useState(30); // faster default
   const [scrollWidth, setScrollWidth] = useState(0);
 

  const [reviews] = useState([
    {
      name: "Construction Worker - Treyvon",
      rating: 5,
      text: "Imperfect Happiness reminded me that real joy is found in pursuing God's purpose, not perfection. A must‑read!",
    },
    {
      name: "Law Enforcement - Larramie",
      rating: 5,
      text: "I have a young adult with special needs. IMPERFECT HAPPINESS is packed with common sense ideas which young people, parents and our country need. Terry's biblically-based tips for developing kids are brilliantly simple, positive and effective.",
    },
    {
      name: "Deacon - Dan",
      rating: 5,
      text: "It is one thing to know about God. It is another matter entirely to know God. Terry's book is a journey of what it is to come to know God deeply and personally, and to live that out in every aspect of life on this earth. After all, life on this earth should lead us to life with God in the Kingdom.",
    },
    {
      name: "Addiction Recovery - Scott",
      rating: 5,
      text: "If you think your life doesn't matter, God has a plan to deliver you hope, happiness and confidence. I recommend that you take the IMPERFECT HAPPINESS 30 day challenge - reading one chapter daily for thirty days. A great gift for someone struggling with life's circumstances!",
    },
    {
      name: "Corporate Executive - John",
      rating: 5,
      text: "IMPERFECT HAPPINESS is an entertaining and enlightening read that provides excellent insights and suggestions on how to handle the many issues life throws our way. Terry describes this journey in a clear and relatable manner. The tools and techniques Terry uses to view his setbacks in a positive and optimistic manner can be applied to anyone's unique life circumstances.",
    },
    {
      name: "New Christian - Brandon",
      rating: 5,
      text: "In a world filled with trouble, the IMPERFECT HAPPINESS platform of Prayer, Scripture, Values of Jesus and Music is the perfect way to begin my Christian journey. Showing how mistakes, failure and pain can lead us to Jesus is so beneficial.",
    },
    {
      name: "Cancer Patient - Rick",
      rating: 5,
      text: "IMPERFECT HAPPINESS is a riveting portrayal of the uncertainty of cancer particularly the emotional turmoil and continuous mind games. Great advice to build strength despite health care system and treatment challenges, while highlighting ways to stay attitude positive as you begin to build an entirely new life.",
    },
    {
      name: "Manager - Ashley",
      rating: 5,
      text: "The author's captivating approach of introducing an adventure story element or life challenge supported by Scripture, Traits and Values of Jesus, and Christian Music can help anyone live life well with God and His word.",
    },
    {
      name: "Business Leader - Scott",
      rating: 5,
      text: "IMPERFECT HAPPINESS is a truly inspirational memoir which makes common sense and relationships, more common.",
    },
  ]);

    useEffect(() => {
      if (scrollRef.current) {
        const totalWidth = scrollRef.current.scrollWidth / 2; // half because of duplicate
        setScrollWidth(totalWidth);
        setDuration(Math.max(totalWidth / 20, 100)); // adjust speed
      }
    }, [reviews]);

    const marqueeStyle = {
      display: "flex",
      flexWrap: "nowrap",
      animation: `scroll ${duration}s linear infinite`,
    };

    const keyframesStyle = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-${scrollWidth}px); }
    }
  `;

  const [form, setForm] = useState({ name: "", rating: 5, text: "" });
  const [pendingMessage, setPendingMessage] = useState("");
  const [preview, setPreview] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const StarRating = ({ count }) => (
    <div
      className="flex gap-0.5 text-yellow-400"
      aria-label={`${count} star rating`}
    >
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <span key={i}>{i < count ? "★" : "☆"}</span>
        ))}
    </div>
  );

  return (
    <section
      id="book"
      className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 text-gray-100 min-h-screen py-16 px-6 font-custom max-w-6xl mx-auto rounded-xl"
    >
      {/* Book Section */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <style>
            {`
  @keyframes glow-pulse {
    0%, 100% {
      box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
    }
    50% {
      box-shadow: 0 0 40px rgba(255, 215, 0, 0.9);
    }
  }
`}
          </style>

          <img
            src="/images/cover.jpg"
            alt="Book Cover"
            className="rounded-2xl w-full"
            style={{ animation: "glow-pulse 2s infinite" }}
          />

          <h2 className="text-blue-400 font-semibold mt-4 text-center hover:underline">
            Publisher:{" "}
            <Link
              to="https://christianfaithpublishing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              Christian Faith Publishing
            </Link>
          </h2>
          <h2 className="text-blue-400 font-semibold mt-4 text-center hover:underline">
            ISBN 979-8-89637-587-6
          </h2>
          <h2 className="text-blue-400 font-semibold mt-4 text-center hover:underline">
            Inspirational, Christian Living, Family, Personal Growth, Prayer,
            Bible Study
          </h2>
        </div>

        <div>
          <h2 className="text-4xl font-extrabold mb-6 text-gray-100">
            About the Book
          </h2>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              <span className="font-bold">IMPƎRFƎCT HAPPINESS</span> is a
              thought-provoking and encouraging story highlighting God's many
              resources to live our best life. Written during the author's 2+
              year cancer battle, readers will relate to his journey of life,
              family, faith, relationships, and resilience.
            </p>
            <p>
              Grounded in biblical principles and paired with proven business
              techniques, the book explores effective life skills and leadership
              practices such as The Caring Continuum (Philippians 2:4), In
              Front, Not Above (Matthew 20:26), Brilliant on the Basics (Psalm
              19:7), and 21 Steps to Being the Best Imperfect You (2 Timothy
              2:15).
            </p>
            <p>
              The author concludes by inviting readers to return our communities
              and nation to a new level of kindness and greatness by simply
              living The Bible, not just reading it.
              {!isExpanded && (
                <p>
                  {" "}
                  <span
                    className="inline text-blue-400 cursor-pointer ml-2 font-medium hover:underline"
                    onClick={handleToggle}
                  >
                    Read More
                  </span>
                </p>
              )}
            </p>
            {isExpanded && (
              <div className="space-y-4">
                <p>
                  Whether you're young, seeking God, a new follower of Christ,
                  or simply desiring a closer relationship with Jesus, this book
                  offers real-life applications and lessons born from the
                  author's own mistakes and victories. The book's pillars are
                  the Word of God, The Life of Jesus, Prayer, and Christian
                  Music.
                </p>
                <p>
                  <span className="font-bold">IMPƎRFƎCT HAPPINESS</span> offers
                  a Thirty-Day Devotional Challenge to help readers Pause &
                  Reflect on what truly matters in their own life.
                </p>
                <p>
                  The term "Imperfect Happiness" represents life for most of us
                  in our search for belonging, hope, purpose, happiness, and
                  contentment. The author's journey of expanding his own level
                  of Godly Wisdom
                  <span className="italic">
                    -our increased understanding of who God is and what he wants
                  </span>{" "}
                  is the primary theme of the book. The author demonstrates,
                  through life&#39;s peaks and valleys, or &quot;Imperfect
                  Happiness,&quot; that most things we want in life are better
                  when we choose to pursue Godly Wisdom.
                </p>
                <p>The book can be read multiple ways including:</p>
                <ul className="list-disc list-inside pl-4 space-y-1 text-gray-300">
                  <li>Thirty Bible Studies and a Glossary of Terms</li>
                  <li>
                    Life challenges by topic with supportive Music and Scripture
                    in 18 translations
                  </li>
                  <li>
                    Thirty-one authentic, bold prayers by common life
                    experiences
                  </li>
                  <li>
                    Ninety-eight Christian Songs highlighting The Bible and the
                    Life of Jesus.
                  </li>
                </ul>
                <button
                  onClick={handleToggle}
                  className="mt-2 text-blue-400 hover:underline font-medium"
                >
                  Read Less
                </button>
              </div>
            )}
          </div>
          <div className="mt-8 text-center">
            <p className="text-3xl font-bold text-white mb-4">$19.95</p>
            <p className="text-sm font-bold text-white mb-4">Plus Shipping</p>
            <a
              href="https://buy.stripe.com/7sY9AVecV1Lpfnla9hcjS00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition duration-300"
            >
              Pre-Order Now
            </a>
            <p className="text-lg font-bold text-blue-400 mt-4">
              Now Accepting Pre-Orders!
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 overflow-hidden">
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-100">
          What Readers are Saying
        </h3>

        {/* Desktop Instruction */}
        <p className="hidden md:block text-md font-bold text-white text-center underline">
          Hover over a review to read
        </p>

        {/* Mobile Instruction */}
        <p className="block md:hidden text-md font-bold text-white text-center underline">
          Tap a review to read
        </p>

        <div className="mt-24 overflow-hidden">
          <style>{keyframesStyle}</style>
          <div
            className="overflow-hidden"
            onMouseEnter={() =>
              (scrollRef.current.style.animationPlayState = "paused")
            }
            onMouseLeave={() =>
              (scrollRef.current.style.animationPlayState = "running")
            }
          >
            <div ref={scrollRef} style={marqueeStyle}>
              {[...reviews, ...reviews].map((rev, idx) => (
                <article
                  key={idx}
                  className="inline-block min-w-[300px] bg-gray-800 border border-gray-700 rounded-2xl shadow-lg p-8 m-2 text-center transition-shadow duration-300 hover:animate-pulse-glow"
                  style={{
                    animationName: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.animation =
                      "pulse-glow 1.5s infinite";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.animation = "none";
                  }}
                  onTouchStart={(e) => {
                    // Optional: highlight on tap for mobile
                    e.currentTarget.style.animation =
                      "pulse-glow 1.5s infinite";
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.animation = "none";
                  }}
                >
                  <p className="text-yellow-400">{"★".repeat(rev.rating)}</p>
                  <p className="text-gray-300 italic">“{rev.text}”</p>
                  <p className="font-semibold text-gray-100 mt-2">
                    — {rev.name}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Submit Review */}
      <div className="mt-20 max-w-xl mx-auto bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-gray-100 text-center">
          Leave a Review
        </h3>

        {pendingMessage && (
          <div className="text-green-500 font-medium text-center mb-4">
            {pendingMessage}
          </div>
        )}

        {!preview ? (
          <form
            className="space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();

              const response = await fetch(
                "https://submit-form.com/uAsqUWhhu",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  body: JSON.stringify({
                    name: form.name,
                    rating: form.rating,
                    text: form.text,
                  }),
                }
              );

              if (response.ok) {
                setPendingMessage(
                  "Thanks! Your review was submitted and is pending approval."
                );
                setForm({ name: "", rating: 5, text: "" });
                setPreview(false);
              } else {
                setPendingMessage("Something went wrong. Please try again.");
              }
            }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-gray-900 text-gray-100 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="rating"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Rating
              </label>
              <select
                id="rating"
                name="rating"
                value={form.rating}
                onChange={handleChange}
                className="w-full bg-gray-900 text-gray-100 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {[5, 4, 3, 2, 1].map((r) => (
                  <option key={r} value={r}>
                    {r} Star{r > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Your Review
              </label>
              <textarea
                id="text"
                name="text"
                rows="4"
                value={form.text}
                onChange={handleChange}
                className="w-full bg-gray-900 text-gray-100 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-300"
            >
              Preview Review
            </button>
          </form>
        ) : (
          <form
            action="https://submit-form.com/uAsqUWhhu"
            method="POST"
            className="space-y-6"
            target="_blank"
            onSubmit={() => {
              setPendingMessage(
                "Thanks! Your review was submitted and is pending approval."
              );
              setForm({ name: "", rating: 5, text: "" });
              setPreview(false);
            }}
          >
            <input type="hidden" name="name" value={form.name} />
            <input type="hidden" name="rating" value={form.rating} />
            <input type="hidden" name="text" value={form.text} />

            <h4 className="text-lg font-semibold text-gray-100">
              Preview Your Review
            </h4>
            <article className="bg-gray-800 border border-gray-700 rounded-2xl p-4">
              <StarRating count={form.rating} />
              <p className="text-gray-300 italic">“{form.text}”</p>
              <p className="font-semibold text-gray-100 mt-2">— {form.name}</p>
            </article>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setPreview(false)}
                className="bg-gray-700 hover:bg-gray-600 text-gray-300 font-medium py-2 px-4 rounded-lg"
              >
                Edit
              </button>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg"
              >
                Confirm & Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
