// Everything on this site comes from the current classicsfive.com.
// Items marked VERIFY conflict across pages or look out of date; confirm with the owners.

const CDN = "https://images.squarespace-cdn.com/content/v1/51479663e4b0c803aa4d1048/";
const LEGACY = "https://classicsfive.com"; // files and pages still hosted on the current site

export const BUSINESS = {
  name: "Classics V Banquet & Conference Center",
  shortName: "Classics V",
  tagline: "Personal Service with a Classical Touch",
  street: "2425 Niagara Falls Blvd",
  city: "Amherst",
  region: "NY",
  postal: "14228",
  phone: "(716) 691-6000",
  phoneHref: "tel:+17166916000",
  // VERIFY: the email domain (classicsv.com) differs from the website domain (classicsfive.com).
  email: "info@classicsv.com",
  family: "The May Family",
  since: 1985,
  areas: ["Buffalo", "Amherst", "Cheektowaga", "North Tonawanda", "Niagara Falls"],
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=2425+Niagara+Falls+Blvd+Amherst+NY+14228",
  mapsEmbed: "https://www.google.com/maps?q=2425+Niagara+Falls+Blvd,+Amherst,+NY+14228&output=embed",
  social: [
    { label: "Facebook", href: "https://www.facebook.com/classicsv" },
    { label: "Instagram", href: "https://www.instagram.com/classicsfive/" },
    { label: "YouTube", href: "https://www.youtube.com/user/ClassicsFiveBanquets" },
  ],
  weddingWire: "https://www.weddingwire.com/biz/classics-v-banquet-center-buffalo/d8567162128069ad.html",
};

export const NAV = [
  { href: "/weddings", label: "Weddings" },
  { href: "/banquetfacilities", label: "Banquets & Showers" },
  { href: "/meetings", label: "Meetings" },
  { href: "/funeral-gatherings", label: "Funeral Gatherings" },
  { href: "/drop-off", label: "Catering" },
  { href: "/about", label: "Our Rooms" },
  { href: "/classicsfivephotos", label: "Photos" },
];

export const IMG = {
  logo: CDN + "1600617380976-TWMNJ7XGHNANO0CB5TA3/ClassicsV.jpg",
  exterior: CDN + "1600447817217-YONEJBU6FJCFF13PQ860/IMG_3074.jpg",
  exteriorColor: CDN + "1580142709144-ZV1XMQTRZ7KCZLN0H5QD/blob",
  mainHallBlue: CDN + "1608593585674-UXZ0T3M0ZKO5U9JLIFYG/IMG_3382.jpg",
  ballroomOpen: CDN + "1586912316157-HEMNGC7WY8RI4VBYUAWG/IMG_3578-15.jpg",
  adamDavid: CDN + "1d1c9a5d-ce44-47f1-b63a-8468a688d733/IMG_2703.jpg",
  anthonyDaniel: CDN + "1608594329982-I962XS20LOWT7C7Y3OR2/Snapseed+%287%29.jpeg",
  christinaMaria: CDN + "25c414dd-8709-4bb1-991f-e27af5e06e60/Christina+Room30.jpg",
  terrace: CDN + "574f0f8c-0ece-4242-ad73-295a7ddcd825/Terrace+Room9.jpeg",
  holiday: CDN + "1613081304815-GR1LWDCRBZBMHQCSHNJK/IMG_5238.jpg",
  redWedding: CDN + "1531942952306-I6EM2IDMGUH20GC87S2Z/IMG_6833.jpg",
  christinaWide: CDN + "1608596833039-ETTA9JTJ4AFNA3SGZ8C8/IMG_3638.JPG",
};

// Squarespace's CDN resizes on request: ?format=750w, 1000w, 1500w, 2500w.
export function cdnSrcSet(src, widths = [500, 750, 1000, 1500]) {
  return widths.map((w) => `${src}?format=${w}w ${w}w`).join(", ");
}
export const cdn = (src, w = 1000) => `${src}?format=${w}w`;

export const PDF = {
  dinner: LEGACY + "/s/2026-Banquet-Menu-Dinner.pdf",
  lunch: LEGACY + "/s/2026-Banquet-Menu-Lunch.pdf",
  dinnerHome: LEGACY + "/s/2026-Banquet-Menu-Dinner-zayl.pdf",
  lunchHome: LEGACY + "/s/2026-Banquet-Menu-Lunch-jrj6.pdf",
  prom: LEGACY + "/s/2026-Prom-Menu.pdf",
  funeral: LEGACY + "/s/2026-Funeral-Menu-Flyer.pdf",
  terms: LEGACY + "/s/2025-BM-Terms-Dinner-Lunch.pdf",
  // VERIFY: labeled "2026 Wedding Packages" on the site but the file is named 2025.
  weddingPackages: LEGACY + "/s/2025-Wedding-Packages-th6x.pdf",
  weddingStations: LEGACY + "/s/2026-Wedding-Stations.pdf",
  // VERIFY: file name says 2025.
  brunchReception: LEGACY + "/s/2025-Brunch-Reception-Package.pdf",
  weddingInfo: LEGACY + "/s/2026-Wedding-Package-Information.pdf",
  weddingHandbook: LEGACY + "/s/2026-Wedding-Handbook.pdf",
  // VERIFY: catering menu file is from 2024.
  catering: LEGACY + "/s/2024-Classics-V-Catering-Menu.pdf",
};

// Menu covers rendered from the first page of each PDF (public/menus). Titles match the covers.
export const MENUS = [
  { title: "2026 Dinner Menu", inside: "Dinner, stations, hors d’oeuvres and cocktail packages", pages: "10 pages", href: PDF.dinnerHome, cover: "/menus/dinner-2026.jpg" },
  { title: "2026 Breakfast & Lunch Menu", inside: "Breakfast, brunch, lunch, showers and seminars", pages: "6 pages", href: PDF.lunchHome, cover: "/menus/lunch-2026.jpg" },
  // VERIFY: linked as "2026 Wedding Packages" but the document is the 2025 edition.
  { title: "Wedding Reception Packages", inside: "Customizable wedding packages and terms", pages: "6 pages", href: PDF.weddingPackages, cover: "/menus/wedding-packages.jpg" },
  // VERIFY: the catering menu is the 2024 edition.
  { title: "Catering Menu", inside: "Box lunches, drop-off buffets and appetizers", pages: "5 pages", href: PDF.catering, cover: "/menus/catering.jpg" },
  { title: "2026 Funeral Gatherings", inside: "Breakfast and lunch buffets with enhancements", pages: "1 page", href: PDF.funeral, cover: "/menus/funeral-2026.jpg" },
];

// Open positions, as provided by the business. Pay, hours and requirements are not published yet.
// VERIFY: confirm the roles are still open, and add pay, hours or requirements if the owners want them listed.
export const JOBS = [
  {
    id: "server",
    title: "Servers",
    team: "Front of house",
    text: "Serve guests at weddings, banquets, showers, meetings and public events in our ballrooms.",
  },
  {
    id: "dishwasher",
    title: "Dishwashers",
    team: "Back of house",
    text: "Keep our kitchen running behind the scenes so every event goes smoothly.",
  },
];

// Pages that still live only on the current site; linked there until rebuilt.
export const LEGACY_PAGES = {
  youth: LEGACY + "/youth-organizations",
  enhancements: LEGACY + "/banquet-enhancements",
  desserts: LEGACY + "/dessert-coffee-stations",
  blog: LEGACY + "/wedding-reception-blog",
  tips: LEGACY + "/weddingplanning-helpful-hints",
  vendors: LEGACY + "/friends-of-classics-v",
  // Not linked: /testimonials returns 404 on the current site.
};

// Capacities as listed on the About page.
// VERIFY: the About intro says the Terrace Room seats "up to 150", the room detail says 50 to 140.
// VERIFY: the main ballroom is "up to 400 banquet-style" in one place and "up to 500" in another.
export const ROOMS = [
  {
    id: "main-hall",
    name: "Main Ballroom",
    sub: "Christina, Anthony & Adam rooms combined",
    capacity: "Up to 500 guests",
    detail: "Up to 400 banquet-style with room for dancing",
    text: "All three rooms open into one large ballroom with an elevated platform and high ceilings, completely remodeled in 2020 with new flooring, light fixtures, lobby décor and bathrooms. Ideal for large wedding receptions, holiday parties, trade shows, conferences and awards banquets.",
    img: IMG.mainHallBlue,
    alt: "The main ballroom set for a reception, with white chair covers, navy sashes and uplighting along the head table",
  },
  {
    id: "christina-maria",
    name: "Christina Maria Room",
    capacity: "50 to 150 guests",
    text: "Perfect for wedding receptions, retirement parties, larger business meetings and much more.",
    img: IMG.christinaMaria,
    alt: "Christina Maria Room with long head tables, candles and white place settings",
  },
  {
    id: "anthony-daniel",
    name: "Anthony Daniel Room",
    capacity: "35 to 80 guests",
    text: "Ideal for baby or bridal showers, anniversaries, lunch or dinner meetings and birthday parties.",
    img: IMG.anthonyDaniel,
    alt: "Anthony Daniel Room with round tables, white linens and blue sashes",
  },
  {
    id: "adam-david",
    name: "Adam David Room",
    capacity: "35 to 70 guests",
    text: "The right size for baby or bridal showers, rehearsal dinners, luncheons and birthday parties.",
    img: IMG.adamDavid,
    alt: "Adam David Room with round tables, white linens and burgundy chairs",
  },
  {
    id: "terrace",
    name: "Terrace Room",
    sub: "Private building",
    capacity: "50 to 140 guests",
    text: "A private space separate from the main facility, with a vaulted ceiling with draped fabric, a large central dance floor, an elevated platform for head tables, private bathrooms and an outdoor patio.",
    img: IMG.terrace,
    alt: "Terrace Room set for a wedding with burgundy table linens and white chair covers",
  },
];

export const SERVICES = [
  { href: "/weddings", title: "Weddings", line: "Dream weddings happen here.", img: IMG.redWedding, alt: "Wedding reception in the main ballroom with red napkins and a long head table" },
  { href: "/banquetfacilities", title: "Banquets & Showers", line: "Great food, since 1985.", img: IMG.ballroomOpen, alt: "Banquet room with round tables and burgundy chairs ready for guests" },
  { href: "/meetings", title: "Meetings & Seminars", line: "Meetings with your company in mind.", img: IMG.christinaWide, alt: "Large room with round tables set for a seminar" },
  { href: "/funeral-gatherings", title: "Funeral Gatherings", line: "A calm, caring space to gather after a service.", img: IMG.exterior, alt: "The Classics V building entrance with its columned archway" },
  { href: "/drop-off", title: "Catering", line: "Our place or yours: pick up or drop off.", img: IMG.exteriorColor, alt: "Classics V exterior with the Terrace Room entrance and green awning" },
];

// Ticketed public events from the current homepage. Past events hide automatically.
export const EVENTS = [
  {
    title: "Throwback Dance Party",
    date: "2026-11-14",
    when: "Saturday, November 14, 2026",
    note: "1980s, 1990s and 2000s music with DJs Tony Caruso, Tim Nowka, Dan DeGoski, Tom Angelo and DJ Anthony.",
    href: "https://www.eventbrite.com/e/throwback-dance-party-2026-tickets-1997930453770",
    img: CDN + "b823eb08-4fb4-476d-bfe5-45a23e1b9ac4/IMG_1684.JPG",
    alt: "Throwback Dance Party flyer, Saturday November 14, 2026 at Classics V",
  },
  {
    title: "Haunted Masquerade Silent Disco",
    date: "2026-10-23",
    when: "Friday, October 23, 2026",
    href: "https://www.eventbrite.com/e/haunted-masquerade-silent-disco-at-classics-v-amherst-102326-tickets-2000644376185",
    img: CDN + "0d4574c2-2fcf-4772-a2df-d4b59f766f42/Banner+-+Classics+V+-+102326.png",
    alt: "Haunted Masquerade Silent Disco flyer",
  },
  {
    title: "Bob Meier & the Hitmen Horns 17-Piece Big Band",
    date: "2026-10-16",
    when: "Friday, October 16, 2026",
    href: "https://avenueticket.com/event/bob-meier-the-hitmen-horns-17-piece-big-band",
    img: CDN + "44c6ff5e-ebae-49c3-9ece-f24633e7e64b/1000097951.png",
    alt: "Bob Meier and the Hitmen Horns Big Band flyer",
  },
  {
    title: "Halloween Bash with Central Groove",
    date: "2026-10-30",
    when: "Friday, October 30, 2026",
    href: "https://avenueticket.com/event/halloween-bash-at-classic-friday-oct-30th-with-central-groove",
    img: CDN + "e85b50ce-ffee-4d36-b8cf-94b880885e4f/2938.png",
    alt: "Halloween Bash with Central Groove flyer",
  },
];

export function upcomingEvents(now = new Date()) {
  const today = now.toISOString().slice(0, 10);
  return EVENTS.filter((e) => e.date >= today).sort((a, b) => a.date.localeCompare(b.date));
}

// Titles as published on the Classics V YouTube channel.
export const VIDEOS = {
  transformation: { id: "ToidtJ0Ewkk", title: "Wedding Reception, July 17th 2021" }, // shown under "Check out our complete transformation"
  about: { id: "-V-bVZCmxOo", title: "Classics V video tour" }, // VERIFY: the YouTube title is just a file number
  terraceWedding: { id: "8j_xeC6FdC0", title: "The Terrace Room Wedding Reception, June 2021" },
  mainHallJune: { id: "33741iTJU-8", title: "Main Hall Wedding Reception, June 2021" },
  mainHallAugust: { id: "OTXVl1Ci1aM", title: "Main Hall Wedding Reception, August 2021" },
};
