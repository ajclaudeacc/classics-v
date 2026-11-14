"use client";
import { useEffect, useRef, useState } from "react";

// Counts a number up once, eased; shows the final value straight away for reduced motion.
function useCount(target, run, duration, from) {
  const [v, setV] = useState(target);
  useEffect(() => {
    if (!run) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / duration);
      setV(Math.round(from + (target - from) * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration, from]);
  return v;
}

// The three facts under the home hero; the numbers count up when they come into view.
export default function Facts() {
  const ref = useRef(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setRun(true); io.disconnect(); } }, { threshold: 0.5 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const rooms = useCount(4, run, 900, 0);
  const max = useCount(500, run, 1700, 35);
  const year = useCount(1985, run, 1700, 1950);
  return (
    <section className="facts" aria-label="At a glance" ref={ref}>
      <ul className="wrap facts-list">
        <li><strong aria-hidden="true">{rooms}</strong><span className="sr-only">4 banquet rooms</span><span aria-hidden="true">banquet rooms</span></li>
        <li><strong aria-hidden="true">35 to {max}</strong><span className="sr-only">35 to 500 guests</span><span aria-hidden="true">guests</span></li>
        <li><strong aria-hidden="true">Since {year}</strong><span className="sr-only">Family owned since 1985</span><span aria-hidden="true">family owned</span></li>
      </ul>
    </section>
  );
}
