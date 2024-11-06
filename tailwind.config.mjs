/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
        prose: "hsl(var(--tw-prose-body))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        mono: ["Red Hat Mono Variable", "monospace"],
      },
      keyframes: {
        appear: {
          "0%": { opacity: 0, transform: "translateY(400px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        cardAppear: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "50%": { transform: "translateY(-10px)", opacity: 0.8 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        heartbeat: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        appear: "appear 1s ease-in-out both",
        cardAppear: "cardAppear 1s ease-in-out both",
        fadeIn: "fadeIn 1s ease-in-out both",
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "hsl(var(--default-color))",
            maxWidth: "70ch",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
