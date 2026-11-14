import PageHero from "@/components/PageHero";
import PdfCards from "@/components/PdfCards";
import { Phone } from "@/components/Icons";
import Chapter from "@/components/Chapter";
import { BUSINESS, IMG, DOCS } from "@/lib/site";

export const metadata = {
  alternates: { canonical: "/funeral-gatherings" },
  title: "Funeral Gatherings",
  description: "Funeral gathering menu at Classics V Banquet & Conference Center in Amherst, NY.",
};

export default function FuneralGatherings() {
  return (
    <>
      <PageHero
        kicker="Funeral gatherings"
        title="Funeral gatherings"
        intro="A place for family and friends to gather after a service. Our office staff will help you arrange the details."
        img={IMG.exterior}
        alt="The Classics V building entrance with its columned archway"
        areas={false}
      >
        <a className="btn btn-primary btn-lg" href={BUSINESS.phoneHref}><Phone /> Call {BUSINESS.phone}</a>
        <a className="text-link" href={DOCS.funeral.href} target="_blank" rel="noopener">See the menu (PDF)</a>
      </PageHero>

      <Chapter num="01" id="menu" title="Funeral gatherings menu" text="See our special funeral gatherings menu, then call our office to arrange the room and timing.">
        <PdfCards docs={[DOCS.funeral]} />
        <div className="doc-feature" style={{ gridTemplateColumns: "1fr", textAlign: "left" }}>
          <p className="doc-kicker">To arrange a gathering, please call</p>
          <a className="contact-big" href={BUSINESS.phoneHref} style={{ color: "var(--ink)" }}>{BUSINESS.phone}</a>
        </div>
      </Chapter>
    </>
  );
}
