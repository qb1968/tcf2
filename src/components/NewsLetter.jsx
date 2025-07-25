import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://submit-form.com/l6IdqMUZE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubmitted(true);
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-4 rounded-2xl">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Join our Book Club
          </h2>
          <p className="text-gray-600 mt-2 font-bold">
            Get Connected, Receive IMPƎRFƎCT HAPPINESS Platform Updates, Learn
            about Donations to the Special Needs Community and our Special
            Offers.
          </p>
        </div>
        <AnimatePresence>
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-green-600 font-medium text-center"
            >
              ✅ You're subscribed!
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>

              {status === "error" && (
                <p className="text-red-600 text-center text-sm">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
