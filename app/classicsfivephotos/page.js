import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import CallToAction from "@/components/CallToAction";
import { GALLERY } from "@/lib/gallery";
import { IMG } from "@/lib/site";

export const metadata = {
  title: "Photos & Virtual Tours",
  description: "Photos of the remodeled main ballroom, the Christina Maria, Anthony Daniel and Adam David rooms, and the Terrace Room.",
};

// Extras listed with prices on the current Photos page. VERIFY prices are current.
const EXTRAS = [
  { title: "Photo booth", text: "4-hour photo booth with attendant, fun props, two photo strips per session, a scrapbook and digital copies of all photos.", price: "$450" },
  { title: "Silver sequin ceremony backdrop", text: "Limited availability.", price: "$125" },
  { title: "Mirror & votive centerpiece rental", text: "Shown with our house lamp centerpiece.", price: "$4 per table" },
];

export default function Photos() {
  return (
    <>
      <PageHero
        title="See our remodel"
        intro="Every room, set for real weddings, showers and parties. Select any photo to view it larger."
        img={IMG.holiday}
        alt="Main ballroom with red and green holiday uplighting"
        areas={false}
      />
      <section className="section">
        <div className="container">
          <Gallery groups={GALLERY} />
        </div>
      </section>
      <section className="section section-tint" aria-labelledby="extras-title">
        <div className="container">
          <div className="section-head">
            <h2 id="extras-title">Popular extras</h2>
            <p>Add-ons for your reception.</p>
          </div>
          <ul className="card-grid extras">
            {EXTRAS.map((e) => (
              <li key={e.title} className="info-card">
                <h3>{e.title}</h3>
                <p>{e.text}</p>
                <p className="price">{e.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
