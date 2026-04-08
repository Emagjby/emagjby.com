import type { NavItem, SiteContent } from "$lib/types/site";

export const siteContent: SiteContent = {
    name: "Emagjby",
    title: "Emagjby",
    description:
        "Main public hub for Emagjby projects, ideas, and engineering work.",
    hero: {
        eyebrow: "Software, systems and experiments",
        heading: "Building software that deserves to exist.",
        subheading:
            "Emagjby is a public home for projects, systems, and engineering built to last.",
        primaryCta: {
            label: "Explore projects",
            href: "#projects",
        },
        secondaryCta: {
            label: "Visit Labs",
            href: "https://labs.emagjby.com",
            external: true,
        },
    },
    about: {
        title: "About",
        body: "Emagjby brings together software, systems, and experimentation. Some projects are polished, others are still forming, but all of them come from the same drive to build useful things and push ideas forward.",
    },
    labs: {
        href: "https://labs.emagjby.com",
        callout: "More experimental and in-progress work lives in Labs.",
    },
    footer: {
        blurb: "Public home for Emagjby",
        links: [
            {
                label: "GitHub",
                href: "https://github.com/Emagjby",
                external: true,
            },
            {
                label: "Labs",
                href: "https://labs.emagjby.com",
                external: true,
            },
        ],
    },
};

export const navItems: NavItem[] = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Labs", href: "https://labs.emagjby.com", external: true },
];
