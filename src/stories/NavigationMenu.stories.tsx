// navigation.story.jsx

import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { categories } from "../mockData/categories";
import { pages } from "../mockData/pages";
import Navigation from "../components/shared/Navigation";

export default {
    title: 'Components/Navigation',
    component: Navigation,
} as Meta;

const Template: Story<typeof Navigation> = (args: any) => <Navigation {...args} />;


export const Default = Template.bind({});
Default.args = {
    categories,
    pages,
};
