"use client";
import { useEffect, useRef, useState } from "react";
import { cdn, cdnSrcSet } from "@/lib/site";
import { Close, Chevron } from "./Icons";
import NearImg from "./NearImg";

const Zoom = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    <circle cx="10.5" cy="10.5" r="6" /><path d="M15 15l5 5M10.5 8v5M8 10.5h5" />
  </svg>
);

// Widen the last photo so no row ends with an empty gap (3 columns on desktop, 2 on phones).
function fill(count) {
  const bento = count >= 4;
  const desk = (bento ? count + 3 : count) % 3;
  const phone = (bento ? count + 1 : count) % 2;
  return [desk === 1 && "fill-3", desk === 2 && "fill-2", phone === 1 && "m-fill-2"].filter(Boolean).join(" ") || undefined;
}

// Tell the browser how wide each tile really is so large tiles get a sharp file.
// Very wide photos (panoramas) are cropped to fit, so they need a proportionally wider file.
function thumbSizes(count, k, ratio = 4 / 3) {
  if (ratio > 1.6) return `(min-width: 701px) ${Math.round((33 * ratio * 3) / 4)}vw, ${Math.round((50 * ratio * 3) / 4)}vw`;
  const cls = k === count - 1 ? fill(count) || "" : "";
  const lead = count >= 4 && k === 0;
  if (cls.includes("fill-3") && !cls.includes("m-fill")) return "(min-width: 1300px) 1240px, 100vw";
  if (lead || cls.includes("fill-2")) return `(min-width: 1300px) 830px, (min-width: 701px) 66vw, ${lead || cls.includes("m-fill-2") ? "100vw" : "50vw"}`;
  return `(min-width: 1300px) 410px, (min-width: 701px) 33vw, ${cls.includes("m-fill-2") ? "100vw" : "50vw"}`;
}

// Room filter + photo grid + an accessible lightbox built on the native <dialog> element.
export default function Gallery({ groups }) {
  const [filter, setFilter] = useState("all");
  const shown = filter === "all" ? groups : groups.filter((g) => g.id === filter);
  const all = shown.flatMap((g) => g.photos.map((p) => ({ ...p, group: g.title })));
  const total = groups.reduce((n, g) => n + g.photos.length, 0);
  const [index, setIndex] = useState(-1);
  const dialog = useRef(null);
  const opener = useRef(null);
  const touch = useRef(null);

  useEffect(() => {
    const d = dialog.current;
    if (index >= 0 && !d.open) d.showModal();
    if (index < 0 && d.open) d.close();
  }, [index]);

  useEffect(() => {
    const d = dialog.current;
    const onClose = () => {
      setIndex(-1);
      opener.current?.focus();
    };
    d.addEventListener("close", onClose);
    return () => d.removeEventListener("close", onClose);
  }, []);

  const step = (dir) => setIndex((i) => (i + dir + all.length) % all.length);
  const onKey = (e) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  };
  const onTouchEnd = (e) => {
    if (touch.current == null) return;
    const dx = e.changedTouches[0].clientX - touch.current;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    touch.current = null;
  };

  const choose = (id) => {
    setFilter(id);
    document.getElementById("gallery-top")?.scrollIntoView({ block: "start" });
  };

  let n = -1;
  const current = all[index];
  return (
    <>
      <div id="gallery-top" className="gallery-filter" role="group" aria-label="Show photos of">
        <button type="button" aria-pressed={filter === "all"} onClick={() => choose("all")}>
          All rooms <span className="count">{total}</span>
        </button>
        {groups.map((g) => (
          <button key={g.id} type="button" aria-pressed={filter === g.id} onClick={() => choose(g.id)}>
            {g.title} <span className="count">{g.photos.length}</span>
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        {filter === "all" ? `Showing all ${total} photos` : `Showing ${all.length} photos of ${shown[0].title}`}
      </p>

      {shown.map((g) => (
        <section key={g.id} className="gallery-group" aria-labelledby={`g-${g.id}`}>
          <div className="gallery-head">
            <h2 id={`g-${g.id}`}>{g.title} <span className="gallery-count">{g.photos.length} photos</span></h2>
            {g.note && <p>{g.note}</p>}
          </div>
          <ul className={`gallery-grid${g.photos.length >= 4 ? " is-bento" : ""}`}>
            {g.photos.map((p, k) => {
              n += 1;
              const i = n;
              return (
                <li key={p.src} className={k === g.photos.length - 1 ? fill(g.photos.length) : undefined}>
                  <button
                    type="button"
                    className="gallery-thumb"
                    onClick={(e) => { opener.current = e.currentTarget; setIndex(i); }}
                    aria-label={`View larger: ${p.alt}`}
                  >
                    <NearImg eager={i < 4} src={cdn(p.src, 750)} srcSet={cdnSrcSet(p.src, [500, 750, 1000, 1500, 2500])} sizes={thumbSizes(g.photos.length, k, p.w / p.h)} alt={p.alt} width={p.w} height={p.h} />
                    <span className="thumb-overlay" aria-hidden="true">
                      <span className="thumb-caption">{p.alt}</span>
                      <span className="thumb-zoom"><Zoom /></span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Photo viewer"
        onKeyDown={onKey}
        onClick={(e) => e.target === dialog.current && dialog.current.close()}
        onTouchStart={(e) => { touch.current = e.touches[0].clientX; }}
        onTouchEnd={onTouchEnd}
      >
        {current && (
          <div className="lightbox-inner">
            <img key={current.src} src={cdn(current.src, 1500)} srcSet={cdnSrcSet(current.src, [1000, 1500, 2500])} sizes="94vw" alt={current.alt} />
            <p className="lightbox-caption">
              <span><strong>{current.group}</strong> · {current.alt}</span>
              <span className="lightbox-count">{index + 1} of {all.length}</span>
            </p>
            <button type="button" className="lb-btn lb-prev" onClick={() => step(-1)} aria-label="Previous photo"><Chevron /></button>
            <button type="button" className="lb-btn lb-next" onClick={() => step(1)} aria-label="Next photo"><Chevron /></button>
            <button type="button" className="lb-btn lb-close" onClick={() => dialog.current.close()} aria-label="Close photo viewer" autoFocus><Close /></button>
          </div>
        )}
      </dialog>
    </>
  );
}
