// ============================================================
// PROJECTS.js — Project photo gallery data
// ============================================================
// Separate from CONFIG.js on purpose: this file updates far more
// often (new completed jobs) than the rest of the site config, and
// is written automatically by the Houzflow asset pipeline's publish
// step once that's live. Keeping it isolated means a malformed write
// here can never break the rest of the site (header, services, etc).
//
// Format is a plain global array — intentionally NOT nested in an
// object — so the publish step can write this whole file with simple
// string templating (assign the JSON-stringified array to a single
// top-level array variable). No AST-aware JS writer or bundler
// required on the Worker side.
//
// Field notes:
//   alt          — descriptive alt text (from the pipeline's alt_text
//                  field). Never reuse `title` here — title is a project
//                  label, alt should describe what's actually in the photo.
//   width/height — explicit intrinsic dimensions (post-Photon-resize),
//                  prevents layout shift (CLS) while the image loads.
//   featured     — true = eligible to show in the home page "Recent Work"
//                  section (capped at 8–9 there). Lets curation/approval
//                  decide what's a homepage-worthy shot vs. just-the-gallery.
//   publishedAt  — optional, supports freshness sorting later.
// ============================================================

const PROJECTS = [
  {
    title: "4-Bedroom Home — Full Interior",
    category: "Interior",
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
    alt: "Freshly painted living room and hallway interior with crisp white trim and warm neutral walls",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-06-10",
  },
  {
    title: "Victorian Exterior — Full Repaint",
    category: "Exterior",
    img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
    alt: "Restored Victorian home exterior with fresh multi-tone paint highlighting trim and architectural details",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-06-02",
  },
  {
    title: "Kitchen Cabinet Transformation",
    category: "Cabinets",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    alt: "Refinished kitchen cabinets in a soft white finish with new hardware",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-05-22",
  },
  {
    title: "12-Unit Corridor Repaint",
    category: "Commercial",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    alt: "Freshly painted apartment corridor finished with a durable commercial-grade coating",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-05-14",
  },
  {
    title: "Cedar Deck — Oil Stain Restoration",
    category: "Deck & Fence",
    img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80",
    alt: "Restored cedar deck with a rich oil stain finish and weatherproof coating",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-05-05",
  },
  {
    title: "Office Suite — Low-VOC Repaint",
    category: "Commercial",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    alt: "Repainted office suite walls using low-VOC paint for a fresh, odor-free finish",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-04-27",
  },
  {
    title: "Craftsman Bungalow — Exterior Repaint",
    category: "Exterior",
    img: "https://images.unsplash.com/photo-1558618047-f4e60cef8b3e?w=800&q=80",
    alt: "Craftsman-style bungalow exterior repainted with a classic color palette and detailed trim work",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-04-18",
  },
  {
    title: "Open-Plan Living — Colour Consultation",
    category: "Interior",
    img: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=80",
    alt: "Open-plan living and dining space painted following a custom color consultation",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-04-09",
  },
];
