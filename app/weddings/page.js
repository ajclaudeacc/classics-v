import Link from "next/link";
import PageHero from "@/components/PageHero";
import Video from "@/components/Video";
import PdfCards from "@/components/PdfCards";
import LinkTiles from "@/components/LinkTiles";
import Ornament from "@/components/Ornament";
import InquiryForm from "@/components/InquiryForm";
import { Check, Phone } from "@/components/Icons";
import { BUSINESS, IMG, DOCS, PDF, LEGACY_PAGES, VIDEOS } from "@/lib/site";

export const metadata = {
  title: "Wedding Venue in Amherst, NY",
  description: "Customizable wedding packages with no room fee and no cake cutting fee, personal planning and day-of coordination. Family owned since 1985.",
};

const REASONS = [
  "Family owned and operated since 1985",
  "Professional staff with over 40 years of combined experience working for you",
  "15 to 20 minutes from many areas of Western New York, with ample, easy parking on site",
  "Great food and fair pricing",
  "Customizable wedding packages that include everything you need",
  "No room fee and no cake cutting fee",
  "Unlimited personal planning help to create your vision of an ideal reception",
  "Day-of on-site coordination",
  "Head table drink service throughout dinner",
];

export default function Weddings() {
  return (
    <>
      <PageHero
        title="Your wedding reception at Classics V"
        intro="Over 35 years of experience in event planning and hospitality, combined with great food and professional service. Our packages include everything you're looking for, with all styles of dinner service and full beverage packages, customized to you."
        img={IMG.redWedding}
        alt="Wedding reception in the main ballroom with a long head table, white linens and red napkins"
      >
        <a className="btn btn-primary btn-lg" href="#inquiry">Request wedding information</a>
        <a className="btn btn-outline-light btn-lg" href={BUSINESS.phoneHref}><Phone /> Schedule a tour</a>
      </PageHero>

      <section className="section" aria-labelledby="why-title">
        <div className="container split split-top">
          <div className="section-head">
            <h2 id="why-title">Why couples choose Classics V</h2>
            <p>Let us do the work for you. On a venue tour you can ask questions, hear ideas and decide if our space is right for your reception.</p>
            <p>Not ready to make anything official? Ask about our annual wedding venue and reception showcase.</p>
          </div>
          <ul className="checklist">
            {REASONS.map((r) => <li key={r}><Check />{r}</li>)}
          </ul>
        </div>
      </section>

      <section className="section section-tint docs-section" aria-labelledby="packages-title">
        <div className="container">
          <div className="section-head section-head-center">
            <p className="script">Everything you need, in one place</p>
            <h2 id="packages-title">Wedding packages</h2>
            <Ornament />
            <p>Select a cover to open the full package with pricing. Ask about our Friday, Sunday and off-season discounts.</p>
          </div>
          <PdfCards docs={[DOCS.weddingPackages, DOCS.weddingStations, DOCS.brunchReception, DOCS.weddingInfo, DOCS.weddingHandbook]} />

          <div className="weekend">
            <h3 className="weekend-title">More for your wedding weekend</h3>
            <PdfCards
              size="sm"
              docs={[
                { ...DOCS.lunch, href: PDF.lunchHome, label: "Bridal showers", note: "From our breakfast & lunch banquet menu" },
                { ...DOCS.dinner, label: "Rehearsal dinners", note: "From our dinner banquet menu" },
                { ...DOCS.lunch, label: "Morning-after breakfast", note: "From our breakfast & lunch banquet menu" },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="videos-title">
        <div className="container">
          <div className="section-head section-head-row">
            <div>
              <h2 id="videos-title">See real receptions</h2>
              <p>Videos from weddings in our Terrace Room and Main Hall.</p>
            </div>
            <a className="btn btn-secondary" href="https://www.youtube.com/channel/UCiuh8LfzipGZ9-53c0SyKeA">Our YouTube channel</a>
          </div>
          <div className="video-grid">
            <Video {...VIDEOS.terraceWedding} />
            <Video {...VIDEOS.mainHallJune} />
            <Video {...VIDEOS.mainHallAugust} />
          </div>
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="planning-title">
        <div className="container">
          <div className="section-head section-head-center">
            <p className="script">Plan with confidence</p>
            <h2 id="planning-title">Planning resources</h2>
            <Ornament />
            <p>Including our preferred vendors, and a brand-new Holiday Inn Express right across the street.</p>
          </div>
          <LinkTiles
            items={[
              { title: "Virtual tours & photos", note: "Photos of every room", href: "/classicsfivephotos", img: IMG.mainHallBlue },
              { title: "Helpful wedding planning tips", note: "From our planning team", href: LEGACY_PAGES.tips, img: IMG.ceremony, external: true },
              { title: "Our preferred vendors", note: "Friends of Classics V", href: LEGACY_PAGES.vendors, img: IMG.centerpieceUpgrade, external: true },
              { title: "Wedding reception blog", note: "Ideas and real receptions", href: LEGACY_PAGES.blog, img: IMG.sweetheart, external: true },
              { title: "Read our reviews", note: "On WeddingWire", href: BUSINESS.weddingWire, img: IMG.redWedding, external: true, site: "WeddingWire" },
            ]}
          />
        </div>
      </section>

      <section id="inquiry" className="section" aria-labelledby="inquiry-title">
        <div className="container split split-top">
          <div className="section-head">
            <h2 id="inquiry-title">Interested in our wedding venue?</h2>
            <p>Our team knows what kind of setup will work for you. From beginning to end, we&rsquo;ll work with you to make your day a happy occasion.</p>
            <p>Fill out the form or call <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a> to get started.</p>
            <p className="small"><Link href="/about">Compare our rooms</Link></p>
          </div>
          <InquiryForm variant="wedding" />
        </div>
      </section>
    </>
  );
}
