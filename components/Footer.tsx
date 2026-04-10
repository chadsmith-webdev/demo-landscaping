"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Share2, Globe, Star } from "lucide-react";
import { BUSINESS, SERVICE_AREAS, SERVICES } from "@/lib/business";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "oklch(9% 0.012 240)",
        borderTop: "1px solid oklch(28% 0.03 240)",
      }}
    >
      {/* CTA Band */}
      <div
        style={{
          background:
            "linear-gradient(135deg, oklch(22% 0.07 148), oklch(32% 0.11 148))",
          borderBottom: "1px solid oklch(28% 0.03 240)",
        }}
      >
        <div className='container py-12 md:py-16'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
            <div>
              <p
                className='section-label'
                style={{ color: "oklch(74% 0.16 82)" }}
              >
                Ready to get started?
              </p>
              <h2
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  color: "oklch(94% 0.01 82)",
                  lineHeight: 1.1,
                }}
              >
                Your Dream Landscape Awaits
              </h2>
            </div>
            <div className='flex flex-col sm:flex-row gap-3'>
              <a href={BUSINESS.phoneHref} className='btn-primary'>
                <Phone size={16} />
                Call {BUSINESS.phone}
              </a>
              <Link href='/quote' className='btn-secondary'>
                Free Online Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className='container section'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12'>
          {/* Brand column */}
          <div className='lg:col-span-1'>
            <Link href='/' className='flex flex-col gap-1 mb-5'>
              <span
                style={{
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                  lineHeight: 1,
                }}
              >
                Summit
              </span>
              <span
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                  fontWeight: 700,
                }}
              >
                Home Remodeling
              </span>
            </Link>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              Siloam Springs' most trusted landscaping company since{" "}
              {BUSINESS.founded}. Licensed, insured, and deeply rooted in
              Northwest Arkansas.
            </p>
            <div className='flex items-center gap-1 mb-4'>
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={14}
                  fill='var(--color-gold)'
                  style={{ color: "var(--color-gold)" }}
                />
              ))}
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "var(--color-text-muted)",
                  marginLeft: "0.5rem",
                }}
              >
                4.9 · 140+ Reviews
              </span>
            </div>
            <div className='flex gap-3'>
              <a
                href={BUSINESS.social.facebook}
                aria-label='Facebook'
                className='social-icon-btn'
              >
                <Globe size={15} />
              </a>
              <a
                href={BUSINESS.social.instagram}
                aria-label='Instagram'
                className='social-icon-btn'
              >
                <Share2 size={15} />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                marginBottom: "1.25rem",
              }}
            >
              Our Services
            </h4>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--color-text-muted)",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-text-primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--color-text-muted)";
                    }}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href='/seasonal'
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-muted)",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-muted)";
                  }}
                >
                  Seasonal Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas column */}
          <div>
            <h4
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                marginBottom: "1.25rem",
              }}
            >
              Service Areas
            </h4>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              {SERVICE_AREAS.map((area) => (
                <li key={area.name}>
                  <Link
                    href='/service-areas'
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--color-text-muted)",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-text-primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--color-text-muted)";
                    }}
                  >
                    {area.name}, {area.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                marginBottom: "1.25rem",
              }}
            >
              Contact
            </h4>
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <li>
                <a
                  href={BUSINESS.phoneHref}
                  className='flex items-start gap-3'
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.9rem",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-muted)";
                  }}
                >
                  <Phone
                    size={15}
                    style={{
                      color: "var(--color-gold)",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className='flex items-start gap-3'
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.9rem",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-text-muted)";
                  }}
                >
                  <Mail
                    size={15}
                    style={{
                      color: "var(--color-gold)",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  />
                  {BUSINESS.email}
                </a>
              </li>
              <li className='flex items-start gap-3'>
                <MapPin
                  size={15}
                  style={{
                    color: "var(--color-gold)",
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                />
                <address
                  style={{
                    fontStyle: "normal",
                    color: "var(--color-text-muted)",
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                  }}
                >
                  {BUSINESS.address.street}
                  <br />
                  {BUSINESS.address.city}, {BUSINESS.address.state}{" "}
                  {BUSINESS.address.zip}
                </address>
              </li>
              <li className='flex items-start gap-3'>
                <Clock
                  size={15}
                  style={{
                    color: "var(--color-gold)",
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                />
                <div
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                  }}
                >
                  <p>{BUSINESS.hours.weekdays}</p>
                  <p>{BUSINESS.hours.saturday}</p>
                  <p>{BUSINESS.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid oklch(28% 0.03 240)",
          padding: "1.25rem 0",
        }}
      >
        <div className='container flex flex-col sm:flex-row items-center justify-between gap-3'>
          <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
            © {year} {BUSINESS.name}. All rights reserved. · {BUSINESS.license}
          </p>
          <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
            Built by{" "}
            <a
              href='https://localsearchally.com'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: "none" }}
            >
              <span style={{ color: "#ffffff" }}>Local Search</span>
              <span style={{ color: "#7bafd4" }}>Ally</span>
            </a>
          </p>
          <div className='flex gap-5'>
            <Link
              href='/quote'
              style={{
                fontSize: "0.8rem",
                color: "var(--color-text-muted)",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-text-muted)";
              }}
            >
              Get a Quote
            </Link>
            <Link
              href='/service-areas'
              style={{
                fontSize: "0.8rem",
                color: "var(--color-text-muted)",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-text-muted)";
              }}
            >
              Service Areas
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
