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