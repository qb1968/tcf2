import Footer from "../components/Footer";
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
          <h1 className="text-5xl font-bold mb-2">Meet The Author</h1>
          <h2 className="text-2xl font-bold mb-2">Terry C. Fleitz</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Terry is nationally recognized for small business performance
            optimization as a featured speaker, seminar leader and author. He
            has published over 100 articles on a wide range of business and
            leadership topics and is the lead author of the U.S. Government
            Small Business Mobilization Planner.</p> 
            <p className="text-gray-700 leading-relaxed mb-5">
            Designed to entertain and
            inform, IMPERFECT HAPPINESS is a positive story of hope, kindness
            and resilience using relatable examples of God&#39;s many resources
            to reduce anxiety, secure greater happiness and contentment. The
            author delivers grounded biblical principles in a variety of ways
            through business and leadership techniques, authentic life skills,
            to developing another generation of young people who know how to
            effectively communicate and love Jesus.</p>
            <p className="text-gray-700 leading-relaxed mb-5">
             This inspirational memoir
            features the positive lessons from his Dad&#39;s simple journey
            handling tragedy as he built a Godly Legacy, along with the learning
            opportunities from Terry&#39;s unique life experiences and failures;
            all woven through common sense ideas built on the foundation of
            authentic Prayer, Scripture, Traits of Jesus, Bible Studies and
            Christian Music. </p>
            <p className="text-gray-700 leading-relaxed mb-5">
            The author&#39;s favorite bible verse is Psalm 19:7
            ESV - The law of the Lord is perfect, reviving the soul; the
            testimony of the Lord is sure, making wise the simple.
          </p>
        </div>
      </div>
     
    </div>
  );
}
