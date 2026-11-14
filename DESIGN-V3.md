# Design v3: "Midnight"

The original navy, white and gold, made cinematic. Every page, fact, menu, form and photo carries over.

- **Look:** deep navy pages, white type, gold accents and fine gold rules. Bodoni Moda headlines, Jost text.
- **Home page:**
  - **Opening:** a full-screen photo slideshow (including the outside view) under a giant headline. Each photo slowly zooms as it crossfades, with a pause button and photo dots.
  - **Occasions:** a gold-marked ribbon (weddings, showers, anniversaries and more).
  - **Facts:** large gold numbers.
  - **Events we host:** a big numbered list, each line with its own small photo that zooms slightly on hover.
  - **Rooms:** tall photo cards with guest counts in gold, in a strip you can swipe or step through with arrows.
  - **The rest:** a photo collage, events, menu covers with gold frames, three steps, the address set large, and a closing band over a photo.
- **Inner pages:** a full-screen photo with the title at its foot, then numbered chapters with large gold italic numerals.
- **Footer:** "Classics V" set very large across the top.
- **Phones:** a full-screen numbered menu and a Call / Book a tour bar fixed to the bottom of the screen.

## Where each version lives

- `main`: the live site.
- `v1-classic`: the first design (navy and gold, light pages).
- `v2-editorial`: the second design (ivory and wine).
- `v3-midnight`: this design.

To switch the live site to any of them, reset `main` to that branch. Vercel deploys it in about a minute. Vercel's "Instant Rollback" can also restore any earlier deployment in seconds.

## Motion
Set up in `components/Motion.js`. All of it is off for visitors who turn off motion in their device settings.

- **Scroll reveals:** content fades and rises into view as you scroll to it, with list items arriving one after another.
- **Headings and photos:** section headings wipe up into view. Photos are revealed with a wipe and settle from a slight zoom.
- **Gold lines:** the gold line beside each section label draws itself in.
- **Facts:** the numbers count up when they come into view.
- **Parallax:** large background photos drift slower than the page.
- **Progress line:** a thin gold line at the top of the screen shows how far down the page you are.
- **Fail-safe:** nothing is hidden until the script runs, and anything already on screen is left alone, so content is never lost.
