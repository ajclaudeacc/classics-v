import PageHero from "@/components/PageHero";
import DownloadList from "@/components/DownloadList";
import { Phone } from "@/components/Icons";
import { BUSINESS, IMG, PDF } from "@/lib/site";

export const metadata = {
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
      />
      <section className="section">
        <div className="container narrow">
          <h2>Funeral gatherings menu</h2>
          <p className="lead-text">See our special funeral gatherings menu, then call our office to arrange the room and timing.</p>
          <DownloadList items={[{ label: "2026 Funeral Gatherings Menu", href: PDF.funeral }]} />
          <div className="call-box">
            <p>To arrange a gathering, please call</p>
            <a className="btn btn-primary btn-lg" href={BUSINESS.phoneHref}><Phone /> {BUSINESS.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
