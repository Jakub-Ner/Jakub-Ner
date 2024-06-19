export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Jakub Ner - Portfolio',
    subtitle: 'Jakub Ner projects, teams and ideas',
    description: 'Showcase of my projects, teams and ideas. I am a software engineer with a passion for building products that push the boundaries and are useful to others.',
    image: {
        src: '/me.jpeg',
        alt: 'Jakub Ner - Portfolio'
    },
    headerNavLinks: [
        {
            text: 'About me',
            href: '/'
        },
        {
            text: 'Citified',
            href: '/citified'
        },
        {
            text: 'Pipelon',
            href: '/pipelon'
        },
        {
            text: 'Featured Projects',
            href: '/featured-projects'
        },
    ],
    footerNavLinks: [
        {
            text: 'Dante Theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/jakub-ner-131714187/'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/kubaner2803/'
        },
        {
            text: 'GitHub',
            href: 'https://www.github.com/jakub-ner'
        },
        {
            text: 'ArtStation',
            href:'https://www.artstation.com/kuba_ner'
        },
    ],
    hero: {
        title: 'Hi There & Welcome to My Corner of the Web!',
        text: 'I\'m **Jakub Ner**' +
            '',
        // image: {
        //     src: '/me.jpeg',
        //     alt: 'A person sitting at a desk in front of a computer'
        // },
        // actions: [
        //     {
        //         text: 'Get in Touch',
        //         href: '/contact'
        //     }
        // ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
