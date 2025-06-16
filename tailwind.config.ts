import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: { // Adjusted default padding to match HTML structure more closely
        DEFAULT: '1rem', // px-4
        sm: '1.5rem',    // sm:px-6
        lg: '2rem',     // lg:px-8
      },
      screens: {
        "2xl": "1400px", // Default from shadcn
      },
    },
    extend: {
      fontFamily: {
        // Set 'Plus Jakarta Sans' as the primary body font
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'], // Overriding default sans
        headline: ['"Plus Jakarta Sans"', 'sans-serif'], // Explicitly for headlines
      },
      colors: {
        // Using HSL variables defined in globals.css for consistency with ShadCN
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        // Direct color definitions from the HTML, can be used with e.g. text-blue-600
        blue: {
          '50': '#EFF6FF',
          '100': '#DBEAFE',
          '200': '#BFDBFE',
          '500': '#3B82F6',
          '600': '#2563EB',
          '700': '#1D4ED8',
          '800': '#1E40AF',
        },
        gray: {
          '50': '#F9FAFB',
          '100': '#F3F4F6',
          '200': '#E5E7EB',
          '300': '#D1D5DB',
          '400': '#9CA3AF',
          '500': '#6B7280',
          '600': '#4B5563',
          '800': '#1F2937',
          '900': '#111827',
        },
        green: { // For "Beli Sekarang" Basic
          '600': '#16A34A',
          '700': '#15803D',
        }
      },
      spacing: { // Match HTML specific spacings if necessary
        '18': '4.5rem', // for h-18
      },
      borderRadius: {
        lg: 'var(--radius)', //0.5rem
        md: 'calc(var(--radius) - 2px)', //0.375rem
        sm: 'calc(var(--radius) - 4px)', //0.25rem
        xl: '0.75rem', // Added for rounded-xl
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
