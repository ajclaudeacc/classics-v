"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BUSINESS, NAV, IMG, cdn } from "@/lib/site";
import { Phone, Menu, Close } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const bar = useRef(null);
  const [menuMax, setMenuMax] = useState(null);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    // Escape closes the menu and puts keyboard focus back on the menu button.
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggle.current?.focus();
    };
    // Size the menu to the space below the header (banners above it vary), so its last item is always reachable.
    const fit = () => setMenuMax(Math.max(240, window.innerHeight - bar.current.getBoundingClientRect().bottom));
    // The menu only exists on narrow screens: close it if the window widens (e.g. a tablet is rotated).
    const wide = window.matchMedia("(min-width: 1241px)");
    const onWide = (e) => e.matches && setOpen(false);
    fit();
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", fit);
    wide.addEventListener("change", onWide);
    document.body.classList.add("no-scroll");
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", fit);
      wide.removeEventListener("change", onWide);
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  const isCurrent = (href) => pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <header className="site-header">
      <div className="container header-inner" ref={bar}>
        <Link href="/" className="brand" aria-label={`${BUSINESS.name}, home`}>
          <img src={cdn(IMG.logo, 500)} alt="" width="160" height="67" />
          <span className="brand-sub">Banquet &amp;<br />Conference Center</span>
        </Link>

        <nav className="main-nav" aria-label="Main">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={BUSINESS.phoneHref}>
            <Phone />
            <span>{BUSINESS.phone}</span>
          </a>
          <Link className="btn btn-primary btn-sm" href="/contact">Book a tour</Link>
          <button
            type="button"
            ref={toggle}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <Close /> : <Menu />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className="mobile-nav"
        hidden={!open}
        style={menuMax ? { maxHeight: menuMax } : undefined}
        // Close after choosing any link, including the page you're already on.
        onClick={(e) => e.target.closest("a") && setOpen(false)}
      >
        <nav aria-label="Mobile">
          <ul>
            <li><Link href="/" aria-current={pathname === "/" ? "page" : undefined}>Home</Link></li>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>{item.label}</Link>
              </li>
            ))}
            <li><Link href="/contact" aria-current={isCurrent("/contact") ? "page" : undefined}>Contact</Link></li>
            <li><Link href="/careers" aria-current={isCurrent("/careers") ? "page" : undefined}>Careers</Link></li>
          </ul>
          <a className="btn btn-primary btn-block" href={BUSINESS.phoneHref}><Phone /> Call {BUSINESS.phone}</a>
        </nav>
      </div>
    </header>
  );
}
