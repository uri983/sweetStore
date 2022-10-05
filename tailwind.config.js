const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  purge: {
    content: ['./tailwind-safelist.txt'],
  },
  theme: {
    colors: {
      outline: 'hsla(200, 100%, 36%, 0.75)',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      white: colors.white,
      green: colors.green,
      pink: colors.pink,
      sweetPrimary: '#E63360',
      sweetSecondary: '#fffff',
      wp: '#28c444',
      fb: '#1771e6',
      insta: '#c40070',
      primary: {
        darkest: '#090602',
        darker: '#1c1a17',
        dark: '#8C8984',
        med: '#D9D5D0',
        light: '#F2EFEB',
        lighter: '#FAF8F5',
        lightest: '#FFFEFC',
      },
      accent: {
        default: '#E63360',
      },
      ok: {
        default: '#3d995e',
        faded: '#c5e7d1',
      },
      warning: {
        default: '#ffca38',
      },
      error: {
        default: '#e61c1c',
        faded: '#ffd6d6',
      },
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: {
      body: {
        provider: 'Google',
        name: 'Roboto',
        weight: 400,
        fallback:
          '-apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif',
      },
      heading: {
        provider: 'Google',
        name: 'Roboto',
        weight: 400,
        fallback:
          '-apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif',
      },
    },
    fontSize: {
      '2xs': '.60rem',
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
    },
    spacing: {
      px: '1px',
      '2px': '2px',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      18: '4.5rem',
      20: '5rem',
      22: '5.5rem',
      24: '6rem',
      26: '6.5rem',
      28: '7rem',
      32: '8rem',
      34: '8.5rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      56: '14rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
      112: '28rem',
      120: '30rem',
      128: '32rem',
      160: '40rem',
      256: '64rem',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '9/10': '90%',
      '25vh': '25vh',
      '80vh': '80vh',
      full: '100%',
      '100vh': '100vh',
      '6/5': '120%',
      min: 'min-content',
      max: 'max-content',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
      '-1': '-1',
      '-5': '-5',
    },
    minWidth: (theme) => ({
      ...theme('spacing'),
    }),
    maxWidth: (theme) => ({
      ...theme('spacing'),
    }),
    minHeight: (theme) => ({
      ...theme('spacing'),
    }),
    maxHeight: (theme) => ({
      ...theme('spacing'),
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      default: theme('colors.primary.med', 'currentColor'),
    }),
    inset: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
    }),
    rotate: {
      90: '90deg',
      180: '180deg',
    },
    extend: {
      boxShadow: (theme) => ({
        md: '0 2px 8px 0 rgba(0,0,0,0.08)',
        outline: `0 0 0 3px ${theme('colors.outline')}`,
      }),
      gridTemplateColumns: {
        '2-max': 'max-content 1fr',
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'first', 'last', 'odd', 'even'],
    margin: ['responsive', 'first', 'last'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    function ({ addUtilities, config, e }) {
      const rotateUtilities = Object.entries(config('theme.rotate')).map(
        ([key, value]) => {
          return {
            [`.${e(`rotate-${key}`)}`]: {
              transform: `rotate(${value})`,
            },
          };
        },
      );

      addUtilities(rotateUtilities, ['hover']);
    },
  ],
};
