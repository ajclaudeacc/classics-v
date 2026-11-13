import Link from "next/link";
import { BUSINESS } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow">
        <h1>We couldn&rsquo;t find that page</h1>
        <p className="lead-text">It may have moved. Try the homepage, or call us at <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>.</p>
        <p><Link className="btn btn-primary" href="/">Go to the homepage</Link></p>
      </div>
    </section>
  );
}
