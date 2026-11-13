import { MENUS } from "@/lib/site";
import Ornament from "./Ornament";
import { Download } from "./Icons";

// The banquet menus shown as real covers laid out on a navy "tablecloth".
export default function MenuShowcase() {
  return (
    <section className="menu-showcase" aria-labelledby="menus-title">
      <div className="container">
        <div className="menu-head">
          <p className="script">Great food! Since 1985</p>
          <h2 id="menus-title">Our menus</h2>
          <Ornament />
          <p>Full menus with pricing, straight from our kitchen. Select a menu to open it.</p>
        </div>
        <ul className="menu-fan">
          {MENUS.map((m, i) => (
            <li key={m.href} style={{ "--i": i, "--n": MENUS.length }}>
              <a href={m.href} target="_blank" rel="noopener" className="menu-item">
                <span className="menu-cover">
                  <img src={m.cover} alt="" width="600" height="776" loading="lazy" />
                </span>
                <span className="menu-caption">
                  <span className="menu-title">{m.title}</span>
                  <span className="menu-inside">{m.inside}</span>
                  <span className="menu-meta"><Download /> PDF · {m.pages} {m.pages === 1 ? "page" : "pages"}<span className="sr-only">, opens in a new tab</span></span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
