import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import Video from "@/components/Video";
import Photo from "@/components/Photo";
import Chapter from "@/components/Chapter";
import { Arrow } from "@/components/Icons";
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
        kicker="Photos & virtual tours"
        title="See our remodel"
        intro={`${count} photos of every room, set for real weddings, showers and parties. Pick a room, then select any photo to view it larger.`}
        img={IMG.holiday}
        alt="Main ballroom with red and green holiday uplighting"
        areas={false}
      >
        <a className="btn btn-primary btn-lg" href="#gallery-top">Browse photos</a>
        <a className="text-link" href="#tours-title">Watch a video tour <Arrow /></a>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <Gallery groups={GALLERY} />
        </div>
      </section>

      <Chapter num="02" id="tours" band title="Virtual tours" text="Walk through with us, and see the rooms the way your guests will.">
        <div className="video-grid video-grid-2">
          <Video {...VIDEOS.about} />
          <Video {...VIDEOS.transformation} />
        </div>
      </Chapter>

      <Chapter num="03" id="extras" title="Popular extras" text="The finishing touches: add-ons for your reception.">
        <ul className="extras">
          {EXTRAS.map((e) => (
            <li key={e.title} className="extra">
              <div className="frame"><Photo src={e.img} alt={e.alt} sizes="(min-width: 900px) 20vw, 100vw" widths={[500, 750, 1000]} /></div>
              <p className="price">{e.price}</p>
              <h3>{e.title}</h3>
              <p>{e.text}</p>
            </li>
          ))}
        </ul>
      </Chapter>
      <CallToAction />
    </>
  );
}
