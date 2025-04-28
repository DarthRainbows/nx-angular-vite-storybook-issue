import { StorybookConfig } from '@analogjs/storybook-angular';

const config: StorybookConfig = {
  stories: ['../**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: ['@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: {
    name: '@analogjs/storybook-angular',
    options: {},
  },
};

export default config;
