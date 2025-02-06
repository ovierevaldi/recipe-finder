import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recipe Finder",
  description: "One place to suggest what you can cook based on your ingredients!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="container mx-auto p-4 space-y-8">
          <h1 className="text-5xl text-center mb-8">Recipe Finder</h1>
          <p className="text-2xl text-center">One place to suggest what you can cook based on your ingredients!</p>
          {children}
        </div>
      </body>
    </html>
  );
}
