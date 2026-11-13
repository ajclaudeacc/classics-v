import Link from "next/link";
import PageHero from "@/components/PageHero";
import ApplicationForm from "@/components/ApplicationForm";
import Ornament from "@/components/Ornament";
import { Phone, Mail } from "@/components/Icons";
import { BUSINESS, IMG, JOBS } from "@/lib/site";

export const metadata = {
  title: "Now hiring servers and dishwashers",
  description: `${BUSINESS.name} in Amherst, NY is hiring servers and dishwashers. Apply by phone, email or online.`,
  alternates: { canonical: "/careers" },
};

export default function Careers() {
  const mailto = `mailto:${BUSINESS.email}?subject=${encodeURIComponent("Job application")}`;
  return (
    <>
      <PageHero
        title="Now hiring servers and dishwashers"
        intro={`Join the family-run team behind weddings, banquets and celebrations in Amherst since ${BUSINESS.since}.`}
        img={IMG.mainHallBlue}
        alt="The main ballroom set for a reception"
        areas={false}
      >
        <a className="btn btn-primary btn-lg" href="#apply">How to apply</a>
      </PageHero>

      <section className="section" aria-labelledby="jobs-title">
        <div className="container">
          <div className="section-head">
            <p className="script">Come work with us</p>
            <h2 id="jobs-title">Open positions</h2>
            <Ornament className="ornament-left" />
          </div>
          <ul className="jobs">
            {JOBS.map((j) => (
              <li key={j.id} className="job-card">
                <p className="job-team">{j.team}</p>
                <h3>{j.title}</h3>
                <p>{j.text}</p>
                <a className="text-link" href="#apply">Apply for this job</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="apply" className="section section-tint" aria-labelledby="apply-title">
        <div className="container split split-top">
          <div className="prose">
            <h2 id="apply-title">How to apply</h2>
            <p>Pick whichever is easiest for you.</p>
            <ol className="apply-ways">
              <li>
                <span className="apply-icon"><Phone /></span>
                <div>
                  <h3>Call us</h3>
                  <p><a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>. Ask about the server or dishwasher job.</p>
                </div>
              </li>
              <li>
                <span className="apply-icon"><Mail /></span>
                <div>
                  <h3>Email us</h3>
                  <p><a href={mailto}>{BUSINESS.email}</a>. Include your name, phone number, the job you want and when you can work.</p>
                </div>
              </li>
              <li>
                <span className="apply-icon apply-num">3</span>
                <div>
                  <h3>Apply online</h3>
                  <p>Fill out the short form on this page.</p>
                </div>
              </li>
            </ol>
            <p className="apply-visit">
              We&rsquo;re at {BUSINESS.street}, {BUSINESS.city}. <Link href="/contact">Directions and contact details</Link>
            </p>
          </div>
          <ApplicationForm />
        </div>
      </section>
    </>
  );
}
