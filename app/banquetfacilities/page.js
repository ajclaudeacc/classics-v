import Link from "next/link";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import PdfCards from "@/components/PdfCards";
import LinkTiles from "@/components/LinkTiles";
import Ornament from "@/components/Ornament";
import CallToAction from "@/components/CallToAction";
import { Check, Users } from "@/components/Icons";
import { IMG, PDF, LEGACY_PAGES, ROOMS, DOCS } from "@/lib/site";

export const metadata = {
  title: "Banquet Hall & Shower Venue",
  description: "Four banquet rooms for 35 to 500 guests in Amherst, NY. Breakfast, lunch and dinner buffets, sit-down meals, stations and cocktail parties.",
};

const SERVICE_STYLES = ["Breakfast, lunch & dinner buffets", "Full-service sit-down meals", "Station packages", "Cocktail parties"];

export default function Banquets() {
  return (
    <>
      <PageHero
        title="Banquets & showers"
        intro="Four banquet rooms accommodating 35 to 500 guests. Whatever the size of your group, Classics V has the right room for your special event."
        img={IMG.ballroomOpen}
        alt="Banquet room with round tables, white linens and burgundy chairs"
      >
        <a className="btn btn-primary btn-lg" href="#menus">View 2026 menus</a>
        <Link className="btn btn-outline-light btn-lg" href="/contact">Check availability</Link>
      </PageHero>

      <section className="section">
        <div className="container split">
          <div className="prose">
            <h2>Every style of service</h2>
            <p>Our experience in event planning and hospitality helps make your event a success, with menus for every time of day.</p>
            <ul className="checklist checklist-compact">
              {SERVICE_STYLES.map((s) => <li key={s}><Check />{s}</li>)}
            </ul>
          </div>
          <ul className="room-mini">
            {ROOMS.map((r) => (
              <li key={r.id}>
                <Link href={`/about#${r.id}`}>{r.name}</Link>
                <span><Users /> {r.capacity}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="showers-title">
        <div className="container split">
          <Photo src={IMG.anthonyDaniel} alt="Anthony Daniel Room set with round tables, white linens and blue sashes" className="rounded-img" sizes="(min-width: 900px) 50vw, 100vw" />
          <div className="prose">
            <h2 id="showers-title">The perfect baby or bridal shower venue</h2>
            <p>
              Expanding a family is an exciting time, and planning a shower can bring an overwhelming amount of stress. We have the
              experience of hosting showers and can help you every step of the way, so your shower is a memorable and fun occasion
              for you and your family.
            </p>
            <p>Our Adam David and Anthony Daniel rooms are sized for groups of 35 to 80.</p>
            <p><Link className="btn btn-secondary" href="/contact">Start planning your shower</Link></p>
          </div>
        </div>
      </section>

      <section id="menus" className="section section-tint docs-section" aria-labelledby="menus-title">
        <div className="container">
          <div className="section-head section-head-center">
            <p className="script">Great food! Since 1985</p>
            <h2 id="menus-title">Banquet &amp; shower menus</h2>
            <Ornament />
            <p>Select a cover to open the full menu with pricing.</p>
          </div>
          <PdfCards docs={[DOCS.lunch, DOCS.dinner, DOCS.prom, DOCS.funeral, DOCS.terms]} />

          <div className="weekend">
            <h3 className="weekend-title">More ways to customize</h3>
            <LinkTiles
              items={[
                { title: "Youth organizations", note: "Menu options for youth groups", href: LEGACY_PAGES.youth, img: IMG.anthonyDaniel, external: true },
                { title: "Banquet enhancements", note: "Upgrades for your event", href: LEGACY_PAGES.enhancements, img: IMG.lampCenterpiece, external: true },
                { title: "Coffee & desserts", note: "Dessert and coffee stations", href: LEGACY_PAGES.desserts, img: IMG.christinaMaria, external: true },
              ]}
            />
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
