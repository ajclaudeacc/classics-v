import Link from "next/link";
import { Arrow } from "./Icons";
import Photo from "./Photo";

// A large numbered list, each row with its own small photo.
export default function RevealList({ items }) {
  return (
    <ol className="reveal-list">
      {items.map((s, i) => (
        <li key={s.href}>
          <Link className="reveal-row" href={s.href}>
            <span className="reveal-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="reveal-title">{s.title}</span>
            <span className="reveal-line">{s.line}</span>
            <span className="frame reveal-thumb"><Photo src={s.img} alt="" sizes="(min-width: 861px) 170px, 104px" widths={[300, 500]} /></span>
            <span className="reveal-arrow" aria-hidden="true"><Arrow /></span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
