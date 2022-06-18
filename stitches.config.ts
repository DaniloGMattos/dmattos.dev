import {
  blue,
  blueDark,
  cyan,
  cyanDark,
  lime,
  limeDark,
  plum,
  plumDark,
} from '@radix-ui/colors';
import { createStitches } from '@stitches/react';

export const { styled, theme, createTheme, getCssText, globalCss } =
  createStitches({
    theme: {
      colors: {
        ...plum,
        ...cyanDark,
        ...blueDark,
        ...limeDark,
      },
    },
  });

export const lightTheme = createTheme('light-theme', {
  colors: {
    ...plumDark,
    ...cyan,
    ...blue,
    ...lime,
  },
});

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  '@media (max-width: 1080)': {
    html: {
      fontSize: '93.75%',
    },
  },
  '@media (max-width: 720)': {
    html: {
      fontSize: '87.5%',
    },
  },
  body: {
    position: 'relative',
    background: '#020A13',
    backgroundImage: 'url(/universeBackground.png)',
    color: '$blue12',
  },
  'body, input, textarea, button': {
    font: '400 1rem  Roboto, sans-serif',
  },
  button: {
    cursor: 'pointer',
  },
  a: {
    color: ' inherit',
    textDecoration: 'none',
  },
});
