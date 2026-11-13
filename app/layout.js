import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/700.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreviewBanner from "@/components/PreviewBanner";
import Reveal from "@/components/Reveal";
import { BUSINESS } from "@/lib/site";

const preview = process.env.NEXT_PUBLIC_PREVIEW_MODE !== "false";

export const metadata = {
  metadataBase: new URL("https://classicsfive.com"),
  title: {
    default: "Wedding Venue & Banquet Hall in Amherst, NY | Classics V",
    template: "%s | Classics V Banquet & Conference Center",
  },
  description:
    "Family-owned wedding venue, banquet hall and conference center at 2425 Niagara Falls Blvd, Amherst, NY. Four banquet rooms for 35 to 500 guests. Call (716) 691-6000.",
  // Keep the preview out of search results so it never competes with the live site.
  robots: preview ? { index: false, follow: false } : undefined,
};

export const viewport = { themeColor: "#18283a" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: BUSINESS.name,
  telephone: "+1-716-691-6000",
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postal,
    addressCountry: "US",
  },
  maximumAttendeeCapacity: 500,
  sameAs: BUSINESS.social.map((s) => s.href),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to main content</a>
        <PreviewBanner />
        <Header />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
        <Reveal />
        {!preview && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
      </body>
    </html>
  );
}
