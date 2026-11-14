"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const OUT_MS = 220; // how long the old page takes to dim
const IN_MS = 560; // how long the new page takes to appear
const HOLD_MS = 700; // longest wait for the new page's top photo before fading in anyway

// Smooth page changes: the current page fades out briefly, then the next one fades in.
// Only links to other pages on this site are affected; new tabs, downloads, phone/email links,
// same-page anchors and visitors who prefer reduced motion all work exactly as before.
export default function PageTransitions() {
  const router = useRouter();
  const pathname = usePathname();

  // The new page has rendered: once its top photo is ready (or after a short wait), fade it in
  // over the dark backdrop, so the photo never pops in after the fade.
  useEffect(() => {
    const main = document.getElementById("main");
    if (!main) return;
    // Only pages reached by clicking a link fade; the first page and back/forward changes appear at once.
    if (!main.classList.contains("is-leaving")) return;
    const timers = [];
    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      main.classList.remove("is-leaving");
      main.classList.add("is-entering");
      timers.push(setTimeout(() => main.classList.remove("is-entering"), IN_MS + 40));
    };
    const photo = main.querySelector(".page-hero-img, .hero-slide.is-active");
    if (photo && !photo.complete) {
      main.classList.add("is-leaving"); // stay on the dark backdrop while the photo loads
      photo.addEventListener("load", start, { once: true });
      photo.addEventListener("error", start, { once: true });
      timers.push(setTimeout(start, HOLD_MS));
    } else {
      start();
    }
    return () => {
      timers.forEach(clearTimeout);
      photo?.removeEventListener("load", start);
      photo?.removeEventListener("error", start);
      // If the visitor moves on mid-fade, never leave this page dimmed.
      if (!started) main.classList.remove("is-leaving");
    };
  }, [pathname]);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const main = document.getElementById("main");
    let safety;

    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest("a[href]");
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname) return; // same page (including #anchors): leave it alone
      if (/\.(pdf|jpe?g|png|svg)$/i.test(url.pathname)) return;
      e.preventDefault();
      main.classList.add("is-leaving");
      clearTimeout(safety);
      // Never leave the page faded out if something goes wrong.
      safety = setTimeout(() => main.classList.remove("is-leaving"), 3000);
      setTimeout(() => router.push(url.pathname + url.search + url.hash), OUT_MS);
    };

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      clearTimeout(safety);
    };
  }, [router]);

  return null;
}
