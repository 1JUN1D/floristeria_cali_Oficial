# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People in Cali, and people outside Cali sending to someone there, who need a flower arrangement or a "detalle" for a specific occasion (cumpleaños, 15 años, grado, aniversario, propuesta, condolencias), usually today or tomorrow. They arrive on a phone from Google Ads and Google Maps searches such as "florería en Cali" or "flores a domicilio Cali", compare a few arrangements with their prices and order by WhatsApp.

## Product Purpose

The site sells the florist's 35 catalogued arrangements and its occasion pages, and turns a visit into a WhatsApp order with the arrangement code, the price and the delivery details already written. Success is a WhatsApp conversation started from a product, from the catalogue or from a Google Ads landing page.

## Positioning

A Cali florist that dresses each arrangement like a made-to-order piece (black Korean paper with a gold edge, gold butterflies, crown, a satin ribbon printed with the occasion and a personalised card) and delivers it the same day anywhere in Cali when ordered before 3:00 p. m. The business is now called Atelier Vergara: the look is to feel luxurious without suggesting high prices (arrangements range from $95.000 to $619.000).

## Operating Context

- Orders and questions go through WhatsApp (+57 323 593 3021), also used for calls; attention 24 hours, every day of the year (as stated on the current site).
- Same-day delivery when the order is placed before 3:00 p. m.; delivery to every barrio of Cali and nearby municipalities (Yumbo, Jamundí); the service-areas component lists 19 sectors.
- Each product has a code (Cod. 001–035) that the visitor quotes in the WhatsApp message; the catalogue is filtered by occasion, flower and price.
- Traffic: Google Ads landing pages (conversion tag AW-17971833009 on the landings) and SEO/Google Maps (GA4 G-BWQCB2P36K). The Google Maps listing is still named "Floristeria en Cali | Flores Del Encanto".

## Capabilities and Constraints

- Static HTML/CSS/JS on GitHub Pages, domain floristeriacali.dondeseria.com (CNAME). URLs stay exactly as they are.
- Shared components (navbar, footer, service areas, contact, WhatsApp button) are loaded at runtime by js/script.js; products come from js/productos.js for catalogo.html and the landing pages.
- The h1/h2 hierarchy and the text of every h1 and h2 stay as they are on the redesigned pages; every `<p>` is paraphrased.
- Scope of the redesign: index.html, catalogo.html and the six pages in landing-pages/. The 25 service pages only take the new name and colours.

## Brand Commitments

- Name: Atelier Vergara (replaces Flores del Encanto and the earlier Susi Lop).
- Colours: wine red (#6d1a2c) and gold (#c9a45c) on a warm white ground, chosen by the client on 2026-11-18 over black and gold and green and gold. Square corners on photos, cards and buttons. The look must read luxurious but must not suggest high prices.
- No logo exists yet: the brand is a new typographic wordmark.

## Evidence on Hand

- 35 product photographs of the florist's own arrangements on a dusty-pink studio backdrop (assets/1.png–35.png, web versions assets/foto1.webp–foto35.webp). The card visible in the photos still shows the old Flores del Encanto logo.
- Client-stated figures, confirmed by the user as real and verifiable on Google: more than 500 deliveries, 4.9 stars from 127 reviews.
- Real catalogue data: names, contents, prices and categories of the 35 arrangements (js/productos.js).
- Google Maps embed of the business listing (components/contact-info.html).
- assets/cliente1–12.webp: customers receiving their orders, confirmed by the user as this florist's own deliveries.
- Not the client's own and not to be presented as such: assets/wallpaper.mp4 (generic clip of a girl with flowers).
- Absent: no review texts, no published street address or barrio, no photos of the workshop or the team, no logo, no list of payment methods, no meaning stated for the name "Vergara".

## Product Principles

- Every arrangement is shown with its real photo, contents and price, never hidden behind "consultar".
- The way to order is always one tap away and arrives at WhatsApp already written.
- Luxury comes from finish and care, not from distance or price signalling.
- Nothing is claimed that the client has not confirmed.

## Accessibility & Inclusion

Mobile first on mid-range phones over mobile data; WCAG AA contrast on a dark page, visible focus, 44 px touch targets, reduced-motion support.
