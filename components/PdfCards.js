import { Download } from "./Icons";

const pageCount = (n) => `${n} ${n === 1 ? "page" : "pages"}`;

// Each PDF shown as its real cover, linked to the file.
// docs: entries from DOCS, optionally with { label, note } to describe how the document is used here.
export default function PdfCards({ docs, size = "md" }) {
  if (size === "mini") {
    const d = docs[0];
    return (
      <a className="doc-mini" href={d.href} target="_blank" rel="noopener">
        <img src={d.cover} alt="" width="600" height="776" loading="lazy" />
        <span><span className="doc-title">{d.label || d.title}</span><span className="doc-inside">PDF · {pageCount(d.pages)}</span></span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  if (docs.length === 1) {
    const d = docs[0];
    return (
      <a className="doc-feature" href={d.href} target="_blank" rel="noopener">
        <span className="doc-cover"><img src={d.cover} alt="" width="600" height="776" loading="lazy" /></span>
        <span className="doc-feature-text">
          {d.kicker !== false && <span className="doc-kicker">{d.kicker || "Menu & pricing"}</span>}
          <span className="doc-title">{d.label || d.title}</span>
          <span className="doc-inside">{d.note || d.inside}</span>
          <span className="btn btn-primary"><Download /> Open the PDF <span className="doc-pages">· {pageCount(d.pages)}</span></span>
          <span className="sr-only"> (opens in a new tab)</span>
        </span>
      </a>
    );
  }
  return (
    <ul className={`doc-grid doc-${size}`}>
      {docs.map((d) => (
        <li key={d.href + (d.label || "")}>
          <a className="doc-card" href={d.href} target="_blank" rel="noopener">
            <span className="doc-cover">
              <img src={d.cover} alt="" width="600" height="776" loading="lazy" />
              <span className="doc-badge">PDF</span>
            </span>
            <span className="doc-title">{d.label || d.title}</span>
            <span className="doc-inside">{d.note || d.inside}</span>
            <span className="doc-meta"><Download /> {pageCount(d.pages)}<span className="sr-only">, PDF, opens in a new tab</span></span>
          </a>
        </li>
      ))}
    </ul>
  );
}
