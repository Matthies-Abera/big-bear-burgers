interface page {
    href: string,
    name: string,
    target?: "_blank"
};
  
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

interface mobileLink {
    link: page,
    icon: typeof import("*.svg"),
    alt: string
};

export let mobilePages: mobileLink[] = [
    {
        link: {href: "/menu", name: "Menu"},
        icon: require("../assets/icons/icon-burger.svg"),
        alt: "menu icon"
    },
    {
        link: {href: "/location", name: "Locations"},
        icon: require("../assets/icons/icon-location.svg"),
        alt: "location icon"
    },
    {
        link: {href: "https://www.shisoburger.com/careers", name: "Order", target: "_blank"},
        icon: require("../assets/icons/icon-order.svg"),
        alt: "order icon"
    }
];

// SHOULD I BE EXPORTING INTERFACES?
export interface HPHorizontalPaneData {
    image: typeof import("*.avif"),
    title: string,
    description: string,
    verticalText: string,
    link: page
}

export let HPHorizontalPanes: HPHorizontalPaneData[] = [
    {
        image: require('../assets/images/man-cooking-burger.avif'),
        title: 'Healthy Asian Burgers for meat eaters and vegetarians',
        description: 'Shiso Burger has brought together the advantages of conventional burgers with the traditional Asian cuisine. Healthy gourmet burgers with that Asian finesse away from the fast food culture. We always prepare our food fresh – right before your eyes in our open kitchen.',
        verticalText: 'CONCEPT & QUALITY',
        link: {
            href: '/about',
            name: 'LEARN WHAT MAKES US UNIQUE'
        }
    },
    {
        image: require('../assets/images/burger-bao.avif'),
        title: 'Come and taste the best of two worlds',
        description: 'The combination of the finest Asian cuisine and the classic burger experience makes the heart of every meat lover beat faster. Vegetarians also get their money’s worth with us. We show you that a burger does not necessarily need meat to be delicious.',
        verticalText: 'WHAT’S FOR DINNER?',
        link: {
            href: '/menu',
            name: 'SEE WHAT’S ON THE MENU',
        }
    }
]