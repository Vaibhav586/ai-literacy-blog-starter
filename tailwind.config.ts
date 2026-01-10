import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': 'var(--neon-cyan)',
        'neon-purple': 'var(--neon-purple)',
        'deep-space': 'rgb(var(--background-start-rgb))',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'rgb(var(--foreground-rgb))',
            a: {
              color: 'var(--neon-cyan)',
              '&:hover': {
                color: 'var(--neon-purple)',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config