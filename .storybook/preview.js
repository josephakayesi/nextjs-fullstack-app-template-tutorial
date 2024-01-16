// @ts-check
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import * as NextImage from 'next/image';
import React from 'react';
import '../src/app/globals.css';
import { AuthProvider } from '../src/state/auth/AuthContext';

const BREAKPOINTS_INT = {
    xs: 375,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
};

const customViewports = Object.fromEntries(
    Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
        console.log(val);
        return [
            key,
            {
                name: key,
                styles: {
                    width: `${val}px`,
                    height: `${(idx + 5) * 10}vh`,
                },
            },
        ];
    })
);

// Allow Storybook to handle Next's <Image> component
const OriginalNextImage = NextImage.default;

const CustomNextImage = (props) => {
    return React.createElement(OriginalNextImage, {
        ...props,
        unoptimized: true,
    });
};

export const decorators = [
    (Story) => {
        return React.createElement(
            AuthProvider,
            null,
            React.createElement(Story, null)
        );
    },
];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewport: { viewports: customViewports },
    layout: 'fullscreen',
    nextRouter: {
        Provider: RouterContext.Provider,
    },
    // Override the default NextImage component
    previewTabs: {
        canvas: {
            Example: CustomNextImage,
        },
    },
};
