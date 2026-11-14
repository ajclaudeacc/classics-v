"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// The site's motion layer (skipped entirely for visitors who prefer reduced motion):
//  - content fades and rises into view as it is scrolled to, siblings one after another
//  - section headings wipe up into view, photos are revealed with a wipe and settle from a slight zoom
//  - large background photos drift slower than the page (parallax)
//  - a thin gold line at the top of the screen shows how far down the page you are
// Nothing is hidden until this script runs, and anything already on screen is left alone,
// so content is never lost if the script fails.
const SKIP = ".cine, .page-top, .contact-top, .not-found, .menu-panel, .site-header, .lightbox";
const FADE = [
  ".kicker", ".lead", ".head-row > .text-link", ".story-text > p", ".type-moment",
  ".reveal-list > li", ".steps > li", ".shelf > li", ".doc-grid > li", ".doc-feature", ".spec > li", ".ticks > li",
  ".layouts > li", ".jobs > li", ".extras > li", ".link-tiles > li", ".event-featured", ".events-empty", ".event-list > li",
  ".facts-list > li", ".visit-facts > div", ".contact-list > li", ".apply-ways > li", ".good-to-know > li",
  ".room-feature > div:not(.frame)", ".gallery-head", ".menu-pages > li", ".form-card", ".video", ".video-grid > *",
  ".close .actions", ".footer-top > *", ".steps-reviews", ".events-follow", ".strip", ".ribbon li", ".story-sign", ".map",
].join(", ");
const HEADS = "main h2, .footer-word";
const IMAGES = ".wall .frame, .room-feature .frame, .visit-photo, .pair .frame, .extra .frame";
const PARALLAX = ".hero-track, .page-top-img, .close-photo";

export default function Motion() {
  const pathname = usePathname();

  // Scroll progress line (shown to everyone; it moves only when the visitor scrolls).
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    if (!bar) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => { removeEventListener("scroll", onScroll); removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, [pathname]);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("motion");
    const timers = [];
    const pick = (sel, kind) =>
      [...document.querySelectorAll(sel)].filter((el) => !el.closest(SKIP) && !el.dataset.motion).map((el) => ({ el, kind }));
    const items = [...pick(HEADS, "rv-head"), ...pick(IMAGES, "rv-img"), ...pick(FADE, "rv")];

    // Wiped elements start fully clipped, and a fully clipped element never counts as "on screen",
    // so those are watched through their parent instead.
    const groups = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          io.unobserve(e.target);
          for (const el of groups.get(e.target) || []) {
            el.classList.add("in");
            const delay = parseInt(el.style.getPropertyValue("--d") || "0", 10);
            // Hand the element back to its normal hover effects once it has arrived.
            timers.push(setTimeout(() => { el.classList.remove("rv", "rv-head", "rv-img", "in"); el.style.removeProperty("--d"); }, delay + 1700));
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 }
    );

    for (const { el, kind } of items) {
      el.dataset.motion = "1";
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight * 0.9 && r.bottom > 0) continue; // already on screen: leave it as it is
      if (!r.width && !r.height) continue; // hidden (e.g. a phone-only element on a computer)
      const sibs = el.parentElement ? [...el.parentElement.children] : [];
      const i = Math.max(0, sibs.indexOf(el));
      el.style.setProperty("--d", `${Math.min(i, 6) * 90}ms`);
      el.classList.add(kind);
      const target = kind === "rv" ? el : el.parentElement;
      if (!groups.has(target)) groups.set(target, []);
      groups.get(target).push(el);
      io.observe(target);
    }

    // Parallax for large background photos.
    const layers = [...document.querySelectorAll(PARALLAX)];
    let raf = 0;
    const drift = () => {
      raf = 0;
      for (const l of layers) {
        const box = (l.closest(".cine, .page-top, .close") || l.parentElement).getBoundingClientRect();
        if (box.bottom < 0 || box.top > innerHeight) continue;
        const offset = (box.top + box.height / 2 - innerHeight / 2) * -0.12;
        l.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.14)`;
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(drift); };
    drift();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
      // Leave nothing hidden behind if the page changes mid-animation.
      for (const { el } of items) { el.classList.remove("rv", "rv-head", "rv-img", "in"); el.style.removeProperty("--d"); delete el.dataset.motion; }
      for (const l of layers) l.style.transform = "";
    };
  }, [pathname]);

  return <div id="scroll-progress" aria-hidden="true" />;
}
