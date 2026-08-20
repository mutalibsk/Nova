// ============================================================
// NOVA PRODUCT DATABASE
// BEGINNER GUIDE:
// 1. Copy a product object.
// 2. Change its details.
// 3. Put your permitted product image in assets/images/.
// 4. Paste your OWN approved affiliate URL into affiliateUrl.
// ============================================================

const NOVA_PRODUCTS = [
  {
    id: 1,
    name: "VAS COLLECTIONS Satin Bed Sheet King Size",
    brand: "VAS COLLECTIONS",
    category: "Bedsheets",
    image: "assets/images/phone.svg",
    price: 1067,
    originalPrice: 2999,
    discount: "64% OFF",
    rating: 4.0,
    reviews: 108,
    retailer: "Amazon",
    affiliateUrl: "https://link.amazon/B0elVbZTc", // PASTE YOUR APPROVED AFFILIATE LINK HERE
    description: "Luxury satin bed sheet with 2 pillow covers, ultra soft and silky smooth.",
    features: ["Fast performance", "High-resolution display", "Long battery life"],
    pros: ["Modern design", "Good everyday performance", "Bright display"],
    cons: ["Demo information", "Replace specifications with verified data"],
    score: 90,
    featured: true, trending: true, bestSeller: true, deal: true
  },
  {
    id: 2, name: "HP Victus, AMD Ryzen 7 7445HS, 6GB RTX 4050, 16GB DDR5(Upgradeable) 512GB SSD, 144Hz, IPS, 300 nits, 15.6''/39.6cm, Win11, Office24, Blue, 2.29kg, fb3130AX, DTS Audio, Xbox Gamepass*, Gaming Laptop", brand: "Demo Tech", category: "Laptops",
    image: "assets/images/laptop.svg", price: 59990, originalPrice: 69990, discount: "14% OFF",
    rating: 4.8, reviews: 840, retailer: "Amazon", affiliateUrl: "",
    description: "Demo laptop listing. Replace with verified product information.",
    features: ["14-inch display", "Lightweight design", "All-day productivity"],
    pros: ["Portable", "Premium look"], cons: ["Demo specifications"], score: 94,
    featured: true, trending: true, bestSeller: false, deal: true
  },
  {
    id: 3, name: "Studio Wireless Headphones", brand: "Demo Audio", category: "Headphones",
    image: "assets/images/headphones.svg", price: 3299, originalPrice: 5999, discount: "45% OFF",
    rating: 4.6, reviews: 2130, retailer: "Amazon", affiliateUrl: "",
    description: "Demo audio product for layout testing.",
    features: ["Wireless audio", "Comfort fit", "Long battery life"],
    pros: ["Comfortable", "Portable"], cons: ["Demo information"], score: 91,
    featured: true, trending: true, bestSeller: true, deal: true
  },
  {
    id: 4, name: "Pulse Smartwatch Pro", brand: "Demo Wear", category: "Smartwatches",
    image: "assets/images/watch.svg", price: 2499, originalPrice: 4999, discount: "50% OFF",
    rating: 4.5, reviews: 980, retailer: "Flipkart", affiliateUrl: "",
    description: "Demo smartwatch listing.",
    features: ["Bright display", "Activity tracking", "Notifications"],
    pros: ["Useful features"], cons: ["Demo data"], score: 88,
    featured: true, trending: false, bestSeller: true, deal: true
  },
  {
    id: 5, name: "Creator Pocket Camera", brand: "Demo Vision", category: "Electronics",
    image: "assets/images/camera.svg", price: 24990, originalPrice: 29990, discount: "17% OFF",
    rating: 4.7, reviews: 510, retailer: "Croma", affiliateUrl: "",
    description: "Demo camera listing.",
    features: ["Compact body", "Creator-friendly controls", "High-quality video"],
    pros: ["Portable"], cons: ["Demo information"], score: 90,
    featured: false, trending: true, bestSeller: false, deal: true
  },
  {
    id: 6, name: "Urban Runner Sneakers", brand: "Demo Fit", category: "Fashion",
    image: "assets/images/shoes.svg", price: 1899, originalPrice: 3499, discount: "46% OFF",
    rating: 4.5, reviews: 1670, retailer: "Myntra", affiliateUrl: "",
    description: "Demo fashion listing.",
    features: ["Lightweight sole", "Everyday styling", "Comfort fit"],
    pros: ["Versatile"], cons: ["Demo sizing data"], score: 87,
    featured: true, trending: true, bestSeller: true, deal: true
  },
  {
    id: 7, name: "Pro Gaming Controller", brand: "Demo Play", category: "Gaming",
    image: "assets/images/controller.svg", price: 3799, originalPrice: 5499, discount: "31% OFF",
    rating: 4.6, reviews: 770, retailer: "Amazon", affiliateUrl: "",
    description: "Demo gaming accessory.",
    features: ["Responsive controls", "Comfort grip", "Wireless-ready design"],
    pros: ["Comfortable"], cons: ["Demo information"], score: 89,
    featured: false, trending: true, bestSeller: true, deal: true
  },
  {
    id: 8, name: "Smart Brew Coffee Maker", brand: "Demo Home", category: "Home & Kitchen",
    image: "assets/images/coffee.svg", price: 4599, originalPrice: 6999, discount: "34% OFF",
    rating: 4.4, reviews: 420, retailer: "Reliance Digital", affiliateUrl: "",
    description: "Demo kitchen appliance.",
    features: ["Programmable brewing", "Easy controls", "Compact footprint"],
    pros: ["Convenient"], cons: ["Demo information"], score: 85,
    featured: false, trending: false, bestSeller: true, deal: true
  },
  {
    id: 9, name: "Everyday Travel Backpack", brand: "Demo Carry", category: "Travel",
    image: "assets/images/backpack.svg", price: 1299, originalPrice: 2299, discount: "43% OFF",
    rating: 4.5, reviews: 890, retailer: "Amazon", affiliateUrl: "",
    description: "Demo travel accessory.",
    features: ["Multiple compartments", "Laptop sleeve", "Lightweight"],
    pros: ["Practical"], cons: ["Demo information"], score: 86,
    featured: true, trending: false, bestSeller: false, deal: true
  },
  {
    id: 10, name: "Essential Everyday Jacket", brand: "Demo Style", category: "Fashion",
    image: "assets/images/jacket.svg", price: 2299, originalPrice: 3999, discount: "43% OFF",
    rating: 4.4, reviews: 610, retailer: "Myntra", affiliateUrl: "",
    description: "Demo fashion product.",
    features: ["Everyday layer", "Modern silhouette", "Easy styling"],
    pros: ["Versatile"], cons: ["Demo sizing"], score: 84,
    featured: false, trending: true, bestSeller: false, deal: true
  },
  {
    id: 11, name: "UltraSound Earbuds", brand: "Demo Audio", category: "Electronics",
    image: "assets/images/earbuds.svg", price: 1999, originalPrice: 3999, discount: "50% OFF",
    rating: 4.6, reviews: 3100, retailer: "Amazon", affiliateUrl: "",
    description: "Demo earbuds listing.",
    features: ["Compact case", "Wireless listening", "Touch controls"],
    pros: ["Portable"], cons: ["Demo data"], score: 90,
    featured: true, trending: true, bestSeller: true, deal: true
  },
  {
    id: 12, name: "Home Air Purifier", brand: "Demo Home", category: "Home & Kitchen",
    image: "assets/images/purifier.svg", price: 6999, originalPrice: 8999, discount: "22% OFF",
    rating: 4.5, reviews: 530, retailer: "Croma", affiliateUrl: "",
    description: "Demo home appliance listing.",
    features: ["Quiet operation", "Compact design", "Filter indicator"],
    pros: ["Easy to use"], cons: ["Demo information"], score: 88,
    featured: false, trending: false, bestSeller: true, deal: true
  },
  {
    id: 13, name: "NOVA Tablet 11", brand: "Demo Tech", category: "Electronics",
    image: "assets/images/tablet.svg", price: 17999, originalPrice: 21999, discount: "18% OFF",
    rating: 4.7, reviews: 740, retailer: "Flipkart", affiliateUrl: "",
    description: "Demo tablet listing.",
    features: ["Large display", "Long battery", "Slim body"],
    pros: ["Good for media"], cons: ["Demo specifications"], score: 91,
    featured: true, trending: true, bestSeller: false, deal: true
  },
  {
    id: 14, name: "Minimal Desk Lamp", brand: "Demo Living", category: "Home & Kitchen",
    image: "assets/images/lamp.svg", price: 999, originalPrice: 1499, discount: "33% OFF",
    rating: 4.4, reviews: 300, retailer: "Amazon", affiliateUrl: "",
    description: "Demo home accessory.",
    features: ["Adjustable angle", "Modern design", "Desk-friendly"],
    pros: ["Simple"], cons: ["Demo information"], score: 82,
    featured: false, trending: false, bestSeller: false, deal: true
  },
  {
    id: 15, name: "Active Fitness Band", brand: "Demo Fit", category: "Sports",
    image: "assets/images/band.svg", price: 1599, originalPrice: 2499, discount: "36% OFF",
    rating: 4.3, reviews: 920, retailer: "Amazon", affiliateUrl: "",
    description: "Demo fitness wearable.",
    features: ["Activity tracking", "Lightweight design", "Daily reminders"],
    pros: ["Lightweight"], cons: ["Demo data"], score: 83,
    featured: false, trending: true, bestSeller: true, deal: false
  },
  {
    id: 16, name: "Reader E-Book Device", brand: "Demo Read", category: "Books",
    image: "assets/images/ebook.svg", price: 10999, originalPrice: 12999, discount: "15% OFF",
    rating: 4.7, reviews: 480, retailer: "Amazon", affiliateUrl: "",
    description: "Demo reading device.",
    features: ["Eye-friendly display", "Long battery", "Lightweight"],
    pros: ["Portable"], cons: ["Demo information"], score: 89,
    featured: false, trending: false, bestSeller: true, deal: false
  },
  {
    id: 17, name: "Compact Travel Organizer", brand: "Demo Carry", category: "Travel",
    image: "assets/images/organizer.svg", price: 799, originalPrice: 1299, discount: "38% OFF",
    rating: 4.4, reviews: 360, retailer: "Amazon", affiliateUrl: "",
    description: "Demo travel organizer.",
    features: ["Multiple pockets", "Compact", "Easy carry"],
    pros: ["Organized"], cons: ["Demo information"], score: 81,
    featured: false, trending: false, bestSeller: false, deal: true
  },
  {
    id: 18, name: "Mechanical Gaming Keyboard", brand: "Demo Play", category: "Gaming",
    image: "assets/images/keyboard.svg", price: 2999, originalPrice: 4499, discount: "33% OFF",
    rating: 4.6, reviews: 1200, retailer: "Amazon", affiliateUrl: "",
    description: "Demo gaming keyboard.",
    features: ["Mechanical-style switches", "Compact layout", "Customizable keys"],
    pros: ["Responsive"], cons: ["Demo specifications"], score: 90,
    featured: true, trending: true, bestSeller: true, deal: true
  },
  {
    id: 19, name: "Everyday Carry Bottle", brand: "Demo Living", category: "Sports",
    image: "assets/images/bottle.svg", price: 699, originalPrice: 999, discount: "30% OFF",
    rating: 4.5, reviews: 640, retailer: "Amazon", affiliateUrl: "",
    description: "Demo reusable bottle.",
    features: ["Leak-resistant design", "Easy carry", "Reusable"],
    pros: ["Convenient"], cons: ["Demo information"], score: 80,
    featured: false, trending: false, bestSeller: false, deal: true
  },
  {
    id: 20, name: "Creator Desk Setup Kit", brand: "Demo Studio", category: "Electronics",
    image: "assets/images/setup.svg", price: 8999, originalPrice: 11999, discount: "25% OFF",
    rating: 4.8, reviews: 390, retailer: "Croma", affiliateUrl: "",
    description: "Demo creator accessory bundle.",
    features: ["Desk accessories", "Creator-focused setup", "Modern design"],
    pros: ["Complete setup"], cons: ["Demo information"], score: 93,
    featured: true, trending: true, bestSeller: false, deal: true
  }
];
