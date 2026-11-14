import Link from "next/link";
import Photo from "@/components/Photo";
import Video from "@/components/Video";
import CallToAction from "@/components/CallToAction";
import HeroSlides from "@/components/HeroSlides";
import Events from "@/components/Events";
import Facts from "@/components/Facts";
import MenuShowcase from "@/components/MenuShowcase";
import RevealList from "@/components/RevealList";
import RoomStrip from "@/components/RoomStrip";
import { Phone, Arrow } from "@/components/Icons";
import { BUSINESS, IMG, ROOMS, SERVICES, VIDEOS, upcomingEvents } from "@/lib/site";

export const metadata = { alternates: { canonical: "/" } };

const HERO_SLIDES = [
  { src: IMG.mainHallBlue, label: "Main ballroom", alt: "The remodeled main ballroom set for a reception, with white chair covers, navy sashes and uplighting" },
  { src: IMG.exteriorColor, label: "Outside view", alt: "Outside view of Classics V, with the Terrace Room entrance and green awning" },
  { src: IMG.redWedding, label: "Wedding reception", alt: "Wedding reception in the main hall with red uplighting and a long head table" },
  { src: IMG.terrace, label: "Terrace Room", alt: "The Terrace Room set for a wedding with burgundy linens and white chair covers" },
  { src: IMG.christinaMaria, label: "Christina Maria Room", alt: "Christina Maria Room with candlelit head tables" },
];

const QUICK = [
  { href: "/weddings", label: "A wedding" },
  { href: "/banquetfacilities", label: "A shower or party" },
  { href: "/meetings", label: "A meeting" },
  { href: "/funeral-gatherings", label: "A funeral gathering" },
  { href: "/drop-off", label: "Catering" },
];

const RIBBON = ["Weddings", "Showers", "Anniversaries", "Reunions", "Birthdays", "Business meetings", "Holiday parties"];

const WALL = [
  { src: IMG.redWedding, alt: "Wedding reception with red uplighting in the main hall" },
  { src: IMG.holiday, alt: "Holiday party with red and green uplighting" },
  { src: IMG.ceremony, alt: "Ceremony set up with white chair covers" },
  { src: IMG.sweetheart, alt: "Sweetheart head table with floral arch" },
  { src: IMG.christinaWide, alt: "Large room with round tables and white linens" },
];

// Rebuild hourly so past events drop off on their own soon after the day ends.
export const revalidate = 3600;

export default function Home() {
  const events = upcomingEvents();
  return (
    <>
      <section className="cine">
        <HeroSlides slides={HERO_SLIDES} />
        <div className="cine-shade" aria-hidden="true" />
        <div className="wrap cine-inner" data-enter>
          <p className="kicker">{BUSINESS.tagline}</p>
          <h1>Wedding venue, banquet hall <em>&amp;</em> conference center</h1>
          <p className="lead">Family owned and operated since {BUSINESS.since}. Great food, customizable packages and personal planning help for weddings, showers, meetings and every celebration in between.</p>
          <div className="actions">
            <Link className="btn btn-primary btn-lg" href="/contact">Book a private tour <Arrow /></Link>
            <a className="phone-link" href={BUSINESS.phoneHref}><Phone /> {BUSINESS.phone}</a>
          </div>
          <div className="cine-foot">
            <nav className="cine-quick" aria-label="What are you planning?">
              <strong>What are you planning?</strong>
              {QUICK.map((q) => <Link key={q.href} className="text-link" href={q.href}>{q.label}</Link>)}
            </nav>
          </div>
        </div>
      </section>

      <section className="ribbon" aria-label="Occasions">
        <ul className="wrap">
          {RIBBON.map((r) => <li key={r}>{r}</li>)}
        </ul>
      </section>

      <Facts />

      <section className="section band" aria-labelledby="services-title">
        <div className="wrap">
          <div className="head">
            <div>
              <p className="kicker">What we host</p>
              <h2 id="services-title">Events <em>we host</em></h2>
            </div>
            <p className="lead">Whatever the size of your group, there&rsquo;s a room and a menu to fit it.</p>
          </div>
          <RevealList items={SERVICES} />
        </div>
      </section>

      <section className="section" aria-labelledby="story-title">
        <div className="wrap story">
          <div className="story-text">
            <p className="kicker">Banquets with a classic touch</p>
            <h2 id="story-title">Unforgettable events in the Buffalo area for over <em>35 years</em></h2>
            <p>
              Classics V is a family-owned and operated event venue in Amherst, NY. From mouth-watering food and customizable
              packages to event planning services that make your event stand out, we help make wedding receptions and special
              events of all kinds unforgettable.
            </p>
            <p>
              We also host reunions, anniversaries, birthdays, showers, business meetings and more, and our calendar stays full of
              public events, from Murder Mystery Dinners to Easter and Mother&rsquo;s Day brunches.
            </p>
            <p className="story-sign">{BUSINESS.family}</p>
          </div>
          <div>
            <Video {...VIDEOS.transformation} />
          </div>
        </div>
      </section>

      <section className="section band" aria-labelledby="rooms-title">
        <RoomStrip
          rooms={ROOMS}
          heading={
            <div>
              <p className="kicker">Four rooms</p>
              <h2 id="rooms-title">One for every <em>size of event</em></h2>
              <p className="lead" style={{ marginTop: 14 }}>Our main ballroom opens up for up to 500 guests, and the private Terrace Room has its own patio.</p>
              <p style={{ marginTop: 10 }}><Link className="text-link" href="/about">Room details <Arrow /></Link></p>
            </div>
          }
        />
      </section>

      <section className="section" aria-labelledby="inside-title">
        <div className="wrap">
          <div className="head-row">
            <div>
              <p className="kicker">Photos</p>
              <h2 id="inside-title">Take a look <em>inside</em></h2>
            </div>
            <Link className="text-link" href="/classicsfivephotos">See all photos <Arrow /></Link>
          </div>
          <ul className="wall">
            {WALL.map((m, i) => (
              <li key={m.src}>
                <Link href="/classicsfivephotos" className="frame" style={{ display: "block", height: "100%" }} aria-label={`${m.alt}. See all photos`}>
                  <Photo src={m.src} alt="" sizes={i === 4 ? "100vw" : "(min-width: 760px) 40vw, 50vw"} widths={[500, 750, 1000, 1500]} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="events" className="section band" aria-labelledby="events-title">
        <div className="wrap">
          <div className="head">
            <div>
              <p className="kicker">On the calendar</p>
              <h2 id="events-title">Upcoming <em>public events</em></h2>
            </div>
            <p className="lead">Dances, live music and seasonal parties. Tickets are sold through each event&rsquo;s ticketing page.</p>
          </div>
          <Events events={events} />
        </div>
      </section>

      <MenuShowcase />

      <section className="section band" aria-labelledby="steps-title">
        <div className="wrap">
          <div className="head">
            <div>
              <p className="kicker">How it works</p>
              <h2 id="steps-title">Planning with us <em>is simple</em></h2>
            </div>
            <p className="lead">Three steps from first call to the big day.</p>
          </div>
          <ol className="steps">
            <li>
              <span className="step-num" aria-hidden="true">i.</span>
              <h3>Call or send a message</h3>
              <p>Tell our office about your date and guest count. We&rsquo;ll check availability.</p>
            </li>
            <li>
              <span className="step-num" aria-hidden="true">ii.</span>
              <h3>Take a private tour</h3>
              <p>See the rooms, ask questions and hear ideas for your event.</p>
            </li>
            <li>
              <span className="step-num" aria-hidden="true">iii.</span>
              <h3>Plan the details together</h3>
              <p>Choose your menu and setup. We work with you every step of the way.</p>
            </li>
          </ol>
          <p className="steps-reviews">
            Curious what couples say? <a href={BUSINESS.weddingWire}>Read our reviews on WeddingWire</a>
          </p>
        </div>
      </section>

      <section id="visit" className="section" aria-labelledby="visit-title">
        <div className="wrap visit-grid">
          <div>
            <p className="kicker">Visit us</p>
            <h2 id="visit-title">Find us in Amherst</h2>
            <p className="type-moment"><a href={BUSINESS.mapsUrl}>{BUSINESS.street}, {BUSINESS.city}</a></p>
            <dl className="visit-facts">
              <div><dt>Call</dt><dd><a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></dd></div>
              <div><dt>Email</dt><dd><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></dd></div>
              <div><dt>Office</dt><dd>Evenings and weekends by appointment only.</dd></div>
              <div><dt>Now hiring</dt><dd><Link href="/careers">Servers and dishwashers</Link></dd></div>
            </dl>
          </div>
          <div className="frame visit-photo"><Photo src={IMG.exterior} alt="The Classics V building entrance with its columned archway" sizes="(min-width: 900px) 40vw, 100vw" widths={[750, 1000, 1500]} /></div>
        </div>
      </section>

      <CallToAction title="Let Classics V host your event" text="We're still offering private tours. Call to check availability or to schedule a visit." img={IMG.christinaMaria} />
    </>
  );
}
