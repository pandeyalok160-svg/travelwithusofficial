import "./globals.css";

import { Playfair_Display, Poppins } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadataBase = new URL("https://travelwithusofficial.com");

export const metadata = {
  title: {
    default: "Travel With Us",
    template: "%s | Travel With Us",
  },
  description:
    "Luxury travel experiences and premium holiday packages to Dubai, Malaysia, and Sri Lanka.",
  keywords: [
    "luxury travel",
    "Dubai tour packages",
    "Malaysia vacation",
    "Sri Lanka holiday",
    "travel packages",
    "holiday tour",
  ],
  openGraph: {
    title: "Travel With Us",
    description:
      "Luxury travel experiences and premium holiday packages to Dubai, Malaysia, and Sri Lanka.",
    siteName: "Travel With Us",
    type: "website",
    images: [
      {
        url: "/images/logo-removebg.png",
        alt: "Travel With Us Official logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel With Us",
    description:
      "Luxury travel experiences and premium holiday packages to Dubai, Malaysia, and Sri Lanka.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
