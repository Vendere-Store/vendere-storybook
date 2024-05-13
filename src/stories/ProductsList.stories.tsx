// Import dependencies
import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ProductsList from "../components/ProductsList";
import {ProductProps} from "../components/ProductCard";

interface ProductsListProps {
    products: ProductProps[];
}

// Import the component

// Export default meta data for the story
export default {
    title: "Components/ProductsList",
    component: ProductsList,
} as Meta;


// Define the Template
const Template: Story<{products: ProductProps[]}> = (args: ProductsListProps) => <ProductsList {...args} />;

// Define the Default view
export const Default = Template.bind({});
Default.args = {
    products: [
        {
            id: 1,
            name: 'Earthen Bottle',
            href: '#',
            price: '$48',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
            id: 2,
            name: 'Nomad Tumbler',
            href: '#',
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            id: 3,
            name: 'Focus Paper Refill',
            href: '#',
            price: '$89',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 4,
            name: 'Machined Mechanical Pencil',
            href: '#',
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
    ],
};
