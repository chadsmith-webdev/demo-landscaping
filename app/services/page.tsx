import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  CheckCircle,
  Leaf,
  Layers,
  Droplets,
  Sprout,
} from "lucide-react";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
  ScaleIn,
} from "@/components/Animations";
import { BUSINESS, SERVICES } from "@/lib/business";

export const metadata: Metadata = {
  title: "Landscaping Services — Lawn Care, Hardscaping & Irrigation",
  description:
    "Professional lawn care, hardscaping, irrigation systems, and garden design in Siloam Springs, AR. Licensed & insured. Serving Benton County and NW Arkansas since 2011. Free estimates.",
  alternates: { canonical: "https://summithomeremodeling.com/services" },
  openGraph: {
    title: "Landscaping Services | Summit Home Remodeling — Siloam Springs, AR",
    description:
      "Expert landscaping services in NW Arkansas. Lawn care, hardscaping, smart irrigation, and garden design. Free estimates.",
    url: "https://summithomeremodeling.com/services",
  },
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Summit Home Remodeling Landscaping Services",
  description:
    "Professional landscaping services offered by Summit Home Remodeling in Siloam Springs, AR",
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      "@id": `https://summithomeremodeling.com/services#${s.id}`,
      name: s.name,
      description: s.description,
      provider: {
        "@type": "LandscapingBusiness",
        name: BUSINESS.name,
        url: "https://summithomeremodeling.com",
      },
      areaServed: { "@type": "State", name: "Arkansas" },
    },
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does lawn care cost in Siloam Springs, AR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lawn care pricing in Siloam Springs depends on lot size, service frequency, and services included. Most residential weekly maintenance starts around $45–$85 per visit. We provide free, detailed estimates after a property assessment.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer free landscaping estimates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — all estimates from Summit Home Remodeling are completely free and come with no obligation. We'll visit your property, assess the scope, and provide a written quote within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed and insured for landscaping in Arkansas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Summit Home Remodeling holds Arkansas Contractor License #0242187 and carries full general liability and worker's compensation insurance. We're happy to provide proof of insurance upon request.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle irrigation winterization in NW Arkansas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Irrigation winterization (blowout) is a critical service for NW Arkansas winters. We schedule fall blowout services throughout October and November to protect your system before the first freeze.",
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* PAGE HERO */}
      <section className='page-hero' style={{ minHeight: "50vh" }}>
        <Image
          src='/images/services-hero.png'
          alt='Professional landscaping services by Summit Home Remodeling'
          fill
          priority
          quality={85}
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div className='page-hero-content container' style={{ zIndex: 1 }}>
          <FadeIn delay={0.15}>
            <p className='section-label'>Our Expertise</p>
            <h1 style={{ maxWidth: "700px" }}>
              Landscaping Services Built for{" "}
              <em style={{ color: "var(--color-gold)" }}>Northwest Arkansas</em>
            </h1>
            <p
              style={{
                maxWidth: "540px",
                marginTop: "1rem",
                fontSize: "1.05rem",
              }}
            >
              Every service we offer is designed around Arkansas soil, climate,
              and terrain — so your landscape performs beautifully year-round.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES DETAIL */}
      <section className='section'>
        <div className='container'>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "6rem" }}
          >
            {SERVICES.map((service, index) => {
              const Icon = ICON_MAP[service.icon];
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "3rem",
                    alignItems: "center",
                  }}
                  className='lg:!grid-cols-2'
                >
                  {/* Image */}
                  <ScaleIn
                    delay={0.1}
                    style={{ order: isEven ? 0 : 1 }}
                    className={isEven ? "" : "lg:!order-2"}
                  >
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "20px",
                        overflow: "hidden",
                        aspectRatio: "4/3",
                        border: "1px solid var(--color-slate-border)",
                      }}
                    >
                      <Image
                        src={`/images/service-${index + 1}.png`}
                        alt={service.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, oklch(11% 0.015 240 / 60%), transparent)",
                        }}
                      />
                    </div>
                  </ScaleIn>

                  {/* Content */}
                  <FadeIn
                    delay={0.2}
                    direction={isEven ? "left" : "right"}
                    style={{ order: isEven ? 1 : 0 }}
                    className={isEven ? "" : "lg:!order-1"}
                  >
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "14px",
                        backgroundColor: "var(--color-forest-deep)",
                        border: "1px solid var(--color-forest-mid)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1.5rem",
                      }}
                    >
                      {Icon && (
                        <Icon
                          size={24}
                          style={{ color: "oklch(68% 0.15 148)" }}
                        />
                      )}
                    </div>
                    <p className='section-label'>{`0${index + 1}`}</p>
                    <h2 style={{ marginBottom: "1rem" }}>{service.name}</h2>
                    <p
                      style={{
                        marginBottom: "2rem",
                        fontSize: "1.05rem",
                        lineHeight: 1.8,
                      }}
                    >
                      {service.description}
                    </p>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "0.6rem",
                        marginBottom: "2rem",
                      }}
                    >
                      {service.features.map((f) => (
                        <div
                          key={f}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.6rem",
                          }}
                        >
                          <CheckCircle
                            size={15}
                            style={{
                              color: "oklch(52% 0.17 148)",
                              marginTop: "3px",
                              flexShrink: 0,
                            }}
                          />
                          <span
                            style={{
                              fontSize: "0.88rem",
                              color: "var(--color-text-secondary)",
                            }}
                          >
                            {f}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href='/quote'
                      className='btn-primary'
                      style={{ display: "inline-flex" }}
                    >
                      Get a Quote
                      <ArrowRight size={15} />
                    </Link>
                  </FadeIn>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section
        className='section'
        style={{ backgroundColor: "var(--color-slate-surface)" }}
      >
        <div className='container' style={{ maxWidth: "800px" }}>
          <FadeIn style={{ marginBottom: "3rem" }}>
            <p className='section-label'>Common Questions</p>
            <h2>Frequently Asked Questions</h2>
          </FadeIn>

          <StaggerChildren
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {faqSchema.mainEntity.map((faq) => (
              <StaggerItem key={faq.name}>
                <div
                  style={{
                    padding: "1.75rem",
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
                  <p style={{ fontSize: "0.92rem", lineHeight: 1.75 }}>
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
              Let&apos;s Get Started
            </p>
            <h2 style={{ marginBottom: "1rem" }}>
              Ready for a Beautiful Landscape?
            </h2>
            <p style={{ marginBottom: "2.5rem" }}>
              Contact us today for a free, no-pressure estimate. Most estimates
              are delivered within 24 hours.
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
                Request Free Estimate
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
