import Link from "next/link";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import PdfCards from "@/components/PdfCards";
import LinkTiles from "@/components/LinkTiles";
import Chapter from "@/components/Chapter";
import CallToAction from "@/components/CallToAction";
import { Arrow } from "@/components/Icons";
import { IMG, PDF, LEGACY_PAGES, ROOMS, DOCS } from "@/lib/site";

export const metadata = {
  alternates: { canonical: "/banquetfacilities" },
  title: "Banquet Hall & Shower Venue",
  description: "Four banquet rooms for 35 to 500 guests in Amherst, NY. Breakfast, lunch and dinner buffets, sit-down meals, stations and cocktail parties.",
};

const SERVICE_STYLES = ["Breakfast, lunch & dinner buffets", "Full-service sit-down meals", "Station packages", "Cocktail parties"];

export default function Banquets() {
  return (
    <>
      <PageHero
        kicker="Banquets & showers"
        title="Banquets & showers"
        intro="Four banquet rooms accommodating 35 to 500 guests. Whatever the size of your group, Classics V has the right room for your special event."
        img={IMG.ballroomOpen}
        alt="Banquet room with round tables, white linens and burgundy chairs"
      >
        <a className="btn btn-primary btn-lg" href="#menus">View 2026 menus</a>
        <Link className="text-link" href="/contact">Check availability <Arrow /></Link>
      </PageHero>

      <Chapter num="01" id="service" title="Every style of service" text="Our experience in event planning and hospitality helps make your event a success, with menus for every time of day.">
        <ul className="ticks two">
          {SERVICE_STYLES.map((s) => <li key={s}>{s}</li>)}
        </ul>
        <ul className="spec">
          {ROOMS.map((r) => (
            <li key={r.id}>
              <Link className="spec-row" href={`/about#${r.id}`}>
                <span className="frame"><Photo src={r.img} alt={r.alt} sizes="(min-width: 760px) 220px, 110px" widths={[300, 500]} /></span>
                <span className="spec-name">{r.name}</span>
                <span className="spec-cap"><strong>{r.capacity.replace(" guests", "")}</strong><span>guests</span></span>
              </Link>
            </li>
          ))}
        </ul>
      </Chapter>

      <Chapter num="02" id="showers" band title="The perfect baby or bridal shower venue" text="Our Adam David and Anthony Daniel rooms are sized for groups of 35 to 80.">
        <div className="pair">
          <div className="frame"><Photo src={IMG.anthonyDaniel} alt="Anthony Daniel Room set with round tables, white linens and blue sashes" sizes="(min-width: 900px) 30vw, 100vw" /></div>
          <div className="frame"><Photo src={IMG.adamDavid} alt="Adam David Room with round tables, white linens and burgundy chairs" sizes="(min-width: 900px) 30vw, 100vw" /></div>
        </div>
        <p className="lead">
          Expanding a family is an exciting time, and planning a shower can bring an overwhelming amount of stress. We have the
          experience of hosting showers and can help you every step of the way, so your shower is a memorable and fun occasion
          for you and your family.
        </p>
        <Link className="btn btn-primary" href="/contact">Start planning your shower <Arrow /></Link>
      </Chapter>

      <Chapter num="03" id="menus" title="Banquet & shower menus" text="Great food! Since 1985. Select a cover to open the full menu with pricing.">
        <PdfCards docs={[DOCS.lunch, DOCS.dinner, DOCS.prom, DOCS.funeral, DOCS.terms]} />
        <h3 style={{ marginTop: 56 }}>More ways to customize</h3>
        <LinkTiles
          items={[
            { title: "Youth organizations", note: "Menu options for youth groups", href: LEGACY_PAGES.youth, img: IMG.anthonyDaniel, external: true },
            { title: "Banquet enhancements", note: "Upgrades for your event", href: LEGACY_PAGES.enhancements, img: IMG.lampCenterpiece, external: true },
            { title: "Coffee & desserts", note: "Dessert and coffee stations", href: LEGACY_PAGES.desserts, img: IMG.christinaMaria, external: true },
          ]}
        />
      </Chapter>

      <CallToAction img={IMG.holiday} alt="Holiday party with red and green uplighting" />
    </>
  );
}
