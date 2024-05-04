import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import Button, { ButtonProps } from '../components/Button'; // Adjust the import path as needed

// Define the default export to configure metadata for the story
const meta: Meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    info: {
      inline: false, // Display source code inline
      source: true, // Hide source code button
    },
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'danger', 'info']
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    },
    onClick: { action: 'clicked' }
  },
  args: {
    onClick: action('clicked')
  },
};

export default meta;

// Create a template that can be reused to create different stories
const Template: Story<ButtonProps> = (args: any) => (<Button {...args} />);


// Primary button story
export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Primary Button',
};

// Secondary button story
export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Secondary Button',
};

// Danger button story
export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  label: 'Danger Button',
};

// Info button story
export const Info = Template.bind({});
Info.args = {
  type: 'info',
  label: 'Info Button',
};

// Large button story
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large Button',
};

// Small button story
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small Button',
};
