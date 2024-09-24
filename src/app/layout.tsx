import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';



export const metadata: Metadata = {
  title: "Resource",
  description: "My resources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  )
}
