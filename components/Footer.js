import Link from "next/link";
import { BUSINESS, NAV } from "@/lib/site";
import { Phone, Mail, Pin } from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <p className="footer-name">{BUSINESS.name}</p>
          <p className="footer-tagline">{BUSINESS.tagline}</p>
          <p className="footer-note">Family owned and operated since {BUSINESS.since}.</p>
        </div>

        <div>
          <h2 className="footer-heading">Visit or call</h2>
          <ul className="footer-contact">
            <li>
              <Pin />
              <a href={BUSINESS.mapsUrl}>
                {BUSINESS.street}<br />{BUSINESS.city}, {BUSINESS.region} {BUSINESS.postal}
              </a>
            </li>
            <li><Phone /><a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></li>
            <li><Mail /><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></li>
          </ul>
          <p className="footer-small">Evenings and weekends by appointment only.</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="footer-heading">Explore</h2>
          <ul className="footer-links">
            {NAV.map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="footer-heading">Follow</h2>
          <ul className="footer-links">
            {BUSINESS.social.map((s) => <li key={s.href}><a href={s.href}>{s.label}</a></li>)}
            <li><a href={BUSINESS.weddingWire}>Reviews on WeddingWire</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>Proudly serving {BUSINESS.areas.join(", ")} and Western New York.</p>
        <p>© {new Date().getFullYear()} {BUSINESS.name}</p>
      </div>
    </footer>
  );
}
