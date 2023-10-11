// SHOULD I BE EXPORTING INTERFACES?

export interface page {
    href: string,
    name: string,
    target?: "_blank"
};

interface mobileLink {
    link: page,
    icon: typeof import("*.svg"),
    alt: string
};

export interface ThreePaneContainer {
    description: string,
    hasButton: boolean,
    link?: page
    title: string,
    verticalText: string,
}

export interface HPHorizontalPaneData {
    content: ThreePaneContainer
    image: typeof import("*.avif"),
}

// TODO: MAYBE CAN DELETE TYPE
// NOT REQUIRED FOR MOCK DATA BUT WHEN THE DB IS BUILT I SHOULD HAVE THIS DATA TYPE AND FILTER THROUGH MENU BY TYPE TO POPULATE THE PAGE
export interface MenuItem {
    allergens?: string[],
    description?: string,
    image: typeof import("*.avif"),
    ingredients: string[],
    name: string,
    subtype: string[],
    type: 'Burger' | 'Sides' | 'Salads'
}

interface menu {
    burgers: MenuItem[],
    sides: MenuItem[],
    salads: MenuItem[]
}

// NAVIGATION BAR & FOOTER TEMP MOCK DATA
  
export let desktopPages: page[] = [
    {href: "/menu", name: "Menu"},
    {href: "/location", name: "Locations"},
    {href: "/about", name: "About"},
    {href: "https://www.shisoburger.com/careers", name: "Order", target: "_blank"},
    {href: "https://shop.shisoburger.com/", name: "Merch", target: "_blank"},
    {href: "/jobs", name: "Jobs"},
];

export let footerPages: page[] = [
    {href: "/", name: "Home"},
    {href: "/location", name: "Locations"},
    {href: "/menu", name: "Menu"},
    {href: "/about", name: "About"},
    {href: "/franchise", name: "Franchise"},
]

export let mobilePages: mobileLink[] = [
    {
        alt: "menu icon",
        icon: require("../assets/icons/icon-burger.svg"),
        link: {href: "/menu", name: "Menu"}
    },
    {
        alt: "location icon",
        icon: require("../assets/icons/icon-location.svg"),
        link: {href: "/location", name: "Locations"}
    },
    {
        alt: "order icon",
        icon: require("../assets/icons/icon-order.svg"),
        link: {href: "https://www.shisoburger.com/careers", name: "Order", target: "_blank"}
    }
];

// HOME PAGE TEMP MOCK DATA

export let HPHorizontalPanes: HPHorizontalPaneData[] = [
    { 
        content: {
            description: 'Shiso Burger has brought together the advantages of conventional burgers with the traditional Asian cuisine. Healthy gourmet burgers with that Asian finesse away from the fast food culture. We always prepare our food fresh – right before your eyes in our open kitchen.',
            hasButton: true,
            link: {
                href: '/about',
                name: 'LEARN WHAT MAKES US UNIQUE'
            },
            title: 'Healthy Asian Burgers for meat eaters and vegetarians',
            verticalText: 'CONCEPT & QUALITY'
        },
        image: require('../assets/images/man-cooking-burger.avif')
    },
    {
        content: {
            description: 'The combination of the finest Asian cuisine and the classic burger experience makes the heart of every meat lover beat faster. Vegetarians also get their money’s worth with us. We show you that a burger does not necessarily need meat to be delicious.',
            hasButton: true,
            link: {
                href: '/menu',
                name: 'SEE WHAT’S ON THE MENU',
            },
            title: 'Come and taste the best of two worlds',
            verticalText: 'WHAT’S FOR DINNER?'
        },
        image: require('../assets/images/burger-bao.avif'),
    }
]

export let newProductData: ThreePaneContainer = {
    description: 'Shiso Burger - Burger Family just got bigger! The BUL DAK Burger is now here, our spicy fried Chicken Burger. Only in Berlin Augustr.',
    hasButton: false,
    title: 'NEW BURGER - BUL DAK Burger',
    verticalText: 'MENU PRODUCT'
}

export let exploreData: ThreePaneContainer = {
    description: 'We pride ourselves not only in our food but also the unique experience of eating at one of our restaurants. Our journey began in Berlin, but these days you can enjoy Shiso Burgers in many cities around Europe and worldwide.',
    hasButton: true,
    link: {
        href: '/location',
        name: 'FIND A RESTAURANT'
    },
    title: 'Shiso Burger Locations around the World',
    verticalText: 'VISIT US'
}

export let franchiseData: ThreePaneContainer = {
    description: 'Would you like to cooperate with us and distribute the concept and products of Shiso Burger independently? Take this opportunity, and start your own business with food that stands out from the crowd.',
    hasButton: true,
    link: {
        href: '/franchise',
        name: 'BECOME A FRANCHISE PARTNER'
    },
    title: 'Build your own Business with Shiso Burger',
    verticalText: 'FRANCHISING'
}

// MENU MOCK DATA

let burgers: MenuItem[] = [
    {// HAMBURGER
        allergens: ['Gluten', 'Eggs', 'Soybeans', 'Sesame Seeds', 'Mustard'],
        image: require('../assets/images/burgers/hamburger.avif'),
        ingredients: ['Angus Beef Patty', 'Lettuce', 'Pickle', 'Tomato', 'Red Onions', 'Mayo', 'Ketchup'],
        name: 'Hamburger',
        subtype: ['Mild', 'Beef'],
        type: 'Burger'
    },
    {// CHEESEBURGER
        allergens: ['Gluten', 'Eggs', 'Soybeans', 'Sesame Seeds', 'Lactose', 'Mustard'],
        image: require('../assets/images/burgers/cheeseburger.avif'),
        ingredients: ['Angus Beef Patty', 'Cheddar Cheese', 'Lettuce', 'Pickle', 'Tomato', 'Red Onions', 'Mayo', 'Ketchup'],
        name: 'Cheeseburger',
        subtype: ['Mild', 'Beef'],
        type: 'Burger'
    },
    {// CHILI LEMON BURGER
        allergens: ['Gluten', 'Eggs', 'Soybeans', 'Sesame Seeds', 'Lactose', 'Mustard'],
        description: 'This is our favourite first-timer choice, giving you the perfect impression of what Shiso Burger is all about.',
        image: require('../assets/images/burgers/chili-lemon-burger.avif'),
        ingredients: ['Angus Beef Patty', 'Cheddar Cheese', 'Lettuce', 'Pickle', 'Tomato', 'Red Onions', 'Ketchup', 'Cliantro', 'Lemon Mayo', 'Chili Sauce'],
        name: 'Chili Lemon Burger',
        subtype: ['Beef', 'Spicy', 'Experimental'],
        type: 'Burger'
    },
    {// BULGOGI BURGER
        allergens: ['Gluten', 'Eggs', 'Soybeans', 'Sesame Seeds'],
        image: require('../assets/images/burgers/bulgogi-burger.avif'),
        ingredients: ['Thin Slices of marinated Beef', 'Lettuce', 'Fried Onions', 'Chili Mayo', 'Kimchi Marinade', 'Teriyaki Sauce'],
        name: 'Bulgogi Burger',
        subtype: ['Beef', 'Experimental', 'Spicy'],
        type: 'Burger'
    },
    {// SHISO BURGER
        allergens: ['Gluten', 'Eggs', 'Sesame Seeds', 'Fish'],
        image: require('../assets/images/burgers/shiso-burger.avif'),
        ingredients: ['Marinated Tuna Patty', 'Shiso Leaves', 'Lettuce', 'Red Onions', 'Cliantro', 'Chili Mayo', 'Teriyaki Sauce'],
        name: 'Shiso Burger',
        subtype: ['Seafood', 'Experimental', 'Spicy'],
        type: 'Burger'
    },
    {// TOAD BURGER
        allergens: ['Gluten', 'Eggs', 'Sesame Seeds', 'Lactose'],
        image: require('../assets/images/burgers/toad-burger.avif'),
        ingredients: ['Portobello Mushroom', 'Blue Cheese', 'Lettuce', 'Tomato', 'Red Onions', 'Mayo', 'Ketchup'],
        name: 'Toad Burger',
        subtype: ['Vegetarian', 'Mild', 'Experimental'],
        type: 'Burger'
    },
    {// EBI BURGER
        allergens: ['Gluten', 'Eggs', 'Sesame Seeds', 'Crustacea', 'Mustard'],
        image: require('../assets/images/burgers/ebi-burger.avif'),
        ingredients: ['Crispy fried Prawn Patty', 'Lettuce', 'Tomato', 'Honey Ginger Sauce', 'Red Onions', 'Chili Mayo'],
        name: 'Ebi Burger',
        subtype: ['Seafood', 'Experimental', 'Spicy'],
        type: 'Burger'
    },
    {// SALMON BURGER
        allergens: ['Gluten', 'Eggs', 'Sesame Seeds', 'Lactose', 'Fish'],
        image: require('../assets/images/burgers/salmon-burger.avif'),
        ingredients: ['Salmon Fillet', 'Lettuce', 'Tomato', 'Red Onions', 'Cream Cheese', 'Miso Sauce', 'Teriyaki Sauce'],
        name: 'Salmon Burger',
        subtype: ['Seafood', 'Experimental', 'Mild'],
        type: 'Burger'
    },
    {// VEGGIE BURGER
        allergens: ['Gluten', 'Eggs', 'Soybeans', 'Sesame Seeds', 'Lactose'],
        image: require('../assets/images/burgers/veggie-burger.avif'),
        ingredients: ['Tofu Patty', 'Eggplant', 'Cheddar Cheese', 'Lettuce', 'Tomato', 'Red Onions', 'Mayo', 'Ketchup'],
        name: 'Veggie Burger',
        subtype: ['Vegetarian', 'Mild'],
        type: 'Burger'
    },
]

let sides: MenuItem[] = [
    {// HOMEMADE FRIES
        description: 'This is our favourite first-timer choice, giving you the perfect impression of what Shiso Burger is all about.',
        image: require('../assets/images/sides/homemade-fries.avif'),
        ingredients: ['Potatoes', 'Sea Salt'],
        name: 'Homemade Fries',
        subtype: ['Vegetarian', 'Vegan'],
        type: 'Sides'
    },
    {// SWEET POTATO FRIES
        allergens: ['Gluten'],
        description: 'This is our favourite first-timer choice, giving you the perfect impression of what Shiso Burger is all about.',
        image: require('../assets/images/sides/sweet-potato-fries.avif'),
        ingredients: ['Sweet Potatoes', 'Sea Salt'],
        name: 'Sweet Potato Fries',
        subtype: ['Vegetarian', 'Vegan', 'Experimental'],
        type: 'Sides'
    },
    {// COLESLAW
        allergens: ['Sesame Seeds', 'Lactose'],
        image: require('../assets/images/sides/coleslaw.avif'),
        ingredients: ['White Cabbage', 'Carrots', 'Coleslaw Creme', 'Lemon Juice', 'Black Pepper'],
        name: 'Coleslaw',
        subtype: ['Mild', 'Vegetarian'],
        type: 'Sides'
    },
    {// KIMCHI
        allergens: ['Gluten', 'Soybeans'],
        image: require('../assets/images/sides/kimchi.avif'),
        ingredients: ['Chinese Cabbage', 'Leeks', 'Spring Onion', 'Kimchi Marinade'],
        name: 'Kimchi',
        subtype: ['Spicy', 'Experimental'],
        type: 'Sides'
    },
    {// EDAMAME BEANS
        allergens: ['Soybeans'],
        image: require('../assets/images/sides/edamame-beans.avif'),
        ingredients: ['Soybeans', 'Sea Salt'],
        name: 'Edamame Beans',
        subtype: ['Vegetarian', 'Vegan', 'Experimental'],
        type: 'Sides'
    }
]

let salads: MenuItem[] = [
    {// PURE SALAD
        allergens: ['Soybeans'],
        image: require('../assets/images/salads/pure-salad.avif'),
        ingredients: ['Mix Salad', 'Red Onions', 'Tomato', 'Teriyaki Dressing', 'Fried Mushrooms'],
        name: 'Pure Salad',
        subtype: ['Vegetarian', 'Vegan', 'Mild'],
        type: 'Salads' 
    },
    {// PURE SALAD + TOFU
        allergens: ['Soybeans'],
        image: require('../assets/images/salads/pure-salad-tofu.avif'),
        ingredients: ['Mix Salad', 'Red Onions', 'Tomato', 'Teriyaki Dressing', 'Fried Mushrooms', 'Friend Marinated Tofu'],
        name: 'Pure Salad + Tofu',
        subtype: ['Vegetarian', 'Vegan', 'Mild'],
        type: 'Salads' 
    },
    {// PURE SALAD + BULGOGI
        allergens: ['Soybeans', 'Gluten'],
        image: require('../assets/images/salads/pure-salad-bulgogi.avif'),
        ingredients: ['Mix Salad', 'Red Onions', 'Tomato', 'Teriyaki Dressing', 'Fried Mushrooms', 'Thin Slices of marinated Beef'],
        name: 'Pure Salad + Bulgogi',
        subtype: ['Beef', 'Experimental', 'Spicy'],
        type: 'Salads' 
    },
    {// PURE SALAD + SALMON
        allergens: ['Soybeans', 'Fish'],
        image: require('../assets/images/salads/pure-salad-salmon.avif'),
        ingredients: ['Mix Salad', 'Red Onions', 'Tomato', 'Teriyaki Dressing', 'Fried Mushrooms', 'Salmon Fillet'],
        name: 'Pure Salad + Salmon',
        subtype: ['Mild', 'Seafood'],
        type: 'Salads' 
    }
]

export let theMenu: menu = {
    burgers: burgers,
    sides: sides,
    salads: salads
}