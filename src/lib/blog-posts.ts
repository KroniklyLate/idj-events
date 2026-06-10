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