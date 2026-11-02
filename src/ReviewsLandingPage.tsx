import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import * as Assets from "./figmaAssets";
import {
  FigmaHeader,
  FigmaHero1Content,
  FigmaHero2Content,
  FigmaHero3Content,
  FigmaHowLeft,
  FigmaSlide1,
  FigmaSlide2,
  FigmaSlide3,
  FigmaAiInsights,
  FigmaCustomerStories,
  FigmaLogoRowTop,
  FigmaLogoRowBottom,
  FigmaIntegrations,
  FigmaFeedbackHeader,
  FigmaFeedbackCta,
  FigmaTestimonial1,
  FigmaTestimonial2,
  FigmaTestimonial3,
  FigmaTestimonial4,
  FigmaTestimonial5,
  FigmaTestimonial6,
  FigmaTestimonial7,
  FigmaWhatsNew,
  FigmaFooter,
  FigmaMailGraphic,
} from "./figmaSections";

const FAQ_DATA = [
  {
    q: "What is REVIEWS.io",
    a: "REVIEWS.io is an ecommerce review platform that helps online brands collect, manage and display verified customer reviews, UGC and survey feedback. You can collect company reviews (about your business) and product reviews (about what you sell), then show them on your site, in emails and in ads to build trust and drive more sales.",
  },
  {
    q: "How much does REVIEWS.io cost, and is there a free trial?",
    a: "Plans start at $29/month and scale with your monthly order volume and feature requirements. Every plan includes a free 14-day trial with full access to review invitations, customizable widgets, and AI-powered insights so you can test the impact before committing.",
  },
  {
    q: "Can I use REVIEWS.io alongside Trustpilot, or switch from it?",
    a: "Yes! Switching takes less than 5 minutes. You can seamlessly import all of your existing verified product and company reviews via CSV or direct migration tools so you never lose a single hard-earned customer review.",
  },
  {
    q: "Do I own my reviews, and can I take them with me?",
    a: "100% yes. Unlike closed platforms that lock your reviews behind paywalls, every review you collect with REVIEWS.io belongs to your brand. You can export your full review database at any time with zero restrictions.",
  },
  {
    q: "When should I send review invitations, and should I send a reminder?",
    a: "Our AI Flow engine automatically calculates the optimal post-delivery window based on shipping carrier data and product category. Adding a single polite reminder 5–7 days later boosts review conversion rates by up to 42%.",
  },
  {
    q: "What is a good review collection rate?",
    a: "Across e-commerce, a typical review collection rate is 5%–12%, while brands using REVIEWS.io's frictionless in-email rating forms, SMS invitations, and Klaviyo flows routinely achieve 15%–24%.",
  },
  {
    q: "Can I ask past customers for reviews?",
    a: "Absolutely! Using our Review Booster tool, you can upload past order history from the last 6–12 months to send a one-off campaign and build hundreds of verified reviews within days of launching.",
  },
];

export default function ReviewsLandingPage() {
  const [viewportScale, setViewportScale] = useState(1);
  const [viewportHeight, setViewportHeight] = useState(900);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Measure viewport so the 1440px Figma design scales cleanly on any screen
  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setViewportHeight(h);
      // Scale down proportionally if screen < 1440px, or fit nicely on larger screens
      setViewportScale(Math.min(1, w / 1440));
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // ============================================================================
  // 1. HERO 1, 2, 3 STICKY STACKING ANIMATION (Henrietta Hero Style)
  // ============================================================================
  const heroTrackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgressRaw } = useScroll({
    target: heroTrackRef,
    offset: ["start start", "end end"],
  });
  const heroProgress = useSpring(heroProgressRaw, {
    stiffness: 110,
    damping: 26,
    mass: 0.25,
  });

  // First 22% of the scroll track reveals Hero 1 elements one by one; the stacking starts after.
  const HERO1_REVEAL_END = 0.22;
  const stackProgress = useTransform(heroProgress, [HERO1_REVEAL_END, 1], [0, 1], { clamp: true });

  // Hero 1 scales down and rounds corners as Hero 2 slides up over it (Henrietta stacking)
  const hero1Scale = useTransform(stackProgress, [0.12, 0.46], [1, 0.94]);
  const hero1Radius = useTransform(stackProgress, [0.12, 0.46], [0, 36]);
  const hero1OverlayOpacity = useTransform(stackProgress, [0.12, 0.46], [0, 0.32]);
  // Internal scroll within Hero 1 (since Hero 1 is 1257px tall) before Hero 2 covers it
  // (Hero 1 now fits the viewport entirely, so it no longer scrolls under the fixed nav.)

  // Hero 2 slides up from bottom (0.14 -> 0.48) to lie on top of Hero 1,
  // then scales down as Hero 3 slides up over it (0.55 -> 0.95)
  const hero2Y = useTransform(stackProgress, [0.12, 0.46], ["130vh", "0vh"]);
  const hero2Scale = useTransform(stackProgress, [0.54, 0.94], [1, 0.93]);
  const hero2Radius = useTransform(stackProgress, [0.12, 0.46, 0.94], [44, 0, 40]);
  const hero2OverlayOpacity = useTransform(stackProgress, [0.54, 0.94], [0, 0.28]);
  const hero2InnerY = useTransform(stackProgress, [0.44, 0.58], [0, -210]);

  // Hero 3 slides up from bottom (0.56 -> 0.92) to lie on top of Hero 2
  const hero3Y = useTransform(stackProgress, [0.54, 0.90], ["130vh", "0vh"]);
  const hero3Radius = useTransform(stackProgress, [0.54, 0.90], [44, 0]);

  // Track active Hero index for the indicator pill
  const [activeHero, setActiveHero] = useState(0);
  useEffect(() => {
    return heroProgressRaw.on("change", (v) => {
      if (v < 0.44) setActiveHero(0);
      else if (v < 0.75) setActiveHero(1);
      else setActiveHero(2);
    });
  }, [heroProgressRaw]);

  const scrollToHeroSlide = (idx: number) => {
    if (!heroTrackRef.current) return;
    const rect = heroTrackRef.current.getBoundingClientRect();
    const trackTop = window.scrollY + rect.top;
    const scrollable = heroTrackRef.current.offsetHeight - window.innerHeight;
    const targets = [0.04, 0.56, 0.95];
    window.scrollTo({
      top: trackTop + scrollable * targets[idx],
      behavior: "smooth",
    });
  };

  // ============================================================================
  // 2. "HOW IT WORKS" HORIZONTAL SLIDE STACKING ("Someone call us spicy" style)
  // ============================================================================
  const howTrackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: howProgressRaw } = useScroll({
    target: howTrackRef,
    offset: ["start start", "end end"],
  });
  const howProgress = useSpring(howProgressRaw, {
    stiffness: 110,
    damping: 26,
    mass: 0.25,
  });

  // Slide 1 stays pinned at x=0
  const slide1X = useTransform(howProgress, [0, 1], [0, 0]);

  // Slide 2 glides horizontally from 100% (completely offscreen right) to 0% (covering Slide 1)
  const slide2X = useTransform(howProgress, [0.12, 0.48], ["100%", "0%"]);

  // Slide 3 glides horizontally from 100% (completely offscreen right) to 0% (covering Slide 2)
  const slide3X = useTransform(howProgress, [0.52, 0.88], ["100%", "0%"]);

  const [activeHowSlide, setActiveHowSlide] = useState(0);
  useEffect(() => {
    return howProgressRaw.on("change", (v) => {
      if (v < 0.3) setActiveHowSlide(0);
      else if (v < 0.68) setActiveHowSlide(1);
      else setActiveHowSlide(2);
    });
  }, [howProgressRaw]);

  const scrollToHowSlide = (idx: number) => {
    if (!howTrackRef.current) return;
    const rect = howTrackRef.current.getBoundingClientRect();
    const trackTop = window.scrollY + rect.top;
    const scrollable = howTrackRef.current.offsetHeight - window.innerHeight;
    const targets = [0.05, 0.49, 0.94];
    window.scrollTo({
      top: trackTop + scrollable * targets[idx],
      behavior: "smooth",
    });
  };

  // ============================================================================
  // 3. "FEEDBACK" 7-CARD TESTIMONIAL STACK ON SCROLL (Henrietta Testimonials)
  // ============================================================================
  const feedbackTrackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: feedbackProgressRaw } = useScroll({
    target: feedbackTrackRef,
    offset: ["start start", "end end"],
  });
  const feedbackProgress = useSpring(feedbackProgressRaw, {
    stiffness: 110,
    damping: 26,
    mass: 0.25,
  });

  // 7 Testimonial cards: Card 1 is initially visible; Cards 2..7 fly in sequentially
  // and lay directly on top of the stack at their exact Figma coordinates & rotations!
  const card2Y = useTransform(feedbackProgress, [0.03, 0.16], [500, 0]);
  const card2Opacity = useTransform(feedbackProgress, [0.03, 0.08], [0, 1]);

  const card3Y = useTransform(feedbackProgress, [0.18, 0.31], [500, 0]);
  const card3Opacity = useTransform(feedbackProgress, [0.18, 0.23], [0, 1]);

  const card4Y = useTransform(feedbackProgress, [0.33, 0.46], [500, 0]);
  const card4Opacity = useTransform(feedbackProgress, [0.33, 0.38], [0, 1]);

  const card5Y = useTransform(feedbackProgress, [0.48, 0.61], [500, 0]);
  const card5Opacity = useTransform(feedbackProgress, [0.48, 0.53], [0, 1]);

  const card6Y = useTransform(feedbackProgress, [0.63, 0.76], [500, 0]);
  const card6Opacity = useTransform(feedbackProgress, [0.63, 0.68], [0, 1]);

  const card7Y = useTransform(feedbackProgress, [0.78, 0.91], [500, 0]);
  const card7Opacity = useTransform(feedbackProgress, [0.78, 0.83], [0, 1]);

  // ============================================================================
  // 4. CREATIVE SCROLL ANIMATIONS FOR OTHER SECTIONS
  // ============================================================================
  const storiesSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: storiesProgress } = useScroll({
    target: storiesSectionRef,
    offset: ["start end", "center center"],
  });
  const storiesScale = useTransform(storiesProgress, [0, 1], [0.92, 1]);
  const storiesY = useTransform(storiesProgress, [0, 1], [70, 0]);

  const provenWords =
    "Thousands of merchants have grown faster by leveraging customer feedback, UGC and AI insights, enabling them to take data-driven actions.".split(
      " "
    );
  const provenRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: provenProgress } = useScroll({
    target: provenRef,
    offset: ["start 85%", "center 45%"],
  });

  // Compute responsive scale so sticky 100vh sections always fit the screen height & width
  const howContentScale = Math.min(
    viewportScale,
    Math.max(0.72, (viewportHeight - 40) / 840)
  );
  // Hero 1 is fitted exactly to the space below the fixed nav (width- and height-aware).
  // The frame's own 80px top padding tucks ~40px under the nav's bottom edge, so the heading never gets covered.
  const heroNavBottom = Math.round(96 * viewportScale);
  const hero1ContentScale = Math.min(
    viewportScale,
    Math.max(0.25, (viewportHeight - heroNavBottom - 12) / 977)
  );
  // Hero 3 is a 1440 × 1262 Figma frame. Fit the complete composition into
  // the sticky viewport without changing its internal geometry.
  const hero3ContentScale = Math.min(
    viewportScale,
    Math.max(0.55, (viewportHeight - 20) / 1262)
  );
  const hero1Top = Math.round(heroNavBottom - 40 * hero1ContentScale);
  const feedbackContentScale = Math.min(
    viewportScale,
    Math.max(0.65, (viewportHeight - 100) / 1200)
  );

  return (
    <div className="relative min-h-screen w-full bg-[#fbfdf4] text-[#212126] select-none">
      {/* ====================================================================
          STICKY FLOATING GLASS HEADER (From Figma node 164:13642)
      ==================================================================== */}
      <header
        id="header"
        data-section="header"
        className="fixed top-[20px] left-0 right-0 z-50 flex justify-center pointer-events-none"
      >
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transform: `scale(${viewportScale})`,
            transformOrigin: "top center",
          }}
          className="pointer-events-auto backdrop-blur-xl rounded-[1000px] shadow-[0_8px_32px_rgba(1,89,83,0.12)] border border-white/40 transition-shadow hover:shadow-[0_12px_40px_rgba(1,89,83,0.18)]"
        >
          <FigmaHeader />
        </motion.div>
      </header>

      {/* ====================================================================
          REQUIREMENT 1: HERO 1, 2, 3 STICKY PAGE STACKING (Henrietta Reference)
          Each hero frame appears lying on top of the previous page on scroll
      ==================================================================== */}
      <section
        id="hero"
        data-section="hero-stack"
        ref={heroTrackRef}
        className="relative w-full"
        style={{ height: "460vh" }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#e4f5f1]">
          {/* ---------------- HERO 1: Collect reviews. ---------------- */}
          <motion.div
            id="hero-1"
            data-section="hero-1-collect-reviews"
            style={{
              scale: hero1Scale,
              borderRadius: hero1Radius,
            }}
            className="absolute inset-0 z-10 flex items-start justify-center overflow-hidden origin-top shadow-2xl"
          >
            {/* Opaque Figma Mint-to-Cream Hero Background */}
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "#e4f5f1",
                backgroundImage:
                  "radial-gradient(ellipse 70% 42% at 50% 100%, rgba(176,230,222,0.95) 0%, rgba(196,236,230,0.6) 45%, rgba(228,245,241,0) 100%), radial-gradient(ellipse 45% 30% at 50% 45%, rgba(200,238,232,0.45) 0%, rgba(228,245,241,0) 100%)",
              }}
            />
            <motion.div
              style={{
                marginTop: hero1Top,
                scale: hero1ContentScale,
                transformOrigin: "top center",
              }}
              className="relative w-[1440px] shrink-0"
            >
              <FigmaHero1Content progress={heroProgress} />
            </motion.div>
            {/* Darkening veil as Hero 2 lies on top */}
            <motion.div
              style={{ opacity: hero1OverlayOpacity }}
              className="absolute inset-0 bg-[#002926] pointer-events-none z-20"
            />
          </motion.div>

          {/* ---------------- HERO 2: Get found by AI. ---------------- */}
          <motion.div
            id="hero-2"
            data-section="hero-2-get-found-by-ai"
            style={{
              y: hero2Y,
              scale: hero2Scale,
              borderTopLeftRadius: hero2Radius,
              borderTopRightRadius: hero2Radius,
            }}
            className="absolute inset-0 z-20 flex items-start justify-center overflow-hidden origin-top shadow-[0_-28px_70px_rgba(0,45,42,0.35)] border-t border-white/60"
          >
            {/* Opaque Mint-to-Cream background so Hero 2 physically covers Hero 1 */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url("${Assets.imgBg}"), linear-gradient(180deg, #c2f4da 0%, #e8ffc8 50%, #fefcdf 100%)`,
                backgroundImage: `url("${Assets.imgBg}"), linear-gradient(180deg, #dcf3ee 0%, #fefdf0 100%)`,
              }}
            />
            <motion.div
              style={{
                y: hero2InnerY,
                scale: hero1ContentScale,
                transformOrigin: "top center",
              }}
              className="relative w-[1440px] shrink-0 pt-[28px]"
            >
              <FigmaHero2Content />
            </motion.div>
            {/* Darkening veil as Hero 3 lies on top */}
            <motion.div
              style={{ opacity: hero2OverlayOpacity }}
              className="absolute inset-0 bg-[#002926] pointer-events-none z-20"
            />
          </motion.div>

          {/* ---------------- HERO 3: Sell more. (Joomi Can) ---------------- */}
          <motion.div
            id="hero-3"
            data-section="hero-3-sell-more"
            style={{
              y: hero3Y,
              borderTopLeftRadius: hero3Radius,
              borderTopRightRadius: hero3Radius,
            }}
            className="absolute inset-0 z-30 flex items-start justify-center overflow-hidden origin-top bg-[#fefcdf] shadow-[0_-28px_70px_rgba(0,45,42,0.38)] border-t border-white/70"
          >
            <motion.div
              style={{
                scale: hero3ContentScale,
                transformOrigin: "top center",
              }}
              className="relative w-[1440px] shrink-0"
            >
              <FigmaHero3Content />
            </motion.div>
          </motion.div>

          {/* Interactive Hero Stack Indicator (Right Rail) */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2.5 bg-white/70 backdrop-blur-md p-2 rounded-full shadow-lg border border-black/5">
            {[
              { idx: 0, label: "01 · Collect reviews" },
              { idx: 1, label: "02 · Get found by AI" },
              { idx: 2, label: "03 · Sell more" },
            ].map((item) => (
              <button
                key={item.idx}
                onClick={() => scrollToHeroSlide(item.idx)}
                title={item.label}
                className={`group relative flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${activeHero === item.idx
                  ? "w-3.5 h-10 bg-[#057c74]"
                  : "w-3.5 h-3.5 bg-[#057c74]/25 hover:bg-[#057c74]/50"
                  }`}
              >
                <span className="pointer-events-none absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-[#015953] text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          AI INSIGHTS AND ANALYTICS
          Placed directly after the Sell More section.
          Features the high-res sequential reveal animation from reference.
      ==================================================================== */}
      <section
        id="ai-insights"
        data-section="ai-insights"
        className="relative w-full overflow-hidden flex justify-center bg-[#d8f8e1]"
      >
        <div
          style={{
            transform: `scale(${viewportScale})`,
            transformOrigin: "top center",
            height: `${1325 * viewportScale}px`,
          }}
          className="relative w-[1440px] shrink-0"
        >
          <FigmaAiInsights />
        </div>
      </section>

      {/* ====================================================================
          REQUIREMENT 2: "HOW IT WORKS" HORIZONTAL SLIDE STACKING
          Modeled after "Someone call us spicy" in henrietta.wearetattoodigital.com
          Slide 1, 2, 3 lie on top of each other horizontally on each scroll!
      ==================================================================== */}
      <section
        id="how-it-works"
        data-section="how-it-works"
        ref={howTrackRef}
        className="relative w-full bg-[#fefbdb]"
        style={{ height: "320vh" }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-row items-stretch bg-[#fefbdb]">
          {/* Left 50% Column */}
          <div
            data-section="how-left"
            className="w-1/2 h-full flex flex-col justify-center items-start pl-8 sm:pl-12 md:pl-16 lg:pl-20 xl:pl-28 pr-6 sm:pr-8 lg:pr-10 shrink-0 z-10"
          >
            <FigmaHowLeft />
          </div>

          {/* Right 50% Column - Flush to right edge, no right padding, full image showing */}
          <div
            className="w-1/2 h-full relative overflow-hidden pr-0"
            data-node-id="184:26273"
            data-name="stack"
            data-section="how-slides-stack"
          >
            {/* SLIDE 1: Collect review (Base layer, fills entire right half) */}
            <motion.div
              id="how-slide-1"
              data-section="how-slide-1"
              style={{ x: slide1X }}
              onClick={() => scrollToHowSlide(0)}
              className="absolute inset-0 z-10 size-full overflow-hidden shadow-[-16px_0_40px_rgba(0,0,0,0.1)] cursor-pointer"
            >
              <FigmaSlide1 />
            </motion.div>

            {/* SLIDE 2: Elevate conversions (Glides horizontally over Slide 1) */}
            <motion.div
              id="how-slide-2"
              data-section="how-slide-2"
              style={{ x: slide2X }}
              onClick={() => scrollToHowSlide(1)}
              className="absolute inset-0 z-20 size-full overflow-hidden shadow-[-24px_0_50px_rgba(0,0,0,0.22)] cursor-pointer"
            >
              <FigmaSlide2 />
            </motion.div>

            {/* SLIDE 3: Optimize experience / Survey Insights (Glides horizontally over Slide 2) */}
            <motion.div
              id="how-slide-3"
              data-section="how-slide-3"
              style={{ x: slide3X }}
              onClick={() => scrollToHowSlide(2)}
              className="absolute inset-0 z-30 size-full overflow-hidden shadow-[-28px_0_60px_rgba(0,40,37,0.35)] cursor-pointer"
            >
              <FigmaSlide3 />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          REQUIREMENT 4B: CUSTOMER STORIES ("PROOF OF PERFORMANCE")
          Animated fan-out & floating review callout cards
      ==================================================================== */}
      <section
        id="customer-stories"
        data-section="customer-stories"
        ref={storiesSectionRef}
        className="relative w-full overflow-hidden flex justify-center bg-[#f4fbe6]"
      >
        {/* Static background: not affected by the image scale animation */}
        <img
          alt=""
          className="absolute inset-0 size-full object-cover pointer-events-none select-none"
          src={Assets.imgBackground1}
        />
        <div
          style={{
            transform: `scale(${viewportScale})`,
            transformOrigin: "top center",
            height: `${1099 * viewportScale}px`,
          }}
          className="relative w-[1440px] shrink-0"
        >
          <FigmaCustomerStories imageScale={storiesScale} imageY={storiesY} />
        </div>
      </section>

      {/* ====================================================================
          REQUIREMENT 4C: PROVEN SUCCESS (Scroll Word Reveal + Opposing Marquee)
      ==================================================================== */}
      <section
        id="proven-success"
        data-section="proven-success"
        ref={provenRef}
        className="relative w-full overflow-hidden flex justify-center bg-[#fbfdf4]"
      >
        <div
          style={{
            transform: `scale(${viewportScale})`,
            transformOrigin: "top center",
            height: `${790 * viewportScale}px`,
          }}
          className="bg-[#fbfdf4] content-stretch flex flex-col gap-[32px] items-center p-[80px] relative shrink-0 w-[1440px]"
          data-node-id="164:13891"
          data-name="proven success"
        >
          <div className="content-stretch flex flex-col gap-[32px] items-start leading-[1.2] not-italic relative shrink-0 text-center w-full">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-['Roobert:SemiBold'] relative shrink-0 text-[#25cecd] text-[24px] tracking-[-0.48px] w-full"
            >
              PROVEN SUCCESS
            </motion.p>
            <p className="font-['PP_Palma:Fizzy_Heavy'] relative shrink-0 text-[#005b55] text-[72px] tracking-[-1.44px] w-full flex flex-wrap justify-center gap-x-[18px] gap-y-[6px]">
              {provenWords.map((word, i) => {
                const start = i / provenWords.length;
                const end = Math.min(1, start + 0.18);
                return (
                  <WordReveal
                    key={i}
                    word={word}
                    progress={provenProgress}
                    range={[start, end]}
                  />
                );
              })}
            </p>
          </div>

          {/* Infinite Opposing Motion Logo Rows */}
          <div className="h-[322px] overflow-hidden relative shrink-0 w-[1440px]">
            {/* Left & Right edge fade gradients */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#fbfdf4] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#fbfdf4] to-transparent z-10" />

            {/* Top row — 17 logos — moving left to right (Seamless exact Figma marquee) */}
            <div
              data-section="marquee-top"
              className="absolute top-[56.55px] left-0 flex w-max"
            >
              <motion.div
                animate={{ x: [-4400.396, 0] }}
                transition={{
                  duration: 55,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="flex gap-[40px]"
              >
                <FigmaLogoRowTop />
                <FigmaLogoRowTop />
              </motion.div>
            </div>

            {/* Bottom row — 17 logos — moving right to left (Seamless exact Figma marquee) */}
            <div
              data-section="marquee-bottom"
              className="absolute top-[176.55px] left-0 flex w-max"
            >
              <motion.div
                animate={{ x: [0, -4439.208] }}
                transition={{
                  duration: 55,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="flex gap-[40px]"
              >
                <FigmaLogoRowBottom />
                <FigmaLogoRowBottom />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          REQUIREMENT 4D: INTEGRATIONS (Floating Ecosystem Hub)
      ==================================================================== */}
      <section
        id="integrations"
        data-section="integrations"
        className="relative w-full overflow-hidden flex justify-center bg-[#fbfdf4]"
      >
        <div
          style={{
            transform: `scale(${viewportScale})`,
            transformOrigin: "top center",
            height: `${866 * viewportScale}px`,
          }}
          className="relative w-[1440px] shrink-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full [&_div[data-name^='Integration_card']]:transition-transform [&_div[data-name^='Integration_card']]:duration-300 [&_div[data-name^='Integration_card']:hover]:scale-110 [&_div[data-name^='Integration_card']]:cursor-pointer"
          >
            <FigmaIntegrations />
          </motion.div>
        </div>
      </section>

      {/* ====================================================================
          REQUIREMENT 3: FEEDBACK FRAME — 7 TESTIMONIAL CARDS STACK ON SCROLL
          Same as the testimonials animation of henrietta.wearetattoodigital.com
      ==================================================================== */}
      <section
        id="feedback"
        data-section="feedback"
        ref={feedbackTrackRef}
        className="relative w-full bg-[#fdfce4]"
        style={{ height: "480vh" }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#fdfce4]">
          <div
            style={{
              transform: `scale(${feedbackContentScale})`,
              transformOrigin: "center center",
            }}
            className="bg-[#fdfce4] h-[1200px] overflow-visible relative shrink-0 w-[1440px]"
            data-node-id="184:26353"
            data-name="feedback"
          >
            {/* Pinned Section Heading + G2 & Shopify 4.8★ Badges */}
            <div data-section="feedback-header">
              <FigmaFeedbackHeader />
            </div>

            {/* Pinned Bottom CTA Button */}
            <div
              data-section="feedback-cta"
              className="cursor-pointer transition-transform hover:scale-105"
            >
              <FigmaFeedbackCta />
            </div>

            {/* 7-CARD SEQUENTIAL SCROLL STACK (Container matching Figma node 200:53990) */}
            <div
              className="absolute -translate-x-1/2 left-1/2 top-[500px] w-[625px] h-[373px] pointer-events-none"
              data-node-id="200:53990"
              data-name="testimonials"
              data-section="testimonials-stack"
            >
              {/* Card 1: Greyston Bakery (#ffe16b) — Base Card */}
              <motion.div
                id="testimonial-1"
                data-section="testimonial-card-1"
                className="absolute inset-0 pointer-events-none z-[11] [&>*]:pointer-events-auto"
              >
                <FigmaTestimonial1 />
              </motion.div>

              {/* Card 2: Concrete Jungle (#afe4c8, rotate-4) */}
              <motion.div
                id="testimonial-2"
                data-section="testimonial-card-2"
                style={{
                  y: card2Y,
                  opacity: card2Opacity,
                }}
                className="absolute inset-0 pointer-events-none z-[12] [&>*]:pointer-events-auto"
              >
                <FigmaTestimonial2 />
              </motion.div>

              {/* Card 3: Zipster (#005b55, -rotate-4) */}
              <motion.div
                id="testimonial-3"
                data-section="testimonial-card-3"
                style={{
                  y: card3Y,
                  opacity: card3Opacity,
                }}
                className="absolute inset-0 pointer-events-none z-[13] [&>*]:pointer-events-auto"
              >
                <FigmaTestimonial3 />
              </motion.div>

              {/* Card 4: KRIOR (#ffe7e7, rotate-4) */}
              <motion.div
                id="testimonial-4"
                data-section="testimonial-card-4"
                style={{
                  y: card4Y,
                  opacity: card4Opacity,
                }}
                className="absolute inset-0 pointer-events-none z-[14] [&>*]:pointer-events-auto"
              >
                <FigmaTestimonial4 />
              </motion.div>

              {/* Card 5: Caruso's Natural Health (#cbefee, -rotate-4) */}
              <motion.div
                id="testimonial-5"
                data-section="testimonial-card-5"
                style={{
                  y: card5Y,
                  opacity: card5Opacity,
                }}
                className="absolute inset-0 pointer-events-none z-[15] [&>*]:pointer-events-auto"
              >
                <FigmaTestimonial5 />
              </motion.div>

              {/* Card 6: Made By Coopers (#fdf6bb, 0deg) */}
              <motion.div
                id="testimonial-6"
                data-section="testimonial-card-6"
                style={{
                  y: card6Y,
                  opacity: card6Opacity,
                }}
                className="absolute inset-0 pointer-events-none z-[16] [&>*]:pointer-events-auto"
              >
                <FigmaTestimonial6 />
              </motion.div>

              {/* Card 7: Jimmy Joy (bg-white, rotate-7) */}
              <motion.div
                id="testimonial-7"
                data-section="testimonial-card-7"
                style={{
                  y: card7Y,
                  opacity: card7Opacity,
                }}
                className="absolute inset-0 pointer-events-none z-[17] [&>*]:pointer-events-auto"
              >
                <FigmaTestimonial7 />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================
          REQUIREMENT 4E: WHAT'S NEW BANNER (164:19455)
      ==================================================================== */}
      <section
        id="whats-new"
        data-section="whats-new"
        className="relative w-full overflow-hidden flex justify-center bg-[#fc0]"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            transform: `scale(${viewportScale})`,
            transformOrigin: "top center",
            height: `${328 * viewportScale}px`,
          }}
          className="relative w-[1440px] shrink-0"
        >
          <FigmaWhatsNew />
        </motion.div>
      </section>

      {/* ====================================================================
          REQUIREMENT 4F: INTERACTIVE FAQ ACCORDION + FLOATING MAIL GRAPHIC
      ==================================================================== */}
      <section
        id="faq"
        data-section="faq"
        className="relative w-full overflow-hidden flex justify-center bg-[#04635d]"
      >
        <div
          style={{
            transform: `scale(${viewportScale})`,
            transformOrigin: "top center",
          }}
          className="bg-[#04635d] content-stretch flex flex-col items-center overflow-clip py-[96px] relative shrink-0"
          data-node-id="198:34207"
          data-name="FAQ section"
        >
          <div className="content-start flex flex-wrap gap-[64px] items-start max-w-[1280px] relative shrink-0 w-full">
            {/* Left Column: SUPPORT + Frequently asked questions + Floating Yellow Envelope */}
            <div
              data-section="faq-left"
              className="flex flex-col justify-between items-start w-[576px] relative min-h-[640px]"
            >
              <div className="content-stretch flex flex-col gap-[32px] items-start not-italic relative shrink-0">
                <p className="font-['Roobert:SemiBold'] leading-[1.2] relative shrink-0 text-[24px] text-[rgba(48,183,174,0.8)] tracking-[-0.48px]">
                  SUPPORT
                </p>
                <p className="font-['PP_Palma:Fizzy_Heavy'] leading-none relative shrink-0 text-[72px] text-[rgba(255,255,255,0.4)] tracking-[-1.44px] w-[576px]">
                  Frequently asked questions
                </p>
              </div>

              {/* Floating Yellow Envelope Graphic (Figma node 151:12987) */}
              <motion.div
                data-section="faq-envelope"
                animate={{
                  y: [0, -14, 0],
                  rotate: [0, -2.5, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05, rotate: 3 }}
                className="relative mt-[40px] w-[357px] h-[394px] cursor-pointer"
              >
                <div
                  className="w-full h-full mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[7.144px_11.191px] mask-size-[356.775px_407.03px] relative rounded-[9px]"
                  style={{ maskImage: `url("${Assets.imgImage4902}")` }}
                >
                  <img
                    alt="Time to start reviewing envelope"
                    className="absolute inset-0 max-w-none object-bottom pointer-events-none rounded-[9px] size-full"
                    src={Assets.imgImage4903}
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Column: Interactive Accordion for all 7 FAQ items */}
            <div
              data-section="faq-accordion"
              className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-[480px] relative"
            >
              {FAQ_DATA.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <React.Fragment key={idx}>
                    <div className="w-full">
                      <button
                        onClick={() =>
                          setOpenFaqIndex(isOpen ? null : idx)
                        }
                        className="content-stretch cursor-pointer flex flex-col items-center w-full text-left group py-2"
                      >
                        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative text-left">
                            <p className="font-['Roobert:SemiBold'] leading-[normal] not-italic relative shrink-0 text-[24px] text-white group-hover:text-[#a4e2a7] transition-colors w-full">
                              {item.q}
                            </p>
                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{
                                    duration: 0.32,
                                    ease: [0.16, 1, 0.3, 1],
                                  }}
                                  className="overflow-hidden w-full"
                                >
                                  <p className="font-['Roobert:Regular'] leading-[26px] pt-2 text-[18px] text-white/85 w-full">
                                    {item.a}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="relative shrink-0 size-[24px] mt-1"
                          >
                            <img
                              alt={isOpen ? "Collapse" : "Expand"}
                              className="block size-full"
                              src={
                                isOpen
                                  ? Assets.imgMinusCircle
                                  : Assets.imgPlusCircle
                              }
                            />
                          </motion.div>
                        </div>
                      </button>
                    </div>
                    {idx < FAQ_DATA.length - 1 && (
                      <div className="h-px w-full bg-white/20" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          FOOTER (Figma node 151:12970)
      ==================================================================== */}
      <footer
        id="footer"
        data-section="footer"
        className="relative w-full overflow-hidden flex justify-center bg-[#fbfdf4]"
      >
        <div
          style={{
            transform: `scale(${viewportScale})`,
            transformOrigin: "top center",
            height: `${690 * viewportScale}px`,
          }}
          className="relative w-[1440px] shrink-0"
        >
          <FigmaFooter />
        </div>
      </footer>
    </div>
  );
}

function WordReveal({
  word,
  progress,
  range,
}: {
  word: string;
  progress: any;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.22, 1]);
  const y = useTransform(progress, range, [10, 0]);
  return (
    <motion.span style={{ opacity, y }} className="inline-block">
      {word}
    </motion.span>
  );
}
