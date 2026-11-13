import PageHero from "@/components/PageHero";
import DownloadList from "@/components/DownloadList";
import CallToAction from "@/components/CallToAction";
import { Check } from "@/components/Icons";
import { BUSINESS, IMG, PDF } from "@/lib/site";
import Link from "next/link";

export const metadata = {
  title: "Meeting & Conference Venue",
  description: "Meeting, seminar and trade show space in Amherst, NY with great food, audio visual equipment, flexible layouts and breakout rooms.",
};

const LAYOUTS = [
  { title: "Traditional business meeting", text: "Whether it's an end-of-year conference with your whole staff or a mid-year meeting on progress and goals, we'll set up the room in a way that works for you." },
  { title: "Theater", text: "Playing a video or performance for your team? We'll create the layout you need and hook up any necessary electronics." },
  { title: "Trade show", text: "We'll provide the space and help you create a layout that flows." },
];

const INCLUDED = ["Breakfast & brunch buffets", "Lunch buffets", "Continental breakfast", "Seminar packages", "Audio & visual rentals"];

export default function Meetings() {
  return (
    <>
      <PageHero
        title="Meetings & seminars"
        intro="Meetings with your company in mind. Great food, state-of-the-art audio visuals and creative layouts designed to get your message across."
        img={IMG.christinaWide}
        alt="Large room with round tables and white linens ready for a seminar"
      >
        <a className="btn btn-primary btn-lg" href={PDF.lunch}>Seminar & meetings menu</a>
        <Link className="btn btn-outline-light btn-lg" href="/contact">Plan your meeting</Link>
      </PageHero>

      <section className="section">
        <div className="container split split-top">
          <div className="prose">
            <h2>Your next business forum, handled</h2>
            <p>
              We offer traditional, classroom, theater, trade show and many more styles of setup. Whatever your needs, we&rsquo;ll
              work with you every step of the way. In most cases we can also provide breakout rooms and flexible setup times.
            </p>
            <p>
              Our Amherst location means your attendees&rsquo; stay doesn&rsquo;t have to end at the meeting: the surrounding area
              offers a great variety of activities, architecture and arts.
            </p>
          </div>
          <ul className="card-stack">
            {LAYOUTS.map((l) => (
              <li key={l.title} className="info-card">
                <h3>{l.title}</h3>
                <p>{l.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="menu-title">
        <div className="container split split-top">
          <div className="section-head">
            <h2 id="menu-title">Conference menu options</h2>
            <p>Download the full seminar and meetings menu with pricing.</p>
            <ul className="checklist checklist-compact">
              {INCLUDED.map((i) => <li key={i}><Check />{i}</li>)}
            </ul>
          </div>
          <DownloadList items={[{ label: "Seminar & Meetings Menu with pricing", href: PDF.lunch }]} />
        </div>
      </section>

      <CallToAction title="Planning a meeting or seminar?" text={`Tell us about your group and we'll suggest a room and layout. Call ${BUSINESS.phone} or send a message.`} />
    </>
  );
}
