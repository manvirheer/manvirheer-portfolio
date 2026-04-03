export interface DayPlan {
  day: number
  date: string
  weekday: string
  title: string
  subtitle: string
  emoji: string
  heroImage: string
  vibe: string
  clothing: string
  driveTime?: string
  stops: Stop[]
  dining: string[]
  entertainment?: string[]
  photoSpots: string[]
  images: string[]
}

export interface Stop {
  name: string
  description: string
  cost?: string
  time?: string
  image?: string
  tip?: string
}

export interface Attraction {
  name: string
  location: string
  category: 'nature' | 'desert' | 'city' | 'disney' | 'coast' | 'drive'
  description: string
  cost?: string
  image?: string
}

export interface ChecklistItem {
  id: string
  task: string
  deadline: string
  category: 'car' | 'booking' | 'documents' | 'packing' | 'prep'
}

export interface BudgetItem {
  category: string
  low: number
  high: number
  note?: string
}

export const days: DayPlan[] = [
  {
    day: 1,
    date: 'April 24',
    weekday: 'Thursday',
    title: 'Surrey to Ashland',
    subtitle: 'The journey begins',
    emoji: '🚗',
    heroImage: '/trip/day1-hero.webp',
    vibe: 'Early morning energy. Coffee in hand, windows down through the Pacific Northwest. Green forests, misty mountains, the excitement of the open road. By evening you\'re in a charming Oregon Shakespeare town.',
    clothing: 'Comfortable driving clothes. Layers — BC and Oregon are cool (12-18°C). Light rain jacket. Comfy shoes for the Multnomah Falls walk.',
    driveTime: '~10-11 hrs',
    stops: [
      {
        name: 'Peace Arch Border Crossing',
        description: 'Cross early — 7 AM. Check CBP wait times app morning-of. Have passports, PR cards, and hotel confirmation ready.',
        time: '7:00 AM',
        image: '/trip/day1-border.webp',
        tip: 'Pacific Highway crossing often has shorter waits than Peace Arch.',
      },
      {
        name: 'Multnomah Falls',
        description: '620-foot waterfall — the tallest in Oregon. Short 15-min walk to the iconic Benson Bridge viewpoint. Free.',
        time: 'Afternoon',
        image: '/trip/day1-multnomah.webp',
        tip: 'The detour off I-84 takes about 1-1.5 hrs total including the stop. Worth every minute.',
      },
    ],
    dining: ['Standing Stone Brewing or Larks — Ashland (veggie-friendly)'],
    photoSpots: [
      'Benson Bridge at Multnomah Falls — the classic angle with the bridge framing the falls',
      'I-5 rest stops in Washington — Mount Rainier visible on clear days',
      'Downtown Ashland main street — cozy small-town evening vibes',
    ],
    images: [
      '/trip/day1-hero.webp',
      '/trip/day1-border.webp',
      '/trip/day1-multnomah.webp',
    ],
  },
  {
    day: 2,
    date: 'April 25',
    weekday: 'Friday',
    title: 'Ashland to Anaheim',
    subtitle: 'Through volcanic country',
    emoji: '🌋',
    heroImage: '/trip/day2-shasta.webp',
    vibe: 'The long haul through California. Start with dramatic mountain scenery at Siskiyou Pass, then the snowcapped Mt. Shasta appears like a dream. The landscape shifts from alpine to farmland to desert. By evening you\'re in warm, palm-tree SoCal.',
    clothing: 'Same comfortable driving layers. It\'ll warm up dramatically as you get to SoCal — you\'ll arrive to 22-25°C.',
    driveTime: '~11-12 hrs',
    stops: [
      {
        name: 'Mt. Shasta',
        description: 'Massive 14,179 ft snowcapped volcano visible right from I-5. Coffee at Seven Suns Coffee & Cafe in the town.',
        time: '8:00 AM',
        image: '/trip/day2-shasta.webp',
        tip: 'The mountain appears suddenly — keep your camera ready. Best views from the north side approaching.',
      },
    ],
    dining: ['Anaheim Packing District — food hall in a converted citrus packing house, lots of vegetarian options'],
    photoSpots: [
      'Mt. Shasta from the I-5 viewpoint — pull over at the rest area north of the mountain',
      'Siskiyou Pass summit — OR/CA border',
      'Anaheim Packing District at night — string lights and food hall vibes',
    ],
    images: [
      '/trip/day2-shasta.webp',
    ],
  },
  {
    day: 3,
    date: 'April 26',
    weekday: 'Saturday',
    title: 'San Diego Nature',
    subtitle: 'Flowers, cliffs, sea lions, sunset',
    emoji: '🌸',
    heroImage: '/trip/day3-hero.webp',
    vibe: 'A nature lover\'s dream day. Start in fields of flowers, move to dramatic coastal cliffs with sea lions, hike above the Pacific, and end watching the sun melt into the ocean from the cliffs. The most photogenic day of the trip.',
    clothing: 'Shorts or light pants, t-shirt, sun hat, sunscreen. Bring a light layer for evening at Sunset Cliffs. Comfortable hiking shoes for Torrey Pines (not flip flops).',
    stops: [
      {
        name: 'Carlsbad Flower Fields',
        description: '50 acres of ranunculus in peak bloom. Rows of color stretching to the ocean. Book tickets online — no walk-ups.',
        cost: '$27/person',
        time: '8:30 AM',
        image: '/trip/day3-hero.webp',
        tip: 'Go early morning for the best light and fewer people. The rows of color look incredible in photos.',
      },
      {
        name: 'La Jolla Cove',
        description: 'Sea lions lounging on rocks. Kayak through sea caves. Tide pools teeming with life. Stunning coastal cliffs.',
        time: '11:00 AM',
        image: '/trip/day3-lajolla.webp',
        tip: 'Check tide charts — low tide is best for tide pools. The sea lions at Children\'s Pool are usually there year-round.',
      },
      {
        name: 'Torrey Pines State Reserve',
        description: 'Coastal bluff hike with panoramic Pacific views. Razor Point and Yucca Point trails. One of the rarest pine species on Earth grows only here.',
        cost: '$10-25 parking',
        time: '2:30 PM',
        image: '/trip/day3-torreypines.webp',
        tip: 'Razor Point trail has the most dramatic cliff views. Stay behind the fences — the edges crumble.',
      },
      {
        name: 'Sunset Cliffs',
        description: 'Dramatic cliffs dropping into the Pacific. One of the best sunset spots on the entire West Coast. Free.',
        time: '5:30 PM',
        image: '/trip/day3-sunsetcliffs.webp',
        tip: 'Sunset is around 7:30 PM in late April. Get there 45 min early for the best spot. Bring a blanket to sit on.',
      },
    ],
    dining: [
      'Trilogy Sanctuary — rooftop vegan cafe with ocean views, La Jolla',
      'Kindred or Donna Jean — plant-based dinner, San Diego',
    ],
    photoSpots: [
      'Carlsbad Flower Fields — walk INTO the rows for dreamy couple photos with color stretching behind you',
      'La Jolla Cove — the overlook above the cove with sea lions below',
      'Torrey Pines — Razor Point overlook with the ocean and eroded sandstone cliffs',
      'Sunset Cliffs — silhouette photos against the golden sky at the cliff edge',
    ],
    images: [
      '/trip/day3-hero.webp',
      '/trip/day3-lajolla.webp',
      '/trip/day3-torreypines.webp',
      '/trip/day3-sunsetcliffs.webp',
    ],
  },
  {
    day: 4,
    date: 'April 27',
    weekday: 'Sunday',
    title: 'Joshua Tree + Palm Springs',
    subtitle: 'Desert to snow in 10 minutes',
    emoji: '🏜️',
    heroImage: '/trip/day4-hero.webp',
    vibe: 'Alien landscape. Nothing like this exists in BC. Twisted Joshua trees against boulder piles that look like another planet. Then a gondola ride from scorching desert floor to a snowy mountaintop in 10 minutes. Surreal contrast.',
    clothing: 'Light breathable clothes for the desert (it\'ll be 28-32°C). Bring a warm layer for the tramway summit (it drops 15-20°C up there). Closed-toe shoes for hiking. Sun hat essential. SUNSCREEN.',
    stops: [
      {
        name: 'Cholla Cactus Garden',
        description: 'Surreal field of "teddy bear" cholla cacti. In the morning light they glow golden — it looks like they\'re lit from within.',
        time: '8:30 AM',
        image: '/trip/day4-cholla.webp',
        tip: 'DO NOT TOUCH the cholla. The spines detach and embed in skin. They\'re beautiful but vicious. Morning light is magical here.',
      },
      {
        name: 'Skull Rock',
        description: 'Iconic skull-shaped rock formation. Short walk from the parking area.',
        time: '9:30 AM',
        image: '/trip/day4-skullrock.webp',
      },
      {
        name: 'Keys View',
        description: 'Panoramic view of Coachella Valley, the San Andreas Fault, and on clear days all the way to Mexico.',
        time: '10:30 AM',
        image: '/trip/day4-keysview.webp',
      },
      {
        name: 'Arch Rock Trail',
        description: '1.4 mile loop through boulders to a natural rock arch. Easy-moderate.',
        time: '11:30 AM',
        image: '/trip/day4-archrock.webp',
      },
      {
        name: 'Palm Springs Aerial Tramway',
        description: 'Rotating gondola from desert floor (hot!) to 8,516 ft elevation (pine forests and possibly snow). Temperature drops 15-20°C in 10 minutes.',
        cost: '$37/person',
        time: '3:00 PM',
        image: '/trip/day4-tramway.webp',
        tip: 'Try to go up around 3-4 PM — the light is gorgeous and you might catch sunset from the top.',
      },
    ],
    dining: ['Native Foods Cafe or Chef Tanya\'s Kitchen — plant-based, Palm Springs'],
    photoSpots: [
      'Cholla Cactus Garden at golden hour — the cacti glow like they\'re on fire',
      'Skull Rock — classic tourist shot but it\'s genuinely cool',
      'Keys View panorama — use panoramic mode for the full valley spread',
      'Tramway summit — the desert floor far below with mountains all around',
    ],
    images: [
      '/trip/day4-hero.webp',
      '/trip/day4-cholla.webp',
      '/trip/day4-skullrock.webp',
      '/trip/day4-tramway.webp',
    ],
  },
  {
    day: 5,
    date: 'April 28',
    weekday: 'Monday',
    title: 'LA Day',
    subtitle: 'Views, art, food, sunset',
    emoji: '🌇',
    heroImage: '/trip/day5-hero.webp',
    vibe: 'The movie montage day. Hike to the Hollywood Sign, eat at a 100-year-old food hall, get lost in a world-class museum on a hilltop, and watch the sun set over the Pacific from the Santa Monica Pier. Monday means everything is quiet.',
    clothing: 'Casual and comfortable. Walking shoes are essential (you\'ll walk 15,000+ steps). Light layers — LA is warm during the day (24-28°C) but can cool near the coast.',
    stops: [
      {
        name: 'Griffith Observatory',
        description: 'Free entry. Incredible panoramic views of LA, the Hollywood Sign, and on clear days the ocean. Hike to the Hollywood Sign viewpoint (~1 hr round trip).',
        time: '9:30 AM',
        image: '/trip/day5-hero.webp',
        tip: 'Arrive early — parking fills up fast even on weekdays. The hike to the sign is moderate but very rewarding.',
      },
      {
        name: 'Grand Central Market',
        description: 'Historic food hall since 1917 in Downtown LA. Veggie picks: Ramen Hood (plant-based ramen), Tacos Tumbras a Tomas (veggie mole tacos).',
        time: '12:00 PM',
        image: '/trip/day5-grandcentral.webp',
        tip: 'Walk through the Arts District after lunch — amazing murals and street art.',
      },
      {
        name: 'The Getty Center',
        description: 'World-class art museum designed by Richard Meier. Gardens in full spring bloom. Views of the entire LA basin from the hilltop. Free entry.',
        cost: '$20 parking',
        time: '2:00 PM',
        image: '/trip/day5-getty.webp',
        tip: 'The Central Garden is stunning in late April. The sunset views from the terraces are incredible.',
      },
      {
        name: 'Santa Monica Pier',
        description: 'The iconic pier with the Pacific Park ferris wheel. Walk the beach and watch the sunset over the ocean.',
        time: '5:00 PM',
        image: '/trip/day5-santamonica.webp',
        tip: 'Sunset is around 7:30 PM. The pier lights up beautifully at dusk.',
      },
    ],
    dining: [
      'Grand Central Market — Ramen Hood, Tacos Tumbras a Tomas',
      'Sage Plant Based Bistro or pier-side food for dinner',
    ],
    photoSpots: [
      'Griffith Observatory — the iconic shot with the Hollywood Sign and LA skyline behind',
      'Arts District murals — colorful backdrops everywhere on E 3rd St',
      'Getty Center gardens — the Central Garden from above is incredibly photogenic',
      'Santa Monica Pier at sunset — walk to the end for the ferris wheel silhouette shot',
    ],
    images: [
      '/trip/day5-hero.webp',
      '/trip/day5-grandcentral.webp',
      '/trip/day5-santamonica.webp',
      '/trip/day5-getty.webp',
    ],
  },
  {
    day: 6,
    date: 'April 29',
    weekday: 'Tuesday',
    title: 'Disneyland Park',
    subtitle: 'The happiest place on Earth',
    emoji: '🏰',
    heroImage: '/trip/day6-hero.webp',
    vibe: 'Pure magic. The castle, the rides, the parade lights. Tuesday means the lowest crowds of the week. You\'ll ride everything without crazy waits. End the night with Paint the Night — thousands of LED lights dancing down Main Street.',
    clothing: 'Comfortable walking clothes (you\'ll walk 25,000+ steps). Good broken-in walking shoes — NOT new shoes. Light hoodie for evening. Backpack for water bottles and snacks.',
    stops: [
      { name: 'Rise of the Resistance', description: 'Star Wars: Galaxy\'s Edge. The most immersive ride Disney has ever built. Get there at rope drop.', image: '/trip/day6-galaxysedge.webp' },
      { name: 'Hyperspace Mountain', description: 'Star Wars overlay on Space Mountain — just launched April 28! Brand new experience.', image: '/trip/day6-hyperspace.webp' },
      { name: 'Indiana Jones Adventure', description: 'Classic Disneyland thrill ride through a cursed temple.', image: '/trip/day6-indianajones.webp' },
      { name: 'Matterhorn Bobsleds', description: 'The original Disney mountain. An Anaheim icon.', image: '/trip/day6-matterhorn.webp' },
      { name: 'Paint the Night Parade', description: 'Dazzling parade of floats covered in thousands of LEDs. 8:30 PM on Main Street.', image: '/trip/day6-parade.webp' },
    ],
    dining: ['Bring snacks and water bottles in (allowed!). Mobile order meals in the app to skip food lines.'],
    entertainment: ['Paint the Night — 8:30 PM', 'Wondrous Journeys projections (no fireworks Tue)', 'Celebrate Happy Cavalcade (daytime)', 'Crowd level: ~36% (low)'],
    photoSpots: [
      'Sleeping Beauty Castle — early morning or at night when it\'s lit up',
      'Galaxy\'s Edge — the Millennium Falcon and the market stalls',
      'Main Street USA — the classic view down the street toward the castle',
      'Paint the Night — slow shutter speed for light trails',
    ],
    images: [
      '/trip/day6-hero.webp',
      '/trip/day6-galaxysedge.webp',
      '/trip/day6-parade.webp',
    ],
  },
  {
    day: 7,
    date: 'April 30',
    weekday: 'Wednesday',
    title: 'California Adventure',
    subtitle: 'Racers, coasters, World of Color',
    emoji: '🎢',
    heroImage: '/trip/day7-hero.webp',
    vibe: 'The thrill park. Radiator Springs is like driving through a Pixar movie. Incredicoaster launches you along the pier. End with World of Color — water, fire, and light exploding over Paradise Bay. The perfect closing night.',
    clothing: 'Same as yesterday — comfy clothes, good shoes, light layer for evening. You might get misted during World of Color if you\'re up front.',
    stops: [
      { name: 'Radiator Springs Racers', description: 'Get there early — longest line in the park. You race through Cars Land. Incredible.', image: '/trip/day7-carsland.webp' },
      { name: 'Guardians of the Galaxy', description: 'Mission: BREAKOUT! Randomized drop tower — different experience every time.', image: '/trip/day7-guardians.webp' },
      { name: 'Incredicoaster', description: 'High-speed launch coaster along the pier. Goes from 0 to fast immediately.', image: '/trip/day7-incredicoaster.webp' },
      { name: 'Soarin\' Over California', description: 'Original version — limited run through July 1 for DCA\'s 25th anniversary. The OG flight simulator.', image: '/trip/day7-soarin.webp' },
      { name: 'World of Color', description: 'Massive water + light + fire show on Paradise Bay. 9 PM. Get a spot 45 min early.', image: '/trip/day7-worldofcolor.webp' },
    ],
    dining: ['Bring snacks in + mobile order inside the park'],
    entertainment: ['World of Color — Happiness! at 9 PM', 'Soarin\' Over California (original, limited run)', 'Crowd level: ~41% (moderate)'],
    photoSpots: [
      'Cars Land at night — the neon signs reflecting on the wet road is magical',
      'Pixar Pier — the Incredicoaster loop framing the bay',
      'World of Color — long exposure from the bridge',
      'The DCA entrance sign — classic park photo',
    ],
    images: [
      '/trip/day7-hero.webp',
      '/trip/day7-carsland.webp',
      '/trip/day7-worldofcolor.webp',
    ],
  },
  {
    day: 8,
    date: 'May 1',
    weekday: 'Thursday',
    title: 'Pacific Coast Highway',
    subtitle: 'The best drive in America',
    emoji: '🌊',
    heroImage: '/trip/day8-hero.webp',
    vibe: 'This is THE day. Every car commercial, every California postcard — this is that drive. Cliffs plunging into the Pacific, fog rolling through redwoods, a waterfall that falls onto a beach, purple sand, elephant seals. You\'ll want to stop every 10 minutes.',
    clothing: 'Layers are key. Start warm in Santa Barbara (22°C), Big Sur coast is cool and windy (12-18°C). Bring a wind jacket. Comfortable shoes for short walks at each stop.',
    driveTime: '~9-10 hrs with stops',
    stops: [
      {
        name: 'Santa Barbara',
        description: 'Spanish colonial beach town. Walk Stearns Wharf, grab coffee. Red-roofed buildings against blue water.',
        time: '9:30 AM',
        image: '/trip/day8-santabarbara.webp',
      },
      {
        name: 'Morro Rock',
        description: 'Massive 576-foot volcanic plug sitting in the ocean. Looks like it shouldn\'t exist. Quick photo stop.',
        time: '11:30 AM',
        image: '/trip/day8-morrorock.webp',
      },
      {
        name: 'Elephant Seal Vista Point',
        description: 'Hundreds of 2,000 lb elephant seals lounging on the beach. You\'re standing 20 feet from them. Free.',
        time: '1:30 PM',
        image: '/trip/day8-elephantseals.webp',
        tip: 'May is molting season — they\'re all here. You\'ll hear and smell them before you see them.',
      },
      {
        name: 'McWay Falls',
        description: '80-foot waterfall dropping directly onto a pristine beach. One of the most photographed spots in California.',
        time: '3:00 PM',
        image: '/trip/day8-mcway.webp',
        tip: 'Viewable from a pullout on Highway 1. The overlook trail is partially closed but the view is still stunning.',
      },
      {
        name: 'Bixby Bridge',
        description: 'The iconic single-span bridge over a canyon meeting the ocean. THE California highway shot.',
        time: '4:00 PM',
        image: '/trip/day8-hero.webp',
        tip: 'Pull over at the north viewpoint for the classic angle with the bridge and coastline.',
      },
      {
        name: 'Pfeiffer Beach',
        description: 'Beach with purple-tinted sand from manganese garnet. The Keyhole Rock arch is surreal at sunset.',
        cost: '$15 day use',
        time: '4:30 PM',
        image: '/trip/day8-pfeiffer.webp',
      },
    ],
    dining: [
      'Handlebar Coffee — Santa Barbara',
      'Novo — SLO (creekside patio, veggie-friendly)',
      'Happy Girl Kitchen — Pacific Grove',
    ],
    photoSpots: [
      'Bixby Bridge — THE shot. Use the north pullout for the classic angle',
      'McWay Falls — the waterfall with turquoise water below is unreal',
      'Pfeiffer Beach — the Keyhole Rock arch at golden hour',
      'Elephant seals — get low and shoot at their level for dramatic photos',
      'Any turnout on Highway 1 — the cliffs dropping into the Pacific are all photogenic',
    ],
    images: [
      '/trip/day8-hero.webp',
      '/trip/day8-mcway.webp',
      '/trip/day8-elephantseals.webp',
      '/trip/day8-pfeiffer.webp',
      '/trip/day8-morrorock.webp',
    ],
  },
  {
    day: 9,
    date: 'May 2',
    weekday: 'Friday',
    title: 'Monterey to Home',
    subtitle: 'The long push',
    emoji: '🏠',
    heroImage: '/trip/day9-hero.webp',
    vibe: 'The grind day. 5 AM start, I-5 north for 15+ hours. Monotonous but necessary. Pack the car the night before, load up on snacks, queue up podcasts. Swap drivers every 2-3 hours. By evening you\'re back in Surrey with a camera roll full of California.',
    clothing: 'Whatever\'s most comfortable for sitting in a car all day. Sweats are fine. This is not a fashion day.',
    driveTime: '~15-16 hrs',
    stops: [
      {
        name: 'I-5 North — The Grind',
        description: 'Monterey → San Jose → I-5 via CA-152. Through Sacramento, Redding, Ashland, Portland, Seattle, Surrey.',
        time: '5:00 AM',
        tip: 'Pack snacks and sandwiches the night before. Swap drivers every 2-3 hours. Gas up in Oregon (cheaper). Dinner stop in Portland if needed.',
      },
    ],
    dining: ['Pack snacks and sandwiches. Dinner stop in Portland area if needed.'],
    photoSpots: ['You\'re driving. The only photo you need is the one of your own bed when you get home.'],
    images: [
      '/trip/day9-hero.webp',
    ],
  },
]

export const attractions: Attraction[] = [
  { name: 'Multnomah Falls', location: 'Columbia River Gorge, OR', category: 'drive', description: '620-ft waterfall, viewpoint bridge', cost: 'Free', image: '/trip/day1-multnomah.webp' },
  { name: 'Mt. Shasta', location: 'Northern CA', category: 'drive', description: 'Snowcapped volcano from I-5', image: '/trip/day2-shasta.webp' },
  { name: 'Carlsbad Flower Fields', location: 'Carlsbad, CA', category: 'nature', description: '50 acres of ranunculus in bloom', cost: '$27/person', image: '/trip/day3-hero.webp' },
  { name: 'La Jolla Cove', location: 'La Jolla, San Diego', category: 'nature', description: 'Sea lions, sea caves, tide pools', cost: 'Free', image: '/trip/day3-lajolla.webp' },
  { name: 'Torrey Pines State Reserve', location: 'Del Mar, CA', category: 'nature', description: 'Coastal bluff hike, rare pine species', cost: '$10-25 parking', image: '/trip/day3-torreypines.webp' },
  { name: 'Sunset Cliffs', location: 'San Diego', category: 'nature', description: 'Clifftop sunset over the Pacific', cost: 'Free', image: '/trip/day3-sunsetcliffs.webp' },
  { name: 'Cholla Cactus Garden', location: 'Joshua Tree NP', category: 'desert', description: 'Glowing cacti field at sunrise', cost: '$30/vehicle', image: '/trip/day4-cholla.webp' },
  { name: 'Skull Rock', location: 'Joshua Tree NP', category: 'desert', description: 'Skull-shaped rock formation', image: '/trip/day4-skullrock.webp' },
  { name: 'Keys View', location: 'Joshua Tree NP', category: 'desert', description: 'Panoramic Coachella Valley view', image: '/trip/day4-keysview.webp' },
  { name: 'Arch Rock Trail', location: 'Joshua Tree NP', category: 'desert', description: '1.4 mi loop to natural rock arch', image: '/trip/day4-archrock.webp' },
  { name: 'Palm Springs Aerial Tramway', location: 'Palm Springs, CA', category: 'desert', description: 'Desert floor to 8,516 ft snow', cost: '$37/person', image: '/trip/day4-tramway.webp' },
  { name: 'Griffith Observatory', location: 'Los Angeles', category: 'city', description: 'City views + Hollywood Sign hike', cost: 'Free', image: '/trip/day5-hero.webp' },
  { name: 'Grand Central Market', location: 'Downtown LA', category: 'city', description: 'Historic food hall since 1917', cost: 'Free entry', image: '/trip/day5-grandcentral.webp' },
  { name: 'The Getty Center', location: 'West LA', category: 'city', description: 'World-class art + spring gardens', cost: '$20 parking', image: '/trip/day5-getty.webp' },
  { name: 'Santa Monica Pier', location: 'Santa Monica', category: 'city', description: 'Iconic pier, Pacific sunset', cost: 'Free', image: '/trip/day5-santamonica.webp' },
  { name: 'Disneyland Park', location: 'Anaheim', category: 'disney', description: 'Hyperspace Mountain, Rise of the Resistance, Paint the Night', image: '/trip/day6-hero.webp' },
  { name: 'California Adventure', location: 'Anaheim', category: 'disney', description: 'Radiator Springs Racers, World of Color, Soarin\'', image: '/trip/day7-hero.webp' },
  { name: 'Santa Barbara — Stearns Wharf', location: 'Santa Barbara', category: 'coast', description: 'Spanish colonial beach town', cost: 'Free', image: '/trip/day8-santabarbara.webp' },
  { name: 'Morro Rock', location: 'Morro Bay, CA', category: 'coast', description: 'Volcanic plug in the ocean', cost: 'Free', image: '/trip/day8-morrorock.webp' },
  { name: 'Elephant Seal Vista Point', location: 'Piedras Blancas, CA', category: 'coast', description: 'Hundreds of elephant seals', cost: 'Free', image: '/trip/day8-elephantseals.webp' },
  { name: 'McWay Falls', location: 'Big Sur, CA', category: 'coast', description: 'Waterfall onto a beach', cost: 'Free', image: '/trip/day8-mcway.webp' },
  { name: 'Bixby Bridge', location: 'Big Sur, CA', category: 'coast', description: 'Iconic canyon bridge over ocean', cost: 'Free', image: '/trip/day8-hero.webp' },
  { name: 'Pfeiffer Beach', location: 'Big Sur, CA', category: 'coast', description: 'Purple sand beach', cost: '$15 day use', image: '/trip/day8-pfeiffer.webp' },
]

export const budget: BudgetItem[] = [
  { category: 'Gas', low: 500, high: 600, note: 'Round trip ~4,200 km' },
  { category: 'Hotel — Ashland', low: 70, high: 110, note: '1 night' },
  { category: 'Hotel — Anaheim', low: 850, high: 1100, note: '5 nights mid-range' },
  { category: 'Hotel — Monterey', low: 120, high: 160, note: '1 night in Seaside' },
  { category: 'Disneyland Tickets', low: 520, high: 640, note: '2 people x 2 days single-park' },
  { category: 'Food', low: 720, high: 900, note: '9 days @ $80-100/day for two' },
  { category: 'Activities & Fees', low: 200, high: 250, note: 'Flowers, tramway, park fees' },
  { category: 'Parking & Tips', low: 250, high: 340, note: 'Disney parking, tips, misc' },
  { category: 'Insurance & Data', low: 90, high: 130, note: 'Travel medical + US eSIM' },
]

export const checklist: ChecklistItem[] = [
  { id: 'car-service', task: 'Car service — oil change, tires, brakes, battery, coolant, alignment', deadline: 'By April 10', category: 'car' },
  { id: 'icbc', task: 'Call ICBC — bump liability to $3M+, get US coverage proof card', deadline: 'By April 10', category: 'documents' },
  { id: 'travel-insurance', task: 'Buy travel medical insurance (Manulife CoverMe or Blue Cross)', deadline: 'Before departure', category: 'documents' },
  { id: 'passport-check', task: 'Check passport expiry (must be valid past Nov 2026)', deadline: 'NOW', category: 'documents' },
  { id: 'visa-check', task: 'Confirm US B1/B2 visa stamps are unexpired', deadline: 'NOW', category: 'documents' },
  { id: 'hotel-ashland', task: 'Book hotel — Ashland, OR (April 24, 1 night)', deadline: 'By April 15', category: 'booking' },
  { id: 'hotel-anaheim', task: 'Book hotel — Anaheim (April 25-30, 5 nights)', deadline: 'By April 15', category: 'booking' },
  { id: 'hotel-monterey', task: 'Book hotel — Monterey/Seaside (May 1, 1 night)', deadline: 'By April 15', category: 'booking' },
  { id: 'disney-tickets', task: 'Buy Disneyland single-park tickets (Apr 29 + Apr 30)', deadline: 'By April 15', category: 'booking' },
  { id: 'carlsbad-tickets', task: 'Buy Carlsbad Flower Fields tickets online (no walk-ups)', deadline: 'By April 20', category: 'booking' },
  { id: 'tramway', task: 'Check Palm Springs Aerial Tramway reservations', deadline: 'By April 20', category: 'booking' },
  { id: 'fx-card', task: 'Get no-foreign-transaction-fee credit card', deadline: 'By April 15', category: 'prep' },
  { id: 'usd-cash', task: 'Exchange $200-300 USD cash', deadline: 'Before departure', category: 'prep' },
  { id: 'offline-maps', task: 'Download offline Google Maps (entire route + Big Sur)', deadline: 'Before departure', category: 'prep' },
  { id: 'disney-app', task: 'Download Disneyland app + link tickets', deadline: 'Before departure', category: 'prep' },
  { id: 'us-esim', task: 'Buy US eSIM (Airalo or T-Mobile prepaid)', deadline: 'Before departure', category: 'prep' },
  { id: 'hwy1-check', task: 'Check Highway 1/Big Sur status (Caltrans)', deadline: 'Week before', category: 'prep' },
  { id: 'tide-charts', task: 'Check La Jolla tide charts for April 26', deadline: 'Week before', category: 'prep' },
  { id: 'packing', task: 'Pack: layers, sunscreen, water bottles, walking shoes, phone mount, cooler, Gravol', deadline: 'April 23', category: 'packing' },
  { id: 'car-kit', task: 'Car kit: jumper cables, flashlight, first aid, tire inflator, blanket', deadline: 'April 23', category: 'packing' },
]

export const categoryEmoji: Record<string, string> = {
  nature: '🌿',
  desert: '🏜️',
  city: '🏙️',
  disney: '✨',
  coast: '🌊',
  drive: '🚗',
}

export const categoryLabel: Record<string, string> = {
  nature: 'Nature',
  desert: 'Desert',
  city: 'City',
  disney: 'Disney',
  coast: 'Coast',
  drive: 'Road',
}
