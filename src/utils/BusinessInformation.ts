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