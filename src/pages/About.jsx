import React from "react";
import Footer from "../components/Footer";
import { FaLinkedin, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function BioSection() {
  return (
    <div className="container mx-auto p-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Image */}
        <div className="w-full md:w-1/3">
          <img
            src="/images/bio.png"
            alt="Profile"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>

        {/* Bio Text */}
        <div className="w-full md:w-2/3">
          <h1 className="text-5xl font-bold mb-2">Meet the Author</h1>
          <h2 className="text-2xl font-bold mb-2">Terry C. Fleitz</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Terry is nationally recognized for small business performance
            optimization as a featured speaker, seminar leader and author. He
            has published over 100 articles on a wide range of business and
            leadership topics and is the lead author of the U.S. Government
            Small Business Mobilization Planner.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Designed to entertain and inform, IMPERFECT HAPPINESS is a positive
            story of hope, kindness and resilience using relatable examples of
            God&#39;s many resources to reduce anxiety, achieve greater
            happiness and pursue Godly Wisdom.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            The author delivers grounded biblical principles in a variety of
            ways through business and leadership techniques to authentic life
            skills such as developing another generation of young people who
            know how to effectively communicate and love Jesus.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            This inspirational memoir features the positive lessons from his
            Dad&#39;s simple journey handling tragedy as his Father built a
            Godly Legacy, along with the learning opportunities from Terry&#39;s
            unique life experiences and failures. These experiences are woven
            through common sense ideas built on the foundation of authentic
            Prayer, Scripture, Traits of Jesus, Bible Studies and Christian
            Music.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            The author&#39;s favorite bible verse is Psalm 19:7 ESV - The law of
            the Lord is perfect, reviving the soul; the testimony of the Lord is
            sure, making wise the simple.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-8 mt-8 text-3xl text-gray-600">
            <a
              href="https://www.linkedin.com/in/terry-fleitz-9006aa12/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61572695820957" // replace with your FB link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="http://www.youtube.com/@imperfecthappiness" // replace with your YT link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
