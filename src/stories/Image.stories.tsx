import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Image, { ImageData } from '../components/Image'; // Ensure this path is correct

export default {
    title: 'Components/Image',
    component: Image,
    argTypes: {
        imageSrc: { control: 'text' },
        imageAlt: { control: 'text' },
    },
} as Meta<ImageData>;  // This ensures that your Storybook metadata is typed with the props of Image

const Template: Story<ImageData> = (args: ImageData) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
    imageSrc: 'https://via.placeholder.com/150',
    imageAlt: 'Placeholder Image'
} as ImageData;  // Explicitly type the args for better type checking

export const Large = Template.bind({});
Large.args = {
    imageSrc: 'https://via.placeholder.com/500x300',
    imageAlt: 'Large Placeholder Image'
} as ImageData;  // Same as above

export const FixedSizeImage = Template.bind({});
FixedSizeImage.args = {
    imageSrc: 'https://via.placeholder.com/500x300',
    imageAlt: 'Fixed Size Image',
    style: { width: '200px', height: '200px', display: 'flex' } // Set dimensions and use flex to manage image
};
