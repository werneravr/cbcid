/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
      },
      colors: {
        border: 'oklch(0.92 0.01 245)',
        background: 'oklch(0.99 0.005 85)',
        foreground: 'oklch(0.20 0.07 245)',
        primary: 'oklch(0.28 0.07 245)',
        'primary-foreground': 'white',
        secondary: 'oklch(0.75 0.15 70)',
        'secondary-foreground': 'oklch(0.20 0.07 245)',
        accent: 'oklch(0.50 0.15 245)',
        'accent-foreground': 'white',
        muted: 'oklch(0.45 0.04 245)',
        'muted-foreground': 'oklch(0.60 0.05 245)',
        destructive: 'oklch(0.63 0.26 29)',
        'destructive-foreground': 'white',
      },
      spacing: {
        container: '1.25rem',
      },
    },
  },
  plugins: [],
}
