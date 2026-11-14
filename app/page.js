import Link from "next/link";
import Photo from "@/components/Photo";
import Video from "@/components/Video";
import CallToAction from "@/components/CallToAction";
import HeroSlides from "@/components/HeroSlides";
import Events from "@/components/Events";
import Facts from "@/components/Facts";
import MenuShowcase from "@/components/MenuShowcase";
import Ornament from "@/components/Ornament";
import { Phone, Arrow, Users } from "@/components/Icons";
import { BUSINESS, IMG, ROOMS, SERVICES, VIDEOS, upcomingEvents } from "@/lib/site";

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

const MOSAIC = [
  { src: IMG.redWedding, alt: "Wedding reception with red uplighting in the main hall" },
  { src: IMG.terrace, alt: "Terrace Room set for a wedding" },
  { src: IMG.holiday, alt: "Holiday party with red and green uplighting" },
  { src: IMG.christinaMaria, alt: "Christina Maria Room with candlelit head tables" },
  { src: IMG.anthonyDaniel, alt: "Anthony Daniel Room set for a shower" },
];

export const metadata = { alternates: { canonical: "/" } };

// Rebuild daily so past events drop off on their own.
export const revalidate = 86400;

export default function Home() {
  const events = upcomingEvents();
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <p className="script hero-script">{BUSINESS.tagline}</p>
          <h1>Wedding venue, banquet hall &amp; conference center</h1>
          <p className="hero-lead">Family owned and operated since {BUSINESS.since}. Great food, customizable packages and personal planning help for weddings, showers, meetings and every celebration in between.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary btn-lg" href="/contact">Book a private tour</Link>
            <a className="btn btn-outline-light btn-lg" href={BUSINESS.phoneHref}><Phone /> {BUSINESS.phone}</a>
          </div>
          <nav className="hero-quick" aria-label="What are you planning?">
            <p>What are you planning?</p>
            <ul>
              {QUICK.map((q) => <li key={q.href}><Link href={q.href}>{q.label}</Link></li>)}
            </ul>
          </nav>
        </div>
        <HeroSlides slides={HERO_SLIDES} />
        <div className="hero-shade" aria-hidden="true" />
      </section>

      <Facts />

      <section className="section">
        <div className="container split">
          <div className="prose">
            <p className="script">Banquets with a classic touch</p>
            <h2>Unforgettable events in the Buffalo area for over 35 years</h2>
            <Ornament className="ornament-left" />
            <p>
              Classics V is a family-owned and operated event venue in Amherst, NY. From mouth-watering food and customizable
              packages to event planning services that make your event stand out, we help make wedding receptions and special
              events of all kinds unforgettable.
            </p>
            <p>
              We also host reunions, anniversaries, birthdays, showers, business meetings and more, and our calendar stays full of
              public events, from Murder Mystery Dinners to Easter and Mother&rsquo;s Day brunches.
            </p>
            <p className="prose-cta">
              <Link className="text-link" href="/about">See our rooms <Arrow /></Link>
            </p>
          </div>
          <div>
            <h3 className="video-heading">See our complete transformation</h3>
            <Video {...VIDEOS.transformation} />
          </div>
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="services-title">
        <div className="container">
          <div className="section-head">
            <h2 id="services-title">Events we host</h2>
            <p>Whatever the size of your group, there&rsquo;s a room and a menu to fit it.</p>
          </div>
          <ul className="card-grid services">
            {SERVICES.map((s) => (
              <li key={s.href} className="card card-link">
                <Photo src={s.img} alt={s.alt} className="card-img" sizes="(min-width: 1000px) 20vw, (min-width: 640px) 45vw, 100vw" widths={[500, 750, 1000]} />
                <div className="card-body">
                  <h3><Link href={s.href} className="stretched">{s.title}</Link></h3>
                  <p className="card-script">{s.line}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="rooms-title">
        <div className="container">
          <div className="section-head section-head-row">
            <div>
              <h2 id="rooms-title">Four rooms, one for every size of event</h2>
              <p>Our main ballroom opens up for up to 500 guests, and the private Terrace Room has its own patio.</p>
            </div>
            <Link className="btn btn-secondary" href="/about">Room details</Link>
          </div>
          <ul className="card-grid rooms">
            {ROOMS.map((r) => (
              <li key={r.id} className="card card-link">
                <div className="card-media">
                  <Photo src={r.img} alt={r.alt} className="card-img" sizes="(min-width: 1000px) 20vw, (min-width: 640px) 45vw, 100vw" widths={[500, 750, 1000]} />
                  <span className="card-badge"><Users /> {r.capacity.replace(" guests", "")}</span>
                </div>
                <div className="card-body">
                  <h3><Link href={`/about#${r.id}`} className="stretched">{r.name}</Link></h3>
                  <p>{r.sub || "Room details"}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="inside-title">
        <div className="container">
          <div className="section-head section-head-row">
            <div>
              <h2 id="inside-title">Take a look inside</h2>
              <p>Real events in our ballrooms, from intimate showers to receptions for 300.</p>
            </div>
            <Link className="btn btn-secondary" href="/classicsfivephotos">See all photos</Link>
          </div>
          <ul className="mosaic">
            {MOSAIC.map((m, i) => (
              <li key={m.src} className={`mosaic-${i + 1}`}>
                <Link href="/classicsfivephotos" aria-label={`${m.alt}. See all photos`}>
                  <Photo src={m.src} alt="" className="mosaic-img" sizes={i === 0 ? "(min-width: 900px) 50vw, 100vw" : "(min-width: 900px) 25vw, 50vw"} widths={[500, 750, 1000, 1500]} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {events.length > 0 && (
        <section id="events" className="section events-section" aria-labelledby="events-title">
          <div className="container">
            <div className="section-head">
              <h2 id="events-title">Upcoming public events</h2>
              <p>Dances, live music and seasonal parties. Tickets are sold through each event&rsquo;s ticketing page.</p>
            </div>
            <Events events={events} />
          </div>
        </section>
      )}

      <MenuShowcase />

      <section className="section section-tint" aria-labelledby="steps-title">
        <div className="container">
          <div className="section-head">
            <h2 id="steps-title">Planning with us is simple</h2>
            <p>Three steps from first call to the big day.</p>
          </div>
          <ol className="steps">
            <li>
              <span className="step-num" aria-hidden="true">1</span>
              <h3>Call or send a message</h3>
              <p>Tell our office about your date and guest count. We&rsquo;ll check availability.</p>
            </li>
            <li>
              <span className="step-num" aria-hidden="true">2</span>
              <h3>Take a private tour</h3>
              <p>See the rooms, ask questions and hear ideas for your event.</p>
            </li>
            <li>
              <span className="step-num" aria-hidden="true">3</span>
              <h3>Plan the details together</h3>
              <p>Choose your menu and setup. We work with you every step of the way.</p>
            </li>
          </ol>
          <p className="steps-reviews">
            Curious what couples say? <a href={BUSINESS.weddingWire}>Read our reviews on WeddingWire</a>
          </p>
        </div>
      </section>
      <aside className="hiring-strip" aria-label="Jobs">
        <div className="container">
          <p><strong>Now hiring:</strong> servers and dishwashers</p>
          <Link href="/careers">How to apply <Arrow /></Link>
        </div>
      </aside>

      <CallToAction title="Let Classics V host your event" text="We're still offering private tours. Call to check availability or to schedule a visit." />
    </>
  );
}
