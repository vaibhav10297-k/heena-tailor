// HEENA TAILOR - Shared State & Catalog Manager
// This script runs on all pages to ensure auth state, wishlist, and cart are in sync.

// --- PRODUCT CATALOG (34 Items) ---
window.HEENA_PRODUCTS = [
    {
        id: 1,
        name: "Premium Aster Fabric",
        category: "Aster & Linings",
        price: 180,
        originalPrice: 250,
        unit: "meter",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
        description: "Soft, breathable premium aster fabric ideal for lining blouses, kurtis, and designer wear. Provides excellent structural backing.",
        synonyms: ["aster", "lining", "linings", "lining fabric", "backing"]
    },
    {
        id: 2,
        name: "Heavy Cotton Fall",
        category: "Laces & Borders",
        price: 80,
        originalPrice: 120,
        unit: "piece",
        image: "https://images.unsplash.com/photo-1582284540020-8acdf03f48fe?auto=format&fit=crop&w=600&q=80",
        description: "Pre-shrunk, high-durability saree falls made of 100% pure cotton. Provides a neat weight to saree hems.",
        synonyms: ["fall", "saree fall", "fall border", "border trim", "hemming"]
    },
    {
        id: 3,
        name: "Pico Roll Material",
        category: "Accessories",
        price: 220,
        originalPrice: 300,
        unit: "roll",
        image: "https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=600&q=80",
        description: "Fine, soft fabric tape roll designed for neat pico edging on dupattas, scarves, and dresses.",
        synonyms: ["pico", "pico roll", "border material", "edging", "ribbon"]
    },
    {
        id: 4,
        name: "Mother of Pearl Buttons",
        category: "Buttons",
        price: 150,
        originalPrice: 200,
        unit: "pack",
        image: "https://images.unsplash.com/photo-1549439602-43ebcb23281f?auto=format&fit=crop&w=600&q=80",
        description: "Curated collection of genuine mother-of-pearl buttons featuring natural iridescent colors and clean holes.",
        synonyms: ["buttons", "pearl buttons", "design buttons", "carved buttons", "buton", "bttn"]
    },
    {
        id: 5,
        name: "Fancy Royal Gold Buttons",
        category: "Buttons",
        price: 350,
        originalPrice: 500,
        unit: "pack",
        image: "https://images.unsplash.com/photo-1611085583191-a3b1a3a35f60?auto=format&fit=crop&w=600&q=80",
        description: "Elegant metal buttons with detailed embossed patterns in champagne gold. Adds a regal touch to blouses and kurtis.",
        synonyms: ["buttons", "fancy buttons", "designer buttons", "gold buttons", "buton", "bttn"]
    },
    {
        id: 6,
        name: "Classic Shirt Buttons",
        category: "Buttons",
        price: 120,
        originalPrice: 180,
        unit: "pack",
        image: "https://images.unsplash.com/photo-1564758564527-b97d79cb27c1?auto=format&fit=crop&w=600&q=80",
        description: "Reliable, round four-hole classic shirt buttons in satin-finish white and black. Highly durable.",
        synonyms: ["buttons", "shirt buttons", "basic buttons", "buton", "bttn"]
    },
    {
        id: 7,
        name: "Embellished Blouse Buttons",
        category: "Buttons",
        price: 180,
        originalPrice: 250,
        unit: "pack",
        image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=600&q=80",
        description: "Small, beautiful dome-shaped buttons decorated with tiny white pearls and crystal loops. Perfect for back openings.",
        synonyms: ["buttons", "blouse buttons", "fancy buttons", "pearl dome", "buton", "bttn"]
    },
    {
        id: 8,
        name: "Cotton Sewing Threads",
        category: "Threads & Fasteners",
        price: 90,
        originalPrice: 130,
        unit: "set",
        image: "https://images.unsplash.com/photo-1584285418504-00550243b9c6?auto=format&fit=crop&w=600&q=80",
        description: "Set of 5 high-strength, double-mercerized sewing thread spools in essential neutral shades.",
        synonyms: ["threads", "thread", "dhaga", "stitching thread", "sewing thread"]
    },
    {
        id: 9,
        name: "Metallic Embroidery Threads",
        category: "Threads & Fasteners",
        price: 380,
        originalPrice: 550,
        unit: "set",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
        description: "Premium metallic silk threads in gold, silver, and copper. Ideal for intricate hand embroidery and zardosi work.",
        synonyms: ["threads", "thread", "embroidery threads", "dhaga", "gold thread", "zari thread"]
    },
    {
        id: 10,
        name: "Heavy Duty Zippers",
        category: "Threads & Fasteners",
        price: 60,
        originalPrice: 90,
        unit: "piece",
        image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80",
        description: "Concealed zippers with smooth nylon teeth, perfect for dress, kurti, and blouse side-seams.",
        synonyms: ["zippers", "zip", "zipper", "concealed zip", "chain"]
    },
    {
        id: 11,
        name: "Brass Blouse Hooks",
        category: "Threads & Fasteners",
        price: 40,
        originalPrice: 60,
        unit: "pack",
        image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=600&q=80",
        description: "Premium rust-proof brass hooks for garments, providing strong closures for blouses and dresses.",
        synonyms: ["hooks", "hook", "fasteners", "closures"]
    },
    {
        id: 12,
        name: "Blouse Metal Eyes",
        category: "Threads & Fasteners",
        price: 45,
        originalPrice: 70,
        unit: "pack",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80",
        description: "Durable metal eyes designed to pair perfectly with brass hooks. Easy to stitch.",
        synonyms: ["eyes", "hook eye", "fasteners", "closures"]
    },
    {
        id: 13,
        name: "Premium Braided Elastic",
        category: "Threads & Fasteners",
        price: 80,
        originalPrice: 120,
        unit: "roll",
        image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=600&q=80",
        description: "High-stretch, long-lasting braided elastic ribbon. Maintains shape even after multiple washes.",
        synonyms: ["elastic", "waist band", "elastic roll", "stretch band"]
    },
    {
        id: 14,
        name: "French Chantilly Lace",
        category: "Laces & Borders",
        price: 1500,
        originalPrice: 2100,
        unit: "meter",
        image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=600&q=80",
        description: "Super soft, delicate Chantilly lace imported from France. Scalloped edges, floral design. True couture luxury.",
        synonyms: ["lace", "laces", "designer lace", "chantilly lace", "french lace"]
    },
    {
        id: 15,
        name: "Soft Cotton Lace",
        category: "Laces & Borders",
        price: 220,
        originalPrice: 320,
        unit: "meter",
        image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
        description: "Delicate crochet cotton lace ribbon in pristine white. Perfect for casual kurtis and summer skirts.",
        synonyms: ["lace", "laces", "cotton lace", "white lace", "crochet lace"]
    },
    {
        id: 16,
        name: "Golden Zari Designer Lace",
        category: "Laces & Borders",
        price: 450,
        originalPrice: 650,
        unit: "meter",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80",
        description: "Stunning gold zari woven border lace decorated with micro-sequins. Excellent for bridal wear and heavy dupattas.",
        synonyms: ["lace", "laces", "designer lace", "gold lace", "zari lace", "sequin lace"]
    },
    {
        id: 17,
        name: "Sheer Net Lace",
        category: "Laces & Borders",
        price: 300,
        originalPrice: 420,
        unit: "meter",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80",
        description: "Fine mesh net lace ribbon decorated with elegant white floral embroidery and scalloped borders.",
        synonyms: ["lace", "laces", "net lace", "border lace", "mesh lace"]
    },
    {
        id: 18,
        name: "Continuous Zipper Chain",
        category: "Threads & Fasteners",
        price: 250,
        originalPrice: 350,
        unit: "meter",
        image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80",
        description: "Continuous brass zipper chain. Custom cut to any length for special designer gowns or jackets.",
        synonyms: ["chain", "zipper chain", "long zip", "zipper roll"]
    },
    {
        id: 19,
        name: "Contoured Blouse Pads",
        category: "Accessories",
        price: 180,
        originalPrice: 250,
        unit: "pair",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80",
        description: "High-density foam padded cups. Anatomically shaped for high support and a natural look in padded blouses.",
        synonyms: ["blouse pad", "padding", "chest pads", "blouse padding", "cups"]
    },
    {
        id: 20,
        name: "Fusible Interlining",
        category: "Aster & Linings",
        price: 120,
        originalPrice: 180,
        unit: "meter",
        image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=80",
        description: "Iron-on fusible interlining of high quality. Adds crisp shape to collars, cuffs, and blouse necklines.",
        synonyms: ["interlining", "collar lining", "fusing", "iron-on lining"]
    },
    {
        id: 21,
        name: "Stiff Buckram Roll",
        category: "Aster & Linings",
        price: 150,
        originalPrice: 220,
        unit: "roll",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
        description: "Premium stiff buckram canvas. Highly rigid material designed for collar bases, dress waistbands, and salwars.",
        synonyms: ["buckram", "collar buckram", "canvas", "stiff canvas"]
    },
    {
        id: 22,
        name: "Soft Tailoring Shoulder Pads",
        category: "Accessories",
        price: 150,
        originalPrice: 220,
        unit: "pair",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80",
        description: "Molded cotton-fill shoulder pads that provide structured shoulders to jackets, blazers, and custom gowns.",
        synonyms: ["shoulder pads", "coat pad", "blazer pads", "shoulder padding"]
    },
    {
        id: 23,
        name: "Hand Sewing Needles",
        category: "Tools",
        price: 50,
        originalPrice: 80,
        unit: "pack",
        image: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?auto=format&fit=crop&w=600&q=80",
        description: "Assorted pack of sharp carbon steel hand sewing needles. Sizes range from fine darning to heavy stitching.",
        synonyms: ["needles", "needle", "hand needle", "stitching needle"]
    },
    {
        id: 24,
        name: "Organ Machine Needles",
        category: "Tools",
        price: 120,
        originalPrice: 180,
        unit: "pack",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",
        description: "Genuine Organ brand flat-shank sewing machine needles. Size 16/100, suitable for cotton, silk, and medium fabrics.",
        synonyms: ["needles", "machine needles", "organ needles", "singer needles"]
    },
    {
        id: 25,
        name: "Pure Sewing Machine Oil",
        category: "Tools",
        price: 90,
        originalPrice: 130,
        unit: "bottle",
        image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80",
        description: "Refined mineral oil designed specifically for sewing machines. Prevents rust and ensures quiet, smooth motor operation.",
        synonyms: ["sewing machine oil", "oil", "lubricant", "machine oil"]
    },
    {
        id: 26,
        name: "Measuring Tape",
        category: "Tools",
        price: 60,
        originalPrice: 100,
        unit: "piece",
        image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600&q=80",
        description: "Fiberglass non-stretch dual-sided measuring tape. Displays inches and centimeters clearly with heavy metal tips.",
        synonyms: ["measuring tape", "tape", "scale", "tailor tape"]
    },
    {
        id: 27,
        name: "Tailor Chalk",
        category: "Tools",
        price: 50,
        originalPrice: 80,
        unit: "box",
        image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80",
        description: "Box of 4 traditional triangular clay chalks in assorted bright colors. Leaves clear marks and brushes away easily.",
        synonyms: ["tailor chalk", "chalk", "mitti", "marking chalk"]
    },
    {
        id: 28,
        name: "Fabric Marker",
        category: "Tools",
        price: 110,
        originalPrice: 160,
        unit: "piece",
        image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80",
        description: "Water-erasable fine point fabric marker. Marks disappear immediately with a damp cloth or warm rinse.",
        synonyms: ["fabric marker", "pencil", "marker", "marking pen"]
    },
    {
        id: 29,
        name: "Scissors",
        category: "Tools",
        price: 850,
        originalPrice: 1200,
        unit: "piece",
        image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=600&q=80",
        description: "Traditional heavy carbon-steel tailor's shears with comfortable handle grip. Excellent for regular garment trimming.",
        synonyms: ["scissors", "scissor", "shear", "tailor shear"]
    },
    {
        id: 30,
        name: "Cutting Scissors",
        category: "Tools",
        price: 1500,
        originalPrice: 2200,
        unit: "piece",
        image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600&q=80",
        description: "Ultra-sharp professional dressmaker's shears in a custom brass and black finish. Hand-aligned blades cut through layers effortlessly.",
        synonyms: ["cutting scissors", "shears", "scissor", "professional shears"]
    },
    {
        id: 31,
        name: "Rotary Cutter",
        category: "Tools",
        price: 950,
        originalPrice: 1400,
        unit: "piece",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
        description: "45mm rotary cutter with safety lock. Cuts multiple layers of thin silk or linen perfectly.",
        synonyms: ["rotary cutter", "cutter", "round knife", "fabric cutter"]
    },
    {
        id: 32,
        name: "Bobbins",
        category: "Tools",
        price: 120,
        originalPrice: 180,
        unit: "pack",
        image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80",
        description: "Pack of 10 standard size universal steel bobbins. Smooth edges prevent thread snagging.",
        synonyms: ["bobbins", "bobbin", "bobbin case", "metal bobbin"]
    },
    {
        id: 33,
        name: "Safety Pins",
        category: "Tools",
        price: 40,
        originalPrice: 65,
        unit: "box",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
        description: "Box of 50 nickel-plated rust-resistant steel safety pins in various sizes. Durable and secure.",
        synonyms: ["safety pins", "pin", "pins", "baby pins"]
    },
    {
        id: 34,
        name: "Decorative Accessories",
        category: "Accessories",
        price: 450,
        originalPrice: 650,
        unit: "pack",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
        description: "Beautifully handcrafted latkans and bead bundles containing authentic Kundan stones and gold thread fringes.",
        synonyms: ["decorative accessories", "latkan", "beads", "kundan beads", "hanging accessories"]
    }
];

// --- SESSION & USER DATABASE ENGINE ---

// Fetch current logged-in user
window.getCurrentUser = function() {
    const userJson = localStorage.getItem("heena_currentUser");
    return userJson ? JSON.parse(userJson) : null;
};

// Fetch user accounts DB
window.getUserDatabase = function() {
    const dbJson = localStorage.getItem("heena_users_db");
    return dbJson ? JSON.parse(dbJson) : [];
};

// Save user accounts DB
window.saveUserDatabase = function(db) {
    localStorage.setItem("heena_users_db", JSON.stringify(db));
};

// Update active user in session and db
window.saveCurrentUser = function(user) {
    localStorage.setItem("heena_currentUser", JSON.stringify(user));
    if (user) {
        const db = window.getUserDatabase();
        const idx = db.findIndex(u => u.email.toLowerCase() === user.email.toLowerCase());
        if (idx !== -1) {
            db[idx] = user;
            window.saveUserDatabase(db);
        }
    }
};

// Login user
window.loginUser = function(email, password) {
    const db = window.getUserDatabase();
    const user = db.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (user) {
        localStorage.setItem("heena_currentUser", JSON.stringify(user));
        return { success: true, user };
    }
    return { success: false, message: "Invalid email or password." };
};

// Register user
window.registerUser = function(name, email, phone, password) {
    const db = window.getUserDatabase();
    if (db.some(u => u.email.toLowerCase() === email.toLowerCase())) {
        return { success: false, message: "Email is already registered." };
    }
    const newUser = {
        name,
        email,
        phone,
        password,
        address: "",
        favorites: [], // holds product IDs
        cart: [],      // holds objects {productId, quantity}
        appointments: [], // list of appointments
        orders: []       // list of orders
    };
    db.push(newUser);
    window.saveUserDatabase(db);
    localStorage.setItem("heena_currentUser", JSON.stringify(newUser));
    return { success: true, user: newUser };
};

// Reset Password
window.resetUserPassword = function(email, newPassword) {
    const db = window.getUserDatabase();
    const idx = db.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
    if (idx !== -1) {
        db[idx].password = newPassword;
        window.saveUserDatabase(db);
        return { success: true };
    }
    return { success: false, message: "Email not found in our records." };
};

// Logout user
window.logoutUser = function() {
    localStorage.removeItem("heena_currentUser");
    // Redirect to home page
    const currentLoc = window.location.pathname;
    if (currentLoc.includes('auth/')) {
        window.location.href = "../home_heena_tailor/code.html";
    } else {
        window.location.reload();
    }
};

// --- CART & WISHLIST ACTIONS ---

// Get active items count
window.getCartCount = function() {
    const user = window.getCurrentUser();
    if (user) {
        return user.cart.reduce((sum, item) => sum + item.quantity, 0);
    }
    // Guest cart fallback
    const guestCart = localStorage.getItem("heena_guest_cart");
    if (guestCart) {
        const items = JSON.parse(guestCart);
        return items.reduce((sum, item) => sum + item.quantity, 0);
    }
    return 0;
};

window.getWishlistCount = function() {
    const user = window.getCurrentUser();
    return user ? user.favorites.length : 0;
};

// Add product to cart
window.addToCart = function(productId, qty = 1) {
    const user = window.getCurrentUser();
    if (user) {
        const idx = user.cart.findIndex(c => c.productId === productId);
        if (idx !== -1) {
            user.cart[idx].quantity += qty;
        } else {
            user.cart.push({ productId, quantity: qty });
        }
        window.saveCurrentUser(user);
        window.updateHeaderBadges();
        return true;
    } else {
        // Guest cart
        let guestCart = localStorage.getItem("heena_guest_cart");
        let items = guestCart ? JSON.parse(guestCart) : [];
        const idx = items.findIndex(c => c.productId === productId);
        if (idx !== -1) {
            items[idx].quantity += qty;
        } else {
            items.push({ productId, quantity: qty });
        }
        localStorage.setItem("heena_guest_cart", JSON.stringify(items));
        window.updateHeaderBadges();
        return true;
    }
};

// Toggle wishlist favorite
window.toggleWishlist = function(productId) {
    const user = window.getCurrentUser();
    if (!user) {
        // Redirect to login page
        const redirectPath = encodeURIComponent(window.location.pathname + window.location.search + window.location.hash);
        window.location.href = "../auth/code.html?redirect=" + redirectPath + "&action=wishlist";
        return false;
    }
    const idx = user.favorites.indexOf(productId);
    let added = false;
    if (idx !== -1) {
        user.favorites.splice(idx, 1);
    } else {
        user.favorites.push(productId);
        added = true;
    }
    window.saveCurrentUser(user);
    window.updateHeaderBadges();
    return added;
};

// Book Appointment
window.createAppointment = function(details) {
    const user = window.getCurrentUser();
    if (!user) return false;
    
    const newAppointment = {
        id: "APPT-" + Date.now().toString().slice(-6),
        date: details.date,
        style: details.style,
        urgency: details.urgency,
        price: details.price,
        status: "Scheduled",
        createdAt: new Date().toLocaleDateString()
    };
    user.appointments.unshift(newAppointment);
    window.saveCurrentUser(user);
    return true;
};

// Create Order (Checkout)
window.createOrder = function(details) {
    const user = window.getCurrentUser();
    if (!user) return false;
    
    const newOrder = {
        id: "ORD-" + Date.now().toString().slice(-6),
        items: details.items, // Array of {name, price, quantity}
        total: details.total,
        address: details.address,
        status: "Processing",
        createdAt: new Date().toLocaleDateString()
    };
    user.orders.unshift(newOrder);
    user.cart = []; // clear cart
    window.saveCurrentUser(user);
    window.updateHeaderBadges();
    return true;
};


// --- DYNAMIC HEADER DOM INJECTION ---

window.updateHeaderBadges = function() {
    const wishlistBadge = document.getElementById("wishlist-count-badge");
    const cartBadge = document.getElementById("cart-count-badge");
    
    const wCount = window.getWishlistCount();
    const cCount = window.getCartCount();
    
    if (wishlistBadge) {
        if (wCount > 0) {
            wishlistBadge.innerText = wCount;
            wishlistBadge.classList.remove("hidden");
        } else {
            wishlistBadge.classList.add("hidden");
        }
    }
    if (cartBadge) {
        if (cCount > 0) {
            cartBadge.innerText = cCount;
            cartBadge.classList.remove("hidden");
        } else {
            cartBadge.classList.add("hidden");
        }
    }
};

window.syncHeaderDOM = function() {
    const headerActions = document.querySelector('header nav .flex.items-center.gap-4');
    if (!headerActions) return;
    
    const user = window.getCurrentUser();
    const themeIcon = document.documentElement.classList.contains('dark') ? 'light_mode' : 'dark_mode';
    
    let userButtonHtml = '';
    if (user) {
        // User initials
        const initials = user.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
        userButtonHtml = `
            <!-- User Menu -->
            <div class="relative group z-50">
                <button class="text-[#eeeeee] hover:text-[#ffdad4] bg-[#800000] border border-[#ffdad4]/30 w-10 h-10 rounded-full flex items-center justify-center font-button text-xs uppercase tracking-wider transition-all duration-300 font-bold">
                    ${initials}
                </button>
                <div class="absolute right-0 mt-2 w-48 bg-[#111111] border border-white/10 rounded-lg shadow-xl py-2 hidden group-hover:block transition-all duration-300">
                    <a href="../auth/code.html#profile" class="block px-4 py-2 text-sm text-[#eeeeee] hover:bg-[#800000]/30 hover:text-white transition-colors">Profile Details</a>
                    <a href="../auth/code.html#appointments" class="block px-4 py-2 text-sm text-[#eeeeee] hover:bg-[#800000]/30 hover:text-white transition-colors">My Appointments</a>
                    <a href="../auth/code.html#orders" class="block px-4 py-2 text-sm text-[#eeeeee] hover:bg-[#800000]/30 hover:text-white transition-colors">My Orders</a>
                    <a href="../auth/code.html#wishlist" class="block px-4 py-2 text-sm text-[#eeeeee] hover:bg-[#800000]/30 hover:text-white transition-colors">Favorites</a>
                    <a href="../auth/code.html#cart" class="block px-4 py-2 text-sm text-[#eeeeee] hover:bg-[#800000]/30 hover:text-white transition-colors">Shopping Bag</a>
                    <hr class="border-white/5 my-1" />
                    <button onclick="window.logoutUser()" class="w-full text-left block px-4 py-2 text-sm text-[#ffdad4] hover:bg-[#800000]/30 transition-colors">Logout</button>
                </div>
            </div>
        `;
    } else {
        userButtonHtml = `
            <a href="../auth/code.html" class="text-[#eeeeee] hover:text-[#ffdad4] active:scale-95 transition-all p-2 rounded-full" title="Login / Register">
                <span class="material-symbols-outlined text-2xl">account_circle</span>
            </a>
        `;
    }
    
    // Check path to adjust links if inside subdirectories
    const pathDepth = window.location.pathname.split('/').filter(p => p).length;
    let pathPrefix = "../";
    // Adjust if running directly under root (not common in this structure but good precaution)
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.split('/').pop() === 'stitch_heena_tailor_premium_boutique') {
        pathPrefix = "./";
    }
    
    // Rewrite entire innerHTML of actions container
    headerActions.innerHTML = `
        <!-- Theme Toggle -->
        <button id="theme-toggle-btn" onclick="toggleTheme()" class="text-[#eeeeee] hover:text-[#ffdad4] active:scale-95 transition-all p-2 rounded-full">
            <span class="material-symbols-outlined text-2xl" id="theme-toggle-icon">${themeIcon}</span>
        </button>
        
        <!-- Wishlist -->
        <a href="${pathPrefix}auth/code.html#wishlist" class="text-[#eeeeee] hover:text-[#ffdad4] active:scale-95 transition-all p-2 rounded-full relative hidden sm:block">
            <span class="material-symbols-outlined text-2xl">favorite</span>
            <span id="wishlist-count-badge" class="absolute top-1 right-1 bg-[#ffdad4] text-[#111111] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center hidden">0</span>
        </a>
        
        <!-- Shopping Bag -->
        <a href="${pathPrefix}auth/code.html#cart" class="text-[#eeeeee] hover:text-[#ffdad4] active:scale-95 transition-all p-2 rounded-full relative">
            <span class="material-symbols-outlined text-2xl">shopping_bag</span>
            <span id="cart-count-badge" class="absolute top-1 right-1 bg-[#ffdad4] text-[#111111] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center hidden">0</span>
        </a>
        
        <!-- User Profile -->
        ${userButtonHtml}
        
        <!-- Book Appointment CTA -->
        <a href="${pathPrefix}book_a_service/code.html" class="hidden md:flex items-center gap-2 bg-[#800000] hover:bg-[#570000] text-white font-button text-button px-5 py-3 rounded-lg transition-all uppercase tracking-wider font-semibold active:scale-95">
            <span class="material-symbols-outlined text-lg">calendar_today</span>
            <span>BOOK APPOINTMENT</span>
        </a>
        
        <!-- Mobile Menu Toggle -->
        <button id="mobile-menu-toggle" onclick="toggleMobileMenu()" class="lg:hidden text-[#eeeeee] hover:text-[#ffdad4] active:scale-95 transition-all p-2 rounded-full">
            <span class="material-symbols-outlined text-2xl" id="menu-btn-icon">menu</span>
        </button>
    `;
    
    // Sync mobile drawer bottom options
    const drawerContainer = document.querySelector('#mobile-drawer .mt-auto');
    if (drawerContainer) {
        let mobileUserLinksHtml = '';
        if (user) {
            mobileUserLinksHtml = `
                <a href="${pathPrefix}auth/code.html#profile" class="flex items-center gap-3 py-2 text-[#eeeeee] hover:text-[#ffdad4] border-b border-white/5 font-label-caps uppercase" onclick="toggleMobileMenu()">
                    <span class="material-symbols-outlined text-xl">person</span>
                    <span>MY PROFILE</span>
                </a>
                <a href="${pathPrefix}auth/code.html#wishlist" class="flex items-center gap-3 py-2 text-[#eeeeee] hover:text-[#ffdad4] border-b border-white/5 font-label-caps uppercase" onclick="toggleMobileMenu()">
                    <span class="material-symbols-outlined text-xl">favorite</span>
                    <span>WISHLIST</span>
                </a>
                <a href="${pathPrefix}auth/code.html#cart" class="flex items-center gap-3 py-2 text-[#eeeeee] hover:text-[#ffdad4] border-b border-white/5 font-label-caps uppercase" onclick="toggleMobileMenu()">
                    <span class="material-symbols-outlined text-xl">shopping_bag</span>
                    <span>CART</span>
                </a>
                <button onclick="window.logoutUser(); toggleMobileMenu();" class="flex items-center gap-3 py-2 text-[#ffdad4] hover:text-[#ff8371] text-left border-b border-white/5 font-label-caps uppercase w-full">
                    <span class="material-symbols-outlined text-xl">logout</span>
                    <span>LOGOUT</span>
                </button>
            `;
        } else {
            mobileUserLinksHtml = `
                <a href="${pathPrefix}auth/code.html" class="flex items-center gap-3 py-2 text-[#eeeeee] hover:text-[#ffdad4] border-b border-white/5 font-label-caps uppercase" onclick="toggleMobileMenu()">
                    <span class="material-symbols-outlined text-xl">login</span>
                    <span>LOGIN / REGISTER</span>
                </a>
            `;
        }
        
        drawerContainer.innerHTML = `
            ${mobileUserLinksHtml}
            <!-- Book Appointment button inside drawer -->
            <a href="${pathPrefix}book_a_service/code.html" onclick="toggleMobileMenu()" class="flex items-center justify-center gap-2 bg-[#800000] hover:bg-[#570000] text-white font-button text-button py-4 rounded-lg transition-all uppercase tracking-wider font-bold">
                <span class="material-symbols-outlined text-lg">calendar_today</span>
                <span>BOOK APPOINTMENT</span>
            </a>
        `;
    }
    
    window.updateHeaderBadges();
};

// Check if user is logged in, redirect if not
window.gatekeepUser = function(reason) {
    const user = window.getCurrentUser();
    if (!user) {
        const redirectPath = encodeURIComponent(window.location.pathname + window.location.search + window.location.hash);
        window.location.href = "../auth/code.html?redirect=" + redirectPath + "&reason=" + encodeURIComponent(reason);
        return false;
    }
    return true;
};

// Run automatically on load
window.addEventListener("DOMContentLoaded", () => {
    // Inject seed data if not present
    if (!localStorage.getItem("heena_users_db")) {
        const seedUsers = [
            {
                name: "Ananya Patel",
                email: "ananya@example.com",
                phone: "9876543210",
                password: "password123",
                address: "Flat 4B, Silver Heights, Bandra West, Mumbai, 400050",
                favorites: [1, 4, 14],
                cart: [
                    { productId: 8, quantity: 2 },
                    { productId: 11, quantity: 1 }
                ],
                appointments: [
                    {
                        id: "APPT-889342",
                        date: "2026-07-02",
                        style: "Princess Cut Blouse",
                        urgency: "STANDARD",
                        price: 1550,
                        status: "Scheduled",
                        createdAt: "24/06/2026"
                    }
                ],
                orders: [
                    {
                        id: "ORD-128456",
                        items: [
                            { name: "French Chantilly Lace (1m)", price: 1500, quantity: 1 },
                            { name: "Elite Precision Shears (1pc)", price: 3200, quantity: 1 }
                        ],
                        total: 4700,
                        address: "Flat 4B, Silver Heights, Bandra West, Mumbai, 400050",
                        status: "Delivered",
                        createdAt: "10/05/2026"
                    }
                ]
            }
        ];
        window.saveUserDatabase(seedUsers);
    }
    
    // Sync guest cart to user cart if user is logged in
    const user = window.getCurrentUser();
    const guestCart = localStorage.getItem("heena_guest_cart");
    if (user && guestCart) {
        const items = JSON.parse(guestCart);
        items.forEach(item => {
            const idx = user.cart.findIndex(c => c.productId === item.productId);
            if (idx !== -1) {
                user.cart[idx].quantity += item.quantity;
            } else {
                user.cart.push(item);
            }
        });
        localStorage.removeItem("heena_guest_cart");
        window.saveCurrentUser(user);
    }
    
    // Update DOM
    window.syncHeaderDOM();
});
