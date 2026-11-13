import Link from "next/link";
import Photo from "@/components/Photo";
import Video from "@/components/Video";
import DownloadList from "@/components/DownloadList";
import CallToAction from "@/components/CallToAction";
import { Phone, Arrow, Users } from "@/components/Icons";
import { BUSINESS, IMG, ROOMS, SERVICES, PDF, VIDEOS, upcomingEvents } from "@/lib/site";

// Rebuild daily so past events drop off on their own.
export const revalidate = 86400;

export default function Home() {
  const events = upcomingEvents();
  return (
    <>
      <section className="hero">
        <Photo src={IMG.mainHallBlue} alt="The remodeled main ballroom at Classics V set for a reception, with white chair covers, navy sashes and uplighting" className="hero-img" priority sizes="100vw" widths={[750, 1000, 1500, 2500]} />
        <div className="hero-shade" aria-hidden="true" />
        <div className="container hero-inner">
          <h1>Wedding venue, banquet hall &amp; conference center in Amherst, NY</h1>
          <p className="hero-lead">Family owned and operated since {BUSINESS.since}. Great food, customizable packages and personal planning help for weddings, showers, meetings and every celebration in between.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary btn-lg" href="/contact">Book a private tour</Link>
            <a className="btn btn-outline-light btn-lg" href={BUSINESS.phoneHref}><Phone /> {BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="facts" aria-label="At a glance">
        <ul className="container facts-list">
          <li><strong>4</strong><span>banquet rooms</span></li>
          <li><strong>35 to 500</strong><span>guests</span></li>
          <li><strong>Since 1985</strong><span>family owned</span></li>
          <li><strong>Remodeled</strong><span>main hall, 2020</span></li>
        </ul>
      </section>

      <section className="section">
        <div className="container split">
          <div className="prose">
            <h2>Unforgettable events in the Buffalo area for over 35 years</h2>
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
                  <p>{s.line}</p>
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
                <Photo src={r.img} alt={r.alt} className="card-img" sizes="(min-width: 1000px) 20vw, (min-width: 640px) 45vw, 100vw" widths={[500, 750, 1000]} />
                <div className="card-body">
                  <h3><Link href={`/about#${r.id}`} className="stretched">{r.name}</Link></h3>
                  <p className="capacity"><Users /> {r.capacity}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {events.length > 0 && (
        <section className="section section-tint" aria-labelledby="events-title">
          <div className="container">
            <div className="section-head">
              <h2 id="events-title">Upcoming public events</h2>
              <p>Tickets are sold through each event&rsquo;s ticketing page.</p>
            </div>
            <ul className="events">
              {events.map((e) => (
                <li key={e.href} className="event">
                  <img src={e.img + "?format=500w"} alt={e.alt} width="311" height="576" loading="lazy" className="event-img" />
                  <div className="event-body">
                    <p className="event-date"><time dateTime={e.date}>{e.when}</time></p>
                    <h3>{e.title}</h3>
                    {e.note && <p>{e.note}</p>}
                    <a className="btn btn-primary" href={e.href}>Get tickets<span className="sr-only"> for {e.title}</span></a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="section" aria-labelledby="menus-title">
        <div className="container split split-top">
          <div className="section-head">
            <h2 id="menus-title">2026 banquet menus</h2>
            <p>Full menus with pricing. Breakfast, brunch, lunch, dinner, stations, hors d&rsquo;oeuvres and cocktail packages.</p>
          </div>
          <DownloadList
            items={[
              { label: "2026 Dinner Banquet Menu with pricing", href: PDF.dinnerHome },
              { label: "2026 Breakfast & Lunch Banquet Menu with pricing", href: PDF.lunchHome },
              { label: "Funeral Gatherings menu", href: PDF.funeral },
            ]}
          />
        </div>
      </section>

      <CallToAction title="Let Classics V host your event" text="We're still offering private tours. Call to check availability or to schedule a visit." />
    </>
  );
}
