import Link from "next/link";
import { cdn, cdnSrcSet } from "@/lib/site";
import { Arrow, External } from "./Icons";
import NearImg from "./NearImg";

// Photo-backed link tiles. items: [{ title, note, href, img, external? }]
export default function LinkTiles({ items }) {
  return (
    <ul className="link-tiles">
      {items.map((t) => {
        const inner = (
          <>
            <NearImg src={cdn(t.img, 750)} srcSet={cdnSrcSet(t.img, [500, 750, 1000])} sizes="(min-width: 900px) 33vw, 100vw" alt="" />
            <span className="tile-shade" aria-hidden="true" />
            <span className="tile-text">
              <span className="tile-title">{t.title}</span>
              {t.note && <span className="tile-note">{t.note}</span>}
              <span className="tile-go" aria-hidden="true">{t.external ? <External /> : <Arrow />}</span>
            </span>
            {t.external && <span className="sr-only"> (opens {t.site || "classicsfive.com"})</span>}
          </>
        );
        return (
          <li key={t.href}>
            {t.external ? <a className="tile" href={t.href}>{inner}</a> : <Link className="tile" href={t.href}>{inner}</Link>}
          </li>
        );
      })}
    </ul>
  );
}
