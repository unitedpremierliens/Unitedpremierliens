import type { Config } from "tailwindcss";

// NOTE: the `teal` token below is the brand's bright-blue accent color
// (sampled from the logo), not literal teal. The key name is kept as `teal`
// so that existing `teal-*` utility classes across components don't need
// to be renamed — feel free to rename to `accent` if you prefer.

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette sampled from the United Premier Liens logo
        // (deep navy fading into a bright medical blue).
        navy: {
          950: "#060D1F",
          900: "#0B1B3A",
          800: "#112958",
          700: "#163A78",
          600: "#1B4C9C",
        },
        teal: {
          50: "#EBF3FE",
          100: "#D3E5FD",
          300: "#8FBBF5",
          400: "#5A96EC",
          500: "#2E71DE",
          600: "#215BC0",
          700: "#1A489C",
        },
        ink: {
          900: "#0A0F1C",
          700: "#374151",
          500: "#6B7280",
          300: "#D1D5DB",
          100: "#F3F4F6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(120% 120% at 50% 0%, rgba(46,113,222,0.16) 0%, rgba(11,27,58,0) 60%)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(11,27,58,0.25)",
        glow: "0 0 0 1px rgba(46,113,222,0.18), 0 8px 30px rgba(46,113,222,0.18)",
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
