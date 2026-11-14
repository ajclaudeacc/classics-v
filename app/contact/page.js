import PdfCards from "@/components/PdfCards";
import InquiryForm from "@/components/InquiryForm";
import { Phone, Mail, Pin } from "@/components/Icons";
import { BUSINESS, DOCS } from "@/lib/site";

export const metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Us & Schedule a Tour",
  description: "Call (716) 691-6000 or email info@classicsv.com to check availability or schedule a tour. 2425 Niagara Falls Blvd, Amherst, NY 14228.",
};

export default function Contact() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <div className="intro-grid" data-enter>
            <div>
              <p className="kicker">Contact</p>
              <h1>Contact us</h1>
            </div>
            <div className="intro-side">
              <p className="lead">Speak with our office staff to check availability, ask questions or schedule a tour of our newly renovated ballrooms.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <h2 style={{ fontSize: "2.2rem" }}>Call or visit</h2>
            <ul className="contact-list">
              <li>
                <Phone />
                <div>
                  <a className="contact-big" href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
                  <p>Evenings and weekends by appointment only. Please call ahead if you&rsquo;re planning a visit.</p>
                </div>
              </li>
              <li>
                <Mail />
                <div><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></div>
              </li>
              <li>
                <Pin />
                <div>
                  <address>{BUSINESS.street}<br />{BUSINESS.city}, {BUSINESS.region} {BUSINESS.postal}</address>
                  <a href={BUSINESS.mapsUrl}>Get directions</a>
                </div>
              </li>
            </ul>
            <ul className="good-to-know">
              <li>Ample, easy parking on site</li>
              <li>A Holiday Inn Express right across the street for out-of-town guests</li>
              <li>15 to 20 minutes from many areas of Western New York</li>
            </ul>
            <p className="story-sign">Thank you, {BUSINESS.family}</p>
            <div className="map">
              <iframe
                src={BUSINESS.mapsEmbed}
                title="Map showing Classics V at 2425 Niagara Falls Blvd, Amherst, NY"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div>
            <InquiryForm />
            <div className="form-terms"><PdfCards size="mini" docs={[DOCS.terms]} /></div>
          </div>
        </div>
      </section>
    </>
  );
}
