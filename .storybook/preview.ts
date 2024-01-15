import { RouterContext } from 'next/dist/shared/lib/router-context';
import * as NextImage from 'next/image';
import '../pages/globals.css';
import { AuthProvider } from'../state/auth/AuthContext';

interface Viewport {
  name: string;
  styles: {
    width: string;
    height: string;
  };
}

const BREAKPOINTS_INT: Record<string, number> = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const customViewports: Record<string, Viewport> = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
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

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props:
 
any) =>
 
<OriginalNextImage {...props} unoptimized />,
});

export
 
const decorators = [
  (Story: any) => (
    <AuthProvider>
      <Story />
    </AuthProvider>
  ),
];

export
 
const parameters: Parameters = {
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
};