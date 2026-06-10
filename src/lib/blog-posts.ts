import type { BlogPost } from "@/lib/blog-types";

export type { BlogContentBlock, BlogImage, BlogPost, BlogVenue } from "@/lib/blog-types";

export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-the-right-wedding-venue-lake-tahoe",
    title: "Choosing the Right Wedding Venue in Lake Tahoe",
    excerpt:
      "Stateline casino resorts, lakeside restaurants, and private estates each offer a different Tahoe wedding experience. Compare South Shore and North Shore options before you book.",
    publishedAt: "2024-04-18",
    author: "Clint Davidson",
    category: "Venue Planning",
    readTimeMinutes: 9,
    content: [
      {
        type: "paragraph",
        text: "If you are planning a Lake Tahoe wedding, your venue sets the tone for everything that follows — guest count, timeline, décor, catering, noise rules, and how your dance floor feels after sunset. Tahoe is not one-size-fits-all. A Stateline casino ballroom, a Ski Run Boulevard waterfront restaurant, and a gated private estate above the lake each deliver a completely different celebration.",
      },
      {
        type: "paragraph",
        text: "South Lake Tahoe and Stateline sit on the Nevada–California border with the highest concentration of resorts, nightlife, and visitor lodging. North Lake Tahoe — Tahoe City, Kings Beach, Carnelian Bay, and Incline Village — leans quieter, woodsy, and lakefront-intimate. Neither is better; they simply reward different visions. This guide breaks down the three venue types we see most often and how they compare.",
      },
      {
        type: "heading",
        text: "Large casino resorts in Stateline & Incline Village",
      },
      {
        type: "image",
        image: {
          src: "/images/blog/casino-venue.jpg",
          alt: "Elegant ballroom wedding reception with Lake Tahoe views at a Stateline resort",
          caption: "Casino resorts offer full-service ballrooms, on-site lodging, and coordinated event teams.",
        },
      },
      {
        type: "paragraph",
        text: "Harrah's Lake Tahoe, Caesars Republic, Edgewood Tahoe, Heavenly Mountain Resort, and the Hyatt Regency in Incline Village represent the full-service end of the market. You get dedicated event staff, in-house catering and bar packages, hotel room blocks for guests, and indoor backup plans when Tahoe weather turns.",
      },
      {
        type: "list",
        items: [
          "Best for: 100–300+ guests, multi-day wedding weekends, and couples who want one vendor handling food, bar, and reception logistics.",
          "Perks: Ballrooms, lakeview decks, spa and salon options, and established timelines that experienced planners know well.",
          "Trade-offs: Higher minimum spends, structured vendor policies, and music cutoff times that vary by room and property.",
          "DJ note: Casino and resort venues often have specific load-in docks, elevator access, and sound-level guidelines — worth confirming before you book entertainment.",
        ],
      },
      {
        type: "paragraph",
        text: "Edgewood Tahoe is in a class of its own on the South Shore — a lakefront golf resort with ceremony lawns, the iconic 17th green, and indoor ballroom options. Heavenly's Lakeview Lodge adds a mountaintop ceremony reached by aerial tram, which is unforgettable but seasonal (typically June through September). On the North Shore, the Hyatt Regency and The Chateau at Incline Village offer large-capacity ballrooms with lake, forest, and golf-course ceremony sites.",
      },
      {
        type: "heading",
        text: "Restaurants, bars & grills on the water",
      },
      {
        type: "image",
        image: {
          src: "/images/blog/restaurant-venue.jpg",
          alt: "Lake Tahoe waterfront restaurant and pier set up for a wedding reception",
          caption: "Lakeside restaurants deliver authentic Tahoe character with built-in catering and views.",
        },
      },
      {
        type: "paragraph",
        text: "Restaurant venues are the sweet spot for couples who want a polished reception without the scale of a casino. South Shore favorites include Riva Grill on Ski Run Boulevard — part of the We Cook Woody restaurant group alongside Gar Woods, Bar of America, and Caliente — with lakefront banquet rooms and a lively après-ski energy. Gar Woods Grill & Pier on the North Shore in Carnelian Bay is legendary for its wooden pier, classic Tahoe boat-era atmosphere, and upstairs private dining rooms.",
      },
      {
        type: "list",
        items: [
          "Best for: 50–200 guests, rehearsal dinners, and couples who care as much about the meal as the music.",
          "Perks: Established banquet menus, waterfront photos, and a more relaxed vibe than a formal resort.",
          "Trade-offs: Food and beverage minimums, in-house catering requirements, and earlier end times (many properties require music to end by 10:00–11:00 PM).",
          "DJ note: Waterfront restaurants often restrict amplified music outdoors — plan your ceremony audio and reception DJ setup with the banquet manager early.",
        ],
      },
      {
        type: "paragraph",
        text: "For ceremony-only lakefront moments on the South Shore, The Arch at Lakeside Beach (managed through Lake Tahoe Beach Weddings) offers a public-beach ceremony setting with iconic views. North Tahoe Event Center in Kings Beach is a community lakefront venue with terrace and indoor options, generous rental inclusions, and pricing that is often more accessible than private resorts — ideal for couples who want sand, pier, and sunset without a luxury price tag.",
      },
      {
        type: "heading",
        text: "Private homes & estate venue services",
      },
      {
        type: "image",
        image: {
          src: "/images/blog/private-estate-venue.jpg",
          alt: "Private estate wedding ceremony overlooking Lake Tahoe at golden hour",
          caption: "Private estates offer exclusivity and customization — with more planning responsibility on your team.",
        },
      },
      {
        type: "paragraph",
        text: "Private estates are the most personal option and the most hands-on. Properties like Tahoe Blue Estate — a gated multi-acre home above South Lake Tahoe with panoramic lake views — can host welcome parties, rehearsal dinners, and intimate receptions when booked through their rental program. Estate collections coordinated by planners such as One Fine Day Events connect couples with exclusive North and South Shore properties not open to the public.",
      },
      {
        type: "list",
        items: [
          "Best for: Couples wanting privacy, a multi-day stay with wedding party, and full control over the weekend timeline.",
          "Perks: No strangers in the background, flexible décor, and the ability to host brunch, BBQ, or late-night gatherings on your own terms (within local noise ordinances).",
          "Trade-offs: You coordinate rentals, restrooms, parking, power, and often all vendors yourself — or hire a planner who specializes in estate weddings.",
          "DJ note: Estates are where professional sound and lighting matter most. Outdoor ceremonies on hillsides need proper ceremony audio; receptions in tents or on decks need power planning and weather backup.",
        ],
      },
      {
        type: "paragraph",
        text: "Granlibakken in Tahoe City bridges the categories — a mountain lodge resort with outdoor lawns, indoor ballrooms, on-site lodging, and elopement-friendly spaces. It feels private and wooded rather than casino-polished, which is exactly why many North Shore couples choose it.",
      },
      {
        type: "heading",
        text: "South Shore vs. North Shore: quick comparison",
      },
      {
        type: "list",
        items: [
          "South Shore (Stateline / South Lake Tahoe): Highest density of casinos, nightlife, and visitor amenities; strong for large receptions and guests who want walkable entertainment.",
          "North Shore (Tahoe City, Kings Beach, Carnelian Bay, Incline Village): More lakefront intimacy, forest settings, and destination-weekend charm; strong for waterfront ceremonies and lodge-style receptions.",
          "Travel: Many guests fly into Reno-Tahoe International (RNO) — about 45–60 minutes to North Shore and South Shore depending on weather and traffic.",
          "Permits: Public beaches and parks require permits; private venues and restaurants handle most permitting internally — ask early.",
        ],
      },
      {
        type: "heading",
        text: "How your venue choice affects DJ & production",
      },
      {
        type: "paragraph",
        text: "Where you marry shapes what your DJ and production team needs to bring. Casino ballrooms may have in-house AV contacts. Restaurant piers may limit speaker placement. Estates may need generator planning or long cable runs. Outdoor ceremonies at elevation need wireless microphone reliability when wind picks up across the lake.",
      },
      {
        type: "paragraph",
        text: "At I DJ Events, we plan around the venue first — load-in paths, ceremony vs. reception layouts, lighting truss clearance, and how your guests will move from cocktails to dancing. The right venue plus the right production plan is what turns a beautiful setting into an unforgettable celebration.",
      },
      {
        type: "paragraph",
        text: "Ready to narrow your list? Start with the venue contacts below, schedule tours or virtual walkthroughs, and bring your entertainment team into the conversation early. The best Tahoe weddings are planned as one experience — not a venue booking and a DJ booking in separate silos.",
      },
    ],
    venues: [
      {
        name: "Harrah's & Caesars Republic Lake Tahoe",
        area: "Stateline, NV (South Shore)",
        type: "Casino Resort",
        address: "15 US-50, Stateline, NV 89449",
        phone: "(775) 586-6711",
        email: "AAdler@caesars.com",
        website: "https://www.caesars.com/harrahs-tahoe/things-to-do/weddings",
        notes: "Multiple ballrooms and lakeview event spaces; room blocks for wedding guests.",
      },
      {
        name: "Edgewood Tahoe Resort",
        area: "Stateline, NV (South Shore)",
        type: "Lakefront Resort",
        address: "180 Lake Parkway, Stateline, NV 89449",
        phone: "(888) 881-8659",
        website: "https://edgewoodtahoe.com/weddings/",
        notes: "Lakefront ceremony lawns, 17th green, and indoor ballroom options.",
      },
      {
        name: "Heavenly Mountain Resort — Lakeview Lodge",
        area: "South Lake Tahoe, CA/NV (South Shore)",
        type: "Mountaintop Venue",
        website: "https://www.skiheavenly.com/explore-the-resort/about-the-resort/groups-and-weddings/weddings.aspx",
        notes: "Aerial tram access; seasonal mountaintop ceremonies June–September. Submit a wedding proposal online to connect with their events team.",
      },
      {
        name: "Riva Grill on the Lake",
        area: "South Lake Tahoe, CA (South Shore)",
        type: "Restaurant & Banquet",
        address: "900 Ski Run Blvd, Suite 3, South Lake Tahoe, CA 96150",
        phone: "(530) 542-2600",
        email: "events@rivagrill.com",
        website: "https://www.rivagrill.com/weddings--special-events.html",
        notes: "Lakefront banquet rooms; part of the We Cook Woody restaurant group.",
      },
      {
        name: "The Arch at Lakeside Beach",
        area: "South Lake Tahoe, CA (South Shore)",
        type: "Beach Ceremony Site",
        website: "https://www.laketahoebeachweddings.com/contact",
        notes: "Public beach ceremony setting; coordinate through Lake Tahoe Beach Weddings.",
      },
      {
        name: "Tahoe Blue Estate",
        area: "South Lake Tahoe, CA (South Shore)",
        type: "Private Estate",
        website: "https://tahoeblueestate.com/",
        notes: "Gated private estate with lake views; luxury home rental for events and stays.",
      },
      {
        name: "Hyatt Regency Lake Tahoe Resort, Spa and Casino",
        area: "Incline Village, NV (North Shore)",
        type: "Casino Resort",
        phone: "(775) 886-6693",
        website: "https://www.hyatt.com/hyatt-regency/en-US/tvllt-hyatt-regency-lake-tahoe-resort-spa-and-casino/weddings",
        notes: "Large indoor and outdoor ceremony and reception capacity with lake views.",
      },
      {
        name: "The Chateau at Incline Village",
        area: "Incline Village, NV (North Shore)",
        type: "Ballroom & Event Venue",
        phone: "(775) 832-1240",
        website: "https://www.yourtahoeplace.com/weddings-venues/the-chateau-at-incline-village/",
        notes: "5,200 sq ft grand ballroom; outdoor tee box and creekside ceremony sites.",
      },
      {
        name: "Gar Woods Grill & Pier",
        area: "Carnelian Bay, CA (North Shore)",
        type: "Restaurant & Pier",
        address: "5000 North Lake Blvd, Carnelian Bay, CA 96140",
        phone: "(530) 546-3366",
        website: "https://www.garwoods.com/",
        notes: "Waterfront pier ceremonies and upstairs private dining reception rooms.",
      },
      {
        name: "North Tahoe Event Center",
        area: "Kings Beach, CA (North Shore)",
        type: "Lakefront Event Center",
        address: "8318 North Lake Blvd, Kings Beach, CA 96143",
        website: "https://northtahoeevents.com/events/weddings/",
        notes: "Community lakefront venue; terrace and indoor spaces for up to ~150 guests.",
      },
      {
        name: "Granlibakken Tahoe",
        area: "Tahoe City, CA (North Shore)",
        type: "Lodge Resort",
        website: "https://www.granlibakken.com/weddings-events",
        notes: "Mountain-rustic lodge with outdoor lawns, ballrooms, and on-site lodging.",
      },
      {
        name: "One Fine Day Events — Private Estate Collection",
        area: "Lake Tahoe (North & South Shore)",
        type: "Estate Planning & Access",
        website: "https://www.onefinedayevents.com/private-estates",
        notes: "Wedding planning team with access to exclusive private estate venues around Tahoe.",
      },
    ],
  },
  {
    slug: "lake-tahoe-food-guide",
    title: "The Ultimate Lake Tahoe Food Guide: Casinos, Sushi, Steaks & Breweries",
    excerpt:
      "From Stateline casino dining and the best Chinese takeout on the South Shore to North Shore rotisserie chicken and the brewery-restaurants I keep coming back to — here's where to eat around Lake Tahoe.",
    publishedAt: "2024-05-02",
    author: "Clint Davidson",
    category: "Food & Drink",
    readTimeMinutes: 11,
    directoryTitle: "Lake Tahoe restaurants — quick reference",
    directoryDescription:
      "Phone numbers and hours are listed for convenience. Menus, reservations, and seasonal schedules change — always confirm directly with each restaurant before you go.",
    content: [
      {
        type: "paragraph",
        text: "Let's talk about food at Lake Tahoe — because honestly, this is one of the most underrated dining destinations in the West. Whether you're here for a wedding weekend, a ski trip, or a summer lake escape, Tahoe delivers. And nowhere does it louder than the South Shore casino corridor in Stateline, where world-class restaurants sit steps from the gaming floor and the Nevada–California state line.",
      },
      {
        type: "paragraph",
        text: "I've spent years living and working around this lake, and I still get genuinely excited walking into a new spot — or back into an old favorite. This guide is my personal hit list: casino standouts, the Chinese restaurant I swear by, sushi that never disappoints, high-end steak houses, North and South Shore local legends, and the brewery-restaurants that are, if I'm being honest, my real love.",
      },
      {
        type: "heading",
        text: "South Shore casinos: where Tahoe dining gets glamorous",
      },
      {
        type: "image",
        image: {
          src: "/images/blog/food-casino-dining.jpg",
          alt: "Upscale casino restaurant dining with gourmet food and lake views at Stateline",
          caption:
            "Stateline's casino resorts pack serious culinary firepower — from TV-famous kitchens to cantina nights that run late.",
        },
      },
      {
        type: "paragraph",
        text: "Caesars Republic Lake Tahoe (you may still know it as Harveys) is the beating heart of South Shore casino dining, and the restaurant lineup here is legitimately impressive. Three spots in particular keep pulling me back.",
      },
      {
        type: "paragraph",
        text: "Hell's Kitchen by Gordon Ramsay is exactly the kind of over-the-top, high-energy experience you'd expect from the show — Beef Wellington, lobster risotto, sticky toffee pudding, the works. The dining room buzzes. The cocktails are serious. It's a special-occasion kind of place that still feels fun, not stuffy. Reserve ahead on busy weekends.",
      },
      {
        type: "paragraph",
        text: "Wolf by Vanderpump is Lisa Vanderpump's gorgeous alpine lounge — bold cocktails, shareable plates, Wagyu ragù, caviar-topped chips, and a late-night DJ vibe that transforms the room after dark. Happy hour on the patio is a move. This is where you start the night before the dance floor calls your name.",
      },
      {
        type: "paragraph",
        text: "El Jefe's Cantina is the casual counterbalance — street tacos, quesabirria, sizzling fajitas, and margarita pitchers that hit different after a day on the mountain or the beach. The energy is pure cantina: big screens, a dance floor, and a crowd that knows how to have a good time. Side note: during peak summer beach season and winter ski season, you'll often find me hosting karaoke there most Fridays — it's a blast when the crowds roll in.",
      },
      {
        type: "heading",
        text: "Chinese, sushi & everyday favorites on the South Shore",
      },
      {
        type: "image",
        image: {
          src: "/images/blog/food-sushi-spread.jpg",
          alt: "Fresh sushi and sashimi spread at a Lake Tahoe Japanese restaurant",
          caption: "Tahoe sushi is fresh, creative, and absolutely worth planning your evening around.",
        },
      },
      {
        type: "paragraph",
        text: "Off the casino floor, the South Shore has everyday gems that locals actually eat at — not just tourists.",
      },
      {
        type: "paragraph",
        text: "Mandarin Garden is, in my opinion, the best Chinese food on the South Shore for both takeout and dine-in. Family-owned since 1997, consistently friendly service, and the kind of comfort-food classics you crave after a long day on the lake. Orange chicken, kung pao, chow mein — it's all solid. I grab takeout here more than I'd like to admit.",
      },
      {
        type: "paragraph",
        text: "For sushi, Samurai Sushi and Sushi Pier are both amazing — and they scratch different itches. Samurai on Lake Tahoe Boulevard is a longtime local favorite with fresh rolls, cooked Japanese entrees, and a cozy sit-down vibe. Sushi Pier sits right in the Stateline casino corridor at 177 US-50 — convenient, lively, and perfect when you want incredible sushi without leaving the nightlife zone. You cannot go wrong with either.",
      },
      {
        type: "heading",
        text: "High-end dining: Tahoe steak houses worth the splurge",
      },
      {
        type: "image",
        image: {
          src: "/images/blog/food-steakhouse.jpg",
          alt: "Elegant steakhouse dinner with ribeye and wine overlooking Lake Tahoe",
          caption:
            "Tahoe steak houses combine classic service with views you simply cannot replicate anywhere else.",
        },
      },
      {
        type: "paragraph",
        text: "When you want to dress up and go all in, Tahoe's steak house scene delivers. These are anniversary dinners, rehearsal dinners, and \"we just closed the biggest deal of our lives\" kind of nights.",
      },
      {
        type: "list",
        items: [
          "Sage Room Steak House — On the 19th floor of Caesars Republic, the Sage Room has been a Tahoe institution since 1947. Black Angus steaks, tableside Caesar salads, Bananas Foster and Cherries Jubilee prepared right at your table, and panoramic lake views that make every bite taste better.",
          "Hell's Kitchen — Yes, it belongs in the casino section and the steakhouse section. The Beef Wellington alone is worth the reservation.",
          "Ciera Steak + Chophouse — At Bally's Lake Tahoe (connected to the South Shore casino corridor), Ciera is old-school steakhouse elegance: prime cuts, seafood, and a classic chophouse atmosphere that feels like Tahoe's golden era.",
        ],
      },
      {
        type: "paragraph",
        text: "Pro tip: book early for Friday and Saturday nights, especially during ski season and summer holidays. These rooms fill up fast, and walk-in waits can be brutal when the whole basin is in town.",
      },
      {
        type: "heading",
        text: "Local favorites: the spots locals actually crave",
      },
      {
        type: "paragraph",
        text: "Not every great Tahoe meal requires a jacket and a reservation. Some of my absolute favorites are the unpretentious places you hit in your ski boots or flip-flops.",
      },
      {
        type: "list",
        items: [
          "T's Mesquite Rotisserie (North Shore) — In Incline Village, T's is a Tahoe legend. Mesquite rotisserie chicken, beef, and pork cooked over real fire, made fresh daily, served fast. Open daily 11 AM–9 PM. This is the meal you pick up on the way home when nobody wants to cook — and everyone is thrilled about it.",
          "Steamers Bar & Grill (South Shore) — Set just off the main drag at 2236 Lake Tahoe Boulevard, Steamers is where locals meet. Their birria tacos — crispy Parmesan-crusted tortillas, slow-braised beef, and that rich consommé for dipping — are the kind of thing you think about on the drive back up the hill. Taco nights run every night, the patio is perfect after skiing, and the staff is genuinely friendly in a way that makes you feel like a regular on visit number one.",
          "Burger Me (South Shore) — On Lake Tahoe Boulevard in South Lake Tahoe, Burger Me does exactly what the name promises: outstanding burgers, great fries, and a laid-back vibe that fits the neighborhood perfectly. Open seven days a week, 11 AM–9 PM. Simple, perfect, done right.",
        ],
      },
      {
        type: "image",
        image: {
          src: "/images/blog/steamers-birria-tacos.jpg",
          alt: "Steamers Bar and Grill birria taco platter with consommé in South Lake Tahoe",
          caption:
            "Steamers' birria tacos are a South Shore obsession — order a platter and share the wealth.",
        },
      },
      {
        type: "image",
        image: {
          src: "/images/blog/steamers-patio.jpg",
          alt: "Busy dining room and patio atmosphere at Steamers Bar and Grill in South Lake Tahoe",
          caption: "Cozy, down-to-earth, and always welcoming — exactly the vibe you want après-ski.",
        },
      },
      {
        type: "image",
        image: {
          src: "/images/blog/steamers-exterior.jpg",
          alt: "Steamers Bar and Grill exterior on Lake Tahoe Boulevard in South Lake Tahoe",
          caption: "Steamers Bar & Grill — a South Lake local favorite just off Highway 50.",
        },
      },
      {
        type: "paragraph",
        text: "T's is my North Shore go-to. On the South Shore, Steamers is where I send people for tacos and a cold beer, and Burger Me is my move when I want something quick, delicious, and zero fuss. All three are the kind of places you recommend to friends within five minutes of meeting them.",
      },
      {
        type: "heading",
        text: "My real love: brewery-restaurants",
      },
      {
        type: "image",
        image: {
          src: "/images/blog/food-brewery-tahoe.jpg",
          alt: "Craft beer and gourmet pub food at a cozy Lake Tahoe brewery restaurant",
          caption:
            "Brewery-restaurants are Tahoe's sweet spot — great beer, great food, and the best après vibe on the mountain.",
        },
      },
      {
        type: "paragraph",
        text: "Okay, here's where I get genuinely fired up. If you pinned me down and asked what I love most about eating and drinking in Tahoe, I'd say brewery-restaurants — hands down. There's something about house-brewed beer, a scratch kitchen, and a room full of people still buzzing from the mountain that feels like the real Tahoe to me.",
      },
      {
        type: "paragraph",
        text: "On the South Shore, Stateline Brewery in Heavenly Village is Tahoe's oldest brewery — huge menu, 500+ whiskeys, house beers, and a patio that's perfect for people-watching after skiing. Sidellis on Sandy Way is a local institution with barrel-aged and sour beers you won't find just anywhere, a summer beer garden, and a cozy winter room that feels like your friend's really cool cabin. Cold Water Brewery & Grill on Lake Tahoe Boulevard is a female-led scratch kitchen with 14 house brews and an upscale-but-welcoming vibe. South of North Brewing on Stateline Avenue draws water straight from the lake, pairs it with great food, and runs live music basically every day — seeker culture at its finest.",
      },
      {
        type: "paragraph",
        text: "On the North Shore, Tahoe National Brewing Company in Tahoe City is the move — deep-dish pizza, globally inspired pub food, beers brewed right behind the bar, and a fire-pit patio that's magic on a crisp evening. This is where I end up when I want the full brewery-restaurant experience on the other side of the lake.",
      },
      {
        type: "paragraph",
        text: "Whether it's a post-ski pint, a summer afternoon on the patio, or a low-key date night, brewery-restaurants are where Tahoe feels most like home to me. Start here. Thank me later.",
      },
      {
        type: "heading",
        text: "Planning your Tahoe food crawl",
      },
      {
        type: "list",
        items: [
          "South Shore = casino glamour, walkable nightlife, and the densest restaurant cluster. Perfect for groups who want options without driving.",
          "North Shore = rotisserie chicken at T's, brewery afternoons in Tahoe City, and a slightly slower pace. Perfect for lake-house weekends.",
          "Peak season = book steakhouses and Hell's Kitchen early. Brewery spots are more walk-in friendly but still get packed on weekends.",
          "Takeout heroes = Mandarin Garden for Chinese, Steamers for tacos, Burger Me for burgers, T's for rotisserie — all reliable when you'd rather eat on the deck.",
        ],
      },
      {
        type: "paragraph",
        text: "Tahoe feeds you well. From a white-tablecloth steak on the 19th floor to a burger and a pint after the last run of the day, this lake knows how to do food. Use the directory below for phone numbers and hours, grab a reservation where you need one, and eat something amazing tonight. You earned it.",
      },
    ],
    venues: [
      {
        name: "Hell's Kitchen by Gordon Ramsay",
        area: "Stateline, NV (South Shore)",
        type: "Casino Fine Dining",
        address: "Caesars Republic Lake Tahoe, 18 US-50, Stateline, NV 89449",
        phone: "(775) 586-6868",
        hours: "Daily dinner; closes 9:30 PM. Happy hour 3–4 PM.",
        website:
          "https://www.caesars.com/caesars-republic-lake-tahoe/restaurants/gordon-ramsay-hells-kitchen",
        notes: "Reserve ahead on weekends. Signature dishes from the TV show.",
      },
      {
        name: "Wolf by Vanderpump",
        area: "Stateline, NV (South Shore)",
        type: "Casino Lounge & Dining",
        address: "Caesars Republic Lake Tahoe, 18 US-50, Stateline, NV 89449",
        phone: "(775) 588-6611",
        hours: "Closes 10 PM. Bar Mon–Thu from 4:30 PM; Fri–Sat from 4 PM.",
        website:
          "https://www.caesars.com/caesars-republic-lake-tahoe/restaurants/wolf-by-vanderpump",
        notes: "Cocktails, shareable plates, patio happy hour, late-night DJ.",
      },
      {
        name: "El Jefe's Cantina Tahoe",
        area: "Stateline, NV (South Shore)",
        type: "Casino Mexican Cantina",
        address: "Caesars Republic Lake Tahoe, 18 US-50, Stateline, NV 89449",
        phone: "(775) 588-6611",
        hours: "Daily; afternoon through late night (hours vary by season).",
        website:
          "https://www.caesars.com/caesars-republic-lake-tahoe/restaurants/el-jefes-cantina-tahoe",
        notes: "Tacos, fajitas, margaritas, and a lively cantina atmosphere.",
      },
      {
        name: "Sage Room Steak House",
        area: "Stateline, NV (South Shore)",
        type: "Steakhouse",
        address: "Caesars Republic Lake Tahoe, 19th Floor, 18 US-50, Stateline, NV 89449",
        phone: "(775) 588-2411",
        hours: "Dinner service; reservations recommended.",
        website:
          "https://www.caesars.com/caesars-republic-lake-tahoe/restaurants/sage-room-steak-house",
        notes: "Lake views, tableside desserts, classic steakhouse since 1947.",
      },
      {
        name: "Ciera Steak + Chophouse",
        area: "Stateline, NV (South Shore)",
        type: "Steakhouse",
        address: "Bally's Lake Tahoe, 15 US-50, Stateline, NV 89449",
        phone: "(775) 588-2222",
        hours: "Dinner service; reservations recommended.",
        website: "https://casinos.ballys.com/lake-tahoe/dining.htm",
        notes: "Prime steaks and seafood in a classic chophouse setting.",
      },
      {
        name: "Mandarin Garden Chinese Restaurant",
        area: "South Lake Tahoe, CA (South Shore)",
        type: "Chinese",
        address: "2502 Lake Tahoe Blvd., South Lake Tahoe, CA 96150",
        phone: "(530) 544-8885",
        hours: "Mon–Sat 11:30 AM–9 PM; closed Sunday.",
        website:
          "https://www.tripadvisor.com/Restaurant_Review-g155987-d359410-Reviews-Mandarin_Garden_Chinese_Restaurant-Lake_Tahoe_California_California.html",
        notes: "Best Chinese takeout and dine-in on the South Shore, in my book.",
      },
      {
        name: "Samurai Sushi",
        area: "South Lake Tahoe, CA (South Shore)",
        type: "Japanese & Sushi",
        address: "2588 Lake Tahoe Blvd., South Lake Tahoe, CA 96150",
        phone: "(530) 542-0300",
        hours: "Tue–Fri 5–9 PM; Sat–Sun 12–9 PM; closed Monday.",
        website: "https://www.sushitahoe.com/",
        notes: "Fresh sushi plus cooked Japanese entrees; longtime local favorite.",
      },
      {
        name: "Sushi Pier Tahoe",
        area: "Stateline, NV (South Shore)",
        type: "Japanese & Sushi",
        address: "177 US-50, Stateline, NV 89449",
        phone: "(775) 588-8588",
        hours: "Daily lunch & dinner; call for current hours.",
        website: "https://tahoesushipier.com/",
        notes: "Casino-corridor sushi — convenient and consistently excellent.",
      },
      {
        name: "Steamers Bar & Grill",
        area: "South Lake Tahoe, CA (South Shore)",
        type: "Bar & Grill",
        address: "2236 Lake Tahoe Blvd., South Lake Tahoe, CA 96150",
        phone: "(530) 541-8818",
        hours: "Daily 11 AM–11 PM; Sundays open 10 AM during football season. Happy hour Mon–Fri 3–6 PM.",
        website: "https://steamersbargrill.com/",
        notes: "Amazing birria tacos, taco nights every night, friendly staff, patio seating, and live music.",
      },
      {
        name: "Burger Me — South Lake Tahoe",
        area: "South Lake Tahoe, CA (South Shore)",
        type: "Burgers & Casual",
        address: "3838 Lake Tahoe Blvd., Suite 100, South Lake Tahoe, CA 96150",
        phone: "(530) 545-6433",
        hours: "Daily 11 AM–9 PM.",
        website: "https://burgermeusa.com/truckee-burger-me-locations",
        notes: "Outstanding burgers and fries; my South Shore casual go-to.",
      },
      {
        name: "Stateline Brewery",
        area: "South Lake Tahoe, CA (South Shore)",
        type: "Brewery-Restaurant",
        address: "4118 Lake Tahoe Blvd., South Lake Tahoe, CA 96150",
        phone: "(530) 542-9000",
        hours: "Fri–Sat 11 AM–9 PM; Sun–Thu 11 AM–8 PM.",
        website: "https://statelinebrewery.com/",
        notes: "Tahoe's oldest brewery; huge menu, house beers, and whiskey selection.",
      },
      {
        name: "Sidellis Lake Tahoe",
        area: "South Lake Tahoe, CA (South Shore)",
        type: "Brewery-Restaurant",
        address: "3350 Sandy Way, South Lake Tahoe, CA 96150",
        phone: "(530) 600-3999",
        hours: "Kitchen closes 8 PM daily; brewery hours vary — call ahead.",
        website: "https://sidellis.com/",
        notes: "Barrel-aged and sour beers; beer garden in summer, cozy in winter.",
      },
      {
        name: "Cold Water Brewery & Grill",
        area: "South Lake Tahoe, CA (South Shore)",
        type: "Brewery-Restaurant",
        address: "2544 Lake Tahoe Blvd., South Lake Tahoe, CA 96150",
        phone: "(530) 544-4677",
        hours: "Daily 11:30 AM–8 PM.",
        website: "https://www.tahoecoldwaterbrewery.com/",
        notes: "14 house brews, scratch kitchen, heated patio.",
      },
      {
        name: "South of North Brewing Company",
        area: "South Lake Tahoe, CA (South Shore)",
        type: "Brewery-Restaurant",
        address: "932 Stateline Ave, South Lake Tahoe, CA 96150",
        phone: "(530) 494-9805",
        hours: "Mon–Thu 3–9 PM; Fri–Sun 12–10 PM. Kitchen closes 9 PM.",
        website: "https://www.southofnorthbeer.com/",
        notes: "Lake-sourced water, live music daily, great après vibe.",
      },
      {
        name: "T's Mesquite Rotisserie",
        area: "Incline Village, NV (North Shore)",
        type: "Rotisserie & Casual",
        address: "901 Tahoe Blvd., Incline Village, NV 89451",
        phone: "(775) 831-2832",
        hours: "Daily 11 AM–9 PM.",
        website: "https://www.tsrotisserie.com/",
        notes: "Mesquite chicken, beef, and pork over real fire; dine-in or takeout.",
      },
      {
        name: "Tahoe National Brewing Company",
        area: "Tahoe City, CA (North Shore)",
        type: "Brewery-Restaurant",
        address: "850 North Lake Blvd., #21, Tahoe City, CA 96145",
        phone: "(530) 807-1031",
        hours: "Wed–Sun 11 AM–11 PM (kitchen closes 10:30 PM); closed Mon–Tue.",
        website: "https://www.tahoenational.beer/",
        notes: "Deep-dish pizza, beers brewed on-site, fire-pit patio.",
      },
      {
        name: "Burger Me — Truckee",
        area: "Truckee, CA (North Lake Tahoe)",
        type: "Burgers & Casual",
        address: "10418 Donner Pass Rd., Truckee, CA 96161",
        phone: "(530) 587-8852",
        hours: "Daily 11 AM–9 PM.",
        website: "https://burgermeusa.com/truckee-burger-me-locations",
        notes: "Same great burgers on the North side of the basin.",
      },
    ],
  },
  {
    slug: "lake-tahoe-outdoors-guide",
    title: "Lake Tahoe Outdoors Guide: Summer Adventures, Winter Skiing & Everything Between",
    excerpt:
      "Hiking, camping, fishing, kayaking, mountain biking, and the motorcycle loop around the lake — plus where to rent kayaks and SUPs on the North and South Shores, and what changes when winter arrives.",
    publishedAt: "2024-06-20",
    author: "Clint Davidson",
    category: "Outdoors & Adventure",
    readTimeMinutes: 13,
    directoryTitle: "Tahoe outdoors — rentals & resources",
    directoryDescription:
      "Kayak and SUP outfitters, bike shops, fishing charters, campgrounds, and ski resorts are listed below by shore. Hours and seasons change — always confirm directly before you go.",
    content: [
      {
        type: "paragraph",
        text: "Lake Tahoe is not just a wedding destination and a casino town — it is one of the most spectacular outdoor playgrounds in North America. I have spent years living around this lake, and I still wake up excited on a summer morning knowing I can hike above Emerald Bay, paddle glassy water before the wind kicks up, ride a motorcycle around the entire basin, or drop into a mountain bike trail that feels like it was built by people who actually love to ride.",
      },
      {
        type: "paragraph",
        text: "Tahoe has two distinct personalities. Summer is long days, turquoise water, trail dust, campfires, and lake trout on the line. Winter is deep snow, chairlift views, and après at the base of world-class resorts. This guide focuses on summer — because that is when the lake truly opens up — but I have dedicated a full section to skiing and snowboarding, because you cannot talk Tahoe outdoors without it.",
      },
      {
        type: "heading",
        text: "Summer vs. winter: two seasons, two completely different lakes",
      },
      {
        type: "list",
        items: [
          "Summer (June–September peak): Hiking, camping, fishing, kayaking, SUP, road and mountain biking, motorcycle touring, beach days, and boat life. Mornings are gold — get on the water or the trail early before afternoon wind and crowds.",
          "Shoulder seasons (spring & fall): Fewer crowds, cooler water, variable trail conditions. Some campgrounds and rental shops operate reduced hours — call ahead.",
          "Winter (November–April): Skiing and snowboarding dominate. Heavenly on the South Shore, Palisades Tahoe and Northstar on the North Shore, Kirkwood and Sierra-at-Tahoe for deep snow. Snowshoeing, cross-country skiing, and backcountry routes open up for those who want more than the resort experience.",
        ],
      },
      {
        type: "paragraph",
        text: "If you are visiting for a wedding weekend in July, build in a morning paddle or an afternoon ride. If you are here in February, plan for at least one day on the mountain. Tahoe rewards people who get outside — not just people who look at it through a window.",
      },
      {
        type: "heading",
        text: "Hiking: granite, alpine lakes, and views that do not look real",
      },
      {
        type: "image",
        image: {
          src: "/images/blog/outdoors-hiking-tahoe.jpg",
          alt: "Hikers on a scenic trail above Lake Tahoe with alpine lake views and Sierra peaks",
          caption:
            "Tahoe hiking ranges from family-friendly lakeside paths to serious alpine routes above Emerald Bay.",
        },
      },
      {
        type: "paragraph",
        text: "Tahoe hiking is the reason a lot of people fall in love with the basin in the first place. The Tahoe Rim Trail circles the entire lake — 165 miles of singletrack and dirt road that serious thru-hikers dream about. For day hikes, you have endless options on both shores.",
      },
      {
        type: "list",
        items: [
          "Eagle Lake Trail (Emerald Bay) — A classic South Shore hike with a steady climb, wildflowers in season, and a gorgeous alpine lake payoff. One of the best half-day hikes on the lake.",
          "Mount Tallac — For experienced hikers who want a serious summit. The views from Tahoe's most iconic peak are worth every step. Start early, bring layers, and respect the elevation.",
          "Rubicon Trail / Vikingsholm area — Lakeside hiking through some of the most photographed shoreline in California. Pair it with a kayak rental for the full Emerald Bay experience.",
          "North Shore favorites — Shirley Canyon in Squaw Valley, Mount Rose summit trails, and lakefront paths around Tahoe City and Kings Beach deliver big scenery without always needing a full mountaineering day.",
        ],
      },
      {
        type: "paragraph",
        text: "Pro tips: carry bear canisters where required, pack more water than you think you need at elevation, and check trail conditions before you go. Wildfire season can affect access — always verify with the Forest Service or California State Parks.",
      },
      {
        type: "heading",
        text: "Camping: sleep under the stars, wake up on the lake",
      },
      {
        type: "paragraph",
        text: "There is nothing quite like falling asleep to pine trees and waking up to Lake Tahoe light filtering through your tent. Summer camping fills up fast — book as early as you can.",
      },
      {
        type: "list",
        items: [
          "D.L. Bliss & Emerald Bay State Parks — Iconic South Shore campgrounds with lake access and access to some of the best hiking in the basin. Reserve through Reserve California.",
          "Fallen Leaf Campground — A local favorite south of Emerald Bay with forest setting and proximity to Fallen Leaf Lake. Popular with families and outdoor enthusiasts.",
          "Nevada Beach Campground — Great South Shore option with beach access and easy logistics for kayaking and boating.",
          "North Shore & Truckee area — Camp Richardson, William Kent, and Forest Service campgrounds around the Truckee River and North Shore deliver a more wooded, quieter vibe than the casino corridor.",
        ],
      },
      {
        type: "paragraph",
        text: "Bear-aware camping is not optional here — it is required. Use bear boxes, never leave food in your tent, and follow all posted regulations. Tahoe's wildlife was here first.",
      },
      {
        type: "heading",
        text: "Fishing: big lake, big trout, big mornings",
      },
      {
        type: "paragraph",
        text: "Lake Tahoe fishing is a morning sport. The lake is deep, cold, and full of mackinaw (lake trout), kokanee salmon, brown trout, and rainbows. Shore fishing at places like Taylor Creek in the fall during the kokanee run is a Tahoe rite of passage. For the full experience, book a charter and let a captain put you on the fish while you take in 360 degrees of mountain scenery.",
      },
      {
        type: "list",
        items: [
          "Charter fishing — Half-day and full-day trips run from South Shore marinas year-round. All gear is typically included; just show up ready for an early start.",
          "Shore fishing — Taylor Creek, various public piers, and rocky shoreline access points around the lake. Check California and Nevada regulations and limits before you keep anything.",
          "Ice fishing — Yes, winter anglers drill holes in the ice. Completely different vibe from summer — but very Tahoe.",
        ],
      },
      {
        type: "heading",
        text: "Kayaking & SUP: get on the water before the wind does",
      },
      {
        type: "image",
        image: {
          src: "/images/blog/outdoors-kayak-sup-tahoe.jpg",
          alt: "Kayaker and paddleboarder on clear blue Lake Tahoe water with mountains in the background",
          caption:
            "Morning paddle sessions beat afternoon chop — rent early and paddle the shoreline while the lake is still glass.",
        },
      },
      {
        type: "paragraph",
        text: "This might be the single best summer activity on the lake. Tahoe water is famously clear and cold — which is exactly why it looks like a postcard from a kayak or SUP. The wind typically picks up from 2–6 PM, so morning and sunset sessions are the move. Paddle Emerald Bay toward Fannette Island, explore the Upper Truckee marsh from Lakeview Commons, or cruise the boulder shoreline at Sand Harbor on the East Shore.",
      },
      {
        type: "paragraph",
        text: "South Shore renters: Kayak Tahoe operates at Vikingsholm (Emerald Bay), Baldwin Beach, and Pope Beach — first-come, first-served, 10 AM–5 PM seasonally. South Tahoe Kayak & Paddleboard sits at Lakeview Commons with guided tours and daily rentals. Action Watersports at Lakeside Marina and nearby marinas rent kayaks and SUPs right in the casino corridor. Clearly Tahoe offers clear-bottom kayaks from Sand Harbor (reservations recommended for park entry) and guided tours from multiple locations.",
      },
      {
        type: "paragraph",
        text: "North Shore renters: Tahoe City Kayak at Commons Beach has been putting paddlers on the water since 1997 — shallow launch, protected water, and great for beginners. Tahoe Adventure Company launches from Tahoe Vista Recreation Area with single and double kayaks plus SUPs. North Tahoe Watersports runs kayak and SUP rentals from Kings Beach and Tahoe City locations seasonally. Clearly Tahoe at Sand Harbor is worth the drive for turquoise water and iconic boulder beaches.",
      },
      {
        type: "heading",
        text: "Mountain biking: from family paths to the Flume Trail",
      },
      {
        type: "paragraph",
        text: "Tahoe is legitimately one of the best mountain bike destinations in the West. The Flume Trail on the North Shore is legendary — exposed singletrack with lake views that make you forget you are working hard. On the South Shore, the Pope-Baldwin bike path through the national forest is paved, scenic, and perfect for families, while Corral, Armstrong, and the Christmas Valley networks deliver real singletrack for experienced riders.",
      },
      {
        type: "list",
        items: [
          "Flume Trail (North Shore) — Shuttle up, ride down, try not to stare at the lake instead of the trail. Rent from Flume Trail Bikes in Incline Village.",
          "Pope-Baldwin Trail (South Shore) — Start at Anderson's Bicycle Rental for direct trail access. Paved, forested, beaches along the way.",
          "Tahoe Rim Trail sections — Epic backcountry riding for those with fitness and navigation skills.",
          "Bike shops — South Shore Bikes, Tahoe Bike Company, and Anderson's on the South Shore; Flume Trail Bikes and Tahoe Adventure Company on the North Shore all rent and service.",
        ],
      },
      {
        type: "heading",
        text: "Motorcycles around the lake: my personal favorite",
      },
      {
        type: "image",
        image: {
          src: "/images/blog/outdoors-motorcycle-tahoe.jpg",
          alt: "Motorcyclist on a scenic highway overlooking Lake Tahoe in summer",
          caption:
            "The ~72-mile loop around Lake Tahoe is one of the great motorcycle rides in the American West.",
        },
      },
      {
        type: "paragraph",
        text: "I will be honest — this is my favorite way to experience Tahoe. Riding a motorcycle around the lake is pure freedom: the smell of pine, the elevation changes, the corners along Highway 89 and Highway 28, and the moment you come around a bend and the entire lake opens up below you. I have been riding South Lake Tahoe for more than 25 years, and the main loop still gets me every single time.",
      },
      {
        type: "paragraph",
        text: "The classic lake loop is roughly 72–80 miles depending on your route. From South Lake Tahoe, head north on Highway 89 through Camp Richardson and Emerald Bay, continue to Tahoe City, then take Highway 28 along the East Shore through Incline Village and back down Highway 50 to Stateline. Allow a full morning or afternoon. Stop at Emerald Bay, Sand Harbor, and Zephyr Cove. Fill up before you go — gas stations are sparse on some stretches.",
      },
      {
        type: "list",
        items: [
          "Rider level: Novice-friendly on the main loop — well-paved, well-marked, incredible scenery.",
          "Beyond the loop — Kingsbury Grade over to Carson Valley, the Virginia City loop, Monitor Pass, and Tioga Pass toward Yosemite are all legendary day rides from Tahoe for intermediate and advanced riders.",
          "Safety — Watch for sand on corners early season, deer at dusk, and tourists pulling RVs on summer weekends. Ride your own ride.",
        ],
      },
      {
        type: "heading",
        text: "Winter: skiing & snowboarding on world-class terrain",
      },
      {
        type: "image",
        image: {
          src: "/images/blog/outdoors-ski-tahoe.jpg",
          alt: "Skier on fresh powder at a Lake Tahoe resort with mountain and lake views",
          caption:
            "When summer ends, Tahoe transforms — and the ski resorts are among the best in the country.",
        },
      },
      {
        type: "paragraph",
        text: "Winter is a different animal entirely — and Tahoe does it as well as anywhere on the planet. The basin has multiple major resorts within an hour of each other, which means you can chase storms, ski trees at Kirkwood, rip groomers at Northstar, or take the gondola at Heavenly and stare at the entire lake while you ride.",
      },
      {
        type: "list",
        items: [
          "Heavenly Mountain Resort (South Shore) — Massive terrain straddling California and Nevada, lake views from the summit, and walkable access from Stateline. The complete South Shore ski experience.",
          "Palisades Tahoe (North/West Shore) — Formerly Squaw Valley — Olympic heritage, expert terrain, and one of the most iconic ski mountains in America.",
          "Northstar California (North Shore) — Great for families and intermediates, excellent village, strong grooming, and a polished resort experience.",
          "Kirkwood Mountain Resort — South of the lake; deep snow, steep terrain, and a cult following among serious skiers and riders.",
          "Sierra-at-Tahoe — South Shore favorite with tree skiing, a laid-back vibe, and easy access from Highway 50.",
        ],
      },
      {
        type: "paragraph",
        text: "Book lodging and lift tickets early for holiday weeks and powder weekends. Check chain requirements on mountain passes, carry a shovel and blankets in your car, and know that a bluebird day after a storm is one of the best feelings in the world.",
      },
      {
        type: "heading",
        text: "Planning your Tahoe outdoor weekend",
      },
      {
        type: "list",
        items: [
          "Summer mornings are sacred — paddle, fish, or hike before 10 AM when possible.",
          "Reserve campgrounds and charter fishing trips early; kayak rentals are often first-come, first-served — arrive early on summer Saturdays.",
          "South Shore = highest concentration of rentals, casinos, and Heavenly access. North Shore = Flume Trail, Palisades, Northstar, and quieter lake culture.",
          "Winter = check road conditions on 80, 50, and 89 before every mountain drive.",
          "Leave No Trace — pack out what you pack in, respect fire restrictions, and keep Tahoe blue.",
        ],
      },
      {
        type: "paragraph",
        text: "Whether you are here for a wedding, a vacation, or because you finally decided life is too short to not see this lake from a kayak, a bike, or the back of a motorcycle — get outside. Tahoe is waiting. Use the directory below for rental companies and resources on both shores, and make this the trip where you actually do the things you have been scrolling past on Instagram for years.",
      },
    ],
    venues: [
      {
        name: "Kayak Tahoe",
        area: "South Lake Tahoe, CA (South Shore)",
        type: "Kayak & SUP Rentals",
        phone: "(530) 544-2011",
        hours: "Seasonal; 10 AM–5 PM at Vikingsholm, Baldwin Beach & Pope Beach. Last rental 4 PM.",
        website: "https://kayaktahoe.com/",
        notes: "Emerald Bay paddling; first-come, first-served. No phone reservations.",
      },
      {
        name: "South Tahoe Kayak & Paddleboard",
        area: "South Lake Tahoe, CA (South Shore)",
        type: "Kayak & SUP Rentals",
        address: "1004 Lake View Ave., South Lake Tahoe, CA 96150",
        phone: "(530) 581-4336",
        hours: "Daily 9:30 AM–5:30 PM (weather permitting, summer season).",
        website: "https://southtahoekayak.com/",
        notes: "Lakeview Commons beach; Secret Beach access, guided tours, sunset paddles.",
      },
      {
        name: "Action Watersports — Lakeside Marina",
        area: "South Lake Tahoe, CA (South Shore)",
        type: "Kayak & SUP Rentals",
        address: "900 Ski Run Blvd., South Lake Tahoe, CA 96150",
        phone: "(530) 541-6161",
        hours: "Seasonal summer hours; book online for availability.",
        website: "https://action-watersports.com/lakeside-marina-rentals/",
        notes: "Kayak, SUP, pedal boats near the casino corridor. Also at Camp Richardson, Timber Cove & Round Hill Pines.",
      },
      {
        name: "Clearly Tahoe — Sand Harbor Rentals",
        area: "Incline Village, NV (East Shore)",
        type: "Kayak & SUP Rentals",
        phone: "(530) 554-4664",
        hours: "Daily 8 AM–6 PM in season; last rental out by 5 PM.",
        website: "https://clearlytahoerentals.com/",
        notes: "Walk-up rentals inside Sand Harbor State Park; clear kayaks. Park day-use reservation recommended.",
      },
      {
        name: "Tahoe Sport Fishing",
        area: "South Lake Tahoe, CA (South Shore)",
        type: "Fishing Charters",
        address: "Ski Run Marina, 900 Ski Run Blvd. #101, South Lake Tahoe, CA 96150",
        phone: "(530) 541-5448",
        hours: "Charters daily; book online. Year-round fishing.",
        website: "https://tahoesportfishing.com/",
        notes: "Lake trout, kokanee, and rainbow charters since 1953. All gear included.",
      },
      {
        name: "Anderson's Bicycle Rental",
        area: "South Lake Tahoe, CA (South Shore)",
        type: "Bike Rentals",
        address: "615 Emerald Bay Rd., South Lake Tahoe, CA 96150",
        phone: "(530) 541-0500",
        hours: "Summer ~9 AM–6 PM daily (weather permitting). Seasonal spring/fall hours vary.",
        website: "https://andersonsbicyclerental.com/",
        notes: "Direct access to Pope-Baldwin paved trail. Family cruisers, mountain bikes, kids gear.",
      },
      {
        name: "South Shore Bikes",
        area: "South Lake Tahoe, CA (South Shore)",
        type: "Mountain Bike Rentals",
        address: "2175 Lake Tahoe Blvd., South Lake Tahoe, CA 96150",
        phone: "(530) 544-7433",
        hours: "Summer 9 AM–6 PM daily; winter 10 AM–6 PM.",
        website: "https://southshorebikestahoe.com/",
        notes: "E-bikes, mountain, road & cruiser rentals. Trail shuttles by appointment.",
      },
      {
        name: "Tahoe Bike Company",
        area: "South Lake Tahoe, CA (South Shore)",
        type: "Bike & E-Bike Rentals",
        address: "3131 Harrison Ave., South Lake Tahoe, CA 96150",
        phone: "(530) 600-0267",
        hours: "Daily 9 AM–6 PM; last rental 4 PM.",
        website: "https://www.tahoebikeco.com/",
        notes: "Largest e-bike and surrey selection on the South Shore. Lakeside trail access.",
      },
      {
        name: "D.L. Bliss & Emerald Bay State Parks",
        area: "South Lake Tahoe, CA (South Shore)",
        type: "Camping",
        phone: "(530) 525-7277",
        hours: "Seasonal camping May–October; reserve early.",
        website: "https://www.parks.ca.gov/?page_id=505",
        notes: "Iconic South Shore campgrounds with lake access and hiking trailheads.",
      },
      {
        name: "Tahoe City Kayak & Paddleboard",
        area: "Tahoe City, CA (North Shore)",
        type: "Kayak & SUP Rentals",
        address: "400 North Lake Blvd., Tahoe City, CA 96145",
        phone: "(530) 581-4336",
        hours: "Daily 9:30 AM–5:30 PM on-water; retail 9 AM–6 PM.",
        website: "https://tahoecitykayak.com/",
        notes: "Commons Beach launch; shallow water, great for beginners. Guided tours available.",
      },
      {
        name: "Tahoe Adventure Company",
        area: "Tahoe Vista, CA (North Shore)",
        type: "Kayak, SUP & Bike Rentals",
        address: "7010 North Lake Blvd., Tahoe Vista, CA 96146",
        phone: "(530) 913-9212",
        hours: "Summer season daily; book online. Kayak/SUP from Tahoe Vista beach.",
        website: "https://tahoeadventurecompany.com/rentals/north-lake-tahoe-kayak-and-sup-rentals/",
        notes: "Beach-front launch, clear kayak rentals, mountain bike rentals, guided tours.",
      },
      {
        name: "North Tahoe Watersports",
        area: "Kings Beach, CA (North Shore)",
        type: "Kayak & SUP Rentals",
        address: "8400 North Lake Blvd., Kings Beach, CA 96143",
        phone: "(530) 546-9253",
        hours: "Seasonal ~9 AM–5 PM Memorial Day through Labor Day.",
        website: "https://northtahoewatersports.com/",
        notes: "Kayak and SUP at Kings Beach and Tahoe City. Also boats and jet skis.",
      },
      {
        name: "Flume Trail Bikes",
        area: "Incline Village, NV (North Shore)",
        type: "Mountain Bike Rentals",
        address: "111 Inchue Way, Incline Village, NV 89451",
        phone: "(775) 833-8844",
        hours: "Summer season daily; call for seasonal hours.",
        website: "https://www.flumetrailtahoe.com/",
        notes: "Flume Trail shuttles and mountain bike rentals. The North Shore classic.",
      },
      {
        name: "Hooked Up Sport Fishing",
        area: "Carnelian Bay, CA (North Shore)",
        type: "Fishing Charters",
        phone: "(530) 546-2220",
        hours: "Charters by reservation; call or book online.",
        website: "https://hookeduplaketahoe.com/",
        notes: "North Shore fishing charters on Lake Tahoe.",
      },
      {
        name: "Heavenly Mountain Resort",
        area: "South Lake Tahoe, CA/NV (South Shore)",
        type: "Ski & Snowboard Resort",
        phone: "(775) 586-7000",
        hours: "Winter season; lift hours vary daily — check resort site.",
        website: "https://www.skiheavenly.com/",
        notes: "Lake views from the summit; South Shore's flagship winter resort.",
      },
      {
        name: "Palisades Tahoe",
        area: "Olympic Valley, CA (North Shore)",
        type: "Ski & Snowboard Resort",
        phone: "(530) 583-3558",
        hours: "Winter season; lift hours vary daily — check resort site.",
        website: "https://www.palisadestahoe.com/",
        notes: "Olympic heritage terrain; expert steeps and vast acreage.",
      },
      {
        name: "Northstar California Resort",
        area: "Truckee, CA (North Shore)",
        type: "Ski & Snowboard Resort",
        phone: "(530) 562-2267",
        hours: "Winter season; lift hours vary daily — check resort site.",
        website: "https://www.northstarcalifornia.com/",
        notes: "Family-friendly grooming, village amenities, strong intermediate terrain.",
      },
      {
        name: "Kirkwood Mountain Resort",
        area: "Kirkwood, CA (South Shore region)",
        type: "Ski & Snowboard Resort",
        phone: "(209) 258-6000",
        hours: "Winter season; lift hours vary daily — check resort site.",
        website: "https://www.kirkwood.com/",
        notes: "Deep snow and steep terrain; cult favorite among advanced skiers.",
      },
      {
        name: "Sierra-at-Tahoe",
        area: "Twin Bridges, CA (South Shore region)",
        type: "Ski & Snowboard Resort",
        phone: "(530) 659-7453",
        hours: "Winter season; lift hours vary daily — check resort site.",
        website: "https://www.sierraattahoe.com/",
        notes: "Tree skiing and laid-back South Shore mountain vibe.",
      },
    ],
  },
  {
    slug: "lake-tahoe-wedding-florists",
    title: "Lake Tahoe Wedding Florists: My Pick for the Best Floral Design",
    excerpt:
      "From ceremony arches on the lake to reception centerpieces that photograph like art — here's how to choose a Tahoe florist, why I recommend Create With T on the South Shore, and solid North Shore alternatives.",
    publishedAt: "2025-09-18",
    author: "Clint Davidson",
    category: "Wedding Planning",
    readTimeMinutes: 11,
    directoryTitle: "Lake Tahoe florists — quick reference",
    directoryDescription:
      "Contact details and inquiry links are listed for convenience. Availability, minimums, and seasonal pricing change — always confirm directly with each studio before you book.",
    content: [
      {
        type: "paragraph",
        text: "Florals are not a finishing touch at a Lake Tahoe wedding — they are part of the story. The lake, the granite, the pine forest, and the light at elevation already give you a backdrop most destinations cannot touch. The right floral designer does not compete with that scenery. They frame it, soften it, and translate your vision into something that feels unmistakably yours.",
      },
      {
        type: "paragraph",
        text: "I have DJ'd hundreds of celebrations around this basin, and I can tell you this: couples who invest in great florals rarely regret it. Guests notice. Photographers notice. You notice the moment you walk into the ceremony space. This guide is my honest take on Tahoe floral design — who I recommend, what to book early, and how flowers fit into the bigger production picture when you are planning music, timeline, and guest flow.",
      },
      {
        type: "heading",
        text: "Why florals matter more at Tahoe than you think",
      },
      {
        type: "image",
        image: {
          src: "/images/blog/florals-lakeside-ceremony.jpg",
          alt: "Outdoor wedding ceremony setup on a Lake Tahoe lakeside lawn with floral aisle markers",
          caption:
            "Tahoe ceremonies are often outdoors — florals anchor the space and give photographers a focal point when the wind picks up.",
        },
      },
      {
        type: "paragraph",
        text: "Tahoe weddings run on variables you do not get in a hotel ballroom: afternoon wind off the lake, temperature swings between ceremony and reception, load-in windows at private estates, and venue rules about what can be staked, hung, or placed on historic wood floors. A local florist who knows the basin is not a luxury — it is insurance.",
      },
      {
        type: "list",
        items: [
          "Outdoor ceremonies need structure — arches, aisle markers, and altar arrangements that stay composed when gusts roll through.",
          "Reception florals should match your lighting plan — candlelight, uplighting, and dance-floor energy all change how colors read in photos and in person.",
          "Season matters — late-spring peonies, summer garden roses, and autumn dahlias each tell a different Tahoe story.",
          "Timeline coordination — personal flowers often need delivery to getting-ready suites while ceremony installs happen simultaneously at the venue.",
        ],
      },
      {
        type: "paragraph",
        text: "The best floral teams communicate with your planner, photographer, and entertainment vendor. When I know where the ceremony arch sits relative to the DJ booth and where the sweetheart table lands in the lighting rig, everyone's job gets easier — and your day feels seamless instead of stitched together at the last minute.",
      },
      {
        type: "heading",
        text: "My pick for the best floral design: Create With T",
      },
      {
        type: "image",
        image: {
          src: "/images/blog/florals-ceremony-arch-tahoe.jpg",
          alt: "Lush floral ceremony arch with roses and greenery overlooking Lake Tahoe",
          caption:
            "Create With T builds elevated, artful designs — the kind of ceremony moments that stop you in your tracks.",
        },
      },
      {
        type: "paragraph",
        text: "If you want my straight answer on the best floral design around Lake Tahoe, it is Create With T on the South Shore. Tracey Duncan and her team are not just arranging flowers — they are bringing what their site calls \"floral magic to your special day,\" and after seeing their work at events across the basin, I believe that tagline.",
      },
      {
        type: "paragraph",
        text: "Create With T was established in 2018 with a clear mission: authentic, creative, and inspiring florals that help craft dreams into reality. That is not marketing fluff — it is how they operate. Tracey is the owner, creative director, and lead designer, and her background in landscape architecture shows up in the way she thinks about scale, color, and how installations sit in real outdoor spaces. She is a California Certified Florist with competition credentials and a portfolio that spans classic Tahoe romance to completely non-traditional celebrations.",
      },
      {
        type: "list",
        items: [
          "Consultation-first process — they listen before they prescribe, and they are known for idea boards with color palettes, centerpiece concepts, and visual direction you can actually react to.",
          "Story-driven design — elevated, artful arrangements that tell your story rather than forcing you into a template.",
          "Communication that calms nervous couples — responsive, patient, and willing to meet in person when you are in town for a venue walkthrough.",
          "Full-event capability — bouquets, ceremony, reception, and those thoughtful extras that make a room feel finished.",
        ],
      },
      {
        type: "paragraph",
        text: "Their Love Notes say what I have seen on the ground: couples who showed up with half-formed ideas and left with installations that made them sit down and take it in. One review described Tracey's work as the moment the whole wedding finally felt real. Another called her an artist who turned a lakeside ceremony and garden reception into pure magic. That is the standard I want for every couple I work with.",
      },
      {
        type: "paragraph",
        text: "Start with their planning questionnaire or reach out through Instagram at @Create_with_t — Tracey's team is approachable, professional, and genuinely excited about the design process. If you are marrying on the South Shore, at Edgewood, a Stateline resort, a Ski Run restaurant, or a private estate above the lake, Create With T is who I recommend first.",
      },
      {
        type: "heading",
        text: "Ceremony & reception: what to book",
      },
      {
        type: "image",
        image: {
          src: "/images/blog/florals-bridal-bouquet-tahoe.jpg",
          alt: "Elegant bridal bouquet with garden roses and trailing greenery in Tahoe",
          caption:
            "Personal flowers set the palette — bouquets, boutonnieres, and corsages should feel connected to your ceremony and table designs.",
        },
      },
      {
        type: "paragraph",
        text: "Most full-service wedding florals break into four buckets. Knowing the language helps you compare proposals apples to apples.",
      },
      {
        type: "list",
        items: [
          "Personal flowers — bridal bouquet, bridesmaid bouquets, boutonnieres, corsages, flower crowns, and toss arrangements.",
          "Ceremony — arch or arbor florals, aisle markers, altar arrangements, petal paths, and ceremony exit pieces.",
          "Cocktail hour — statement arrangements on bar tops, welcome table florals, and accent pieces near lounge furniture.",
          "Reception — centerpieces, sweetheart or head table designs, cake flowers, and any hanging or elevated installations.",
        ],
      },
      {
        type: "image",
        image: {
          src: "/images/blog/florals-reception-centerpieces.jpg",
          alt: "Artful wedding reception table centerpieces at a Lake Tahoe lodge",
          caption:
            "Reception florals should look incredible in person and in photos — especially once your lighting design kicks in.",
        },
      },
      {
        type: "paragraph",
        text: "Pro tip: if budget is tight, protect ceremony impact and personal flowers first. Guests experience those moments directly. Reception centerpieces can be simplified — or mixed with candles and greenery — without losing the magic. A great designer will tell you where to invest and where to streamline without making you feel like you are compromising.",
      },
      {
        type: "heading",
        text: "North Shore & Truckee: strong alternatives worth knowing",
      },
      {
        type: "paragraph",
        text: "North Lake Tahoe and Truckee have their own floral ecosystem — and if you are marrying at the Hyatt Regency, Gar Woods, Granlibakken, a Sugar Pine Point estate, or anywhere on the West Shore, you will want a team that knows that side of the basin. Create With T is my top pick basin-wide for pure design talent, but these North Shore studios are excellent options depending on your style, venue, and logistics.",
      },
      {
        type: "list",
        items: [
          "Wyld Peony (Incline Village) — North Lake Tahoe's only dedicated storefront florist, with walk-in designs and custom wedding work. Owner Jen brings heart, passion, and a knack for unique containers and unexpected blooms. Great for Incline Village, Crystal Bay, and North Shore events that want a polished, distinctive look.",
          "Golden Florals / Golden Flowers (Incline Village) — A sustainable Lake Tahoe wedding studio creating bold, artful, seasonally grown designs — from editorial bouquets to full installations. Ideal for couples who want intentional, eco-conscious florals with a fashion-forward edge. They have done beautiful work at major North Shore properties including Hyatt Regency Tahoe.",
          "Love and Lupines (Truckee) — Floral design rooted in the Sierra Nevada, with a creative vision shaped by Tahoe's natural surroundings and locally sourced flowers when possible. Meghon and wedding specialist Alyssa run a structured, planner-friendly process with design boards, retainers, and clear timelines — excellent for destination couples working remotely.",
          "Ash + Lily (Truckee) — A boutique studio founded by lead designer Annie Hull, known for modern, upscale, artistic arrangements for weddings and private events across Tahoe, Truckee, and Reno. Sophisticated and contemporary — a strong fit for couples who want editorial elegance.",
          "Art in Bloom (serves Greater Lake Tahoe) — Elevated event florals with a personal, design-forward approach. Worth a conversation for North Shore and West Shore weddings that need a flexible creative partner.",
          "Reno Tahoe Event Florist — 20+ years of experience creating distinctive designs across the Reno–Tahoe region. A practical option when you want seasoned event florals with free consultation availability by phone for out-of-area couples.",
        ],
      },
      {
        type: "paragraph",
        text: "If you are North Shore-first, start with Wyld Peony or Golden Florals for Incline Village proximity, Love and Lupines or Ash + Lily for Truckee and West Shore weddings, and keep Create With T on your list if your heart is set on Tracey's design language — she works South Shore events regularly and the portfolio speaks for itself.",
      },
      {
        type: "heading",
        text: "How florals connect to your DJ & event timeline",
      },
      {
        type: "paragraph",
        text: "Here is what most couples do not think about until the week of the wedding: florals and entertainment share the same real estate. Your ceremony arch placement affects where wireless microphones can go. Your sweetheart table position affects where I place subs and how dance-floor lighting wraps the room. Cocktail-hour lounge furniture determines speaker coverage for background music before the reception opens.",
      },
      {
        type: "paragraph",
        text: "At I DJ Events, I like to see finalized floor plans and floral layouts about two weeks out — same timeline most florists want for seating charts and room diagrams. When your florist, planner, and DJ are working from the same map, transitions feel effortless: ceremony ends, cocktail hour flows, introductions hit, and the dance floor opens without awkward gaps or last-minute furniture moves.",
      },
      {
        type: "heading",
        text: "Booking tips: budget, season & Tahoe realities",
      },
      {
        type: "list",
        items: [
          "Book early — top Tahoe florists fill peak summer and fall weekends 9–12 months out. September and October are gold; June through August move even faster.",
          "Share inspiration honestly — Pinterest boards are fine, but tell your designer what you hate as clearly as what you love.",
          "Ask about wind strategy for outdoor installs — weighted mechanics, lower profiles, and hardy blooms matter at elevation.",
          "Confirm delivery windows — personal flowers, ceremony setup, and reception strikes all happen on different schedules.",
          "Budget range — full wedding florals at Tahoe often start around $3,500–$5,000 for intimate events and scale with guest count, installation complexity, and flower variety. Get a proposal before you assume you are priced out.",
          "Winter weddings — snow, heated tents, and shorter daylight change the playbook. Tracey and other basin florists have strong winter portfolios — lean on their experience.",
        ],
      },
      {
        type: "paragraph",
        text: "Your flowers will be in more photos than almost any other detail on your wedding day. They set the color story. They shape how guests feel when they walk into the room. And at Tahoe, they are the bridge between the natural beauty outside and the celebration you are building inside.",
      },
      {
        type: "paragraph",
        text: "My recommendation: start with Create With T if you want the best floral design I have seen around this lake. Explore the North Shore studios below if your venue and vision pull you that direction. Bring your florist into the planning conversation early — and bring your entertainment team in at the same time. The best Tahoe weddings are designed as one experience, not a stack of separate vendor bookings.",
      },
    ],
    venues: [
      {
        name: "Create With T — Floral Design",
        area: "South Lake Tahoe, CA (South Shore)",
        type: "Wedding & Event Florist",
        phone: "(530) 721-1907",
        email: "Tracey@createwitht.com",
        website: "https://www.createwitht.com/",
        notes:
          "Clint's top pick. Established 2018; consultation via Typeform or Instagram @Create_with_t. Full wedding florals, custom installs, and story-driven design boards.",
      },
      {
        name: "Wyld Peony",
        area: "Incline Village, NV (North Shore)",
        type: "Florist & Event Design Studio",
        address: "797 Southwood Blvd., Suite 15, Incline Village, NV 89451",
        phone: "(775) 298-2799",
        hours: "Tue–Sat 10:00 AM–5:00 PM",
        website: "https://wyldpeony.com/",
        notes:
          "Only dedicated storefront florist in North Lake Tahoe; weddings, events, walk-in arrangements, and custom designs.",
      },
      {
        name: "Golden Florals (Golden Flowers)",
        area: "Incline Village, NV (North Shore)",
        type: "Sustainable Wedding Florist",
        phone: "(530) 557-7689",
        email: "brittany@goldenflorals.com",
        website: "https://goldenflorals.com/",
        notes:
          "Bold, artful, seasonally grown designs; editorial bouquets to full installations. Hyatt Regency Tahoe and North Shore weddings.",
      },
      {
        name: "Love and Lupines",
        area: "Truckee, CA (North Shore)",
        type: "Wedding & Event Florist",
        address: "10736 Pioneer Trail, Unit 6, Truckee, CA 96161",
        email: "meghon@loveandlupines.com",
        website: "https://loveandlupines.com/",
        notes:
          "Sierra-rooted design with locally sourced flowers when possible; structured planning process and design boards.",
      },
      {
        name: "Ash + Lily Floral Design",
        area: "Truckee, CA (North Shore)",
        type: "Luxury Wedding & Event Florist",
        address: "12177 Business Park Dr., Suite 7, Truckee, CA 96161",
        phone: "(530) 214-8486",
        website: "https://www.ashandlily.com/",
        notes:
          "Modern, upscale floral studio by lead designer Annie Hull; weddings and private events across Tahoe, Truckee, and Reno.",
      },
      {
        name: "Art in Bloom",
        area: "Lake Tahoe region (North Shore & basin)",
        type: "Event Floral Design",
        phone: "(775) 720-7204",
        email: "hattie@artinbloomfloral.design",
        website: "https://artinbloomfloral.design/",
        notes: "Elevated floral design for weddings and special events throughout the greater Lake Tahoe area.",
      },
      {
        name: "Reno Tahoe Event Florist",
        area: "Reno–Tahoe region",
        type: "Wedding & Event Florist",
        phone: "(775) 544-1610",
        email: "tahoeflorist@gmail.com",
        website: "https://renotahoeeventflorist.com/",
        notes:
          "20+ years of event florals; free one-hour consultation available by phone for out-of-area couples.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPublishedBlogPosts() {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Los_Angeles",
  }).format(new Date(date));
}