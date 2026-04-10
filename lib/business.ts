// Summit Home Remodeling – Business Information
// Siloam Springs, AR 72761

export const BUSINESS = {
  name: "Summit Home Remodeling",
  tagline: "Crafting Exceptional Outdoor Spaces Across Northwest Arkansas",
  shortTagline: "Your Landscape, Elevated.",
  phone: "(479) 524-8830",
  phoneHref: "tel:+14795248830",
  email: "info@summithomeremodeling.com",
  address: {
    street: "418 S Mount Olive St",
    city: "Siloam Springs",
    state: "AR",
    zip: "72761",
    full: "418 S Mount Olive St, Siloam Springs, AR 72761",
  },
  hours: {
    weekdays: "Mon – Fri: 7:00 AM – 6:00 PM",
    saturday: "Saturday: 8:00 AM – 4:00 PM",
    sunday: "Sunday: Closed",
    display: "Mon–Fri 7am–6pm · Sat 8am–4pm",
  },
  social: {
    facebook: "https://facebook.com/summithomeremodeling",
    instagram: "https://instagram.com/summithomeremodeling",
    google: "https://g.page/summithomeremodeling",
  },
  url: "https://www.summithomeremodeling.com",
  founded: "2011",
  license: "AR Contractor #0242187",
  geo: {
    lat: 36.1881,
    lng: -94.5405,
  },
} as const;

export const SERVICE_AREAS = [
  {
    name: "Siloam Springs",
    city: "Siloam Springs",
    state: "AR",
    zip: "72761",
    distance: "0",
    isHq: true,
    description:
      "Our home base — we know every neighborhood in Siloam Springs.",
    lat: 36.1881,
    lng: -94.5405,
  },
  {
    name: "Gentry",
    city: "Gentry",
    state: "AR",
    zip: "72734",
    distance: "11",
    isHq: false,
    description:
      "Fast-growing community with expanding residential neighborhoods.",
    lat: 36.2676,
    lng: -94.4902,
  },
  {
    name: "Decatur",
    city: "Decatur",
    state: "AR",
    zip: "72722",
    distance: "14",
    isHq: false,
    description: "Rural and suburban properties with expansive yards.",
    lat: 36.3365,
    lng: -94.461,
  },
  {
    name: "Gravette",
    city: "Gravette",
    state: "AR",
    zip: "72736",
    distance: "17",
    isHq: false,
    description: "Charming town with strong community pride in outdoor spaces.",
    lat: 36.4221,
    lng: -94.453,
  },
  {
    name: "Cave Springs",
    city: "Cave Springs",
    state: "AR",
    zip: "72718",
    distance: "22",
    isHq: false,
    description:
      "Rapid growth area with new construction and established homes.",
    lat: 36.3604,
    lng: -94.2338,
  },
  {
    name: "Bentonville",
    city: "Bentonville",
    state: "AR",
    zip: "72712",
    distance: "25",
    isHq: false,
    description:
      "The crown jewel of NW Arkansas — premium properties and high standards.",
    lat: 36.3729,
    lng: -94.2088,
  },
] as const;

export const SERVICES = [
  {
    id: "lawn-care",
    name: "Lawn Care & Maintenance",
    shortName: "Lawn Care",
    description:
      "Year-round turf management including mowing, edging, fertilization, aeration, and weed control. We build lawn programs tailored to Arkansas soil conditions and seasonal patterns.",
    icon: "Leaf",
    image: "/images/service-1.png",
    features: [
      "Weekly & bi-weekly mowing",
      "Precision edging & trimming",
      "Fertilization programs",
      "Weed & pest control",
      "Aeration & overseeding",
      "Soil amendment",
    ],
  },
  {
    id: "hardscaping",
    name: "Hardscaping & Outdoor Living",
    shortName: "Hardscaping",
    description:
      "Custom patios, natural stone pathways, retaining walls, and outdoor structures that extend your living space. Every project is engineered for the Ozark terrain.",
    icon: "Layers",
    image: "/images/service-2.png",
    features: [
      "Natural stone patios",
      "Retaining walls",
      "Decorative walkways",
      "Fire pit areas",
      "Landscape boulders",
      "Dry creek beds",
    ],
  },
  {
    id: "irrigation",
    name: "Irrigation Systems",
    shortName: "Irrigation",
    description:
      "Smart irrigation design, installation, and maintenance that eliminates over-watering while keeping your landscape thriving — even during Arkansas summer heat.",
    icon: "Droplets",
    image: "/images/service-3.png",
    features: [
      "Smart controller installation",
      "Drip & spray systems",
      "Spring startups",
      "Winterization blowouts",
      "Backflow prevention",
      "Leak detection & repair",
    ],
  },
  {
    id: "garden-design",
    name: "Garden & Planting Design",
    shortName: "Garden Design",
    description:
      "Professionally designed planting plans featuring native Arkansas species, ornamental grasses, perennials, and trees selected for our climate and your specific conditions.",
    icon: "Sprout",
    image: "/images/service-4.png",
    features: [
      "Native plant design",
      "Tree & shrub installation",
      "Seasonal color rotations",
      "Mulching & bed refresh",
      "Ornamental grass design",
      "Wildlife-friendly landscapes",
    ],
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Linda Hartwell",
    location: "Siloam Springs, AR",
    rating: 5,
    text: "Summit completely transformed our backyard. The stone patio and retaining wall they built are absolutely stunning — and they finished two days ahead of schedule. Best landscaping company in Benton County.",
    date: "2025-09-15",
  },
  {
    name: "Marcus & Diane Pryor",
    location: "Bentonville, AR",
    rating: 5,
    text: "Our irrigation system used to be a disaster — dead zones, flooded areas, $300 water bills. Summit redesigned everything, installed a smart controller, and our bills dropped by 40%. Worth every penny.",
    date: "2025-08-03",
  },
  {
    name: "James Kowalski",
    location: "Gentry, AR",
    rating: 5,
    text: "Three years of lawn service and I still feel the same as day one — reliable, detailed, and they actually care. They noticed a grub problem before it got bad and handled it same week.",
    date: "2025-10-21",
  },
  {
    name: "Sarah Newcomb",
    location: "Cave Springs, AR",
    rating: 5,
    text: "I called five landscapers. Summit was the only one who came with photos of similar projects in our neighborhood and a written maintenance plan. Easy choice. The results back it up.",
    date: "2025-07-18",
  },
] as const;
