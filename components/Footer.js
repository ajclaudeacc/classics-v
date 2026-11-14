import Link from "next/link";
import { BUSINESS, NAV } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p className="footer-word" aria-hidden="true">Classics <span>V</span></p>
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-name">{BUSINESS.name}</p>
            <p className="footer-tagline">{BUSINESS.tagline}</p>
            <p>Family owned and operated since {BUSINESS.since}.</p>
          </div>
          <div>
            <h2 className="footer-heading">Visit or call</h2>
            <ul className="footer-list">
              <li><a href={BUSINESS.mapsUrl}>{BUSINESS.street}, {BUSINESS.city}, {BUSINESS.region} {BUSINESS.postal}</a></li>
              <li><a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></li>
              <li><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></li>
            </ul>
            <p className="small" style={{ color: "inherit", marginTop: 8 }}>Evenings and weekends by appointment only.</p>
          </div>
          <nav aria-label="Footer">
            <h2 className="footer-heading">Explore</h2>
            <ul className="footer-list">
              {NAV.map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/careers">Careers: we&rsquo;re hiring</Link></li>
            </ul>
          </nav>
          <div>
            <h2 className="footer-heading">Follow</h2>
            <ul className="footer-list">
              {BUSINESS.social.map((s) => <li key={s.href}><a href={s.href}>{s.label}</a></li>)}
              <li><a href={BUSINESS.weddingWire}>Reviews on WeddingWire</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Proudly serving {BUSINESS.areas.join(", ")} and Western New York.</p>
          <p>© {new Date().getFullYear()} {BUSINESS.name}</p>
        </div>
      </div>
    </footer>
  );
}
