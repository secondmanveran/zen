const colors = require('tailwindcss/colors')

module.exports = (useDark = true) => ({
  content: ['./components/**/*.ts'],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.orange,
        success: colors.emerald,
        warning: colors.amber,
        error: colors.red,
        info: colors.info
      },
      borderColor: colors.slate[200],
      fontFamily: {
        sans: [
          'Poppins',
          '-apple-system',
          'BlinkMacSystemFont',
          'ui-sans-serif',
          'system-ui',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ]
      }
    }
  },
  plugins: useDark
    ? [
        ({ addBase, config }) => {
          addBase({
            html: {
              color: config('theme.colors.gray.900'),
              backgroundColor: 'white'
            },
            'html.dark': {
              color: config('theme.colors.gray.100'),
              backgroundColor: config('theme.colors.gray.900')
            },
            '*, ::before, ::after': {
              borderColor: colors.slate[200]
            },
            '.dark *, .dark ::before, .dark ::after': {
              borderColor: colors.slate[600]
            }
          })
        }
      ]
    : []
})
