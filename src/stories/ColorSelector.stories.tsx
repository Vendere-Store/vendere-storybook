import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import ColorSelector, {ColorSelectorProps} from '../components/ColorSelector';

export default {
    title: 'Components/ColorSelector',
    component: ColorSelector,
} as Story<typeof ColorSelector>;

const Template: Story<typeof ColorSelector> = (args: ColorSelectorProps) => <ColorSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' }
    ]
};
