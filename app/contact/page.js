import InquiryForm from "@/components/InquiryForm";
import { Phone, Mail, Pin } from "@/components/Icons";
import { BUSINESS, PDF } from "@/lib/site";

export const metadata = {
  title: "Contact Us & Schedule a Tour",
  description: "Call (716) 691-6000 or email info@classicsv.com to check availability or schedule a tour. 2425 Niagara Falls Blvd, Amherst, NY 14228.",
};

export default function Contact() {
  return (
    <>
      <section className="contact-head">
        <div className="container">
          <h1>Contact us</h1>
          <p className="lead-text">
            Speak with our office staff to check availability, ask questions or schedule a tour of our newly renovated ballrooms.
          </p>
        </div>
      </section>

      <section className="section section-flush-top">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="info-card contact-card">
              <h2>Call or visit</h2>
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
                  <div>
                    <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
                  </div>
                </li>
                <li>
                  <Pin />
                  <div>
                    <address>{BUSINESS.street}<br />{BUSINESS.city}, {BUSINESS.region} {BUSINESS.postal}</address>
                    <a href={BUSINESS.mapsUrl}>Get directions</a>
                  </div>
                </li>
              </ul>
              <p className="small">Thank you, {BUSINESS.family}</p>
            </div>
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
            <p className="small form-terms"><a href={PDF.terms}>View the terms &amp; conditions (PDF)</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
