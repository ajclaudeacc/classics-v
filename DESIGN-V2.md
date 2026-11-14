# Design v2: "Editorial"

A completely different layout for the same site. Every page, fact, menu, form and photo carries over.

| | v1 "Classic" (live) | v2 "Editorial" (this branch) |
|---|---|---|
| Look | Navy and gold, dark full-screen photo heroes | Warm ivory pages, deep wine accent, square-cornered photos and hairline rules |
| Fonts | Playfair Display, Nunito Sans, Great Vibes script | Cormorant Garamond headlines, Manrope text |
| Home opening | Full-screen crossfading slideshow | Words beside a three-photo mosaic (main ballroom, outside view, Terrace Room) |
| Navigation | Menu bar; a drop-down menu on phones | Split menu with the logo in the middle; a full-screen numbered menu on phones |
| Events we host | Photo cards | A numbered index list (01–05) with small photos |
| Rooms | Photo cards with capacity badges | A "spec sheet" with photo, name and capacity on each row |
| Inner pages | Dark photo header, then sections | Title beside the introduction, one wide photo, then numbered chapters |
| Photos page | Bento grid, pill buttons | Magazine-style photo wall, text-style room filter |
| Phones | Call icon in the header | A Call / Book a tour bar fixed to the bottom of the screen |
| Closing | Navy band | A dark band beside a photo |

## Where each version lives

- `main`: whatever is live at classics-v-syr6.vercel.app (v1 until v2 is merged).
- `v1-classic`: a saved copy of v1 exactly as it was before v2 began.
- `v2-editorial`: this design. Vercel builds it as its own preview link.

## Switching

- Make v2 live: merge `v2-editorial` into `main` (one pull request). Vercel deploys it in about a minute.
- Go back to v1: reset `main` to `v1-classic` (or revert the merge). Vercel also keeps every past deployment, and "Instant Rollback" in the Vercel dashboard restores the previous one in seconds without any code change.
