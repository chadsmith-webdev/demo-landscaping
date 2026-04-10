import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Sun,
  CloudRain,
  Leaf,
  Snowflake,
} from "lucide-react";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
  ScaleIn,
} from "@/components/Animations";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Seasonal Landscaping Services — Spring, Summer, Fall & Winter",
  description:
    "Year-round seasonal landscaping programs in Siloam Springs, AR. Spring cleanups, summer maintenance, fall prep, and irrigation winterization for NW Arkansas homeowners.",
  alternates: { canonical: "https://summithomeremodeling.com/seasonal" },
  openGraph: {
    title: "Seasonal Landscaping Services | Summit Home Remodeling",
    description:
      "Year-round seasonal programs — spring cleanups, summer care, fall prep, and irrigation winterization in NW Arkansas.",
    url: "https://summithomeremodeling.com/seasonal",
  },
};

const SEASONS = [
  {
    id: "spring",
    name: "Spring Cleanup",
    subtitle: "March – April",
    icon: CloudRain,
    color: "oklch(52% 0.17 148)",
    bgColor: "oklch(22% 0.07 148)",
    borderColor: "oklch(32% 0.11 148)",
    image: "/images/seasonal-spring.png",
    description:
      "After an Ozark winter, your lawn and landscape need attention before the growing season hits. Our spring cleanup crew revives everything that's been dormant and sets the foundation for a lush summer.",
    services: [
      "Debris & leaf removal",
      "Bed edging & re-definition",
      "Pre-emergent weed control",
      "Fertilization program start",
      "Aeration & overseeding",
      "Irrigation startup & inspection",
      "Mulch refresh (3-inch depth)",
      "Shrub & ornamental pruning",
    ],
    cta: "Book Spring Cleanup",
    seoNote:
      "Spring cleanup services in Siloam Springs typically book out 3–4 weeks in advance. We recommend scheduling in February.",
  },
  {
    id: "summer",
    name: "Summer Maintenance",
    subtitle: "May – August",
    icon: Sun,
    color: "var(--color-gold)",
    bgColor: "oklch(20% 0.06 82)",
    borderColor: "oklch(74% 0.16 82 / 25%)",
    image: "/images/seasonal-summer.png",
    description:
      "Arkansas summers are hot, dry, and demanding on your landscape. Our summer programs keep things green and controlled despite the heat — with smart irrigation management and targeted turf care.",
    services: [
      "Weekly or bi-weekly mowing",
      "Precision edging & trimming",
      "Irrigation system monitoring",
      "Heat-stress management",
      "Pest & grub control",
      "Weed suppression programs",
      "Tree & shrub deep watering",
      "Seasonal color plantings",
    ],
    cta: "Book Summer Program",
    seoNote:
      "Consistently maintained lawns during summer are 60% more resistant to drought stress. Don't let heat damage your investment.",
  },
  {
    id: "fall",
    name: "Fall Prep",
    subtitle: "September – November",
    icon: Leaf,
    color: "oklch(65% 0.14 55)",
    bgColor: "oklch(18% 0.05 55)",
    borderColor: "oklch(65% 0.14 55 / 25%)",
    image: "/images/seasonal-fall.png",
    description:
      "Fall is the most important season for lawn recovery and winter preparation. We treat, seed, and protect your landscape so it comes back stronger every spring — and survives the Arkansas cold.",
    services: [
      "Leaf removal & hauling",
      "Fall aeration & overseeding",
      "Winterizer fertilization",
      "Perennial cutback & cleanup",
      "Tree & shrub winterization",
      "Bed clearing & debris removal",
      "Cool-season grass overseeding",
      "Final mow & edge cleanup",
    ],
    cta: "Book Fall Prep",
    seoNote:
      "Fall aeration and overseeding is the single most impactful thing you can do for your lawn. Timing matters — we schedule between Sept 15 and Oct 31.",
  },
  {
    id: "winterization",
    name: "Irrigation Winterization",
    subtitle: "October – November",
    icon: Snowflake,
    color: "oklch(70% 0.08 220)",
    bgColor: "oklch(14% 0.03 220)",
    borderColor: "oklch(70% 0.08 220 / 25%)",
    image: "/images/seasonal-winter.png",
    description:
      "Failing to winterize your irrigation system in NW Arkansas can mean thousands in repair costs from burst pipes. We use professional air compressor blowout methods to fully protect every zone.",
    services: [
      "Professional air blowout",
      "Zone-by-zone inspection",
      "Backflow preventer shutdown",
      "Controller programming",
      "Valve & head inspection",
      "Insulation of exposed components",
      "Documentation for spring startup",
      "Emergency freeze response",
    ],
    cta: "Schedule Winterization",
    seoNote:
      "Siloam Springs' first hard freeze typically arrives in late October. We recommend scheduling winterization before October 20th to guarantee availability.",
  },
] as const;

const seasonalFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When should I schedule spring lawn cleanup in Siloam Springs, AR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend booking your spring cleanup in February for a March or early April service date. Spring cleanup slots in Siloam Springs fill quickly — usually 3-4 weeks in advance. Early booking ensures we can treat your lawn before warm-season weeds germinate.",
      },
    },
    {
      "@type": "Question",
      name: "How much does irrigation winterization cost in NW Arkansas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Irrigation winterization (blowout) in NW Arkansas typically ranges from $75–$150 depending on system size and number of zones. Summit Home Remodeling provides free quotes and often includes a spring startup discount for existing winterization clients.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer year-round landscape maintenance contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our annual maintenance contracts bundle spring cleanup, summer weekly care, fall preparation, and irrigation winterization at a discounted rate compared to booking individually. Annual clients also receive scheduling priority and locked-in pricing.",
      },
    },
  ],
};

export default function SeasonalPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seasonalFaqSchema) }}
      />

      {/* PAGE HERO */}
      <section className='page-hero' style={{ minHeight: "50vh" }}>
        <Image
          src='/images/seasonal-hero.png'
          alt='Seasonal landscaping services in Siloam Springs, AR'
          fill
          priority
          quality={85}
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
        <div className='page-hero-content container'>
          <FadeIn delay={0.15}>
            <p className='section-label'>Year-Round Programs</p>
            <h1 style={{ maxWidth: "700px" }}>
              Every Season, Your Landscape{" "}
              <em style={{ color: "var(--color-gold)" }}>At Its Best</em>
            </h1>
            <p
              style={{
                maxWidth: "520px",
                marginTop: "1rem",
                fontSize: "1.05rem",
              }}
            >
              Arkansas weather demands a proactive approach. Our seasonal
              programs keep your outdoor space healthy, beautiful, and protected
              through every extreme.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SEASONAL SERVICES */}
      <section className='section'>
        <div className='container'>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "5rem" }}
          >
            {SEASONS.map((season, index) => {
              const Icon = season.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={season.id}
                  id={season.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "3rem",
                    alignItems: "center",
                  }}
                  className='lg:!grid-cols-2'
                >
                  {/* Image side */}
                  <ScaleIn delay={0.1} className={isEven ? "" : "lg:order-2"}>
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "20px",
                        overflow: "hidden",
                        aspectRatio: "4/3",
                        border: `1px solid ${season.borderColor}`,
                      }}
                    >
                      <Image
                        src={season.image}
                        alt={`${season.name} landscaping in Siloam Springs, AR`}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "1.25rem",
                          left: "1.25rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          padding: "0.5rem 1rem",
                          borderRadius: "100px",
                          backgroundColor: "oklch(11% 0.015 240 / 80%)",
                          backdropFilter: "blur(8px)",
                          border: `1px solid ${season.borderColor}`,
                        }}
                      >
                        <Icon size={14} style={{ color: season.color }} />
                        <span
                          style={{
                            fontFamily: "DM Sans, sans-serif",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            color: season.color,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                          }}
                        >
                          {season.subtitle}
                        </span>
                      </div>
                    </div>
                  </ScaleIn>

                  {/* Content side */}
                  <FadeIn
                    delay={0.2}
                    direction={isEven ? "left" : "right"}
                    className={isEven ? "" : "lg:order-1"}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "10px",
                          backgroundColor: season.bgColor,
                          border: `1px solid ${season.borderColor}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon size={18} style={{ color: season.color }} />
                      </div>
                    </div>
                    <h2 style={{ marginBottom: "0.5rem" }}>{season.name}</h2>
                    <p
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: season.color,
                        marginBottom: "1.25rem",
                      }}
                    >
                      {season.subtitle}
                    </p>
                    <p
                      style={{
                        marginBottom: "2rem",
                        lineHeight: 1.8,
                        fontSize: "1rem",
                      }}
                    >
                      {season.description}
                    </p>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "0.5rem",
                        marginBottom: "1.75rem",
                        padding: "1.25rem",
                        borderRadius: "12px",
                        backgroundColor: "var(--color-slate-surface)",
                        border: "1px solid var(--color-slate-border)",
                      }}
                    >
                      {season.services.map((svc) => (
                        <div
                          key={svc}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.5rem",
                          }}
                        >
                          <span
                            style={{
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              backgroundColor: season.color,
                              marginTop: "7px",
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              fontSize: "0.82rem",
                              color: "var(--color-text-secondary)",
                            }}
                          >
                            {svc}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--color-text-muted)",
                        fontStyle: "italic",
                        marginBottom: "1.5rem",
                        lineHeight: 1.65,
                      }}
                    >
                      💡 {season.seoNote}
                    </p>

                    <Link
                      href='/quote'
                      className='btn-primary'
                      style={{ display: "inline-flex" }}
                    >
                      {season.cta}
                      <ArrowRight size={15} />
                    </Link>
                  </FadeIn>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className='section'
        style={{ backgroundColor: "var(--color-slate-surface)" }}
      >
        <div className='container' style={{ maxWidth: "800px" }}>
          <FadeIn style={{ marginBottom: "3rem" }}>
            <p className='section-label'>Questions</p>
            <h2>Seasonal Program FAQs</h2>
          </FadeIn>
          <StaggerChildren
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {seasonalFaqSchema.mainEntity.map((faq) => (
              <StaggerItem key={faq.name}>
                <div
                  style={{
                    padding: "1.5rem 1.75rem",
                    borderRadius: "12px",
                    backgroundColor: "var(--color-slate-elevated)",
                    border: "1px solid var(--color-slate-border)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--color-text-primary)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {faq.name}
                  </h3>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.75 }}>
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className='section'>
        <div
          className='container'
          style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}
        >
          <ScaleIn>
            <p className='section-label' style={{ justifyContent: "center" }}>
              Book Now
            </p>
            <h2 style={{ marginBottom: "1rem" }}>Get on the Schedule</h2>
            <p style={{ marginBottom: "2.5rem" }}>
              Seasonal slots fill fast. Request your program today and lock in
              your spot with no deposit required.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href='/quote' className='btn-primary'>
                Book a Seasonal Program
                <ArrowRight size={16} />
              </Link>
              <a href={BUSINESS.phoneHref} className='btn-secondary'>
                <Phone size={15} />
                {BUSINESS.phone}
              </a>
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
