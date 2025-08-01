import React, { useState } from "react";
import NewsletterSubscription from "../components/NewsLetter";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    reason: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://submit-form.com/5tqkiLikJ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", reason: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact2" className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 text-gray-100 min-h-screen py-16 px-6 font-custom">
      <div className="max-w-3xl mx-auto bg-white text-gray-900 rounded-2xl shadow-xl p-10">
        <div className="text-center mb-8">
          <div className="w-full aspect-[4/3] mb-6">
            <img
              src="/images/water3.jpg"
              alt="Contact"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <h2 id="contact" className="text-3xl font-extrabold text-gray-900 mb-2">
            Contact Us
          </h2>
          <h3 className="text-gray-800 font-extrabold">
            Please Fill Form Out Completely
          </h3>
          <p className="text-gray-800 font-bold">Personal Requests </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Reason for Contact
            </label>
            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select a reason</option>
              <option value="Business Inquiry">Business Inquiry</option>
              <option value="General Question">General Question</option>
              <option value="Index">Index by Subject & Page</option>
              <option value="Prayer Request">Prayer Request</option>

              <option value="Testimonial">Share Positive Story</option>
              <option value="Speaking Engagement">Speaking Engagement</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow transition duration-300"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-600 font-medium text-center mt-3 animate-fade-in">
              ✅ Your message has been sent successfully.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 font-medium text-center mt-3">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>

      <div className="mt-16 max-w-3xl mx-auto">
        <NewsletterSubscription />
      </div>
    </section>
  );
}
