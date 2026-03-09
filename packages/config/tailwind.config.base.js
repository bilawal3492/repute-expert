/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#0A0A0A",
          secondary: "#111111",
          surface: "rgba(255,255,255,0.04)",
        },
        foreground: {
          primary: "#FFFFFF",
          secondary: "rgba(255,255,255,0.5)",
          tertiary: "rgba(255,255,255,0.3)",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
          strong: "rgba(255,255,255,0.16)",
        },
        accent: {
          DEFAULT: "#FFFFFF",
          foreground: "#0A0A0A",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 6rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 4vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.75rem, 2.5vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "stat-xl": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "count-up": "countUp 1.5s ease-out forwards",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        countUp: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      backdropBlur: {
        nav: "12px",
      },
      spacing: {
        "section-y": "clamp(60px, 8vw, 120px)",
        "section-y-sm": "clamp(40px, 5vw, 80px)",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};
