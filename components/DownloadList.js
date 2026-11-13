import { Download, External } from "./Icons";

// items: [{ label, href, note?, kind: "pdf" | "page" }]
export default function DownloadList({ items, columns = 1 }) {
  return (
    <ul className={`downloads cols-${columns}`}>
      {items.map((it) => (
        <li key={it.href + it.label}>
          <a href={it.href} target={it.kind === "page" ? undefined : "_blank"} rel={it.kind === "page" ? undefined : "noopener"}>
            <span className="dl-icon" aria-hidden="true">{it.kind === "page" ? <External /> : <Download />}</span>
            <span className="dl-text">
              <span className="dl-label">{it.label}</span>
              <span className="dl-note">{it.note || (it.kind === "page" ? "Opens on classicsfive.com" : "PDF")}</span>
            </span>
            {it.kind !== "page" && <span className="sr-only"> (PDF, opens in a new tab)</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
