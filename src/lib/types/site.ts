export type NavItem = {
    label: string;
    href: string;
    external?: boolean;
};

export type Project = {
    name: string;
    description: string;
    href?: string;
    category?: string;
};

export type SiteContent = {
    name: string;
    title: string;
    description: string;
    hero: {
        eyebrow?: string;
        heading: string;
        subheading: string;
    };
    about: {
        title: string;
        body: string;
    };
    labs: {
        href: string;
        callout: string;
    };
    footer: {
        blurb: string;
    };
};
