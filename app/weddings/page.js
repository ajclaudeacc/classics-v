import Link from "next/link";
import PageHero from "@/components/PageHero";
import Video from "@/components/Video";
import PdfCards from "@/components/PdfCards";
import LinkTiles from "@/components/LinkTiles";
import Chapter from "@/components/Chapter";
import InquiryForm from "@/components/InquiryForm";
import { Phone, Arrow } from "@/components/Icons";
import { BUSINESS, IMG, DOCS, PDF, LEGACY_PAGES, VIDEOS } from "@/lib/site";

export const metadata = {
  alternates: { canonical: "/weddings" },
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
        kicker="Weddings"
        title="Your wedding reception at Classics V"
        intro="Over 35 years of experience in event planning and hospitality, combined with great food and professional service. Our packages include everything you're looking for, with all styles of dinner service and full beverage packages, customized to you."
        img={IMG.redWedding}
        alt="Wedding reception in the main ballroom with a long head table, white linens and red napkins"
      >
        <a className="btn btn-primary btn-lg" href="#inquiry">Request wedding information</a>
        <a className="phone-link" href={BUSINESS.phoneHref}><Phone /> Schedule a tour</a>
      </PageHero>

      <Chapter
        num="01"
        id="why"
        title="Why couples choose Classics V"
        text="Let us do the work for you. On a venue tour you can ask questions, hear ideas and decide if our space is right for your reception."
      >
        <ul className="ticks two">
          {REASONS.map((r) => <li key={r}>{r}</li>)}
        </ul>
        <p className="lead">Not ready to make anything official? Ask about our annual wedding venue and reception showcase.</p>
      </Chapter>

      <Chapter num="02" id="packages" band title="Wedding packages" text="Select a cover to open the full package with pricing. Ask about our Friday, Sunday and off-season discounts.">
        <PdfCards docs={[DOCS.weddingPackages, DOCS.weddingStations, DOCS.brunchReception, DOCS.weddingInfo, DOCS.weddingHandbook]} />
        <h3 style={{ marginTop: 56 }}>More for your wedding weekend</h3>
        <PdfCards
          size="sm"
          docs={[
            { ...DOCS.lunch, href: PDF.lunchHome, label: "Bridal showers", note: "From our breakfast & lunch banquet menu" },
            { ...DOCS.dinner, label: "Rehearsal dinners", note: "From our dinner banquet menu" },
            { ...DOCS.lunch, label: "Morning-after breakfast", note: "From our breakfast & lunch banquet menu" },
          ]}
        />
      </Chapter>

      <Chapter num="03" id="videos" title="See real receptions" text="Videos from weddings in our Terrace Room and Main Hall.">
        <div className="video-grid video-grid-2">
          <Video {...VIDEOS.terraceWedding} />
          <Video {...VIDEOS.mainHallJune} />
          <Video {...VIDEOS.mainHallAugust} />
        </div>
        <a className="text-link" href="https://www.youtube.com/channel/UCiuh8LfzipGZ9-53c0SyKeA">Our YouTube channel <Arrow /></a>
      </Chapter>

      <Chapter num="04" id="planning" band title="Planning resources" text="Including our preferred vendors, and a brand-new Holiday Inn Express right across the street.">
        <LinkTiles
          items={[
            { title: "Virtual tours & photos", note: "Photos of every room", href: "/classicsfivephotos", img: IMG.mainHallBlue },
            { title: "Helpful wedding planning tips", note: "From our planning team", href: LEGACY_PAGES.tips, img: IMG.ceremony, external: true },
            { title: "Our preferred vendors", note: "Friends of Classics V", href: LEGACY_PAGES.vendors, img: IMG.centerpieceUpgrade, external: true },
            { title: "Wedding reception blog", note: "Ideas and real receptions", href: LEGACY_PAGES.blog, img: IMG.sweetheart, external: true },
            { title: "Read our reviews", note: "On WeddingWire", href: BUSINESS.weddingWire, img: IMG.redWedding, external: true, site: "WeddingWire" },
          ]}
        />
      </Chapter>

      <Chapter
        num="05"
        id="inquiry"
        title="Interested in our wedding venue?"
        text="Our team knows what kind of setup will work for you. From beginning to end, we'll work with you to make your day a happy occasion."
      >
        <p className="prose">
          Fill out the form or call <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a> to get started.{" "}
          <Link href="/about">Compare our rooms</Link>
        </p>
        <InquiryForm variant="wedding" />
      </Chapter>
    </>
  );
}
