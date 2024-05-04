// Breadcrumb.stories.tsx
import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import Breadcrumb, {BreadcrumbsProps} from '../components/Breadcrumb';

export default {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
} as Story<typeof Breadcrumb>;

const Template: Story<typeof Breadcrumb> = (args: BreadcrumbsProps) => <Breadcrumb {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    breadcrumbs: [
        {id: 1, name: 'Men', href: '#'},
        {id: 2, name: 'Clothing', href: '#'}
    ],
    currentName: 'Basic Tee 6-Pack',
    currentHref: '#'
};
