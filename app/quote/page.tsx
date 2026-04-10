import { Metadata } from "next";
import { Phone, MessageSquare, Clock, MapPin, Star } from "lucide-react";
import { BUSINESS, SERVICE_AREAS } from "@/lib/business";
import { QuoteForm } from "@/components/QuoteForm";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/Animations";

export const metadata: Metadata = {
  title: "Get a Free Estimate | No-Obligation Landscaping Quotes",
  description:
    "Request your free landscaping estimate in Siloam Springs and NW Arkansas. Serving Gentry, Decatur, Gravette, Cave Springs & Bentonville. Respond within 1 business day.",
  openGraph: {
    title: "Get a Free Landscaping Estimate | Summit Home Remodeling",
    description:
      "Tell us about your project — lawn care, hardscaping, irrigation, or full landscape transformation. Free estimates, no obligation.",
    url: `${BUSINESS.url}/quote`,
  },
};

const TRUST_SIGNALS = [
  {
    icon: Star,
    stat: "4.9★",
    label: "Average rating across 140+ reviews",
  },
  {
    icon: Clock,
    stat: "< 24 hrs",
    label: "Response time on all quote requests",
  },
  {
    icon: MapPin,
    stat: "25-mile radius",
    label: "Service area across NW Arkansas",
  },
  {
    icon: Phone,
    stat: "Free",
    label: "Estimates — always no obligation",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${BUSINESS.url}/quote#webpage`,
      url: `${BUSINESS.url}/quote`,
      name: "Get a Free Landscaping Estimate",
      description:
        "Request a free landscaping estimate from Summit Home Remodeling in Siloam Springs, AR. Serving NW Arkansas with lawn care, hardscaping, irrigation, and garden design.",
      isPartOf: { "@id": `${BUSINESS.url}#website` },
      about: { "@id": `${BUSINESS.url}#business` },
    },
    {
      "@type": "FAQPage",
      "@id": `${BUSINESS.url}/quote#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does it take to receive my estimate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We respond to all quote requests within one business day. For urgent projects, call us directly at (479) 524-8830 for same-day response.",
          },
        },
        {
          "@type": "Question",
          name: "Do you charge for estimates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No — all estimates from Summit Home Remodeling are completely free and carry no obligation. We'll walk your property, discuss your vision, and provide a detailed written quote.",
          },
        },
        {
          "@type": "Question",
          name: "What areas do you service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `Summit Home Remodeling services Siloam Springs and surrounding areas within a 25-mile radius including ${SERVICE_AREAS.filter(
              (a) => !a.isHq,
            )
              .map((a) => a.city)
              .join(", ")}.`,
          },
        },
      ],
    },
  ],
};

export default function QuotePage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section
        style={{
          paddingTop: "clamp(7rem, 14vw, 10rem)",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, oklch(22% 0.07 148 / 0.5), transparent), var(--color-base)",
          borderBottom: "1px solid oklch(22% 0.07 148)",
        }}
      >
        <div className='container'>
          <FadeIn>
            <p className='section-label' style={{ textAlign: "center" }}>
              Free Estimate
            </p>
            <h1
              style={{
                textAlign: "center",
                maxWidth: "640px",
                margin: "0 auto 1.25rem",
              }}
            >
              Tell Us About Your Project
            </h1>
            <p
              style={{
                textAlign: "center",
                maxWidth: "540px",
                margin: "0 auto",
                color: "var(--color-text-muted)",
                fontSize: "1.125rem",
              }}
            >
              Fill out the form below and we&apos;ll get back to you within one
              business day with a personalized, no-obligation estimate.
            </p>
          </FadeIn>

          {/* Trust signals */}
          <StaggerChildren>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "1rem",
                marginTop: "3rem",
                maxWidth: "800px",
                margin: "3rem auto 0",
              }}
            >
              {TRUST_SIGNALS.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.stat}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "1.25rem 1rem",
                        borderRadius: "12px",
                        backgroundColor: "var(--color-slate-surface)",
                        border: "1px solid oklch(22% 0.07 148)",
                        textAlign: "center",
                      }}
                    >
                      <Icon
                        size={20}
                        style={{ color: "var(--color-gold)" }}
                        aria-hidden='true'
                      />
                      <span
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          color: "var(--color-text-primary)",
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {item.stat}
                      </span>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--color-text-muted)",
                          lineHeight: 1.4,
                        }}
                      >
                        {item.label}
                      </span>
                    </div>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: "clamp(3rem, 6vw, 5rem) 0" }}>
        <div className='container'>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            {/* Form */}
            <FadeIn direction='left'>
              <div
                style={{
                  backgroundColor: "var(--color-slate-surface)",
                  border: "1px solid oklch(22% 0.07 148)",
                  borderRadius: "20px",
                  padding: "clamp(1.5rem, 4vw, 2.5rem)",
                }}
              >
                <h2 style={{ marginBottom: "0.5rem", fontSize: "1.5rem" }}>
                  Request Your Free Estimate
                </h2>
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    marginBottom: "2rem",
                    fontSize: "0.9rem",
                  }}
                >
                  Fields marked with * are required
                </p>
                <QuoteForm />
              </div>
            </FadeIn>

            {/* Sidebar */}
            <FadeIn direction='right' delay={0.15}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {/* Call CTA */}
                <div
                  style={{
                    backgroundColor: "oklch(22% 0.07 148)",
                    borderRadius: "16px",
                    padding: "1.75rem",
                    border: "1px solid oklch(32% 0.11 148)",
                  }}
                >
                  <p
                    className='section-label'
                    style={{ marginBottom: "0.5rem" }}
                  >
                    Prefer to Talk?
                  </p>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>
                    Call or Text&nbsp;Us Directly
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-text-muted)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    Speak with our estimator team — no automated systems.
                  </p>
                  <a
                    href={BUSINESS.phoneHref}
                    className='btn-primary'
                    style={{ justifyContent: "center", width: "100%" }}
                  >
                    <Phone size={16} />
                    {BUSINESS.phone}
                  </a>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "0.75rem",
                      color: "var(--color-text-muted)",
                      marginTop: "0.75rem",
                    }}
                  >
                    {BUSINESS.hours.display}
                  </p>
                </div>

                {/* Email */}
                <div
                  style={{
                    backgroundColor: "var(--color-slate-surface)",
                    borderRadius: "16px",
                    padding: "1.5rem",
                    border: "1px solid oklch(22% 0.07 148)",
                  }}
                >
                  <MessageSquare
                    size={20}
                    style={{
                      color: "var(--color-gold)",
                      marginBottom: "0.75rem",
                    }}
                    aria-hidden='true'
                  />
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                    Email Direct
                  </h3>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    style={{
                      color: "oklch(55% 0.17 148)",
                      fontSize: "0.875rem",
                      wordBreak: "break-all",
                    }}
                  >
                    {BUSINESS.email}
                  </a>
                </div>

                {/* Service Areas */}
                <div
                  style={{
                    backgroundColor: "var(--color-slate-surface)",
                    borderRadius: "16px",
                    padding: "1.5rem",
                    border: "1px solid oklch(22% 0.07 148)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-gold)",
                      marginBottom: "1rem",
                    }}
                  >
                    Service Areas
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.6rem",
                    }}
                  >
                    {SERVICE_AREAS.map((area) => (
                      <li
                        key={area.city}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          fontSize: "0.875rem",
                          color: "var(--color-text-secondary)",
                        }}
                      >
                        <MapPin
                          size={13}
                          style={{
                            color: "oklch(52% 0.17 148)",
                            flexShrink: 0,
                          }}
                          aria-hidden='true'
                        />
                        <span>
                          {area.city}, {area.state}
                        </span>
                        {area.isHq && (
                          <span
                            style={{
                              marginLeft: "auto",
                              fontSize: "0.65rem",
                              backgroundColor: "oklch(22% 0.07 148)",
                              color: "oklch(52% 0.17 148)",
                              padding: "0.15rem 0.5rem",
                              borderRadius: "999px",
                              border: "1px solid oklch(32% 0.11 148)",
                            }}
                          >
                            HQ
                          </span>
                        )}
                        {!area.isHq && (
                          <span
                            style={{
                              marginLeft: "auto",
                              fontSize: "0.72rem",
                              color: "var(--color-text-muted)",
                            }}
                          >
                            {area.distance} mi
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <a
                    href='/service-areas'
                    style={{
                      display: "block",
                      marginTop: "1.25rem",
                      fontSize: "0.8rem",
                      color: "oklch(52% 0.17 148)",
                      textDecoration: "none",
                    }}
                  >
                    View service area map →
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          padding: "clamp(3rem, 6vw, 5rem) 0",
          borderTop: "1px solid oklch(22% 0.07 148)",
          backgroundColor: "var(--color-slate-surface)",
        }}
      >
        <div className='container' style={{ maxWidth: "720px" }}>
          <FadeIn>
            <p className='section-label' style={{ textAlign: "center" }}>
              Common Questions
            </p>
            <h2 style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              About Our Estimate Process
            </h2>
          </FadeIn>

          <StaggerChildren>
            {[
              {
                q: "How long does it take to receive my estimate?",
                a: "We respond to all quote requests within one business day. For urgent projects, call us directly at (479) 524-8830 and we'll arrange same-day contact.",
              },
              {
                q: "Do you charge for estimates?",
                a: "Never. All estimates from Summit Home Remodeling are completely free and carry no obligation. We'll walk your property, listen to your vision, and deliver a detailed written proposal.",
              },
              {
                q: "What happens after I submit the form?",
                a: "Our team reviews your project details and assigns a dedicated estimator familiar with your area. They'll contact you to schedule a free on-site walkthrough, then deliver a written estimate within 48 hours of the visit.",
              },
              {
                q: "What areas do you service?",
                a: `We service Siloam Springs and surrounding communities within a 25-mile radius, including ${SERVICE_AREAS.filter(
                  (a) => !a.isHq,
                )
                  .map((a) => a.city)
                  .join(", ")}.`,
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div
                  style={{
                    borderBottom: "1px solid oklch(22% 0.07 148)",
                    padding: "1.5rem 0",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      marginBottom: "0.75rem",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {item.q}
                  </h3>
                  <p
                    style={{
                      color: "var(--color-text-muted)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
