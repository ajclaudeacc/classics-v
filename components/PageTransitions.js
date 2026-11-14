"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const OUT_MS = 160; // how long the old page takes to fade out

// Smooth page changes: the current page fades out briefly, then the next one fades in.
// Only links to other pages on this site are affected; new tabs, downloads, phone/email links,
// same-page anchors and visitors who prefer reduced motion all work exactly as before.
export default function PageTransitions() {
  const router = useRouter();
  const pathname = usePathname();

  // The new page has rendered: clear the fade-out.
  useEffect(() => {
    document.getElementById("main")?.classList.remove("is-leaving");
  }, [pathname]);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
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
      root.classList.add("page-anim");
      main.classList.add("is-leaving");
      clearTimeout(safety);
      // Never leave the page faded out if something goes wrong.
      safety = setTimeout(() => main.classList.remove("is-leaving"), 3000);
      setTimeout(() => router.push(url.pathname + url.search + url.hash), OUT_MS);
    };
    // Back and forward buttons: no fade-out (the browser changes the page at once), but the new page still fades in.
    const onPop = () => root.classList.add("page-anim");

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPop);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPop);
      clearTimeout(safety);
    };
  }, [router]);

  return null;
}
