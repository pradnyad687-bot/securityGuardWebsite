import { useState, useEffect, useRef, useCallback } from "react";
import "./Hero.css";

import heroGuard      from "../assets/hero-guard.jpg";
import bouncer        from "../assets/bouncer.jpg";
import cctv           from "../assets/cctv.jpg";
import housekeeping   from "../assets/housekeeping.jpg";
import facade         from "../assets/facade.jpg";

const SLIDES = [
  {
    img:      heroGuard,
    badge:    "Ex-Indian Army Leadership",
    line1:    "Professional",
    line2:    "Security Services",
    tagline:  "Industrial • Corporate • Residential • Event Security",
    sub:      "Highly Trained Guards with Discipline & Integrity",
    cta:      "Get Professional Security Service",
    ctaHref:  "#contact",
  },
  {
    img:      bouncer,
    badge:    "Elite Trained Bouncers",
    line1:    "Certified",
    line2:    "Bouncers & Crowd Control",
    tagline:  "Hotels • Clubs • Events • VIP Protection",
    sub:      "Physical Fitness | Background Verified | Uniformed Professionals",
    cta:      "Hire Our Bouncers",
    ctaHref:  "#contact",
  },
  {
    img:      cctv,
    badge:    "24 × 7 Surveillance",
    line1:    "Smart CCTV",
    line2:    "Monitoring & Installation",
    tagline:  "Remote Monitoring • Analytics • Intrusion Detection",
    sub:      "HD IP Cameras | Central Monitoring | Real-Time Alerts",
    cta:      "Explore CCTV Solutions",
    ctaHref:  "#services",
  },
  {
    img:      housekeeping,
    badge:    "Facility Management",
    line1:    "Premium",
    line2:    "Housekeeping Services",
    tagline:  "Offices • Hospitals • Malls • Residential Complexes",
    sub:      "Trained Staff | Eco-Friendly Products | ISO Standards",
    cta:      "Book Housekeeping",
    ctaHref:  "#contact",
  },
  {
    img:      facade,
    badge:    "Specialised Cleaning",
    line1:    "Facade &",
    line2:    "Deep Cleaning Experts",
    tagline:  "High-Rise Buildings • Glass Facades • Industrial Sites",
    sub:      "Rope Access Certified | Safety Compliant | Pan-India Service",
    cta:      "Request Cleaning Quote",
    ctaHref:  "#contact",
  },
];

const INTERVAL = 5000;

export default function Hero() {
  const [current,  setCurrent]  = useState(0);
  const [prev,     setPrev]     = useState<number | null>(null);
  const [animKey,  setAnimKey]  = useState(0);
  const [paused,   setPaused]   = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((idx: number) => {
    setPrev(current);
    setCurrent(idx);
    setAnimKey(k => k + 1);
  }, [current]);

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);
  const prev_ = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, INTERVAL);
    return () => { if (timerRef.current !== null) clearTimeout(timerRef.current); };
  }, [current, paused, next]);

  const s = SLIDES[current];

  return (
    <section
      id="home"
      className="hero-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Background slides ── */}
      <div className="hero-bg-layer">
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`hero-bg-slide ${i === current ? "active" : ""} ${i === prev ? "exit" : ""}`}
          >
            <img src={slide.img} alt="" loading={i === 0 ? "eager" : "lazy"} />
          </div>
        ))}
      </div>

      {/* ── Overlays ── */}
      <div className="hero-overlay" />
      <div className="hero-stripe" />

      {/* ── Decorative geometric shapes ── */}
      <div className="hero-geo hero-geo--1" />
      <div className="hero-geo hero-geo--2" />

      {/* ── Content ── */}
      <div className="hero-wrap">
        <div className="hero-text" key={animKey}>
          {/* Badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            {s.badge}
          </div>

          {/* Headline */}
          <h1 className="hero-h1">
            <span className="hero-h1-line1">{s.line1}</span>
            <span className="hero-h1-line2">{s.line2}</span>
          </h1>

          {/* Tagline */}
          <p className="hero-tagline">{s.tagline}</p>
          <p className="hero-desc">{s.sub}</p>

          {/* Protecting line */}
          <p className="hero-protect">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8972a" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Protecting People &amp; Property
          </p>

          {/* CTA row */}
          <div className="hero-cta-row">
            <a href={s.ctaHref} className="hero-btn-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.62 4.87 2 2 0 0 1 3.59 2.68h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.3a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17.68z"/></svg>
              {s.cta}
            </a>
            <a href="#services" className="hero-btn-secondary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 8 16 12 12 16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
              Our Services
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            {[
              { num: "15+", label: "Years Experience" },
              { num: "500+", label: "Trained Guards" },
              { num: "200+", label: "Happy Clients" },
              { num: "Pan", label: "India Coverage" },
            ].map(stat => (
              <div key={stat.label} className="hero-stat">
                <div className="hero-stat-num">{stat.num}</div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Controls bar ── */}
      <div className="hero-controls">
        {/* Thumbnail dots */}
        <div className="hero-thumbs">
          {SLIDES.map((slide, i) => (
            <button
              key={i}
              className={`hero-thumb ${i === current ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            >
              <img src={slide.img} alt="" />
            </button>
          ))}
        </div>

        {/* Slide counter + arrows */}
        <div className="hero-arrows">
          <span className="hero-slide-count">
            <span className="hero-slide-cur">{String(current + 1).padStart(2,"0")}</span>
            <span className="hero-slide-sep">/</span>
            <span className="hero-slide-total">{String(SLIDES.length).padStart(2,"0")}</span>
          </span>
          <button className="hero-arrow-btn" onClick={prev_} aria-label="Previous">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button className="hero-arrow-btn" onClick={next} aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>

      {/* ── Progress bar ── */}
      {!paused && (
        <div
          key={`${animKey}-progress`}
          className="hero-progress"
          style={{ animationDuration: `${INTERVAL}ms` }}
        />
      )}
    </section>
  );
}
