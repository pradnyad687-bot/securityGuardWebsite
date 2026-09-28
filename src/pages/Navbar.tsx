import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Services",   href: "#services" },
  { label: "Gallery",    href: "#gallery" },
  { label: "Clients",    href: "#clients" },
  { label: "Devexa App", href: "#devexa-hero" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [open,     setOpen]       = useState(false);
  const [active,   setActive]     = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href.replace("#", ""));
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : "navbar--top"}`}>
      {/* ── Top info bar ── */}
      <div className="nb-topbar">
        <div className="nb-topbar-info">
          <span className="nb-topbar-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.62 4.87 2 2 0 0 1 3.59 2.68h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.3a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17.68z"/></svg>
            +91 98765 43210
          </span>
          <span className="nb-topbar-sep" />
          <span className="nb-topbar-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            info@gmsecurity.in
          </span>
          <span className="nb-topbar-sep" />
          <span className="nb-topbar-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            24 × 7 Operations
          </span>
        </div>
        <div className="nb-topbar-social">
          {["facebook","linkedin","twitter"].map(s => (
            <a key={s} href="#" className="nb-social-btn" aria-label={s}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                {s === "facebook" && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>}
                {s === "linkedin" && (<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></>)}
                {s === "twitter" && <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>}
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* ── Main nav bar ── */}
      <nav className="nb-main">
        <div className="nb-inner">
          {/* Logo */}
          <a href="#home" className="nb-logo" onClick={() => handleNav("#home")}>
            <div className="nb-logo-hex">
              <img src={logo} alt="Devexa Man Power" />
            </div>
            <div className="nb-logo-text">
              <span className="nb-logo-title">Devexa Man Power</span>
              <span className="nb-logo-sub">Services</span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="nb-links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <button
                  className={`nb-link ${active === href.replace("#","") ? "active" : ""}`}
                  onClick={() => handleNav(href)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + burger */}
          <div className="nb-right">
            <a href="#contact" className="nb-cta" onClick={e => { e.preventDefault(); handleNav("#contact"); }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.62 4.87 2 2 0 0 1 3.59 2.68h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.3a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17.68z"/></svg>
              Get Quote
            </a>
            <button className="nb-burger" onClick={() => setOpen(v => !v)} aria-label="Menu">
              {open
                ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              }
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="nb-drawer">
            <div className="nb-drawer-inner">
              {NAV_LINKS.map(({ label, href }) => (
                <button
                  key={href}
                  className={`nb-drawer-link ${active === href.replace("#","") ? "active" : ""}`}
                  onClick={() => handleNav(href)}
                >
                  <span className="nb-drawer-indicator" />
                  {label}
                </button>
              ))}
              <a href="#contact" className="nb-cta nb-cta--full" onClick={e => { e.preventDefault(); handleNav("#contact"); }}>
                Get Free Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
