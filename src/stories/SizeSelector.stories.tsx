import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import SizeSelector, {SizeSelectorProps} from "../components/SizeSelector";

export default {
    title: 'Components/SizeSelector',
    component: SizeSelector,
} as Story<typeof SizeSelector>;

const Template: Story<typeof SizeSelector> = (args: SizeSelectorProps) => <SizeSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
    sizes: [
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: false }, // Example of out of stock
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: 'XXL', inStock: true },
    ]
};
