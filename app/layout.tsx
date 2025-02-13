import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
export const metadata: Metadata = {
  title: "Insomniac",
  description: "Generated by Inzamam",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-custom">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
