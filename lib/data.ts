export const siteConfig = {
  name: "Solace Bay",
  fullName: "Solace Bay Resort & Spa",
  tagline: "Cliffside serenity on Bali’s southern coast",
  description:
    "Solace Bay Resort & Spa is a cliffside hideaway in Uluwatu, Bali — quiet ocean-view villas, an infinity pool above the surf, a seaside spa and unhurried days by the sea.",
  // Set NEXT_PUBLIC_SITE_URL once you have a custom domain; on Vercel the production domain is picked up automatically.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  phoneDisplay: "+62 361 555 0123",
  phoneHref: "+623615550123",
  whatsappNumber: "6281234567890",
  whatsappDisplay: "+62 812 3456 7890",
  email: "stay@solacebay.com",
  address: "Jalan Pantai Suluban No. 8, Pecatu, Uluwatu, Bali 80361, Indonesia",
  mapEmbed:
    "https://www.google.com/maps?q=Suluban+Beach,+Uluwatu,+Bali&z=14&output=embed",
  established: 2012,
};

export function waLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/rooms", label: "Rooms" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const socials = [
  { name: "Instagram", href: "https://instagram.com/solacebay", icon: "instagram" as const },
  { name: "Facebook", href: "https://facebook.com/solacebay", icon: "facebook" as const },
  { name: "X", href: "https://x.com/solacebay", icon: "x" as const },
  { name: "YouTube", href: "https://youtube.com/@solacebay", icon: "youtube" as const },
];

export type Img = { src: string; w: number; h: number; alt: string };

export const img = {
  hero: {
    src: "/416527700.jpg",
    w: 1024,
    h: 667,
    alt: "Golden hour over the bay at Solace Bay Resort",
  } satisfies Img,
  square: {
    src: "/416527729.jpg",
    w: 768,
    h: 768,
    alt: "Celebrations by the sea at Solace Bay",
  } satisfies Img,
  portraits: [
    { src: "/510226618.jpg", w: 614, h: 768, alt: "Morning light in the garden pavilion" },
    { src: "/510226621.jpg", w: 614, h: 768, alt: "Quiet corners and soft linen at Solace Bay" },
    { src: "/510226867.jpg", w: 614, h: 768, alt: "Stillness at the Solace spa" },
    { src: "/510227718.jpg", w: 614, h: 768, alt: "Afternoons that drift slowly by the sea" },
    { src: "/510227719.jpg", w: 614, h: 768, alt: "Sunrise practice above the cliffs" },
    { src: "/567156961.jpg", w: 614, h: 768, alt: "A window to the turquoise bay" },
  ] satisfies Img[],
  landscapes: [
    { src: "/743032663.jpg", w: 960, h: 768, alt: "The horizon pool at midday" },
    { src: "/743033887.jpg", w: 960, h: 768, alt: "Firelit dinners at Tide & Ember restaurant" },
    { src: "/796826955.jpg", w: 960, h: 768, alt: "Days spent exploring the island" },
  ] satisfies Img[],
};

export type Room = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  size: number;
  guests: number;
  bed: string;
  view: string;
  image: Img;
  amenities: string[];
};

export const rooms: Room[] = [
  {
    slug: "garden-pavilion",
    name: "Garden Pavilion",
    tagline: "Beneath the frangipani trees",
    description:
      "A soft-footed hideaway wrapped in heliconia and frangipani, where mornings begin with birdsong and coffee on your private terrace.",
    price: 180,
    size: 48,
    guests: 2,
    bed: "King bed",
    view: "Tropical gardens",
    image: img.portraits[0],
    amenities: ["Rain shower", "Private terrace", "Breakfast included", "Fast Wi-Fi", "AC & ceiling fan", "Evening turndown"],
  },
  {
    slug: "ocean-view-deluxe",
    name: "Ocean View Deluxe",
    tagline: "Wake to the sound of tide",
    description:
      "Floor-to-ceiling glass frames the Indian Ocean from your bed. A generous balcony invites long, slow sunsets with nothing planned.",
    price: 240,
    size: 58,
    guests: 2,
    bed: "King bed",
    view: "Indian Ocean",
    image: img.portraits[1],
    amenities: ["Ocean balcony", "Bathtub for two", "Breakfast included", "Minibar", "Blackout curtains", "Nespresso machine"],
  },
  {
    slug: "pool-villa",
    name: "Pool Villa",
    tagline: "Your own quiet horizon",
    description:
      "A private plunge pool dissolves into greenery beyond your deck. Swim before breakfast, read until dusk — this villa keeps your secrets.",
    price: 380,
    size: 95,
    guests: 2,
    bed: "King bed + daybed",
    view: "Private garden & pool",
    image: img.portraits[2],
    amenities: ["Plunge pool", "Outdoor rain shower", "Sun loungers", "Breakfast included", "Bose speaker", "In-villa dining"],
  },
  {
    slug: "family-residence",
    name: "Family Residence",
    tagline: "Room to be together, room to breathe",
    description:
      "Two connected bedrooms, a shaded courtyard and a games nook — designed for slow family days that end with stories on the terrace.",
    price: 520,
    size: 120,
    guests: 5,
    bed: "2 kings + 1 twin",
    view: "Gardens & pool access",
    image: img.portraits[3],
    amenities: ["Two bedrooms", "Courtyard play area", "Kids amenities", "Kitchenette", "Laundry service", "Connecting doors"],
  },
  {
    slug: "cliffside-suite",
    name: "Cliffside Suite",
    tagline: "Suspended between sky and sea",
    description:
      "Perched on the cliff edge with a panoramic deck, this suite is our love letter to the horizon — best experienced barefoot, at golden hour.",
    price: 640,
    size: 110,
    guests: 2,
    bed: "Emperor king",
    view: "Panoramic cliff & ocean",
    image: img.portraits[4],
    amenities: ["Panoramic deck", "Telescope & binoculars", "Soaking tub", "Champagne welcome", "Private bar", "Priority spa bookings"],
  },
  {
    slug: "beachfront-villa",
    name: "Beachfront Villa",
    tagline: "Steps from the shoreline",
    description:
      "Sand at your doorstep and the reef just offshore. Come home salty, rinse under the stars, fall asleep to the waves below your deck.",
    price: 750,
    size: 140,
    guests: 4,
    bed: "2 king beds",
    view: "Direct beach access",
    image: img.portraits[5],
    amenities: ["Beach gate access", "Outdoor bathroom", "Private cabana", "Snorkel gear", "Sunset canapés", "Dedicated host"],
  },
];

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  icon: "lotus" | "waves" | "utensils" | "leaf" | "compass" | "sparkles";
  image: Img;
  features: string[];
  meta: string;
};

export const services: Service[] = [
  {
    slug: "spa",
    title: "Solace Spa & Wellness",
    blurb:
      "Seaside pavilions where Balinese healing traditions meet warm coconut oil, sea air and the hush of breaking waves.",
    icon: "lotus",
    image: img.portraits[2],
    features: ["Balinese massage & healing rituals", "Oceanfront treatment pavilions", "Couples journey suite", "Herbal steam & cold plunge"],
    meta: "Open daily · 9:00 – 21:00",
  },
  {
    slug: "pool",
    title: "Cliffside Infinity Pool",
    blurb:
      "Twenty-eight metres of still water that seems to pour into the ocean itself. The island’s gentlest place to do nothing.",
    icon: "waves",
    image: img.landscapes[0],
    features: ["28-metre horizon edge", "Swim-up daybeds & cabanas", "Poolside tapas & mocktails", "Adults-only dusk swim"],
    meta: "Open daily · 7:00 – 19:00",
  },
  {
    slug: "dining",
    title: "Tide & Ember Restaurant",
    blurb:
      "Ocean-to-table cooking over native hardwood fire — the morning’s catch, garden vegetables and sunsets that overstay their welcome.",
    icon: "utensils",
    image: img.landscapes[1],
    features: ["Fire-grilled local catch", "Sunset chef’s table", "Garden vegetarian & vegan menu", "Cellar of small-island wines"],
    meta: "Breakfast 7–11 · Dinner 18–22",
  },
  {
    slug: "yoga",
    title: "Sunrise Yoga Pavilion",
    blurb:
      "An open-air shala on the cliff top where practice begins in half-light and ends with the whole bay turning gold.",
    icon: "leaf",
    image: img.portraits[4],
    features: ["Daily guided sessions", "Breathwork & meditation", "Private one-on-one practice", "All levels welcomed"],
    meta: "Daily · 6:30 & 17:00",
  },
  {
    slug: "excursions",
    title: "Island Excursions",
    blurb:
      "Hidden beaches, temple sunsets and reef gardens — our concierge team maps the quiet corners most visitors never find.",
    icon: "compass",
    image: img.landscapes[2],
    features: ["Uluwatu temple sunset walks", "Snorkelling at Blue Point", "Hidden-beach picnics", "Rice-terrace cycling"],
    meta: "On request · Concierge desk",
  },
  {
    slug: "events",
    title: "Weddings & Celebrations",
    blurb:
      "Cliff-top ceremonies, barefoot dinners on the sand and a team that treats your day like their own quiet masterpiece.",
    icon: "sparkles",
    image: img.square,
    features: ["Cliff-top ceremony decks", "Barefoot beach dinners", "Bespoke florals & décor", "Full planning concierge"],
    meta: "Enquire for proposals",
  },
];

export const stats = [
  { value: 45, suffix: "", label: "Villas & Pavilions" },
  { value: 12, suffix: "", label: "Acres of Gardens" },
  { value: 98, suffix: "%", label: "Guest Satisfaction" },
  { value: 320, suffix: "", label: "Sunny Days a Year" },
];

export const testimonials = [
  {
    quote:
      "We arrived tired from the world and left completely renewed. The quiet here isn’t empty — it’s full of birdsong, sea air and kindness.",
    name: "Amelia R.",
    origin: "Melbourne, Australia",
  },
  {
    quote:
      "Our pool villa felt like a private world. Watching the sunset from the water, coconut in hand — we’re still talking about it a year later.",
    name: "Daniel & Priya",
    origin: "London, United Kingdom",
  },
  {
    quote:
      "The sunrise yoga pavilion is worth the trip alone. Staff remembered our names, our coffee order, even our favourite corner of the beach.",
    name: "Sofía M.",
    origin: "Madrid, Spain",
  },
  {
    quote:
      "Impeccable service without ever feeling formal. This is the kind of place you end up measuring every other holiday against.",
    name: "Jonas K.",
    origin: "Berlin, Germany",
  },
];

export const faqs = [
  {
    q: "How do we get to Solace Bay?",
    a: "We are around 45 minutes from Ngurah Rai International Airport. A complimentary private transfer is included with every stay — share your flight details when booking and your driver will be waiting at arrivals with a cold towel and water.",
  },
  {
    q: "Is breakfast included in the rates?",
    a: "Yes. Every stay begins with a full breakfast at Tide & Ember — tropical fruit, fresh-baked bread, eggs any way, and single-origin Balinese coffee, served until 11:00 so mornings can stay slow.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Reservations may be cancelled free of charge up to 14 days before arrival. Within 14 days, one night’s stay is retained; within 72 hours, the full amount. We always try to be flexible in case of genuine emergencies.",
  },
  {
    q: "Can you cater to dietary requirements?",
    a: "Happily. Our kitchen regularly prepares vegan, gluten-free and allergy-aware menus. Let us know in your inquiry form or WhatsApp message and the chef will take care of everything before you arrive.",
  },
  {
    q: "Is the resort suitable for children?",
    a: "Very much so. The Family Residence was designed for it, kids under 12 stay free, and our Little Drifters club runs supervised beach and craft sessions daily.",
  },
];

export const galleryItems: Img[] = [
  img.hero,
  ...img.portraits,
  img.square,
  ...img.landscapes,
];
