"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/seasonal", label: "Seasonal" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/quote", label: "Get a Quote", highlight: true },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className='fixed top-0 left-0 right-0 z-50 transition-all duration-300'
        style={{
          backgroundColor: scrolled
            ? "oklch(11% 0.015 240 / 96%)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid oklch(28% 0.03 240)"
            : "1px solid transparent",
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className='container'>
          <div className='flex items-center justify-between py-4 md:py-5'>
            {/* Logo */}
            <Link href='/' className='flex flex-col gap-0 group'>
              <span
                className='font-bold tracking-tight leading-none text-[1.15rem]'
                style={{
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
                  color: "var(--color-text-primary)",
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
                  lineHeight: 1,
                }}
              >
                Home Remodeling
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className='hidden md:flex items-center gap-8'>
              {NAV_LINKS.filter((l) => !l.highlight).map((link) => (
                <Link key={link.href} href={link.href} className='nav-link'>
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className='hidden md:flex items-center gap-4'>
              <a
                href={BUSINESS.phoneHref}
                className='flex items-center gap-2'
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--color-text-secondary)",
                  letterSpacing: "0.02em",
                }}
              >
                <Phone size={14} style={{ color: "var(--color-gold)" }} />
                {BUSINESS.phone}
              </a>
              <Link
                href='/quote'
                className='btn-primary'
                style={{ padding: "0.65rem 1.25rem", fontSize: "0.8rem" }}
              >
                Free Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className='md:hidden p-2 rounded-md'
              style={{ color: "var(--color-text-primary)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key='mobile-menu'
            className='fixed inset-0 z-40 md:hidden'
            style={{ backgroundColor: "oklch(11% 0.015 240)" }}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className='flex flex-col h-full pt-24 pb-8 px-6'>
              <nav className='flex flex-col gap-2 flex-1'>
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.07,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={
                        link.highlight
                          ? "btn-primary w-full justify-center mt-4"
                          : ""
                      }
                      style={
                        !link.highlight
                          ? {
                              display: "block",
                              fontFamily: "Cormorant Garamond, serif",
                              fontSize: "2rem",
                              fontWeight: 600,
                              color: "var(--color-text-primary)",
                              padding: "0.5rem 0",
                              borderBottom:
                                "1px solid var(--color-slate-border)",
                            }
                          : {}
                      }
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className='mt-auto'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href={BUSINESS.phoneHref}
                  className='flex items-center gap-3'
                  style={{
                    color: "var(--color-text-secondary)",
                    fontSize: "1rem",
                  }}
                >
                  <Phone size={16} style={{ color: "var(--color-gold)" }} />
                  {BUSINESS.phone}
                </a>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-text-muted)",
                    marginTop: "0.5rem",
                  }}
                >
                  {BUSINESS.hours.display}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
