import Link from "next/link";
import { BUSINESS } from "@/lib/site";
import { Phone } from "./Icons";

// Fixed to the bottom of phone screens: the two things visitors do most.
export default function ActionBar() {
  return (
    <nav className="action-bar" aria-label="Quick actions">
      <a className="btn btn-quiet" href={BUSINESS.phoneHref}><Phone /> Call</a>
      <Link className="btn btn-primary" href="/contact">Book a tour</Link>
    </nav>
  );
}
