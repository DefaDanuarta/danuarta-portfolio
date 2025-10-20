import { Geologica } from "next/font/google";
import "./globals.css";

const geistSans = Geologica({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: [
    "100", // Thin
    "200", // Extra Light
    "300", // Light
    "400", // Regular
    "500", // Medium
    "600", // Semi Bold
    "700", // Bold
    "800", // Extra Bold
    "900", // Black
  ],
});

export const metadata = {
  title: "Defa Danuarta Portfolio",
  description: "Defa Danuarta personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} bg-neutral-900 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
