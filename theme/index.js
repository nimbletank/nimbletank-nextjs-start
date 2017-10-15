import DesignSystem from 'design-system-utils'
import colorPalette from './colorPalette'

export const theme = {
  breakpoints: [
    32, 48, 64
  ],
  space: [
    0, 6, 12, 18, 24
  ],
  fontSizes: [
    12, 16, 18, 24, 36, 72
  ],
  colors: {
    black: '#111',
    blue: '#07c',
  }
}

export const myDesignSystem = {
  settings: {
    useModularScale: true,
    fontSizeUnit: 'rem',
  },

  type: {
    baseFontSize: 20,

    sizes: {
      xs: -2,
      s: -1,
      base: 0, // [default] p, h5, h6
      m: 1, // h4
      l: 2, // h3
      xl: 3, // h2
      xxl: 4, // h1
    },

    modularscale: {
      base: 20,
      ratio: 1.5,
    },

    fontFamily: {
      system:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
      sans: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      serif: 'Georgia, "Times New Roman", Times, serif',
      mono: 'Menlo, Monaco, "Courier New", monospace',
    },

    // font-family-base: ko-font(system),
    // font-family-headings: ko-font(serif),
    lineHeight: {
      headings: 1.1,
    },

    fontWeight: {
      normal: 300, // Useful to set here if using anything other than `normal`
      bold: 'bold', // Useful to set here when bold webfonts come as 400 font-weight.
      headings: 'bold', // instead of browser default, bold
    },
  },

  colorPalette,

  breakpoints: {
    s: 300,
    m: 500,
    l: 800,
  },

  zIndex: {
    low: 10,
    mid: 100,
    high: 1000,
  },

  spacing: {
    baseline: 20,
    padding: '0.3em',
    scale: [0, 8, 16, 24, 32, 40],
  },

  layout: {
    gutter: 20,
    maxWidth: 1200,
    grid: {
      columnCount: 12,
    },
  },

  transition: {
    default: {
      duration: '300ms',
      timing: 'cubic-bezier(0.77, 0, 0.175, 1)',
      transition: 'all $default-transition-duration $default-transition-timing',
    },
  },

  animation: {},

  borderRadius: '0.3em',

  border: {
    default: '1px solid #ddd'
  }
}

export const ds = new DesignSystem(myDesignSystem)

