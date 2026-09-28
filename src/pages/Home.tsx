import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import DevexaManPower from "./DevexaManPower";
import "./Hero.css";
import "./Home.css";

import heroGuard    from "../assets/hero-guard.jpg";
import bouncer      from "../assets/bouncer.jpg";
import cctv         from "../assets/cctv.jpg";
import facade       from "../assets/facade.jpg";
import gardening    from "../assets/gardening.jpg";
import guesthouse   from "../assets/guesthouse.jpg";
import housekeeping from "../assets/housekeeping.jpg";
import appMockup    from "../assets/app-mockup.png";
import EliteBouncerServices from "../assets/EliteBouncerServices.png"
import CCTVSolutions from "../assets/CCTVSolutions.png"
import FacadeCleaning from "../assets/FacadeCleaning.png"
import Housekeeping from "../assets/Housekeeping.png"
import Professionalsecurityalertdusk from "../assets/Professionalsecurityalertdusk.png"

/* ----------------------------------------------------------------
   Slide data
---------------------------------------------------------------- */
const SLIDES = [
  {
    img: Professionalsecurityalertdusk,
    badge: "Ex-Indian Army Leadership",
    line1: "Professional",
    line2: "Security Services",
    tagline: "Industrial - Corporate - Residential - Event Security",
    desc: "Highly Trained Guards with Discipline & Integrity",
    protect: "Protecting People & Property",
    cta: "Get Professional Security Service",
  },
  {
    img: EliteBouncerServices,
    badge: "Event Security Specialists",
    line1: "Elite",
    line2: "Bouncer Services",
    tagline: "Clubs - Concerts - Corporate Events - VIP Protection",
    desc: "Professionally trained personnel ensuring safety at every event",
    protect: "Your Safety Is Our Mission",
    cta: "Book Event Security",
  },
  {
    img: CCTVSolutions,
    badge: "Advanced Surveillance",
    line1: "Smart",
    line2: "CCTV Solutions",
    tagline: "Installation - Monitoring - Maintenance - AI Analytics",
    desc: "24/7 surveillance technology for complete situational awareness",
    protect: "See Everything. Miss Nothing.",
    cta: "Get CCTV Solutions",
  },
  {
    img: Housekeeping,
    badge: "Facility Management",
    line1: "Mechanized",
    line2: "Housekeeping",
    tagline: "Offices - Hospitals - Hotels - Residential Complexes",
    desc: "Spotless environments maintained by trained facility specialists",
    protect: "Clean Spaces, Happy Faces",
    cta: "Request Housekeeping",
  },
  {
    img: FacadeCleaning,
    badge: "Exterior Maintenance",
    line1: "Professional",
    line2: "Facade Cleaning",
    tagline: "High-Rise - Glass - Cladding - Industrial Structures",
    desc: "Rope-access certified teams for buildings at any height",
    protect: "Restoring Beauty at Every Level",
    cta: "Get Facade Service",
  },
];

const HERO_STATS = [
  { num: "5000+", label: "Trained Personnel" },
  { num: "12+",   label: "Years Experience" },
  { num: "300+",  label: "Satisfied Clients" },
  { num: "18+",   label: "Cities Covered" },
];

const INTERVAL = 5500;

/* ----------------------------------------------------------------
   Hero carousel
---------------------------------------------------------------- */
function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = (idx: number) => {
    setCurrent(idx);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, INTERVAL);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const slide = SLIDES[current];

  return (
    <section id="home" className="hero-section">
      {/* background slides */}
      <div className="hero-bg-layer">
        {SLIDES.map((s, i) => (
          <div key={i} className={`hero-bg-slide ${i === current ? "active" : ""}`}>
            <img src={s.img} alt="" />
          </div>
        ))}
      </div>
      <div className="hero-overlay" />
      <div className="hero-stripe" />
      <div className="hero-geo hero-geo--1" />
      <div className="hero-geo hero-geo--2" />

      {/* progress bar */}
      <div
        key={current}
        className="hero-progress"
        style={{ animation: `progressRun ${INTERVAL}ms linear both` }}
      />

      {/* main content — text left, bg image shows on right naturally */}
      <div className="hero-wrap">
        <div className="hero-text" key={`txt-${current}`}>
          <span className="hero-badge">
            <span className="hero-badge-dot" />
            {slide.badge}
          </span>

          <h1 className="hero-h1">
            <span className="hero-h1-line1">{slide.line1}</span>
            <span className="hero-h1-line2">{slide.line2}</span>
          </h1>

          <p className="hero-tagline">{slide.tagline}</p>
          <p className="hero-desc">{slide.desc}</p>

          <p className="hero-protect">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8972a" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            {slide.protect}
          </p>

          <div className="hero-cta-row">
            <a href="#contact" className="hero-btn-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              {slide.cta}
            </a>
            <a href="#services" className="hero-btn-secondary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
              </svg>
              Our Services
            </a>
          </div>

          <div className="hero-stats">
            {HERO_STATS.map((s) => (
              <div key={s.label}>
                <div className="hero-stat-num">{s.num}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* thumbnail + arrow controls */}
      <div className="hero-controls">
        <div className="hero-thumbs">
          {SLIDES.map((s, i) => (
            <button
              key={i}
              className={`hero-thumb ${i === current ? "active" : ""}`}
              onClick={() => resetTimer(i)}
            >
              <img src={s.img} alt="" />
            </button>
          ))}
        </div>
        <div className="hero-arrows">
          <span className="hero-slide-count">
            <span className="hero-slide-cur">{String(current + 1).padStart(2, "0")}</span>
            <span className="hero-slide-sep"> / </span>
            <span className="hero-slide-total">{String(SLIDES.length).padStart(2, "0")}</span>
          </span>
          <button className="hero-arrow-btn" onClick={() => resetTimer((current - 1 + SLIDES.length) % SLIDES.length)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="hero-arrow-btn" onClick={() => resetTimer((current + 1) % SLIDES.length)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   Data
---------------------------------------------------------------- */
const SERVICES = [
  { img: heroGuard,    badge: "Core Service",    title: "Security Guards",        desc: "Highly trained uniformed guards for industrial, corporate, residential and event security." },
  { img: bouncer,      badge: "Event Security",  title: "Bouncers & Event Crew",   desc: "Crowd management and access-control experts for clubs, concerts and VIP protection." },
  { img: cctv,         badge: "Tech Security",   title: "CCTV Surveillance",       desc: "End-to-end CCTV installation, monitoring, and AI-powered analytics for 24/7 awareness." },
  { img: housekeeping, badge: "Facility Mgmt",   title: "Mechanized Housekeeping", desc: "Mechanized cleaning solutions for offices, hospitals, hotels and large complexes." },
  { img: facade,       badge: "Exterior Works",  title: "Facade Cleaning",         desc: "Rope-access certified teams delivering spotless glass and high-rise building exteriors." },
  { img: gardening,    badge: "Landscaping",     title: "Gardening & Landscaping", desc: "Professional horticulture and landscaping for corporate campuses and residential societies." },
];

const WHY = [
  { title: "Ex-Army Leadership",    desc: "Founded and led by Ex-Indian Army officers ensuring discipline, ethics, and operational excellence." },
  { title: "Pan-India Operations",  desc: "Presence across 18+ cities with unified command and consistent quality standards everywhere." },
  { title: "Smart Workforce App",   desc: "Proprietary mobile app for real-time attendance, task tracking, and transparent client reporting." },
  { title: "24x7 Response",         desc: "Round-the-clock operations center with instant deployment capability for emergencies." },
  { title: "Certified Training",    desc: "All personnel undergo rigorous training, background verification, and periodic refreshments." },
  { title: "Transparent Reporting", desc: "Daily, weekly, and monthly digital reports so clients always stay fully informed." },
];

const APP_FEATURES = [
  { title: "Live GPS Attendance",    desc: "Real-time guard check-ins with geo-fencing and location verification." },
  { title: "Daily Duty Reports",     desc: "Auto-generated shift reports delivered straight to your inbox or app." },
  { title: "SOS & Incident Alerts",  desc: "One-tap emergency alerts with instant supervisor notification." },
  { title: "Client Portal",          desc: "Dedicated dashboard to raise requests, view reports, and track deployments." },
];

const CLIENTS = [
  "Reliance Industries", "Tata Group", "Infosys", "Wipro", "HDFC Bank",
  "Marriott Hotels", "DLF Builders", "L&T Construction", "Adani Group",
  "Godrej Properties", "Prestige Estates", "Embassy Group",
];

const OPS_CITIES = [
  { city: "Mumbai",    desc: "Head Office - 120+ contracts, 600+ personnel" },
  { city: "Delhi NCR", desc: "North India Hub - Corporate & Industrial sector" },
  { city: "Bengaluru", desc: "Tech corridor - IT Parks & Residential complexes" },
  { city: "Hyderabad", desc: "South India - Pharma, IT & Hospitality sector" },
  { city: "Pune",      desc: "Automotive & Manufacturing belt operations" },
  { city: "Chennai",   desc: "Ports, SEZs & Residential Townships" },
];

/* ----------------------------------------------------------------
   About
---------------------------------------------------------------- */
function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-img-wrap">
            <img src={guesthouse} alt="Devexa Man Power Operations" />
            <div className="about-img-badge">
              <span className="about-img-badge-num">12+</span>
              <span className="about-img-badge-text">Years of Trust</span>
            </div>
          </div>
          <div>
            <span className="section-label">About Us</span>
            <h2 className="section-h2">
              India's Most <span>Trusted</span> Security Partner
            </h2>
            <p className="section-lead">
              Devexa Man Power Services is a professionally managed security and facility
              management company founded by Ex-Indian Army veterans. We deliver excellence through
              discipline, technology, and integrity.
            </p>
            <ul className="about-check-list" style={{ marginTop: "18px" }}>
              {[
                "PSARA licensed & government compliant",
                "ISO 9001:2015 certified operations",
                "5000+ trained & verified personnel",
                "Proprietary workforce management app",
                "300+ satisfied enterprise clients",
              ].map((item) => (
                <li key={item}>
                  <span className="about-check-icon">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="about-stat-grid">
              {[
                { num: "5000+", label: "Trained Personnel" },
                { num: "300+",  label: "Clients Served" },
                { num: "18+",   label: "Cities Covered" },
                { num: "12+",   label: "Years Experience" },
              ].map((s) => (
                <div className="about-stat-card" key={s.label}>
                  <div className="about-stat-num">{s.num}</div>
                  <div className="about-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   Services
---------------------------------------------------------------- */
function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="section-inner">
        <div style={{ textAlign: "center" }}>
          <span className="section-label">What We Offer</span>
          <h2 className="section-h2" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Comprehensive <span>Security &amp; Facility</span> Services
          </h2>
          <p className="section-lead" style={{ margin: "10px auto 0" }}>
            From armed guards to smart CCTV, housekeeping to facade cleaning - your single-source partner.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-card-img">
                <img src={s.img} alt={s.title} />
                <span className="service-card-badge">{s.badge}</span>
                <div className="service-card-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">{s.title}</h3>
                <p className="service-card-desc">{s.desc}</p>
                <a href="#contact" className="service-card-link">
                  Learn More
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   Why Choose Us
---------------------------------------------------------------- */
function WhyUs() {
  return (
    <section className="section why-section">
      <div className="why-bg-pattern" />
      <div className="section-inner">
        <div style={{ textAlign: "center" }}>
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-h2 section-h2--light" style={{ marginLeft: "auto", marginRight: "auto" }}>
            The <span>Devexa Man Power</span> Difference
          </h2>
          <p className="section-lead" style={{ margin: "10px auto 0", color: "rgba(255,255,255,0.5)" }}>
            Six pillars that set us apart from every other security provider in India.
          </p>
        </div>
        <div className="why-grid">
          {WHY.map((w) => (
            <div className="why-card" key={w.title}>
              <div className="why-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="why-title">{w.title}</h3>
              <p className="why-desc">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   App Section — rich mobile app showcase
---------------------------------------------------------------- */
const APP_SCREENS = [
  { label: "Dashboard", color: "#1a1f3a" },
  { label: "Live Tracking", color: "#0f1a2e" },
  { label: "Reports", color: "#1a0f2e" },
];

const APP_STATS = [
  { num: "99.9%", label: "Uptime" },
  { num: "2 sec", label: "Alert Response" },
  { num: "Android & iOS", label: "Platforms" },
];

function AppSection() {
  return (
    <section className="section app-section">
      <div className="section-inner">
        {/* header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="section-label">Mobile Technology</span>
          <h2 className="section-h2 section-h2--light" style={{ marginLeft: "auto", marginRight: "auto" }}>
            The <span>Devexa Man Power App</span> — Your Command Center
          </h2>
          <p className="section-lead" style={{ margin: "12px auto 0", color: "rgba(255,255,255,0.48)", maxWidth: "600px" }}>
            Real-time visibility over every guard, every shift, every incident — in the palm of your hand.
          </p>
        </div>

        <div className="app-layout">
          {/* LEFT: phone mockup */}
          <div className="app-phone-col">
            <div className="app-phone-outer">
              <div className="app-phone-device">
                {/* phone screen */}
                <div className="app-phone-screen">
                  <div className="app-screen-header">
                    <div className="app-screen-dot" />
                    <span className="app-screen-title">Devexa Man Power</span>
                    <div className="app-screen-dot" style={{ background: "#4ade80" }} />
                  </div>
                  <div className="app-screen-map">
                    <div className="app-map-grid" />
                    {[
                      { top: "28%", left: "22%" },
                      { top: "44%", left: "55%" },
                      { top: "62%", left: "32%" },
                      { top: "38%", left: "72%" },
                    ].map((pos, i) => (
                      <div key={i} className="app-map-pin" style={{ top: pos.top, left: pos.left }}>
                        <div className="app-pin-dot" />
                        <div className="app-pin-ring" />
                      </div>
                    ))}
                    <div className="app-map-label">Live Guard Locations</div>
                  </div>
                  <div className="app-screen-stats">
                    <div className="app-screen-stat">
                      <span className="app-screen-stat-num">47</span>
                      <span className="app-screen-stat-lbl">On Duty</span>
                    </div>
                    <div className="app-screen-stat">
                      <span className="app-screen-stat-num" style={{ color: "#f0c040" }}>3</span>
                      <span className="app-screen-stat-lbl">Alerts</span>
                    </div>
                    <div className="app-screen-stat">
                      <span className="app-screen-stat-num" style={{ color: "#4ade80" }}>12</span>
                      <span className="app-screen-stat-lbl">Reports</span>
                    </div>
                  </div>
                </div>
                <img src={appMockup} alt="Devexa Man Power App" className="app-phone-img" />
              </div>
              {/* glow */}
              <div className="app-phone-glow" />
            </div>

            {/* floating stats */}
            <div className="app-float-badges">
              {APP_STATS.map((s) => (
                <div key={s.label} className="app-float-badge">
                  <div className="app-float-num">{s.num}</div>
                  <div className="app-float-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: features */}
          <div className="app-features-col">
            <div className="app-feature-list">
              {[
                {
                  title: "Live GPS Tracking",
                  desc: "See every guard's exact location on an interactive map in real-time. Geo-fence alerts trigger instantly when a guard leaves their assigned zone.",
                  icon: "M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0",
                },
                {
                  title: "Smart Attendance",
                  desc: "QR code and facial recognition check-ins eliminate buddy-punching. Auto-generates payroll-ready reports with zero manual data entry.",
                  icon: "M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
                },
                {
                  title: "SOS & Incident Management",
                  desc: "One-tap SOS button connects guards to supervisors in seconds. Every incident is logged with photo, location, and timestamp for accountability.",
                  icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
                },
                {
                  title: "Client Dashboard & Reports",
                  desc: "Your private portal shows live deployment status, incident logs, and auto-generated PDF reports — access anytime from any device.",
                  icon: "M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z",
                },
                {
                  title: "Digital Daily Diary",
                  desc: "Guards log shift notes, visitor entries, and site observations digitally. Supervisors approve remotely, keeping paper-trails audit-ready.",
                  icon: "M12 20h9 M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z",
                },
              ].map((f) => (
                <div key={f.title} className="app-feature-card">
                  <div className="app-feature-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d={f.icon} />
                    </svg>
                  </div>
                  <div>
                    <div className="app-feature-title">{f.title}</div>
                    <div className="app-feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="app-cta-row">
              <a href="#contact" className="hero-btn-primary" style={{ textDecoration: "none" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                Request a Live Demo
              </a>
              <a href="#contact" className="hero-btn-secondary" style={{ textDecoration: "none" }}>
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   Clients Marquee
---------------------------------------------------------------- */
function Clients() {
  const doubled = [...CLIENTS, ...CLIENTS];
  return (
    <section id="clients" className="section clients-section">
      <div className="section-inner">
        <div style={{ textAlign: "center" }}>
          <span className="section-label">Our Clients</span>
          <h2 className="section-h2" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Trusted by <span>Industry Leaders</span>
          </h2>
          <p className="section-lead" style={{ margin: "10px auto 0" }}>
            Serving Fortune 500 companies, luxury hospitality brands, and leading real-estate developers.
          </p>
        </div>
        <div className="marquee-wrap">
          <div className="marquee-track">
            {doubled.map((c, i) => (
              <div className="client-chip" key={i}>
                <span className="client-chip-dot" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   Operations
---------------------------------------------------------------- */
function Operations() {
  return (
    <section id="gallery" className="section ops-section">
      <div className="section-inner">
        <div style={{ textAlign: "center" }}>
          <span className="section-label">Our Presence</span>
          <h2 className="section-h2" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Pan-India <span>Operations</span>
          </h2>
          <p className="section-lead" style={{ margin: "10px auto 0" }}>
            Strategically located branches ensuring quick deployment and consistent service quality.
          </p>
        </div>
        <div className="ops-grid">
          {OPS_CITIES.map((o) => (
            <div className="ops-card" key={o.city}>
              <div className="ops-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="ops-card-city">{o.city}</div>
              <p className="ops-card-desc">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   CTA Banner
---------------------------------------------------------------- */
function CtaBanner() {
  return (
    <div className="cta-banner">
      <div className="cta-inner">
        <div>
          <h2 style={{
            fontFamily: '"Playfair Display",Georgia,serif',
            fontSize: "clamp(1.6rem,3vw,2.4rem)",
            fontWeight: 900, color: "#fff", lineHeight: 1.15,
          }}>
            Ready to Secure Your{" "}
            <span style={{ color: "#c8972a", fontStyle: "italic" }}>Business?</span>
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", marginTop: "8px" }}>
            Get a free consultation and customized security proposal within 24 hours.
          </p>
        </div>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="tel:+919876543210" className="hero-btn-primary" style={{ textDecoration: "none" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.62 4.87 2 2 0 0 1 3.59 2.68h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.3a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17.68z" />
            </svg>
            Call Now: +91 98765 43210
          </a>
          <a href="#contact" className="hero-btn-secondary" style={{ textDecoration: "none" }}>
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------
   Contact
---------------------------------------------------------------- */
function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-inner">
        <div style={{ textAlign: "center" }}>
          <span className="section-label">Contact Us</span>
          <h2 className="section-h2" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Get a <span>Free Consultation</span>
          </h2>
          <p className="section-lead" style={{ margin: "10px auto 0" }}>
            Tell us your requirements and we'll get back with a tailored proposal within 24 hours.
          </p>
        </div>
        <div className="contact-grid">
          {/* Info column */}
          <div>
            {[
              { label: "Phone",       value: "+91 98765 43210 / +91 98765 43211" },
              { label: "Email",       value: "info@gmsecurity.in" },
              { label: "Head Office", value: "Mumbai, Maharashtra, India" },
              { label: "Operations",  value: "24 x 7, All 365 days" },
            ].map((info) => (
              <div className="contact-info-card" key={info.label}>
                <div className="contact-info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">{info.label}</div>
                  <div className="contact-info-value">{info.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form column */}
          <div className="contact-form">
            <h3 style={{
              fontFamily: '"Playfair Display",Georgia,serif',
              fontSize: "1.3rem", fontWeight: 800, color: "#0a0c1c", marginBottom: "22px",
            }}>
              Send Us a Message
            </h3>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input className="form-input" type="text" placeholder="Your full name" />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input className="form-input" type="tel" placeholder="+91 XXXXX XXXXX" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input className="form-input" type="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Company Name</label>
                <input className="form-input" type="text" placeholder="Your company" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Service Required</label>
              <select className="form-select">
                <option value="">Select a service...</option>
                <option>Security Guards</option>
                <option>Bouncers &amp; Event Security</option>
                <option>CCTV Surveillance</option>
                <option>Mechanized Housekeeping</option>
                <option>Facade Cleaning</option>
                <option>Gardening &amp; Landscaping</option>
                <option>Complete Facility Management</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Your Message</label>
              <textarea
                className="form-textarea"
                placeholder="Describe your requirements, location, and number of personnel needed..."
              />
            </div>
            <button type="submit" className="form-submit">
              Submit Request - Response Within 24 Hours
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   Footer
---------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="footer-root">
      <div className="footer-grid">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{
              width: "42px", height: "42px", flexShrink: 0,
              background: "linear-gradient(135deg,#a07020,#f0c040)",
              clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ fontSize: "14px", fontWeight: 900, color: "#0a0c1c" }}>GM</span>
            </div>
            <div>
              <div style={{ fontFamily: '"Playfair Display",Georgia,serif', fontWeight: 800, fontSize: "14px", color: "#fff" }}>
                Devexa Man Power
              </div>
              <div style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c8972a" }}>
                Services
              </div>
            </div>
          </div>
          <p style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.38)", lineHeight: 1.75, maxWidth: "260px" }}>
            India's trusted security and facility management company led by Ex-Indian Army veterans.
            Serving 300+ clients across 18+ cities.
          </p>
        </div>

        <div>
          <div className="footer-col-title">Services</div>
          {SERVICES.map((s) => (
            <a key={s.title} href="#services" className="footer-link">{s.title}</a>
          ))}
        </div>

        <div>
          <div className="footer-col-title">Quick Links</div>
          {["Home", "About Us", "Services", "Our Clients", "Contact Us"].map((l) => (
            <a key={l} href="#" className="footer-link">{l}</a>
          ))}
        </div>

        <div>
          <div className="footer-col-title">Operations</div>
          {OPS_CITIES.map((o) => (
            <a key={o.city} href="#gallery" className="footer-link">{o.city}</a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">
          &copy; {new Date().getFullYear()} Devexa Man Power Services All rights reserved.
        </span>
        <span className="footer-made">PSARA Licensed &middot; ISO 9001:2015 Certified</span>
      </div>
    </footer>
  );
}

/* ----------------------------------------------------------------
   Page root
---------------------------------------------------------------- */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <AppSection />
        <Clients />
        <Operations />
        <CtaBanner />
        <Contact />
        <DevexaManPower />
      </main>
      <Footer />
    </>
  );
}
