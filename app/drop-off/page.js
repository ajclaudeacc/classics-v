import PageHero from "@/components/PageHero";
import CallToAction from "@/components/CallToAction";
import { IMG, PDF } from "@/lib/site";

export const metadata = {
  title: "Catering: Drop-Off Buffets & Boxed Lunches",
  description: "Drop-off buffets and boxed lunches from Classics V for graduations, company picnics, family reunions and celebrations.",
};

const CDN = "https://images.squarespace-cdn.com/content/v1/51479663e4b0c803aa4d1048/";
const PAGES = [
  { src: CDN + "73095bc0-9075-40d7-bdaf-c681acb2bb81/2025+CM+Cover.jpg", alt: "Catering menu cover page" },
  { src: CDN + "e88f60fc-91ee-4078-bce7-72f30997a94f/2025+CM+Buffets.jpg", alt: "Catering menu: drop-off buffets" },
  { src: CDN + "0abd4b1b-d047-480a-bdfb-2b9ec9626313/2025+CM+Buffets+2.jpg", alt: "Catering menu: more drop-off buffets" },
  { src: CDN + "9fa66a2e-d8b7-441d-afd3-86442420a05c/2025+CM+Boxed+Lunches.jpg", alt: "Catering menu: boxed lunches" },
];

export default function Catering() {
  return (
    <>
      <PageHero
        title="Our place or yours"
        intro="Drop-off buffets and boxed lunches, perfect for graduations, company picnics, family reunions or any celebration. Choose from our special menus and let us do the cooking, so you can relax and enjoy your event."
        img={IMG.exteriorColor}
        alt="Classics V building exterior with the Terrace Room entrance"
      >
        <a className="btn btn-primary btn-lg" href="#pages-title">See the catering menu</a>
      </PageHero>

      <section className="section" aria-labelledby="pages-title">
        <div className="container">
          <div className="section-head">
            <h2 id="pages-title">Catering menu</h2>
            <p>Pick up or drop off. Select a page to open the full menu with options and pricing.</p>
          </div>
          <ul className="menu-pages">
            {PAGES.map((p) => (
              <li key={p.src}>
                <a href={PDF.catering} target="_blank" rel="noopener">
                  <img src={p.src + "?format=500w"} alt={p.alt} width="483" height="625" loading="lazy" />
                  <span className="sr-only"> (opens the catering menu PDF in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="center"><a className="btn btn-primary" href={PDF.catering} target="_blank" rel="noopener">Open the full catering menu (PDF, 5 pages)</a></p>
        </div>
      </section>

      <CallToAction title="Order catering" text="Call our office to place an order or ask about menu options." />
    </>
  );
}
