import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { ReactQueryProvider } from './ReactQueryProvider';

export const metadata = {
  title: 'Secoda Takehome',
  description: 'Secoda takehome assignemnt',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <head>
          <ColorSchemeScript />
          <link rel="shortcut icon" href="/favicon.svg" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
        </head>
        <body>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
