"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BUSINESS, NAV, IMG, cdn } from "@/lib/site";
import { Phone, Menu, Close } from "./Icons";
import Photo from "./Photo";

// Logo, centred navigation and actions on wide screens; a full-screen menu below 1260px.
const MENU = [{ href: "/", label: "Home" }, ...NAV, { href: "/contact", label: "Contact" }, { href: "/careers", label: "Careers" }];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const bar = useRef(null);
  const [panel, setPanel] = useState(null);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggle.current?.focus();
    };
    // The menu fills the screen below the header (the banners above it vary in height).
    const fit = () => {
      const top = Math.max(0, bar.current.getBoundingClientRect().bottom);
      setPanel({ top, height: window.innerHeight - top });
    };
    const wide = window.matchMedia("(min-width: 1261px)");
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

  const isCurrent = (href) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/"));
  const link = (item) => (
    <Link key={item.href} href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>{item.label}</Link>
  );

  return (
    <header className="site-header">
      <div className="wrap bar" ref={bar}>
        <Link href="/" className="brand" aria-label={`${BUSINESS.name}, home`}>
          <img src={cdn(IMG.logo, 500)} alt="" width="118" height="49" />
          <span className="brand-sub">Banquet &amp; Conference Center</span>
        </Link>
        <nav className="nav-main" aria-label="Main">{NAV.map(link)}</nav>
        <div className="header-actions">
          <a className="header-phone" href={BUSINESS.phoneHref} aria-label={`Call ${BUSINESS.phone}`}><Phone /><span>{BUSINESS.phone}</span></a>
          <Link className="btn btn-primary btn-sm" href="/contact">Book a tour</Link>
          <button type="button" ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen((o) => !o)}>
            {open ? <Close /> : <Menu />}
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div
        id="site-menu"
        className="menu-panel"
        hidden={!open}
        style={panel ? { top: panel.top, height: panel.height } : undefined}
        // Close after choosing any link, including the page you're already on.
        onClick={(e) => e.target.closest("a") && setOpen(false)}
      >
        <div className="wrap menu-inner">
          <nav aria-label="Site menu">
            <ol className="menu-list">
              {MENU.map((item, i) => (
                <li key={item.href}>
                  <Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
                    <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>{item.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
          <div className="menu-aside">
            <div className="frame"><Photo src={IMG.exteriorColor} alt="" sizes="40vw" widths={[500, 750, 1000]} /></div>
            <address>{BUSINESS.street}<br />{BUSINESS.city}, {BUSINESS.region} {BUSINESS.postal}</address>
            <a className="btn btn-primary btn-block" href={BUSINESS.phoneHref}><Phone /> Call {BUSINESS.phone}</a>
          </div>
        </div>
      </div>
    </header>
  );
}
