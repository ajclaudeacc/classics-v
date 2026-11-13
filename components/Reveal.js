"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Gently fades content in as it scrolls into view. Content is fully visible without
// JavaScript, and nothing animates for visitors who prefer reduced motion.
const TARGETS = ".section-head, .split > *, .card, .room, .layout-card, .steps li, .downloads li, .event-featured, .gallery-group, .info-card, .form-card, .mosaic li, .checklist li, .video-grid > *, .cta-inner > *";

export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = [...document.querySelectorAll(TARGETS)].filter((el) => !el.closest(".hero, .page-hero"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target;
          el.classList.add("is-visible");
          io.unobserve(el);
          // Hand the element back to its normal hover transitions once revealed.
          setTimeout(() => el.classList.remove("reveal", "is-visible"), 1300);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((el) => {
      // Stagger siblings in a row (cards, list items) slightly.
      const sibs = el.parentElement ? [...el.parentElement.children] : [];
      el.style.setProperty("--reveal-delay", `${Math.min(sibs.indexOf(el), 5) * 70}ms`);
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight * 0.92) return; // already on screen: leave as is
      el.classList.add("reveal");
      io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
