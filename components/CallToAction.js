import Link from "next/link";
import { BUSINESS, IMG } from "@/lib/site";
import { Phone } from "./Icons";
import Photo from "./Photo";

// Closing band on every page: the next step over a darkened photograph.
export default function CallToAction({
  title = "See the space in person",
  text = "Schedule a private tour of our ballrooms. Our office staff can check availability and answer your questions.",
  img = IMG.terrace,
  alt = "",
}) {
  return (
    <section className="close" aria-labelledby="cta-title">
      <div className="close-photo"><Photo src={img} alt={alt} sizes="100vw" widths={[750, 1000, 1500, 2500]} /></div>
      <div className="wrap close-grid">
        <div className="close-text">
          <p className="kicker">Let us do the work for you</p>
          <h2 id="cta-title">{title}</h2>
          <p>{text}</p>
          <div className="actions">
            <a className="btn btn-primary btn-lg" href={BUSINESS.phoneHref}><Phone /> Call {BUSINESS.phone}</a>
            <Link className="btn btn-outline-light btn-lg" href="/contact">Send a message</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
