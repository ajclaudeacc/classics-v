"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "./Icons";
import Photo from "./Photo";

// The rooms as tall photo cards in a strip you can swipe (or step through with the arrows).
export default function RoomStrip({ rooms, heading }) {
  const strip = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const el = strip.current;
    const update = () => setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { el.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  const step = (dir) => {
    const el = strip.current;
    const card = el.querySelector("li");
    el.scrollBy({ left: dir * (card ? card.getBoundingClientRect().width + 20 : 400), behavior: "smooth" });
  };

  return (
    <>
      <div className="wrap head-row">
        {heading}
        <div className="strip-controls">
          <button type="button" className="strip-btn prev" onClick={() => step(-1)} disabled={edges.start} aria-label="Previous rooms"><Arrow /></button>
          <button type="button" className="strip-btn" onClick={() => step(1)} disabled={edges.end} aria-label="More rooms"><Arrow /></button>
        </div>
      </div>
      <ul className="strip" ref={strip}>
        {rooms.map((r) => (
          <li key={r.id}>
            <Link className="room-card" href={`/about#${r.id}`}>
              <Photo src={r.img} alt={r.alt} sizes="(min-width: 760px) 30vw, 78vw" widths={[500, 750, 1000]} />
              <span className="room-card-text">
                <span className="room-card-cap">{r.capacity.replace(" guests", "")}<small>guests</small></span>
                <span className="room-card-name">{r.name}</span>
                {r.sub && <span className="room-card-sub">{r.sub}</span>}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
