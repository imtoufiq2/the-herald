import { Source_Serif_4, Inter } from "next/font/google";

// Editorial serif — masthead, headlines, long-form H2, pull-quotes. Variable weight + italic.
export const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  style: ["normal", "italic"],
});

// Utility sans — nav, meta, category labels, buttons, controls, body copy.
export const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
