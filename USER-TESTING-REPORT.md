# Classics V website: 20-visitor test report

**Date:** November 13, 2026
**Site tested:** the redesign preview, https://classics-v-syr6.vercel.app (production build)

## How this was tested

These are **simulated visitors, not real people.** Each persona went through the site with real browser tasks, on the device and setup that kind of visitor would use: an iPhone, an Android phone, a desktop, keyboard only, very large text, slow mobile data or reduced motion.

Every page was also run through these automated checks:

- **Accessibility:** an automated audit against WCAG 2.2 AA, the standard for accessible websites (axe-core).
- **Tap targets:** whether buttons and links are big enough to tap on a phone.
- **Text size:** whether any text is too small to read.
- **Narrow screens:** whether the layout fits a 320px-wide screen without scrolling sideways.
- **Large text:** whether the layout still works when text is enlarged to 200%.
- **Keyboard:** the order the Tab key moves through the page.
- **Slow data:** download size and how long the main photo takes to appear on a weak mobile connection.
- **Image sharpness:** each photo's file size compared with the size it's shown at, on standard screens and on sharp (Retina and phone) screens.
- **Forms:** how the forms behave when filled in wrong.
- **Link previews:** what appears when someone shares a link.
- **Outside links:** whether links to other sites still work.

Real visitors may notice things these simulations can't, especially about tone and taste. A short session with two or three real customers would still be worth doing.

---

## Results at a glance

| Check | Before | After |
|---|---|---|
| Accessibility problems (WCAG 2.2 AA audit) | 12 pages flagged, including 1 serious color-contrast issue | **0** |
| Phone buttons and links smaller than 40px | 10 to 23 per page | **0 to 5 per page.** The rest are radio buttons and checkboxes inside full-size tappable labels, plus one inline text link. |
| Pages that scroll sideways on a 320px screen | 2 (Catering, Meetings) | **0** |
| Blurry photo previews | 57 images below sharp-screen resolution | **10.** All are already at their source's maximum: 2 YouTube videos have no HD thumbnail, 1 original photo is only 580px, and the home slideshow uses the 1,500px version on phones on purpose (see Fixes). |
| Home page on slow mobile data | Main photo after **11.0s**, 3.0 MB downloaded | **3.5s, 0.75 MB** |
| Photos page on slow mobile data | Main photo after **10.0s** | **0.7s** |
| Main buttons on a phone's first screen | Missing on Home, Weddings, Funeral Gatherings and Our Rooms | On every page except Our Rooms and Contact. Contact puts the phone number there instead. |
| Preview picture when the link is shared by text or social media | None | Main ballroom photo |
| Outside links (old-site pages, Facebook, Instagram, Eventbrite) | Not checked | All 10 work |

---

## The 20 visitors

### 1. Engaged couple on an iPhone, comparing venues
- **Liked:**
  - The crossfading photo slideshow and the "What are you planning?" shortcuts.
  - The wedding packages now show as real menu covers with page counts.
  - The WeddingWire reviews link.
- **Didn't like:** On the first screen they saw only the big heading. "Book a private tour" was below it.
- **Fixed:** Tighter phone layout for the top of the page. The tour and call buttons now appear on the first screen.

### 2. Mother of the bride (60s), large text on a laptop
- **Liked:**
  - Text enlarged to 200% still fits with no sideways scrolling.
  - High-contrast navy and white.
  - Clear page titles.
- **Didn't like:** Gold labels like "MENU & PRICING" and the PDF tags were small.
- **Fixed:** Small labels enlarged (to 12–13px), and the photo-count badges darkened to pass the contrast standard.

### 3. Groom who wants the bottom line fast
- **Liked:**
  - "No room fee and no cake cutting fee" in the Weddings checklist.
  - Room capacity badges on the room cards.
- **Didn't like:** No prices anywhere on the page; they're only inside the PDFs.
- **Not fixed (needs the owners):** I didn't add prices. The wedding package PDF is the 2025 edition while the site calls it 2026, so any "starting at" price must come from the owners. **Recommendation:** add a "Packages from $__ per person" line once they confirm current prices.

### 4. Office manager booking a seminar for 60
- **Liked:**
  - The Traditional / Theater / Trade show layout diagrams.
  - The meetings menu shown as a cover card with its page count.
- **Didn't like:**
  - The "Seminar & meetings menu" button at the top downloaded the PDF straight away, which was jarring.
  - The meetings section was slightly too wide on very small screens.
- **Fixed:** The top button now scrolls to the menu card on the page, and the layout fits small screens.

### 5. Family member arranging a funeral gathering, on a phone
- **Liked:** The calm, short page and the menu shown as a cover.
- **Didn't like:** No call button at the top. Someone grieving shouldn't have to scroll for a phone number.
- **Fixed:** Added "Call (716) 691-6000" and "See the menu (PDF)" buttons to the top of the page.

### 6. Planning a baby shower for 50
- **Liked:**
  - The Banquets & Showers page names the right rooms ("Adam David and Anthony Daniel, 35 to 80").
  - The breakfast & lunch menu cover is the first card.
- **Didn't like:** Nothing major.
- **Kept as is.**

### 7. Buying tickets to a public event
- **Liked:**
  - The featured event card with a date badge and countdown.
  - The "Get tickets" link (Eventbrite link confirmed working) and "Add to calendar".
- **Didn't like:** Nothing major.
- **Kept.** Past events drop off on their own each day.

### 8. Teenager looking for a first job (Android)
- **Liked:**
  - The hiring banner.
  - "No résumé needed."
  - A form that takes 2 minutes and clearly says what's missing.
- **Didn't like:**
  - The hiring banner took two lines on a phone.
  - Its "How to apply" link was only 23px tall, hard to tap.
- **Fixed:** The banner is now one line on phones ("We're hiring · Servers & dishwashers →") with a full-size tap area.

### 9. Blind visitor using a screen reader
- **Liked:**
  - One clear main heading per page and a logical heading order.
  - Every photo described.
  - Form errors are read out and the cursor moves to the first problem.
- **Didn't like:** The preview notice at the very top wasn't inside any labeled page region, so screen readers announce it as stray content.
- **Fixed:** It's now a labeled "Preview notice" region. The accessibility audit finds no problems on any page.

### 10. Keyboard-only user (no mouse)
- **Liked:**
  - "Skip to main content" comes first.
  - Every focused item is clearly outlined.
  - The photo viewer works with the arrow keys and Escape, and returns to the right photo.
- **Didn't like:** On the home page they had to Tab past 6 slideshow buttons before reaching "Book a private tour".
- **Fixed:** The main buttons now come before the slideshow controls.

### 11. Low-vision visitor zoomed to 400% (equivalent to a 320px-wide screen)
- **Liked:** Most pages reflow cleanly into one column.
- **Didn't like:** The "Open the full catering menu" button ran 74px off the screen.
- **Fixed:** Long button labels now wrap on very narrow screens. No page scrolls sideways.

### 12. Guest on weak cell data in a parking lot
- **Liked:** The Weddings and Careers pages appeared quickly.
- **Didn't like:**
  - The home page took 11 seconds to show its main photo.
  - The Photos page took 10 seconds.
  - The cause was the browser downloading about 20 photos further down the page all at once.
- **Fixed:**
  - Photos now load only when you scroll near them.
  - The second slideshow photo waits a few seconds.
  - Home: 3.5s and 0.75 MB. Photos: 0.7s.

### 13. Older visitor (75) on an iPad
- **Liked:**
  - Big, readable text and an obvious phone number in the header.
  - "Evenings and weekends by appointment only" is easy to find.
- **Didn't like:** Footer links and slideshow dots were small tap targets (25–32px).
- **Fixed:** All of these are now 40–44px.

### 14. Teacher on the prom committee
- **Liked:** The Prom Package cover on the Banquets page.
- **Didn't like:** Prom isn't mentioned on the home page or in the menu, so they nearly gave up.
- **Fixed:** Added "A prom" to the home page's "What are you planning?" shortcuts, linking straight to the menus.

### 15. Ordering a catered office lunch
- **Liked:**
  - The Catering page shows the actual menu pages.
  - Selecting any page opens the PDF.
- **Didn't like:** The top button started a download immediately.
- **Fixed:** It now scrolls to the menu pages.
- **Flag for the owners:** the menu pictures say 2025, but the catering PDF is the 2024 edition.

### 16. Wedding vendor (DJ or photographer)
- **Liked:** The new photo tiles for "Our preferred vendors" and "Wedding planning tips". Both link to live pages.
- **Didn't like:** Those pages open on the old site, so the design changes when you click.
- **Not fixed (by design for now):** That content lives on the current site. **Recommendation:** move it into the new site at launch.

### 17. Out-of-town wedding guest
- **Liked:** The map and the "Get directions" link on the Contact page.
- **Didn't like:**
  - Parking and nearby hotel information was only on the Weddings page.
  - The Contact page didn't mention either.
- **Fixed:** Added a short "good to know" list on the Contact page, all using the venue's own wording from the current site:
  - Ample, easy parking on site.
  - A Holiday Inn Express right across the street.
  - 15 to 20 minutes from many areas of Western New York.

### 18. Visitor who turns off motion (motion sensitivity)
- **Liked:**
  - With reduced motion on, the slideshow shows one still photo.
  - The fade-in effects turn off.
  - The photo hover effects stop.
- **Didn't like:** Nothing.
- **Kept as is.**

### 19. Past customer who just wants to call
- **Liked:** The phone number is in the header on every page and size, and on Contact it's the biggest thing on the page.
- **Didn't like:** The general contact form had no phone field, so they couldn't ask for a call back.
- **Fixed:** Every contact form now has an optional phone field ("If you'd like a call back").

### 20. Sharing the site in a group chat (bride texting her bridesmaids)
- **Liked:** The page titles read well.
- **Didn't like:**
  - Shared links showed no picture.
  - The "page not found" page showed the home page's title.
- **Fixed:**
  - Shared links now show the main ballroom photo.
  - Each page tells search engines its official address.
  - The not-found page has its own title.

---

## What everyone liked, and was kept

- **Navy and gold, classic fonts and script accents.** They read as "elegant venue" without feeling stuffy.
- **Real photos everywhere.** No stock images. The crossfading slideshow including the outside view.
- **Menus and packages shown as their real covers.** Several visitors said that told them more than a list of links would.
- **The Photos page:** the room filter, the large lead photo per room and the full-screen viewer.
- **The phone number is always one tap away.**
- **Forms explain exactly what's missing,** in plain words.
- **Accessibility:** the slideshow pause button, reduced-motion support, keyboard support and labeled fields.

## Blurry photos: what was done

- **Photos page:** the large spots (the lead photo per room and wide photos at the end of a row) were loading a version sized for a small thumbnail. They now load up to the original 2,500px.
- **Panorama photos,** like the bridal shower panorama, get a wider file so they stay sharp when cropped.
- **The full-screen photo viewer** loads up to 2,500px on large screens.
- **Video previews** use YouTube's HD thumbnail where one exists (3 of 5 videos) and the 640px version otherwise. Before, every video used the 480px version.
- **Large page-top photos on phones** now load the 2,500px version, since phones crop them tall.
- **The home slideshow on phones** deliberately keeps the 1,500px version:
  - The photo host offers only 1,500px or 2,500px.
  - The larger file made the home page about 3× slower on mobile data.
  - A dark overlay sits on top, so the difference is hard to see.
- **What's left:** one original photo (the second "Centerpiece upgrade") is only 580px wide at the source, and two YouTube videos have no HD thumbnail. Sharper versions would need new uploads from the owners.

## For the owners to decide

1. **Starting prices on the Weddings and Banquets pages.** Visitors look for them first.
2. **Confirm which PDFs are current:**
   - The wedding package PDF is the 2025 edition but is linked as 2026.
   - The catering menu PDF is from 2024.
   - The terms PDF is dated January 2025.
3. **Move the old-site pages into the new site:** vendors, tips, blog, youth groups, enhancements and desserts.
4. **Hire details:** pay, hours and age requirements for the server and dishwasher jobs.
5. **Replace the 580px centerpiece photo** with a larger original if they have one.
