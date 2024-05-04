// Reviews.stories.tsx
import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import Reviews from '../components/Reviews';
import {ReviewsProps} from "../components/Reviews";

export default {
    title: 'Components/Reviews',
    component: Reviews,
} as Story<typeof Reviews>;

const Template: Story<typeof Reviews> = (args: ReviewsProps) => <Reviews {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    average: 4,
    totalCount: 117,
    href: '#'
};
