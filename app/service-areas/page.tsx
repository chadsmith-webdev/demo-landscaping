import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
  ScaleIn,
} from "@/components/Animations";
import { BUSINESS, SERVICE_AREAS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Service Areas — Landscaping Near Siloam Springs, AR",
  description:
    "Summit Home Remodeling serves Siloam Springs, Gentry, Decatur, Gravette, Cave Springs, and Bentonville, AR. Professional landscaping within 25 miles of Siloam Springs, NW Arkansas.",
  alternates: { canonical: "https://summithomeremodeling.com/service-areas" },
  openGraph: {
    title: "Landscaping Service Areas | Summit Home Remodeling — NW Arkansas",
    description:
      "Serving Siloam Springs, Gentry, Decatur, Gravette, Cave Springs, and Bentonville within 25 miles.",
    url: "https://summithomeremodeling.com/service-areas",
  },
};

const areaListSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://summithomeremodeling.com/#business",
  name: BUSINESS.name,
  areaServed: SERVICE_AREAS.map((area) => ({
    "@type": "City",
    name: area.name,
    containedIn: {
      "@type": "AdministrativeArea",
      name: "Benton County",
      containedIn: { "@type": "State", name: "Arkansas" },
    },
  })),
};

// Approximate SVG map coordinates for service area cities
// Bounding box: lat 36.15–36.45, lng -94.60 to -94.10
// SVG viewBox 0 0 500 300
function latLngToSvg(lat: number, lng: number) {
  const minLat = 36.12,
    maxLat = 36.47;
  const minLng = -94.65,
    maxLng = -94.1;
  const x = ((lng - minLng) / (maxLng - minLng)) * 500;
  const y = ((maxLat - lat) / (maxLat - minLat)) * 300;
  return { x, y };
}

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaListSchema) }}
      />

      {/* PAGE HEADER */}
      <section
        style={{
          paddingTop: "clamp(6rem, 12vw, 10rem)",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
          backgroundColor: "var(--color-slate-surface)",
          borderBottom: "1px solid var(--color-slate-border)",
        }}
      >
        <div className='container'>
          <FadeIn>
            <p className='section-label'>Where We Work</p>
            <h1 style={{ maxWidth: "700px", marginBottom: "1rem" }}>
              Serving Communities Across{" "}
              <em style={{ color: "var(--color-gold)" }}>Northwest Arkansas</em>
            </h1>
            <p
              style={{
                maxWidth: "580px",
                fontSize: "1.05rem",
                lineHeight: 1.8,
              }}
            >
              Based in Siloam Springs, Summit Home Remodeling provides
              professional landscaping to homeowners within a 25-mile radius.
              From Gentry to Bentonville — we&apos;re your local landscape
              experts.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className='section'>
        <div className='container'>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              alignItems: "start",
            }}
            className='lg:!grid-cols-2'
          >
            {/* SVG Map */}
            <ScaleIn>
              <div
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid var(--color-slate-border)",
                  backgroundColor: "var(--color-slate-surface)",
                  padding: "1.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-text-muted)",
                    marginBottom: "1rem",
                  }}
                >
                  NW Arkansas Service Area · ~25 Mile Radius
                </p>
                <svg
                  viewBox='0 0 500 300'
                  style={{ width: "100%", height: "auto", display: "block" }}
                  aria-label='Map of Summit Home Remodeling service areas in NW Arkansas'
                  role='img'
                >
                  {/* Background */}
                  <rect
                    width='500'
                    height='300'
                    fill='oklch(16% 0.02 240)'
                    rx='12'
                  />

                  {/* Grid lines */}
                  {[1, 2, 3, 4].map((i) => (
                    <line
                      key={`h${i}`}
                      x1='0'
                      y1={i * 60}
                      x2='500'
                      y2={i * 60}
                      stroke='oklch(28% 0.03 240)'
                      strokeWidth='1'
                    />
                  ))}
                  {[1, 2, 3, 4].map((i) => (
                    <line
                      key={`v${i}`}
                      x1={i * 100}
                      y1='0'
                      x2={i * 100}
                      y2='300'
                      stroke='oklch(28% 0.03 240)'
                      strokeWidth='1'
                    />
                  ))}

                  {/* Service radius circle centered on Siloam Springs */}
                  {(() => {
                    const center = latLngToSvg(
                      BUSINESS.geo.lat,
                      BUSINESS.geo.lng,
                    );
                    return (
                      <circle
                        cx={center.x}
                        cy={center.y}
                        r='120'
                        fill='oklch(22% 0.07 148 / 15%)'
                        stroke='oklch(32% 0.11 148)'
                        strokeWidth='1.5'
                        strokeDasharray='6 4'
                      />
                    );
                  })()}

                  {/* Roads (simplified) */}
                  <line
                    x1='50'
                    y1='150'
                    x2='450'
                    y2='150'
                    stroke='oklch(28% 0.03 240)'
                    strokeWidth='2'
                  />
                  <line
                    x1='250'
                    y1='20'
                    x2='250'
                    y2='280'
                    stroke='oklch(28% 0.03 240)'
                    strokeWidth='2'
                  />
                  <line
                    x1='50'
                    y1='200'
                    x2='400'
                    y2='80'
                    stroke='oklch(28% 0.03 240)'
                    strokeWidth='1'
                    strokeOpacity='0.6'
                  />

                  {/* Service area dots */}
                  {SERVICE_AREAS.map((area, i) => {
                    const { x, y } = latLngToSvg(area.lat, area.lng);
                    const isHome = area.name === "Siloam Springs";
                    return (
                      <g key={area.name}>
                        {/* Outer glow */}
                        <circle
                          cx={x}
                          cy={y}
                          r={isHome ? 18 : 12}
                          fill={
                            isHome
                              ? "oklch(74% 0.16 82 / 15%)"
                              : "oklch(52% 0.17 148 / 10%)"
                          }
                        />
                        {/* Main dot */}
                        <circle
                          cx={x}
                          cy={y}
                          r={isHome ? 8 : 5}
                          fill={
                            isHome
                              ? "oklch(74% 0.16 82)"
                              : "oklch(52% 0.17 148)"
                          }
                        />
                        {/* Inner dot */}
                        {isHome && (
                          <circle
                            cx={x}
                            cy={y}
                            r='3'
                            fill='oklch(11% 0.015 240)'
                          />
                        )}
                        {/* Label */}
                        <text
                          x={x + (x > 250 ? 14 : -14)}
                          y={y + 5}
                          textAnchor={x > 250 ? "start" : "end"}
                          fill={
                            isHome
                              ? "oklch(74% 0.16 82)"
                              : "oklch(68% 0.15 148)"
                          }
                          fontSize='11'
                          fontFamily='DM Sans, sans-serif'
                          fontWeight='600'
                        >
                          {area.name}
                        </text>
                        {/* Distance */}
                        {!isHome && (
                          <text
                            x={x + (x > 250 ? 14 : -14)}
                            y={y + 18}
                            textAnchor={x > 250 ? "start" : "end"}
                            fill='oklch(40% 0.03 240)'
                            fontSize='9'
                            fontFamily='DM Sans, sans-serif'
                          >
                            {area.distance}
                          </text>
                        )}
                      </g>
                    );
                  })}

                  {/* Compass */}
                  <text
                    x='470'
                    y='25'
                    fill='oklch(40% 0.03 240)'
                    fontSize='10'
                    fontFamily='DM Sans, sans-serif'
                    textAnchor='middle'
                  >
                    N
                  </text>
                  <line
                    x1='470'
                    y1='28'
                    x2='470'
                    y2='40'
                    stroke='oklch(40% 0.03 240)'
                    strokeWidth='1'
                  />
                </svg>
              </div>
            </ScaleIn>

            {/* Area list */}
            <StaggerChildren
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {SERVICE_AREAS.map((area) => {
                const isHome = area.name === "Siloam Springs";
                return (
                  <StaggerItem key={area.name}>
                    <div
                      className='card'
                      style={{
                        padding: "1.5rem",
                        display: "flex",
                        gap: "1.25rem",
                        alignItems: "flex-start",
                        borderColor: isHome
                          ? "oklch(74% 0.16 82 / 30%)"
                          : undefined,
                      }}
                    >
                      <div
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "10px",
                          backgroundColor: isHome
                            ? "oklch(20% 0.06 82)"
                            : "var(--color-forest-deep)",
                          border: isHome
                            ? "1px solid oklch(74% 0.16 82 / 25%)"
                            : "1px solid var(--color-forest-mid)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <MapPin
                          size={18}
                          style={{
                            color: isHome
                              ? "var(--color-gold)"
                              : "oklch(68% 0.15 148)",
                          }}
                        />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            marginBottom: "0.35rem",
                          }}
                        >
                          <h3 style={{ fontSize: "1.1rem" }}>
                            {area.name}, {area.state}
                          </h3>
                          <span
                            style={{
                              fontFamily: "DM Sans, sans-serif",
                              fontSize: "0.7rem",
                              fontWeight: 700,
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              color: isHome
                                ? "var(--color-gold)"
                                : "oklch(68% 0.15 148)",
                              backgroundColor: isHome
                                ? "oklch(20% 0.06 82)"
                                : "var(--color-forest-deep)",
                              padding: "0.2rem 0.6rem",
                              borderRadius: "100px",
                              border: isHome
                                ? "1px solid oklch(74% 0.16 82 / 20%)"
                                : "1px solid var(--color-forest-mid)",
                            }}
                          >
                            {isHome ? "HQ" : area.distance}
                          </span>
                        </div>
                        <p style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* WHAT WE PROVIDE IN EACH AREA */}
      <section
        className='section'
        style={{ backgroundColor: "var(--color-slate-surface)" }}
      >
        <div className='container'>
          <FadeIn style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className='section-label' style={{ justifyContent: "center" }}>
              Full Service, Every City
            </p>
            <h2>The Same Quality Everywhere We Go</h2>
            <p style={{ maxWidth: "520px", margin: "1rem auto 0" }}>
              No matter which city you&apos;re in, you get the same Summit crew,
              equipment, and standards that Siloam Springs homeowners have
              trusted since 2011.
            </p>
          </FadeIn>

          <StaggerChildren
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              { label: "Lawn Care & Maintenance", detail: "All service areas" },
              { label: "Hardscaping & Patios", detail: "All service areas" },
              { label: "Irrigation Systems", detail: "All service areas" },
              {
                label: "Garden & Planting Design",
                detail: "All service areas",
              },
              { label: "Spring & Fall Cleanup", detail: "All service areas" },
              {
                label: "Irrigation Winterization",
                detail: "All service areas",
              },
            ].map(({ label, detail }) => (
              <StaggerItem key={label}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "1rem 1.25rem",
                    borderRadius: "10px",
                    backgroundColor: "var(--color-slate-elevated)",
                    border: "1px solid var(--color-slate-border)",
                  }}
                >
                  <CheckCircle
                    size={16}
                    style={{ color: "oklch(52% 0.17 148)", flexShrink: 0 }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {label}
                    </p>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {detail}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* RESPONSE TIME */}
      <section className='section'>
        <div className='container' style={{ maxWidth: "700px" }}>
          <FadeIn>
            <div
              style={{
                padding: "2.5rem",
                borderRadius: "20px",
                background:
                  "linear-gradient(135deg, oklch(22% 0.07 148), oklch(16% 0.02 240))",
                border: "1px solid oklch(32% 0.11 148)",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <Clock size={20} style={{ color: "var(--color-gold)" }} />
                <h3>Response Time by Area</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {[
                  {
                    area: "Siloam Springs",
                    time: "Same-day estimates available",
                  },
                  {
                    area: "Gentry, Decatur",
                    time: "24-hour estimate turnaround",
                  },
                  {
                    area: "Gravette, Cave Springs",
                    time: "24–48 hour estimate turnaround",
                  },
                  { area: "Bentonville", time: "48-hour estimate turnaround" },
                ].map(({ area, time }) => (
                  <div
                    key={area}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.75rem 0",
                      borderBottom: "1px solid oklch(32% 0.11 148)",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>
                      {area}
                    </span>
                    <span
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        fontSize: "0.8rem",
                        color: "oklch(68% 0.15 148)",
                      }}
                    >
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section
        className='section'
        style={{ backgroundColor: "var(--color-slate-surface)" }}
      >
        <div
          className='container'
          style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}
        >
          <ScaleIn>
            <p className='section-label' style={{ justifyContent: "center" }}>
              Not Sure If We Cover Your Area?
            </p>
            <h2 style={{ marginBottom: "1rem" }}>
              Just Ask — We&apos;ll Come To You
            </h2>
            <p style={{ marginBottom: "2.5rem" }}>
              Enter your zip code in our quote form and we&apos;ll confirm
              service availability for your address immediately.
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
                Check My Area & Get a Quote
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
