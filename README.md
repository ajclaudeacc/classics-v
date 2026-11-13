# Classics V: website redesign (preview)

A redesign proposal for [classicsfive.com](https://classicsfive.com), the website of Classics V Banquet & Conference
Center in Amherst, NY. All business information, menus, photos and videos come from the current site.

Built with Next.js (App Router). No UI framework; styles live in `app/globals.css`.

## Run locally

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:3000.

## Settings

Copy `.env.example` to `.env.local` locally, and add the same variables in Vercel.

| Variable | What it does |
|---|---|
| `NEXT_PUBLIC_PREVIEW_MODE` | `true` (default) shows the "design preview" notice and keeps the site out of search engines. Set to `false` only when this becomes the official site. |
| `INQUIRY_FORM_LIVE` | Forms save nothing until this is `true`. Turn it on only after Classics V approves the site and will check the inquiries. |
| `DATABASE_URL` | Supabase **Transaction pooler** connection string (port 6543). Inquiries go into an `inquiries` table that is created automatically. |

## Where things are

| Path | Contents |
|---|---|
| `lib/site.js` | All business facts: address, phone, rooms, menus (PDF links), events, videos. Edit content here. |
| `lib/gallery.js` | Photo gallery groups. |
| `app/<page>/page.js` | One folder per page, using the same addresses as the current site. |
| `components/` | Header, footer, hero, inquiry form, video, gallery and other shared pieces. |
| `app/api/inquiry/route.js` | Receives form submissions. |

## Images

Photos load from the current site's Squarespace image CDN (`images.squarespace-cdn.com`), resized per screen. Menus and
some pages still link to files on classicsfive.com. **Before the old Squarespace site is cancelled, download those
images and PDFs into `public/`**, or they will stop loading.

## Content to confirm with Classics V

Search the code for `VERIFY` to find these:

- Years of experience: the site says both "over 35 years" and "over 25 years"; family owned "since 1985".
- Terrace Room capacity: "up to 150" in one place, "50 to 140" in another.
- Main ballroom: "up to 400 banquet-style" and "up to 500".
- Email `info@classicsv.com` uses a different domain from the website.
- File names of the wedding packages and brunch PDFs say 2025, and the catering menu PDF says 2024.
- Office hours: the current site still has a temporary "hoping to resume normal office hours" note. The redesign says
  "Evenings and weekends by appointment only. Please call ahead." Confirm current hours.
- Extras prices on the Photos page ($450 photo booth, $125 backdrop, $4 per table mirror and votive).
- The old site's /testimonials and /special-events pages return "not found".
