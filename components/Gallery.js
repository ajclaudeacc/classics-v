"use client";
import { useEffect, useRef, useState } from "react";
import { cdn, cdnSrcSet } from "@/lib/site";
import { Close, Chevron } from "./Icons";

// Photo grid with an accessible lightbox built on the native <dialog> element.
export default function Gallery({ groups }) {
  const all = groups.flatMap((g) => g.photos.map((p) => ({ ...p, group: g.title })));
  const [index, setIndex] = useState(-1);
  const dialog = useRef(null);
  const opener = useRef(null);

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

  let n = -1;
  const current = all[index];
  return (
    <>
      {groups.map((g) => (
        <section key={g.id} className="gallery-group" aria-labelledby={`g-${g.id}`}>
          <div className="gallery-head">
            <h2 id={`g-${g.id}`}>{g.title}</h2>
            {g.note && <p>{g.note}</p>}
          </div>
          <ul className="gallery-grid">
            {g.photos.map((p) => {
              n += 1;
              const i = n;
              return (
                <li key={p.src}>
                  <button
                    type="button"
                    className="gallery-thumb"
                    onClick={(e) => { opener.current = e.currentTarget; setIndex(i); }}
                    aria-label={`View larger: ${p.alt}`}
                  >
                    <img src={cdn(p.src, 500)} srcSet={cdnSrcSet(p.src, [300, 500, 750])} sizes="(min-width: 1000px) 25vw, (min-width: 640px) 33vw, 50vw" alt={p.alt} width={p.w} height={p.h} loading="lazy" decoding="async" />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <dialog ref={dialog} className="lightbox" aria-label="Photo viewer" onKeyDown={onKey} onClick={(e) => e.target === dialog.current && dialog.current.close()}>
        {current && (
          <div className="lightbox-inner">
            <img src={cdn(current.src, 1500)} alt={current.alt} />
            <p className="lightbox-caption">
              <span>{current.alt}</span>
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
