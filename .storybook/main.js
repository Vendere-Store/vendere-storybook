/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  // stories: [
  //   "../stories/**/*.mdx",
  //   "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  // ],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    '@storybook/addon-storysource'
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
