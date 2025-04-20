import type {StorybookConfig} from '@storybook/react-vite';

const config: StorybookConfig = {
    "stories": [
        "../lib/**/*.mdx",
        "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        "@storybook/addon-themes"
    ],
    "framework": {
        "name": "@storybook/react-vite",
        "options": {
            "builder": {
                "viteConfigPath": ".storybook/vite.config.ts"
            },
        },
    },
    "staticDirs": ["../public"]
};
export default config;