import Link from "next/link";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Video from "@/components/Video";
import CallToAction from "@/components/CallToAction";
import { Arrow } from "@/components/Icons";
import Chapter from "@/components/Chapter";
import { BUSINESS, IMG, ROOMS, VIDEOS } from "@/lib/site";

export const metadata = {
  alternates: { canonical: "/about" },
  title: "About Our Banquet Hall & Rooms",
  description: "Our main ballroom hosts up to 500 guests and was remodeled in 2020. The private Terrace Room seats up to 140 with an outdoor patio.",
};

export default function About() {
  return (
    <>
      <PageHero
        kicker="Our rooms"
        title="Our banquet hall, reception venue & conference center"
        intro="With over 35 years of experience in event planning and hospitality in the Buffalo area, Classics V provides the atmosphere, great food and professional staff for your event."
        img={IMG.exterior}
        alt="The Classics V building, with its columned archway entrance"
      />

      <Chapter num="01" id="welcome" title="Thank you for considering Classics V">
        <p className="lead">
          We know how important your event is to you, and we look forward to doing all we can to ensure its success. Our main
          facility hosts events as large as 500 people and divides into three rooms for groups as small as 35.
        </p>
        <p className="prose">
          The main hall was completely remodeled in 2020, with all-new lighting fixtures, flooring and updated bathrooms, making
          it right for business, casual or upscale events. Our Terrace Room is a separate, private building with its own patio.
        </p>
        <p className="story-sign">{BUSINESS.family}</p>
        <Video {...VIDEOS.about} />
      </Chapter>

      <section className="section band" aria-labelledby="rooms-title">
        <div className="wrap">
          <div className="head-row">
            <div>
              <p className="kicker">02 · Five spaces</p>
              <h2 id="rooms-title">Our rooms</h2>
              <p className="lead" style={{ marginTop: 12 }}>Use one room or open the main hall into a single ballroom.</p>
            </div>
            <Link className="text-link" href="/classicsfivephotos">Virtual tours &amp; photos <Arrow /></Link>
          </div>
          <ul>
            {ROOMS.map((r, i) => (
              <li key={r.id} id={r.id} className="room-feature">
                <div className="frame"><Photo src={r.img} alt={r.alt} sizes="(min-width: 860px) 50vw, 100vw" priority={i === 0} /></div>
                <div>
                  <span className="num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{r.name}</h3>
                  {r.sub && <p className="room-sub">{r.sub}</p>}
                  <p className="room-cap"><strong>{r.capacity}</strong>{r.detail && <span>{r.detail}</span>}</p>
                  <p>{r.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CallToAction title="Looking to book one or more rooms?" text="Call our office to check dates, or send us a message and we'll get back to you." img={IMG.mainHallBlue} alt="The main ballroom set for a reception" />
    </>
  );
}
