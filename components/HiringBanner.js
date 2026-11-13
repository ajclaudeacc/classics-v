"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Close, Arrow } from "./Icons";

const KEY = "cv-hiring-dismissed"; // also read by the inline script in app/layout.js

// Site-wide "We're hiring" bar. Closing it hides it for that visitor (the inline script in the
// layout adds .hire-off before paint so it never flashes back in).
export default function HiringBanner() {
  const path = usePathname();
  const [closed, setClosed] = useState(false);
  if (closed || path === "/careers") return null;
  const close = () => {
    try { localStorage.setItem(KEY, "1"); } catch {}
    document.documentElement.classList.add("hire-off");
    setClosed(true);
    document.getElementById("main")?.focus({ preventScroll: true });
  };
  return (
    <div className="hiring-bar" role="region" aria-label="We're hiring">
      <p>
        <span className="hiring-tag">We&rsquo;re hiring</span>
        <span className="hire-long">Servers and dishwashers wanted.</span>
        <Link href="/careers">
          <span className="hire-long">How to apply</span>
          <span className="hire-short">Servers &amp; dishwashers</span> <Arrow />
        </Link>
      </p>
      <button type="button" className="hiring-close" onClick={close} aria-label="Close the hiring message"><Close /></button>
    </div>
  );
}

