import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rushi Kedhar Konduru | Software Engineer & AI/ML Enthusiast",
  description: "Portfolio of Rushi Kedhar Konduru - MS CS Student at University of Houston. Full-stack developer specializing in AI/ML, React, Python, and cloud technologies. Building intelligent systems and scalable applications.",
  keywords: ["Rushi Kedhar", "Software Engineer", "AI/ML", "Full Stack Developer", "React", "Python", "University of Houston"],
  authors: [{ name: "Rushi Kedhar Konduru" }],
  metadataBase: new URL('https://rushikedhar.info'),
  openGraph: {
    title: "Rushi Kedhar Konduru | Software Engineer",
    description: "Full-stack developer and AI/ML enthusiast building intelligent systems",
    type: "website",
    url: "https://rushikedhar.info",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
