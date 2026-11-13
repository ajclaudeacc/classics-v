import PageHero from "@/components/PageHero";
import PdfCards from "@/components/PdfCards";
import { Phone } from "@/components/Icons";
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
        title="Funeral gatherings"
        intro="A place for family and friends to gather after a service. Our office staff will help you arrange the details."
        img={IMG.exterior}
        alt="The Classics V building entrance with its columned archway"
        areas={false}
      >
        <a className="btn btn-primary btn-lg" href={BUSINESS.phoneHref}><Phone /> Call {BUSINESS.phone}</a>
        <a className="btn btn-outline-light btn-lg" href={DOCS.funeral.href} target="_blank" rel="noopener">See the menu (PDF)</a>
      </PageHero>
      <section className="section">
        <div className="container narrow">
          <h2>Funeral gatherings menu</h2>
          <p className="lead-text">See our special funeral gatherings menu, then call our office to arrange the room and timing.</p>
          <PdfCards docs={[DOCS.funeral]} />
          <div className="call-box">
            <p>To arrange a gathering, please call</p>
            <a className="btn btn-primary btn-lg" href={BUSINESS.phoneHref}><Phone /> {BUSINESS.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
