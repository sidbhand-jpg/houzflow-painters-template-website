// ============================================================
// SITE CONFIG — Edit this file to update your entire website
// ============================================================

const CONFIG = {
  // ── Business Identity ──────────────────────────────────────
  businessName: "Apex Painting Co.",
  tagline: "Your City's Most Trusted Residential & Commercial Painters",
  phone: "(000) 000-0000",
  phoneRaw: "0000000000",
  email: "hello@apexpainting.com",
  city: "Your City, ST",
  state: "Your State",
  stateShort: "ST",
  address: "Your Address, City, ST 00000",
  licenseNumber: "YOUR-LICENSE-NUMBER",

  // ── Branding ─────────────────────────────────────────────
  // Forest green + warm amber — craft / quality / trust
  colors: {
    primary: "#1B4332",    // Deep forest green — professionalism / trust
    secondary: "#0f192b",  // Dark slate — strength / depth
  },

  // ── Social Links ─────────────────────────────────────────
  // Leave any URL empty ("") to hide that icon in the footer
  social: {
    facebook:  "",
    instagram: "",
    youtube:   "",
    tiktok:    "",
    linkedin:  "",
    yelp:      "",
    houzz:     "",
    nextdoor:  "",
  },

  // ── Reviews Badge ────────────────────────────────────────
  // Paste your Google Business Profile review link here.
  // Leave empty ("") to hide the "Read Our Reviews on Google" badge.
  googleReviewsUrl: "",

  // ── Social Proof ─────────────────────────────────────────
  rating: "4.9",
  reviewCount: 0,
  yearsExperience: 0,
  projectsCompleted: "0+",
  satisfactionRate: "98%",

  // ── Webhook ───────────────────────────────────────────────
  webhookUrl: "",

  // ── Meta Pixel / Conversions API ───────────────────────────
  // Paste your Meta Pixel ID here (16-digit number from Events Manager).
  // Leave empty ("") to disable Pixel + attribution tracking site-wide.
  metaPixelId: "",

  // ── Hero Section ─────────────────────────────────────────
  hero: {
    headline: "Paint That Lasts. Work You Can Trust.",
    subheadline: "Professional interior and exterior painting for homes and businesses. Meticulous prep, premium paints, and a finish that turns heads — guaranteed.",
    ctaPrimary: "Get My Free Estimate",
    ctaSecondary: "See Our Work",
    heroImage: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=75&fm=webp&auto=format",
  },

  // ── Services ─────────────────────────────────────────────
  services: [
    {
      slug: "interior-painting",
      name: "Interior Painting",
      desc: "Flawless walls, crisp trim, and zero mess — in and out before you know it. We protect everything, paint everything, and leave nothing behind.",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=75&fm=webp&auto=format",
      longDesc: "Your home's interior deserves more than a quick coat slapped over old paint. We patch holes, sand rough spots, tape every edge, and apply two coats of premium paint — Benjamin Moore, Sherwin-Williams, or whatever you love. Our crew works clean: furniture moved and covered, floors protected, hardware taped. When we leave, all you'll notice is the fresh colour.",
      benefits: [
        "Full surface prep — patching, sanding, priming",
        "Premium paints in any sheen or colour",
        "Furniture moved and carefully protected",
        "Zero-mess drop cloth and tape system",
        "Two-coat coverage as standard",
        "Touch-up kit left behind on every job",
      ],
      faqs: [
        { q: "How long does an interior painting project take?", a: "A single room typically takes one day. A full house interior ranges from 3–7 days depending on size and scope. We give you a room-by-room schedule so you're never in the dark." },
        { q: "Do I need to move my furniture?", a: "We move and protect all standard furniture. We just ask that you remove small items, breakables, and personal belongings before we arrive." },
        { q: "Can you match an existing paint colour?", a: "Yes. Bring us a chip or we can scan your wall with a colour spectrophotometer and mix an exact match at any paint store." },
        { q: "What paint brands do you use?", a: "We work with Benjamin Moore, Sherwin-Williams, and Behr Premium. We'll recommend the right product for the surface and finish you want." },
      ],
    },
    {
      slug: "exterior-painting",
      name: "Exterior Painting",
      desc: "Curb appeal that lasts years, not months. Power washed, primed, and painted with weather-resistant coatings built for every season.",
      image: "https://images.unsplash.com/photo-1558618047-f4e60cef8b3e?w=800&q=75&fm=webp&auto=format",
      longDesc: "Exterior paint takes a beating every year — UV, rain, freeze-thaw cycles, and humidity. We don't shortcut the prep. Every surface is power washed, scraped, sanded, and primed before a single drop of topcoat touches it. We use 100% acrylic exterior paints rated for your climate — the same products that stand up on commercial buildings.",
      benefits: [
        "Full pressure wash and dry before any painting",
        "Scraping, sanding, and caulking all gaps",
        "Spot primer on all bare wood and repaired areas",
        "100% acrylic exterior paint for maximum durability",
        "Colour consultation included at no charge",
        "Written warranty on every exterior project",
      ],
      faqs: [
        { q: "How long does exterior paint last?", a: "With proper prep and quality product, 8–12 years on siding is realistic. We use exterior acrylics rated for your region. Trim may need refreshing sooner depending on sun exposure." },
        { q: "When can you paint — what weather is okay?", a: "We paint in temperatures above 50°F with no rain in the forecast for 24 hours. We schedule around the weather so your finish cures correctly." },
        { q: "Do you paint trim and doors too?", a: "Everything is included — siding, trim, fascia, soffits, doors, shutters, and gutters. We give you one cohesive exterior quote, not a confusing line-by-line breakdown." },
        { q: "Will you repair rotted wood before painting?", a: "Yes — we identify and replace rotted boards or use epoxy wood filler for smaller sections before we paint. You'll get a detailed line item for any repairs during the estimate." },
      ],
    },
    {
      slug: "cabinet-painting",
      name: "Cabinet Painting & Refinishing",
      desc: "Transform your kitchen without the cost of a remodel. Factory-smooth finish, any colour, done in days not weeks.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=75&fm=webp&auto=format",
      longDesc: "Kitchen cabinet painting is one of the highest-ROI upgrades you can make. We spray every door and drawer face off-site for a factory-grade finish, then re-hang everything level and true. The result looks like new cabinets for a fraction of the cost. We use cabinet-specific alkyd and waterborne coatings that resist grease, moisture, and the daily grind of a real kitchen.",
      benefits: [
        "Doors removed, sanded, and sprayed off-site",
        "Grease and contaminant removal before any coating",
        "Grain filler applied to wood for a smooth factory finish",
        "Catalysed waterborne topcoat — chip and scratch resistant",
        "All hardware removed, cleaned, and re-installed",
        "Kitchen typically back in use within 3 days",
      ],
      faqs: [
        { q: "Is cabinet painting worth it vs. replacing?", a: "For most kitchens, absolutely. Cabinet painting runs 20–30% of the cost of new cabinets and can add significant resale value. The finish we apply is durable enough to last 10+ years with normal use." },
        { q: "Can you paint laminate or previously painted cabinets?", a: "Yes — with the right adhesion primer and prep. We assess your cabinets during the free estimate and recommend the correct system for your specific material." },
        { q: "Will my kitchen be usable during the project?", a: "We remove and return doors in stages so you're never without a kitchen entirely. The whole process typically runs 3–4 days from first day to re-hang." },
        { q: "What colours work best for cabinets?", a: "We'll bring a full colour deck and discuss your counters, flooring, and lighting. Classic whites (Benjamin Moore Chantilly Lace, SW Alabaster) and muted greens and blues are very popular — but it's entirely your call." },
      ],
    },
    {
      slug: "commercial-painting",
      name: "Commercial Painting",
      desc: "Offices, retail, warehouses, and multi-family properties. Fast-turnaround work scheduled around your business hours.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=75&fm=webp&auto=format",
      longDesc: "Commercial painting has different demands from residential — tighter timelines, higher square footage, tenant schedules, and stricter safety requirements. We run multi-crew commercial projects and schedule work evenings, weekends, and phased by floor so your business keeps running. We're fully insured and carry certificates of insurance in whatever format your property manager needs.",
      benefits: [
        "Multi-crew capacity for large square footage",
        "After-hours and weekend scheduling available",
        "Phased work plans to minimise business disruption",
        "Low-VOC and zero-VOC options for occupied spaces",
        "Full COI on request — any format required",
        "Detailed written scope and change order process",
      ],
      faqs: [
        { q: "Can you paint while our office is occupied?", a: "Yes — we use zero-VOC paints and schedule room-by-room so staff can work in adjacent areas. We ventilate during and after application to clear any odour." },
        { q: "Do you handle multi-family and apartment buildings?", a: "Yes. We regularly paint common areas, corridors, unit turns, and building exteriors. We can coordinate directly with your property manager." },
        { q: "What's your process for large commercial bids?", a: "We schedule a walkthrough, provide a detailed written scope with per-area pricing, and can phase the work to match your budget or occupancy schedule." },
      ],
    },
    {
      slug: "deck-fence-staining",
      name: "Deck & Fence Staining",
      desc: "Restore weathered wood or give it a rich new colour. We clean, brighten, and seal — protecting your investment for years.",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=75&fm=webp&auto=format",
      longDesc: "Wood decks and fences are constantly exposed to the elements. Without proper maintenance, they gray out, crack, and deteriorate fast. We strip old failing stain, clean and brighten the wood, and apply a penetrating oil or film-forming stain depending on the wood type and the look you want. The result: rich, protected wood that holds its colour season after season.",
      benefits: [
        "Power washing and wood brightener treatment",
        "Old stain stripped if peeling or flaking",
        "Penetrating oil stains for natural wood grain",
        "Film-forming stains for maximum colour saturation",
        "Sprayed and back-brushed for full penetration",
        "Transparent to solid — any opacity available",
      ],
      faqs: [
        { q: "How often does a deck need to be re-stained?", a: "Penetrating oils typically last 2–4 years. Film-forming stains last 4–6 years. UV exposure and foot traffic are the biggest variables. We'll give you a maintenance timeline at the end of the job." },
        { q: "Can you stain over an existing stain?", a: "It depends on the condition. If the old stain is in good shape and not peeling, we can apply a compatible stain over it. If it's failing, we strip to bare wood first for proper adhesion." },
        { q: "Do you do fences and pergolas too?", a: "Yes — fences, pergolas, privacy screens, garden beds, and any exterior wood structure. We quote everything in one visit." },
      ],
    },
    {
      slug: "colour-consultation",
      name: "Colour Consultation",
      desc: "Stuck choosing colours? Our on-site consultants help you pick a palette that works with your light, furnishings, and style.",
      image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=75&fm=webp&auto=format",
      longDesc: "Colour is personal, and it looks different on a chip than it does on your wall. Our colour consultants come to your home or business with full fan decks, large-format sample boards, and years of experience with how colours read in different lighting conditions. We'll create a room-by-room colour plan that works together, fits your style, and you'll love for years.",
      benefits: [
        "In-home visit with full paint brand fan decks",
        "Large 12×12\" sample boards in your top choices",
        "Room-by-room colour scheme with flow recommendations",
        "Digital room renders available on request",
        "Consultation fee credited toward any painting project",
        "Suitable for new builds, renovations, and restyls",
      ],
      faqs: [
        { q: "How does a colour consultation work?", a: "We visit your home, look at your existing furnishings, flooring, light sources, and style. We narrow down choices from the full brand deck, paint large samples on your walls, and put together a written colour plan." },
        { q: "Is the consultation fee credited toward my project?", a: "Yes — the full consultation fee is credited when you book any painting project with us within 60 days." },
        { q: "Can you help with exterior colours too?", a: "Absolutely. We consider your roof colour, hardscaping, neighbourhood context, and any HOA guidelines to find an exterior palette you're proud to come home to." },
      ],
    },
  ],

  // ── Google Maps Embed ─────────────────────────────────────
  // Paste a full Google Maps embed URL below to show the service area map.
  // To get one: maps.google.com → search your area → Share → Embed a map → copy the src URL.
  // Leave as "" to hide the map.
  googleMapsEmbedUrl: "",

  // ── Service Areas ─────────────────────────────────────────
  serviceAreas: [
    { slug: "your-city", name: "Your City", county: "Your County" },
    { slug: "city-two", name: "City Two", county: "Your County" },
    { slug: "city-three", name: "City Three", county: "Your County" },
    { slug: "city-four", name: "City Four", county: "Your County" },
    { slug: "city-five", name: "City Five", county: "Your County" },
    { slug: "city-six", name: "City Six", county: "Your County" },
  ],

  // ── Testimonials ─────────────────────────────────────────
  testimonials: [
    {
      name: "Rachel T.",
      location: "Your City",
      text: "They painted our entire house interior over four days — walls, trim, ceilings, the works. Everything was perfectly taped, floors were covered, and the finish is absolutely flawless. We'd hire them again without hesitation.",
      stars: 5,
      service: "Interior Painting",
    },
    {
      name: "Mark & Lisa C.",
      location: "Your City",
      text: "Our home exterior was badly faded and peeling in spots. They prepped everything properly, replaced a few rotted boards, and the final result looks like a brand new house. Neighbours keep stopping to ask who we used.",
      stars: 5,
      service: "Exterior Painting",
    },
    {
      name: "James W.",
      location: "Your City",
      text: "Cabinet painting was the best money we ever spent on our kitchen. Sprayed to a factory finish, everything re-hung level and perfectly aligned. It cost a quarter of new cabinets and looks even better.",
      stars: 5,
      service: "Cabinet Painting",
    },
    {
      name: "Sandra M.",
      location: "Your City",
      text: "We have a 12-unit building and they handled the full interior repaint on a tight timeline. Phased the work perfectly, zero complaints from tenants, and the corridors look brand new. Reliable and professional.",
      stars: 5,
      service: "Commercial Painting",
    },
  ],

  // ── Process Steps ─────────────────────────────────────────
  processSteps: [
    { title: "Free On-Site Estimate", desc: "We walk the project with you, assess every surface, and give you a detailed written quote — broken down by area with zero surprise add-ons." },
    { title: "Surface Prep", desc: "Power washing, scraping, patching, caulking, and priming. The paint is only as good as the surface underneath it." },
    { title: "Professional Application", desc: "Two coats of premium paint, meticulously cut in and rolled or sprayed by trained painters who care about the corners." },
    { title: "Final Walkthrough", desc: "We go room by room with you before we call the job done. Touch-ups handled on the spot. We don't leave until you're happy." },
  ],

  // ── FAQs ─────────────────────────────────────────────────
  faqs: [
    { q: "What paint brands do you use?", a: "We work with Benjamin Moore, Sherwin-Williams, and Behr Premium. We'll recommend the right product for your surface — but if you have a preference or existing paint, just let us know." },
    { q: "Do I need to be home during the project?", a: "Not necessarily. Many clients give us a key and check in at the end of each day. We send a daily photo update so you always know where we are." },
    { q: "How long does an exterior job take?", a: "Most single-family exteriors take 3–5 days. We account for prep time and always schedule buffer days in case weather pushes us back." },
    { q: "Do you do repairs before painting?", a: "Yes — drywall patching, caulking, wood rot repair, and minor carpentry are all part of our prep process. Repairs are quoted separately as a line item so you know exactly what you're paying for." },
    { q: "Are you licensed and insured?", a: "Yes — fully licensed with $2M in general liability insurance. We can provide a certificate of insurance in any format your landlord, HOA, or property manager needs." },
    { q: "How do I pick a colour?", a: "We offer free colour consultation with every project. We bring fan decks, large sample boards, and the experience to help you pick something you'll love. The consultation is credited toward your project." },
    { q: "Do you offer a warranty?", a: "Yes — every project includes a written workmanship warranty. If the paint peels, drips, or fails due to our work, we come back and fix it at no charge." },
    { q: "What should I do to prepare before you arrive?", a: "Clear counters and shelves of small items, remove artwork from walls, and let us know about any pets. We handle the rest — furniture moving, floor protection, taping, everything." },
  ],

  // ── Portfolio Projects ────────────────────────────────────
  // Project photos moved to PROJECTS.js (sibling file) — see that file
  // for why: frequent updates + isolating a malformed write from the
  // rest of the site config.

  // ── Legal ─────────────────────────────────────────────────
  legal: {
    privacyPolicyDate: "May 1, 2025",
    termsDate: "May 1, 2025",
  },
};
