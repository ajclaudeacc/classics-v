import { MENUS } from "@/lib/site";
import { Download } from "./Icons";

// The banquet menus as a shelf of their real covers.
export default function MenuShowcase() {
  return (
    <section className="section" aria-labelledby="menus-title">
      <div className="wrap">
        <div className="head">
          <div>
            <p className="kicker">Great food! Since 1985</p>
            <h2 id="menus-title">Our <em>menus</em></h2>
          </div>
          <p className="lead">Full menus with pricing, straight from our kitchen. Select a cover to open it.</p>
        </div>
        <ul className="shelf">
          {MENUS.map((m) => (
            <li key={m.href}>
              <a href={m.href} target="_blank" rel="noopener">
                <span className="cover"><img src={m.cover} alt="" width="600" height="776" loading="lazy" /></span>
                <span className="shelf-title">{m.title}</span>
                <span className="shelf-meta"><Download /> PDF · {m.pages} {m.pages === 1 ? "page" : "pages"}<span className="sr-only">, opens in a new tab</span></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
