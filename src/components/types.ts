export interface Page {
    name: string;
    href: string;
}

export interface Item {
    name: string;
    href: string;
}

export interface FeaturedItem {
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
}

export interface Section {
    id: string;
    name: string;
    items: Item[];
}

export interface Category {
    id: string;
    name: string;
    featured: FeaturedItem[];
    sections: Section[];
}

export interface Navigation {
    pages: Page[];
    categories: Category[];
}
