import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

// this part is for the Sora font
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// this part is for the page title
export const metadata: Metadata = {
  title: "Edsel Paul Ortiz - Portfolio",
  description: "Portfolio of Edsel Paul Ortiz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
    </html>
  );
}