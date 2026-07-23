import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Bricolage Grotesque", "Outfit", "sans-serif"],
        serif: ["Instrument Serif", "serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        orangePrimary: "#EB392F",
        orangeSecondary: "#FF8000",
        darkText: "#131B2A",
        grayText: "#4B5563",
        lightBg: "#FFFFFF",
        lightBgSec: "#F8FAFC",
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
        // V Agency brand colors
        v: {
          yellow: "hsl(var(--v-yellow))",
          orange: "hsl(var(--v-orange))",
          red: "hsl(var(--v-red))",
          "dark-red": "hsl(var(--v-dark-red))",
          cream: "hsl(var(--v-cream))",
          pink: "hsl(var(--v-pink))",
          navy: "hsl(var(--v-navy))",
        },
        // Industry card colors
        industry: {
          cyan: "hsl(var(--industry-cyan))",
          yellow: "hsl(var(--industry-yellow))",
          mint: "hsl(var(--industry-mint))",
          peach: "hsl(var(--industry-peach))",
          lime: "hsl(var(--industry-lime))",
          pink: "hsl(var(--industry-pink))",
          lavender: "hsl(var(--industry-lavender))",
          green: "hsl(var(--industry-green))",
          blue: "hsl(var(--industry-blue))",
          cream: "hsl(var(--industry-cream))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
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
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1) rotate(0deg)", borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "33%": { transform: "translate(30px, -50px) scale(1.1) rotate(120deg)", borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9) rotate(240deg)", borderRadius: "60% 40% 30% 70% / 70% 30% 50% 40%" },
          "100%": { transform: "translate(0px, 0px) scale(1) rotate(360deg)", borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "float-slow": {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(3deg)" },
        },
        "float-med": {
          "0%,100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-8px) translateX(4px)" },
        },
        twinkle: {
          "0%,100%": { opacity: "0.2", transform: "scale(0.6)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        blob: "blob 22s infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        "float-med": "float-med 5s ease-in-out infinite",
        twinkle: "twinkle 2.4s ease-in-out infinite",
        "spin-slow": "spin-slow 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
