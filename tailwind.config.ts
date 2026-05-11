import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          50: "#e8edf4",
          100: "#c5d0e0",
          200: "#9fb0ca",
          300: "#7990b4",
          400: "#5c79a4",
          500: "#3e6294",
          600: "#375a8c",
          700: "#2d4f81",
          800: "#234577",
          900: "#0B1F3A",
        },
        teal: {
          DEFAULT: "#0D7C7C",
          50: "#e1f4f4",
          100: "#b3e4e4",
          200: "#80d2d2",
          300: "#4dc0c0",
          400: "#27b3b3",
          500: "#0D7C7C",
          600: "#0b7070",
          700: "#096161",
          800: "#075353",
          900: "#043838",
        },
        gold: {
          DEFAULT: "#C9A84C",
          50: "#fdf8ec",
          100: "#f9eecf",
          200: "#f5e4ae",
          300: "#f0d98d",
          400: "#ecd175",
          500: "#C9A84C",
          600: "#c09b3e",
          700: "#b38a2f",
          800: "#a67a20",
          900: "#8f5e04",
        },
        offwhite: "#F7F5F1",
        slate: "#4A5568",
        lightTeal: "#e1f4f4",
        lightGold: "#fdf8ec",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
