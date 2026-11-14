// A numbered chapter on an inner page: the heading on the left (it stays in view), the content on the right.
export default function Chapter({ num, id, title, text, band = false, children }) {
  const hid = id ? `${id}-title` : undefined;
  return (
    <section id={id} className={`chapter${band ? " band" : ""}`} aria-labelledby={hid}>
      <div className="wrap chapter-grid">
        <header className="chapter-head">
          {num && <span className="num" aria-hidden="true">{num}</span>}
          <h2 id={hid}>{title}</h2>
          {text && <p>{text}</p>}
        </header>
        <div className="chapter-body">{children}</div>
      </div>
    </section>
  );
}
