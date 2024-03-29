const database = {
    fish: [
        {
          image: "https://www.aquariumofpacific.org/images/made_new/images-uploads-clownfish_600_q85.jpg",
          name: "Clownfish",
          species: "Amphiprioninae",
          length: 8,          location: "Great Barrier Reef",
          food: "Plankton"
        },
        {
          image: "https://apps.gameshowhub.com/thumb2/xKHNXTSp4lFeyt7.jpg",
          name: "Angelfish",
          species: "Pterophyllum",
          length: 6,          location: "Amazon River",
          food: "Algae"
        },
        {
          image: "https://www.thealexandriazoo.com/images/animals/BlueTang02.jpg",
          name: "Blue Tang",
          species: "Paracanthurus hepatus",
          length: 12 ,
          location: "Indo-Pacific Ocean",
          food: "Algae"
        },
        {
          image: "https://content.instructables.com/FV2/6SBO/FLROKI2Q/FV26SBOFLROKI2Q.jpg?auto=webp",
          name: "Betta",
          species: "Betta splendens",
          length: 3,          location: "Southeast Asia",
          food: "Insects"
        },
        {
          image: "https://azgardens.com/wp-content/uploads/2017/05/Super-Red-Turquoise-Discus-Fish.jpg",
          name: "Discus",
          species: "Symphysodon",
          length: 8,          location: "Amazon River",
          food: "Insects"
        },
        {
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Guppy-male.jpg/640px-Guppy-male.jpg",
          name: "Guppy",
          species: "Poecilia reticulata",
          length: 1.5,
          location: "South America",
          food: "Algae"
        },
        {
          image: "https://s3-us-west-2.amazonaws.com/getgillsbucket/media/images/Dans-Fish-Long-Fin-Neon-Tetra-Long-Fin-Neon-Tetra-Paracheirodon-innesi-4c657b011f1a476ba407a666e48ff30e-14849.jpg",
          name: "Tetra",
          species: "Hyphessobrycon",
          length: 2,          location: "Amazon River",
          food: "Insects"
        },
        {
          image: "https://animal-world.com/wp-content/uploads/2023/08/Synchiropus_splendidus_01.jpg",
          name: "Mandarinfish",
          species: "Synchiropus splendidus",
          length: 3,          location: "Pacific Ocean",
          food: "Small Crustaceans"
        },
        {
          image: "https://www.georgiaaquarium.org/wp-content/uploads/2019/05/red-lionfish-3.jpg",
          name: "Lionfish",
          species: "Pterois",
          length: 15 ,
          location: "Indo-Pacific",
          food: "Small Fish"
        },
        {
          image: "https://www.waikikiaquarium.org/wp-content/uploads/2013/11/moorish_idol_620.jpg",
          name: "Moorish Idol",
          species: "Zanclus cornutus",
          length: 7,          location: "Indo-Pacific",
          food: "Sponges"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Neon Tetra",
          species: "Paracheirodon innesi",
          length: 1 ,        location: "South America",
          food: "Insects"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Piranha",
          species: "Pygocentrus",
          length: 12 ,
          location: "Amazon River",
          food: "Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Rainbowfish",
          species: "Melanotaenia",
          length: 4,
          location: "Australia",
          food: "Insects"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Swordtail",
          species: "Xiphophorus hellerii",
          length: 4,          location: "Central America",
          food: "Algae"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Zebrafish",
          species: "Danio rerio",
          length: 2,
          location: "Southeast Asia",
          food: "Insects"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Oscar",
          species: "Astronotus ocellatus",
          length: 12 ,
          location: "South America",
          food: "Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Goldfish",
          species: "Carassius auratus",
          length: 6,          location: "China",
          food: "Algae"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Barracuda",
          species: "Sphyraena",
          length: 3,
          location: "Tropical Oceans",
          food: "Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Catfish",
          species: "Siluriformes",
          length: 2,
          location: "Worldwide",
          food: "Insects"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Pufferfish",
          species: "Tetraodontidae",
          length: 12 ,
          location: "Tropical Oceans",
          food: "Crustaceans"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Anemonefish",
          species: "Amphiprioninae",
          length: 4,          location: "Pacific Ocean",
          food: "Plankton"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Mackerel",
          species: "Scombridae",
          length: 18 ,
          location: "Worldwide",
          food: "Small Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Salmon",
          species: "Salmo",
          length: 3,
          location: "North Atlantic",
          food: "Small Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Trout",
          species: "Salmo",
          length: 2,
          location: "Freshwater Worldwide",
          food: "Insects"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Stingray",
          species: "Dasyatidae",
          length: 2,
          location: "Tropical Oceans",
          food: "Crustaceans"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Shark",
          species: "Selachimorpha",
          length: 72 ,
          location: "Worldwide",
          food: "Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Octopus",
          species: "Octopoda",
          length: 2,
          location: "Worldwide",
          food: "Crustaceans"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Sardine",
          species: "Sardina pilchardus",
          length: 12 ,
          location: "Worldwide",
          food: "Plankton"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Herring",
          species: "Clupea",
          length: 12 ,
          location: "Worldwide",
          food: "Plankton"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Cod",
          species: "Gadus",
          length: 3,
          location: "North Atlantic",
          food: "Small Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Tuna",
          species: "Thunnini",
          length: 72 ,
          location: "Worldwide",
          food: "Small Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Marlin",
          species: "Istiophorus",
          length: 180,
          location: "Worldwide",
          food: "Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Swordfish",
          species: "Xiphias",
          length: 144,
          location: "Worldwide",
          food: "Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Sea Bass",
          species: "Dicentrarchus",
          length: 3,
          location: "Worldwide",
          food: "Small Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Anchovy",
          species: "Engraulidae",
          length: 8,          location: "Worldwide",
          food: "Plankton"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Eel",
          species: "Anguilliformes",
          length: 4,
          location: "Worldwide",
          food: "Small Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Flounder",
          species: "Pleuronectidae",
          length: 2,
          location: "Worldwide",
          food: "Crustaceans"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Grouper",
          species: "Serranidae",
          length: 3,
          location: "Worldwide",
          food: "Small Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Halibut",
          species: "Hippoglossus",
          length: 72 ,
          location: "Worldwide",
          food: "Crustaceans"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Haddock",
          species: "Melanogrammus aeglefinus",
          length: 3,
          location: "North Atlantic",
          food: "Small Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Mullet",
          species: "Mugilidae",
          length: 2,
          location: "Worldwide",
          food: "Algae"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Perch",
          species: "Perca",
          length: 12 ,
          location: "Worldwide",
          food: "Insects"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Sardine",
          species: "Sardina pilchardus",
          length: 12 ,
          location: "Worldwide",
          food: "Plankton"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Snapper",
          species: "Lutjanidae",
          length: 2,
          location: "Worldwide",
          food: "Small Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Sole",
          species: "Soleidae",
          length: 12 ,
          location: "Worldwide",
          food: "Crustaceans"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Tilapia",
          species: "Cichlidae",
          length: 12 ,
          location: "Worldwide",
          food: "Algae"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Walleye",
          species: "Sander vitreus",
          length: 3,
          location: "North America",
          food: "Small Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Hake",
          species: "Merluccius",
          length: 2,
          location: "Worldwide",
          food: "Small Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Monkfish",
          species: "Lophius",
          length: 3,
          location: "Worldwide",
          food: "Crustaceans"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Mahi Mahi",
          species: "Coryphaena hippurus",
          length: 72 ,
          location: "Worldwide",
          food: "Small Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Wahoo",
          species: "Acanthocybium solandri",
          length: 72 ,
          location: "Worldwide",
          food: "Small Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Tilefish",
          species: "Malacanthidae",
          length: 2,
          location: "Worldwide",
          food: "Crustaceans"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Rockfish",
          species: "Sebastes",
          length: 2,
          location: "Worldwide",
          food: "Small Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Sockeye Salmon",
          species: "Oncorhynchus nerka",
          length: 3,
          location: "North Pacific",
          food: "Small Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Arctic Char",
          species: "Salvelinus alpinus",
          length: 3,
          location: "Arctic Waters",
          food: "Insects"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Tigerfish",
          species: "Hydrocynus",
          length: 3,
          location: "African Rivers",
          food: "Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Giant Trevally",
          species: "Caranx ignobilis",
          length: 72 ,
          location: "Indo-Pacific",
          food: "Small Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Archerfish",
          species: "Toxotidae",
          length: 8,          
          location: "Southeast Asia",
          food: "Insects"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Albacore",
          species: "Thunnus alalunga",
          length: 72 ,
          location: "Worldwide",
          food: "Small Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Yellowfin Tuna",
          species: "Thunnus albacares",
          length: 72 ,
          location: "Worldwide",
          food: "Small Fish"
        },
        {
          image: "https://diamondpainting5d.com/wp-content/uploads/2022/08/spongebob-fish-diamond-by-numbers.jpg",
          name: "Bluefin Tuna",
          species: "Thunnus thynnus",
          length: 72 ,
          location: "Worldwide",
          food: "Small Fish"
        }
      ],

    cleaning: [
      {
        tankCleaning: "Weekly water changes of 25% and scrubbing algae off tank walls.",
        salinity: "1.025",
        temperature: "78°F"
      },
      {
        tankCleaning: "Bi-weekly filter cleaning and gravel vacuuming.",
        salinity: "1.020",
        temperature: "76°F"
      },
      {
        tankCleaning: "Monthly deep clean including removal of decorations for scrubbing.",
        salinity: "1.022",
        temperature: "77°F"
      },
      {
        tankCleaning: "Regular water testing and adjustment of chemical levels as needed.",
        salinity: "1.024",
        temperature: "79°F"
      },
      {
        tankCleaning: "Fortnightly glass cleaning and equipment maintenance.",
        salinity: "1.018",
        temperature: "75°F"
      }
    ],

    harvest: [
      {
        fish: "Clownfish",
        quote: "Just keep swimming."
      },
      {
        fish: "Angelfish",
        quote: "Life is an adventure, dive in!"
      },
      {
        fish: "Blue Tang",
        quote: "Just keep swimming, just keep swimming."
      },
      {
        fish: "Betta",
        quote: "Fight for what you believe in."
      },
      {
        fish: "Guppy",
        quote: "Live every day to the fullest."
      },
      {
        fish: "Rainbowfish",
        quote: "Embrace your colors."
      },
      {
        fish: "Swordtail",
        quote: "Stand out from the crowd."
      },
      {
        fish: "Anemonefish",
        quote: "Find joy in the little things."
      },
      {
        fish: "Salmon",
        quote: "Swim upstream against the odds."
      },
      {
        fish: "Shark",
        quote: "Keep moving forward, fearlessly."
      },
      {
        fish: "Barracuda",
        quote: "Strike with precision."
      },
      {
        fish: "Walleye",
        quote: "Navigate through darkness with clarity."
      },
      {
        fish: "Tigerfish",
        quote: "Rule your domain."
      },
      {
        fish: "Arctic Char",
        quote: "Adapt to thrive in harsh conditions."
      },
      {
        fish: "Archerfish",
        quote: "Aim true and hit your mark."
      }
    ],

    visited: [
      {
        location: "Kyoto, Japan",
        travelTip: "Visit Fushimi Inari Shrine early in the morning to avoid crowds."
      },
      {
        location: "Paris, France",
        travelTip: "Take a leisurely stroll along the Seine River at sunset for breathtaking views."
      },
      {
        location: "New York City, USA",
        travelTip: "Explore Central Park on foot or by bicycle to discover hidden gems."
      },
      {
        location: "Santorini, Greece",
        travelTip: "Watch the sunset from Oia for an unforgettable experience."
      },
      {
        location: "Rio de Janeiro, Brazil",
        travelTip: "Take a hike up to the Christ the Redeemer statue for panoramic views of the city."
      },
      {
        location: "Sydney, Australia",
        travelTip: "Catch a ferry to Manly Beach for a relaxing day by the ocean."
      },
      {
        location: "Cape Town, South Africa",
        travelTip: "Drive along Chapman's Peak Drive for stunning coastal scenery."
      },
      {
        location: "Reykjavik, Iceland",
        travelTip: "Take a dip in the Blue Lagoon for a relaxing and rejuvenating experience."
      },
      {
        location: "Machu Picchu, Peru",
        travelTip: "Arrive at Machu Picchu early in the morning to see the sunrise over the ancient ruins."
      },
      {
        location: "Dubai, UAE",
        travelTip: "Explore the traditional souks in Old Dubai for unique shopping experiences."
      }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getCleaning = () => {
  return database.cleaning.map(cleaning => ({...cleaning}))
}

export const getHarvest = () => {
  return database.harvest.map(harvest => ({...harvest}))
}

export const getVisited = () => {
  return database.visited.map(visited => ({...visited}))
}