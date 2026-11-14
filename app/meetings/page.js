import PageHero from "@/components/PageHero";
import PdfCards from "@/components/PdfCards";
import CallToAction from "@/components/CallToAction";
import { Arrow } from "@/components/Icons";
import Chapter from "@/components/Chapter";
import { BUSINESS, IMG, PDF, DOCS } from "@/lib/site";
import Link from "next/link";
import { TraditionalPlan, TheaterPlan, TradeShowPlan } from "@/components/LayoutPlans";

export const metadata = {
  alternates: { canonical: "/meetings" },
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
        kicker="Meetings & seminars"
        title="Meetings & seminars"
        intro="Meetings with your company in mind. Great food, state-of-the-art audio visuals and creative layouts designed to get your message across."
        img={IMG.christinaWide}
        alt="Large room with round tables and white linens ready for a seminar"
      >
        <a className="btn btn-primary btn-lg" href="#menu">Seminar & meetings menu</a>
        <Link className="text-link" href="/contact">Plan your meeting <Arrow /></Link>
      </PageHero>

      <Chapter num="01" id="forum" title="Your next business forum, handled">
        <p className="lead">
          We offer traditional, classroom, theater, trade show and many more styles of setup. Whatever your needs, we&rsquo;ll
          work with you every step of the way. In most cases we can also provide breakout rooms and flexible setup times.
        </p>
        <p className="prose">
          Our Amherst location means your attendees&rsquo; stay doesn&rsquo;t have to end at the meeting: the surrounding area
          offers a great variety of activities, architecture and arts.
        </p>
      </Chapter>

      <Chapter num="02" id="layouts" band title="Choose a layout" text="Three of the setups we arrange most often.">
        <ul className="layouts">
          {LAYOUTS.map(({ Plan, title, text, best }) => (
            <li key={title} className="layout-card">
              <div className="layout-plan"><Plan /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <p className="layout-best"><span>Best for</span> {best}</p>
            </li>
          ))}
        </ul>
      </Chapter>

      <Chapter num="03" id="menu" title="Conference menu options" text="Open the full seminar and meetings menu with pricing.">
        <ul className="ticks two">
          {INCLUDED.map((i) => <li key={i}>{i}</li>)}
        </ul>
        <PdfCards docs={[{ ...DOCS.lunch, label: "Seminar & meetings menu", note: "Breakfast, lunch and break service for meetings and seminars, with pricing." }]} />
      </Chapter>

      <CallToAction title="Planning a meeting or seminar?" text={`Tell us about your group and we'll suggest a room and layout. Call ${BUSINESS.phone} or send a message.`} img={IMG.christinaWide} alt="Room with round tables set for a seminar" />
    </>
  );
}
