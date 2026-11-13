import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import Video from "@/components/Video";
import Photo from "@/components/Photo";
import Ornament from "@/components/Ornament";
import CallToAction from "@/components/CallToAction";
import { GALLERY } from "@/lib/gallery";
import { IMG, VIDEOS } from "@/lib/site";

export const metadata = {
  alternates: { canonical: "/classicsfivephotos" },
  title: "Photos & Virtual Tours",
  description: "Photos of the remodeled main ballroom, the Christina Maria, Anthony Daniel and Adam David rooms, and the Terrace Room.",
};

// Extras listed with prices on the current Photos page. VERIFY prices are current.
const EXTRAS = [
  { title: "Photo booth", text: "4-hour photo booth with attendant, fun props, two photo strips per session, a scrapbook and digital copies of all photos.", price: "$450", img: IMG.photoBooth, alt: "The Classics V photo booth" },
  { title: "Silver sequin ceremony backdrop", text: "Limited availability.", price: "$125", img: IMG.backdrop, alt: "Silver sequin ceremony backdrop" },
  { title: "Mirror & votive centerpiece rental", text: "Shown with our house lamp centerpiece.", price: "$4 per table", img: IMG.lampCenterpiece, alt: "House lamp centerpiece on a mirror with votive candles" },
];

const count = GALLERY.reduce((n, g) => n + g.photos.length, 0);

export default function Photos() {
  return (
    <>
      <PageHero
        title="See our remodel"
        intro={`${count} photos of every room, set for real weddings, showers and parties. Pick a room, then select any photo to view it larger.`}
        img={IMG.holiday}
        alt="Main ballroom with red and green holiday uplighting"
        areas={false}
      >
        <a className="btn btn-primary btn-lg" href="#gallery-top">Browse photos</a>
        <a className="btn btn-outline-light btn-lg" href="#tours-title">Watch a video tour</a>
      </PageHero>

      <section className="section gallery-section">
        <div className="container">
          <Gallery groups={GALLERY} />
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="tours-title">
        <div className="container">
          <div className="section-head section-head-center">
            <p className="script">Walk through with us</p>
            <h2 id="tours-title">Virtual tours</h2>
            <Ornament />
            <p>See the rooms the way your guests will.</p>
          </div>
          <div className="video-grid video-grid-2">
            <Video {...VIDEOS.about} />
            <Video {...VIDEOS.transformation} />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="extras-title">
        <div className="container">
          <div className="section-head section-head-center">
            <p className="script">The finishing touches</p>
            <h2 id="extras-title">Popular extras</h2>
            <Ornament />
            <p>Add-ons for your reception.</p>
          </div>
          <ul className="card-grid extras">
            {EXTRAS.map((e) => (
              <li key={e.title} className="card extra-card">
                <div className="card-media">
                  <Photo src={e.img} alt={e.alt} className="card-img" sizes="(min-width: 1000px) 33vw, 100vw" widths={[500, 750, 1000]} />
                  <span className="price-tag">{e.price}</span>
                </div>
                <div className="card-body">
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
