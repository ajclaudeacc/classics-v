import Link from "next/link";
import { BUSINESS } from "@/lib/site";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="wrap">
        <p className="kicker">Page not found</p>
        <h1>We couldn&rsquo;t find that page</h1>
        <p className="lead">It may have moved. Try the homepage, or call us at <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>.</p>
        <p style={{ marginTop: 28 }}><Link className="btn btn-primary btn-lg" href="/">Go to the homepage</Link></p>
      </div>
    </section>
  );
}
