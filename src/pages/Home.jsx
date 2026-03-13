import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ImageCard from "../components/ImageCard";
import ImageContainer from "../components/ImageContainer";
import UpcomingEventsCarousel from "../components/UpcomingEventsCarousel";

export default function Home() {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);

  const handleToggle = (section) => {
    if (section === 1) {
      if (expanded1 && sectionRef1.current) {
        sectionRef1.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      setExpanded1(!expanded1);
    }

    if (section === 2) {
      if (expanded2 && sectionRef2.current) {
        sectionRef2.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      setExpanded2(!expanded2);
    }

    if (section === 3) {
      if (expanded3 && sectionRef3.current) {
        sectionRef3.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      setExpanded3(!expanded3);
    }
  };
  return (
    <section id="home" className="max-w-7xl mx-auto font-custom text-gray-800 ">
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
      {/* <div className="px-6 pb-20">
        <ImageContainer />
      </div> */}

      {/* Press Release Section */}
      <section
        ref={sectionRef1}
        className="bg-white py-16 px-6 max-w-5xl mx-auto my-16 rounded-3xl shadow-lg border border-gray-200"
        style={{
          boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)", // bluish glow
        }}
      >
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">
            Book Review 
          </p>
          <p className="text-sm text-gray-500">📅 January 2026</p>
          <h2 className="text-4xl font-bold mt-2 text-gray-800 font-custom">
            MUST READ
            <div className="flex justify-center mt-4 gap-1 text-yellow-500">
              <br />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-10"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-10"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-10"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-10"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-10"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </h2>
          <h2 className="text-4xl font-bold mt-2 text-gray-800 font-custom">
            {" "}
            A 30-day Christian devotional on how God uses life’s imperfections
            to shape faith, purpose, and fulfillment beyond success
          </h2>
          <h3 className="text-2xl font semi-bold mt-10 text-gray-800 font-custom">
            Happiness is imperfect on earth, but with God, it becomes
            purposeful. We all face different kinds of troubles on this journey
            called life, but in spite of all those trials and tribulations, God
            can use those twists to shape character, deepen faith, and redirect
            us toward what truly matters.
          </h3>
        </div>

        {/* Collapsible Content */}
        <div
          className={`text-gray-700 leading-relaxed space-y-6 overflow-hidden transition-all duration-700 ${
            expanded1 ? "max-h-[5000px]" : "max-h-[160px]"
          }`}
        >
          {/* Hidden content */}
          <div className={`${expanded1 ? "block" : "hidden"} space-y-6`}>
            <p>
              This is the premise of the faith-based devotional that is
              Imperfect Happiness: A Journey of Perfect Twists - Thirty-Day
              Devotional to Living Life Well. In this book, Terry C. Fleitz
              presents a thirty-day journey in which he applies his personal
              experiences, biblical teachings, leadership lessons, prayer, and
              Christian music with the aim of showing readers how to live life
              well with God at the center.
            </p>
            <p>
              The author's ability to infuse his personal experiences
              immediately stands out because he expertly presents himself as
              someone who has lived through success, failure, illness, and
              doubt, just like any other human, but learned from it. Having
              grown up in a working-class family and becoming a successful adult
              who achieved the American dream, he still did not achieve
              fulfillment in his life, but two major health crises became
              turning points for him on his journey toward developing real faith
              and finding fulfillment. Readers will relate to several aspects of
              his story, especially the areas where he got things wrong and
              showed that faith is not about perfection.
            </p>
            <p>
              The book is structured in an easy-to-follow and engaging way, with
              each chapter introducing a life lesson and then supported by
              scripture, prayer, traits of Jesus, and Christian music references
              in addition to his personal experiences. Therefore, the book works
              well as not just a devotional but also a life guide. Key concepts
              from relationship building and Godly wisdom to kindness are
              touched on in simple terms, and readers will learn a lot from
              these areas. The inclusion of practical tools, such as "Pick
              Five," "Twenty-One Steps to Being the Best Imperfect You," and the
              “Pause and Reflect” sections, makes the lessons very easy to apply
              in life as well.
            </p>

            <p>
              Anyone who is searching for purpose beyond material gain should
              pick up a copy of Imperfect Happiness. If you enjoy devotionals,
              the book will also appeal to you. It is a great reminder and
              reassurance of some of the important things in life, especially
              when we inevitably go through pain, confusion, and imperfection.
              God is always present with us, and putting Him at the center is
              key.
            </p>
          </div>
        </div>

        {/* Read More / Read Less Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => handleToggle(1)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            {expanded1 ? "Read Less ←" : "Read More →"}
          </button>
        </div>
      </section>

      <section
        ref={sectionRef3}
        className="bg-white py-16 px-6 max-w-5xl mx-auto my-16 rounded-3xl shadow-lg border border-gray-200"
        style={{
          boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)", // bluish glow
        }}
      >
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">
            Book Review 
          </p>
          <p className="text-sm text-gray-500">📅 November 2025</p>
          <h2 className="text-4xl font-bold mt-2 text-gray-800 font-custom">
            Imperfect Happiness is rich with scriptural references, which makes
            it feel meditative and authentic, with a sense of spiritual intimacy
            that draws the reader inward.
          </h2>
          <h3 className="text-2xl font semi-bold mt-10 text-gray-800 font-custom">
            “Imperfect Happiness: A Journey of Perfect Twists – Thirty-Day
            Devotional to Living Life Well” by Terry C. Fleitz is an inspiring
            Christian devotional that aims to inform and help readers navigate
            various challenges and thus be able to live in the best way
            possible, with a strong sense of purpose, wisdom, positivity, and
            faith.
          </h3>
        </div>

        {/* Collapsible Content */}
        <div
          className={`text-gray-700 leading-relaxed space-y-6 overflow-hidden transition-all duration-700 ${
            expanded3 ? "max-h-[5000px]" : "max-h-[160px]"
          }`}
        >
          {/* Hidden content */}
          <div className={`${expanded3 ? "block" : "hidden"} space-y-6`}>
            <p>
              <span className="font-bold">Reviewed by Lily Andrews</span>
              “Imperfect Happiness: A Journey of Perfect Twists – Thirty-Day
              Devotional to Living Life Well” by Terry C. Fleitz is an inspiring
              Christian devotional that aims to inform and help readers navigate
              various challenges and thus be able to live in the best way
              possible, with a strong sense of purpose, wisdom, positivity, and
              faith.
            </p>
            <p>
              Fleitz begins with a childhood memory. He remembers his
              sixth-grade teacher, Sister Magdalene, explaining what would, in
              years to come, become a strong basis for his understanding of
              integrity. She was the first person from outside the home to
              challenge him to think seriously about right and wrong, and also
              to see moral choices as deliberate acts rather than automatic
              responses. His parents were, of course, the first ones to instill
              in him a sense of honesty, hard work, and compassion. This they
              did, not through stern lectures but through deliberate behavior
              and choices. Over time, he would come to discover several
              life-changing truths. They include: living the best life is
              directly connected to building a closer relationship with God,
              that true success cannot be measured by material gain or social
              status, and that the depth of one’s faith and the sincerity of
              their relationships is directly tied to a lasting sense of joy,
              peace, and fulfilment.
            </p>
            <p>
              As you read through this book, you can’t fail to notice Fleitz’s
              use of metaphors and imagery to communicate certain truths in more
              depth. They include “From the Ocean to the Mountain,” a real
              transition that he uses to describe two contrasting stages in his
              life’s journey, “The Organization” which apart from being a
              physical place, dramatizes general worldly success and moral
              compromise, “The Desert,” which represents a state of burnout and
              spiritual emptiness that follows overwork and misplaced ambition,
              and “The Room of Shame,” a metaphor that illustrates the inner
              chamber of conscience, that is, the place within oneself that
              holds guilt and regret. These, among others, beautifully and
              profoundly create a literary structure that mirrors his message,
              each marking a stage in the reader’s heart as they learn to live
              well.
            </p>

            <p>
              This book is rich with scriptural references, especially verses
              from the Book of Psalms. This rich incorporation makes it feel
              meditative and authentic, with a sense of spiritual intimacy that
              draws the reader inward. It has the advantage of combining a
              devotional sense with memoir, in that the author can merge
              experience with reflection, grounding his words in a realism
              readers can relate to and, maybe, learn from. Talking of
              structure, this book is complex, but in a good way. Every chapter
              has a “Pause and Reflect” section that feels intentionally placed
              to interrupt the narrative flow and shift the reader’s attention
              to self-examination. Additionally, the structure shifts between
              narrative, to prayer and song, in a multi-layered design that is a
              show of clever craftsmanship and a form of artistic control.
              Readers will agree that this style of writing is unique and helps
              prevent the text from becoming monotonous.
            </p>
            <p>
              “Imperfect Happiness: A Journey of Perfect Twists – Thirty-Day
              Devotional to Living Life Well” by Terry C. Fleitz is a book that
              needs to be studied with a pen and a notebook, owing to its depth,
              density, and reflective nature. This study’s approach is also
              likely to move the reader from passive observation to active
              participation. Readers seeking meaning beyond material success, as
              well as those who have spent years chasing achievement, will
              deeply identify more with Fleitz’s experiences and discoveries.
              Additionally, those who have faced illness or loss will find
              genuine comfort in his honest retellings, which do not
              sensationalize suffering but rather treat it as a teacher that
              often helps draw meaning from even the darkest experiences. This
              is an essential read that intelligently reveals just how adversity
              can be redemptive and how faith can transform pain into purpose,
              despair into growth, and hardship into spiritual renewal.
              Excellent work, Terry Fleitz!
            </p>
          </div>
        </div>

        {/* Read More / Read Less Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => handleToggle(3)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            {expanded3 ? "Read Less ←" : "Read More →"}
          </button>
        </div>
      </section>

      <section
        ref={sectionRef2}
        className="bg-white py-16 px-6 max-w-5xl mx-auto my-16 rounded-3xl shadow-lg border border-gray-200"
        style={{
          boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)", // bluish glow
        }}
      >
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">
            Press Release
          </p>
          <p className="text-sm text-gray-500">📅 October 2025</p>
          <h2 className="text-4xl font-bold mt-2 text-gray-800 font-custom">
            Terry C. Fleitz’s Newly Released
            <br /> &quot;Imperfect Happiness&quot;
            <br /> Is an Uplifting Devotional Offering Practical Wisdom and
            Biblical Encouragement for Navigating Life’s Challenges
          </h2>
          <h3 className="text-2xl font semi-bold mt-10 text-gray-800 font-custom">
            “Imperfect Happiness: A Journey of Perfect Twists:
            <br /> Thirty-Day Devotional to Living Life Well” from Christian
            Faith Publishing,
            <br />
            author Terry C. Fleitz, is a heartfelt devotional that blends faith,
            life experiences, and biblical truths to inspire resilience, joy,
            and a deeper walk with God.
          </h3>
        </div>

        {/* Collapsible Content */}
        <div
          className={`text-gray-700 leading-relaxed space-y-6 overflow-hidden transition-all duration-700 ${
            expanded2 ? "max-h-[5000px]" : "max-h-[160px]"
          }`}
        >
          {/* Hidden content */}
          <div className={`${expanded2 ? "block" : "hidden"} space-y-6`}>
            <p>
              <span className="font-bold">Mebane, NC —</span>
              (PR.com) “Imperfect Happiness: A Journey of Perfect Twists:
              Thirty-Day Devotional to Living Life Well”: a thought-provoking
              devotional designed to encourage readers to find purpose and
              contentment through faith in Christ. “Imperfect Happiness: A
              Journey of Perfect Twists: Thirty-Day Devotional to Living Life
              Well” is the creation of published author, Terry C. Fleitz, a
              nationally recognized speaker and seminar leader specializing in
              small-business performance optimization, who has published over
              100 articles on business and leadership and co-authored the U.S.
              Government Small Business Mobilization Planner. His book,
              Imperfect Happiness, is an inspirational memoir that blends
              biblical principles, prayer, Christian music, personal
              experiences, and lessons from his father’s faith- filled legacy to
              encourage readers toward resilience, contentment, and a
              Christ-centered life.
            </p>
            <p>
              Fleitz shares, “Based on true events, IMPERFECT HAPPINESS follows
              the author’s journey dreaming of business success as a teenager
              from a poor community, to securing the American Dream—the pinnacle
              of leadership achievement, followed by the emptiness of this
              lifelong goal. Ready to follow Jesus but overwhelmed by what to
              do, the book details life’s failures and dead ends without godly
              hope, contrasted by living life well and a greater sense of
              purpose with God. The author illustrates to readers, through life
              events, what revering the Bible means. Recognizing that God is
              always with us, the author’s trek is a nontraditional path to
              building a relationship with Jesus. The narrative will make you
              smile, think, and hopefully pursue Godly Wisdom—the necessary
              ingredient for happiness on earth. Imperfect Happiness represents
              the peaks and valleys in our life as we learn to take the worry
              out of living, by gaining Wisdom and giving God greater control.
              Perfect Twists are the unexpected miracles in God’s plan for our
              lives. The author’s Perfect Twists include two serious health
              challenges and disappointing life events “providing opportunities”
              for him to build a closer relationship with God while discovering
              greater comfort, happiness, and contentment.
            </p>
            <p>
              The narrative teaches us that God will not fix everything that
              worries us, but he will carry things for us and will handle them
              in the best possible way, so we can win life’s passage pursuing
              the PERFECT HAPPINESS of heaven. IMPERFECT HAPPINESS is a musical
              of sorts, combination adventure, and love story offering practical
              advice, authentic prayers, Pause and Reflect segments in an
              engaging way. The book conveys messages making the Word of God and
              life of Jesus come alive for anyone who chooses to be Brilliant on
              the Basics—willing to do a few things well. The author also takes
              the reader behind the scenes of American corporations and
              institutions to better understand their unwelcome behavior which
              too often targets our families, God’s family, and today’s youth.
              He contrasts this with the exciting message of living life by the
              significance of the Bible. The book concludes with steps to
              achieve the best imperfect you, as well as how to be a force
              multiplier improving the culture in our communities and country by
              changing hearts and lives with the commonality of loving God and
              loving people. IMPERFECT HAPPINESS is designed to entertain and
              inform while highlighting biblical resources to enjoy life more
              and make a greater difference in the lives of others. The book was
              written in a format so that it can be read and reread,
              particularly for anyone trying to overcome challenges or better
              understand their purpose and direction in life.”
            </p>

            <p>
              Published by Christian Faith Publishing, Terry C. Fleitz’s new
              book is an inspiring devotional that encourages believers to
              embrace God’s plan, find joy in life’s “perfect twists,” and live
              with greater faith, peace, and purpose.
            </p>
            <p>
              Consumers can purchase “Imperfect Happiness: A Journey of Perfect
              Twists: Thirty-Day Devotional to Living Life Well”{" "}
              <a
                href="https://buy.stripe.com/7sY9AVecV1Lpfnla9hcjS00"
                target="_blank"
                className="text-blue-700"
              >
                Here
              </a>{" "}
              or at traditional brick & mortar bookstores, or online at
              Amazon.com, Apple iTunes store, or Barnes and Noble.
            </p>
            <p>
              For additional information or inquiries about “Imperfect
              Happiness: A Journey of Perfect Twists: Thirty-Day Devotional to
              Living Life Well,” contact the Christian Faith Publishing media
              department at 866-554-0919.
            </p>
          </div>
        </div>

        {/* Read More / Read Less Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => handleToggle(2)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            {expanded2 ? "Read Less ←" : "Read More →"}
          </button>
        </div>
      </section>

      {/* Footer */}

      <div className="px-6 pb-24">
        <UpcomingEventsCarousel />
      </div>
      {/* Current Promotions Section */}
      <section className="bg-gradient-to-b from-blue-50 via-white to-blue-100 py-12 px-6 rounded-3xl shadow-inner max-w-6xl mx-auto my-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 font-custom">
            Current Promotions
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 font-custom">
            ACT NOW!
          </h2>
          <p className="text-gray-800 mt-2 text-lg font-bold">
            Limited-time offers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Promotion 1 */}
          <div
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              <span className="font-extrabold">FREE</span> SHIPPING
            </h3>
            <p className="text-gray-600 mb-4">
              Purchase a book through <br />
              March 31, 2026 and receive free shipping! <br /> (U.S. orders
              only)
            </p>
            <HashLink
              smooth
              to="/book#book"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition"
              data-aos="fade-up"
            >
              Claim Offer
            </HashLink>
          </div>

          {/* Promotion 2 */}
          <div
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              FREE Chapter Preview
            </h3>
            <p className="text-gray-600 mb-4">
              Drop us a note on our Contact Page requesting a FREE downloadable
              chapter of{" "}
              <span className="font-semibold">IMPƎRFƎCT HAPPINESS</span>.
            </p>

            <Link
              to="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition"
            >
              Subscribe Now
            </Link>
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
            <HashLink
              smooth
              to="/contact#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition"
            >
              Inquire Now
            </HashLink>
          </div>
        </div>
      </section>
    </section>
  );
}
