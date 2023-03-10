module.exports = {
  "stories": [
    "../src/**/**/*.stories.mdx",
    "../src/**/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  "viteFinal": (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/chapa-ui/'
    }

    return config
  }
}