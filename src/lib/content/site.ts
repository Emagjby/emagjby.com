import type { NavItem, SiteContent } from "$lib/types/site";

export const siteContent: SiteContent = {
    name: "Emagjby",
    title: "Emagjby",
    description:
        "Main public hub for Emagjby projects, ideas, and engineering work.",
    hero: {
        eyebrow: "Software, systems and experiments",
        heading: "Built to create things that should exist.",
        subheading:
            "Emagjby is the public home for projects, engineering work, and systems built with long-term intent.",
    },
    about: {
        title: "About",
        body: "Emagjby brings together software, systems, and experimentation. Some projects are polished, some are still forming, but all of them come from the same drive to build useful things and push ideas further.",
    },
    labs: {
        href: "https://labs.emagjby.com",
        callout: "More experimental and in-progress work lives in Labs.",
    },
    footer: {
        blurb: "Public home for Emagjby",
    },
};

export const navItems: NavItem[] = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Labs", href: "https://labs.emagjby.com", external: true },
];
