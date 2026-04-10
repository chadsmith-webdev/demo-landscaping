import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  MapPin,
  Leaf,
  Layers,
  Droplets,
  Sprout,
  Award,
  Shield,
  Clock,
} from "lucide-react";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
  ScaleIn,
} from "@/components/Animations";
import {
  BUSINESS,
  SERVICES,
  TESTIMONIALS,
  SERVICE_AREAS,
} from "@/lib/business";

export const metadata: Metadata = {
  title: "Summit Home Remodeling | Landscaping Services in Siloam Springs, AR",
  description:
    "Transform your outdoor space with Siloam Springs' most trusted landscaping company. Expert lawn care, hardscaping, irrigation, and garden design serving NW Arkansas since 2011. Free quotes.",
  alternates: { canonical: "https://summithomeremodeling.com" },
};

const ICON_MAP: Record<
  string,
  React.ComponentType<{ size?: number; style?: React.CSSProperties }>
> = {
  Leaf,
  Layers,
  Droplets,
  Sprout,
};

const STATS = [
  { value: "14+", label: "Years in Business" },
  { value: "800+", label: "Projects Completed" },
  { value: "4.9★", label: "Google Rating" },
  { value: "6", label: "Cities Served" },
];

const WHY_US = [
  {
    icon: Award,
    title: "Licensed & Insured",
    desc: "AR Contractor #0242187. Fully bonded and insured for every project.",
  },
  {
    icon: Shield,
    title: "Satisfaction Guaranteed",
    desc: "We stand behind our work. If you're not happy, we make it right.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    desc: "We respect your schedule and show up when we say we will.",
  },
  {
    icon: MapPin,
    title: "Locally Rooted",
    desc: "Siloam Springs born and raised. We know this land and this climate.",
  },
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://summithomeremodeling.com/#website",
  name: BUSINESS.name,
  url: "https://summithomeremodeling.com",
};

export default function HomePage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "100dvh",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src='/images/hero.png'
            alt='Beautifully landscaped home in Siloam Springs, AR'
            fill
            priority
            quality={90}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(160deg, oklch(11% 0.015 240 / 20%) 0%, oklch(11% 0.015 240 / 75%) 50%, oklch(11% 0.015 240 / 95%) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "40%",
              background:
                "linear-gradient(to top, oklch(11% 0.015 240), transparent)",
            }}
          />
        </div>

        <div
          className='container'
          style={{
            position: "relative",
            zIndex: 1,
            paddingBottom: "clamp(3rem, 8vw, 6rem)",
          }}
        >
          <FadeIn delay={0.1}>
            <p className='section-label'>Siloam Springs, Arkansas</p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <h1
              className='text-balance'
              style={{ marginBottom: "1.5rem", maxWidth: "800px" }}
            >
              Where Outdoor Spaces{" "}
              <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>
                Become Sanctuaries
              </em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: "var(--color-text-secondary)",
                maxWidth: "560px",
                marginBottom: "2.5rem",
                lineHeight: 1.75,
              }}
            >
              Northwest Arkansas&apos; premier landscaping company. Lawn care,
              hardscaping, smart irrigation, and garden design — crafted for the
              Ozark terrain and your unique vision.
            </p>
          </FadeIn>
          <FadeIn delay={0.55}>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href='/quote' className='btn-primary'>
                Get a Free Quote
                <ArrowRight size={16} />
              </Link>
              <a href={BUSINESS.phoneHref} className='btn-secondary'>
                <Phone size={15} />
                {BUSINESS.phone}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* STATS BAR */}
      <section
        style={{
          backgroundColor: "var(--color-forest-deep)",
          borderTop: "1px solid oklch(32% 0.11 148)",
          borderBottom: "1px solid oklch(32% 0.11 148)",
        }}
      >
        <div className='container py-6'>
          <StaggerChildren
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1.5rem",
            }}
            className='md:!grid-cols-4'
          >
            {STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "clamp(2rem, 4vw, 2.8rem)",
                      fontWeight: 700,
                      color: "var(--color-gold)",
                      lineHeight: 1,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "oklch(68% 0.15 148)",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className='section'>
        <div className='container'>
          <FadeIn>
            <p className='section-label'>What We Do</p>
            <h2 style={{ marginBottom: "1rem", maxWidth: "600px" }}>
              Complete Landscape Services for NW Arkansas
            </h2>
            <p style={{ maxWidth: "540px", marginBottom: "3.5rem" }}>
              From weekly lawn care to full outdoor transformations — we handle
              every aspect of your landscape so you can enjoy it, not maintain
              it.
            </p>
          </FadeIn>

          <StaggerChildren
            style={{
              display: "grid",
              gap: "1.5rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon];
              return (
                <StaggerItem key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    style={{ display: "block", height: "100%" }}
                  >
                    <article
                      className='card'
                      style={{
                        padding: "2rem",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "12px",
                          backgroundColor: "var(--color-forest-deep)",
                          border: "1px solid var(--color-forest-mid)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {Icon && (
                          <Icon
                            size={22}
                            style={{ color: "oklch(68% 0.15 148)" }}
                          />
                        )}
                      </div>
                      <h3 style={{ fontSize: "1.25rem", marginTop: "0.25rem" }}>
                        {service.name}
                      </h3>
                      <p style={{ fontSize: "0.9rem", flexGrow: 1 }}>
                        {service.description}
                      </p>
                      <span
                        style={{
                          fontFamily: "DM Sans, sans-serif",
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: "var(--color-gold)",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                        }}
                      >
                        Learn More <ArrowRight size={13} />
                      </span>
                    </article>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* FEATURED IMAGE BREAK */}
      <section
        style={{
          position: "relative",
          height: "clamp(280px, 40vw, 500px)",
          overflow: "hidden",
        }}
      >
        <Image
          src='/images/services-hero.png'
          alt='Professional hardscaping project by Summit Home Remodeling'
          fill
          style={{ objectFit: "cover", objectPosition: "center 60%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, oklch(11% 0.015 240 / 90%) 0%, oklch(11% 0.015 240 / 30%) 100%)",
          }}
        />
        <div
          className='container'
          style={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FadeIn direction='right'>
            <p className='section-label'>Our Work Speaks</p>
            <h2 style={{ maxWidth: "480px", marginBottom: "1.5rem" }}>
              Built for the Ozark Terrain
            </h2>
            <Link href='/services' className='btn-primary'>
              View All Services
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* WHY SUMMIT */}
      <section
        className='section'
        style={{ backgroundColor: "var(--color-slate-surface)" }}
      >
        <div className='container'>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "4rem",
              alignItems: "center",
            }}
            className='lg:!grid-cols-2'
          >
            <FadeIn direction='right'>
              <p className='section-label'>Why Choose Us</p>
              <h2 style={{ marginBottom: "1rem" }}>
                Landscaping You Can Count On
              </h2>
              <p style={{ marginBottom: "2rem" }}>
                Summit Home Remodeling has been the trusted choice for Siloam
                Springs homeowners since 2011. We combine deep local knowledge
                with professional craftsmanship and honest communication.
              </p>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginBottom: "2.5rem",
                }}
              >
                {[
                  "Free detailed estimates — no surprise charges",
                  "Locally owned and operated since 2011",
                  "Crew arrives on time, cleans up before leaving",
                  "Seasonal maintenance programs for year-round beauty",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                    }}
                  >
                    <CheckCircle
                      size={18}
                      style={{
                        color: "oklch(52% 0.17 148)",
                        marginTop: "2px",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        color: "var(--color-text-secondary)",
                        fontSize: "0.95rem",
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Link href='/quote' className='btn-primary'>
                Request a Free Estimate
                <ArrowRight size={16} />
              </Link>
            </FadeIn>

            <StaggerChildren
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {WHY_US.map(({ icon: Icon, title, desc }) => (
                <StaggerItem key={title}>
                  <div
                    className='card'
                    style={{
                      padding: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        backgroundColor: "oklch(20% 0.06 82)",
                        border: "1px solid oklch(74% 0.16 82 / 20%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={18} style={{ color: "var(--color-gold)" }} />
                    </div>
                    <h4 style={{ fontSize: "0.95rem" }}>{title}</h4>
                    <p style={{ fontSize: "0.82rem", lineHeight: 1.65 }}>
                      {desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className='section'>
        <div className='container'>
          <FadeIn style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className='section-label' style={{ justifyContent: "center" }}>
              What Our Clients Say
            </p>
            <h2>Trusted Across Northwest Arkansas</h2>
            <p style={{ maxWidth: "480px", margin: "1rem auto 0" }}>
              Over 140 five-star reviews from homeowners across Benton County.
            </p>
          </FadeIn>

          <StaggerChildren
            style={{
              display: "grid",
              gap: "1.5rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {TESTIMONIALS.map((review) => (
              <StaggerItem key={review.name}>
                <article
                  className='card'
                  style={{
                    padding: "1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <div style={{ display: "flex", gap: "3px" }}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        size={14}
                        fill='var(--color-gold)'
                        style={{ color: "var(--color-gold)" }}
                      />
                    ))}
                  </div>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      fontStyle: "italic",
                      flexGrow: 1,
                      lineHeight: 1.7,
                    }}
                  >
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div>
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {review.name}
                    </p>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--color-text-muted)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        marginTop: "0.2rem",
                      }}
                    >
                      <MapPin size={11} />
                      {review.location}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* SERVICE AREAS PREVIEW */}
      <section
        className='section'
        style={{
          backgroundColor: "var(--color-forest-deep)",
          borderTop: "1px solid oklch(32% 0.11 148)",
        }}
      >
        <div className='container'>
          <FadeIn style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className='section-label' style={{ justifyContent: "center" }}>
              Where We Work
            </p>
            <h2>Serving Communities Across NW Arkansas</h2>
          </FadeIn>

          <StaggerChildren
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              justifyContent: "center",
              marginBottom: "2.5rem",
            }}
          >
            {SERVICE_AREAS.map((area) => (
              <StaggerItem key={area.name}>
                <Link
                  href='/service-areas'
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.6rem 1.2rem",
                    borderRadius: "100px",
                    border: "1px solid oklch(32% 0.11 148)",
                    backgroundColor: "oklch(22% 0.07 148 / 50%)",
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: "oklch(68% 0.15 148)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <MapPin size={12} />
                  {area.name}, {area.state}
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn style={{ textAlign: "center" }}>
            <Link href='/service-areas' className='btn-secondary'>
              View Service Area Map
              <ArrowRight size={15} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className='section'
        style={{ backgroundColor: "var(--color-slate-surface)" }}
      >
        <div
          className='container'
          style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}
        >
          <ScaleIn>
            <p className='section-label' style={{ justifyContent: "center" }}>
              Ready to Transform Your Yard?
            </p>
            <h2 style={{ marginBottom: "1rem" }}>
              Get Your Free Estimate Today
            </h2>
            <p style={{ marginBottom: "2.5rem" }}>
              Tell us about your project — we&apos;ll respond within one
              business day with a detailed, no-obligation estimate.
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
                Request Free Quote
                <ArrowRight size={16} />
              </Link>
              <a href={BUSINESS.phoneHref} className='btn-secondary'>
                <Phone size={15} />
                Call Us Directly
              </a>
            </div>
          </ScaleIn>
        </div>
      </section>
    </>
  );
}
