// const sampleListings = [
//     {
//         title: "Cozy Beachfront Cottage",
//         description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//         image: {
//             url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//             filename: "beachfront_cottage_malibu.jpg"
//         },
//         price: 1500,
//         location: "Malibu",
//         country: "United States",
//     },
//     {
//         title: "Modern Loft in Downtown",
//         description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
//         image: {
//             url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//             filename: "modern_loft_downtown.jpg"
//         },
//         price: 1200,
//         location: "New York City",
//         country: "United States",
//     },
//     {
//         title: "Mountain Retreat",
//         description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
//         image: {
//             url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//             filename: "mountain_retreat.jpg"
//         },
//         price: 1000,
//         location: "Aspen",
//         country: "United States",
//     },
//     {
//         title: "Historic Villa in Tuscany",
//         description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
//         image: {
//             url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//             filename: "historic_villa_tuscany.jpg"
//         },
//         price: 2500,
//         location: "Florence",
//         country: "Italy",
//     },
//     {
//         title: "Secluded Treehouse Getaway",
//         description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
//         image: {
//             url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//             filename: "secluded_treehouse.jpg"
//         },
//         price: 800,
//         location: "Portland",
//         country: "United States",
//     },
//     {
//         title: "Beachfront Paradise",
//         description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
//         image: {
//             url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//             filename: "beachfront_paradise.jpg"
//         },
//         price: 2000,
//         location: "Cancun",
//         country: "Mexico",
//     },
//     {
//         title: "Rustic Cabin by the Lake",
//         description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
//         image: {
//             url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//             filename: "rustic_cabin_lake.jpg"
//         },
//         price: 900,
//         location: "Lake Tahoe",
//         country: "United States",
//     },
//     {
//         title: "Luxury Penthouse with City Views",
//         description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
//         image: {
//             url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//             filename: "luxury_penthouse.jpg"
//         },
//         price: 3500,
//         location: "Los Angeles",
//         country: "United States",
//     },
//     {
//         title: "Ski-In/Ski-Out Chalet",
//         description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
//         image: {
//             url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//             filename: "ski_chalet_verbier.jpg"
//         },
//         price: 3000,
//         location: "Verbier",
//         country: "Switzerland",
//     },

//     {
//         title: "Safari Lodge in the Serengeti",
//         description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
//         image: {
//             url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//             filename: "safari_lodge.jpg"
//         },
//         price: 4000,
//         location: "Serengeti National Park",
//         country: "Tanzania",
//     },
//     {
//         title: "Historic Canal House",
//         description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
//         image: {
//             url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//             filename: "canal_house_amsterdam.jpg"
//         },
//         price: 1800,
//         location: "Amsterdam",
//         country: "Netherlands",
//     },
//     {
//         title: "Private Island Retreat",
//         description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
//         image: {
//             url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//             filename: "private_island_fiji.jpg"
//         },
//         price: 10000,
//         location: "Fiji",
//         country: "Fiji",
//     },
//     {
//         title: "Charming Cottage in the Cotswolds",
//         description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
//         image: {
//             url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//             filename: "cotswolds_cottage.jpg"
//         },
//         price: 1200,
//         location: "Cotswolds",
//         country: "United Kingdom",
//     },
//     {
//         title: "Historic Brownstone in Boston",
//         description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
//         image: {
//             url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//             filename: "boston_brownstone.jpg"
//         },
//         price: 2200,
//         location: "Boston",
//         country: "United States",
//     },
//     {
//         title: "Beachfront Bungalow in Bali",
//         description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
//         image: {
//             url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//             filename: "bali_bungalow.jpg"
//         },
//         price: 1800,
//         location: "Bali",
//         country: "Indonesia",
//     },
//     {
//         title: "Mountain View Cabin in Banff",
//         description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
//         image: {
//             url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//             filename: "banff_cabin.jpg"
//         },
//         price: 1500,
//         location: "Banff",
//         country: "Canada",
//     },
//     {
//         title: "Art Deco Apartment in Miami",
//         description: "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
//         image: {
//             url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//             filename: "miami_art_deco.jpg"
//         },
//         price: 1600,
//         location: "Miami",
//         country: "United States",
//     },
//     {
//         title: "Tropical Villa in Phuket",
//         description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
//         image: {
//             url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//             filename: "phuket_villa.jpg"
//         },
//         price: 3000,
//         location: "Phuket",
//         country: "Thailand",
//     },
//     {
//         title: "Historic Castle in Scotland",
//         description: "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
//         image: {
//             url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//             filename: "scottish_castle.jpg"
//         },
//         price: 4000,
//         location: "Scottish Highlands",
//         country: "United Kingdom",
//     },
//     {
//         title: "Desert Oasis in Dubai",
//         description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
//         image: {
//             url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//             filename: "dubai_oasis.jpg"
//         },
//         price: 5000,
//         location: "Dubai",
//         country: "United Arab Emirates",
//     },
//     {
//         title: "Rustic Log Cabin in Montana",
//         description: "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
//         image: {
//             url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//             filename: "montana_cabin.jpg"
//         },
//         price: 1100,
//         location: "Montana",
//         country: "United States",
//     },
//     {
//         title: "Beachfront Villa in Greece",
//         description: "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
//         image: {
//             url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//             filename: "greek_villa.jpg"
//         },
//         price: 2500,
//         location: "Mykonos",
//         country: "Greece",
//     },
//     {
//         title: "Eco-Friendly Treehouse Retreat",
//         description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
//         image: {
//             url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//             filename: "eco_treehouse.jpg"
//         },
//         price: 750,
//         location: "Costa Rica",
//         country: "Costa Rica",
//     },
//     {
//         title: "Historic Cottage in Charleston",
//         description: "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
//         image: {
//             url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//             filename: "charleston_cottage.jpg"
//         },
//         price: 1600,
//         location: "Charleston",
//         country: "United States",
//     },
//     {
//         title: "Modern Apartment in Tokyo",
//         description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
//         image: {
//             url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//             filename: "tokyo_apartment.jpg"
//         },
//         price: 2000,
//         location: "Tokyo",
//         country: "Japan",
//     },
//     {
//         title: "Lakefront Cabin in New Hampshire",
//         description: "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
//         image: {
//             url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//             filename: "new_hampshire_cabin.jpg"
//         },
//         price: 1200,
//         location: "New Hampshire",
//         country: "United States",
//     },
//     {
//         title: "Luxury Villa in the Maldives",
//         description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
//         image: {
//             url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//             filename: "maldives_villa.jpg"
//         },
//         price: 6000,
//         location: "Maldives",
//         country: "Maldives",
//     },
//     {
//         title: "Ski Chalet in Aspen",
//         description: "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
//         image: {
//             url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//             filename: "aspen_chalet.jpg"
//         },
//         price: 4000,
//         location: "Aspen",
//         country: "United States",
//     }
// ]


// module.exports={data:sampleListings};

// const sampleListings = [
    // {
    //     "title": "Cozy Beachfront Cottage",
    //     "description": "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //         "filename": "beachfront_cottage_malibu.jpg"
    //     },
    //     "price": 1500,
    //     "location": "Malibu",
    //     "country": "United States",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [-118.6778, 34.0259]
    //     }
    // },
    // {
    //     "title": "Modern Loft in Downtown",
    //     "description": "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //         "filename": "modern_loft_downtown.jpg"
    //     },
    //     "price": 1200,
    //     "location": "New York City",
    //     "country": "United States",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [-74.0060, 40.7128]
    //     }
    // },
    // {
    //     "title": "Mountain Retreat",
    //     "description": "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    //         "filename": "mountain_retreat.jpg"
    //     },
    //     "price": 1000,
    //     "location": "Aspen",
    //     "country": "United States",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [-106.8175, 39.1911]
    //     }
    // },
    // {
    //     "title": "Historic Villa in Tuscany",
    //     "description": "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    //         "filename": "historic_villa_tuscany.jpg"
    //     },
    //     "price": 2500,
    //     "location": "Florence",
    //     "country": "Italy",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [11.2558, 43.7696]
    //     }
    // },
    // {
    //     "title": "Secluded Treehouse Getaway",
    //     "description": "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //         "filename": "secluded_treehouse.jpg"
    //     },
    //     "price": 800,
    //     "location": "Portland",
    //     "country": "United States",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [-122.6765, 45.5231]
    //     }
    // },
    // {
    //     "title": "Beachfront Paradise",
    //     "description": "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //         "filename": "beachfront_paradise.jpg"
    //     },
    //     "price": 2000,
    //     "location": "Cancun",
    //     "country": "Mexico",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [-86.8515, 21.1619]
    //     }
    // },
    // {
    //     "title": "Rustic Cabin by the Lake",
    //     "description": "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    //         "filename": "rustic_cabin_lake.jpg"
    //     },
    //     "price": 900,
    //     "location": "Lake Tahoe",
    //     "country": "United States",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [-120.0324, 39.0968]
    //     }
    // },
    // {
    //     "title": "Luxury Penthouse with City Views",
    //     "description": "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //         "filename": "luxury_penthouse.jpg"
    //     },
    //     "price": 3500,
    //     "location": "Los Angeles",
    //     "country": "United States",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [-118.2437, 34.0522]
    //     }
    // },
    // {
    //     "title": "Ski-In/Ski-Out Chalet",
    //     "description": "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    //         "filename": "ski_chalet_verbier.jpg"
    //     },
    //     "price": 3000,
    //     "location": "Verbier",
    //     "country": "Switzerland",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [7.2285, 46.0961]
    //     }
    // },
    // {
    //     "title": "Safari Lodge in the Serengeti",
    //     "description": "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    //         "filename": "safari_lodge.jpg"
    //     },
    //     "price": 4000,
    //     "location": "Serengeti National Park",
    //     "country": "Tanzania",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [34.8333, -2.3333]
    //     }
    // },
    // {
    //     "title": "Historic Canal House",
    //     "description": "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //         "filename": "canal_house_amsterdam.jpg"
    //     },
    //     "price": 1800,
    //     "location": "Amsterdam",
    //     "country": "Netherlands",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [4.9041, 52.3676]
    //     }
    // },
    // {
    //     "title": "Private Island Retreat",
    //     "description": "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //         "filename": "private_island_fiji.jpg"
    //     },
    //     "price": 10000,
    //     "location": "Fiji",
    //     "country": "Fiji",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [177.1561, -17.6797]
    //     }
    // },
    // {
    //     "title": "Charming Cottage in the Cotswolds",
    //     "description": "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //         "filename": "cotswolds_cottage.jpg"
    //     },
    //     "price": 1200,
    //     "location": "Cotswolds",
    //     "country": "United Kingdom",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [-1.7246, 51.8330]
    //     }
    // },
    // {
    //     "title": "Historic Brownstone in Boston",
    //     "description": "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    //         "filename": "boston_brownstone.jpg"
    //     },
    //     "price": 2200,
    //     "location": "Boston",
    //     "country": "United States",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [-71.0589, 42.3601]
    //     }
    // },
    // {
    //     "title": "Beachfront Bungalow in Bali",
    //     "description": "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //         "filename": "bali_bungalow.jpg"
    //     },
    //     "price": 1800,
    //     "location": "Bali",
    //     "country": "Indonesia",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [115.0920, -8.3405]
    //     }
    // },
    // {
    //     "title": "Mountain View Cabin in Banff",
    //     "description": "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    //         "filename": "banff_cabin.jpg"
    //     },
    //     "price": 1500,
    //     "location": "Banff",
    //     "country": "Canada",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [-115.5708, 51.1784]
    //     }
    // },
    // {
    //     "title": "Art Deco Apartment in Miami",
    //     "description": "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    //     "image": {
    //         "url": "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    //         "filename": "miami_art_deco.jpg"
    //     },
    //     "price": 1600,
    //     "location": "Miami",
    //     "country": "United States",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [-80.1918, 25.7617]
    //     }
    // },
    // {
    //     "title": "Tropical Villa in Phuket",
    //     "description": "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    //         "filename": "phuket_villa.jpg"
    //     },
    //     "price": 3000,
    //     "location": "Phuket",
    //     "country": "Thailand",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [98.3923, 7.8906]
    //     }
    // },
    // {
    //     "title": "Historic Castle in Scotland",
    //     "description": "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //         "filename": "scottish_castle.jpg"
    //     },
    //     "price": 4000,
    //     "location": "Scottish Highlands",
    //     "country": "United Kingdom",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [-4.5000, 57.0000]
    //     }
    // },
    // {
    //     "title": "Desert Oasis in Dubai",
    //     "description": "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //         "filename": "dubai_oasis.jpg"
    //     },
    //     "price": 5000,
    //     "location": "Dubai",
    //     "country": "United Arab Emirates",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [55.2708, 25.2048]
    //     }
    // },
    // {
    //     "title": "Rustic Log Cabin in Montana",
    //     "description": "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    //         "filename": "montana_cabin.jpg"
    //     },
    //     "price": 1100,
    //     "location": "Montana",
    //     "country": "United States",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [-110.3626, 46.8797]
    //     }
    // },
    // {
    //     "title": "Beachfront Villa in Greece",
    //     "description": "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //         "filename": "greek_villa.jpg"
    //     },
    //     "price": 2500,
    //     "location": "Mykonos",
    //     "country": "Greece",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [25.3289, 37.4467]
    //     }
    // },
    // {
    //     "title": "Eco-Friendly Treehouse Retreat",
    //     "description": "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //         "filename": "eco_treehouse.jpg"
    //     },
    //     "price": 750,
    //     "location": "Costa Rica",
    //     "country": "Costa Rica",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [-83.7534, 9.7489]
    //     }
    // },
    // {
    //     "title": "Historic Cottage in Charleston",
    //     "description": "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    //         "filename": "charleston_cottage.jpg"
    //     },
    //     "price": 1600,
    //     "location": "Charleston",
    //     "country": "United States",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [-79.9311, 32.7765]
    //     }
    // },
    // {
    //     "title": "Modern Apartment in Tokyo",
    //     "description": "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    //         "filename": "tokyo_apartment.jpg"
    //     },
    //     "price": 2000,
    //     "location": "Tokyo",
    //     "country": "Japan",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [139.6917, 35.6895]
    //     }
    // },
    // {
    //     "title": "Lakefront Cabin in New Hampshire",
    //     "description": "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //         "filename": "new_hampshire_cabin.jpg"
    //     },
    //     "price": 1200,
    //     "location": "New Hampshire",
    //     "country": "United States",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [-71.5000, 44.0000]
    //     }
    // },
    // {
    //     "title": "Luxury Villa in the Maldives",
    //     "description": "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //         "filename": "maldives_villa.jpg"
    //     },
    //     "price": 6000,
    //     "location": "Maldives",
    //     "country": "Maldives",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [73.2207, 3.2028]
    //     }
    // },
    // {
    //     "title": "Ski Chalet in Aspen",
    //     "description": "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    //     "image": {
    //         "url": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //         "filename": "aspen_chalet.jpg"
    //     },
    //     "price": 4000,
    //     "location": "Aspen",
    //     "country": "United States",
    //     "geometry": {
    //         "type": "Point",
    //         "coordinates": [-106.8175, 39.1911]
    //     }
    // },
    
    //     {
    //         "title": "Beachfront Villa in Goa",
    //         "description": "Relax in this luxurious beachfront villa with direct access to the sandy shores of Goa. Perfect for a tropical escape with stunning Arabian Sea views.",
    //         "image": {
    //             "url": "https://images.unsplash.com/photo-1547471080-7cc2cae68297?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    //             "filename": "goa_beachfront_villa.jpg"
    //         },
    //         "price": 2000,
    //         "location": "Candolim, Goa",
    //         "country": "India",
    //         "geometry": {
    //             "type": "Point",
    //             "coordinates": [73.7671, 15.5181]
    //         }
    //     },
    //     {
    //         "title": "Royal Palace Retreat in Jaipur",
    //         "description": "Live like royalty in this historic palace turned vacation retreat. Surrounded by the Pink City’s vibrant culture and majestic forts.",
    //         "image": {
    //             "url": "https://images.unsplash.com/photo-1570366585350-c87aa462ff72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyJTIwcGFsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    //             "filename": "jaipur_palace_retreat.jpg"
    //         },
    //         "price": 3000,
    //         "location": "Jaipur, Rajasthan",
    //         "country": "India",
    //         "geometry": {
    //             "type": "Point",
    //             "coordinates": [75.7873, 26.9124]
    //         }
    //     },
    //     {
    //         "title": "Houseboat on Kerala Backwaters",
    //         "description": "Experience serenity aboard this traditional houseboat drifting through the lush backwaters of Kerala. A perfect blend of nature and luxury.",
    //         "image": {
    //             "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VyYWxhJTIwYmFja3dhdGVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //             "filename": "kerala_houseboat.jpg"
    //         },
    //         "price": 1500,
    //         "location": "Alleppey, Kerala",
    //         "country": "India",
    //         "geometry": {
    //             "type": "Point",
    //             "coordinates": [76.3388, 9.4981]
    //         }
    //     },
    //     {
    //         "title": "Himalayan Cottage in Manali",
    //         "description": "Unwind in this cozy cottage nestled in the Himalayas. Enjoy breathtaking mountain views and proximity to adventure activities.",
    //         "image": {
    //             "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGltYWxheWFzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    //             "filename": "manali_himalayan_cottage.jpg"
    //         },
    //         "price": 1200,
    //         "location": "Manali, Himachal Pradesh",
    //         "country": "India",
    //         "geometry": {
    //             "type": "Point",
    //             "coordinates": [77.1892, 32.2396]
    //         }
    //     },
    //     {
    //         "title": "Luxury Penthouse in Mumbai",
    //         "description": "Indulge in urban luxury with panoramic views of the Mumbai skyline from this modern penthouse in the heart of India’s financial capital.",
    //         "image": {
    //             "url": "https://images.unsplash.com/photo-1593693411515-4ab985781690?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpJTIwc2t5bGluZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //             "filename": "mumbai_luxury_penthouse.jpg"
    //         },
    //         "price": 3500,
    //         "location": "Mumbai, Maharashtra",
    //         "country": "India",
    //         "geometry": {
    //             "type": "Point",
    //             "coordinates": [72.8777, 19.0760]
    //         }
    //     }
// ];
const sampleListings = [
    {
        "title": "Cozy Beachfront Cottage",
        "description": "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        "image": {
            "url": "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            "filename": "beachfront_cottage_malibu.jpg"
        },
        "price": 1500,
        "location": "Malibu",
        "country": "United States",
        "geometry": {
            "type": "Point",
            "coordinates": [-118.6778, 34.0259]
        },
        "category": "Beach"
    },
    {
        "title": "Modern Loft in Downtown",
        "description": "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        "image": {
            "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            "filename": "modern_loft_downtown.jpg"
        },
        "price": 1200,
        "location": "New York City",
        "country": "United States",
        "geometry": {
            "type": "Point",
            "coordinates": [-74.0060, 40.7128]
        },
        "category": "Iconic Cities"
    },
    {
        "title": "Mountain Retreat",
        "description": "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
        "image": {
            "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            "filename": "mountain_retreat.jpg"
        },
        "price": 1000,
        "location": "Aspen",
        "country": "United States",
        "geometry": {
            "type": "Point",
            "coordinates": [-106.8175, 39.1911]
        },
        "category": "Mountains"
    },
    {
        "title": "Historic Villa in Tuscany",
        "description": "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
        "image": {
            "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            "filename": "historic_villa_tuscany.jpg"
        },
        "price": 2500,
        "location": "Florence",
        "country": "Italy",
        "geometry": {
            "type": "Point",
            "coordinates": [11.2558, 43.7696]
        },
        "category": "Rooms"
    },
    {
        "title": "Secluded Treehouse Getaway",
        "description": "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
        "image": {
            "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            "filename": "secluded_treehouse.jpg"
        },
        "price": 800,
        "location": "Portland",
        "country": "United States",
        "geometry": {
            "type": "Point",
            "coordinates": [-122.6765, 45.5231]
        },
        "category": "Campings"
    },
    {
        "title": "Beachfront Paradise",
        "description": "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
        "image": {
            "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            "filename": "beachfront_paradise.jpg"
        },
        "price": 2000,
        "location": "Cancun",
        "country": "Mexico",
        "geometry": {
            "type": "Point",
            "coordinates": [-86.8515, 21.1619]
        },
        "category": "Trending"
    },
    {
        "title": "Rustic Cabin by the Lake",
        "description": "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
        "image": {
            "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            "filename": "rustic_cabin_lake.jpg"
        },
        "price": 900,
        "location": "Lake Tahoe",
        "country": "United States",
        "geometry": {
            "type": "Point",
            "coordinates": [-120.0324, 39.0968]
        },
        "category": "View"
    },
    {
        "title": "Luxury Penthouse with City Views",
        "description": "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
        "image": {
            "url": "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            "filename": "luxury_penthouse.jpg"
        },
        "price": 3500,
        "location": "Los Angeles",
        "country": "United States",
        "geometry": {
            "type": "Point",
            "coordinates": [-118.2437, 34.0522]
        },
        "category": "Amazing Pools"
    },
    {
        "title": "Ski-In/Ski-Out Chalet",
        "description": "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
        "image": {
            "url": "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            "filename": "ski_chalet_verbier.jpg"
        },
        "price": 3000,
        "location": "Verbier",
        "country": "Switzerland",
        "geometry": {
            "type": "Point",
            "coordinates": [7.2285, 46.0961]
        },
        "category": "Doms"
    },
    {
        "title": "Safari Lodge in the Serengeti",
        "description": "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
        "image": {
            "url": "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            "filename": "safari_lodge.jpg"
        },
        "price": 4000,
        "location": "Serengeti National Park",
        "country": "Tanzania",
        "geometry": {
            "type": "Point",
            "coordinates": [34.8333, -2.3333]
        },
        "category": "Castles"
    },
    // New Listings Start Here
    {
        "title": "Arctic Igloo Retreat",
        "description": "Stay in a traditional igloo under the Northern Lights. A unique Arctic adventure awaits!",
        "image": {
            "url": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "filename": "arctic_igloo.jpg"
        },
        "price": 2500,
        "location": "Rovaniemi",
        "country": "Finland",
        "geometry": {
            "type": "Point",
            "coordinates": [25.7245, 66.4970]
        },
        "category": "Arctic"
    },
    {
        "title": "Geodesic Dome in the Desert",
        "description": "Experience off-grid living in this modern geodesic dome surrounded by stunning desert landscapes.",
        "image": {
            "url": "https://images.unsplash.com/photo-1507499739999-097706ad8914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            "filename": "desert_dome.jpg"
        },
        "price": 1300,
        "location": "Joshua Tree",
        "country": "United States",
        "geometry": {
            "type": "Point",
            "coordinates": [-116.3131, 34.1347]
        },
        "category": "Doms"
    },
    {
        "title": "Floating Villa in Bora Bora",
        "description": "Relax in this overwater villa with a private deck and unparalleled lagoon views.",
        "image": {
            "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            "filename": "bora_bora_villa.jpg"
        },
        "price": 4500,
        "location": "Bora Bora",
        "country": "French Polynesia",
        "geometry": {
            "type": "Point",
            "coordinates": [-151.7415, -16.5004]
        },
        "category": "Amazing Pools"
    },
    {
        "title": "Medieval Castle in Provence",
        "description": "Live like a knight in this restored medieval castle surrounded by lavender fields.",
        "image": {
            "url": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            "filename": "provence_castle.jpg"
        },
        "price": 3200,
        "location": "Provence",
        "country": "France",
        "geometry": {
            "type": "Point",
            "coordinates": [5.3811, 43.9352]
        },
        "category": "Castles"
    },
    {
        "title": "Yurt Camping in Mongolia",
        "description": "Stay in a traditional yurt on the vast Mongolian steppe, perfect for an authentic nomadic experience.",
        "image": {
            "url": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            "filename": "mongolia_yurt.jpg"
        },
        "price": 700,
        "location": "Ulaanbaatar",
        "country": "Mongolia",
        "geometry": {
            "type": "Point",
            "coordinates": [106.9057, 47.8864]
        },
        "category": "Campings"
    },
    {
        "title": "Sky-High Chalet in the Alps",
        "description": "Enjoy panoramic alpine views from this luxurious chalet perched high in the mountains.",
        "image": {
            "url": "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            "filename": "alps_chalet.jpg"
        },
        "price": 2800,
        "location": "Chamonix",
        "country": "France",
        "geometry": {
            "type": "Point",
            "coordinates": [6.8699, 45.9237]
        },
        "category": "View"
    },
    {
        "title": "Trendy Urban Studio",
        "description": "A chic studio apartment in the bustling heart of a vibrant city, perfect for young travelers.",
        "image": {
            "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            "filename": "urban_studio.jpg"
        },
        "price": 1100,
        "location": "Berlin",
        "country": "Germany",
        "geometry": {
            "type": "Point",
            "coordinates": [13.4050, 52.5200]
        },
        "category": "Trending"
    },
    {
        "title": "Cozy Room in a Countryside Inn",
        "description": "A quaint room in a historic inn surrounded by rolling hills and peaceful farmland.",
        "image": {
            "url": "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            "filename": "countryside_inn.jpg"
        },
        "price": 850,
        "location": "Yorkshire",
        "country": "United Kingdom",
        "geometry": {
            "type": "Point",
            "coordinates": [-1.0815, 54.1491]
        },
        "category": "Rooms"
    },
    {
        "title": "Arctic Cabin Near Icefjords",
        "description": "Warm up in this cozy cabin with views of Greenland’s majestic icefjords.",
        "image": {
            "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            "filename": "greenland_cabin.jpg"
        },
        "price": 3000,
        "location": "Ilulissat",
        "country": "Greenland",
        "geometry": {
            "type": "Point",
            "coordinates": [-51.0981, 69.2199]
        },
        "category": "Arctic"
    },
    {
        "title": "Himalayan Trekking Lodge",
        "description": "A rustic lodge perfect for trekkers exploring the Himalayan trails.",
        "image": {
            "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            "filename": "himalayan_lodge.jpg"
        },
        "price": 950,
        "location": "Pokhara",
        "country": "Nepal",
        "geometry": {
            "type": "Point",
            "coordinates": [83.9914, 28.2096]
        },
        "category": "Mountains"
    },
    {
        "title": "Beachfront Villa in Bali",
        "description": "Relax in a stunning villa steps away from the turquoise waters of Bali’s pristine beaches.",
        "image": {
            "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            "filename": "bali_villa.jpg"
        },
        "price": 2200,
        "location": "Seminyak",
        "country": "Indonesia",
        "geometry": {
            "type": "Point",
            "coordinates": [115.1628, -8.6849]
        },
        "category": "Beach"
    },
    {
        "title": "Arctic Igloo Retreat",
        "description": "Experience the magic of the Northern Lights from a cozy glass igloo in the Arctic wilderness.",
        "image": {
            "url": "https://images.unsplash.com/photo-1501436513145-30f24e19fccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            "filename": "arctic_igloo.jpg"
        },
        "price": 3200,
        "location": "Rovaniemi",
        "country": "Finland",
        "geometry": {
            "type": "Point",
            "coordinates": [25.7249, 66.5039]
        },
        "category": "Arctic"
    },
    {
        "title": "Medieval Castle Stay in Tuscany",
        "description": "Live like royalty in a beautifully restored 13th-century castle surrounded by vineyards.",
        "image": {
            "url": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            "filename": "tuscany_castle.jpg"
        },
        "price": 4500,
        "location": "Chianti",
        "country": "Italy",
        "geometry": {
            "type": "Point",
            "coordinates": [11.3040, 43.3188]
        },
        "category": "Castles"
    },
    {
        "title": "Mountain Cabin in Banff",
        "description": "A rustic cabin nestled in the Canadian Rockies, ideal for hiking and stargazing.",
        "image": {
            "url": "https://images.unsplash.com/photo-1510798831971-66156b39057b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            "filename": "banff_cabin.jpg"
        },
        "price": 1800,
        "location": "Banff",
        "country": "Canada",
        "geometry": {
            "type": "Point",
            "coordinates": [-115.5708, 51.1784]
        },
        "category": "Mountains"
    },
    {
        "title": "Iconic Loft in New York",
        "description": "Stay in a stylish loft in the heart of NYC, surrounded by art galleries and nightlife.",
        "image": {
            "url": "https://images.unsplash.com/photo-1496417263034-0e392d351d6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            "filename": "nyc_loft.jpg"
        },
        "price": 2500,
        "location": "Brooklyn",
        "country": "United States",
        "geometry": {
            "type": "Point",
            "coordinates": [-73.9442, 40.6782]
        },
        "category": "Iconic Cities"
    },
    {
        "title": "Desert Tent in Morocco",
        "description": "Sleep under the stars in a luxurious tent amidst the golden dunes of the Sahara.",
        "image": {
            "url": "https://images.unsplash.com/photo-1519985176271-4f4e2f6e6c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
            "filename": "sahara_tent.jpg"
        },
        "price": 950,
        "location": "Merzouga",
        "country": "Morocco",
        "geometry": {
            "type": "Point",
            "coordinates": [-4.0134, 31.0802]
        },
        "category": "Campings"
    }
];

module.exports = { data: sampleListings };