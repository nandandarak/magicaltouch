import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import {
  SpotlightCard,
  ShinyText,
  Magnet,
  BlurText,
} from "../components/reactbits";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
const VIDEO_TESTIMONIALS = [
  {
    id: 1,
    videoId: "https://www.youtube.com/watch?v=HcavKP31xPw",
    title: "Lumbar Spondylitis",
  },
  {
    id: 2,
    videoId: "https://www.youtube.com/watch?v=bcOFXxaSieU",
    title: "Frozen Shoulder",
  },
  {
    id: 3,
    videoId: "https://www.youtube.com/watch?v=H0zEGvhGBhk",
    title: "Sciatica Treatment",
  },
  {
    id: 4,
    videoId: "https://www.youtube.com/watch?v=2UPbxcPxgv0",
    title: "Artery Blockages",
  },
  {
    id: 5,
    videoId: "https://www.youtube.com/watch?v=hc4K4BiIylQ",
    title: "Swelling & Leg Pain",
  },
  {
    id: 6,
    videoId: "https://www.youtube.com/watch?v=l_7qd8HVMqQ",
    title: "Back Pain",
  },
  {
    id: 7,
    videoId: "https://www.youtube.com/watch?v=diDXP4rgVLI",
    title: "Knee & Back Pain",
  },
  {
    id: 8,
    videoId: "https://www.youtube.com/watch?v=nFqhq3RKvdA",
    title: "Severe Back Pain",
  },
  {
    id: 9,
    videoId: "https://www.youtube.com/watch?v=Wbrks3t-pRs",
    title: "Lumbar Spondylosis",
  },
];
const STORIES = [
  {
    name: "Hemali Shah",
    location: "Mumbai",
    condition: "Arteriolysis in Both Legs",
    story:
      "Lived with numb legs and cramps for over 10 years, struggling with railway station steps and catching trains. After about 21 sessions, she can feel sea water and walk barefoot again.",
    quote:
      "After getting almost 21 sessions from Magical Touch I can say I can feel the sea water and enjoy walking barefoot on the beach like others.",
    outcome: "Sensation & Mobility Restored",
  },
  {
    name: "Anu Choudhary",
    location: "",
    condition: "Pain Relief",
    story: "Felt real relief from pain within just two sessions.",
    quote: "Pain relief in two sessions, thank you.",
    outcome: "Relief in 2 Sessions",
  },
  {
    name: "Anurag Verma",
    location: "",
    condition: "Neck Muscle Pain & Headaches",
    story:
      "Neck muscle pain was causing headaches and mild concussions. Over 11 sessions across a few weeks, the pain eased and his health gradually recovered.",
    quote:
      "The sessions helped in relieving the pain and also helped in eventually getting back to good health.",
    outcome: "Neck Pain & Headaches Relieved",
  },
  {
    name: "Jayesh Haria",
    location: "",
    condition: "Severe Lower Back Pain",
    story:
      "Back pain was so severe that sleeping, standing and walking were a struggle. Two sessions brought significant relief, along with follow-up care and simple recovery tips.",
    quote:
      "In just two sessions, I experienced significant relief without a single medicine.",
    outcome: "Relief in 2 Sessions, No Medicine",
  },
  {
    name: "Neela Udwadia",
    location: "",
    condition: "Walking & Balance Issues",
    story:
      "Her mother-in-law received acupressure treatment and, over 11 sessions, showed more improvement in walking and balance than the family expected.",
    quote:
      "In 11 sessions there was more improvement in walking and balance than expected.",
    outcome: "Better Walking & Balance",
  },
  {
    name: "Krishana Print Creation",
    location: "",
    condition: "Sudden Loss of Ability to Walk",
    story:
      "Her mother suddenly couldn't walk. With home visits starting immediately, she improved to walking with a stick and was walking like before by the 9th session.",
    quote:
      "His treatment did wonders from 1st visit itself. By the 9th session, she is walking like before.",
    outcome: "Walking Normally by 9th Session",
  },
  {
    name: "Yamini Kapadia",
    location: "",
    condition: "General Treatment",
    story:
      "Found the therapist kind, helpful with advice, and the treatment effective.",
    quote:
      "Very nice person, giving good advice, best treatment and give 100% positive result.",
    outcome: "Positive Result",
  },
  {
    name: "Prashant Talpade",
    location: "",
    condition: "Frozen Shoulder",
    story:
      "Had tried various treatments for a frozen shoulder with limited relief. Noticed improvement after just a few sessions of massage and herbal oil therapy.",
    quote:
      "Mr. Lahoti has an exceptional ability to identify the exact nerves causing pain and discomfort.",
    outcome: "Frozen Shoulder Relief",
  },
  {
    name: "Mayuresh Patel",
    location: "",
    condition: "Leg Blood Circulation Issues",
    story: "Saw good results in his feet after only 10 sessions.",
    quote:
      "With only 10 sessions he has shown good results. If you have any issues with leg blood circulation, I would recommend him 100%.",
    outcome: "Improved Circulation in 10 Sessions",
  },
  {
    name: "Hitesh Pungalia",
    location: "",
    condition: "Back & Knee Pain",
    story:
      "His back pain disappeared after a single session, and his knee pain reduced as well.",
    quote:
      "I had back pain but just after 1 session it's gone and my knee pain has been reduced.",
    outcome: "Back Pain Gone in 1 Session",
  },
  {
    name: "Krishna Hatangadi",
    location: "",
    condition: "Early Knee Arthritis & Varicose Veins",
    story:
      "Hereditary knee arthritis and varicose veins were affecting sleep and quality of life, and a doctor had mentioned surgery might be needed. After 30 sessions of neurotherapy and massage, the pain was gone.",
    quote: "My pain had gone completely and I can actually even sleep better.",
    outcome: "Pain-Free, Surgery Avoided",
  },
  {
    name: "Amey Prabhu",
    location: "",
    condition: "Lumbar Spondylosis, Lordosis & Scoliosis",
    story:
      "Crippling weakness and stiffness in thighs, hamstrings, calves and lower back improved within a few weeks. One session also cleared a severe migraine.",
    quote:
      "It was one of the best decisions I have made that helped me get better in matter of few weeks!!",
    outcome: "Stiffness & Weakness Eased",
  },
  {
    name: "Shraddha Hatangadi",
    location: "",
    condition: "Parkinson's, Lumbar Spondylosis & Osteoarthritis",
    story:
      "Both her parents were treated for neurological and joint conditions and benefited equally from the therapies.",
    quote:
      "My mom and dad both are benefitted equally with Magical Touch's treatment therapies.",
    outcome: "Both Parents Benefited",
  },
  {
    name: "Rajesh Kumar",
    location: "",
    condition: "Knee Pain",
    story: "Took therapy sessions for knee pain and found them effective.",
    quote: "Taken therapy sessions for knee pain and found to be effective.",
    outcome: "Effective Knee Pain Relief",
  },
  {
    name: "Jagruti Zala",
    location: "",
    condition: "Medicine-Free Therapy",
    story:
      "Recommends contacting Yogesh Lahoti directly for treatment without medicine.",
    quote: "Yogesh Lahoti can treat you without medicine.",
    outcome: "Medicine-Free Treatment",
  },
  {
    name: "Himanshu Gadani",
    location: "",
    condition: "General Recommendation",
    story: "Highly recommends Magical Touch.",
    quote: "One of the best place - Highly recommended.",
    outcome: "Highly Recommended",
  },
  {
    name: "Rashida Pendi",
    location: "",
    condition: "Spondylitis",
    story:
      "Her mother-in-law felt great relief from spondylitis pain after 10-11 sessions, and the pain is now bearable with painkillers.",
    quote:
      "After 10-11 sessions she felt great relief from earlier pain she was having.",
    outcome: "Significant Pain Relief",
  },
  {
    name: "Khushbu Gandhi",
    location: "",
    condition: "Sciatica, Back Pain & PCOS",
    story:
      "Diagnosed with sciatica during her CA final exams, physiotherapy gave only temporary relief. After 16 sessions, her sciatica and back pain healed and calf pain reduced. She was also treated for PCOS.",
    quote:
      "It took 16 sessions for me, but my sciatica and back pain is healed.",
    outcome: "Sciatica Healed in 16 Sessions",
  },
  {
    name: "Deepak Gandhi",
    location: "",
    condition: "General Treatment",
    story: "Found the treatment helpful and effective.",
    quote: "Very helpful and effective treatment by Yogesh Lahoti.",
    outcome: "Effective Treatment",
  },
  {
    name: "Nayana Gandhi",
    location: "",
    condition: "Lumbar Spondylitis",
    story:
      "Went through treatment for lumbar spondylitis herself and recommends it for joint pain, back pain, sciatica, slip disc, paralysis and Parkinson's.",
    quote:
      "His treatment is very effective and I have personally been through the treatment for lumbar spondylitis.",
    outcome: "Lumbar Spondylitis Treated",
  },
  {
    name: "Amit Desai",
    location: "",
    condition: "Bedridden Patients",
    story:
      "Describes Yogesh Lahoti as an expert acupressure and neurotherapist who has helped bedridden patients get back on their feet.",
    quote:
      "He works fervently on bedridden patients to bring them back on their feet.",
    outcome: "Bedridden Patients Back on Their Feet",
  },
  {
    name: "Pramod Gawai",
    location: "",
    condition: "General Feedback",
    story: "Left a positive review for the therapy.",
    quote: "Very Good.",
    outcome: "Positive Experience",
  },
  {
    name: "Amrit Kalsi",
    location: "",
    condition: "Neck & Shoulder Pain",
    story:
      "Finds the therapy sessions consistently relieve neck and shoulder pain.",
    quote: "It always helps to relieve the pain around neck and shoulder area.",
    outcome: "Neck & Shoulder Pain Relieved",
  },
  {
    name: "Pradeep Mhaskar",
    location: "",
    condition: "Sciatica",
    story:
      "Treated with acupressure for sciatica and can now walk comfortably with no trouble at all.",
    quote:
      "मला योगेशजीने सायटीका साठी acupressure ने उपचार दिले होते आणि आता मी एक्दम आरामा ने चालू सहजता आहे आणि अजिबात काही ही त्रास नाही.",
    outcome: "Sciatica Pain-Free",
  },
  {
    name: "Neel",
    location: "",
    condition: "Sciatica",
    story:
      "Was treated for sciatica without any medicine and was astonished by the results.",
    quote:
      "Yogeshji had treated me for sciatica and I was astonished that he treated whole heartedly without medicine.",
    outcome: "Sciatica Treated Without Medicine",
  },
  {
    name: "Chittrah Kanal",
    location: "",
    condition: "Severe Back Pain",
    story:
      "In severe pain before a 3-hour car trip, she got acupressure and managed the full day of travel with no medication. The pain hasn't returned.",
    quote: "Yogesh's Accupressure was magic. It completely healed me.",
    outcome: "Pain Gone, Never Returned",
  },
  {
    name: "Arun Lahoti",
    location: "",
    condition: "Back Pain from Desk Work",
    story:
      "Long hours at a computer caused back pain that hurt his productivity. He felt a difference after 2 sittings and the pain was gone after 6.",
    quote:
      "After only 2 sittings I could feel the difference. After 6 sittings the pain was gone.",
    outcome: "Pain Gone in 6 Sittings",
  },
];

function VideoTestimonialCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const getYouTubeId = (url) => {
    try {
      const parsedUrl = new URL(url);

      if (parsedUrl.hostname.includes("youtu.be")) {
        return parsedUrl.pathname.slice(1);
      }

      return parsedUrl.searchParams.get("v");
    } catch {
      return "";
    }
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % VIDEO_TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + VIDEO_TESTIMONIALS.length) % VIDEO_TESTIMONIALS.length,
    );
  };

  const activeTestimonial = VIDEO_TESTIMONIALS[activeIndex];
  const youtubeId = getYouTubeId(activeTestimonial.videoId);

  return (
    <section className="py-20 sm:py-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <ShinyText
              text="WATCH THEIR STORIES"
              speed={4}
              className="text-xs font-mono tracking-widest text-stone-500 uppercase font-medium"
            />
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-[#1A1A18] tracking-[-0.03em] leading-tight">
            Real people.{" "}
            <span className="font-serif italic text-stone-500">
              Real journeys.
            </span>
          </h2>

          <p className="mt-4 text-stone-600 text-sm sm:text-base font-light leading-relaxed max-w-lg mx-auto">
            Hear directly from people who came to us looking for relief,
            movement, and a better quality of life.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main Card */}
          <motion.div
            key={activeTestimonial.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <div className="rounded-[36px] overflow-hidden bg-white border border-stone-200/80 shadow-sm">
              {/* Video */}
              <div className="relative h-[240px] sm:h-[320px] lg:h-[400px] bg-stone-100 overflow-hidden">
                {" "}
                {youtubeId ? (
                  <iframe
                    key={youtubeId}
                    src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                    title={activeTestimonial.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm text-stone-400">
                      Video unavailable
                    </span>
                  </div>
                )}
              </div>

              {/* Video Info */}
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />

                    <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-stone-400">
                      Patient Testimonial
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-light text-[#1A1A18] tracking-tight">
                    {activeTestimonial.title}
                  </h3>
                </div>

                <a
                  href={activeTestimonial.videoId}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 self-start sm:self-auto px-5 py-2.5 rounded-full border border-stone-200 hover:border-stone-300 bg-[#FAF9F6] hover:bg-stone-100 text-[#1A1A18] text-xs font-medium tracking-wide transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Watch on YouTube
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Previous Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="
              absolute left-0 sm:-left-5 top-[38%]
              w-11 h-11 sm:w-12 sm:h-12
              rounded-full
              bg-white
              border border-stone-200
              shadow-sm
              flex items-center justify-center
              text-stone-600
              hover:text-[#1A1A18]
              hover:border-stone-300
              hover:shadow-md
              transition-all
              active:scale-95
            "
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="
              absolute right-0 sm:-right-5 top-[38%]
              w-11 h-11 sm:w-12 sm:h-12
              rounded-full
              bg-white
              border border-stone-200
              shadow-sm
              flex items-center justify-center
              text-stone-600
              hover:text-[#1A1A18]
              hover:border-stone-300
              hover:shadow-md
              transition-all
              active:scale-95
            "
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots + Counter */}
        <div className="mt-10 flex items-center justify-center gap-4 max-w-xs mx-auto">
          {/* Current Active Number */}
          <div className="text-[15px] font-mono font-medium tracking-wider text-[#1A1A18]">
            {String(activeIndex + 1).padStart(2, "0")}
          </div>

          {/* Slider/Dash Track */}
          <div className="flex flex-1 items-center justify-center gap-1.5 px-1">
            {VIDEO_TESTIMONIALS.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`
                  h-[7px] rounded-full transition-all duration-300 ease-out
                  ${
                    index === activeIndex
                      ? "flex-grow bg-[#1A1A18]"
                      : "w-2 bg-stone-300 hover:bg-stone-400"
                  }
                `}
              />
            ))}
          </div>

          {/* Total Max Number */}
          <div className="text-[15px] font-mono tracking-wider text-stone-400">
            {String(VIDEO_TESTIMONIALS.length).padStart(2, "0")}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TestimonialsPage() {
  {
    /*const [reviews, setReviews] = React.useState([]);
  const [reviewInfo, setReviewInfo] = React.useState({
    name: "",
    rating: "",
    ratingCount: "",
  });
  const [loadingReviews, setLoadingReviews] = React.useState(true);
  const [reviewError, setReviewError] = React.useState(false);

  React.useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          "https://data.accentapi.com/feed/25714638.json",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch Google reviews");
        }

        const data = await response.json();

        setReviews(data.reviews || []);

        setReviewInfo({
          name: data.bio?.name || "",
          rating: data.bio?.overall_star_rating || "",
          ratingCount: data.bio?.rating_count || "",
        });
      } catch (error) {
        console.error("Google Reviews error:", error);
        setReviewError(true);
      } finally {
        setLoadingReviews(false);
      }
    };

    fetchReviews();
  }, []);*/
  }
  return (
    <div className="pt-24 bg-[#FAF9F6] min-h-screen">
      {/* Header — Short & Sweet */}
      <section className="py-20 sm:py-28 bg-white border-b border-stone-200/60">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
          <div className="inline-block">
            <ShinyText
              text="REAL RECOVERIES • REAL PEOPLE"
              speed={4}
              className="text-xs font-mono tracking-widest text-stone-500 uppercase font-medium"
            />
          </div>

          <h1 className="text-4xl sm:text-6xl font-light text-[#1A1A18] tracking-[-0.03em] leading-tight">
            Stories of{" "}
            <span className="font-serif italic font-normal text-stone-500">
              healing.
            </span>
          </h1>

          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto">
            Real patients across Pan India who faced surgery, lived on painkillers, and
            found lasting freedom through gentle Acupressure home visits.
          </p>
        </div>
      </section>
      {/* Trust Numbers */}
      <section className="py-12 bg-white border-b border-stone-200/60">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-light text-[#1A1A18] font-serif italic">
                15+
              </div>
              <div className="text-[11px] font-mono uppercase text-stone-400 mt-1">
                Years Practice
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-light text-[#1A1A18] font-serif italic">
                94%
              </div>
              <div className="text-[11px] font-mono uppercase text-stone-400 mt-1">
                Surgery Avoided
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-light text-[#1A1A18] font-serif italic">
                1,000+
              </div>
              <div className="text-[11px] font-mono uppercase text-stone-400 mt-1">
                Patients Relieved
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-light text-[#1A1A18] font-serif italic">
                0
              </div>
              <div className="text-[11px] font-mono uppercase text-stone-400 mt-1">
                Side Effects
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Vitality Banner */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="rounded-[36px] overflow-hidden bg-white border border-stone-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 h-72 sm:h-96 lg:h-full relative overflow-hidden bg-stone-100">
              <img
                src="/images/patient_vitality.jpg"
                alt="Patient walking pain-free"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 p-8 sm:p-14 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block">
                The Goal of Every Session
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#1A1A18] leading-tight">
                To help you walk, bend, and live without thinking about pain.
              </h2>
              <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
                When chronic nerve compression lifts, everyday joys return
                &mdash; morning walks along the sea, playing with grandchildren,
                and peaceful unbroken sleep.
              </p>
              <div className="pt-2">
                <Magnet magnetStrength={0.25} padding={20}>
                  <a
                    href="https://wa.me/919152292507?text=Hi%20Yogesh%20Sir%2C%20I%20would%20like%20to%20consult%20regarding%20Acupressure%20treatment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1A18] hover:bg-stone-800 text-white text-xs sm:text-sm font-medium tracking-wide shadow-md active:scale-95 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Start Your Recovery</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                  </a>
                </Magnet>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video Testimonials */}
      <VideoTestimonialCarousel />
      {/* Stories Grid with React Bits SpotlightCard */}
      <section className="pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {STORIES.map((item, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(217, 119, 6, 0.12)"
                  className="p-8 flex flex-col justify-between space-y-6 h-full shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400">
                        {item.location} &bull; {item.condition}
                      </span>
                      <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                        {item.outcome}
                      </span>
                    </div>

                    <h3 className="text-xl font-light text-[#1A1A18] tracking-tight">
                      {item.name}
                    </h3>

                    <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                      {item.story}
                    </p>

                    <div className="pt-3 border-t border-stone-100 font-serif italic text-xs sm:text-sm text-stone-700 leading-relaxed">
                      &ldquo;{item.quote}&rdquo;
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100/80 flex items-center justify-between text-xs text-stone-400">
                    <span className="font-mono">Verified Recovery</span>
                    <span className="text-stone-900 font-medium font-serif italic">
                      Home Visit (Pan India)
                    </span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      *{/* Google Reviews */}
      {/* <section className="pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="inline-block mb-4">
              <ShinyText
                text="GOOGLE REVIEWS"
                speed={4}
                className="text-xs font-mono tracking-widest text-stone-500 uppercase font-medium"
              />
            </div>

            <h2 className="text-3xl sm:text-5xl font-light text-[#1A1A18] tracking-[-0.03em] leading-tight">
              What our patients{" "}
              <span className="font-serif italic text-stone-500">say.</span>
            </h2>

            {!loadingReviews && !reviewError && (
              <div className="mt-5 flex items-center justify-center gap-3">
                <span className="text-xl font-serif">★</span>

                <span className="text-lg font-medium text-[#1A1A18]">
                  {reviewInfo.rating}
                </span>

                <span className="text-sm text-stone-500">
                  ({reviewInfo.ratingCount} Google Reviews)
                </span>
              </div>
            )}
          </div>

          {loadingReviews && (
            <div className="flex justify-center py-16">
              <div className="text-sm text-stone-400 font-mono">
                Loading Google reviews...
              </div>
            </div>
          )}

          {reviewError && (
            <div className="text-center py-16">
              <p className="text-sm text-stone-500">
                Unable to load Google reviews right now.
              </p>

              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm underline text-[#1A1A18]"
              >
                View reviews on Google
              </a>
            </div>
          )}

          {!loadingReviews && !reviewError && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {reviews.map((review, idx) => (
                <motion.div
                  key={review.id || idx}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: idx * 0.05,
                  }}
                >
                  <SpotlightCard
                    spotlightColor="rgba(217, 119, 6, 0.12)"
                    className="p-8 flex flex-col justify-between space-y-6 h-full shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          {review.reviewer_photo ? (
                            <img
                              src={review.reviewer_photo}
                              alt={review.reviewer_name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 font-serif">
                              {review.reviewer_name?.charAt(0) || "G"}
                            </div>
                          )}

                          <div>
                            <h3 className="text-sm font-medium text-[#1A1A18]">
                              {review.reviewer_name}
                            </h3>

                            <div className="text-[11px] text-stone-400 mt-0.5">
                              Google Review
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-0.5 text-sm">
                          {Array.from({
                            length: Number(review.rating) || 0,
                          }).map((_, starIndex) => (
                            <span key={starIndex}>★</span>
                          ))}
                        </div>
                      </div>

                      <p className="text-stone-600 text-sm font-light leading-relaxed">
                        "{review.review_text}"
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-100/80 flex items-center justify-between text-xs text-stone-400">
                      <span className="font-mono">
                        {review.review_date_time
                          ? new Date(
                              review.review_date_time,
                            ).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })
                          : ""}
                      </span>

                      <span className="text-stone-900 font-medium font-serif italic">
                        Verified Google Review
                      </span>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          )}

          {!loadingReviews && !reviewError && (
            <div className="text-center mt-12">
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-stone-200 bg-white hover:bg-stone-50 text-xs font-medium tracking-wide transition-all"
              >
                View all reviews on Google
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </section>*/}
    </div>
  );
}
