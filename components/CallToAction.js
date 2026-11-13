import Link from "next/link";
import { BUSINESS } from "@/lib/site";
import { Phone } from "./Icons";
import Ornament from "./Ornament";

export default function CallToAction({ title = "See the space in person", text = "Schedule a private tour of our ballrooms. Our office staff can check availability and answer your questions." }) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-inner">
        <div>
          <p className="script">Let us do the work for you</p>
          <h2 id="cta-title">{title}</h2>
          <p>{text}</p>
        </div>
        <Ornament className="cta-ornament" />
        <div className="cta-actions">
          <a className="btn btn-light" href={BUSINESS.phoneHref}><Phone /> Call {BUSINESS.phone}</a>
          <Link className="btn btn-outline-light" href="/contact">Send a message</Link>
        </div>
      </div>
    </section>
  );
}
