# Superior Plumbing Services — homepage preview

Static HTML, CSS, and JavaScript. No installation or build step required.

## Preview locally

Run `npm start` from this folder, then open http://127.0.0.1:4173. Set `PORT` if 4173 is already in use.

- Homepage: `/`
- Matching error page: `/404.html`
- Services, About us, Our work, Reviews, and Contact navigation intentionally point to `/404.html`.
- Phone, text, email, and Housecall Pro booking links use the supplied business details.
- The project showcase supports click and keyboard selection. The mobile menu supports Escape. Service details and FAQs use native disclosures.

The local server returns the custom error page with HTTP 404 for missing URLs. A direct request to the existing `/404.html` file returns HTTP 200, as normal for an existing static file.

## Content

Based on `intake.txt`, the original repo images, and the owner's clarification: Grayson County is home and the primary service area; travel is generally about 1–1.5 hours from Grayson County, with coverage confirmed by contact. No reviews, license details, guarantees, exact hours, or biographical claims were fabricated.

Original photos remain intact. The pages use resized WebP copies from `assets/web/` with camera metadata removed. Image provenance is recorded beside those assets. Typography is self-hosted.

## Before launch

This is an unpublished preview. Both pages contain `noindex, nofollow`, and `robots.txt` blocks crawling. Replace those settings as appropriate when the completed site is approved for indexing. Add the confirmed production domain, canonical/Open Graph URLs, review content, hours, and final business information before launch.

Publish only `index.html`, `404.html`, `styles.css`, `script.js`, `robots.txt`, `assets/web/`, and `assets/fonts/`. Do not publish the intake or development/design documentation. Configure the final host to serve `404.html` with HTTP 404 for missing routes.

## Validation

`npm run check` checks JavaScript syntax. Browser verification covered desktop and mobile screenshots, widths from 320 to 1600 px, image loading, mobile menu/Escape, project tab click/arrow-key selection, FAQ expansion, placeholder links, and 404 return-home recovery.
