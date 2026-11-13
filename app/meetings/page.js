import PageHero from "@/components/PageHero";
import DownloadList from "@/components/DownloadList";
import CallToAction from "@/components/CallToAction";
import { Check } from "@/components/Icons";
import { BUSINESS, IMG, PDF } from "@/lib/site";
import Link from "next/link";
import { TraditionalPlan, TheaterPlan, TradeShowPlan } from "@/components/LayoutPlans";

export const metadata = {
  title: "Meeting & Conference Venue",
  description: "Meeting, seminar and trade show space in Amherst, NY with great food, audio visual equipment, flexible layouts and breakout rooms.",
};

const LAYOUTS = [
  { Plan: TraditionalPlan, best: "Conferences, staff and progress meetings", title: "Traditional business meeting", text: "Whether it's an end-of-year conference with your whole staff or a mid-year meeting on progress and goals, we'll set up the room in a way that works for you." },
  { Plan: TheaterPlan, best: "Videos, presentations and performances", title: "Theater", text: "Playing a video or performance for your team? We'll create the layout you need and hook up any necessary electronics." },
  { Plan: TradeShowPlan, best: "Exhibitors, vendors and booths", title: "Trade show", text: "We'll provide the space and help you create a layout that flows." },
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
        <div className="container">
          <div className="split split-top intro-split">
            <div className="prose">
              <h2>Your next business forum, handled</h2>
              <p>
                We offer traditional, classroom, theater, trade show and many more styles of setup. Whatever your needs, we&rsquo;ll
                work with you every step of the way. In most cases we can also provide breakout rooms and flexible setup times.
              </p>
            </div>
            <p className="prose aside-text">
              Our Amherst location means your attendees&rsquo; stay doesn&rsquo;t have to end at the meeting: the surrounding area
              offers a great variety of activities, architecture and arts.
            </p>
          </div>

          <h3 className="layouts-title">Choose a layout</h3>
          <ul className="layouts">
            {LAYOUTS.map(({ Plan, title, text, best }) => (
              <li key={title} className="layout-card">
                <div className="layout-plan"><Plan /></div>
                <div className="layout-body">
                  <h4>{title}</h4>
                  <p>{text}</p>
                  <p className="layout-best"><span>Best for</span> {best}</p>
                </div>
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
