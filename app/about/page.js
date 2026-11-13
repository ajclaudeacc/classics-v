import Link from "next/link";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Video from "@/components/Video";
import CallToAction from "@/components/CallToAction";
import { Users } from "@/components/Icons";
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
        title="Our banquet hall, reception venue & conference center"
        intro="With over 35 years of experience in event planning and hospitality in the Buffalo area, Classics V provides the atmosphere, great food and professional staff for your event."
        img={IMG.exterior}
        alt="The Classics V building, with its columned archway entrance"
      />

      <section className="section">
        <div className="container split">
          <div className="prose">
            <h2>Thank you for considering Classics V</h2>
            <p>
              We know how important your event is to you, and we look forward to doing all we can to ensure its success. Our main
              facility hosts events as large as 500 people and divides into three rooms for groups as small as 35.
            </p>
            <p>
              The main hall was completely remodeled in 2020, with all-new lighting fixtures, flooring and updated bathrooms, making
              it right for business, casual or upscale events. Our Terrace Room is a separate, private building with its own patio.
            </p>
            <p className="small">{BUSINESS.family}</p>
          </div>
          <Video {...VIDEOS.about} />
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="rooms-title">
        <div className="container">
          <div className="section-head section-head-row">
            <div>
              <h2 id="rooms-title">Our rooms</h2>
              <p>Use one room or open the main hall into a single ballroom.</p>
            </div>
            <Link className="btn btn-secondary" href="/classicsfivephotos">Virtual tours & photos</Link>
          </div>
          <ul className="room-list">
            {ROOMS.map((r, i) => (
              <li key={r.id} id={r.id} className="room">
                <Photo src={r.img} alt={r.alt} className="room-img" sizes="(min-width: 900px) 45vw, 100vw" priority={i === 0} />
                <div className="room-body">
                  <h3>{r.name}</h3>
                  {r.sub && <p className="room-sub">{r.sub}</p>}
                  <p className="capacity"><Users /> {r.capacity}{r.detail ? ` · ${r.detail}` : ""}</p>
                  <p>{r.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CallToAction title="Looking to book one or more rooms?" text="Call our office to check dates, or send us a message and we'll get back to you." />
    </>
  );
}
