"use client";
import { useEffect, useRef, useState } from "react";
import { cdn, cdnSrcSet } from "@/lib/site";

// Cross-fading hero photos with a pause button (needed for anything that moves on its own).
// Visitors who prefer reduced motion see the first photo only.
export default function HeroSlides({ slides, interval = 6000 }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reduced, setReduced] = useState(false);
  // Only load a slide once it is showing or up next, so phones do not download every photo up front.
  // The second photo waits a few seconds so it doesn't slow down the first one on mobile data.
  const loaded = useRef(new Set([0]));
  const [warm, setWarm] = useState(false);
  useEffect(() => { const t = setTimeout(() => setWarm(true), 2500); return () => clearTimeout(t); }, []);
  loaded.current.add(active);
  if (warm) loaded.current.add((active + 1) % slides.length);

  useEffect(() => {
    const mq = matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) setPlaying(false);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      if (!document.hidden) setActive((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [playing, interval, slides.length]);

  return (
    <div className="hero-slides">
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={loaded.current.has(i) ? cdn(s.src, 1500) : undefined}
          srcSet={loaded.current.has(i) ? cdnSrcSet(s.src, [750, 1000, 1500, 2500]) : undefined}
          sizes="100vw"
          alt={i === active ? s.alt : ""}
          aria-hidden={i === active ? undefined : true}
          className={`hero-slide${i === active ? " is-active" : ""}`}
          style={{ objectPosition: s.position || "center" }}
          fetchPriority={i === 0 ? "high" : undefined}
          decoding="async"
          width="1500"
          height="1000"
        />
      ))}
      {!reduced && (
        <div className="hero-controls">
          <div className="hero-dots" role="group" aria-label="Choose a photo">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                className="hero-dot"
                aria-label={`Photo ${i + 1} of ${slides.length}: ${s.label}`}
                aria-pressed={i === active}
                onClick={() => { setActive(i); setPlaying(false); }}
              />
            ))}
          </div>
          <button type="button" className="hero-pause" onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Pause slideshow" : "Play slideshow"}>
            {playing ? (
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M7 5h3v14H7zM14 5h3v14h-3z" fill="currentColor" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
