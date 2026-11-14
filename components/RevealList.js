"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { cdn } from "@/lib/site";
import { Arrow } from "./Icons";
import Photo from "./Photo";

// A large numbered list. On a computer, the matching photo follows the pointer over each row;
// on touch screens each row shows its own small photo instead.
export default function RevealList({ items }) {
  const list = useRef(null);
  const float = useRef(null);
  const [current, setCurrent] = useState(-1);

  const move = (e) => {
    const el = float.current;
    if (!el) return;
    const r = list.current.getBoundingClientRect();
    el.style.left = `${e.clientX - r.left}px`;
    el.style.top = `${e.clientY - r.top}px`;
  };

  return (
    <div className="reveal-wrap" ref={list} onMouseMove={move} onMouseLeave={() => setCurrent(-1)}>
    <ol className="reveal-list">
      {items.map((s, i) => (
        <li key={s.href} onMouseEnter={() => setCurrent(i)}>
          <Link className="reveal-row" href={s.href}>
            <span className="reveal-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="reveal-title">{s.title}</span>
            <span className="reveal-line">{s.line}</span>
            <span className="frame reveal-thumb"><Photo src={s.img} alt="" sizes="104px" widths={[300]} /></span>
            <span className="reveal-arrow" aria-hidden="true"><Arrow /></span>
          </Link>
        </li>
      ))}
    </ol>
      <div className={`reveal-float${current >= 0 ? " is-on" : ""}`} ref={float} aria-hidden="true">
        {items.map((s, i) => (
          <img key={s.href} src={cdn(s.img, 750)} alt="" loading="lazy" decoding="async" className={i === current ? "is-current" : undefined} />
        ))}
      </div>
    </div>
  );
}
