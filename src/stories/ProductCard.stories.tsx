import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import ProductCard, {ProductProps} from '../components/ProductCard';

export default {
    title: 'Shop/Product',
    component: ProductCard,
} as Story<typeof ProductCard>;

const Template: Story<typeof ProductCard> = (args: ProductProps) => <ProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    price: '$35.00',
    imageSrc: 'https://example.com/tee.jpg',
    imageAlt: 'A basic tee',
};
